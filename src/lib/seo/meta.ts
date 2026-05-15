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
    title: "The Holding Period — Long-Duration Equity Research",
    description:
      "A search for what may be worth holding for 25 years, and an attempt to define what is not. Long-duration public equity research built on Bessembinder's return-concentration findings.",
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
          "Long-duration public equity research platform. Quarterly names held 25 years, tracked against the S&P 500 Total Return index.",
      },
      {
        "@context": "https://schema.org",
        ...ORGANIZATION,
      },
    ],
  };
}

export function aboutPageMeta(): PageMeta {
  const canonical = `${SITE_URL}/about`;
  const faqs = [
    {
      "@type": "Question",
      name: "Why a 25-year holding period?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Twenty-five years is long enough that near-term volatility is genuinely irrelevant. The quality of the underlying business — its competitive position, capital allocation discipline, and ability to compound retained earnings — becomes the dominant variable over that horizon.",
      },
    },
    {
      "@type": "Question",
      name: "How are stock returns calculated on The Holding Period?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All returns are total return: dividends reinvested, splits adjusted. Individual stocks use adjusted close price series. The benchmark is the S&P 500 Total Return index, which assumes dividend reinvestment at the index level.",
      },
    },
    {
      "@type": "Question",
      name: "What is the portfolio model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fixed dollar amount is invested in each quarterly pick on the last trading day of that quarter. The same amount is invested in the S&P 500 Total Return index on the same date. There is no rebalancing — each position is held at its original lot size indefinitely.",
      },
    },
    {
      "@type": "Question",
      name: "Is The Holding Period investment advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Holding Period is a personal investment log published publicly so the results cannot be cherry-picked. Nothing here should be read as a recommendation to buy or sell any security.",
      },
    },
  ];

  return {
    title: "About — The Holding Period | Long-Term Stock Picks vs S&P 500",
    description:
      "The Holding Period is a public log of quarterly stock picks held for 25 years, tracked against the S&P 500 Total Return index. One pick per quarter. No rebalancing. Total return with reinvestment.",
    canonical,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "About" },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs,
    },
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
      "@type": "Organization",
      ...ORGANIZATION,
    },
    publisher: {
      "@type": "Organization",
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
  page: "25-year-hold-thesis" | "negative-portfolio"
): PageMeta {
  const titles = {
    "25-year-hold-thesis": "The 25-Year Hold Thesis",
    "negative-portfolio": "The Negative Portfolio",
  };
  const descriptions = {
    "25-year-hold-thesis":
      "Four filters for 25-year equity selection: Survival, Named Mechanism, Reinvestment Runway, and Underwriting. Plus the No-Pick Rule and Drawdown Discipline.",
    "negative-portfolio":
      "The Subtraction Framework and Failure Library: 16 patterns by which apparently durable businesses become permanent capital mistakes.",
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

export function ledgerPageMeta(): PageMeta {
  return {
    title: "Public Ledger — The Holding Period",
    description:
      "The public record of every quarterly name. The ledger is not the product. It is the audit trail. Every pick tracked against the S&P 500 Total Return index.",
    canonical: `${SITE_URL}/ledger/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Public Ledger" },
    ],
  };
}
