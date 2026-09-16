/**
 * Motion primitives. GSAP is used only where it earns its weight:
 * masked type entrances and scroll-linked parallax. Everything else is CSS.
 */
import { useEffect, useRef } from "react";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Reveal children marked with `data-reveal` as they enter the viewport. */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!targets.length) return;

    if (reduced()) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset["revealDelay"] ?? 0);
          window.setTimeout(() => el.classList.add("is-revealed"), delay);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return ref;
}

/**
 * Masked line-by-line entrance for hero typography.
 * Pure CSS transitions with a staggered delay — cheaper and smoother than a
 * JS timeline for a one-shot page-load animation.
 */
export function useLineEntrance<T extends HTMLElement = HTMLDivElement>(delay = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const inners = Array.from(root.querySelectorAll<HTMLElement>(".line-inner"));
    if (!inners.length) return;

    if (reduced()) {
      inners.forEach((el) => (el.style.transform = "none"));
      return;
    }

    const frame = requestAnimationFrame(() => {
      inners.forEach((el, i) => {
        el.style.transitionProperty = "transform";
        el.style.transitionDuration = "1.35s";
        el.style.transitionTimingFunction = "cubic-bezier(0.16, 1, 0.3, 1)";
        el.style.transitionDelay = `${delay + i * 0.09}s`;
        el.style.transform = "translateY(0)";
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [delay]);

  return ref;
}

/**
 * Scroll-linked parallax for large media. Desktop only — mobile keeps media
 * static so scrolling stays smooth with heavy imagery.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 12) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    if (window.matchMedia("(max-width: 900px)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      const media = el.querySelector<HTMLElement>("[data-parallax-media]");
      if (media) media.style.transform = `translate3d(0, ${(-progress * strength).toFixed(2)}%, 0) scale(1.14)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return ref;
}
