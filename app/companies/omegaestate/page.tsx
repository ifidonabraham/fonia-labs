import type { Metadata } from "next";
import Link from "next/link";
import { OCore } from "../../../components/OCore";
import { SectionHeader } from "../../../components/SectionHeader";
import { BrandBadge } from "../../../components/BrandBadge";
import { BrandSig } from "../../../components/BrandSig";

export const metadata: Metadata = {
  title: "OmegaEstate — Property Technology",
  description:
    "OmegaEstate is a property technology company under Fonia Labs focused on real estate discovery, property listings, and property management."
};

const features = [
  {
    title: "Property Listings",
    text: "Organized property listings for houses, apartments, land, rentals, and real estate opportunities."
  },
  {
    title: "Search & Discovery",
    text: "A cleaner way for users to browse and discover available properties."
  },
  {
    title: "Property Details",
    text: "Structured property information such as location, pricing, description, category, and contact direction."
  },
  {
    title: "Agent & Business Visibility",
    text: "A digital presence for agents, landlords, and property businesses to present listings professionally."
  },
  {
    title: "Map & Location Support",
    text: "Support for property location awareness and better discovery around areas of interest."
  },
  {
    title: "Responsive Experience",
    text: "A platform experience designed to work across desktop, tablet, and mobile screens."
  },
  {
    title: "Inquiry & Contact Flow",
    text: "A pathway for interested users to reach out or continue the property conversation."
  }
];

const users = [
  "Property seekers",
  "Tenants",
  "Home buyers",
  "Land buyers",
  "Real estate agents",
  "Property managers",
  "Landlords",
  "Estate developers",
  "Real estate companies",
  "Property listing businesses"
];

const roadmap = [
  "Improve property listing quality and structure",
  "Strengthen search and filtering",
  "Improve map/location-based discovery",
  "Add stronger agent and property manager tools",
  "Improve mobile experience",
  "Add verification and trust signals for listings",
  "Support property inquiries and lead management",
  "Create better onboarding for agents and property businesses",
  "Expand toward property management features",
  "Prepare the platform for wider public testing and adoption"
];

const screenshots = [
  "Homepage",
  "Property listings",
  "Property details",
  "Agent/listing management",
  "Mobile view",
  "Map/location feature"
];

export default function OmegaEstatePage() {
  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-layout">
          <div>
            <Link className="back-link" href="/companies">
              ← All companies
            </Link>
            <div className="eyebrow">Property Technology</div>
            <h1>OmegaEstate</h1>
            <BrandBadge badge="A Fonia Labs Company" />
            <p className="wide-text">
              Property discovery and real estate technology for a more organized property
              experience.
            </p>
            <p style={{ marginTop: 16, lineHeight: 1.7 }}>
              OmegaEstate is a property technology company under Fonia Labs focused on making
              real estate discovery, property listings, and property management more
              organized, accessible, and user-friendly.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>
              The platform is designed to help property seekers, agents, landlords, and real
              estate businesses connect through a cleaner digital experience.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <a
                className="btn primary"
                href="https://omegaestate.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit OmegaEstate <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                View Product Details
              </Link>
            </div>
          </div>
          <div className="mock-shot">
            <div>
              <OCore size={88} />
              <h2 style={{ marginTop: 18 }}>OmegaEstate</h2>
              <p>Featured Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Overview</div>
            <h2>A better way to discover and manage property opportunities.</h2>
          </div>
          <div>
            <p className="lead">
              OmegaEstate is built around one clear problem: property discovery is often
              scattered, slow, and difficult to trust.
            </p>
            <p style={{ marginTop: 16 }}>
              Many people still depend on random contacts, unorganized listings, repeated
              phone calls, unclear property details, and agents who may not present
              properties in a clean or structured way. OmegaEstate brings property
              information into a more organized digital experience where users can explore
              real estate opportunities more easily.
            </p>
            <p style={{ marginTop: 16 }}>
              The goal is to create a property platform that supports discovery, listing
              management, agent visibility, and better communication between people looking
              for property and people offering property.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">The Problem</div>
            <h3>The problem OmegaEstate solves.</h3>
            <p style={{ marginTop: 12 }}>
              Finding a house, apartment, land, or rental property can be stressful.
              Property seekers often face incomplete information, scattered listings, unclear
              pricing, poor location details, and difficulty knowing which agents or listings
              to trust.
            </p>
            <p style={{ marginTop: 12 }}>
              Real estate agents and property managers also need better digital tools to
              present properties professionally, organize listings, reach more clients, and
              manage inquiries.
            </p>
            <p style={{ marginTop: 12 }}>
              OmegaEstate exists to reduce this friction by creating a more structured
              property discovery and management experience.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">The Solution</div>
            <h3>What OmegaEstate provides.</h3>
            <p style={{ marginTop: 12 }}>
              OmegaEstate provides a digital platform where property listings can be
              presented in a cleaner, more organized, and more professional way.
            </p>
            <p style={{ marginTop: 12 }}>
              Users can explore property opportunities, view important details, understand
              property categories, and connect with available real estate options. For agents
              and property businesses, OmegaEstate creates a pathway to showcase properties
              online instead of depending only on social media posts or scattered referrals.
            </p>
            <p style={{ marginTop: 12 }}>
              The long-term vision is to make OmegaEstate a trusted property technology
              company that supports property discovery, agent visibility, property
              management, and real estate transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Key Features"
            title="What OmegaEstate includes."
            text="A digital property platform built around discovery, clarity, and connection."
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
            <h2>Built for property seekers and real estate operators.</h2>
            <p style={{ marginTop: 16 }}>
              OmegaEstate is designed for anyone involved in discovering, listing, managing,
              or promoting property. It helps property seekers find opportunities and helps
              property providers present their listings more professionally.
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
            title="A look at OmegaEstate."
            text="Real screenshots from the live platform to help visitors understand the product visually."
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
                <span className="kv-v">Featured Company</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Category</span>
                <span className="kv-v">Property Technology</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Tier</span>
                <span className="kv-v">Featured Company</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Badge</span>
                <span className="kv-v">A Fonia Labs Company</span>
              </div>
            </div>
            <p style={{ marginTop: 16 }}>
              OmegaEstate is one of the major companies under Fonia Labs and is currently
              positioned as a featured property technology product.
            </p>
            <p style={{ marginTop: 12 }}>
              It represents one of the strongest examples of how Fonia Labs turns real-world
              problems into digital companies. The platform is active, growing, and open to
              improvement through real user feedback, property testing, and collaboration.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Roadmap</div>
            <h3>What comes next for OmegaEstate</h3>
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
            <h3>Test or collaborate with OmegaEstate</h3>
            <p style={{ marginTop: 12 }}>
              OmegaEstate is open to testers, real estate agents, property managers,
              landlords, and partners who can help improve the platform and shape it into a
              stronger property technology company.
            </p>
            <p style={{ marginTop: 12 }}>
              If you work in real estate, manage properties, list apartments, sell land, or
              help people find homes, OmegaEstate can become a useful platform for your work.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="btn primary"
                href="https://omegaestate.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Test OmegaEstate <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                Partner With OmegaEstate
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
              OmegaEstate is built under Fonia Labs as part of a wider ecosystem of
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
