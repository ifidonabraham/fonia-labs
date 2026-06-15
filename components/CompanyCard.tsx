import Link from "next/link";
import type { Company } from "../data/companies";

export function CompanyCard({ company }: { company: Company }) {
  const page = "/companies/" + company.slug;
  return (
    <article className="card company-card">
      <span className="badge">{company.status}</span>
      <p className="meta">{company.category}</p>
      <h3>{company.name}</h3>
      <p>{company.tagline}</p>
      <div className="link-row">
        <Link className="btn primary" href={page}>Explore</Link>
        {company.url ? <a className="btn" href={company.url}>Live Site</a> : null}
      </div>
    </article>
  );
}
