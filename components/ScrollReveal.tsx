"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR =
  ".card, .section-head, .flow-step, .shot, .timeline-item, .info-card, .testing-card, .asset-card, .swatch, .featured-update";

/**
 * ScrollReveal — fades and lifts content into view as it scrolls in, applied
 * globally so every page benefits without per-file edits. Runs on each route
 * change, staggers siblings, and is a no-op when the visitor prefers reduced
 * motion (content simply stays visible). The hidden state is only ever added by
 * JS, so without JS everything renders normally.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let observer: IntersectionObserver | null = null;

    const raf = requestAnimationFrame(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
        (el) => !el.closest(".mq") && !el.classList.contains("reveal-auto")
      );

      els.forEach((el) => {
        el.classList.add("reveal-auto");
        const parent = el.parentElement;
        const idx = parent ? Array.prototype.indexOf.call(parent.children, el) : 0;
        el.style.transitionDelay = `${Math.min(idx, 6) * 70}ms`;
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
      );

      els.forEach((el) => observer?.observe(el));
    });

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
