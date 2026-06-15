"use client";

import { useEffect } from "react";

/**
 * CardSpotlight — a single delegated listener that gives every `.card` on the
 * site a cursor-following spotlight (via --mx / --my CSS vars). Mounted once in
 * the layout, so it works across pages and client navigations without props.
 */
export function CardSpotlight() {
  useEffect(() => {
    let frame = 0;
    let pending: { card: HTMLElement; x: number; y: number } | null = null;

    function apply() {
      frame = 0;
      if (!pending) return;
      const { card, x, y } = pending;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${x - rect.left}px`);
      card.style.setProperty("--my", `${y - rect.top}px`);
    }

    function onMove(e: PointerEvent) {
      const target = e.target as HTMLElement | null;
      const card = target?.closest<HTMLElement>(".card");
      if (!card) return;
      pending = { card, x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(apply);
    }

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
