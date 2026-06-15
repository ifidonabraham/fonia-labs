import Link from "next/link";
import { companiesByTier } from "../data/companies";
import { CompanyCard } from "../components/CompanyCard";
import { SectionHeader } from "../components/SectionHeader";
import { OCore } from "../components/OCore";
import { CTA } from "../components/CTA";

const featured = [...companiesByTier("Core Company"), ...companiesByTier("Featured Company")];
const growth = companiesByTier("Growth Company");
const labs = companiesByTier("Labs Product");

const pillars = [
  {
    n: "01",
    title: "Create",
    text: "We identify real problems and shape them into product and company concepts."
  },
  {
    n: "02",
    title: "Build",
    text: "We develop websites, applications, platforms, systems, and digital products."
  },
  {
    n: "03",
    title: "Grow",
    text: "We support the strongest products as they evolve into companies."
  }
];

const flow = ["Idea", "Product", "Platform", "Company", "Growth"];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Global Innovation Group</div>
            <h1>
              Where Ideas Become <span className="gradient-text">Companies.</span>
            </h1>
            <p className="wide-text">
              Fonia Labs is a global innovation group building companies, platforms, and
              products that solve real-world problems.
            </p>
            <p className="muted-line">
              Fonia Labs creates and grows ventures across software, property, health,
              retail, compliance, opportunity discovery, community systems, productivity,
              and future industries.
            </p>
            <div className="actions">
              <Link className="btn primary" href="/companies">
                Explore Companies <span className="btn-arrow">→</span>
              </Link>
              <Link className="btn" href="/collaborate">
                Partner With Us
              </Link>
            </div>
            <div className="hero-strip">
              <span>Startup Factory</span>
              <span>Company Building</span>
              <span>Founder-led</span>
            </div>
          </div>

          <div className="orbit" aria-hidden="true">
            <div className="orbit-ring" />
            <div className="orbit-ring r2" />
            <div className="orbit-ring r3" />
            <span className="orbit-dot d1" />
            <span className="orbit-dot d2" />
            <span className="orbit-dot d3" />
            <span className="orbit-dot d4" />
            <span className="orbit-dot d5" />
            <span className="orbit-dot d6" />
            <div className="orbit-core">
              <OCore size={150} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Mission</div>
            <h2>Building companies for real-world problems.</h2>
          </div>
          <div>
            <p className="lead">
              Our mission is to design, build, and grow products, platforms, and companies
              that make life, business, and institutions work better globally.
            </p>
            <div className="grid cols-3 mt-md">
              {pillars.map((pillar) => (
                <div className="card pillar" key={pillar.n}>
                  <span className="pill-num">{pillar.n}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured companies */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Featured Companies"
            title="Companies growing under Fonia Labs."
            text="The leading companies and active ventures currently positioned in the Fonia Labs ecosystem."
            action={
              <Link className="btn" href="/companies">
                View All Companies
              </Link>
            }
          />
          <div className="grid cols-3">
            {featured.map((company) => (
              <CompanyCard key={company.slug} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* Growth companies */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Growth Companies"
            title="Ventures building toward scale."
            text="Intelligence platforms growing across business, weather, and compliance."
          />
          <div className="grid cols-3">
            {growth.map((company) => (
              <CompanyCard key={company.slug} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* Labs products */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Community & Labs Products"
            title="Focused products and experiments."
            text="Smaller products that solve specific problems and open the door to future industries."
          />
          <div className="grid cols-3">
            {labs.map((company) => (
              <CompanyCard key={company.slug} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* How Fonia Labs works */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="How Fonia Labs Works"
            title="Idea → Product → Platform → Company → Growth"
            text="Fonia Labs starts with real problems, builds products around them, tests those products with users, and grows the strongest ideas into companies."
          />
          <div className="flow">
            {flow.map((step, i) => (
              <div className="flow-step" key={step}>
                <span className="fs-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
          <p className="muted-line mt-md">
            Some ideas become full companies. Some become platforms. Some remain focused
            products. Others become experiments that open the door to future industries.
          </p>
        </div>
      </section>

      {/* Founder vision */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Founder Vision</div>
            <h2>Founder-led. Globally focused.</h2>
          </div>
          <div>
            <p className="lead">
              Fonia Labs was founded and built by Ifidon Abraham with the vision of turning
              real-world problems into useful products, platforms, and companies.
            </p>
            <p>
              Instead of allowing useful ideas to remain scattered or unfinished, the goal
              is to shape them into products, test them with users, and grow the strongest
              ones into companies.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Build, test, or grow with Fonia Labs."
        text="Fonia Labs is open to testers, collaborators, partners, contributors, businesses, and supporters who can help build, test, improve, or grow the ecosystem."
        primary={{ label: "Collaborate With Us", href: "/collaborate" }}
        secondary={{ label: "Contact Fonia Labs", href: "/contact" }}
      />
    </main>
  );
}
