import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { OCore } from "../../../components/OCore";
import { SectionHeader } from "../../../components/SectionHeader";
import { BrandBadge } from "../../../components/BrandBadge";
import { BrandSig } from "../../../components/BrandSig";

export const metadata: Metadata = {
  title: "UnilagFoodSpots — Campus & Community Product",
  description:
    "UnilagFoodSpots is a campus and community product under Fonia Labs helping students and visitors discover food spots around the University of Lagos."
};

const features = [
  {
    title: "Food Spot Discovery",
    text: "A simple way to find food spots around UNILAG."
  },
  {
    title: "Campus-Focused Listings",
    text: "Food options organized around the campus environment and student lifestyle."
  },
  {
    title: "Vendor Visibility",
    text: "A direction for helping campus food vendors become easier to discover."
  },
  {
    title: "Location Awareness",
    text: "A pathway for users to understand where food spots are located."
  },
  {
    title: "Student-Friendly Experience",
    text: "A lightweight experience designed around student convenience."
  },
  {
    title: "Mobile-Friendly Access",
    text: "A responsive interface that can be used easily on mobile devices."
  }
];

const users = [
  "UNILAG students",
  "New students",
  "Campus visitors",
  "Food vendors",
  "Campus workers",
  "Student groups",
  "People looking for affordable food options",
  "People exploring food spots around UNILAG"
];

const roadmap = [
  "Improve food spot listings",
  "Add better food categories",
  "Improve search and filtering",
  "Add vendor profiles",
  "Improve location details",
  "Add student reviews or ratings",
  "Improve mobile experience",
  "Add vendor onboarding direction",
  "Prepare for wider campus testing",
  "Expand to more campus-related discovery features"
];

const screenshots = [
  "UnilagFoodSpots homepage",
  "Food spots listing",
  "Food spot detail",
  "Search/discovery",
  "Mobile view"
];

export default function UnilagFoodSpotsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-layout">
          <div>
            <Link className="back-link" href="/companies">
              ← All companies
            </Link>
            <div className="eyebrow">Campus & Community Product</div>
            <h1>UnilagFoodSpots</h1>
            <BrandBadge badge="A Fonia Labs Product" />
            <p className="wide-text">
              Helping students and visitors find food spots around UNILAG.
            </p>
            <p style={{ marginTop: 16, lineHeight: 1.7 }}>
              UnilagFoodSpots is a campus and community product under Fonia Labs built to
              help students, visitors, and members of the University of Lagos community
              discover food spots around campus.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>
              The product is focused on making food discovery easier, faster, and more
              organized for people who want to know where to eat, what is available, and
              which food spots they can explore.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <a
                className="btn primary"
                href="https://unilagfoodspots.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit UnilagFoodSpots <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                View Product Details
              </Link>
            </div>
          </div>
          <div className="mock-shot" style={{ padding: 0, overflow: "hidden" }}>
            <Image
              src="/screenshots/unilagfoodspots/main.png"
              alt="UnilagFoodSpots product screenshot"
              width={1280}
              height={800}
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Overview</div>
            <h2>A simple food discovery system for the UNILAG community.</h2>
          </div>
          <div>
            <p className="lead">
              UnilagFoodSpots is built around a small but useful everyday problem: students
              and visitors often need quick information about food spots around campus.
            </p>
            <p style={{ marginTop: 16 }}>
              People may want to know where to eat, what options are nearby, where certain
              meals are available, or which spots are worth visiting. Without a simple
              discovery system, food choices often depend on word of mouth, random movement
              around campus, or previous personal experience.
            </p>
            <p style={{ marginTop: 16 }}>
              UnilagFoodSpots creates a clearer way to discover food options within the
              UNILAG environment.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">The Problem</div>
            <h3>The problem UnilagFoodSpots solves.</h3>
            <p style={{ marginTop: 12 }}>
              Finding food on campus can be stressful when students are busy, new to an area,
              or unsure where specific meals are sold.
            </p>
            <p style={{ marginTop: 12 }}>
              Visitors may not know the best food spots. New students may not know where to
              start. Even returning students may want to discover new places without walking
              around blindly.
            </p>
            <p style={{ marginTop: 12 }}>
              UnilagFoodSpots is designed to reduce that uncertainty by making campus food
              discovery easier.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">The Solution</div>
            <h3>What UnilagFoodSpots provides.</h3>
            <p style={{ marginTop: 12 }}>
              UnilagFoodSpots provides a simple digital product for discovering food spots
              around the University of Lagos.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform can help users view food places, explore available options,
              understand where food spots are located, and make better choices when looking
              for where to eat.
            </p>
            <p style={{ marginTop: 12 }}>
              The long-term direction is to make it more useful for students, vendors,
              visitors, and the wider campus community.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Key Features"
            title="What UnilagFoodSpots includes."
            text="A lightweight campus food discovery platform built for students, visitors, and the UNILAG community."
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
            <h2>Built for the UNILAG community.</h2>
            <p style={{ marginTop: 16 }}>
              UnilagFoodSpots is designed for people who want a faster and easier way to
              find food options around the University of Lagos.
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
            title="A look at UnilagFoodSpots."
            text="Screenshots from the live platform showing how campus food discovery works."
          />
          <div className="shot-grid">
            {screenshots.map((label, i) => (
              <div className="shot" key={label} style={{ padding: 0, overflow: "hidden" }}>
                <Image
                  src={`/screenshots/unilagfoodspots/shot-${i + 1}.png`}
                  alt={label}
                  width={1280}
                  height={800}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
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
                <span className="kv-v">Community Product</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Category</span>
                <span className="kv-v">Campus & Community Product</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Tier</span>
                <span className="kv-v">Community Product</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Badge</span>
                <span className="kv-v">A Fonia Labs Product</span>
              </div>
            </div>
            <p style={{ marginTop: 16 }}>
              UnilagFoodSpots is a community product under Fonia Labs. It is smaller than the
              major companies in the ecosystem, but it represents the same product-building
              mindset: identify a real everyday problem, build a useful product around it,
              and improve it over time.
            </p>
            <p style={{ marginTop: 12 }}>
              The platform is active, growing, and open to feedback from students, vendors,
              and members of the campus community.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Roadmap</div>
            <h3>What comes next for UnilagFoodSpots</h3>
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
            <h3>Test or contribute to UnilagFoodSpots</h3>
            <p style={{ marginTop: 12 }}>
              UnilagFoodSpots is open to students, food vendors, campus community members,
              and collaborators who want to improve food discovery around UNILAG.
            </p>
            <p style={{ marginTop: 12 }}>
              If you know food spots, run a food business, or understand student food needs
              on campus, UnilagFoodSpots can become a useful community product to test and
              improve.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="btn primary"
                href="https://unilagfoodspots.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Test UnilagFoodSpots <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                Suggest a Food Spot
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
              UnilagFoodSpots is built under Fonia Labs as part of a wider ecosystem of
              companies and products created to solve real-world problems across industries
              and communities.
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
