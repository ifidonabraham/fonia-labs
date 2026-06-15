import type { Metadata } from "next";
import { tiers, tierMeta, companiesByTier } from "../../data/companies";
import { CompanyCard } from "../../components/CompanyCard";
import { PageHero } from "../../components/PageHero";
import { CTA } from "../../components/CTA";

export const metadata: Metadata = {
  title: "Companies & Ventures",
  description:
    "Fonia Labs houses a growing ecosystem of companies, ventures, platforms, and products built to solve real-world problems across different industries."
};

export default function CompaniesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ecosystem"
        title="Companies & Ventures"
        text="Fonia Labs houses a growing ecosystem of companies, ventures, platforms, and products built to solve real-world problems across different industries."
      />

      {tiers.map((tier) => {
        const list = companiesByTier(tier);
        if (!list.length) return null;
        return (
          <section className="section tight" key={tier}>
            <div className="container">
              <div className="section-head">
                <div className="sh-copy">
                  <div className="eyebrow">{tierMeta[tier].label}</div>
                  <p>{tierMeta[tier].description}</p>
                </div>
              </div>
              <div className="grid cols-3">
                {list.map((company) => (
                  <CompanyCard key={company.slug} company={company} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTA
        title="Want to build or grow with the ecosystem?"
        text="Partner with a Fonia Labs company, test a product, contribute skills, or build a digital solution through FonTech."
        primary={{ label: "Collaborate With Us", href: "/collaborate" }}
        secondary={{ label: "Contact Fonia Labs", href: "/contact" }}
      />
    </main>
  );
}
