import type { APIRoute } from "astro";
import { picks } from "../content/picks.js";
import { researchArticles } from "../content/research.js";
import { SITE_URL } from "../lib/config.js";

export const prerender = true;

const buildDate = new Date().toISOString().slice(0, 10);

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const staticPages: SitemapUrl[] = [
  {
    loc: `${SITE_URL}/`,
    lastmod: buildDate,
    changefreq: "daily",
    priority: "1.0",
  },
  {
    loc: `${SITE_URL}/research/`,
    lastmod: buildDate,
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    loc: `${SITE_URL}/approach/5-year-hold/`,
    lastmod: buildDate,
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    loc: `${SITE_URL}/approach/25-year-hold-thesis/`,
    lastmod: buildDate,
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    loc: `${SITE_URL}/ledger/`,
    lastmod: buildDate,
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    loc: `${SITE_URL}/ledger/25-year/`,
    lastmod: buildDate,
    changefreq: "daily",
    priority: "0.7",
  },
  {
    loc: `${SITE_URL}/ledger/5-year/`,
    lastmod: buildDate,
    changefreq: "monthly",
    priority: "0.5",
  },
  {
    loc: `${SITE_URL}/faq`,
    lastmod: buildDate,
    changefreq: "monthly",
    priority: "0.5",
  },
  {
    loc: `${SITE_URL}/contact`,
    lastmod: buildDate,
    changefreq: "yearly",
    priority: "0.4",
  },
];

const pickPages: SitemapUrl[] = picks.map((pick) => ({
  loc: `${SITE_URL}/picks/${pick.id}`,
  lastmod: pick.quarterEnd,
  changefreq: "daily",
  priority: "0.9",
}));

const researchPages: SitemapUrl[] = researchArticles.map((article) => ({
  loc: `${SITE_URL}/research/${article.slug}/`,
  lastmod: buildDate,
  changefreq: "monthly",
  priority: "0.6",
}));

const allUrls = [...staticPages, ...pickPages, ...researchPages];

function xml(urls: SitemapUrl[]): string {
  const urlset = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;
}

export const GET: APIRoute = () => {
  return new Response(xml(allUrls), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
