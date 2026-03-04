import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;

  let body: { name?: string; email?: string; message?: string; website?: string };
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "Invalid JSON" }, 400);
  }

  // Honeypot — silently discard
  if (body.website && body.website.trim() !== "") {
    return json({ success: true }, 200);
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!email || !message) {
    return json({ success: false, error: "Email and message required" }, 400);
  }

  const resendKey = env.RESEND_API_KEY;
  if (!resendKey) {
    console.error("[contact] Missing RESEND_API_KEY env var");
    return json({ success: false }, 500);
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@theholdingperiod.com",
        to: ["theholdingperiodemail@gmail.com"],
        reply_to: email,
        subject: `Contact form: ${name || email}`,
        text: `Name: ${name || "(not provided)"}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`[contact] Resend API error ${res.status}: ${text}`);
      return json({ success: false }, 500);
    }

    return json({ success: true }, 200);
  } catch (err) {
    console.error("[contact] Fetch error:", err);
    return json({ success: false }, 500);
  }
};

function json(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
