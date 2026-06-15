import Link from "next/link";
import { companies } from "../data/companies";
import { CompanyCard } from "../components/CompanyCard";

const featuredSlugs = ["fontech", "omegaestate", "smaid", "dokito", "seek"];
const featured = companies.filter((company) => featuredSlugs.includes(company.slug));
const other = companies.filter((company) => !featuredSlugs.includes(company.slug));

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Global Innovation Group</div>
            <h1>Where Ideas Become Companies.</h1>
            <p className="wide-text">Fonia Labs is a global innovation group building companies, platforms, and products that solve real-world problems.</p>
            <p>Founded and built by Ifidon Abraham, Fonia Labs creates and grows ventures across software, property, health, retail, compliance, opportunity discovery, community systems, productivity, and future industries.</p>
            <div className="actions">
              <Link className="btn primary" href="/brands">Explore Companies</Link>
              <Link className="btn" href="/about">About Fonia Labs</Link>
            </div>
          </div>
          <div className="orbit-card">
            <div className="big-core">FL</div>
            <p>Fonia Labs Ecosystem</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Mission</div>
            <h2>Building companies for real-world problems.</h2>
          </div>
          <div>
            <p>Our mission is to design, build, and grow products, platforms, and companies that make life, business, and institutions work better globally.</p>
            <div className="grid cols-3">
              <div className="card"><h3>Create</h3><p>We identify real problems and shape them into product ideas.</p></div>
              <div className="card"><h3>Build</h3><p>We build websites, apps, platforms, systems, and products.</p></div>
              <div className="card"><h3>Grow</h3><p>We grow the strongest products into companies under Fonia Labs.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">Featured Companies</div><h2>Companies growing under Fonia Labs.</h2></div>
            <p>These are the leading companies and active ventures currently positioned in the Fonia Labs ecosystem.</p>
          </div>
          <div className="grid cols-3">{featured.map((company) => <CompanyCard key={company.slug} company={company} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">More Ventures</div><h2>Growth companies and labs products.</h2></div>
            <Link className="btn" href="/brands">View All</Link>
          </div>
          <div className="grid cols-3">{other.map((company) => <CompanyCard key={company.slug} company={company} />)}</div>
        </div>
      </section>
    </main>
  );
}
