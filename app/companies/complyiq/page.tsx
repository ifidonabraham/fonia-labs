import type { Metadata } from "next";
import Link from "next/link";
import { OCore } from "../../../components/OCore";
import { SectionHeader } from "../../../components/SectionHeader";

export const metadata: Metadata = {
  title: "ComplyIQ — Compliance & Risk Intelligence",
  description:
    "ComplyIQ is a compliance and risk intelligence company under Fonia Labs helping businesses understand digital risk, website responsibility, and safer business operations."
};

const features = [
  {
    title: "Website Risk Review",
    text: "A feature direction for reviewing business websites and identifying possible digital risk areas."
  },
  {
    title: "Data Collection Awareness",
    text: "Support for understanding what types of user information a website or platform may collect."
  },
  {
    title: "Compliance Guidance",
    text: "Structured guidance that helps businesses understand areas that may need improvement."
  },
  {
    title: "Business Risk Scoring",
    text: "A direction for scoring or summarizing risk areas so businesses can understand priority levels."
  },
  {
    title: "Report Generation",
    text: "A pathway for creating clear reports that explain findings, issues, and recommendations."
  },
  {
    title: "Platform Responsibility Review",
    text: "Support for checking forms, scripts, cookies, user flows, data handling, and digital operations."
  },
  {
    title: "Improvement Roadmap",
    text: "A practical direction for helping businesses know what to fix, improve, or document next."
  }
];

const users = [
  "Small businesses",
  "Startups",
  "Website owners",
  "Digital platforms",
  "Agencies",
  "Compliance teams",
  "Business owners",
  "Product teams",
  "SaaS platforms",
  "Organizations collecting user data",
  "Companies that want better digital trust"
];

const roadmap = [
  "Improve website scanning and review flow",
  "Strengthen risk report structure",
  "Add clearer compliance categories",
  "Improve recommendation quality",
  "Add business profiles and saved reports",
  "Improve data collection analysis",
  "Add privacy and policy guidance direction",
  "Improve dashboard experience",
  "Prepare for wider testing with businesses and website owners",
  "Build stronger compliance intelligence features over time"
];

const screenshots = [
  "ComplyIQ homepage",
  "Website scanner",
  "Risk report",
  "Compliance guidance",
  "Dashboard",
  "Recommendation page",
  "Mobile view"
];

