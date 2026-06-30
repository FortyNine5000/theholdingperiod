export type ResearchSection = {
  heading: string;
  body: string;
};

export type ResearchGroup = "25-year" | "shared";

export type ResearchArticle = {
  slug: string;
  title: string;
  description: string;
  group?: ResearchGroup;
  sections: ResearchSection[];
};

export const researchArticles: ResearchArticle[] = [
  {
    slug: "return-concentration",
    group: "shared",
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
  {
    slug: "long-duration-compounder-framework",
    group: "25-year",
    title: "The Long-Duration Compounder Framework",
    description:
      "What separates a 25-year compounder from a good business with a limited runway. The six non-negotiable traits, the moat hierarchy, and the named decision rules that shape every pick.",
    sections: [
      {
        heading: "The 13.47% Rule",
        body: "The greatest long-run compounders did not require absurd annual returns. They required good returns for a very long time without a catastrophic reset. A business that compounds at 13% annually for 25 years turns $1 into roughly $20. A business that earns 25% for five years before permanently impairing capital ends up behind.\n\nThis shapes the whole process. The question is not which business is most exciting today. It is which business is most likely to still be compounding 25 years from now. Optimize for durability in the 12-to-15% range, not for maximum short-term return.",
      },
      {
        heading: "Six non-negotiable traits",
        body: "Every candidate must have a high probability of surviving 25 years. That means supply-chain and macro independence: the thesis must hold under adverse policy and tariff conditions without a favorable macro backdrop as a requirement.\n\nThe moat must have a named structural mechanism behind it — not generic quality, but a specific defensible source of economic returns. Alongside that, the business needs a plausible 15-plus-year reinvestment runway where incremental capital can earn attractive returns.\n\nCapital allocation discipline must be systematized, not dependent on a single decision-maker staying in place. Management communication must be honest — willing to report problems early and revise beliefs when evidence changes. And the governance structure must be clean: no restatements, no undisclosed related-party transactions, no fragile maturity walls on the balance sheet.",
      },
      {
        heading: "The moat hierarchy",
        body: "Not all moats are equal. Physical network density and physical switching costs from operational integration are at the top — they are the hardest to replicate because they require years of capital deployment and local market presence. Transaction and payment network effects sit alongside them: the more users, the more valuable the network, with no geographic ceiling.\n\nData accumulation moats and cost advantages shared with customers sit a step below — real, but dependent on continued execution. Regulatory moats and digital switching costs are moderate: valuable, but subject to policy reversal or technology displacement.\n\nBrand without a structural mechanism is at the bottom. A well-known name without pricing power, switching costs, or network effects is a positioning advantage, not a durable economic defense. The mechanism matters more than the label.",
      },
      {
        heading: "Named decision rules",
        body: "The Mechanism Rule: never credit high ROIC without naming the actual structural mechanism. If you cannot say specifically why a competitor could not replicate the economics within five years, the moat is not yet named.\n\nThe Survival-First Rule: a business that cannot survive cannot compound. Balance-sheet stress must be assessed before upside. A business that fails a severe stress scenario does not advance to deeper work.\n\nThe Nick Sleep Test: does scale make the business better for customers? Businesses that pass this test tend to create durable competitive positions because growth reinforces rather than dilutes the value proposition.\n\nThe Physical Disruption Test: can software alone disintermediate the business? If the answer is yes, the physical or operational switching cost has not been named clearly enough.\n\nThe ROIIC vs. ROIC Rule: incremental returns on incremental capital are more informative than legacy returns on the existing asset base. A business with a 30% ROIC but declining ROIIC is running out of runway. A business with a 15% ROIC and rising ROIIC is building it.",
      },
    ],
  },
  {
    slug: "subtraction-framework",
    group: "shared",
    title: "Right-Tail Preservation",
    description:
      "Also called the Subtraction Framework. The index works because it owns the rare outliers. This research asks whether a broad portfolio can preserve that right-tail exposure while removing businesses structurally unlikely to become long-term wealth creators — and holds every candidate rule to a do-no-harm standard before any exclusion is treated as real.",
    sections: [
      {
        heading: "Right-tail preservation, not pessimism",
        body: "Indexing works because it owns the rare right tail. An investor who held a broad index from 1990 to 2020 captured the handful of companies that accounted for most net wealth creation without having to identify them in advance. Right-Tail Preservation starts from that fact and asks a narrow question: can a broad portfolio keep that outlier exposure while removing a small group of businesses whose observable traits have almost never appeared among the market's great long-run wealth creators?\n\nThis is not an anti-stock, short-oriented, or pessimistic idea, and it is not an attempt to predict the next Apple or Nvidia in advance. The question is the inverse: did the eventual top wealth creators ever display certain observable failure traits before their major compounding period? If they did not, those traits may help define exclusions that improve a broad portfolio without deleting the outcomes that make the index work.",
      },
      {
        heading: "The base rate case for subtraction",
        body: "The S&P 500 works partly because it guarantees exposure to rare right-tail winners. An investor who held the index from 1990 to 2020 captured the returns of Microsoft, Apple, Amazon, and the other handful of companies that accounted for most net wealth creation — without having to identify them in advance.\n\nIf right-tail selection is genuinely hard, an alternative claim becomes more interesting: can you modestly improve long-run outcomes by removing companies that are likely to destroy capital, without pretending to predict every future winner? The Subtraction Framework is the attempt to answer that question seriously.\n\nThis is not a claim that negative selection always beats concentration. It is a claim that removing high-probability losers is a more tractable task than predicting high-probability winners, and that the two approaches are compatible.",
      },
      {
        heading: "What this research is — and is not",
        body: "It is not classic stock picking in reverse. It is not a factor strategy dressed in new language. It is not market timing or sector rotation. And it is not a mechanical screen applied without judgment.\n\nThe screens identify candidates for removal. Judgment still determines whether the screen result reflects a genuine deterioration in the business or a temporary accounting artifact. The framework is a starting filter, not a final answer — and no current list of excluded companies is published here.",
      },
      {
        heading: "The right-tail retention audit",
        body: "Before any screen becomes an exclusion, it must pass a right-tail retention audit. The standard is do-no-harm: a candidate rule is tested against the eventual top wealth creators — ideally the top 10, top 20, top 50, and top 100 — and asked a single question. Would this rule have removed any of them before their main wealth-creation window? A rule that would have excluded Apple, Nvidia, Microsoft, Alphabet, Amazon, Broadcom, Meta, Tesla, Visa, or comparable winners before their payoff cannot be a hard exclusion, no matter how sensible it looks on the losers.\n\nThe first job is not deleting losers. The first job is not deleting the future winners. Until a rule clears that audit it stays a research question, not a validated exclusion. For that reason this page publishes no current exclusion list and treats none of the screens below as a settled rule.",
      },
      {
        heading: "The negative screens as research candidates",
        body: "Eight screens define the initial removal candidates: deteriorating net income trajectory on a trailing multi-year basis; weak organic growth quality, where revenue growth is driven by acquisition or currency rather than unit economics; declining return on assets over a three-to-five-year window; negative spread between ROIC and estimated WACC; worsening leverage, particularly in cyclical businesses; weak free-cash-flow conversion relative to reported earnings; customer concentration above 30% in a single payer or counterparty; and capital-infusion dependence — businesses that require ongoing external capital to fund operations.\n\nA business that fails two or more screens without a clear temporary explanation becomes a removal candidate for further research — not an automatic exclusion. A single screen failure with an identifiable cause may be watched rather than flagged. Every candidate rule still has to clear the right-tail retention audit before it could ever be treated as real.",
      },
      {
        heading: "The Bessemer Converter",
        body: "Inversion produces a sharper starting point than selection. Before asking which businesses deserve more work, ask which businesses should stop the analysis immediately.\n\nThe 15-minute rule: if any of the following appear in the first pass, research ends. Debt brittleness — a balance sheet that cannot survive a two-year revenue contraction without covenant breach or equity issuance. Cyclicality mistaken for secular growth — revenue that tracks end-market volumes but is framed as a structural compounder. Substrate obsolescence — a physical or regulatory substrate that has a visible, better-capitalized replacement already scaling.\n\nCapital-allocation red flags stop work at the next stage: high asset growth that outpaces revenue growth over five years; acquisition camouflage, where EBITDA grows but free cash flow does not; ROIC below WACC on a through-cycle basis.\n\nEpistemological no-go zones are businesses where the most important variables are genuinely unknowable in a 25-year frame: businesses fully exposed to AI commoditization of their core product, regulatory businesses where the next rate case or policy ruling is unpredictable and material, and businesses in jurisdictions with high political expropriation risk.",
      },
    ],
  },
  {
    slug: "orientation-audit",
    group: "25-year",
    title: "The Orientation Audit",
    description:
      "A protocol for evaluating whether a business updates its model when the world changes. Three dimensions, one critical rule, and why the pattern matters more than any individual score.",
    sections: [
      {
        heading: "What the orientation audit measures",
        body: "Management quality is easy to claim and hard to verify. The standard approach — listening to earnings calls, reading investor letters, tracking capital allocation decisions — produces a lot of signal about the current model but very little about whether the organization can revise that model when it is wrong.\n\nThe Orientation Audit is a structured attempt to answer a different question: does this organization have the architecture to update its own operating assumptions when evidence contradicts them? That capacity is what separates businesses that adapt from businesses that survive a long run of favorable conditions and then fail when those conditions change.",
      },
      {
        heading: "Three dimensions scored independently",
        body: "D1 — Data Loop Architecture: does the organization have systematic mechanisms to capture customer, competitor, and market feedback and route it to the people who make strategic decisions? Indicators include structured customer research beyond NPS scores, systematic competitor monitoring that reaches product and operations teams, and evidence that frontline information changes executive behavior.\n\nD2 — Model-Updating Behavior: when evidence contradicts the current operating model, does the organization revise publicly and structurally, or does it rationalize and wait? Indicators include explicit acknowledgment of prior belief errors in public communications, structural changes in response to evidence rather than to performance pressure, and willingness to cannibalize existing revenue streams before competitors force it.\n\nD3 — Punctuation Track Record: has the organization been tested by a genuine crisis — a period where the prior model was revealed as inadequate — and did it emerge with a stronger operating model, the same model, or a weaker one? This is the empirical dimension. It requires actual stress events, not hypothetical resilience claims.",
      },
      {
        heading: "The critical rule",
        body: "Do not average the scores. The pattern is the signal, not the mean.\n\nA business with excellent data loops (D1) but poor model-updating behavior (D2) may be more dangerous than a business with weaker data loops but demonstrated willingness to revise. The data loops create a more precise picture of a world the organization still refuses to respond to.\n\nA high D3 score from a single punctuation event may reflect luck as much as capacity. Two or three punctuation events with consistent ADAPTED or SURVIVED+ outcomes provide much stronger evidence.\n\nThe useful patterns: a business scoring high on all three with multiple D3 events is rare and should be weighted accordingly. A business scoring high on D1 and D2 with no D3 history is promising but unproven. A business scoring low on D2 regardless of D1 and D3 is a concern regardless of current performance.",
      },
      {
        heading: "Theoretical anchors",
        body: "The framework draws on three independent bodies of work. John Boyd's OODA loop concept — Observe, Orient, Decide, Act — points to orientation as the center of adaptive capacity. Organizations that orient faster and more accurately than their environment changes tend to outperform those that do not, regardless of current resource advantages.\n\nBrian Arthur's work on increasing returns and data loops shows that organizations with better feedback architecture tend to compound their information advantage over time. The data loop is not a one-time investment but a structural capability that produces a more accurate model of the world with each iteration.\n\nEvolutionary biology's punctuated equilibrium model — long periods of stability interrupted by rapid structural change — maps onto the stress pattern seen in the best long-run businesses. The ones that survive punctuation events and emerge with a revised model tend to do so because the organization's adaptive architecture was already in place before the stress arrived.",
      },
    ],
  },
  {
    slug: "punctuation-event-database",
    group: "25-year",
    title: "The Punctuation Event Database",
    description:
      "A living record of companies tested by crisis, adaptation, and model revision. The database asks one question: did the organization demonstrate the capacity to destroy and rebuild its own operating model when its prior beliefs proved wrong?",
    sections: [
      {
        heading: "The question it answers",
        body: "Most analysis of management quality focuses on the current operating model: how good is the strategy, how aligned is the incentive structure, how clear is the communication. These are useful questions, but they do not tell you whether the organization can change its model under pressure.\n\nThe Punctuation Event Database catalogs historical stress events and asks a narrower question: when a company's prior assumptions were publicly contradicted by events, how did the organization respond? The response pattern — not the pre-crisis quality — is the evidence of adaptive capacity.",
      },
      {
        heading: "Outcome categories",
        body: "ADAPTED: the organization revised its operating model structurally and publicly in response to the stress event, and emerged with a more defensible competitive position than it had before. This is the highest-quality outcome. It requires explicit acknowledgment of prior error, a structural response rather than a cosmetic one, and evidence that the revision held under subsequent pressure.\n\nSURVIVED: the organization maintained its competitive position without material deterioration. The prior model proved resilient enough that no fundamental revision was required. This is a neutral outcome for orientation purposes — it provides evidence of robustness but not of adaptive capacity.\n\nSURVIVED+: the organization used the stress event offensively because the prior model was proven correct while competitors were impaired. This is a high-quality outcome that provides evidence of both model quality and organizational discipline under pressure.\n\nFAILED / RESCUED: the organization did not successfully navigate the stress event, either through bankruptcy, forced sale, government intervention, or permanent structural impairment. This outcome is not useful as positive evidence of adaptive capacity but is informative as a disqualifier.",
      },
      {
        heading: "Case examples",
        body: "Amazon during the dot-com collapse (2000-2001): ADAPTED. Amazon revised its cost structure, eliminated unprofitable business lines, and publicly acknowledged that its prior growth-at-all-costs model was unsustainable. The post-crisis organization was structurally more efficient and eventually used the discipline forced by the crisis to build the capital-light infrastructure that became AWS.\n\nNetflix and the Qwikster episode (2011): ADAPTED with delay. Netflix's initial response to the DVD-streaming split was poorly executed and publicly reversed under customer pressure. But the underlying strategic insight — that the streaming business required a fundamentally different model — proved correct. The revision was humiliating in the short term and correct in the long term.\n\nNvidia through the dot-com collapse and the GeForce FX failure (2002-2003): ADAPTED. After the GeForce FX was outperformed by ATI's Radeon, Nvidia publicly acknowledged the architectural mistake, revised its design philosophy, and returned with the GeForce 6 series. The organization demonstrated willingness to name a product failure accurately and change direction.\n\nDanaher through the life sciences pivot (2015-2019): ADAPTED. Danaher's separation of Fortive and the subsequent acquisition of GE's biopharma business represented a deliberate model revision away from the diversified industrial archetype toward a focused life-science tools platform. The public communications were explicit about the strategic rationale and the prior model's limitations.\n\nOld Dominion Freight Line through 2008-2009: SURVIVED+. Old Dominion used the freight recession to gain market share from financially stressed competitors while maintaining its service standards. The prior model — invest in service quality through the cycle — proved correct under the most severe test the industry had seen in decades.\n\nConstellation Software and the large-acquisition doctrine revision (2021-2022): ADAPTED. Constellation's founder publicly acknowledged that the company's prior refusal to pursue large acquisitions was a mistake driven by organizational capability constraints rather than principled capital allocation. The revision was explicit, was tied to named evidence, and resulted in a structural change in how Constellation allocates capital.\n\nMicrosoft under Ballmer vs. Nadella: FAILED then ADAPTED. The Ballmer-era Microsoft is the canonical case of a high-D1, low-D2 organization: excellent feedback mechanisms producing a clear picture of a world the organization would not respond to. The transition to Nadella represented a structural model revision — cloud-first, platform-agnostic — that the prior leadership had the data to make but lacked the organizational architecture to execute.",
      },
    ],
  },
  {
    slug: "failure-library",
    group: "shared",
    title: "The Failure Library",
    description:
      "The negative image of the compounder framework. A taxonomy of the 16 ways apparently attractive, high-ROIC businesses become permanent capital mistakes.",
    sections: [
      {
        heading: "Why a failure library",
        body: "Most investment writing collects winners. It studies the businesses that compounded for decades and works backward to find the traits that predicted that outcome. This produces useful pattern recognition, but it also produces survivorship bias — the sample is selected by the outcome being analyzed.\n\nThe Failure Library works from the other direction. It collects the base rates investors prefer to ignore: the ways high-ROIC, famous, apparently durable companies become permanent capital mistakes. Bessembinder's research shows that the median stock underperforms cash over its full life. The failure patterns are not rare exceptions; they are the central tendency. The exceptions are the compounders.\n\nA serious long-duration process needs explicit failure pattern recognition alongside winner pattern recognition. If you only study compounders, you learn how to identify the rare right tail. If you also study failures, you learn how to avoid the fat left tail. The Failure Library is the systematic attempt to make the left tail explicit.",
      },
      {
        heading: "The 16 failure patterns",
        body: "1. Substrate obsolescence. The business is built on a physical, regulatory, or technological substrate that is being replaced by something better and cheaper. The moat is real but temporary — it defends a position that is being made irrelevant. Classic examples include film photography, physical media distribution, and landline telephony.\n\n2. Payer / price-setter compression. The business's economic returns depend on a single or concentrated payer who gradually extracts more of the value. Healthcare services businesses facing insurer consolidation, suppliers facing retailer consolidation, and professional services firms facing procurement rationalization all follow this pattern.\n\n3. Reinvestment-runway exhaustion. The business is excellent but has run out of places to deploy capital at attractive incremental returns. It becomes a dividend machine rather than a compounder — not a failure in the traditional sense, but a permanent derating relative to a business that still has runway.\n\n4. Capital-allocation culture destruction. The founder or capital allocator who built the business's discipline is replaced by operators who optimize for scale or reported earnings rather than returns on incremental capital. The business's culture of capital discipline erodes gradually and then collapses.\n\n5. Balance-sheet time bomb. The business carries debt that is manageable in normal conditions but fatal in a stress scenario. The leverage is often obscured by strong EBITDA coverage ratios that ignore the cyclicality or capital intensity of the underlying business.\n\n6. Roll-up accounting optics. The business uses acquisitions to generate reported EBITDA growth that does not reflect underlying economic returns. Goodwill accumulates, organic growth decelerates, and the gap between reported earnings and free cash flow widens until it can no longer be ignored.\n\n7. Cyclicality mistaken for secular growth. A long upcycle in an end market is interpreted as evidence of structural competitive advantage. The business is valued as a compounder during the upcycle and rerates sharply when the cycle turns. Commodity producers, housing-adjacent businesses, and capital-equipment companies are recurring candidates.\n\n8. Brand without pricing mechanism. The business has high consumer recognition but lacks a structural mechanism that translates brand into durable pricing power. When a lower-priced competitor with comparable quality enters, the brand premium evaporates more quickly than anticipated.\n\n9. Culture destroyed by leadership transition. The founder or transformative leader leaves and is replaced by a manager who lacks the conviction to maintain the cultural practices — decentralization, long-term incentives, candid communication — that produced the prior results. The business degrades gradually over years before the cause becomes visible.\n\n10. Category commoditization. A product or service that was differentiated becomes a commodity as production technology diffuses, IP protection expires, or a better-capitalized competitor decides to compete on price. The moat was real but not permanent.\n\n11. Network-effect reversal. A business with genuine network effects loses critical mass in a key segment, and the network begins to shrink rather than grow. The same dynamics that made the network valuable on the way up accelerate its decline on the way down.\n\n12. Accounting / governance blowup. The business's reported economics were not real. Revenue was recognized too early, costs were capitalized rather than expensed, or related-party transactions obscured the true economics. The blowup is typically preceded by years of clean audits and credible-sounding explanations for the unusual accounting treatment.\n\n13. Terminal-value illusion. The business is valued as if its current economics will continue indefinitely, when in fact the current economics are the peak of a competitive position that is already beginning to erode. The terminal multiple reflects the good years, not the regression to mean that follows.\n\n14. Platform-tax compression. The business generates economics by sitting between two parties and extracting a toll. A more powerful platform — typically a large technology company with a captive user base — enters the same position and charges a lower toll, compressing the original platform's economics without eliminating the market.\n\n15. Founder-dependence reversal. The business's competitive position is inseparable from the specific judgment, relationships, or reputation of one person. When that person leaves, the business loses capabilities that cannot be transferred or institutionalized. The succession risk was underestimated because the founder's contribution was hard to separate from the business's structural position.\n\n16. Demographic / policy tailwind reversal. The business benefited from a multi-decade demographic or policy tailwind that was mistaken for competitive advantage. When the tailwind reverses or plateaus, the underlying economics are revealed to be weaker than the historical returns suggested.",
      },
    ],
  },
  {
    slug: "no-pick-rule",
    group: "25-year",
    title: "The No-Pick Rule",
    description:
      "The quarterly cadence is a commitment device, not a quota. If no candidate clears the underwriting bar, the correct name is no name.",
    sections: [
      {
        heading: "The rule",
        body: "Every quarter, the process produces either a name or a record that no name was made. Both outcomes are valid. The format exists to create accountability over decades, not to force a pick every 90 days.\n\nThis is easy to state and hard to maintain. The pressure to name something is real: the site exists, subscribers are waiting, and a quarter with no pick can feel like a failure. The No-Pick Rule exists specifically to resist that pressure. A skipped quarter is evidence that the process is working, not evidence that it has failed.",
      },
      {
        heading: "Operational requirements",
        body: "A name is made only when all of the following are true. All four filters pass: Survival, Named Mechanism, Reinvestment Runway, and Underwriting. The scorecard clears the threshold. The base-case 25-year IRR clears 8% on EPS per share. The base-case 25-year IRR clears 8% on free cash flow per share. Both IRR tests must pass independently — strong EPS numbers do not compensate for weak FCF numbers.\n\nThesis-break conditions must be explicit before the name is made, not constructed afterward. No material open underwriting question can remain: if the most important assumption in the model is genuinely unknowable, the candidate does not clear. If these conditions are not all met, the ledger records no name for that quarter with the reason noted.",
      },
      {
        heading: "Why it matters",
        body: "The alternative — naming a candidate that almost clears, or adjusting the bar to match the available candidates — would make the entire process meaningless. The 25-year public commitment has value only if the selection process is genuinely discriminating.\n\nThe Good Business / Bad Entry rule is the most common reason for a no-pick outcome. A business can pass the quality work and fail the price work. That is not a near miss. It is a watchlist item with a trigger price, and it belongs in the subscriber short list, not in the public ledger.\n\nThe Insufficient Underwriting rule is the second most common reason. Missing evidence is not rounded up into conviction. If primary-source evidence is missing on a material point — customer retention data, unit economics at scale, management track record in stress — the candidate cannot be named regardless of how compelling the narrative is.",
      },
    ],
  },
  {
    slug: "drawdown-discipline",
    group: "25-year",
    title: "Drawdown Discipline",
    description:
      "Holding through drawdowns is not a slogan. It requires distinguishing thesis-preserving drawdowns from thesis-breaking ones before the pain arrives, not during it.",
    sections: [
      {
        heading: "The problem with drawdown rhetoric",
        body: "Long-horizon investing produces a lot of language about the virtue of holding through volatility. The language is usually correct in the abstract and nearly useless in practice. Telling an investor to hold through a 40% drawdown is advice that requires no thought to give and an enormous amount of framework to follow.\n\nThe problem is not the holding instruction. The problem is that the distinction between a drawdown worth holding through and a drawdown that signals permanent impairment must be worked out before the price falls — not after. Once a position is down 40%, the decision is made under maximum psychological pressure with the least clear thinking available. The discipline has to be in place before that moment arrives.",
      },
      {
        heading: "Thesis-preserving drawdowns",
        body: "A drawdown is thesis-preserving when four conditions hold. The named mechanism remains intact: the structural source of competitive advantage that justified the original name is still present and has not been breached by a competitor or a technology shift. Revenue and margins are recoverable within a defined timeframe: the impairment is cyclical, sentiment-driven, or macro-related, and the underlying unit economics remain intact. The management response works: the organization is using the stress period to strengthen the competitive position — cutting costs that should be cut, investing where competitors are retreating, and communicating clearly about what is temporary and what is permanent. Market share remains stable or improves: the company is not losing customers to competitors during the stress period, which is the most reliable early signal that the competitive position is actually weakening.",
      },
      {
        heading: "Thesis-breaking drawdowns",
        body: "A drawdown is thesis-breaking when any of the following are present. The named mechanism is breached: a competitor has replicated the switching cost, the network has begun to contract, the regulatory position has been challenged, or the physical density advantage is being undercut by a better-capitalized entrant. Revenue or margins have permanently reset: the impairment is not cyclical but structural, and there is no credible path back to prior economics within the thesis horizon. Competitor share gains persist: the company is losing customers at a rate that suggests the competitive position is deteriorating rather than temporarily impaired. The balance sheet is impaired: the stress event has forced the company to take on debt it cannot service at normalized earnings, or to issue equity at a price that permanently dilutes the return calculation. Dilution occurs outside a designed capital plan: equity issuance for survival purposes rather than growth purposes changes the per-share return math and may signal that management's private assessment of the situation differs from its public communications.",
      },
      {
        heading: "The empirical anchors",
        body: "Drawdown severity for long-duration equity investors is not a theoretical concern. Research on long-run stock returns shows that even the best businesses experience severe peak-to-trough declines: among the top wealth-creating stocks over multi-decade periods, median maximum drawdowns have historically been very large — often exceeding 50% even for eventual long-run winners.\n\nThis has two implications. First, the ability to hold through large drawdowns when the thesis is intact is not optional — it is a structural requirement of the long-duration approach. A process that forces selling at 30% drawdowns cannot capture 25-year compounding returns. Second, the ability to exit when the thesis is broken — even at a large loss — is equally important. The permanent impairment scenarios in the Failure Library almost always involve a long period of drawdown rhetoric masking a thesis-breaking event that had already occurred.\n\nNote: specific empirical drawdown statistics for named stocks or indices require source verification before being cited as settled fact. The qualitative pattern — that large drawdowns are normal even for long-run winners — is robust across multiple research sources.",
      },
    ],
  },
];
