import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { SectionHeader } from "../../components/SectionHeader";
import { CollaborateForm } from "../../components/CollaborateForm";

export const metadata: Metadata = {
  title: "Collaborate — Fonia Labs",
  description:
    "Test products, partner with companies, contribute skills, support growth, or build with the Fonia Labs ecosystem."
};

const whoCanCollaborate = [
  {
    role: "Testers",
    title: "Test early products.",
    text: "Help us test live products, report issues, suggest improvements, and share real user feedback. Testers help Fonia Labs understand what works, what needs improvement, and what should be built next.",
    fit: [
      "Students", "Business owners", "Property seekers", "Health workers",
      "Retail shoppers", "Supermarket operators", "Opportunity seekers",
      "Website owners", "Developers", "Everyday users"
    ],
    cta: "Apply as a Tester",
    href: "#collaborate-form"
  },
  {
    role: "Partners",
    title: "Partner with a Fonia Labs company.",
    text: "Partnerships can help companies under Fonia Labs reach users, test in real environments, improve operations, access industry knowledge, or expand into stronger markets.",
    fit: [
      "Businesses", "Schools", "Clinics", "Real estate agents",
      "Supermarkets", "NGOs", "Community groups", "Service providers",
      "Industry professionals", "Organizations"
    ],
    cta: "Explore Partnership",
    href: "#collaborate-form"
  },
  {
    role: "Collaborators",
    title: "Contribute skills and ideas.",
    text: "Fonia Labs is open to collaborators who can support product design, software development, research, testing, strategy, content, business development, marketing, operations, or industry-specific knowledge.",
    fit: [
      "Developers", "Designers", "Product thinkers", "Researchers",
      "Writers", "Marketers", "Business strategists", "Students",
      "Technical contributors", "Domain experts"
    ],
    cta: "Collaborate With Us",
    href: "#collaborate-form"
  },
  {
    role: "Businesses",
    title: "Build with FonTech.",
    text: "If your business needs a website, mobile app, landing page, dashboard, software platform, product design, or digital system, FonTech can help you build it. FonTech is the software production and digital services company under Fonia Labs.",
    fit: [
      "Small businesses", "Startups", "Organizations", "Schools",
      "Churches", "Real estate brands", "Health brands", "Restaurants",
      "Agencies", "Service providers"
    ],
    cta: "Start a Project With FonTech",
    href: "/companies/fontech"
  },
  {
    role: "Investors & Supporters",
    title: "Support the ecosystem.",
    text: "Fonia Labs is building a long-term ecosystem of companies. As the group grows, we are open to conversations with people and organizations interested in supporting product growth, venture development, infrastructure, market access, and future investment opportunities.",
    fit: [
      "Angel investors", "Startup supporters", "Mentors", "Advisors",
      "Business leaders", "Community supporters", "Industry partners",
      "Innovation organizations"
    ],
    cta: "Connect With Fonia Labs",
    href: "#collaborate-form"
  }
];

const byCompany = [
  {
    name: "FonTech",
    slug: "fontech",
    area: "Websites, apps, platforms, design, client projects, and digital systems.",
    collaborators: "Businesses, designers, developers, marketers, agencies, and organizations that need digital solutions."
  },
  {
    name: "OmegaEstate",
    slug: "omegaestate",
    area: "Property discovery, real estate listings, property management, agent onboarding, and property testing.",
    collaborators: "Real estate agents, landlords, property managers, estate developers, property seekers, and real estate businesses."
  },
  {
    name: "SMaid",
    slug: "smaid",
    area: "Supermarket shopping, queue management, delivery support, retail operations, and logistics testing.",
    collaborators: "Supermarket owners, retail workers, shoppers, delivery partners, logistics operators, and retail businesses."
  },
  {
    name: "Dokito",
    slug: "dokito",
    area: "Digital health access, facility discovery, health records, emergency support, and care navigation.",
    collaborators: "Health workers, clinics, medical students, health organizations, patients, and health-tech collaborators."
  },
  {
    name: "Seek",
    slug: "seek",
    area: "Opportunity discovery, scholarships, jobs, funding, programs, competitions, grants, and personal growth opportunities.",
    collaborators: "Students, job seekers, founders, career communities, opportunity curators, schools, creators, and professionals."
  },
  {
    name: "ContractFeed",
    slug: "contractfeed",
    area: "Contract discovery, procurement opportunities, tenders, supplier support, and business intelligence.",
    collaborators: "Contractors, suppliers, consultants, procurement professionals, SMEs, business owners, and opportunity researchers."
  },
  {
    name: "StormBridge",
    slug: "stormbridge",
    area: "Weather risk, disaster preparedness, community reports, emergency support, and alert systems.",
    collaborators: "Emergency responders, NGOs, safety organizations, climate groups, local communities, and public safety stakeholders."
  },
  {
    name: "ComplyIQ",
    slug: "complyiq",
    area: "Website risk, compliance awareness, digital responsibility, data collection review, and safer business operations.",
    collaborators: "Business owners, compliance professionals, legal-tech collaborators, website owners, agencies, and startups."
  },
  {
    name: "UnilagFoodSpots",
    slug: "unilagfoodspots",
    area: "Campus food discovery, food spot listings, student convenience, and vendor visibility.",
    collaborators: "UNILAG students, campus food vendors, student groups, visitors, and community contributors."
  },
  {
    name: "Deadline Dungeon",
    slug: "deadline-dungeon",
    area: "Gamified productivity, deadline management, task pressure, focus, and creative product testing.",
    collaborators: "Students, creators, productivity users, game designers, developers, and people who struggle with deadlines."
  },
  {
    name: "SystemGuardian",
    slug: "systemguardian",
    area: "Computer performance monitoring, overload protection, process awareness, and system stability.",
    collaborators: "Developers, students, Windows users, heavy laptop users, productivity workers, and performance-focused testers."
  }
];

