import type { APIRoute } from "astro";
import { picks } from "../../content/picks.js";
import { BENCHMARK_TICKER } from "../../lib/config.js";
import * as yahoo from "../../lib/data/yahoo.js";
import * as alphaVantage from "../../lib/data/alphaVantage.js";
import { computePickStats, computePortfolio } from "../../lib/data/compute.js";
import type { DataSource, PriceSeries } from "../../lib/data/types.js";
import {
  setSeries,
  setComputedPicks,
  setComputedPortfolio,
  setLastRefresh,
} from "../../lib/store.js";

export const prerender = false;

async function fetchWithFallback(
  ticker: string,
  alphaKey: string
): Promise<{ series: PriceSeries[]; source: DataSource }> {
  try {
    const series = await yahoo.fetchSeries(ticker);
    return { series, source: "yahoo" };
  } catch (yahooErr) {
    console.warn(`[refresh] Yahoo failed for ${ticker}, trying Alpha Vantage:`, yahooErr);
    try {
      // Alpha Vantage doesn't support ^SP500TR — skip for benchmark
      if (ticker === BENCHMARK_TICKER) throw new Error("Alpha Vantage does not support index tickers");
      const series = await alphaVantage.fetchSeries(ticker, alphaKey);
      return { series, source: "alphavantage" };
    } catch (avErr) {
      console.error(`[refresh] Alpha Vantage also failed for ${ticker}:`, avErr);
      throw avErr;
    }
  }
}

async function runRefresh(env: Env): Promise<{
  sources: Record<string, DataSource>;
  timestamp: string;
}> {
  const kv = env.HOLDING_PERIOD_KV;
  const alphaKey = env.ALPHA_VANTAGE_KEY;

  const tickers = [
    ...picks.map((p) => p.ticker),
    BENCHMARK_TICKER,
  ];

  // Deduplicate
  const uniqueTickers = [...new Set(tickers)];

  const sources: Record<string, DataSource> = {};
  const allSeries: Record<string, PriceSeries[]> = {};

  // Fetch all series in parallel (with fallback)
  await Promise.all(
    uniqueTickers.map(async (ticker) => {
      const { series, source } = await fetchWithFallback(ticker, alphaKey);
      allSeries[ticker] = series;
      sources[ticker] = source;
      await setSeries(kv, ticker, series);
    })
  );

  const benchmarkSeries = allSeries[BENCHMARK_TICKER];
  if (!benchmarkSeries) {
    throw new Error(`[refresh] No benchmark series for ${BENCHMARK_TICKER}`);
  }

  // Compute pick stats
  const pickStats = picks
    .map((pick) => {
      const pickSeries = allSeries[pick.ticker];
      if (!pickSeries) {
        console.warn(`[refresh] No series for pick ${pick.ticker}, skipping`);
        return null;
      }
      try {
        return computePickStats(pick, pickSeries, benchmarkSeries);
      } catch (err) {
        console.error(`[refresh] computePickStats error for ${pick.ticker}:`, err);
        return null;
      }
    })
    .filter(Boolean);

  await setComputedPicks(kv, pickStats as NonNullable<typeof pickStats[0]>[]);

  // Compute portfolio
  const allPickSeries: Record<string, PriceSeries[]> = {};
  for (const pick of picks) {
    if (allSeries[pick.ticker]) allPickSeries[pick.ticker] = allSeries[pick.ticker];
  }
  const portfolio = computePortfolio(picks, allPickSeries, benchmarkSeries);
  await setComputedPortfolio(kv, portfolio);

  // Write lastRefresh only after full success
  const timestamp = new Date().toISOString();
  await setLastRefresh(kv, timestamp);

  console.log(`[refresh] Complete at ${timestamp}. Sources:`, sources);
  return { sources, timestamp };
}

// Manual POST endpoint (protected by REFRESH_SECRET)
export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const secret = env.REFRESH_SECRET;

  const authHeader = request.headers.get("Authorization") ?? "";
  if (!authHeader.startsWith("Bearer ") || authHeader.slice(7) !== secret) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const result = await runRefresh(env);
    return new Response(
      JSON.stringify({ success: true, ...result }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[refresh] Failed:", message);
    return new Response(
      JSON.stringify({ success: false, error: message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

// Export runRefresh for use by the scheduled cron handler
export { runRefresh };
