import type { PriceSeries, PickStats, PortfolioStats } from "./data/types.js";

// KV key constants
const KEYS = {
  series: (ticker: string) => `series:${ticker}`,
  computedPicks: "computed:picks",
  computedPortfolio: "computed:portfolio",
  lastRefresh: "meta:lastRefresh",
} as const;

async function kvGet<T>(kv: KVNamespace, key: string): Promise<T | null> {
  const val = await kv.get(key, "json");
  return (val as T) ?? null;
}

async function kvSet<T>(
  kv: KVNamespace,
  key: string,
  value: T
): Promise<void> {
  await kv.put(key, JSON.stringify(value));
}

// ── Series ──────────────────────────────────────────────────────────────────

export async function getSeries(
  kv: KVNamespace,
  ticker: string
): Promise<PriceSeries[] | null> {
  return kvGet<PriceSeries[]>(kv, KEYS.series(ticker));
}

export async function setSeries(
  kv: KVNamespace,
  ticker: string,
  series: PriceSeries[]
): Promise<void> {
  return kvSet(kv, KEYS.series(ticker), series);
}

export async function getAllSeries(
  kv: KVNamespace,
  tickers: string[]
): Promise<Record<string, PriceSeries[]>> {
  const entries = await Promise.all(
    tickers.map(async (t) => [t, await getSeries(kv, t)] as const)
  );
  const result: Record<string, PriceSeries[]> = {};
  for (const [ticker, series] of entries) {
    if (series) result[ticker] = series;
  }
  return result;
}

// ── Computed Picks ───────────────────────────────────────────────────────────

export async function getComputedPicks(
  kv: KVNamespace
): Promise<PickStats[] | null> {
  return kvGet<PickStats[]>(kv, KEYS.computedPicks);
}

export async function setComputedPicks(
  kv: KVNamespace,
  picks: PickStats[]
): Promise<void> {
  return kvSet(kv, KEYS.computedPicks, picks);
}

// ── Portfolio ────────────────────────────────────────────────────────────────

export async function getComputedPortfolio(
  kv: KVNamespace
): Promise<PortfolioStats | null> {
  return kvGet<PortfolioStats>(kv, KEYS.computedPortfolio);
}

export async function setComputedPortfolio(
  kv: KVNamespace,
  portfolio: PortfolioStats
): Promise<void> {
  return kvSet(kv, KEYS.computedPortfolio, portfolio);
}

// ── Last Refresh ─────────────────────────────────────────────────────────────

export async function getLastRefresh(kv: KVNamespace): Promise<string | null> {
  return kv.get(KEYS.lastRefresh);
}

export async function setLastRefresh(
  kv: KVNamespace,
  timestamp: string
): Promise<void> {
  return kv.put(KEYS.lastRefresh, timestamp);
}
