export interface PriceSeries {
  date: string; // YYYY-MM-DD
  adjClose: number;
}

export interface PickStats {
  id: string;
  ticker: string;
  companyName: string;
  quarterLabel: string;
  entryDate: string;
  entryPrice: number;
  currentPrice: number;
  cumReturn: number; // decimal, e.g. 0.15 = 15%
  cagr: number | null; // null if position age < 365 days
  benchmarkReturn: number; // ^SP500TR over same window
  alpha: number; // cumReturn - benchmarkReturn (decimal)
  // Chart data (indexed from entry date, normalised to 100)
  chartDates: string[];
  chartPickValues: number[];
  chartBenchmarkValues: number[];
}

export interface PortfolioView {
  totalContributions: number;
  portfolioValue: number;
  benchmarkValue: number;
  portfolioTR: number; // decimal
  benchmarkTR: number; // decimal
  alpha: number; // decimal
  portfolioCagr: number | null;
  label: string;
}

export interface PortfolioStats {
  actual: PortfolioView;
  normalized: PortfolioView;
}

export type DataSource = "yahoo" | "alphavantage";

export interface RefreshResult {
  success: boolean;
  timestamp: string;
  sources: Record<string, DataSource>;
  error?: string;
}
