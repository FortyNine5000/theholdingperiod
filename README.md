# The Holding Period

A public log of quarterly long-term stock picks tracked against the S&P 500 Total Return index.
One stock per quarter. Hold 25 years. No rebalancing. Every pick logged from day one. 

**Live site:** https://theholdingperiod.com

---

## Tech Stack

- **Framework:** [Astro 5](https://astro.build) with `output: "hybrid"` (SSR + static)
- **Hosting:** Cloudflare Workers
- **Data cache:** Cloudflare KV
- **Daily refresh:** Cloudflare Cron Trigger (22:30 UTC)
- **Newsletter:** Beehiiv API
- **Contact email:** Resend API
- **Data sources:** Yahoo Finance (primary), Alpha Vantage (fallback)

---

## Local Development

### Prerequisites
- Node.js 18+
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

### Setup

```bash
git clone https://github.com/FortyNine5000/theholdingperiod.git
cd theholdingperiod
npm install
```

### Create local environment variables

Create `.dev.vars` (excluded from git) in the project root:

```
ALPHA_VANTAGE_KEY=D4EKGIJJ3H52XYM0
REFRESH_SECRET=your-chosen-secret
RESEND_API_KEY=your-resend-api-key
BEEHIIV_API_KEY=3e1aca95-8719-4e39-b4c0-4bf457522210
BEEHIIV_PUBLICATION_ID=your-beehiiv-publication-id
```

### Run locally

```bash
npm run dev
```

Astro starts at http://localhost:4321. The site shows empty states until you seed the KV
cache via the refresh endpoint (see below).

### Seed local KV data

```bash
curl -X POST http://localhost:4321/api/refresh \
  -H "Authorization: Bearer your-chosen-secret"
```

This fetches live data from Yahoo Finance and populates the local KV emulation (`.wrangler/state/`).

---

## Required Environment Variables

Set these in the **Cloudflare dashboard** under Workers & Pages → your project → Settings → Variables:

| Variable | Description | Where to get it |
|---|---|---|
| `ALPHA_VANTAGE_KEY` | Alpha Vantage API key (fallback data source) | [alphavantage.co](https://www.alphavantage.co/support/#api-key) — free |
| `REFRESH_SECRET` | Bearer token protecting `POST /api/refresh` | `openssl rand -hex 32` |
| `RESEND_API_KEY` | Resend API key for contact form emails | [resend.com](https://resend.com) → API Keys |
| `BEEHIIV_API_KEY` | Beehiiv API key for newsletter signups | Beehiiv dashboard → Settings → API |
| `BEEHIIV_PUBLICATION_ID` | Your Beehiiv publication ID | Beehiiv dashboard → Settings → Publication |

---

## Cloudflare KV Namespace Setup

1. Cloudflare dashboard → **Workers & Pages → KV** → Create namespace `HOLDING_PERIOD_KV`.
2. Copy the namespace ID.
3. Update `wrangler.json`:
   ```json
   "kv_namespaces": [
     {
       "binding": "HOLDING_PERIOD_KV",
       "id": "PASTE_YOUR_NAMESPACE_ID",
       "preview_id": "PASTE_YOUR_PREVIEW_NAMESPACE_ID"
     }
   ]
   ```

**KV key schema:**
| Key | Content |
|---|---|
| `series:{TICKER}` | Full daily price series JSON (e.g. `series:WSO`) |
| `computed:picks` | Precomputed pick stats array JSON |
| `computed:portfolio` | Precomputed portfolio simulation JSON |
| `meta:lastRefresh` | ISO timestamp of last successful refresh |

---

## Cron Trigger Configuration

Defined in `wrangler.json` — fires daily at **22:30 UTC (5:30 PM ET)** after US markets close:

```json
"triggers": { "crons": ["30 22 * * *"] }
```

> **Cloudflare Pages vs Workers:** If deploying to Cloudflare Pages (not Workers), cron triggers
> work differently. The simplest workaround is an external cron service (e.g., cron-job.org) that
> hits `POST /api/refresh` with the correct Bearer token each evening.

---

## GitHub → Cloudflare Pages Deploy

1. Push repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add all environment variables under **Settings → Variables**.
5. Every push to `main` deploys automatically.

---

## How to Add a New Quarterly Pick

1. Open `src/content/picks.ts`.
2. Add a new entry to the `picks` array:
   ```typescript
   {
     id: "ticker-yyyy-qN",          // e.g. "msft-2026-q1"
     ticker: "TICKER",
     companyName: "Company Name",
     quarterLabel: "YYYY QN",
     quarterEnd: "YYYY-MM-DD",      // last calendar day of quarter
     pageTitle: "...",
     metaDescription: "...",        // 150-160 chars
     ogHeadline: "...",
     thesisHeadline: "...",
     thesisIntro: "...",
     thesisSections: [ { heading: "...", body: "..." } ],
     whatWouldMakeWrong: "...",
     whatToWatch: "...",
   }
   ```
3. Trigger a data refresh (see below).
4. Redeploy (or the cron job picks it up that evening).

### SEO checklist for new picks
- [ ] `pageTitle`: 55–65 chars, includes ticker + "The Holding Period"
- [ ] `metaDescription`: 150–160 chars
- [ ] `thesisIntro` + `thesisSections`: minimum 400 words total
- [ ] `whatWouldMakeWrong`: honest, specific bear case
- [ ] `whatToWatch`: 2–3 concrete trackable metrics

---

## How to Change the Contribution Amount

Edit `src/lib/config.ts`:

```typescript
export const CONTRIBUTION_USD = 10_000;  // actual $ per quarter
export const NORMALIZED_BASE = 1_000;   // display normalization
```

Returns and CAGR percentages are identical in both views — only dollar amounts scale.

---

## How to Manually Trigger a Data Refresh

```bash
# Production
curl -X POST https://theholdingperiod.com/api/refresh \
  -H "Authorization: Bearer YOUR_REFRESH_SECRET"

# Local dev
curl -X POST http://localhost:4321/api/refresh \
  -H "Authorization: Bearer your-chosen-secret"
```

Success response: `{ "success": true, "timestamp": "...", "sources": { ... } }`

A failed refresh never overwrites existing KV data — the site always serves the last
successful snapshot (stale-safe design).

---

## Project Structure

```
src/
├── pages/
│   ├── index.astro           # Home dashboard (SSR, reads KV)
│   ├── about.astro           # About / methodology (static)
│   ├── contact.astro         # Contact form (static)
│   ├── picks/[id].astro      # Pick detail page (SSR, reads KV)
│   ├── api/
│   │   ├── refresh.ts        # POST: data refresh (cron + manual)
│   │   ├── newsletter.ts     # POST: Beehiiv newsletter signup
│   │   ├── contact.ts        # POST: Resend contact email
│   │   └── og/[id].png.ts    # GET: dynamic OG image
│   ├── sitemap.xml.ts        # Auto-generated sitemap
│   └── robots.txt.ts         # robots.txt
├── lib/
│   ├── config.ts             # CONTRIBUTION_USD, NORMALIZED_BASE, SITE_URL
│   ├── store.ts              # Typed Cloudflare KV wrappers
│   ├── data/
│   │   ├── types.ts          # Shared TypeScript interfaces
│   │   ├── yahoo.ts          # Yahoo Finance API client
│   │   ├── alphaVantage.ts   # Alpha Vantage fallback
│   │   ├── compute.ts        # Returns, CAGR, portfolio simulation
│   │   └── calendar.ts       # Quarter-end entry date resolver
│   └── seo/
│       └── meta.ts           # Per-page SEO meta helpers
├── content/
│   └── picks.ts              # Pick type + seed data (WSO Q3-2025, NVR Q4-2025)
├── components/
│   ├── SEOHead.astro         # Meta, OG tags, Twitter card, JSON-LD
│   ├── Header.astro          # Site navigation
│   ├── Footer.astro          # Minimal footer + disclosure
│   ├── Explainer.astro       # Methodology explainer
│   ├── PicksTable.astro      # Picks performance table
│   ├── PortfolioToggle.astro # Actual / Normalized view toggle
│   ├── PortfolioTable.astro  # Portfolio summary table
│   ├── NewsletterSignup.astro # Beehiiv signup form
│   └── PickChart.astro       # Chart.js pick vs benchmark chart
└── styles/
    └── global.css            # Design system (dark finance theme)
```
