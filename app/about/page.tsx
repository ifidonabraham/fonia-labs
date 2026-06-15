import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
import { SectionHeader } from "../../components/SectionHeader";
import { CTA } from "../../components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fonia Labs is a global innovation group building companies, platforms, and products that solve real-world problems."
};

const whatWeBuild = [
  ["Software & Digital Services", "FonTech"],
  ["Property Technology", "OmegaEstate"],
  ["Retail & Logistics Support", "SMaid"],
  ["Health Technology", "Dokito"],
  ["Opportunity Discovery", "Seek"],
  ["Contract & Business Intelligence", "ContractFeed"],
  ["Weather & Emergency Intelligence", "StormBridge"],
  ["Compliance & Risk Intelligence", "ComplyIQ"],
  ["Community & Labs Products", "UnilagFoodSpots, Deadline Dungeon & SystemGuardian"]
];

const how = [
  "Identify real problems",
  "Shape ideas into products",
  "Build working platforms",
  "Test with real users",
  "Grow into companies"
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="About Fonia Labs"
        text="Fonia Labs is a global innovation group building companies, platforms, and products that solve real-world problems."
        support="Fonia Labs creates, grows, and houses companies across technology, business, property, health, logistics, compliance, opportunity discovery, education, community systems, productivity, and future industries."
      />

      {/* Who we are */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Who We Are</div>
            <h2>A parent group for companies built from ideas.</h2>
          </div>
          <div>
            <p className="lead">
              Fonia Labs is not just a software brand, project list, or personal portfolio.
              It is a company-building ecosystem designed to turn useful ideas into
              structured products, working platforms, and future companies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">Mission</div>
            <p>
              To design, build, and grow products, platforms, and companies that make life,
              business, and institutions work better globally.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Vision</div>
            <p>
              To become a global company-building ecosystem where ideas become products,
              products become platforms, and platforms become companies.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What We Build"
            title="Companies across many industries."
            text="Fonia Labs builds and houses companies and products spanning software, property, health, retail, intelligence platforms, and community systems."
          />
          <div className="grid cols-3">
            {whatWeBuild.map(([area, via]) => (
              <div className="card" key={area}>
                <h3>{area}</h3>
                <p className="meta">via {via}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">How Fonia Labs Works</div>
            <h2>From problem to company.</h2>
          </div>
          <div>
            <ul className="list">
              {how.map((step, i) => (
                <li key={step}>
                  <strong>{i + 1}.</strong> {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Founder vision + why */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">Founder Vision</div>
            <p>
              Fonia Labs was founded and built by <strong>Ifidon Abraham</strong>, with a
              long-term vision to turn real-world problems into useful products, platforms,
              and companies.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Why Fonia Labs Exists</div>
            <p>
              Fonia Labs exists to give structure to ideas. Instead of allowing useful ideas
              to remain scattered or unfinished, the goal is to shape them into products,
              test them with users, and grow the strongest ones into companies.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Explore the Fonia Labs ecosystem."
        text="See the companies, ventures, and products being built and grown under Fonia Labs."
        primary={{ label: "View Companies", href: "/companies" }}
        secondary={{ label: "Collaborate", href: "/collaborate" }}
      />
    </main>
  );
}
