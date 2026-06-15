import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
import { SectionHeader } from "../../components/SectionHeader";
import { CollaborateForm } from "../../components/CollaborateForm";
import { companies } from "../../data/companies";

export const metadata: Metadata = {
  title: "Collaborate",
  description:
    "Test products, partner with companies, contribute skills, support growth, or build with the Fonia Labs ecosystem."
};

const audiences = [
  {
    role: "Testers",
    text: "Test live products, report issues, suggest improvements, and provide real feedback."
  },
  {
    role: "Partners",
    text: "Partner with a Fonia Labs company to support industry access, pilot testing, distribution, or product growth."
  },
  {
    role: "Collaborators",
    text: "Contribute skills and ideas in development, design, research, strategy, product, marketing, or operations."
  },
  {
    role: "Businesses",
    text: "Build websites, apps, platforms, dashboards, or digital systems through FonTech."
  },
  {
    role: "Investors & Supporters",
    text: "Support, advise, invest, mentor, or help the ecosystem grow."
  }
];

export default function CollaboratePage() {
  return (
    <main>
      <PageHero
        eyebrow="Collaborate"
        title="Collaborate With Fonia Labs"
        text="Test products, partner with companies, contribute skills, support growth, or build with the Fonia Labs ecosystem."
        support="Fonia Labs is open to testers, collaborators, partners, contributors, businesses, supporters, and serious people who can help build, test, improve, or grow the ecosystem."
      />

      {/* Who can collaborate */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Who Can Collaborate" title="Ways to work with Fonia Labs." />
          <div className="grid cols-3">
            {audiences.map((a) => (
              <div className="card" key={a.role}>
                <h3>{a.role}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration by company */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Collaboration by Company"
            title="Choose where to get involved."
            text="Each company in the ecosystem has its own focus areas for testers, partners, and collaborators."
          />
          <div className="grid cols-2">
            {companies.map((company) => (
              <div className="card" key={company.slug}>
                <p className="meta">{company.name}</p>
                <p style={{ margin: "8px 0 0" }}>{company.collaboration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Get Started"
            title="Send a collaboration request."
            text="Tell us who you are and how you'd like to collaborate. Submitting opens your email app addressed to Fonia Labs."
          />
          <CollaborateForm />
        </div>
      </section>
    </main>
  );
}
