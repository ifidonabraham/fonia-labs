import { notFound } from "next/navigation";
import { companies, getCompany } from "../../../data/companies";

export function generateStaticParams() {
  return companies.map((item) => ({ slug: item.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const company = getCompany(params.slug);
  if (!company) notFound();
  return (
    <main>
      <section className="company-hero"><div className="container company-layout"><div><div className="eyebrow">{company.category}</div><h1>{company.name}</h1><span className="badge">{company.badge}</span><p className="wide-text">{company.tagline}</p><p>{company.description}</p></div><div className="mock-shot"><div><h2>{company.name}</h2><p>{company.status}</p></div></div></div></section>
      <section className="section"><div className="container split"><div><div className="eyebrow">Problem</div><h2>The problem</h2><p>{company.problem}</p></div><div><div className="eyebrow">Solution</div><h2>The solution</h2><p>{company.solution}</p></div></div></section>
      <section className="section"><div className="container grid cols-3">{company.features.map((item) => <div className="card" key={item}><h3>{item}</h3><p>Part of the product direction for {company.name}.</p></div>)}</div></section>
      {company.note ? <section className="section"><div className="container warning-note"><p>{company.note}</p></div></section> : null}
    </main>
  );
}
