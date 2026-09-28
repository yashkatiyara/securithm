# Securithm

Company website for **Securithm** — a cybersecurity & digital-forensics firm
(private anti-scam centre, security-as-a-service, long-term forensic-AI vision).

Dynamic app: **Next.js 16 (App Router) + TypeScript + React 19**, self-hosted fonts,
a hardened contact API, and strict security headers. Deployed on **Vercel**.

## Run locally
```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
```

## Backend — contact API (`/api/contact`)
- zod validation, honeypot field, per-IP rate limit (5/min), method + content-type + size guards
- Emails each submission via **Resend** when `RESEND_API_KEY` is set (otherwise accepted + logged)
- Escapes all user input in the HTML email

## Security
- CSP, HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`; `X-Powered-By` removed (see `next.config.ts`)
- No third-party runtime requests (fonts self-hosted in `app/fonts/`)

## Configure (Vercel → Settings → Environment Variables)
| Var | Purpose |
|-----|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata/OG |
| `NEXT_PUBLIC_CAREERS_URL` | Google Form link; until set, Careers button shows "Applications open soon" |
| `RESEND_API_KEY` | Enables contact-form email delivery |
| `CONTACT_TO` | Inbox that receives submissions |
| `CONTACT_FROM` | Verified sender (use `onboarding@resend.dev` to test) |