export default function ComplyIQPage() {
  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-layout">
          <div>
            <Link className="back-link" href="/companies">
              ← All companies
            </Link>
            <div className="eyebrow">Compliance & Risk Intelligence</div>
            <h1>ComplyIQ</h1>
            <span className="badge">A Fonia Labs Company</span>
            <p className="wide-text">
              Helping businesses understand compliance, risk, and digital responsibility.
            </p>
            <p style={{ marginTop: 16, lineHeight: 1.7 }}>
              ComplyIQ is a compliance and risk intelligence company under Fonia Labs built to
              help businesses, platforms, and organizations understand digital risk, website
              responsibility, compliance gaps, and safer business operations.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>
              The platform is designed to support businesses that want to operate more
              responsibly, understand possible risks, and improve how they handle digital
              systems, user data, website behavior, and compliance-related decisions.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <a
                className="btn primary"
                href="https://complyiq99.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit ComplyIQ <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                View Product Details
              </Link>
            </div>
          </div>
          <div className="mock-shot">
            <div>
              <OCore size={88} />
              <h2 style={{ marginTop: 18 }}>ComplyIQ</h2>
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
            <h2>Compliance awareness for modern digital businesses.</h2>
          </div>
          <div>
            <p className="lead">
              ComplyIQ is built around an important business problem: many organizations use
              websites, forms, user data, cookies, scripts, dashboards, and digital tools
              without fully understanding the compliance and risk responsibilities attached
              to them.
            </p>
            <p style={{ marginTop: 16 }}>
              As businesses become more digital, they need better ways to understand what
              their websites collect, how their platforms operate, where risk may exist, and
              what improvements may be needed.
            </p>
            <p style={{ marginTop: 16 }}>
              ComplyIQ exists to make digital compliance and business risk easier to
              understand, review, and act on.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">The Problem</div>
            <h3>The problem ComplyIQ solves.</h3>
            <p style={{ marginTop: 12 }}>
              Many businesses do not know whether their websites, forms, privacy practices,
              data collection systems, or digital operations expose them to avoidable risk.
            </p>
            <p style={{ marginTop: 12 }}>
              A company may collect emails, phone numbers, passwords, payment details,
              location data, or other sensitive information without having clear policies,
              proper notices, secure flows, or responsible handling practices.
            </p>
            <p style={{ marginTop: 12 }}>
              This can create trust problems, legal concerns, customer confidence issues, and
              operational risk. ComplyIQ is designed to help businesses identify these issues
              earlier and understand how to improve.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">The Solution</div>
            <h3>What ComplyIQ provides.</h3>
            <p style={{ marginTop: 12 }}>
              ComplyIQ provides a digital platform direction for compliance awareness, website
              risk intelligence, data collection review, digital operations assessment, and
              structured business guidance.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform can help businesses understand what their websites or platforms
              may be doing, what kinds of risks may exist, and what areas may need attention.
            </p>
            <p style={{ marginTop: 12 }}>
              The long-term vision is to grow ComplyIQ into a compliance intelligence company
              that supports safer digital businesses, better website responsibility, and
              improved trust between companies and users.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Key Features"
            title="What ComplyIQ includes."
            text="A compliance and risk platform built around website review, data awareness, risk scoring, and business guidance."
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
            <h2>Built for businesses that want safer digital operations.</h2>
            <p style={{ marginTop: 16 }}>
              ComplyIQ is designed for organizations that want to understand digital risk,
              improve compliance awareness, protect user trust, and operate more responsibly
              online.
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
            title="A look at ComplyIQ."
            text="Screenshots from the live platform showing the risk review, report, dashboard, and compliance guidance experience."
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
                <span className="kv-v">Compliance & Risk Intelligence</span>
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
              ComplyIQ is part of the Fonia Labs company ecosystem and is positioned as a
              growth company focused on compliance awareness, digital risk intelligence,
              website responsibility, and business trust.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform is active, growing, and open to feedback from business owners,
              website owners, compliance-aware professionals, agencies, and organizations
              that want better digital responsibility.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Roadmap</div>
            <h3>What comes next for ComplyIQ</h3>
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
            <h3>Test or collaborate with ComplyIQ</h3>
            <p style={{ marginTop: 12 }}>
              ComplyIQ is open to testers, business owners, website owners, compliance
              professionals, legal-tech collaborators, agencies, and organizations interested
              in safer digital operations.
            </p>
            <p style={{ marginTop: 12 }}>
              If you run a website, manage a platform, advise businesses, or care about data
              responsibility and digital trust, ComplyIQ can become a useful platform to
              test, improve, and grow.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="btn primary"
                href="https://complyiq99.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Test ComplyIQ <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                Partner With ComplyIQ
              </Link>
              <Link className="btn" href="/contact">
                Contact Fonia Labs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance responsibility note */}
      <section className="section tight">
        <div className="container warning-note">
          <strong>Compliance responsibility.</strong>
          <p style={{ marginTop: 8 }}>
            ComplyIQ is designed to support compliance awareness, risk understanding, and
            business improvement. It should not replace professional legal advice, formal
            regulatory review, or certified compliance consultation.
          </p>
          <p style={{ marginTop: 8 }}>
            Businesses should consult qualified legal or compliance professionals when making
            official compliance decisions.
          </p>
        </div>
      </section>

      {/* Ecosystem badge */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Part of the Fonia Labs Ecosystem</div>
            <p style={{ marginTop: 12 }}>
              ComplyIQ is built under Fonia Labs as part of a wider ecosystem of companies
              created to solve real-world problems across industries.
            </p>
          </div>
          <div>
            <div className="footer-badge">ComplyIQ is a Fonia Labs Company.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
