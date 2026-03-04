import type { PriceSeries } from "./types.js";

/**
 * Given a quarter-end date string (YYYY-MM-DD) and a sorted ascending price series,
 * returns the entry date and price: the most recent trading day on or before quarterEnd.
 * Throws if no date is found within 7 calendar days (≈5 trading days) before quarterEnd.
 */
export function resolveEntryDate(
  quarterEnd: string,
  series: PriceSeries[]
): { date: string; price: number } {
  const cutoff = new Date(quarterEnd + "T00:00:00Z");

  // series is sorted ascending; find the last entry with date <= cutoff
  let entry: PriceSeries | undefined;
  for (const row of series) {
    const d = new Date(row.date + "T00:00:00Z");
    if (d <= cutoff) {
      entry = row;
    } else {
      break;
    }
  }

  if (!entry) {
    throw new Error(
      `resolveEntryDate: no data found at or before ${quarterEnd}`
    );
  }

  const daysDiff =
    (cutoff.getTime() - new Date(entry.date + "T00:00:00Z").getTime()) /
    (24 * 3600 * 1000);

  if (daysDiff > 7) {
    throw new Error(
      `resolveEntryDate: nearest date ${entry.date} is ${daysDiff.toFixed(0)} days before ${quarterEnd} (max 7)`
    );
  }

  return { date: entry.date, price: entry.adjClose };
}
