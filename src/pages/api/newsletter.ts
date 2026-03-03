import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;

  let body: { name?: string; email?: string; website?: string };
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

  const apiKey = env.BEEHIIV_API_KEY;
  const publicationId = env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    console.error("[newsletter] Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID env vars");
    return json({ success: false }, 500);
  }

  // TODO: Add double-opt-in confirmation email here (Beehiiv's send_welcome_email handles basic welcome)

  const beehiivUrl = `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`;

  try {
    const res = await fetch(beehiivUrl, {
      method: "POST",
      headers: {
        "Authorization": `ApiKey ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`[newsletter] Beehiiv API error ${res.status}: ${text}`);
      // Never expose raw API error to client
      return json({ success: false }, 500);
    }

    return json({ success: true }, 200);
  } catch (err) {
    console.error("[newsletter] Fetch error:", err);
    return json({ success: false }, 500);
  }
};

function json(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
