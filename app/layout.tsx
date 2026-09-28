import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted fonts (no third-party requests; satisfies the strict CSP).
const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
});
const serif = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});
const mono = localFont({
  src: "./fonts/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-mono",
  display: "swap",
  weight: "100 800",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://securithm.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Securithm — Security through algorithms, built to help people",
    template: "%s · Securithm",
  },
  description:
    "Securithm is a cybersecurity and digital-forensics company built to help India fight online fraud — a private anti-scam centre with success-based fund recovery, security-as-a-service, and a long-term forensic-AI vision.",
  keywords: ["cybersecurity", "digital forensics", "fraud recovery", "anti-scam", "India", "penetration testing", "Securithm"],
  authors: [{ name: "Securithm" }],
  openGraph: {
    title: "Securithm — Security through algorithms",
    description:
      "India loses more money to online fraud than almost anywhere on earth — and there's still nowhere private you can call to get it back. Securithm exists to change that.",
    url: SITE_URL,
    siteName: "Securithm",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Securithm", description: "Security through algorithms, built to help people." },
  icons: {
    icon: [
      { url: "/mark.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#08090c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
