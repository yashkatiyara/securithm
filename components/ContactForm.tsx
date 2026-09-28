"use client";
import { useState } from "react";

type State = { kind: "idle" | "loading" | "ok" | "err"; msg: string };

const reasons = [
  "A fraud victim seeking help",
  "An investor",
  "A potential co-founder",
  "An institution / partner (bank, NGO, gov, security team)",
  "A job applicant",
  "An introduction / referral",
  "Something else",
];

export default function ContactForm() {
  const [state, setState] = useState<State>({ kind: "idle", msg: "" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ kind: "loading", msg: "Sending…" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setState({ kind: "ok", msg: "Thanks — your message reached us. We'll reply from a Securithm address." });
        form.reset();
      } else if (res.status === 429) {
        setState({ kind: "err", msg: "You've sent a few messages just now — please wait a minute and try again." });
      } else {
        setState({ kind: "err", msg: json.error || "Couldn't send just now. Email us directly at the address below." });
      }
    } catch {
      setState({ kind: "err", msg: "Network error. Email us directly at the address below." });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* honeypot: bots fill this; humans never see it */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-two">
        <div className="form-row">
          <label htmlFor="c-name">Name <span className="req">*</span></label>
          <input id="c-name" name="name" type="text" required maxLength={100} autoComplete="name" />
        </div>
        <div className="form-row">
          <label htmlFor="c-email">Email <span className="req">*</span></label>
          <input id="c-email" name="email" type="email" required maxLength={200} autoComplete="email" />
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="c-topic">I&apos;m reaching out as</label>
        <select id="c-topic" name="reason" defaultValue={reasons[0]}>
          {reasons.map((r) => <option key={r}>{r}</option>)}
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="c-msg">Message <span className="req">*</span></label>
        <textarea id="c-msg" name="message" required minLength={10} maxLength={4000}
          placeholder="A line or two is plenty. If it's a fraud case and it's urgent, also call 1930 now — don't wait on us." />
      </div>
      <button className="btn btn-primary" type="submit" disabled={state.kind === "loading"}>
        {state.kind === "loading" ? "Sending…" : "Send message"}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>
      </button>
      <p className={`form-status ${state.kind === "ok" ? "ok" : state.kind === "err" ? "err" : ""}`} role="status" aria-live="polite">{state.msg}</p>
      <p className="form-note">We use your details only to reply. Nothing is shared or sold.</p>
    </form>
  );
}