const howSteps = [
  {
    n: "01",
    title: "Choose a company or area",
    text: "Start by identifying which Fonia Labs company or product you want to test, support, or collaborate with."
  },
  {
    n: "02",
    title: "Send your interest",
    text: "Share who you are, what you do, the company you are interested in, and how you think you can help."
  },
  {
    n: "03",
    title: "Discuss the fit",
    text: "We review the possible collaboration area and identify whether it fits the current product stage, roadmap, and needs."
  },
  {
    n: "04",
    title: "Start small",
    text: "Most collaborations begin with feedback, testing, advice, introductions, or small contributions before growing into deeper partnerships."
  },
  {
    n: "05",
    title: "Grow what works",
    text: "If the collaboration creates value, it can grow into a stronger relationship, product partnership, service project, or venture support opportunity."
  }
];

export default function CollaboratePage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="Collaborate"
        title="Collaborate With Fonia Labs"
        text="Test products, partner with companies, contribute skills, support growth, or build with the Fonia Labs ecosystem."
        support="Fonia Labs is building a growing ecosystem of companies, platforms, and products across different industries. As the ecosystem grows, we are open to testers, collaborators, partners, contributors, businesses, and supporters who want to be part of the journey."
      />

      {/* Hero continuation + CTA buttons */}
      <section className="section tight">
        <div className="container">
          <p style={{ maxWidth: 680, marginBottom: 28, lineHeight: 1.78, color: "var(--muted)" }}>
            Whether you want to test a product, partner with a company, provide industry
            feedback, support a venture, or build a digital solution through FonTech, this
            is where the conversation begins.
          </p>
          <div className="actions">
            <a className="btn primary" href="#collaborate-form">
              Start a Conversation <span className="btn-arrow">→</span>
            </a>
            <Link className="btn" href="/companies">
              Explore Companies
            </Link>
          </div>
        </div>
      </section>

      {/* Who Can Collaborate */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Who We Want to Connect With"
            title="Who can collaborate"
            text="Different companies under Fonia Labs need different types of support, feedback, testing, and collaboration. You do not need to fit one category perfectly. If you understand a problem area or want to contribute to a product, there may be a place for you in the ecosystem."
          />
          <div className="grid cols-3" style={{ marginTop: 36 }}>
            {whoCanCollaborate.map(({ role, title, text, fit, cta, href }) => (
              <div className="card" key={role}>
                <div className="eyebrow">{role}</div>
                <h3 style={{ marginTop: 8 }}>{title}</h3>
                <p style={{ marginTop: 10 }}>{text}</p>
                <div className="chips" style={{ marginTop: 14 }}>
                  {fit.map((f) => (
                    <span className="chip" key={f}>{f}</span>
                  ))}
                </div>
                <div style={{ marginTop: 18 }}>
                  <a className="btn primary" href={href}>
                    {cta} <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration by Company */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Where You Can Collaborate"
            title="Collaboration by company"
            text="Each company under Fonia Labs has a different direction, audience, and growth need. Explore the areas below to understand where your support or interest may fit."
          />
          <div className="grid cols-2" style={{ marginTop: 36 }}>
            {byCompany.map(({ name, slug, area, collaborators }) => (
              <div className="card" key={slug}>
                <div className="cc-top">
                  <p className="meta">{name}</p>
                  <Link
                    href={`/companies/${slug}`}
                    className="btn"
                    style={{ fontSize: 12, padding: "4px 10px" }}
                  >
                    View Company
                  </Link>
                </div>
                <h3 style={{ marginTop: 10 }}>Collaboration Area</h3>
                <p style={{ marginTop: 6 }}>{area}</p>
                <h3 style={{ marginTop: 14 }}>Useful Collaborators</h3>
                <p style={{ marginTop: 6 }}>{collaborators}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Collaboration Works */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="How It Works"
            title="How the process works"
            text="Every collaboration starts with a conversation. Here is how it typically moves forward."
          />
          <div className="flow" style={{ marginTop: 32 }}>
            {howSteps.map(({ n, title, text }) => (
              <div className="flow-step" key={n}>
                <div className="fs-num">{n}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section" id="collaborate-form">
        <div className="container">
          <SectionHeader
            eyebrow="Start a Conversation"
            title="Send a collaboration request."
            text="Tell us who you are, what you are interested in, and how you would like to connect with Fonia Labs. Submitting opens your email app addressed to Fonia Labs."
          />
          <CollaborateForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section tight">
        <div className="container">
          <div className="card" style={{ textAlign: "center", padding: "clamp(36px, 6vw, 64px) clamp(24px, 5vw, 56px)" }}>
            <h2>Build with us. Test with us. Grow with us.</h2>
            <p className="lead" style={{ marginTop: 16, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
              Fonia Labs is building companies for real-world problems. If you see a product
              you believe in, a problem you understand, or a company you want to support,
              reach out and start the conversation.
            </p>
            <div className="actions" style={{ marginTop: 28, justifyContent: "center" }}>
              <Link className="btn primary" href="/contact">
                Contact Fonia Labs <span className="btn-arrow">→</span>
              </Link>
              <Link className="btn" href="/companies">
                Explore Companies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
