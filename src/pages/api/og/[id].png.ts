import type { APIRoute } from "astro";
import satori from "satori";
import { Resvg, initWasm } from "@resvg/resvg-wasm";
import { picks, getPickById } from "../../../content/picks.js";
import { getSeries, getComputedPicks } from "../../../lib/store.js";
import { BENCHMARK_TICKER } from "../../../lib/config.js";

export const prerender = false;

// Initialise the WASM module once (Cloudflare Workers compatible)
let wasmInitialized = false;
async function ensureWasm() {
  if (wasmInitialized) return;
  // @ts-ignore — fetch wasm binary from the package
  const wasmModule = await import("@resvg/resvg-wasm/index_bg.wasm");
  await initWasm(wasmModule.default);
  wasmInitialized = true;
}

export const GET: APIRoute = async ({ params, locals }) => {
  const { id } = params;
  const pick = id ? getPickById(id) : undefined;

  if (!pick) {
    return new Response("Not found", { status: 404 });
  }

  try {
    await ensureWasm();
  } catch (err) {
    console.error("[og] WASM init failed:", err);
    return new Response("OG image unavailable", { status: 503 });
  }

  const kv = locals.runtime.env.HOLDING_PERIOD_KV;

  // Try to get cumulative return from computed picks
  let cumReturnStr = "—";
  let benchmarkReturnStr = "—";
  try {
    const computedPicks = await getComputedPicks(kv);
    const pickStats = computedPicks?.find((p) => p.id === pick.id);
    if (pickStats) {
      const sign = (v: number) => (v >= 0 ? "+" : "");
      cumReturnStr = `${sign(pickStats.cumReturn)}${(pickStats.cumReturn * 100).toFixed(1)}%`;
      benchmarkReturnStr = `${sign(pickStats.benchmarkReturn)}${(pickStats.benchmarkReturn * 100).toFixed(1)}%`;
    }
  } catch {
    // silently use defaults
  }

  // Build OG image as SVG using satori
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "1200px",
          height: "630px",
          background: "#0d1117",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          fontFamily: "sans-serif",
        },
        children: [
          // Top: site name
          {
            type: "div",
            props: {
              style: { color: "#6b7280", fontSize: "24px", fontWeight: "500" },
              children: "The Holding Period",
            },
          },
          // Middle: ticker + company + quarter
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column", gap: "12px" },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "baseline",
                      gap: "20px",
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: { color: "#00c896", fontSize: "80px", fontWeight: "700", lineHeight: "1" },
                          children: pick.ticker,
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: { color: "#9ca3af", fontSize: "40px", fontWeight: "400" },
                          children: pick.companyName,
                        },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    style: { color: "#6b7280", fontSize: "28px" },
                    children: `${pick.quarterLabel} Pick · ${pick.thesisHeadline}`,
                  },
                },
              ],
            },
          },
          // Bottom: returns
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                gap: "48px",
                borderTop: "1px solid #1f2937",
                paddingTop: "32px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: { display: "flex", flexDirection: "column", gap: "6px" },
                    children: [
                      {
                        type: "span",
                        props: { style: { color: "#6b7280", fontSize: "18px" }, children: "Cumulative Return" },
                      },
                      {
                        type: "span",
                        props: { style: { color: "#f9fafb", fontSize: "36px", fontWeight: "600" }, children: cumReturnStr },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    style: { display: "flex", flexDirection: "column", gap: "6px" },
                    children: [
                      {
                        type: "span",
                        props: { style: { color: "#6b7280", fontSize: "18px" }, children: "S&P 500 TR (same window)" },
                      },
                      {
                        type: "span",
                        props: { style: { color: "#9ca3af", fontSize: "36px", fontWeight: "600" }, children: benchmarkReturnStr },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [], // Use default system sans-serif
    }
  );

  // Convert SVG to PNG
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
  });
  const png = resvg.render().asPng();

  return new Response(png, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
};
