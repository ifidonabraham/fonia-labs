import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { companies, getCompany } from "../../../data/companies";
import { OCore } from "../../../components/OCore";
import { BrandBadge } from "../../../components/BrandBadge";
import { getScreenshots } from "../../../lib/screenshots";

export function generateStaticParams() {
  return companies.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const company = getCompany(params.slug);
  if (!company) return { title: "Company Not Found" };
  return {
    title: `${company.name} — ${company.category}`,
    description: company.tagline
  };
}

export default function CompanyPage({ params }: { params: { slug: string } }) {
  const company = getCompany(params.slug);
  if (!company) notFound();

  const shots = getScreenshots(company.slug);
  const hasShots = shots.length > 0;

  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-layout">
          <div>
            <Link className="back-link" href="/companies">
              ← All companies
            </Link>
            <div className="eyebrow">{company.category}</div>
            <h1>{company.name}</h1>
            <span className="badge">{company.badge}</span>
            <p className="wide-text">{company.tagline}</p>
            <div className="actions">
              {company.url ? (
                <a className="btn primary" href={company.url} target="_blank" rel="noopener noreferrer">
                  Visit Live Site <span className="btn-arrow">→</span>
                </a>
              ) : null}
              <Link className="btn" href="/collaborate">
                Collaborate
              </Link>
            </div>
          </div>
          <div className="mock-shot">
            <div>
              <OCore size={88} />
              <h2 style={{ marginTop: 18 }}>{company.name}</h2>
              <p>{company.status}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Overview</div>
            <h2>What {company.name} does</h2>
          </div>
          <div>
            <p className="lead">{company.description}</p>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">The Problem</div>
            <p>{company.problem}</p>
          </div>
          <div className="card">
            <div className="eyebrow">The Solution</div>
            <p>{company.solution}</p>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="section tight">
        <div className="container">
          <div className="section-head">
            <div className="sh-copy">
              <div className="eyebrow">Key Features</div>
              <h2>What it includes</h2>
            </div>
          </div>
          <div className="chips">
            {company.features.map((feature) => (
              <span className="chip" key={feature}>
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Who it serves */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Who It Serves</div>
            <h2>Built for</h2>
          </div>
          <div className="chips">
            {company.users.map((user) => (
              <span className="chip" key={user}>
                {user}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section tight">
        <div className="container">
          <div className="section-head">
            <div className="sh-copy">
              <div className="eyebrow">Product Screenshots</div>
              <h2>A look at {company.name}</h2>
              <p>
                {hasShots
                  ? `Inside ${company.name}.`
                  : "Polished placeholders — real product screenshots will be added here."}
              </p>
            </div>
          </div>
          <div className="shot-grid">
            {hasShots
              ? shots.map((src, i) => (
                  <div className="shot shot--image" key={src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`${company.name} screenshot ${i + 1}`} loading="lazy" />
                  </div>
                ))
              : company.screenshotSlots.map((slot) => (
                  <div className="shot" key={slot}>
                    {slot}
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Status + Roadmap */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">Current Status</div>
            <div className="kv mt-sm">
              <div className="kv-row">
                <span className="kv-k">Status</span>
                <span className="kv-v">{company.status}</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Category</span>
                <span className="kv-v">{company.category}</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Tier</span>
                <span className="kv-v">{company.tier}</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Badge</span>
                <span className="kv-v">{company.badge}</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="eyebrow">Roadmap</div>
            <ul className="list">
              {company.roadmap.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="section tight">
        <div className="container">
          <div className="card">
            <div className="eyebrow">Collaboration & Testing</div>
            <h3>Work with {company.name}</h3>
            <p>{company.collaboration}</p>
            <div className="actions" style={{ marginTop: 18 }}>
              <Link className="btn primary" href="/collaborate">
                Collaborate With {company.name}
              </Link>
              <Link className="btn" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important note */}
      {company.note ? (
        <section className="section tight">
          <div className="container warning-note">
            <p>{company.note}</p>
          </div>
        </section>
      ) : null}

      {/* Fonia Labs badge */}
      <section className="section tight">
        <div className="container">
          <BrandBadge label={company.badge} uid={`badge-${company.slug}`} />
        </div>
      </section>
    </main>
  );
}
