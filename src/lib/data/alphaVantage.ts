import type { PriceSeries } from "./types.js";

const BASE_URL = "https://www.alphavantage.co/query";

/**
 * Fetches daily adjusted prices from Alpha Vantage as a fallback.
 * Uses TIME_SERIES_DAILY_ADJUSTED (full output for maximum history).
 * Returns series sorted ascending by date.
 */
export async function fetchSeries(
  ticker: string,
  apiKey: string
): Promise<PriceSeries[]> {
  const url =
    `${BASE_URL}?function=TIME_SERIES_DAILY_ADJUSTED` +
    `&symbol=${encodeURIComponent(ticker)}` +
    `&outputsize=full` +
    `&apikey=${encodeURIComponent(apiKey)}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(
      `Alpha Vantage fetch failed for ${ticker}: HTTP ${res.status}`
    );
  }

  const json = (await res.json()) as AlphaVantageResponse;

  if (json["Error Message"] || json["Note"]) {
    const msg = json["Error Message"] ?? json["Note"] ?? "unknown error";
    throw new Error(`Alpha Vantage error for ${ticker}: ${msg}`);
  }

  const timeSeries = json["Time Series (Daily)"];
  if (!timeSeries) {
    throw new Error(`Alpha Vantage: no time series data for ${ticker}`);
  }

  const series: PriceSeries[] = Object.entries(timeSeries).map(
    ([date, values]) => ({
      date,
      adjClose: parseFloat(values["5. adjusted close"]),
    })
  );

  if (series.length === 0) {
    throw new Error(`Alpha Vantage: empty series for ${ticker}`);
  }

  series.sort((a, b) => a.date.localeCompare(b.date));

  console.log(`[alphavantage] fetched ${series.length} rows for ${ticker}`);
  return series;
}

interface AlphaVantageResponse {
  "Time Series (Daily)"?: Record<
    string,
    { "5. adjusted close": string; [key: string]: string }
  >;
  "Error Message"?: string;
  Note?: string;
}
