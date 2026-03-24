export type TopicSection = {
  heading: string;
  body: string;
};

export type Topic = {
  slug: string;
  title: string;
  description: string;
  comingSoon?: boolean;
  sections?: TopicSection[];
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
  {
    slug: "stock-return-concentration",
    title: "Why the Market's Long-Run Gains Come From a Few Unusual Stocks",
    description:
      "Most stocks underperform cash over the long run. A small number account for essentially all net wealth creation. What the long winners share — and what that means for a 25-year pick.",
    sections: [
      {
        heading: "Concentration is the starting fact",
        body: "Long-run stock market wealth is not evenly shared. Work by Hendrik Bessembinder shows that from 1990 to 2020, most stocks underperformed one-month Treasury bills, while about 2.4% of firms accounted for essentially all net global wealth creation. That is the base rate any long-horizon stock picker must start from.\n\nCompounding creates a fat right tail. The mean can look attractive even when the median outcome is weak. That gap is why market averages hide how many stocks fail to build lasting wealth.",
      },
      {
        heading: "What the long winners share",
        body: "The long winners that emerge in 20- to 30-year studies tend to start with durable economic advantages. You often see high returns on invested capital that persist because the business has structural defenses, such as switching costs, cost advantage, or efficient scale. Persistence matters because excess returns usually fade once rivals respond.\n\nThey also have reinvestment runway. A business can be excellent yet run out of good uses for incremental capital. Michael Mauboussin frames the core issue as the competitive advantage period, meaning how long a company can keep earning returns above its cost of capital on new investment.\n\nPricing power is another recurring feature. It shows up in stable or rising margins and the ability to pass through costs without collapsing demand. Research on profitability and quality links strong operating economics, growth, and safety to better long-horizon outcomes.\n\nOperating design helps translate advantages into decades of execution. Many winners pair decentralized decision-making with clear capital allocation rules and repeatable playbooks, so growth does not bottleneck at the top. Serial acquirers such as Constellation Software have stressed delegation of monitoring and acquisition work down the organization as a precondition for sustained compounding. Two archetypes recur: distribution businesses that build dense local networks and win on availability, and tollbooth platforms where network effects make the service more valuable as adoption grows.",
      },
      {
        heading: "What this can and cannot predict",
        body: "These traits matter ex ante because long-term value requires persistent excess returns plus sustained reinvestment. But predictability has hard limits, even after large gains. Among U.S. stocks that already reached a 5× cumulative return, only a minority later reached 25×, and far fewer repeated again, which is a reminder that outcomes are lumpy.",
      },
      {
        heading: "Implications for a 25-year public pick",
        body: "For a public 25-year pick program, the job is not to chase the loudest story. It is to focus on businesses that can survive shocks, defend economics, and reinvest for a very long time, while staying realistic about base rates and valuation. A disciplined process, plus the ability to hold through volatility when the thesis stays intact, is the edge.",
      },
    ],
  },
];
