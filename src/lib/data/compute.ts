import { CONTRIBUTION_USD, NORMALIZED_BASE } from "../config.js";
import type { Pick } from "../../content/picks.js";
import type {
  PriceSeries,
  PickStats,
  PortfolioStats,
  PortfolioView,
} from "./types.js";
import { resolveEntryDate } from "./calendar.js";

/** CAGR suppressed (returns null) if position age < 365 days */
function computeCAGR(
  startVal: number,
  endVal: number,
  startDate: string,
  endDate: string
): number | null {
  const years =
    (new Date(endDate + "T00:00:00Z").getTime() -
      new Date(startDate + "T00:00:00Z").getTime()) /
    (365.25 * 24 * 3600 * 1000);
  if (years < 1.0) return null;
  return Math.pow(endVal / startVal, 1 / years) - 1;
}

/**
 * Build a date-indexed lookup map from a price series for O(1) access.
 */
function buildPriceMap(series: PriceSeries[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const row of series) {
    map.set(row.date, row.adjClose);
  }
  return map;
}

/**
 * Compute stats for a single pick against the benchmark.
 * benchmarkSeries: full series for ^SP500TR.
 */
export function computePickStats(
  pick: Pick,
  pickSeries: PriceSeries[],
  benchmarkSeries: PriceSeries[]
): PickStats {
  // Resolve entry date and price (last trading day on or before quarterEnd)
  const { date: entryDate, price: entryPrice } = resolveEntryDate(
    pick.quarterEnd,
    pickSeries
  );
  const { price: benchmarkEntryPrice } = resolveEntryDate(
    pick.quarterEnd,
    benchmarkSeries
  );

  const pickMap = buildPriceMap(pickSeries);
  const benchmarkMap = buildPriceMap(benchmarkSeries);

  // Current (latest) prices
  const latestPick = pickSeries[pickSeries.length - 1];
  const latestBenchmark = benchmarkSeries[benchmarkSeries.length - 1];
  const currentPrice = latestPick.adjClose;
  const currentDate = latestPick.date;

  // Returns (decimal)
  const cumReturn = currentPrice / entryPrice - 1;
  const benchmarkReturn = latestBenchmark.adjClose / benchmarkEntryPrice - 1;
  const alpha = cumReturn - benchmarkReturn;

  // CAGR
  const cagr = computeCAGR(entryPrice, currentPrice, entryDate, currentDate);

  // Build chart data: all dates from entryDate to currentDate, indexed to 100
  const allDates = pickSeries
    .filter((r) => r.date >= entryDate)
    .map((r) => r.date);

  const chartDates: string[] = [];
  const chartPickValues: number[] = [];
  const chartBenchmarkValues: number[] = [];

  for (const date of allDates) {
    const pPrice = pickMap.get(date);
    const bPrice = benchmarkMap.get(date);
    if (pPrice == null) continue;
    // For benchmark, use the last known price if date is missing (non-trading day)
    const bVal =
      bPrice != null
        ? (bPrice / benchmarkEntryPrice) * 100
        : chartBenchmarkValues[chartBenchmarkValues.length - 1] ?? 100;

    chartDates.push(date);
    chartPickValues.push((pPrice / entryPrice) * 100);
    chartBenchmarkValues.push(bVal);
  }

  return {
    id: pick.id,
    ticker: pick.ticker,
    companyName: pick.companyName,
    quarterLabel: pick.quarterLabel,
    entryDate,
    entryPrice,
    currentPrice,
    cumReturn,
    cagr,
    benchmarkReturn,
    alpha,
    chartDates,
    chartPickValues,
    chartBenchmarkValues,
  };
}

/**
 * Compute the portfolio simulation across all picks.
 * Returns both actual and normalized views.
 */
export function computePortfolio(
  picks: Pick[],
  allPickSeries: Record<string, PriceSeries[]>,
  benchmarkSeries: PriceSeries[]
): PortfolioStats {
  const latestBenchmark = benchmarkSeries[benchmarkSeries.length - 1];
  const latestDate = latestBenchmark.date;

  let portfolioValue = 0;
  let benchmarkValue = 0;
  let earliestEntryDate: string | null = null;

  for (const pick of picks) {
    const pickSeries = allPickSeries[pick.ticker];
    if (!pickSeries || pickSeries.length === 0) continue;

    let entryPrice: number;
    let entryDate: string;
    let benchmarkEntryPrice: number;

    try {
      ({ date: entryDate, price: entryPrice } = resolveEntryDate(
        pick.quarterEnd,
        pickSeries
      ));
      ({ price: benchmarkEntryPrice } = resolveEntryDate(
        pick.quarterEnd,
        benchmarkSeries
      ));
    } catch {
      continue;
    }

    // Shares bought with CONTRIBUTION_USD (fractional ok)
    const shares = CONTRIBUTION_USD / entryPrice;
    const benchmarkUnits = CONTRIBUTION_USD / benchmarkEntryPrice;

    // Latest values
    const currentPickPrice =
      pickSeries[pickSeries.length - 1]?.adjClose ?? entryPrice;
    portfolioValue += shares * currentPickPrice;
    benchmarkValue += benchmarkUnits * latestBenchmark.adjClose;

    if (!earliestEntryDate || entryDate < earliestEntryDate) {
      earliestEntryDate = entryDate;
    }
  }

  const totalContributions = picks.length * CONTRIBUTION_USD;
  const portfolioTR =
    totalContributions > 0 ? portfolioValue / totalContributions - 1 : 0;
  const benchmarkTR =
    totalContributions > 0 ? benchmarkValue / totalContributions - 1 : 0;
  const alpha = portfolioTR - benchmarkTR;

  const portfolioCagr =
    earliestEntryDate != null
      ? computeCAGR(
          totalContributions,
          portfolioValue,
          earliestEntryDate,
          latestDate
        )
      : null;

  const scale = CONTRIBUTION_USD / NORMALIZED_BASE;

  const actual: PortfolioView = {
    totalContributions,
    portfolioValue,
    benchmarkValue,
    portfolioTR,
    benchmarkTR,
    alpha,
    portfolioCagr,
    label: `Assumes $${CONTRIBUTION_USD.toLocaleString()} invested per quarter`,
  };

  const normalized: PortfolioView = {
    totalContributions: totalContributions / scale,
    portfolioValue: portfolioValue / scale,
    benchmarkValue: benchmarkValue / scale,
    portfolioTR, // TR % is identical regardless of scale
    benchmarkTR,
    alpha,
    portfolioCagr,
    label: `Scaled to $${NORMALIZED_BASE.toLocaleString()} per quarter for comparison`,
  };

  return { actual, normalized };
}
