import type { Metadata } from "next";
import Link from "next/link";
import { companiesByTier } from "../../data/companies";
import { CompanyCard } from "../../components/CompanyCard";
import { PageHero } from "../../components/PageHero";
import { SectionHeader } from "../../components/SectionHeader";
import { CTA } from "../../components/CTA";

export const metadata: Metadata = {
  title: "Companies & Ventures",
  description:
    "Fonia Labs houses a growing ecosystem of companies, ventures, platforms, and products built to solve real-world problems across different industries."
};

const core = companiesByTier("Core Company");
const featured = companiesByTier("Featured Company");
const growth = companiesByTier("Growth Company");
const communityAndLabs = [
  ...companiesByTier("Community Product"),
  ...companiesByTier("Labs Product")
];

const filters = [
  "All",
  "Core Company",
  "Featured Companies",
  "Growth Companies",
  "Community Products",
  "Labs Products"
];

export default function CompaniesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ecosystem"
        title="Companies & Ventures"
        text="Fonia Labs houses a growing ecosystem of companies, ventures, platforms, and products built to solve real-world problems across different industries."
        support="From software production and property technology to health, retail, logistics, compliance, opportunity discovery, weather intelligence, campus systems, and creative products, Fonia Labs is building a global ecosystem where ideas become companies."
      />

      {/* Ecosystem introduction */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">The Ecosystem</div>
            <h2>A growing company ecosystem.</h2>
          </div>
          <div>
            <p className="lead">
              Fonia Labs is designed to create, grow, and house companies.
            </p>
            <p style={{ marginTop: 16 }}>
              Each company under the ecosystem begins with a problem worth solving. Some are
              built to serve businesses. Some support communities. Some help institutions
              operate better. Others begin as smaller products and grow into larger platforms
              over time.
            </p>
            <p style={{ marginTop: 16 }}>
              The goal is not to build random projects. The goal is to build useful systems,
              test them, improve them, and grow them into companies with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="section tight">
        <div className="container">
          <div className="chips">
            {filters.map((f) => (
              <span className="chip" key={f}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Company */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Core Company"
            title="The software production engine."
            text="The core company supports business services, software production, product design, and digital platform development."
          />
          <div className="grid cols-3">
            {core.map((company) => (
              <CompanyCard key={company.slug} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Featured Companies"
            title="Leading ventures in the ecosystem."
            text="These are the leading ventures currently positioned as major companies in the Fonia Labs ecosystem."
          />
          <div className="grid cols-3">
            {featured.map((company) => (
              <CompanyCard key={company.slug} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* Growth Companies */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Growth Companies"
            title="Building toward scale."
            text="These companies and platforms are growing within the Fonia Labs ecosystem and are built around strong problem areas with long-term potential."
          />
          <div className="grid cols-3">
            {growth.map((company) => (
              <CompanyCard key={company.slug} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* Community & Labs Products */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Community & Labs Products"
            title="Focused products and experiments."
            text="Some products under Fonia Labs are smaller, experimental, creative, or community-focused. They may not sit at the same level as the major companies, but they still represent useful ideas and product thinking within the ecosystem."
          />
          <div className="grid cols-3">
            {communityAndLabs.map((company) => (
              <CompanyCard key={company.slug} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Philosophy */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Ecosystem Philosophy</div>
            <h2>Not every idea starts as a company. But every company starts with an idea.</h2>
          </div>
          <div>
            <p className="lead">
              Fonia Labs gives ideas a structure.
            </p>
            <p style={{ marginTop: 16 }}>
              Some ideas begin as experiments. Some become products. Some become platforms.
              Some grow into companies. The ecosystem is designed to keep building, testing,
              improving, and expanding.
            </p>
            <p style={{ marginTop: 16 }}>
              This makes Fonia Labs flexible enough to support software companies today and
              future companies across other industries tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Collaborate</div>
            <h2>Test, partner, build, or collaborate.</h2>
          </div>
          <div>
            <p className="lead">
              Many companies under Fonia Labs are open to testers, collaborators, technical
              contributors, business partners, early users, and supporters.
            </p>
            <p style={{ marginTop: 16 }}>
              Each company page contains more information about its current status, product
              direction, roadmap, and collaboration opportunities.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link className="btn primary" href="/collaborate">
                Explore Collaboration Opportunities <span className="btn-arrow">→</span>
              </Link>
              <Link className="btn" href="/contact">
                Contact Fonia Labs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Explore the companies under Fonia Labs."
        text="Discover the companies, products, and platforms being built under the Fonia Labs ecosystem."
        primary={{ label: "View All Companies", href: "/companies" }}
        secondary={{ label: "Partner With Us", href: "/collaborate" }}
      />
    </main>
  );
}
