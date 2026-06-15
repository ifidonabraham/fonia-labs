import Link from "next/link";
import type { Company } from "../data/companies";
import { BrandBadge } from "./BrandBadge";

export function CompanyCard({ company }: { company: Company }) {
  const page = "/companies/" + company.slug;
  return (
    <article className="card company-card">
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
    </article>
  );
}
