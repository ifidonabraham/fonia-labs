import type { Metadata } from "next";
import Link from "next/link";
import { OCore } from "../../../components/OCore";
import { SectionHeader } from "../../../components/SectionHeader";
import { BrandBadge } from "../../../components/BrandBadge";
import { BrandSig } from "../../../components/BrandSig";

export const metadata: Metadata = {
  title: "SystemGuardian — System Protection & Performance",
  description:
    "SystemGuardian is a system protection and performance product under Fonia Labs designed to monitor device performance, detect overload risks, and protect computers from resource pressure."
};

const features = [
  {
    title: "Performance Monitoring",
    text: "A direction for tracking CPU, memory, disk, network, and system resource usage."
  },
  {
    title: "Overload Detection",
    text: "Support for identifying when the system is approaching dangerous performance pressure."
  },
  {
    title: "Process Awareness",
    text: "A pathway for helping users understand which applications or processes are consuming resources."
  },
  {
    title: "Early Warning System",
    text: "A direction for alerting users before the computer becomes frozen or difficult to control."
  },
  {
    title: "Safe Action Suggestions",
    text: "Guidance that can help users decide what to close, pause, or investigate."
  },
  {
    title: "Developer Productivity Support",
    text: "A product direction that supports users who run heavy tools like browsers, terminals, code editors, servers, and design software."
  },
  {
    title: "Future Automation Direction",
    text: "A long-term pathway for controlled automation that can help manage system pressure without damaging user work."
  }
];

const users = [
  "Software developers",
  "Computer science students",
  "Designers",
  "Content creators",
  "Heavy laptop users",
  "Productivity workers",
  "People using low or mid-range PCs",
  "People running multiple applications",
  "Users who experience system freezing or slowdown",
  "People who need early performance warnings"
];

const roadmap = [
  "Define the desktop app architecture",
  "Improve resource monitoring logic",
  "Build process detection and ranking",
  "Add configurable warning thresholds",
  "Create safe process action rules",
  "Add notification and alert system",
  "Improve user interface and dashboard",
  "Test on Windows devices",
  "Add productivity-focused protection modes",
  "Explore controlled automation for system pressure response"
];

const screenshots = [
  "SystemGuardian dashboard",
  "CPU/memory monitoring",
  "Heavy process detection",
  "Warning/alert",
  "Settings or protection rules",
  "Desktop app interface"
];

export default function SystemGuardianPage() {
  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-layout">
          <div>
            <Link className="back-link" href="/companies">
              ← All companies
            </Link>
            <div className="eyebrow">System Protection & Performance</div>
            <h1>SystemGuardian</h1>
            <BrandBadge badge="A Fonia Labs Product" />
            <p className="wide-text">
              Protecting computers from overload, slowdown, and performance pressure.
            </p>
            <p style={{ marginTop: 16, lineHeight: 1.7 }}>
              SystemGuardian is a system protection and performance product under Fonia Labs
              designed to help users monitor device performance, detect overload risks, and
              protect computers from extreme CPU, memory, disk, or resource pressure.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>
              The product is built around the need for better visibility and control when a
              device becomes slow, overloaded, or difficult to manage during heavy work.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link className="btn primary" href="/collaborate">
                View SystemGuardian <span className="btn-arrow">→</span>
              </Link>
              <Link className="btn" href="/collaborate">
                View Product Details
              </Link>
            </div>
          </div>
          <div className="mock-shot">
            <div>
              <OCore size={88} />
              <h2 style={{ marginTop: 18 }}>SystemGuardian</h2>
              <p>Labs Product</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Overview</div>
            <h2>A smarter way to monitor and protect computer performance.</h2>
          </div>
          <div>
            <p className="lead">
              SystemGuardian is built around a common problem: computers can become slow,
              overloaded, or unresponsive when too many applications, background processes,
              or heavy tasks are running at the same time.
            </p>
            <p style={{ marginTop: 16 }}>
              For students, developers, creators, and professionals, this can interrupt work,
              damage productivity, and make it difficult to quickly identify what is causing
              the problem.
            </p>
            <p style={{ marginTop: 16 }}>
              SystemGuardian is designed as a performance monitoring and protection product
              that helps users understand system pressure and respond before the device
              becomes unusable.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">The Problem</div>
            <h3>The problem SystemGuardian solves.</h3>
            <p style={{ marginTop: 12 }}>
              Many users only notice a performance problem when their computer is already
              slow, frozen, hot, or close to 100% CPU, memory, disk, or GPU usage.
            </p>
            <p style={{ marginTop: 12 }}>
              At that point, opening Task Manager or finding the problem process may be
              difficult. Developers running tools like code editors, browsers, terminals,
              local servers, emulators, and design software can face this problem often.
            </p>
            <p style={{ marginTop: 12 }}>
              SystemGuardian is designed to give users earlier awareness, clearer monitoring,
              and stronger control over system performance issues.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">The Solution</div>
            <h3>What SystemGuardian provides.</h3>
            <p style={{ marginTop: 12 }}>
              SystemGuardian provides a product direction for monitoring computer resource
              usage, detecting dangerous performance spikes, identifying heavy processes, and
              helping users respond before the system becomes unstable.
            </p>
            <p style={{ marginTop: 12 }}>
              The long-term direction is to build a tool that can protect productivity by
              warning users early, suggesting actions, and possibly helping manage or close
              problematic processes safely.
            </p>
            <p style={{ marginTop: 12 }}>
              SystemGuardian represents the device-protection side of the Fonia Labs
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Key Features"
            title="What SystemGuardian includes."
            text="A system protection and performance platform built around monitoring, overload detection, and early warning."
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
            <h2>Built for people who depend on their computers daily.</h2>
            <p style={{ marginTop: 16 }}>
              SystemGuardian is designed for users who need their computers to stay
              responsive, stable, and usable during serious work.
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
            title="A look at SystemGuardian."
            text="Screenshots from the product interface showing monitoring, alerts, process awareness, and system protection."
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
                <span className="kv-v">Labs Product</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Category</span>
                <span className="kv-v">System Protection & Performance</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Tier</span>
                <span className="kv-v">Labs Product</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Badge</span>
                <span className="kv-v">A Fonia Labs Product</span>
              </div>
            </div>
            <p style={{ marginTop: 16 }}>
              SystemGuardian is a labs product under Fonia Labs focused on system monitoring,
              device protection, and performance stability.
            </p>
            <p style={{ marginTop: 12 }}>
              It is smaller than the featured companies, but it represents an important
              product direction within the ecosystem: building tools that protect
              productivity and help users work better.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Roadmap</div>
            <h3>What comes next for SystemGuardian</h3>
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
            <div className="eyebrow">Test & Contribute</div>
            <h3>Test or contribute to SystemGuardian</h3>
            <p style={{ marginTop: 12 }}>
              SystemGuardian is open to testers, developers, students, Windows users,
              performance-focused users, and collaborators who want to help improve system
              monitoring and device protection.
            </p>
            <p style={{ marginTop: 12 }}>
              If your computer slows down often, freezes under pressure, or struggles when
              running heavy applications, SystemGuardian can become a useful product to test
              and improve.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <Link className="btn primary" href="/collaborate">
                Test SystemGuardian <span className="btn-arrow">→</span>
              </Link>
              <Link className="btn" href="/collaborate">
                Suggest Features
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
              SystemGuardian is built under Fonia Labs as part of a wider ecosystem of
              companies and products created to solve real-world problems across technology,
              productivity, and daily work.
            </p>
          </div>
          <div>
            <BrandSig badge="A Fonia Labs Product" />
          </div>
        </div>
      </section>
    </main>
  );
}
