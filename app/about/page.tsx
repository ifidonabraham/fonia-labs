import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { SectionHeader } from "../../components/SectionHeader";
import { CTA } from "../../components/CTA";
import { BrandSig } from "../../components/BrandSig";
import { OCore } from "../../components/OCore";

export const metadata: Metadata = {
  title: "About Fonia Labs",
  description:
    "Fonia Labs is a global innovation group building companies, platforms, and products that solve real-world problems."
};

const whatWeBuild = [
  {
    area: "Software & Digital Services",
    via: "FonTech",
    slug: "fontech",
    text: "Through FonTech, Fonia Labs builds websites, mobile apps, platforms, dashboards, digital systems, product designs, and business technology solutions."
  },
  {
    area: "Property Technology",
    via: "OmegaEstate",
    slug: "omegaestate",
    text: "Through OmegaEstate, Fonia Labs is building real estate discovery, property listing, and property management solutions."
  },
  {
    area: "Retail & Logistics Support",
    via: "SMaid",
    slug: "smaid",
    text: "Through SMaid, Fonia Labs is building systems around supermarket shopping, queue support, delivery coordination, and retail convenience."
  },
  {
    area: "Health Technology",
    via: "Dokito",
    slug: "dokito",
    text: "Through Dokito, Fonia Labs is building digital health access, health records, emergency support, care navigation, and facility discovery."
  },
  {
    area: "Opportunity Discovery",
    via: "Seek",
    slug: "seek",
    text: "Through Seek, Fonia Labs is building systems that help people find, organize, and act on useful opportunities."
  },
  {
    area: "Contract & Business Intelligence",
    via: "ContractFeed",
    slug: "contractfeed",
    text: "Through ContractFeed, Fonia Labs is building tools for contract discovery, procurement information, and opportunity tracking."
  },
  {
    area: "Weather & Emergency Intelligence",
    via: "StormBridge",
    slug: "stormbridge",
    text: "Through StormBridge, Fonia Labs is building tools for weather risk, disaster preparedness, community reporting, and emergency support."
  },
  {
    area: "Compliance & Risk Intelligence",
    via: "ComplyIQ",
    slug: "complyiq",
    text: "Through ComplyIQ, Fonia Labs is building systems for compliance awareness, website risk review, and safer digital business operations."
  },
  {
    area: "Community & Labs Products",
    via: "UnilagFoodSpots, Deadline Dungeon & SystemGuardian",
    slug: null,
    text: "Through products like UnilagFoodSpots, Deadline Dungeon, and SystemGuardian, Fonia Labs explores smaller but useful ideas that can serve communities, productivity, and daily life."
  }
];

const how = [
  {
    n: "01",
    title: "Identify real problems",
    text: "We look for problems that affect people, businesses, institutions, and communities."
  },
  {
    n: "02",
    title: "Shape ideas into products",
    text: "We take ideas and organize them into product concepts, user flows, features, and business directions."
  },
  {
    n: "03",
    title: "Build working platforms",
    text: "We build websites, applications, dashboards, systems, and platforms that can be used, tested, and improved."
  },
  {
    n: "04",
    title: "Test with real users",
    text: "We seek feedback from users, testers, collaborators, and people connected to the problem area."
  },
  {
    n: "05",
    title: "Grow into companies",
    text: "The strongest products are positioned as companies under the Fonia Labs ecosystem."
  }
];

