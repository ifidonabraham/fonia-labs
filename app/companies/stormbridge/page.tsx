import type { Metadata } from "next";
import Link from "next/link";
import { OCore } from "../../../components/OCore";
import { SectionHeader } from "../../../components/SectionHeader";
import { BrandBadge } from "../../../components/BrandBadge";
import { BrandSig } from "../../../components/BrandSig";

export const metadata: Metadata = {
  title: "StormBridge — Weather & Emergency Intelligence",
  description:
    "StormBridge is a weather and emergency intelligence company under Fonia Labs built to support disaster preparedness, risk awareness, community reporting, and emergency response."
};

const features = [
  {
    title: "Weather Risk Check",
    text: "A feature direction for checking weather-related risks based on location and available weather information."
  },
  {
    title: "Risk Analysis",
    text: "Support for analyzing the level of threat and presenting understandable risk guidance to users."
  },
  {
    title: "Community Reports",
    text: "A reporting flow that allows users to submit hazard reports or community-level emergency information."
  },
  {
    title: "Responder Dashboard",
    text: "A dashboard direction for viewing alerts, reports, and emergency-related information."
  },
  {
    title: "Offline Preparedness",
    text: "A feature direction for saving important emergency guidance so users can access it when internet connection is limited."
  },
  {
    title: "Alerts & Notifications",
    text: "A pathway for warning users about risks, threats, or important emergency updates."
  },
  {
    title: "Preparedness Guidance",
    text: "Simple recommended actions that help people know what to do before, during, or after a risk event."
  }
];

const users = [
  "Households",
  "Communities",
  "Students",
  "Emergency responders",
  "Local authorities",
  "NGOs",
  "Disaster response teams",
  "Weather-aware users",
  "Community safety groups",
  "Public safety organizations",
  "Environmental risk teams"
];

const roadmap = [
  "Improve weather risk checking",
  "Strengthen risk analysis and alert guidance",
  "Improve community hazard reporting",
  "Improve responder dashboard experience",
  "Add better map/location-based reporting",
  "Improve offline emergency message support",
  "Add stronger alert and notification workflows",
  "Improve mobile experience",
  "Add multilingual support direction",
  "Prepare for wider testing with communities and safety stakeholders"
];

const screenshots = [
  "StormBridge homepage",
  "Weather check",
  "Risk result",
  "Community report form",
  "Responder dashboard",
  "Offline preparedness",
  "Mobile view"
];

