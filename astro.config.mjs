// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://theholdingperiod.com",
  redirects: {
    "/picks/": "/ledger/",
    "/topics/": "/research/",
    "/topics/stock-return-concentration": "/research/return-concentration/",
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
