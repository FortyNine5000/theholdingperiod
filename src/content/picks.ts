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
  // Optional explicit entry override: an actual recorded trade (date + price).
  // When present, the ledger uses this verbatim instead of resolving the entry
  // from the price series. Benchmark return is still computed from ^SP500TR.
  entryOverride?: { date: string; price: number };
  // Optional short label shown on the ledger row (e.g. a thesis tag).
  evidenceLabel?: string;
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
  {
    id: "dhr-2026-q1",
    ticker: "DHR",
    companyName: "Danaher Corporation",
    quarterLabel: "2026 Q1",
    quarterEnd: "2026-03-26",
    pageTitle: "Danaher (DHR) — 2026 Q1 Pick | The Holding Period",
    metaDescription:
      "Danaher Corporation named as The Holding Period's Q1 2026 long-term stock pick. 25-year hold thesis: the Danaher Business System applied to life sciences secular growth. Tracked vs S&P 500 Total Return from March 2026.",
    ogHeadline: "DHR — 2026 Q1 | The Holding Period",
    thesisHeadline: "The Operating System for Life Sciences",
    thesisIntro:
      "Danaher is one of the most studied compounders in American corporate history — and for good reason. From a diversified conglomerate in the late 1980s, it has been systematically rebuilt into a focused life sciences and diagnostics platform through the relentless application of the Danaher Business System (DBS): a proprietary operating discipline modeled on lean manufacturing principles that extracts margin, eliminates waste, and accelerates organic growth at every acquired business.",
    thesisSections: [
      {
        heading: "The Danaher Business System",
        body: "The moat here is unusual. Most industrial roll-ups rely on financial engineering — cheap debt, multiple arbitrage, and scale purchasing. Danaher compounds differently. DBS is a genuine organizational capability that cannot be purchased or replicated quickly; it takes years to embed in an acquired culture. That means Danaher consistently pays fair prices for good businesses and turns them into great ones — a far more durable model than a purely financial roll-up.",
      },
      {
        heading: "The Life Sciences Portfolio",
        body: "The portfolio today clusters in two high-quality segments: Biotechnology (Cytiva, Pall, Aldevron — the tools and consumables that enable drug discovery and manufacturing) and Life Sciences Instruments (SCIEX, Leica Microsystems, Molecular Devices). These are pick-and-shovel businesses for the biotech and pharmaceutical industries. Revenues are sticky — consumables follow instrument placements for years, creating highly predictable recurring streams.\n\nR&D spending globally is structurally increasing, and the shift to biologics (antibodies, cell and gene therapies) requires exactly the filtration, purification, and analytical tools Danaher makes.",
      },
      {
        heading: "The Post-Spin Danaher",
        body: "Diagnostics, once a third leg via Beckman Coulter and Radiometer, was spun into Veralto in 2023. That separation was capital-allocator discipline in action: focus the remaining business on higher-growth life sciences exposure, reset the reinvestment surface, and allow Veralto to optimize separately. The post-spin Danaher is cleaner and more focused than at any point in its history.",
      },
      {
        heading: "Coming Out of the Destocking Cycle",
        body: "The 2021–2023 period distorted the picture. COVID drove exceptional demand for bioprocessing tools (vaccine manufacturing required Cytiva's single-use bioreactors at enormous scale), followed by sharp destocking as biopharma customers worked down elevated inventories through 2023–2024. This cycle is substantially behind us. Normalized demand is reasserting, and Danaher's organic growth trajectory is returning to its 5–7% long-run baseline, with M&A upside from a balance sheet that carries conservative leverage for its size.",
      },
      {
        heading: "The 25-Year Case",
        body: "At current valuations — roughly 28–32× forward earnings depending on the normalization assumption — DHR is not cheap in an absolute sense. But a 25-year holder is not buying a commodity multiple. They are buying the compounding engine that DBS represents, applied across life sciences for the next quarter century. If Danaher can continue to generate 20%+ ROIC on reinvested capital and grow earnings at 10–12% annually (both consistent with its 20-year track record outside of anomalous periods), the entry price today will look conservative in 2051.\n\nHealthcare spending, drug discovery, and diagnostic precision are secular growth vectors with no plausible ceiling. Danaher is not a lottery ticket. It is a proven system applied to a growing market.",
      },
    ],
    whatWouldMakeWrong:
      "DBS is embodied in institutional culture and key leaders. Culture drift at the top — a new management team that abandons the operating discipline or chases revenue scale over returns — is the primary risk, and the one that cannot be hedged. A second scenario: a large acquisition at a premium multiple in a tangentially related business that fails to absorb DBS, destroying capital rather than compounding it. The life sciences tools sector also carries biotech funding cycle risk — instruments are capital expenditure, and biopharma customers cut capex in downturns. Over 25 years, multiple cycles are guaranteed; the question is whether the balance sheet and recurring consumable base are resilient enough to weather them without permanent impairment.",
    whatToWatch:
      "Core revenue growth ex-COVID (the clearest signal that normalized demand has fully returned), bioprocessing order trends at Cytiva and Pall (the highest-value segment), gross margin trajectory (DBS should be expanding margins at acquisitions over a 3–5 year horizon), and ROIC on recent acquisitions (the acid test of whether DBS is actually working). If DBS attrition becomes visible — organic growth slipping below 4%, margins flat despite volume recovery — that is the signal to reassess.",
  },
  {
    id: "cprt-2026-q2",
    ticker: "CPRT",
    companyName: "Copart, Inc.",
    quarterLabel: "2026 Q2",
    quarterEnd: "2026-06-30",
    entryOverride: { date: "2026-06-30", price: 28.15 },
    pageTitle: "Copart (CPRT) — 2026 Q2 Pick | The Holding Period",
    metaDescription:
      "Copart (CPRT) is The Holding Period's 2026 Q2 25-year public experiment name, entered at $28.15 on 2026-06-30. A 25-year thesis on salvage-auction network density and physical-yard scarcity, benchmarked against the S&P 500 Total Return index.",
    ogHeadline: "CPRT — 2026 Q2 | The Holding Period",
    thesisHeadline: "The Marketplace Built on Land Nobody Else Can Permit",
    thesisIntro:
      "Copart runs the largest online marketplace for salvage and total-loss vehicles in the United States, with operations across the United Kingdom, Germany, and other international markets. It sits between two parties: insurance companies that need to dispose of vehicles they have written off, and a global base of dismantlers, rebuilders, dealers, and exporters who bid for them through Copart's online auction platform. This is the 2026 Q2 25-year public experiment name — a high-quality business named with conviction and held to the same survival, mechanism, runway, and underwriting work as every other name.",
    thesisSections: [
      {
        heading: "Network density and the two-sided marketplace",
        body: "Copart's core asset is liquidity. Insurers route total-loss vehicles to the venue that returns the most money, fastest, with the least administrative friction. Buyers go where the supply is. Each side reinforces the other: more buyer demand raises recovery values for sellers, which attracts more seller volume, which in turn attracts more buyers. That is a genuine two-sided network effect, and it is most of the reason the salvage-auction market has consolidated into a small number of scaled players rather than fragmenting.\n\nThe move from physical, in-person salvage auctions to an online bidding platform widened the buyer pool from a local yard's regulars to a national and international audience. A flooded sedan in one state can be bought by an exporter on another continent. Widening the demand side is precisely what raises clearing prices, and higher recovery rates are what keep insurer relationships sticky.",
      },
      {
        heading: "Land as a moat",
        body: "Unlike an asset-light marketplace, Copart owns much of the land its operations sit on — hundreds of salvage yards positioned near population centers and along the paths of recurring catastrophe events. This is deliberate. Salvage yards are difficult to permit: they are noisy, occasionally hazardous, and rarely welcomed by neighbors or zoning boards. A well-capitalized competitor with a better website cannot conjure permitted acreage near the cities where vehicles are totaled.\n\nThat physical density is the kind of moat that sits near the top of the hierarchy: it required decades of capital deployment to assemble, it compounds with the network effect, and it cannot be replicated quickly even by a competitor willing to spend. It also provides surge capacity. When a hurricane or flood totals tens of thousands of vehicles in a region within days, the ability to physically absorb, store, and process that inrush is a service insurers cannot easily source elsewhere.",
      },
      {
        heading: "A balance sheet built for stress, and a secular tailwind",
        body: "Copart has long operated with a net-cash balance sheet — an unusual posture for an asset-heavy, land-owning business, and exactly the kind of survival-first characteristic a 25-year holder wants. It is not dependent on external capital to fund operations or to weather a downturn, and it is not carrying a fragile maturity wall.\n\nThe demand backdrop has a secular component worth naming carefully. As vehicles incorporate more sensors, cameras, and advanced driver-assistance hardware, the cost to repair even moderate damage rises, which pushes more accident-damaged vehicles past the threshold where insurers declare a total loss rather than repair. A rising total-loss frequency feeds Copart's volume independent of how many accidents occur. This is a tailwind, not a guarantee, and it must be held alongside the genuine 25-year question below.",
      },
      {
        heading: "Naming Copart, and what we are underwriting",
        body: "The quality case clears with conviction: a named network-and-density mechanism, a land moat that is hard to permit around, a net-cash balance sheet, service-heavy economics, and a founder-shaped capital-allocation culture. The closest call is valuation. At the June 2026 scorecard work near $29.48, the base-case 25-year IRR was roughly 8.1% on earnings per share and roughly 7.4% on free cash flow per share against an 8% hurdle on each — the earnings case cleared and the free-cash-flow case was just short.\n\nThe June 30 entry at $28.15 is below that anchor, which improves the read. We are naming Copart and owning it: a high-quality business bought at a price where the long-run math is attractive and the free-cash-flow line is the variable we are underwriting most carefully. That is the thing to watch over the hold, not a reason to hedge the name.",
      },
    ],
    whatWouldMakeWrong:
      "The clearest 25-year risk is a structural decline in total-loss volume: a sustained fall in accident frequency from widespread driver-assistance and, eventually, autonomous driving could shrink the pool of salvage vehicles faster than rising total-loss severity expands it. A second risk is insurer disintermediation — large insurers building or mandating captive disposal channels that route volume around the marketplace. A third is a credible competitor achieving comparable density and liquidity, compressing the economics on both sides. And as with any founder-shaped business, a capital-allocation culture that drifts toward scale or reported earnings over returns on incremental capital would erode the thesis quietly before it showed up in the numbers.",
    whatToWatch:
      "Free-cash-flow conversion relative to reported earnings — the line the valuation case leans on most, and the clearest read on whether incremental capital is still earning well. Alongside it: insurer assignment volume and any shift in the mix of insurer relationships, total-loss frequency trends, international unit economics as the non-US footprint scales, and the pace and returns of land and yard expansion. A persistent gap between reported earnings and free cash flow, or evidence that incremental capital is earning less than the legacy base, would be the signal to reassess rather than wait.",
  },
];

export function getPickById(id: string): Pick | undefined {
  return picks.find((p) => p.id === id);
}
