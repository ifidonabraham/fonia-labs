import type { Metadata } from "next";
import Link from "next/link";
import { OCore } from "../../../components/OCore";
import { SectionHeader } from "../../../components/SectionHeader";
import { BrandBadge } from "../../../components/BrandBadge";
import { BrandSig } from "../../../components/BrandSig";

export const metadata: Metadata = {
  title: "Deadline Dungeon — Game & Productivity Experience",
  description:
    "Deadline Dungeon is a creative labs product under Fonia Labs that turns deadlines, focus, and task pressure into a game-like productivity experience."
};

const features = [
  {
    title: "Deadline-Based Gameplay",
    text: "A creative experience built around deadlines, urgency, and task pressure."
  },
  {
    title: "Task Challenge Direction",
    text: "A pathway for turning tasks into challenges that users can complete."
  },
  {
    title: "Progress Motivation",
    text: "A game-like approach that can help users feel progress as they work through responsibilities."
  },
  {
    title: "Focus Experience",
    text: "A product direction for encouraging focus and reducing procrastination."
  },
  {
    title: "Creative Interface",
    text: "A visual and interactive experience that makes productivity feel less ordinary."
  },
  {
    title: "Student & Creator Use Case",
    text: "A concept that can support students, creators, developers, and people with recurring deadlines."
  }
];

const users = [
  "Students",
  "Creators",
  "Developers",
  "Writers",
  "Freelancers",
  "Entrepreneurs",
  "People managing tasks",
  "People struggling with procrastination",
  "People who enjoy gamified productivity",
  "People who want a more engaging task experience"
];

const roadmap = [
  "Improve deadline and task flow",
  "Add clearer game mechanics",
  "Improve progress tracking",
  "Add user levels or achievements",
  "Improve visual experience",
  "Add reminders or focus sessions",
  "Improve mobile experience",
  "Test with students and productivity users",
  "Explore gamified task management direction",
  "Develop a clearer long-term product model"
];

const screenshots = [
  "Deadline Dungeon homepage",
  "Gameplay/interface",
  "Task/deadline screen",
  "Progress screen",
  "Mobile view"
];

export default function DeadlineDungeonPage() {
  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-layout">
          <div>
            <Link className="back-link" href="/companies">
              ← All companies
            </Link>
            <div className="eyebrow">Game & Productivity Experience</div>
            <h1>Deadline Dungeon</h1>
            <BrandBadge badge="A Fonia Labs Product" />
            <p className="wide-text">
              A game-inspired experience built around deadlines, focus, and task completion.
            </p>
            <p style={{ marginTop: 16, lineHeight: 1.7 }}>
              Deadline Dungeon is a creative labs product under Fonia Labs built around the
              pressure, challenge, and urgency of deadlines.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>
              The product turns the idea of deadlines into a game-like experience, helping
              users think about focus, tasks, time pressure, and completion in a more
              engaging way.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <a
                className="btn primary"
                href="https://deadline-dungeon-phi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Deadline Dungeon <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                View Product Details
              </Link>
            </div>
          </div>
          <div className="mock-shot">
            <div>
              <OCore size={88} />
              <h2 style={{ marginTop: 18 }}>Deadline Dungeon</h2>
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
            <h2>Turning deadlines into a game-like experience.</h2>
          </div>
          <div>
            <p className="lead">
              Deadline Dungeon is built around a familiar problem: people struggle with
              deadlines, procrastination, task pressure, and staying focused until work is
              completed.
            </p>
            <p style={{ marginTop: 16 }}>
              Instead of treating deadlines only as stress, Deadline Dungeon explores how
              game mechanics, challenge, progress, and urgency can make task completion feel
              more engaging.
            </p>
            <p style={{ marginTop: 16 }}>
              It is a creative product inside the Fonia Labs ecosystem, showing how even
              productivity problems can be approached through playful and interactive product
              design.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">The Problem</div>
            <h3>The problem Deadline Dungeon explores.</h3>
            <p style={{ marginTop: 12 }}>
              Many people delay important tasks until the pressure becomes too high.
              Students, creators, developers, workers, and entrepreneurs often face deadlines
              but struggle with focus, consistency, and motivation.
            </p>
            <p style={{ marginTop: 12 }}>
              Traditional to-do lists can feel boring. Calendar reminders can be ignored.
              Productivity tools can become overwhelming.
            </p>
            <p style={{ marginTop: 12 }}>
              Deadline Dungeon explores a more engaging approach by turning deadline pressure
              into a game-like experience that encourages action.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">The Solution</div>
            <h3>What Deadline Dungeon provides.</h3>
            <p style={{ marginTop: 12 }}>
              Deadline Dungeon provides a game-inspired experience where users can interact
              with deadlines, tasks, and productivity pressure in a more creative way.
            </p>
            <p style={{ marginTop: 12 }}>
              The product direction is to make deadlines feel less like random stress and
              more like structured challenges that can be completed, tracked, and improved.
            </p>
            <p style={{ marginTop: 12 }}>
              The long-term direction could grow into a productivity game, student focus
              tool, deadline tracker, or gamified task management system.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Key Features"
            title="What Deadline Dungeon includes."
            text="A game-inspired productivity experience built around deadlines, focus, and task challenge."
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
            <h2>Built for people who fight deadlines.</h2>
            <p style={{ marginTop: 16 }}>
              Deadline Dungeon is designed for people who want a more interesting way to
              think about deadlines, focus, and productivity.
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
            title="A look at Deadline Dungeon."
            text="Screenshots from the live product showing the game-inspired deadline and productivity experience."
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
                <span className="kv-v">Game & Productivity Experience</span>
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
              Deadline Dungeon is a labs product under Fonia Labs. It is smaller than the
              featured companies, but it represents the creative side of the ecosystem:
              building products that explore new ways to solve everyday problems.
            </p>
            <p style={{ marginTop: 12 }}>
              The product is active, growing, and open to feedback from students, creators,
              productivity users, and people interested in gamified task management.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Roadmap</div>
            <h3>What comes next for Deadline Dungeon</h3>
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
            <h3>Test or contribute to Deadline Dungeon</h3>
            <p style={{ marginTop: 12 }}>
              Deadline Dungeon is open to testers, students, creators, developers, designers,
              productivity users, and collaborators who want to explore how gaming and
              productivity can work together.
            </p>
            <p style={{ marginTop: 12 }}>
              If you struggle with deadlines, enjoy productivity tools, or understand game
              design, Deadline Dungeon can become a useful product to test, improve, and
              grow.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="btn primary"
                href="https://deadline-dungeon-phi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Test Deadline Dungeon <span className="btn-arrow">→</span>
              </a>
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
              Deadline Dungeon is built under Fonia Labs as part of a wider ecosystem of
              companies and products created to solve real-world problems through practical
              and creative ideas.
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
