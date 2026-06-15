"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import type { Company } from "../data/companies";
import { BrandBadge } from "./BrandBadge";

/**
 * CompanyCard — a premium card with a cursor-following spotlight and an
 * animated accent edge, so the ecosystem reads like a venture studio rather
 * than a generic listing.
 */
export function CompanyCard({ company }: { company: Company }) {
  const page = "/companies/" + company.slug;

  function handleMove(e: MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <article className="card company-card company-card--spot" onMouseMove={handleMove}>
      <span className="cc-spot" aria-hidden="true" />
      <span className="cc-edge" aria-hidden="true" />
      <div className="cc-body">
        <div className="cc-top">
          <p className="meta">{company.category}</p>
          <span className="status-pill">{company.status}</span>
        </div>
        <h3>{company.name}</h3>
        <p className="cc-desc">{company.tagline}</p>
        <BrandBadge badge={company.badge} />
        <div className="link-row">
          <Link className="btn primary" href={page}>
            Explore <span className="btn-arrow">→</span>
          </Link>
          {company.url ? (
            <a className="btn" href={company.url} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
