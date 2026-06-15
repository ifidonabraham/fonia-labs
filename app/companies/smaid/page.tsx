import type { Metadata } from "next";
import Link from "next/link";
import { OCore } from "../../../components/OCore";
import { SectionHeader } from "../../../components/SectionHeader";
import { BrandBadge } from "../../../components/BrandBadge";
import { BrandSig } from "../../../components/BrandSig";

export const metadata: Metadata = {
  title: "SMaid — Retail, Queue & Logistics Support",
  description:
    "SMaid is a retail support and logistics company under Fonia Labs built to improve supermarket queue management, shopping assistance, and delivery coordination."
};

const features = [
  {
    title: "Queue Support",
    text: "A digital structure for helping supermarkets manage customer queues and reduce unnecessary waiting pressure."
  },
  {
    title: "Shopping Assistance",
    text: "Support for customers who need help with shopping, item selection, or store-related requests."
  },
  {
    title: "Delivery Coordination",
    text: "A system direction for connecting shopping activity with delivery and logistics support."
  },
  {
    title: "Customer Requests",
    text: "A cleaner way for customers to make requests and for supermarkets or support teams to respond."
  },
  {
    title: "Retail Workflow Support",
    text: "Tools and flows that can help supermarkets organize customer movement, service requests, and operational tasks."
  },
  {
    title: "Supermarket Business Support",
    text: "A platform direction that can help retail businesses improve customer experience and service delivery."
  },
  {
    title: "Mobile-Friendly Experience",
    text: "A user experience designed to support shoppers and retail operations across mobile and desktop devices."
  }
];

const users = [
  "Supermarket customers",
  "Retail shoppers",
  "Supermarket owners",
  "Retail managers",
  "Store assistants",
  "Delivery partners",
  "Logistics teams",
  "Busy households",
  "Food and grocery businesses",
  "Retail service providers"
];

const roadmap = [
  "Improve customer shopping flow",
  "Strengthen queue management experience",
  "Add clearer supermarket onboarding",
  "Improve delivery and logistics coordination",
  "Build support for store assistants or service agents",
  "Improve mobile usability",
  "Add dashboard tools for supermarket operators",
  "Support real supermarket testing",
  "Improve notifications and request tracking",
  "Prepare the product for pilot use with retail businesses"
];

const screenshots = [
  "SMaid homepage",
  "Customer interface",
  "Queue/support flow",
  "Delivery/logistics",
  "Dashboard/admin",
  "Mobile view"
];

export default function SMaidPage() {
  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-layout">
          <div>
            <Link className="back-link" href="/companies">
              ← All companies
            </Link>
            <div className="eyebrow">Retail, Queue & Logistics Support</div>
            <h1>SMaid</h1>
            <BrandBadge badge="A Fonia Labs Company" />
            <p className="wide-text">
              Making supermarket shopping, queueing, and delivery support easier.
            </p>
            <p style={{ marginTop: 16, lineHeight: 1.7 }}>
              SMaid is a retail support and logistics company under Fonia Labs built to
              improve how supermarkets, shoppers, and delivery workflows operate.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>
              The platform is designed to support supermarket queue management, shopping
              assistance, delivery coordination, customer convenience, and smoother retail
              experiences.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <a
                className="btn primary"
                href="https://smaid.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit SMaid <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                View Product Details
              </Link>
            </div>
          </div>
          <div className="mock-shot">
            <div>
              <OCore size={88} />
              <h2 style={{ marginTop: 18 }}>SMaid</h2>
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
            <h2>A smarter support system for supermarket and retail experiences.</h2>
          </div>
          <div>
            <p className="lead">
              SMaid is built around the everyday frustration of shopping in supermarkets and
              retail spaces.
            </p>
            <p style={{ marginTop: 16 }}>
              Long queues, slow checkout processes, poor shopping coordination, difficulty
              getting support, and scattered delivery arrangements can make shopping stressful
              for both customers and businesses. SMaid exists to make supermarket shopping
              more organized by supporting queue flow, retail assistance, customer requests,
              delivery movement, and logistics coordination.
            </p>
            <p style={{ marginTop: 16 }}>
              The long-term vision is to build SMaid into a retail technology company that
              helps supermarkets serve customers faster, manage requests better, and create a
              smoother shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">The Problem</div>
            <h3>The problem SMaid solves.</h3>
            <p style={{ marginTop: 12 }}>
              Supermarket shopping can become inefficient when customers have to deal with
              long queues, crowded spaces, poor service coordination, and limited delivery
              support.
            </p>
            <p style={{ marginTop: 12 }}>
              Customers want convenience. Supermarkets want better operations. Delivery
              partners need clearer workflows. Retail staff need better ways to manage
              customer requests and movement.
            </p>
            <p style={{ marginTop: 12 }}>
              Without a structured digital system, supermarkets often depend on manual
              coordination, informal communication, and slow service processes. SMaid is
              designed to reduce that friction.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">The Solution</div>
            <h3>What SMaid provides.</h3>
            <p style={{ marginTop: 12 }}>
              SMaid provides a digital support system for supermarket and retail experiences.
            </p>
            <p style={{ marginTop: 12 }}>
              It is designed to help customers shop more conveniently, reduce waiting
              pressure, support queue organization, improve delivery workflows, and help
              supermarkets manage customer service more effectively.
            </p>
            <p style={{ marginTop: 12 }}>
              SMaid can grow into a platform that connects shoppers, supermarket operators,
              retail assistants, and delivery partners within one organized system.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Key Features"
            title="What SMaid includes."
            text="A retail support platform built around queue management, shopping assistance, and delivery coordination."
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
            <h2>Built for shoppers, supermarkets, and retail support teams.</h2>
            <p style={{ marginTop: 16 }}>
              SMaid is designed for people and businesses involved in supermarket shopping,
              store service, customer support, and delivery coordination. It helps customers
              shop with less stress while helping supermarkets create a more organized service
              experience.
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
            title="A look at SMaid."
            text="Screenshots from the live platform showing how SMaid supports queue flow, shopping requests, and logistics."
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
                <span className="kv-v">Retail, Queue & Logistics Support</span>
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
              SMaid is one of the featured companies under Fonia Labs, positioned as a retail
              technology and logistics support product focused on supermarket convenience,
              queue support, and shopping assistance.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform is active, growing, and open to feedback from shoppers,
              supermarkets, retail operators, and logistics partners.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Roadmap</div>
            <h3>What comes next for SMaid</h3>
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
            <h3>Test or collaborate with SMaid</h3>
            <p style={{ marginTop: 12 }}>
              SMaid is open to testers, supermarket operators, retail businesses, delivery
              partners, and collaborators who want to help improve the platform and test it
              in real retail environments.
            </p>
            <p style={{ marginTop: 12 }}>
              If you run a supermarket, work in retail, manage deliveries, or understand
              customer shopping problems, SMaid can become a useful platform to test,
              improve, and grow.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="btn primary"
                href="https://smaid.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Test SMaid <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                Partner With SMaid
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
              SMaid is built under Fonia Labs as part of a wider ecosystem of companies
              created to solve real-world problems across industries.
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
