/**
 * Best-effort in-memory rate limiter (per warm serverless instance).
 * Good enough to blunt casual abuse on a low-traffic marketing site.
 * For hard guarantees across instances, swap in @upstash/ratelimit (Redis).
 */
type Bucket = { count: number; reset: number };
const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, limit = 5, windowMs = 60_000): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || now > b.reset) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }
  b.count += 1;
  if (b.count > limit) return { ok: false, retryAfter: Math.ceil((b.reset - now) / 1000) };
  return { ok: true, retryAfter: 0 };
}

export function clientIp(headers: Headers): string {
  const xff = headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return headers.get("x-real-ip") || "unknown";
}
