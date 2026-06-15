"use client";

import Link from "next/link";
import { campaigns } from "../data/marketing";

/**
 * MarketingShowcase — a seamless, auto-scrolling marquee of company campaign
 * posters, the way a venture studio would show its portfolio in motion.
 * Pauses on hover/focus and falls back to a scrollable row when the visitor
 * prefers reduced motion.
 */
export function MarketingShowcase() {
  // Duplicate the list so the marquee can loop without a visible seam.
  const loop = [...campaigns, ...campaigns];

  return (
    <div className="mq" aria-label="Company campaign posters">
      <div className="mq-track">
        {loop.map((c, i) => (
          <Link
            key={`${c.slug}-${i}`}
            href={`/companies/${c.slug}`}
            className="mq-card"
            aria-label={`${c.name} — ${c.tagline}`}
            aria-hidden={i >= campaigns.length}
            tabIndex={i >= campaigns.length ? -1 : 0}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.src} alt={`${c.name} campaign — ${c.tagline}`} loading="lazy" draggable={false} />
            <div className="mq-overlay">
              <span className="mq-name">{c.name}</span>
              <span className="mq-cta">View campaign →</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mq-fade mq-fade-l" aria-hidden="true" />
      <div className="mq-fade mq-fade-r" aria-hidden="true" />
    </div>
  );
}
