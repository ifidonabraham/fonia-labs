import type { Metadata } from "next";
import Link from "next/link";
import { OCore } from "../../../components/OCore";
import { SectionHeader } from "../../../components/SectionHeader";
import { BrandBadge } from "../../../components/BrandBadge";
import { BrandSig } from "../../../components/BrandSig";

export const metadata: Metadata = {
  title: "ContractFeed — Contract & Opportunity Intelligence",
  description:
    "ContractFeed is a contract and opportunity intelligence company under Fonia Labs helping businesses, suppliers, and contractors discover and track contract opportunities."
};

const features = [
  {
    title: "Contract Discovery",
    text: "A structured way to find contract opportunities, tenders, procurement notices, and business openings."
  },
  {
    title: "Opportunity Tracking",
    text: "Support for tracking opportunities and monitoring relevant updates."
  },
  {
    title: "Business Categories",
    text: "Organization of opportunities by industry, sector, location, or type."
  },
  {
    title: "Supplier Support",
    text: "A platform direction for helping suppliers, SMEs, consultants, and contractors access useful business information."
  },
  {
    title: "Dashboard Experience",
    text: "A clean interface for reviewing opportunities, updates, and relevant business information."
  },
  {
    title: "Data & Insights Direction",
    text: "A future pathway for insights, analytics, recommendations, and opportunity intelligence."
  },
  {
    title: "Notification Direction",
    text: "A future system for alerting users when relevant opportunities become available."
  }
];

const users = [
  "Small and medium-sized businesses",
  "Contractors",
  "Suppliers",
  "Consultants",
  "Procurement teams",
  "Business development teams",
  "Startups",
  "Professionals",
  "Government contractors",
  "Organizations looking for business openings"
];

const roadmap = [
  "Improve opportunity discovery experience",
  "Strengthen search and filtering",
  "Add better opportunity categories",
  "Improve dashboard structure",
  "Add saved opportunities",
  "Add opportunity alerts and notifications",
  "Add supplier/business profiles",
  "Improve data freshness and opportunity sourcing",
  "Build analytics and insights features",
  "Prepare for wider testing with businesses and suppliers"
];

const screenshots = [
  "ContractFeed homepage",
  "Opportunities dashboard",
  "Contract listing",
  "Opportunity details",
  "Search/filter",
  "Mobile view"
];

