import type { Metadata } from "next";
import Link from "next/link";
import { OCore } from "../../../components/OCore";
import { SectionHeader } from "../../../components/SectionHeader";
import { BrandBadge } from "../../../components/BrandBadge";
import { BrandSig } from "../../../components/BrandSig";

export const metadata: Metadata = {
  title: "Dokito — Health Technology",
  description:
    "Dokito is a health technology company under Fonia Labs designed to improve access to health support, health records, facility discovery, and emergency flows."
};

const features = [
  {
    title: "Health Records",
    text: "A structured space for organizing and accessing health-related information."
  },
  {
    title: "Facility Finder",
    text: "A feature direction for helping users discover nearby health facilities and medical service locations."
  },
  {
    title: "Emergency Support",
    text: "Emergency-focused flows that can help users quickly access urgent information or support."
  },
  {
    title: "Ask Dokito",
    text: "A support experience designed to help users ask health-related questions and receive guided assistance."
  },
  {
    title: "Appointments",
    text: "A pathway for health appointment planning, care scheduling, or future booking workflows."
  },
  {
    title: "Prescriptions & Medical Notes",
    text: "Support direction for organizing prescriptions, care notes, and user health-related details."
  },
  {
    title: "Responsive Health Platform",
    text: "A clean platform experience designed for desktop, tablet, and mobile use."
  }
];

const users = [
  "Patients",
  "Clinics",
  "Doctors",
  "Health startups",
  "Medical facilities",
  "Care providers",
  "Families",
  "Emergency support teams",
  "Community health organizations",
  "Health-focused institutions"
];

const roadmap = [
  "Improve health records structure",
  "Strengthen facility discovery",
  "Improve emergency support flow",
  "Add better appointment workflows",
  "Improve profile and patient information handling",
  "Improve mobile experience",
  "Strengthen data safety and privacy direction",
  "Add clinic/provider onboarding direction",
  "Improve health support experience",
  "Prepare for testing with real users and healthcare stakeholders"
];

const screenshots = [
  "Dokito homepage",
  "Health records",
  "Ask Dokito",
  "Facility finder",
  "Emergency mode",
  "Appointments",
  "Mobile view"
];

export default function DokitoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-layout">
          <div>
            <Link className="back-link" href="/companies">
              ← All companies
            </Link>
            <div className="eyebrow">Health Technology</div>
            <h1>Dokito</h1>
            <BrandBadge badge="A Fonia Labs Company" />
            <p className="wide-text">
              Digital health access, support, and care navigation.
            </p>
            <p style={{ marginTop: 16, lineHeight: 1.7 }}>
              Dokito is a health technology company under Fonia Labs designed to improve
              access to health support, health records, facility discovery, emergency flows,
              and digital care experiences.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>
              The platform is built around the need for easier health navigation, better
              medical information access, and faster connection between people and
              health-related services.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <a
                className="btn primary"
                href="https://dokito.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Dokito <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                View Product Details
              </Link>
            </div>
          </div>
          <div className="mock-shot">
            <div>
              <OCore size={88} />
              <h2 style={{ marginTop: 18 }}>Dokito</h2>
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
            <h2>A digital health platform for easier care access.</h2>
          </div>
          <div>
            <p className="lead">
              Dokito is built around one important problem: many people struggle to access
              health information, nearby facilities, medical support, emergency help, and
              organized health records when they need them.
            </p>
            <p style={{ marginTop: 16 }}>
              The goal of Dokito is to create a health technology platform that helps users
              find support faster, understand their options better, and manage health-related
              information in a more organized way.
            </p>
            <p style={{ marginTop: 16 }}>
              Dokito is not just a website. It is a product direction for digital care
              access, emergency support, health records, facility discovery, and
              patient-centered health technology.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">The Problem</div>
            <h3>The problem Dokito solves.</h3>
            <p style={{ marginTop: 12 }}>
              Healthcare access can be difficult when people do not know where to go, who to
              contact, what facility is nearby, or how to organize their health information.
            </p>
            <p style={{ marginTop: 12 }}>
              Many patients depend on scattered communication, manual records, poor facility
              discovery, and delayed response during urgent situations. Health providers and
              clinics also need better ways to present services, manage patient information,
              and support digital care experiences.
            </p>
            <p style={{ marginTop: 12 }}>
              Dokito is designed to reduce this gap by creating a more organized digital
              health support system.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">The Solution</div>
            <h3>What Dokito provides.</h3>
            <p style={{ marginTop: 12 }}>
              Dokito provides a digital platform for health support, health records, facility
              discovery, emergency access, and care navigation.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform is designed to help users manage health-related information, access
              support features, discover medical facilities, and interact with health services
              more easily.
            </p>
            <p style={{ marginTop: 12 }}>
              The long-term vision is to grow Dokito into a health technology company that
              supports patients, healthcare providers, clinics, communities, and
              health-focused organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Key Features"
            title="What Dokito includes."
            text="A health technology platform built around care access, health records, emergency support, and facility discovery."
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
            <h2>Built for patients, providers, and health-focused communities.</h2>
            <p style={{ marginTop: 16 }}>
              Dokito is designed for people and organizations that need easier health access,
              better health information flow, and more organized care support.
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
            title="A look at Dokito."
            text="Screenshots from the live platform showing how the digital health experience is structured."
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
                <span className="kv-v">Health Technology</span>
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
              Dokito is one of the featured companies under Fonia Labs, positioned as a
              health technology product focused on digital care access, health support,
              emergency flows, and facility discovery.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform is active, growing, and open to feedback from users, health
              workers, clinics, and health-focused collaborators.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Roadmap</div>
            <h3>What comes next for Dokito</h3>
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
            <h3>Test or collaborate with Dokito</h3>
            <p style={{ marginTop: 12 }}>
              Dokito is open to testers, health workers, clinics, medical students,
              health-tech collaborators, and organizations that want to help improve access
              to digital health support.
            </p>
            <p style={{ marginTop: 12 }}>
              If you work in healthcare, understand patient needs, run a clinic, or care
              about improving health access, Dokito can become a platform to test, improve,
              and grow.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="btn primary"
                href="https://dokito.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Test Dokito <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                Partner With Dokito
              </Link>
              <Link className="btn" href="/contact">
                Contact Fonia Labs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Health responsibility note */}
      <section className="section tight">
        <div className="container warning-note">
          <strong>Health responsibility.</strong>
          <p style={{ marginTop: 8 }}>
            Dokito is designed to support health access, information organization, care
            navigation, and emergency direction. It should not replace professional medical
            diagnosis, treatment, or emergency medical care.
          </p>
          <p style={{ marginTop: 8 }}>
            Users should always contact qualified healthcare professionals or emergency
            services when medical attention is needed.
          </p>
        </div>
      </section>

      {/* Ecosystem badge */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Part of the Fonia Labs Ecosystem</div>
            <p style={{ marginTop: 12 }}>
              Dokito is built under Fonia Labs as part of a wider ecosystem of companies
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
