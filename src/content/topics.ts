export type Topic = {
  slug: string;
  title: string;
  description: string;
  comingSoon?: boolean;
};

export const topics: Topic[] = [
  {
    slug: "quality-businesses",
    title: "Quality Businesses & Moats",
    description:
      "What makes a business durable over decades — competitive advantages, pricing power, and the structural traits that protect returns on capital.",
    comingSoon: true,
  },
  {
    slug: "compounding",
    title: "Compounding & Long-Term Returns",
    description:
      "How time and reinvestment interact to produce non-linear outcomes, and why the holding period is itself a source of edge.",
    comingSoon: true,
  },
  {
    slug: "valuation",
    title: "Valuation & Market Regimes",
    description:
      "Frameworks for estimating intrinsic value, how macro regimes affect long-run equity returns, and why starting price still matters over 25 years.",
    comingSoon: true,
  },
  {
    slug: "capital-allocation",
    title: "Capital Allocation",
    description:
      "How management teams deploy retained earnings — reinvestment, acquisitions, buybacks, dividends — and why this decision compounds over time.",
    comingSoon: true,
  },
  {
    slug: "investor-psychology",
    title: "Investor Psychology",
    description:
      "The behavioral forces that cause investors to underperform their own holdings, and what a 25-year horizon does to remove them.",
    comingSoon: true,
  },
];