export default function StormBridgePage() {
  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-layout">
          <div>
            <Link className="back-link" href="/companies">
              ← All companies
            </Link>
            <div className="eyebrow">Weather & Emergency Intelligence</div>
            <h1>StormBridge</h1>
            <BrandBadge badge="A Fonia Labs Company" />
            <p className="wide-text">
              Weather intelligence, disaster preparedness, and emergency support.
            </p>
            <p style={{ marginTop: 16, lineHeight: 1.7 }}>
              StormBridge is a weather and emergency intelligence company under Fonia Labs
              built to support disaster preparedness, risk awareness, community reporting,
              and emergency response.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>
              The platform is designed to help people, communities, and response teams
              understand possible weather-related risks, report hazards, receive guidance,
              and stay better prepared during emergency situations.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <a
                className="btn primary"
                href="https://stormbrigde.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit StormBridge <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                View Product Details
              </Link>
            </div>
          </div>
          <div className="mock-shot">
            <div>
              <OCore size={88} />
              <h2 style={{ marginTop: 18 }}>StormBridge</h2>
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
            <h2>Connecting weather awareness with emergency preparedness.</h2>
          </div>
          <div>
            <p className="lead">
              StormBridge is built around the need for better risk awareness before, during,
              and after weather-related or environmental events.
            </p>
            <p style={{ marginTop: 16 }}>
              Many people do not receive clear, simple, and timely guidance when there is a
              weather threat, flooding risk, storm warning, or community hazard. Emergency
              information can be scattered, delayed, or difficult to understand.
            </p>
            <p style={{ marginTop: 16 }}>
              StormBridge exists to bridge that gap by creating a platform where weather
              information, risk analysis, community reporting, alerts, and preparedness
              guidance can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">The Problem</div>
            <h3>The problem StormBridge solves.</h3>
            <p style={{ marginTop: 12 }}>
              Disaster preparedness often fails because people do not have the right
              information at the right time.
            </p>
            <p style={{ marginTop: 12 }}>
              Communities may not know the level of risk they are facing. Households may not
              know what actions to take. Emergency responders may not get enough
              community-level information quickly. Local authorities and support organizations
              may need better tools for understanding reports, alerts, and affected areas.
            </p>
            <p style={{ marginTop: 12 }}>
              StormBridge is designed to make weather risk and emergency preparedness more
              accessible, organized, and actionable.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">The Solution</div>
            <h3>What StormBridge provides.</h3>
            <p style={{ marginTop: 12 }}>
              StormBridge provides a digital platform for weather intelligence, risk
              awareness, disaster preparedness, community reports, alerts, and emergency
              support.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform can help users check weather risk, understand possible threats,
              report hazards, view alerts, access offline emergency messages, and support
              community-level preparedness.
            </p>
            <p style={{ marginTop: 12 }}>
              The long-term vision is to grow StormBridge into a safety and emergency
              intelligence company that supports households, communities, responders, NGOs,
              and institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Key Features"
            title="What StormBridge includes."
            text="A weather and emergency platform built around risk awareness, community reporting, and preparedness guidance."
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
            <h2>Built for communities, responders, and safety-focused organizations.</h2>
            <p style={{ marginTop: 16 }}>
              StormBridge is designed for people and organizations that need clearer weather
              risk information, emergency reports, preparedness guidance, and
              community-level safety support.
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
            title="A look at StormBridge."
            text="Screenshots from the live platform showing the weather intelligence, reporting, dashboard, and offline preparedness experience."
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
                <span className="kv-v">Weather & Emergency Intelligence</span>
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
              StormBridge is part of the Fonia Labs company ecosystem and is positioned as a
              growth company focused on weather intelligence, disaster preparedness, emergency
              reporting, and community safety.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform is active, growing, and open to feedback from communities,
              emergency responders, NGOs, safety-focused organizations, and users interested
              in disaster preparedness.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Roadmap</div>
            <h3>What comes next for StormBridge</h3>
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
            <h3>Test or collaborate with StormBridge</h3>
            <p style={{ marginTop: 12 }}>
              StormBridge is open to testers, emergency responders, NGOs,
              weather-focused communities, safety organizations, students, and collaborators
              who want to improve disaster preparedness and community risk awareness.
            </p>
            <p style={{ marginTop: 12 }}>
              If you work in emergency response, climate awareness, weather communication,
              safety planning, or community support, StormBridge can become a useful platform
              to test, improve, and grow.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="btn primary"
                href="https://stormbrigde.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Test StormBridge <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                Partner With StormBridge
              </Link>
              <Link className="btn" href="/contact">
                Contact Fonia Labs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency responsibility note */}
      <section className="section tight">
        <div className="container warning-note">
          <strong>Emergency responsibility.</strong>
          <p style={{ marginTop: 8 }}>
            StormBridge is designed to support weather awareness, preparedness guidance, and
            emergency information organization. It should not replace official emergency
            services, government warnings, professional safety instructions, or direct
            emergency response.
          </p>
          <p style={{ marginTop: 8 }}>
            Users should always follow official emergency instructions and contact qualified
            emergency services when urgent help is needed.
          </p>
        </div>
      </section>

      {/* Ecosystem badge */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Part of the Fonia Labs Ecosystem</div>
            <p style={{ marginTop: 12 }}>
              StormBridge is built under Fonia Labs as part of a wider ecosystem of
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
