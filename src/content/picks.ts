export interface ThesisSection {
  heading: string;
  body: string;
}

export interface Pick {
  id: string;
  ticker: string;
  companyName: string;
  quarterLabel: string;
  quarterEnd: string; // YYYY-MM-DD, last calendar day of quarter
  thesisHeadline: string;
  thesisIntro: string;
  thesisSections: ThesisSection[];
  whatWouldMakeWrong: string;
  whatToWatch: string;
  // SEO
  pageTitle: string;
  metaDescription: string;
  ogHeadline: string;
}

export const picks: Pick[] = [
  {
    id: "wso-2025-q3",
    ticker: "WSO",
    companyName: "Watsco",
    quarterLabel: "2025 Q3",
    quarterEnd: "2025-09-30",
    pageTitle: "Watsco (WSO) — 2025 Q3 Pick | The Holding Period",
    metaDescription:
      "Why Watsco (WSO) is The Holding Period's Q3 2025 pick: a 25-year investment thesis on durable HVAC distribution compounding, benchmarked against the S&P 500 Total Return index.",
    ogHeadline: "WSO — 2025 Q3 | The Holding Period",
    thesisHeadline: "The Boring Distributor That Quietly Compounds",
    thesisIntro:
      "There is a category of business that rarely shows up in investment newsletters or conference presentations. It doesn't have a visionary founder making bold predictions. It doesn't disrupt anything. It sits in the middle of a fragmented, unsexy supply chain and does the same thing year after year with modest but persistent improvement. Watsco is that kind of business.",
    thesisSections: [
      {
        heading: "The Replacement Demand Engine",
        body: "Watsco is the largest HVAC/R distribution network in North America. It doesn't manufacture equipment — it moves it, from manufacturers like Carrier, Daikin, and Rheem through roughly 690 locations to over 100,000 contractors. That middleman position sounds precarious until you understand what actually holds it in place.\n\nThe majority of Watsco's revenue comes not from new construction but from replacement — the steady, non-discretionary drumbeat of aging equipment reaching end of life. HVAC systems last roughly 15 to 20 years. The installed base in the United States is enormous, spread across decades of installation cycles, and it doesn't stop aging because interest rates go up or housing starts slow. A contractor replacing a failed unit on a hot afternoon in August does not have the luxury of waiting for better macro conditions.\n\nThis gives Watsco's revenue stream a character that most industrial distributors don't have: a large, recurring, weather-and-cycle-resistant baseline. New construction exposure adds cyclicality at the margin, but replacement is the engine.",
      },
      {
        heading: "Scale That Doesn't Replicate Easily",
        body: "Distribution businesses often look simple until you try to build one. The moat in distribution comes from density — the number of locations, the depth of local inventory, the contractor relationships that make a distributor the default call rather than the considered choice. Watsco has spent decades building that density through acquisitions, ending up with a network that's genuinely difficult for a new entrant or a smaller regional competitor to replicate at scale.\n\nThe manufacturer relationships reinforce this. Carrier's distribution partnership with Watsco is deep enough that it structurally limits the manufacturer's ability to go around the distributor at scale. When you are the distribution layer for a major manufacturer across a continental market, that relationship is an asset with meaningful switching costs on both sides.",
      },
      {
        heading: "Capital Allocation Over Decades",
        body: "What elevates Watsco from a good distribution business to a compounding candidate is the capital allocation discipline that runs alongside the operational business. The company has consistently returned capital through dividends — its dividend history is one of the longer uninterrupted growth streaks in the industrial space — while simultaneously funding bolt-on acquisitions that extend the distribution footprint without overpaying.\n\nReturn on invested capital has been consistently strong. The business doesn't need to take on significant leverage to grow, and management has shown little appetite for empire-building acquisitions outside their core competency. That combination — consistent returns, disciplined growth, steady capital return — is the pattern that tends to produce compounding over very long windows.",
      },
      {
        heading: "The Energy Transition Wildcard",
        body: "One structural shift worth monitoring over a 25-year horizon: the push toward higher-efficiency HVAC equipment and, increasingly, heat pumps. This could be a risk — if it disrupts the replacement cycle or changes manufacturer distribution relationships — or it could be an accelerant, as higher-complexity equipment increases the value of a distributor with technical depth and dense local coverage. The early evidence is that Watsco has invested in the technical capabilities (training, inventory, digital tools for contractors) to be positioned on the right side of this shift rather than stranded by it.",
      },
    ],
    whatWouldMakeWrong:
      "The most credible threat to this thesis over 25 years is manufacturer disintermediation at scale — a world where manufacturers develop the logistics capability and contractor relationships to go direct in a meaningful way. This has been discussed for decades in distribution, has occasionally been attempted, and has not materialized in HVAC at scale. But it remains the risk to watch. A second threat is a new generation of digital-native distribution competitors with better contractor tools and lower cost structures. Watsco has invested in technology here, but this is a real competitive dynamic worth tracking.",
    whatToWatch:
      "Gross margin per unit sold (compression signals pricing pressure or mix shift), same-store sales growth across existing locations (the health of the core), and the pace of the energy efficiency transition in the installed base. If the heat pump shift accelerates materially, watch how Watsco's product mix and training investment respond.",
  },
  {
    id: "nvr-2025-q4",
    ticker: "NVR",
    companyName: "NVR Inc",
    quarterLabel: "2025 Q4",
    quarterEnd: "2025-12-31",
    pageTitle: "NVR Inc (NVR) — 2025 Q4 Pick | The Holding Period",
    metaDescription:
      "Why NVR is The Holding Period's Q4 2025 pick: a 25-year investment thesis on asset-light homebuilding, capital discipline, and compounding through housing cycles.",
    ogHeadline: "NVR — 2025 Q4 | The Holding Period",
    thesisHeadline: "Homebuilding With a Different Business Model",
    thesisIntro:
      "The homebuilding industry is easy to dismiss as inherently cyclical, capital-intensive, and therefore a poor candidate for long-term compounding. That dismissal makes sense for most homebuilders. NVR is the exception worth understanding.",
    thesisSections: [
      {
        heading: "The Option Model",
        body: "NVR builds homes under the Ryan Homes, NVHomes, and Heartland Homes brands, primarily in the Mid-Atlantic, Southeast, and Midwest. By units closed, it is a mid-sized homebuilder. By return on equity and long-term shareholder value creation, it is in a different category from almost everyone else in the industry. The difference is almost entirely attributable to a single structural choice made decades ago and held with unusual discipline ever since: NVR does not own land.\n\nMost homebuilders operate by acquiring land and holding it on their balance sheet — sometimes for years — as inventory ahead of development. This works well in boom cycles and is punishing in downturns. When housing slows and land values fall, these companies face write-downs, leverage constraints, and sometimes existential liquidity pressure. The 2008–2009 period was a vivid illustration. Several large homebuilders came close to bankruptcy; NVR did not come close.\n\nNVR uses a lot option model instead. It enters contracts to purchase finished lots from developers at a fixed price with an up-front option deposit. If the housing market deteriorates, NVR can walk away from those options — losing the deposit, but not holding a balance sheet full of devalued land inventory. The option deposit is typically a small fraction of the lot's value. The asymmetry protects the downside while preserving the upside.\n\nThe trade-off is real: NVR gives up the land appreciation upside that land-owning builders capture in strong markets, and it depends on a functioning lot option market. But over a full cycle, and certainly over multiple cycles, the model has consistently produced better outcomes than the alternatives.",
      },
      {
        heading: "What This Does to the Balance Sheet",
        body: "The practical consequence of not owning land is a balance sheet that looks different from every competitor. NVR carries relatively little debt. It generates substantial free cash flow because it's not perpetually consuming capital to fund land acquisitions. And that free cash flow goes somewhere useful: over the past two decades, NVR has been an aggressive repurchaser of its own shares, reducing the share count substantially while the business itself grew. That combination — growing earnings, shrinking share count — is one of the more reliable formulas for long-term per-share value creation.\n\nReturn on equity has been consistently among the highest in the homebuilding sector. Not because NVR uses leverage to juice returns, but because the asset-light model generates strong returns on a genuinely modest equity base.",
      },
      {
        heading: "The Housing Backdrop",
        body: "A 25-year thesis on a homebuilder has to reckon with the housing market. The structural backdrop in the United States looks more supportive than the cyclical narrative suggests. Underbuilding relative to household formation over the past decade has created a supply deficit that will take years to close. The aging of millennials into peak household-formation years represents sustained demand. None of this prevents a cyclical downturn — housing is still cyclical — but it suggests that the secular trend over a 25-year window is not a headwind.\n\nNVR's geographic concentration in the Mid-Atlantic and Southeast is relevant here. These are markets with relatively lower land cost, reasonable regulatory environments for permitting, and population inflow trends that support housing demand independent of national conditions.",
      },
      {
        heading: "Management and Capital Allocation",
        body: "NVR's management culture is worth noting. The company has been run with remarkable consistency — not flashy, not promotional, focused on execution and capital return. Management compensation is tied to return on equity rather than revenue or unit growth, which aligns incentives with the right long-term outcomes. Companies where management gets paid on ROIC metrics tend to behave differently than companies where management gets paid on growth.",
      },
    ],
    whatWouldMakeWrong:
      "A prolonged structural collapse in lot option availability — if the fragmented developer ecosystem that NVR relies on for lot supply consolidated or contracted significantly — would force the company to revisit its model. A sustained, decade-long depression in housing activity severe enough to impair the option market itself would be the other scenario. Beyond that, the risk is more about execution and capital allocation drift than about existential business model vulnerability.",
    whatToWatch:
      "Cancellation rates (the leading indicator of demand health at the contract stage), option land conversion pace relative to guidance (the operational health of the model), and return on equity across the housing cycle (the integrity of the capital discipline). If ROE starts drifting down while leverage drifts up, that's the signal that something has changed in how the business is being managed.",
  },
];

export function getPickById(id: string): Pick | undefined {
  return picks.find((p) => p.id === id);
}
