import type { PriceSeries } from "./types.js";

const BASE_URL = "https://query1.finance.yahoo.com/v8/finance/chart";

/**
 * Fetches 5 years of daily adjusted close prices from Yahoo Finance.
 * Returns series sorted ascending by date.
 * Throws on non-200 response or empty/missing data.
 */
export async function fetchSeries(ticker: string): Promise<PriceSeries[]> {
  const encoded = encodeURIComponent(ticker);
  const url = `${BASE_URL}/${encoded}?interval=1d&range=5y`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; theholdingperiod/1.0)",
    },
  });

  if (!res.ok) {
    throw new Error(
      `Yahoo Finance fetch failed for ${ticker}: HTTP ${res.status}`
    );
  }

  const json = (await res.json()) as YahooChartResponse;
  const result = json?.chart?.result?.[0];

  if (!result) {
    throw new Error(`Yahoo Finance: no result data for ${ticker}`);
  }

  const timestamps = result.timestamp;
  // For ^SP500TR (Total Return index) Yahoo uses 'close' which is already TR.
  // For individual stocks, adjclose from the adjclose array is correct.
  const adjCloseArr =
    result.indicators?.adjclose?.[0]?.adjclose ?? result.indicators?.quote?.[0]?.close;

  if (!timestamps || !adjCloseArr || timestamps.length === 0) {
    throw new Error(`Yahoo Finance: empty price series for ${ticker}`);
  }

  const series: PriceSeries[] = [];
  for (let i = 0; i < timestamps.length; i++) {
    const price = adjCloseArr[i];
    if (price == null || !isFinite(price)) continue; // skip nulls/NaN

    const date = new Date(timestamps[i] * 1000).toISOString().slice(0, 10);
    series.push({ date, adjClose: price });
  }

  if (series.length === 0) {
    throw new Error(`Yahoo Finance: all prices null for ${ticker}`);
  }

  // Sort ascending (Yahoo usually returns ascending, but enforce it)
  series.sort((a, b) => a.date.localeCompare(b.date));

  console.log(`[yahoo] fetched ${series.length} rows for ${ticker}`);
  return series;
}

// Minimal types for the Yahoo Finance v8 chart response
interface YahooChartResponse {
  chart: {
    result?: Array<{
      timestamp: number[];
      indicators: {
        adjclose?: Array<{ adjclose: Array<number | null> }>;
        quote?: Array<{ close: Array<number | null> }>;
      };
    }>;
    error?: unknown;
  };
}
