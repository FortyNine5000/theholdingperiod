export type FAQ = {
  question: string;
  answer: string;
  category?: string;
};

export const faqs: FAQ[] = [
  {
    category: "The Format",
    question: "How often is a new pick made?",
    answer:
      "One stock is picked per quarter — four times a year. Each pick is logged publicly on this site from the day it is made, with the entry price and date recorded. There is no going back.",
  },
  {
    category: "The Format",
    question: "Are picks ever sold or changed?",
    answer:
      "No. The framework is to hold each pick for 25 years from the entry date with no rebalancing. A position is never sold or replaced, regardless of what happens to the price or the business in the interim. This is intentional: the long holding period is the whole point.",
  },
  {
    category: "The Format",
    question: "What is the short list?",
    answer:
      "Each quarter, four stocks make serious consideration before one is picked. The final pick is always published publicly on this site. The four runners-up — the short list — are shared exclusively with newsletter subscribers. The pick is public; the deliberation is not.",
  },
  {
    category: "Returns & Calculations",
    question: "How is the benchmark calculated?",
    answer:
      "The benchmark is the S&P 500 Total Return index (ticker: ^SP500TR), which assumes all dividends are reinvested at the index level. For every quarterly pick, the same fixed dollar amount is invested in the benchmark on the same date as the stock pick. This makes the comparison clean: the only variable between the portfolio and the benchmark is stock selection.",
  },
  {
    category: "Returns & Calculations",
    question: "What is a total return index?",
    answer:
      "A total return index tracks the performance of a basket of securities including the reinvestment of all dividends and distributions, not just price appreciation. The S&P 500 Total Return index is the appropriate benchmark for a long-horizon stock portfolio because it reflects the full economic return available to a buy-and-hold investor.",
  },
  {
    category: "Returns & Calculations",
    question: "Why is CAGR suppressed for positions under one year?",
    answer:
      "Annualizing returns over very short periods produces misleading numbers. A stock that gains 5% in two months does not have a 30% CAGR in any meaningful sense — the figure is a mathematical artifact, not a prediction or a true rate of compounding. CAGR is only shown once a position has at least 12 months of history.",
  },
  {
    category: "Returns & Calculations",
    question: "How are entry prices determined?",
    answer:
      "Each pick uses the adjusted closing price on the last trading day of the quarter in which the pick is made. Adjusted close prices account for splits and dividend distributions, so the return series reflects the full economic experience of holding the stock from that date.",
  },
  {
    category: "About the Site",
    question: "Is this investment advice?",
    answer:
      "No. Nothing on this site should be read as a recommendation to buy or sell any security. The Holding Period is a public log of a personal investment framework applied consistently over time. It is published openly so the results cannot be cherry-picked or selectively reported.",
  },
];
