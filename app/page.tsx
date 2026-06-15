import Link from "next/link";
import { companiesByTier } from "../data/companies";
import { CompanyCard } from "../components/CompanyCard";
import { SectionHeader } from "../components/SectionHeader";
import { OCore } from "../components/OCore";
import { CTA } from "../components/CTA";

const featured = [...companiesByTier("Core Company"), ...companiesByTier("Featured Company")];
const growth = companiesByTier("Growth Venture");
const community = companiesByTier("Community Product");
const labs = companiesByTier("Labs Product");
const ecosystem = [...growth, ...community, ...labs];

const pillars = [
  {
    n: "01",
    title: "Create",
    text: "We identify real problems and shape them into clear product ideas, company concepts, and practical solutions."
  },
  {
    n: "02",
    title: "Build",
    text: "We develop websites, applications, platforms, systems, and digital products that can be tested, used, and improved in the real world."
  },
  {
    n: "03",
    title: "Grow",
    text: "We support the strongest products as they evolve into companies, ventures, and long-term platforms under the Fonia Labs ecosystem."
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
              We create, grow, and house ventures across technology, business, property,
              health, logistics, compliance, education, community systems, and future
              industries. Our work begins with ideas, develops into products, and grows into
              companies designed to serve people, businesses, institutions, and communities
              globally.
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
            <p style={{ marginTop: 16 }}>
              Fonia Labs exists to turn useful ideas into working systems, and working
              systems into companies that can create value across industries.
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

      {/* About Fonia Labs */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">About Fonia Labs</div>
            <h2>A parent group for bold ideas, working products, and future companies.</h2>
          </div>
          <div>
            <p className="lead">
              Fonia Labs is more than a software brand. It is a parent innovation group
              designed to give rise to companies.
            </p>
            <p style={{ marginTop: 16 }}>
              Every company under Fonia Labs begins with a problem, a vision, and a product.
              Some companies are built to serve businesses. Some are built for communities.
              Some are built for institutions. Others are designed as experiments that can
              grow into larger ventures.
            </p>
            <p style={{ marginTop: 16 }}>
              The goal is simple: build useful things, test them in the real world, grow what
              works, and create companies that can last.
            </p>
          </div>
        </div>
      </section>

      {/* Featured companies */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Featured Companies"
            title="Companies growing under Fonia Labs."
            text="These are some of the leading companies and platforms currently growing under the Fonia Labs ecosystem."
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

      {/* Ecosystem */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="The Fonia Labs Ecosystem"
            title="Ventures, products, and experiments."
            text="Fonia Labs houses a growing ecosystem of companies, ventures, and products across different industries and problem areas."
          />
          <div className="grid cols-3">
            {ecosystem.map((company) => (
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
            title="From idea to company."
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
            This process allows the ecosystem to stay flexible. Some ideas become full
            companies. Some become platforms. Some remain focused products. Others become
            experiments that open the door to future industries.
          </p>
        </div>
      </section>

      {/* Collaboration */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Collaborate</div>
            <h2>Build, test, partner, or collaborate.</h2>
          </div>
          <div>
            <p className="lead">
              Fonia Labs is open to testers, collaborators, partners, early users, and
              supporters who want to help improve products, test platforms, contribute skills,
              or explore business opportunities.
            </p>
            <p style={{ marginTop: 16 }}>
              Each company has its own journey, roadmap, and collaboration needs. Explore the
              companies to see where you can test, partner, support, or build with us.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link className="btn primary" href="/collaborate">
                Explore Opportunities <span className="btn-arrow">→</span>
              </Link>
              <Link className="btn" href="/contact">
                Contact Fonia Labs
              </Link>
            </div>
          </div>
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
              Fonia Labs was founded by Ifidon Abraham with a vision to build companies that
              solve practical problems across industries.
            </p>
            <p style={{ marginTop: 16 }}>
              From software platforms to future business ventures, the goal is to create
              systems that serve people, businesses, institutions, and communities globally.
            </p>
            <p style={{ marginTop: 16 }}>
              Fonia Labs is built on the belief that ideas should not remain ideas. They
              should be shaped, tested, improved, and grown into companies that create real
              value.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link className="btn" href="/about">
                Read About Fonia Labs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Explore the companies growing under Fonia Labs."
        text="From property technology and health platforms to retail support, compliance intelligence, opportunity discovery, and digital services, Fonia Labs is building an ecosystem of companies for the future."
        primary={{ label: "View Companies", href: "/companies" }}
        secondary={{ label: "Partner With Us", href: "/collaborate" }}
      />
    </main>
  );
}
