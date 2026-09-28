import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schema";
import { rateLimit, clientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

export async function POST(req: Request) {
  // 1. Rate limit per IP
  const ip = clientIp(req.headers);
  const rl = rateLimit(`contact:${ip}`, 5, 60_000);
  if (!rl.ok) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429, headers: { "Retry-After": String(rl.retryAfter) } });
  }

  // 2. Content-type guard
  if (!req.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ ok: false, error: "Unsupported media type" }, { status: 415 });
  }

  // 3. Parse + validate (size-bounded)
  let raw: unknown;
  try {
    const text = await req.text();
    if (text.length > 20_000) return NextResponse.json({ ok: false, error: "Payload too large" }, { status: 413 });
    raw = JSON.parse(text);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    // Honeypot or validation failure — respond generically.
    return NextResponse.json({ ok: false, error: parsed.error.issues[0]?.message || "Invalid input" }, { status: 400 });
  }

  const { name, email, reason, message } = parsed.data;

  // 4. Deliver via Resend if configured; otherwise accept + log (form still works).
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "yashkatiyara22@gmail.com";
  const from = process.env.CONTACT_FROM || "Securithm <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set — submission accepted but not emailed:", { name, email, reason });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New Securithm enquiry — ${reason || "General"}`,
      text: `Name: ${name}\nEmail: ${email}\nReason: ${reason || "—"}\n\n${message}`,
      html: `<h2 style="font-family:sans-serif">New Securithm enquiry</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td style="padding:4px 12px 4px 0;color:#666">Name</td><td>${esc(name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Email</td><td>${esc(email)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Reason</td><td>${esc(reason || "—")}</td></tr>
        </table>
        <p style="font-family:sans-serif;white-space:pre-wrap;margin-top:16px">${esc(message)}</p>`,
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send exception:", err);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
