import type { Metadata } from "next";
import Link from "next/link";
import { OCore } from "../../../components/OCore";
import { SectionHeader } from "../../../components/SectionHeader";

export const metadata: Metadata = {
  title: "Seek — Opportunity Discovery",
  description:
    "Seek is an opportunity discovery company under Fonia Labs helping people find, organize, and act on opportunities across education, work, business, funding, and growth."
};

const features = [
  {
    title: "Opportunity Discovery",
    text: "A structured way to find opportunities across education, work, business, funding, programs, competitions, and personal growth."
  },
  {
    title: "Opportunity Categories",
    text: "Organized categories that help users find opportunities that match their interests and goals."
  },
  {
    title: "Deadline Awareness",
    text: "Support for helping users notice important dates and avoid missing valuable opportunities."
  },
  {
    title: "Save & Track Opportunities",
    text: "A direction for saving useful opportunities and tracking them until action is taken."
  },
  {
    title: "User-Focused Dashboard",
    text: "A clean dashboard experience for reviewing saved opportunities, updates, and relevant openings."
  },
  {
    title: "Application Support Direction",
    text: "A future pathway for helping users prepare, organize, and respond to opportunities more effectively."
  },
  {
    title: "Mobile-Friendly Experience",
    text: "A responsive interface built to support users across desktop, tablet, and mobile devices."
  }
];

const users = [
  "Students",
  "Job seekers",
  "Founders",
  "Entrepreneurs",
  "Creators",
  "Professionals",
  "Researchers",
  "Freelancers",
  "Grant seekers",
  "Scholarship applicants",
  "Program applicants",
  "Career-driven individuals"
];

const roadmap = [
  "Improve opportunity discovery and listing quality",
  "Strengthen categories and filtering",
  "Add saved opportunity tracking",
  "Improve deadline reminders",
  "Add user profiles and personalized feeds",
  "Add better dashboard organization",
  "Improve mobile experience",
  "Add application preparation support",
  "Build stronger opportunity sourcing workflows",
  "Prepare the platform for wider user testing and growth"
];

const screenshots = [
  "Seek homepage",
  "Opportunity dashboard",
  "Opportunity listing",
  "Opportunity details",
  "Saved opportunities",
  "Deadline/tracking",
  "Mobile view"
];

export default function SeekPage() {
  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-layout">
          <div>
            <Link className="back-link" href="/companies">
              ← All companies
            </Link>
            <div className="eyebrow">Opportunity Discovery</div>
            <h1>Seek</h1>
            <span className="badge">A Fonia Labs Company</span>
            <p className="wide-text">
              Discover, organize, and act on useful opportunities.
            </p>
            <p style={{ marginTop: 16, lineHeight: 1.7 }}>
              Seek is an opportunity discovery company under Fonia Labs built to help people
              find, organize, and act on opportunities across education, work, business,
              funding, personal growth, and career development.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>
              The platform is designed for people who want access to useful opportunities but
              need a better way to discover them, track them, and take action before they are
              missed.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <a
                className="btn primary"
                href="https://seek-beryl.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Seek <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                View Product Details
              </Link>
            </div>
          </div>
          <div className="mock-shot">
            <div>
              <OCore size={88} />
              <h2 style={{ marginTop: 18 }}>Seek</h2>
              <p>Active Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Overview</div>
            <h2>A better way to find and act on opportunities.</h2>
          </div>
          <div>
            <p className="lead">
              Seek is built around the reality that opportunities are everywhere, but they
              are often scattered, difficult to track, and easy to miss.
            </p>
            <p style={{ marginTop: 16 }}>
              Students miss scholarships. Job seekers miss openings. Founders miss funding
              calls. Creators miss programs. Professionals miss fellowships, grants, training,
              competitions, and career-building opportunities because the information is
              spread across too many places.
            </p>
            <p style={{ marginTop: 16 }}>
              Seek exists to make opportunity discovery more organized, accessible, and
              useful.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">The Problem</div>
            <h3>The problem Seek solves.</h3>
            <p style={{ marginTop: 12 }}>
              Many people do not lack ambition. They lack access to organized opportunity
              information.
            </p>
            <p style={{ marginTop: 12 }}>
              Opportunities are often posted across social media, websites, groups,
              newsletters, portals, and communities. Without a central system, people depend
              on chance, screenshots, forwarded messages, or random posts.
            </p>
            <p style={{ marginTop: 12 }}>
              This makes it difficult to know what is available, what is relevant, what
              deadline is approaching, and what action should be taken next. Seek is designed
              to reduce that friction by helping users discover and manage opportunities in a
              clearer way.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">The Solution</div>
            <h3>What Seek provides.</h3>
            <p style={{ marginTop: 12 }}>
              Seek provides a digital platform for discovering, organizing, and tracking
              useful opportunities.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform can help users browse opportunities, save useful ones, understand
              important details, monitor deadlines, and take action based on their goals.
            </p>
            <p style={{ marginTop: 12 }}>
              The long-term vision is to grow Seek into a global opportunity discovery
              company that helps people connect with education, career, funding, business,
              and growth opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Key Features"
            title="What Seek includes."
            text="An opportunity discovery platform built around finding, tracking, and acting on useful openings."
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
            <h2>Built for people looking for growth opportunities.</h2>
            <p style={{ marginTop: 16 }}>
              Seek is designed for anyone who wants to discover useful opportunities and take
              action on them. It is especially useful for people who are trying to grow
              academically, professionally, financially, or personally.
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
            title="A look at Seek."
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
                <span className="kv-v">Active Company</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Category</span>
                <span className="kv-v">Opportunity Discovery</span>
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
              Seek is an active company under Fonia Labs positioned as an opportunity
              discovery platform for people who want to find, organize, and act on useful
              openings.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform is active, growing, and open to feedback from students, job
              seekers, founders, creators, professionals, and opportunity-focused communities.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Roadmap</div>
            <h3>What comes next for Seek</h3>
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
            <h3>Test or collaborate with Seek</h3>
            <p style={{ marginTop: 12 }}>
              Seek is open to testers, students, founders, job seekers, opportunity curators,
              career communities, schools, creators, and organizations that want to help
              people access better opportunities.
            </p>
            <p style={{ marginTop: 12 }}>
              If you regularly find scholarships, grants, jobs, programs, competitions,
              training, or funding opportunities, Seek can become a useful platform to test,
              improve, and grow.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="btn primary"
                href="https://seek-beryl.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Test Seek <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                Partner With Seek
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
              Seek is built under Fonia Labs as part of a wider ecosystem of companies
              created to solve real-world problems across industries.
            </p>
          </div>
          <div>
            <div className="footer-badge">Seek is a Fonia Labs Company.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