const ecosystemTiers = [
  {
    label: "Core Company",
    companies: [{ name: "FonTech", slug: "fontech" }]
  },
  {
    label: "Featured Companies",
    companies: [
      { name: "OmegaEstate", slug: "omegaestate" },
      { name: "SMaid", slug: "smaid" },
      { name: "Dokito", slug: "dokito" },
      { name: "Seek", slug: "seek" }
    ]
  },
  {
    label: "Growth Companies",
    companies: [
      { name: "ContractFeed", slug: "contractfeed" },
      { name: "StormBridge", slug: "stormbridge" },
      { name: "ComplyIQ", slug: "complyiq" }
    ]
  },
  {
    label: "Community & Labs",
    companies: [
      { name: "UnilagFoodSpots", slug: "unilagfoodspots" },
      { name: "Deadline Dungeon", slug: "deadline-dungeon" },
      { name: "SystemGuardian", slug: "systemguardian" }
    ]
  }
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="About"
        title="About Fonia Labs"
        text="Fonia Labs is a global innovation group building companies, platforms, and products that solve real-world problems."
        support="We create, grow, and house companies across technology, business, property, health, logistics, compliance, opportunity discovery, education, community systems, productivity, and future industries."
      />

      {/* Hero continuation */}
      <section className="section tight">
        <div className="container">
          <p className="wide-text" style={{ maxWidth: 740 }}>
            Fonia Labs exists to turn ideas into products, products into platforms, and
            platforms into companies that can serve people, businesses, institutions, and
            communities globally.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">Who We Are</div>
            <h2>A parent group for companies built from ideas.</h2>
          </div>
          <div>
            <p className="lead">
              Fonia Labs is not just a software brand or a collection of projects. It is a
              parent innovation group designed to give rise to companies.
            </p>
            <p style={{ marginTop: 16 }}>
              The group exists to identify real problems, build useful products around those
              problems, test those products with users, and grow the strongest ones into
              companies.
            </p>
            <p style={{ marginTop: 16 }}>
              Every company under Fonia Labs has its own identity, purpose, and direction,
              but they all share one foundation: solving real problems through structured
              products, platforms, and systems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">Our Mission</div>
            <h3 style={{ marginTop: 10 }}>
              To design, build, and grow products, platforms, and companies that make life,
              business, and institutions work better globally.
            </h3>
            <p style={{ marginTop: 16 }}>
              Fonia Labs is built on the belief that useful ideas should not remain ideas.
              They should be shaped, tested, improved, and grown into real companies that
              create value.
            </p>
            <p style={{ marginTop: 12 }}>
              Our mission is to build across industries, not only one sector. Today, that
              includes software, property technology, health technology, retail support,
              compliance, opportunity discovery, emergency intelligence, and community
              systems. Tomorrow, it can expand into new industries as new problems and
              opportunities emerge.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Our Vision</div>
            <h3 style={{ marginTop: 10 }}>
              To become a global company-building ecosystem where ideas are transformed into
              products, products into platforms, and platforms into companies.
            </h3>
            <p style={{ marginTop: 16 }}>
              Fonia Labs is designed for long-term growth. The vision is not only to launch
              products, but to create companies that can serve real users, attract
              collaborators, support businesses, and eventually grow into stronger
              institutions.
            </p>
            <p style={{ marginTop: 12 }}>
              The goal is to build a group that can create value across different industries
              while keeping one central identity: Fonia Labs as the parent company and
              innovation source.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What We Build"
            title="What we build"
            text="Fonia Labs builds companies and products across different problem areas."
          />
          <div className="grid cols-3">
            {whatWeBuild.map(({ area, via, slug, text }) => (
              <div className="card" key={area}>
                <div className="eyebrow">{area}</div>
                <h3 style={{ marginTop: 6 }}>
                  {slug ? (
                    <Link href={`/companies/${slug}`} style={{ color: "inherit" }}>
                      {via}
                    </Link>
                  ) : (
                    via
                  )}
                </h3>
                <p style={{ marginTop: 10 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Fonia Labs Works */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="How Fonia Labs Works"
            title="From problem to company."
            text="Every company in the Fonia Labs ecosystem follows the same structured path from idea to launch."
          />
          <div className="flow">
            {how.map(({ n, title, text }) => (
              <div className="flow-step" key={n}>
                <div className="fs-num">{n}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Ecosystem"
            title="The Fonia Labs ecosystem"
            text="The ecosystem is made up of companies, ventures, and products at different stages of growth."
          />
          <div className="grid cols-2" style={{ marginTop: 32 }}>
            {ecosystemTiers.map(({ label, companies }) => (
              <div className="card" key={label}>
                <div className="eyebrow">{label}</div>
                <div className="chips" style={{ marginTop: 12 }}>
                  {companies.map(({ name, slug }) => (
                    <Link
                      key={slug}
                      href={`/companies/${slug}`}
                      className="chip"
                      style={{ textDecoration: "none" }}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <p style={{ maxWidth: 600 }}>
              Each company has its own identity, market, users, and product direction.
              Fonia Labs provides the parent structure that connects them.
            </p>
            <div style={{ marginTop: 20 }}>
              <BrandSig badge="A Fonia Labs Ecosystem" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Vision */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Founder Vision</div>
            <h2>Founder-led. Globally focused.</h2>
          </div>
          <div>
            <p className="lead">
              Fonia Labs was founded by <strong>Ifidon Abraham</strong> with a vision to
              build a global ecosystem of companies from practical ideas.
            </p>
            <p style={{ marginTop: 16 }}>
              The company began from the belief that problems around everyday life, business,
              institutions, technology, property, health, education, and communities can
              become the foundation for useful products and future companies.
            </p>
            <p style={{ marginTop: 16 }}>
              Fonia Labs represents a long-term commitment to building, learning, improving,
              and growing ideas into systems that can serve people globally.
            </p>
          </div>
        </div>
      </section>

      {/* Why Fonia Labs Exists */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Why We Exist</div>
            <h2>Why Fonia Labs exists</h2>
          </div>
          <div>
            <p className="lead">
              Fonia Labs exists because many useful ideas never become real companies. They
              remain scattered as notes, prototypes, unfinished projects, or isolated
              experiments.
            </p>
            <p style={{ marginTop: 16, fontWeight: 600, color: "var(--text)" }}>
              Fonia Labs gives ideas a structure.
            </p>
            <p style={{ marginTop: 12 }}>
              It creates a place where ideas can be shaped, built, tested, documented,
              improved, and grown. It allows multiple companies to exist under one parent
              group while still keeping their own identities and purposes.
            </p>
            <p style={{ marginTop: 12 }}>
              The result is a growing ecosystem of products and companies that can serve
              different industries while sharing one larger vision.
            </p>
          </div>
        </div>
      </section>

      {/* Global Direction */}
      <section className="section tight">
        <div className="container">
          <div className="card" style={{ maxWidth: 760 }}>
            <div className="eyebrow">Global Direction</div>
            <h2 style={{ marginTop: 12 }}>Built for global relevance.</h2>
            <p style={{ marginTop: 16 }}>
              Fonia Labs is not limited to one city, one country, or one industry.
            </p>
            <p style={{ marginTop: 12 }}>
              Although many ideas may begin from real problems around Africa and Nigeria, the
              long-term direction is global. The companies under Fonia Labs are built to
              solve problems that can matter to people, businesses, institutions, and
              communities anywhere.
            </p>
            <p style={{ marginTop: 12, fontWeight: 600, color: "var(--cyan)" }}>
              The vision is to build locally aware products with global ambition.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Explore the companies under Fonia Labs."
        text="Fonia Labs is building a growing ecosystem of companies, platforms, and products across multiple industries. Explore the companies, understand the vision, test the products, collaborate, or partner with the ecosystem as it grows."
        primary={{ label: "Explore Companies", href: "/companies" }}
        secondary={{ label: "Partner With Us", href: "/collaborate" }}
      />
    </main>
  );
}
