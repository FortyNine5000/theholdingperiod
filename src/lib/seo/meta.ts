import { SITE_URL } from "../config.js";
import type { Pick } from "../../content/picks.js";
import type { PickStats } from "../data/types.js";
import type { Topic } from "../../content/topics.js";
import type { ResearchArticle } from "../../content/research.js";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  breadcrumbs?: BreadcrumbItem[];
}

// ─── Shared constants ─────────────────────────────────────────────────────────

const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.png`;

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "The Holding Period",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
};

// ─── Breadcrumb helper ────────────────────────────────────────────────────────

export function breadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

// ─── Page meta functions ──────────────────────────────────────────────────────

export function homePageMeta(): PageMeta {
  return {
    title: "The Holding Period — Five-Year Winners, Twenty-Five-Year Experiments",
    description:
      "Public equity research for investors underwriting five-year winners and testing what might endure for twenty-five. Holding-period discipline, S-curve investing, and a public ledger as audit trail.",
    canonical: SITE_URL,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "The Holding Period",
        description:
          "Public equity research platform with two horizons: a practical five-year research lane and a 25-year public experiment, each tracked against the S&P 500 Total Return index.",
      },
      {
        "@context": "https://schema.org",
        ...ORGANIZATION,
      },
    ],
  };
}

export function contactPageMeta(): PageMeta {
  return {
    title: "Contact — The Holding Period",
    description:
      "Get in touch with The Holding Period. Questions about methodology, picks, or the 25-year investment framework.",
    canonical: `${SITE_URL}/contact`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Contact" },
    ],
  };
}

export function picksIndexMeta(): PageMeta {
  return {
    title: "All Picks — The Holding Period | Quarterly Stock Picks Log",
    description:
      "Every quarterly stock pick made on The Holding Period, from the first entry. Each pick is tracked against the S&P 500 Total Return index from the day it was made.",
    canonical: `${SITE_URL}/picks/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Picks" },
    ],
  };
}

export function pickPageMeta(pick: Pick, stats: PickStats | null): PageMeta {
  const canonical = `${SITE_URL}/picks/${pick.id}`;
  const ogImage = `${SITE_URL}/api/og/${pick.id}.png`;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": canonical,
    headline: pick.thesisHeadline,
    datePublished: pick.quarterEnd,
    author: {
      ...ORGANIZATION,
    },
    publisher: {
      ...ORGANIZATION,
    },
    description: pick.metaDescription,
    url: canonical,
    image: ogImage,
    inLanguage: "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };

  return {
    title: pick.pageTitle,
    description: pick.metaDescription,
    canonical,
    ogImage,
    ogType: "article",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Picks", url: `${SITE_URL}/picks/` },
      { name: `${pick.ticker} — ${pick.quarterLabel}` },
    ],
    jsonLd,
  };
}

export function topicsIndexMeta(): PageMeta {
  return {
    title: "Topics — The Holding Period | Long-Term Investing Frameworks",
    description:
      "In-depth guides on the frameworks behind long-horizon equity investing: quality businesses, compounding, valuation, capital allocation, and investor psychology.",
    canonical: `${SITE_URL}/topics/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Topics" },
    ],
  };
}

export function topicPageMeta(topic: Topic): PageMeta {
  const canonical = `${SITE_URL}/topics/${topic.slug}`;
  return {
    title: `${topic.title} — The Holding Period`,
    description: topic.description,
    canonical,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Topics", url: `${SITE_URL}/topics/` },
      { name: topic.title },
    ],
  };
}

export function faqPageMeta(): PageMeta {
  return {
    title: "FAQ — The Holding Period | Common Questions Answered",
    description:
      "Answers to common questions about The Holding Period: how picks are made, how returns are calculated, what the benchmark is, and why CAGR is suppressed under one year.",
    canonical: `${SITE_URL}/faq`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "FAQ" },
    ],
  };
}

export function researchIndexMeta(): PageMeta {
  return {
    title: "Research — The Holding Period",
    description:
      "Frameworks, company studies, and evidence files for long-duration public equity research. The archive is meant to compound.",
    canonical: `${SITE_URL}/research/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Research" },
    ],
  };
}

export function researchArticleMeta(article: ResearchArticle): PageMeta {
  const canonical = `${SITE_URL}/research/${article.slug}/`;
  return {
    title: `${article.title} — The Holding Period`,
    description: article.description,
    canonical,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "article",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Research", url: `${SITE_URL}/research/` },
      { name: article.title },
    ],
  };
}

export function approachPageMeta(
  page: "25-year-hold-thesis" | "5-year-hold"
): PageMeta {
  const titles = {
    "25-year-hold-thesis": "Investment Approach: Hold Period of 25 Years",
    "5-year-hold": "Investment Approach: Hold Period of 5 Years",
  };
  const descriptions = {
    "25-year-hold-thesis":
      "The 25-year public experiment: four filters for long-duration equity selection — Survival, Named Mechanism, Reinvestment Runway, and Underwriting — plus the No-Pick Rule and Drawdown Discipline. CPRT is the 2026 Q2 name.",
    "5-year-hold":
      "The practical five-year research lane: S-curves and the AI stack, return decomposition, a 10% base-case hurdle without multiple expansion, and false-inflection discipline. Five years for tangible business change.",
  };
  const title = titles[page];
  const canonical = `${SITE_URL}/approach/${page}/`;
  return {
    title: `${title} — The Holding Period`,
    description: descriptions[page],
    canonical,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "article",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Investment Approach" },
      { name: title },
    ],
  };
}

export function ledgerIndexMeta(): PageMeta {
  return {
    title: "Public Ledgers — The Holding Period",
    description:
      "The ledgers are audit trails, not the product. The 25-year public experiment and the five-year ledger, each recording what was named, when, and at what price.",
    canonical: `${SITE_URL}/ledger/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Public Ledgers" },
    ],
  };
}

export function ledger25YearMeta(): PageMeta {
  return {
    title: "25-Year Public Ledger — The Holding Period",
    description:
      "The public record of every quarterly 25-year name. One company per quarter, entered into an append-only ledger and tracked against the S&P 500 Total Return index. The ledger is the audit trail, not the product.",
    canonical: `${SITE_URL}/ledger/25-year/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Public Ledgers", url: `${SITE_URL}/ledger/` },
      { name: "25-Year Public Ledger" },
    ],
  };
}

export function ledger5YearMeta(): PageMeta {
  return {
    title: "The 5-Year Ledger — The Holding Period",
    description:
      "A five-year holding-period audit trail. Not a recommendation.",
    canonical: `${SITE_URL}/ledger/5-year/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Public Ledgers", url: `${SITE_URL}/ledger/` },
      { name: "The 5-Year Ledger" },
    ],
  };
}
