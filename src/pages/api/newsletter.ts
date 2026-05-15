import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  let env: Record<string, string | undefined>;
  try {
    env = locals.runtime.env as Record<string, string | undefined>;
  } catch (err) {
    console.error("[newsletter] locals.runtime.env unavailable:", err);
    return json({ success: false, code: "runtime_unavailable" }, 500);
  }

  let body: { email?: string; website?: string };
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "Invalid JSON" }, 400);
  }

  // Honeypot check — silently succeed if filled by a bot
  if (body.website && body.website.trim() !== "") {
    return json({ success: true }, 200);
  }

  const email = (body.email ?? "").trim();
  if (!email) {
    return json({ success: false, error: "Email required" }, 400);
  }

  const apiKey = env.KIT_API_KEY;
  if (!apiKey) {
    console.error("[newsletter] Missing KIT_API_KEY env var");
    return json({ success: false, code: "missing_env" }, 500);
  }

  try {
    const res = await fetch("https://api.convertkit.com/v3/forms/9248994/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: apiKey, email }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`[newsletter] Kit API error ${res.status}: ${text}`);
      return json({ success: false, code: "kit_error" }, 500);
    }

    return json({ success: true }, 200);
  } catch (err) {
    console.error("[newsletter] Fetch error:", err);
    return json({ success: false, code: "fetch_error" }, 500);
  }
};

function json(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
