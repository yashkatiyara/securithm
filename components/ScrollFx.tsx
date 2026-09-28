"use client";
import { useEffect } from "react";

/** All progressive-enhancement interactions, mounted once. Reduced-motion aware. */
export default function ScrollFx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll progress
    const bar = document.querySelector<HTMLElement>(".scroll-progress");
    const onScroll = () => {
      if (!bar) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Reveal
    const revs = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let io: IntersectionObserver | undefined;
    if (reduce || !("IntersectionObserver" in window)) {
      revs.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io!.unobserve(en.target); } }),
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revs.forEach((el) => io!.observe(el));
    }

    // Count-up
    let io2: IntersectionObserver | undefined;
    if (!reduce && "IntersectionObserver" in window) {
      io2 = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          io2!.unobserve(en.target);
          const el = en.target as HTMLElement;
          const target = parseFloat(el.dataset.count || "0");
          const dec = parseInt(el.dataset.dec || "0", 10);
          let t0: number | null = null;
          const dur = 1400;
          const step = (ts: number) => {
            if (t0 === null) t0 = ts;
            const p = Math.min((ts - t0) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            el.textContent = (target * e).toFixed(dec);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      }, { threshold: 0.6 });
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => io2!.observe(el));
    }

    // Active nav
    const navLinks: Record<string, HTMLAnchorElement> = {};
    document.querySelectorAll<HTMLAnchorElement>('#primary-nav a[href^="#"]').forEach((a) => {
      navLinks[a.getAttribute("href")!.slice(1)] = a;
    });
    let io3: IntersectionObserver | undefined;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (sections.length && "IntersectionObserver" in window) {
      io3 = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          const link = navLinks[en.target.id];
          if (link && en.isIntersecting) {
            Object.values(navLinks).forEach((l) => l.removeAttribute("aria-current"));
            link.setAttribute("aria-current", "page");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach((s) => io3!.observe(s));
    }

    // Particle canvas
    let raf = 0;
    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
    let cleanupCanvas = () => {};
    if (canvas && !reduce) {
      const ctx = canvas.getContext("2d")!;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let W = 0, H = 0;
      let dots: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
      const size = () => {
        W = canvas.clientWidth; H = canvas.clientHeight;
        canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const n = Math.max(28, Math.min(70, Math.floor(W / 22)));
        dots = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.8 + 0.6 }));
      };
      const frame = () => {
        ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < dots.length; i++) {
          const d = dots[i];
          d.x += d.vx; d.y += d.vy;
          if (d.x < 0 || d.x > W) d.vx *= -1;
          if (d.y < 0 || d.y > H) d.vy *= -1;
          for (let j = i + 1; j < dots.length; j++) {
            const e = dots[j], dx = d.x - e.x, dy = d.y - e.y, dist = dx * dx + dy * dy;
            if (dist < 12000) {
              ctx.strokeStyle = `rgba(255,181,71,${(1 - dist / 12000) * 0.18})`;
              ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(e.x, e.y); ctx.stroke();
            }
          }
          ctx.fillStyle = "rgba(255,197,110,.7)";
          ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, 6.283); ctx.fill();
        }
        raf = requestAnimationFrame(frame);
      };
      size(); frame();
      let rt: ReturnType<typeof setTimeout>;
      const onResize = () => { clearTimeout(rt); rt = setTimeout(() => { cancelAnimationFrame(raf); size(); frame(); }, 200); };
      const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else frame(); };
      window.addEventListener("resize", onResize);
      document.addEventListener("visibilitychange", onVis);
      cleanupCanvas = () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); document.removeEventListener("visibilitychange", onVis); };
    }

    // Year
    const y = document.getElementById("year"); if (y) y.textContent = String(new Date().getFullYear());

    return () => {
      document.removeEventListener("scroll", onScroll);
      io?.disconnect(); io2?.disconnect(); io3?.disconnect();
      cleanupCanvas();
    };
  }, []);

  return null;
}
