import { SITE_URL } from "../config.js";
import type { Pick } from "../../content/picks.js";
import type { PickStats } from "../data/types.js";

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: "website" | "article";
  jsonLd?: Record<string, unknown>;
}

const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.png`;

export function homePageMeta(): PageMeta {
  return {
    title:
      "The Holding Period — Quarterly Stock Picks vs S&P 500 Total Return | 25-Year Log",
    description:
      "A public log of quarterly stock picks held for 25 years, tracking total return against the S&P 500 Total Return index. One pick per quarter. No rebalancing. Every pick public from day one.",
    canonical: SITE_URL,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  };
}

export function aboutPageMeta(): PageMeta {
  return {
    title: "About — The Holding Period | Long-Term Stock Picks vs S&P 500",
    description:
      "The Holding Period is a public log of quarterly stock picks held for 25 years, tracked against the S&P 500 Total Return index. One pick per quarter. No rebalancing. Total return with reinvestment.",
    canonical: `${SITE_URL}/about`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
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
  };
}

export function pickPageMeta(pick: Pick, stats: PickStats | null): PageMeta {
  const canonical = `${SITE_URL}/picks/${pick.id}`;
  const ogImage = `${SITE_URL}/api/og/${pick.id}.png`;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pick.thesisHeadline,
    datePublished: pick.quarterEnd,
    author: {
      "@type": "Person",
      name: "The Holding Period",
    },
    description: pick.metaDescription,
    url: canonical,
  };

  return {
    title: pick.pageTitle,
    description: pick.metaDescription,
    canonical,
    ogImage,
    ogType: "article",
    jsonLd,
  };
}
