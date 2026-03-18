import { SITE_URL } from "../config.js";
import type { Pick } from "../../content/picks.js";
import type { PickStats } from "../data/types.js";
import type { Topic } from "../../content/topics.js";

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
    title:
      "The Holding Period — Quarterly Stock Picks vs S&P 500 Total Return | 25-Year Log",
    description:
      "A public log of quarterly stock picks held for 25 years, tracking total return against the S&P 500 Total Return index. One pick per quarter. No rebalancing. Every pick public from day one.",
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
          "Quarterly stock picks held 25 years, tracked against the S&P 500 Total Return index.",
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