export default function ContractFeedPage() {
  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-layout">
          <div>
            <Link className="back-link" href="/companies">
              ← All companies
            </Link>
            <div className="eyebrow">Contract & Opportunity Intelligence</div>
            <h1>ContractFeed</h1>
            <BrandBadge badge="A Fonia Labs Company" />
            <p className="wide-text">
              Helping businesses discover, organize, and track contract opportunities.
            </p>
            <p style={{ marginTop: 16, lineHeight: 1.7 }}>
              ContractFeed is a contract and opportunity intelligence company under Fonia
              Labs built to help businesses, suppliers, contractors, consultants, and
              professionals discover useful contract opportunities and
              procurement-related information.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>
              The platform is designed to make contract discovery more organized, accessible,
              and actionable for people and businesses looking for opportunities.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <a
                className="btn primary"
                href="https://contractfeed.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit ContractFeed <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                View Product Details
              </Link>
            </div>
          </div>
          <div className="mock-shot">
            <div>
              <OCore size={88} />
              <h2 style={{ marginTop: 18 }}>ContractFeed</h2>
              <p>Growth Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Overview</div>
            <h2>A smarter way to discover contract opportunities.</h2>
          </div>
          <div>
            <p className="lead">
              ContractFeed is built around the challenge businesses face when looking for
              contracts, procurement opportunities, tenders, and business openings.
            </p>
            <p style={{ marginTop: 16 }}>
              Many opportunities are scattered across different websites, platforms,
              announcements, government portals, business networks, and informal channels.
              This makes it difficult for small businesses, suppliers, and professionals to
              stay updated and act quickly.
            </p>
            <p style={{ marginTop: 16 }}>
              ContractFeed exists to make opportunity discovery more structured by helping
              users find, organize, and track contract-related information in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">The Problem</div>
            <h3>The problem ContractFeed solves.</h3>
            <p style={{ marginTop: 12 }}>
              Businesses often miss opportunities because contract information is scattered,
              difficult to track, poorly organized, or discovered too late.
            </p>
            <p style={{ marginTop: 12 }}>
              Small businesses and suppliers may not have dedicated teams to constantly
              monitor procurement portals, tender announcements, or business openings. This
              creates an unfair advantage for larger companies with more resources.
            </p>
            <p style={{ marginTop: 12 }}>
              ContractFeed is designed to reduce that gap by giving businesses a clearer and
              more organized way to follow opportunities that matter to them.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">The Solution</div>
            <h3>What ContractFeed provides.</h3>
            <p style={{ marginTop: 12 }}>
              ContractFeed provides a digital platform for discovering and tracking contract
              opportunities, procurement information, tenders, business openings, and
              opportunity-related updates.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform can help users browse opportunities, understand basic details,
              monitor relevant categories, and act faster when useful openings appear.
            </p>
            <p style={{ marginTop: 12 }}>
              The long-term vision is to grow ContractFeed into a business intelligence
              company that helps suppliers, SMEs, contractors, and professionals access
              opportunity information more easily.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Key Features"
            title="What ContractFeed includes."
            text="A contract intelligence platform built around opportunity discovery, tracking, and business support."
          />
          <div className="grid cols-3">
            {features.map((feature) => (
              <div className="card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p style={{ marginTop: 8 }}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it serves */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Who It Serves</div>
            <h2>Built for businesses and opportunity-driven professionals.</h2>
            <p style={{ marginTop: 16 }}>
              ContractFeed is designed for people and businesses that need better access to
              contract opportunities, procurement information, and organized business
              openings.
            </p>
          </div>
          <div className="chips">
            {users.map((user) => (
              <span className="chip" key={user}>
                {user}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Product Experience"
            title="A look at ContractFeed."
            text="Screenshots from the live platform showing how the opportunity discovery experience works."
          />
          <div className="shot-grid">
            {screenshots.map((slot) => (
              <div className="shot" key={slot}>
                {slot}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status + Roadmap */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">Current Status</div>
            <div className="kv mt-sm">
              <div className="kv-row">
                <span className="kv-k">Status</span>
                <span className="kv-v">Growth Company</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Category</span>
                <span className="kv-v">Contract & Opportunity Intelligence</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Tier</span>
                <span className="kv-v">Growth Company</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Badge</span>
                <span className="kv-v">A Fonia Labs Company</span>
              </div>
            </div>
            <p style={{ marginTop: 16 }}>
              ContractFeed is part of the Fonia Labs company ecosystem and is positioned as
              a growth company focused on contract discovery, opportunity tracking, and
              business intelligence.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform is active, growing, and open to feedback from businesses,
              suppliers, contractors, consultants, and opportunity-driven users.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Roadmap</div>
            <h3>What comes next for ContractFeed</h3>
            <ul className="list" style={{ marginTop: 12 }}>
              {roadmap.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="section tight">
        <div className="container">
          <div className="card">
            <div className="eyebrow">Collaboration & Testing</div>
            <h3>Test or collaborate with ContractFeed</h3>
            <p style={{ marginTop: 12 }}>
              ContractFeed is open to testers, business owners, contractors, suppliers,
              consultants, procurement professionals, and collaborators who understand the
              contract opportunity space.
            </p>
            <p style={{ marginTop: 12 }}>
              If you regularly look for tenders, contracts, business opportunities, or
              procurement information, ContractFeed can become a useful platform to test,
              improve, and grow.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="btn primary"
                href="https://contractfeed.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Test ContractFeed <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                Partner With ContractFeed
              </Link>
              <Link className="btn" href="/contact">
                Contact Fonia Labs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem badge */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Part of the Fonia Labs Ecosystem</div>
            <p style={{ marginTop: 12 }}>
              ContractFeed is built under Fonia Labs as part of a wider ecosystem of
              companies created to solve real-world problems across industries.
            </p>
          </div>
          <div>
            <BrandSig badge="A Fonia Labs Company" />
          </div>
        </div>
      </section>
    </main>
  );
}
