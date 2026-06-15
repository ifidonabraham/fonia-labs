import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
import { SectionHeader } from "../../components/SectionHeader";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to connect with Fonia Labs, explore a company, test a product, partner with the ecosystem, or build a digital solution through FonTech."
};

const options = [
  {
    title: "General Inquiry",
    text: "For questions about Fonia Labs, companies, the ecosystem, brand, and collaborations."
  },
  {
    title: "Build With FonTech",
    text: "For websites, apps, platforms, landing pages, dashboards, product design, and digital systems."
  },
  {
    title: "Partnership & Collaboration",
    text: "For business partnerships, institutional collaboration, industry feedback, and testers."
  },
  {
    title: "Product Support / Feedback",
    text: "For feedback on OmegaEstate, SMaid, Dokito, Seek, ContractFeed, StormBridge, ComplyIQ, UnilagFoodSpots, Deadline Dungeon, or SystemGuardian."
  },
  {
    title: "Investor / Strategic Support",
    text: "For support, mentorship, infrastructure, partnership, and future investment conversations."
  }
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Contact Fonia Labs"
        text="Reach out to connect with Fonia Labs, explore a company, test a product, partner with the ecosystem, or build a digital solution through FonTech."
      />

      {/* Contact options */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Contact Options" title="How can we help?" />
          <div className="grid cols-3">
            {options.map((option) => (
              <div className="card option-card" key={option.title}>
                <h3>{option.title}</h3>
                <p>{option.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Send a Message"
            title="Start the conversation."
            text="Submitting opens your email app addressed to Fonia Labs."
          />
          <ContactForm />
        </div>
      </section>

      {/* Professional note */}
      <section className="section tight">
        <div className="container warning-note">
          <p>
            Please keep messages clear, serious, and specific. Fonia Labs should not accept
            illegal, harmful, misleading, spam, or unserious requests.
          </p>
        </div>
      </section>
    </main>
  );
}
