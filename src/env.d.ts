/// <reference types="astro/client" />

interface Env {
  // Cloudflare KV namespace for all cached data
  HOLDING_PERIOD_KV: KVNamespace;

  // Data sources
  ALPHA_VANTAGE_KEY: string;

  // Manual refresh protection
  REFRESH_SECRET: string;

  // Contact form (Resend)
  RESEND_API_KEY: string;

  // Newsletter (Beehiiv)
  BEEHIIV_API_KEY: string;
  BEEHIIV_PUBLICATION_ID: string;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
