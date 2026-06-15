import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { OCore } from "../../../components/OCore";
import { SectionHeader } from "../../../components/SectionHeader";
import { CTA } from "../../../components/CTA";
import { BrandBadge } from "../../../components/BrandBadge";
import { BrandSig } from "../../../components/BrandSig";

export const metadata: Metadata = {
  title: "FonTech — Software Production & Digital Services",
  description:
    "FonTech is the software production and digital services company under Fonia Labs, building premium websites, apps, platforms, dashboards, and digital systems for businesses."
};

const services = [
  {
    title: "Premium Website Development",
    text: "Modern, responsive websites for businesses, organizations, startups, schools, churches, agencies, real estate brands, health brands, and service providers."
  },
  {
    title: "Landing Page Development",
    text: "Focused pages for product launches, campaigns, ads, events, services, personal brands, and lead generation."
  },
  {
    title: "Web Application Development",
    text: "Custom web platforms, dashboards, portals, forms, business tools, admin panels, booking systems, and interactive applications."
  },
  {
    title: "Mobile App Interface Design",
    text: "Clean mobile app screens and product flows for MVPs, startup demos, business apps, and digital product concepts."
  },
  {
    title: "Product Design & Management Support",
    text: "Support for product structure, user flow, feature planning, visual direction, and digital product presentation."
  },
  {
    title: "Brand & Visual Design Support",
    text: "Flyers, logos, digital assets, brand visuals, and design materials for online and offline business communication."
  },
  {
    title: "3D & Interactive Web Experiences",
    text: "Modern web sections and interactive experiences that help brands stand out with premium visual presentation."
  }
];

const users = [
  "Businesses",
  "Startups",
  "Schools",
  "Churches",
  "Real estate brands",
  "Health brands",
  "Restaurants and food businesses",
  "Service providers",
  "Creators and personal brands",
  "Nonprofits and community organizations",
  "Agencies and consultants",
  "Organizations that need internal tools or dashboards"
];

const steps = [
  {
    n: "01",
    title: "Understand",
    text: "We begin by understanding the business, the target users, the goal, the brand style, and the type of digital product needed."
  },
  {
    n: "02",
    title: "Structure",
    text: "We organize the pages, features, user flow, content sections, and product direction before building."
  },
  {
    n: "03",
    title: "Design",
    text: "We create a clean, modern, responsive design that fits the brand and gives users a smooth experience."
  },
  {
    n: "04",
    title: "Develop",
    text: "We build the website, platform, dashboard, or app interface using modern development tools and clean implementation."
  },
  {
    n: "05",
    title: "Improve",
    text: "We review the product, adjust details, improve responsiveness, fix issues, and prepare it for launch or presentation."
  }
];

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Firebase",
  "API integrations",
  "Responsive UI",
  "Dashboard design",
  "Forms and data capture",
  "Authentication flows",
  "Map and location features",
  "AI-assisted features where needed",
  "Product documentation",
  "Vercel deployment"
];

const roadmap = [
  "Expand website and app development services",
  "Create service packages for business websites, landing pages, and platforms",
  "Build stronger client portfolio pages",
  "Create reusable product templates and design systems",
  "Improve onboarding for new clients",
  "Add more case studies from Fonia Labs companies",
  "Build a stronger public brand presence across social platforms",
  "Develop a full client intake and project management workflow"
];

const screenshots = [
  "FonTech website",
  "Portfolio website",
  "OmegaEstate",
  "Dokito",
  "SMaid",
  "ContractFeed",
  "StormBridge"
];

export default function FonTechPage() {
  return (
    <main>
      {/* Hero */}
      <section className="company-hero">
        <div className="container company-layout">
          <div>
            <Link className="back-link" href="/companies">
              ← All companies
            </Link>
            <div className="eyebrow">Software Production & Digital Services</div>
            <h1>FonTech</h1>
            <BrandBadge badge="A Fonia Labs Company" />
            <p className="wide-text">
              Building websites, apps, platforms, and digital products for businesses.
            </p>
            <p style={{ marginTop: 16, lineHeight: 1.7 }}>
              FonTech is the software production and digital services company under Fonia
              Labs. It builds premium websites, mobile applications, web platforms,
              dashboards, product designs, and digital systems for businesses, organizations,
              brands, and institutions.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.7 }}>
              FonTech exists to help businesses move from basic online presence to
              professional digital systems that look modern, work smoothly, and support
              growth.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <a
                className="btn primary"
                href="https://fontech-site.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Build With FonTech <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/collaborate">
                View Services
              </Link>
            </div>
          </div>
          <div className="mock-shot" style={{ padding: 0, overflow: "hidden" }}>
            <Image
              src="/screenshots/fontech/main.png"
              alt="FonTech product screenshot"
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
            <h2>Software development for businesses, brands, and organizations.</h2>
          </div>
          <div>
            <p className="lead">
              FonTech helps businesses and organizations turn ideas into digital products.
            </p>
            <p style={{ marginTop: 16 }}>
              From premium websites and landing pages to full web platforms, mobile app
              interfaces, dashboards, and business systems, FonTech focuses on building
              digital solutions that are clean, responsive, professional, and useful.
            </p>
            <p style={{ marginTop: 16 }}>
              The goal is not just to build something that looks good. The goal is to build
              something that helps a business communicate clearly, serve users better, and
              grow online.
            </p>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="section tight">
        <div className="container grid cols-2">
          <div className="card">
            <div className="eyebrow">The Problem</div>
            <h3>Why FonTech exists.</h3>
            <p style={{ marginTop: 12 }}>
              Many businesses know they need a strong digital presence, but they do not
              always have the right website, platform, or product structure to support their
              growth.
            </p>
            <p style={{ marginTop: 12 }}>
              Some businesses have no website. Some have outdated designs. Some depend only
              on social media. Some have ideas for platforms but do not know how to design or
              build them. Others need a digital product that can help them manage customers,
              services, bookings, content, payments, data, or operations.
            </p>
            <p style={{ marginTop: 12 }}>
              FonTech exists to solve this gap by helping businesses move from scattered
              ideas to structured digital products.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">The Solution</div>
            <h3>What FonTech provides.</h3>
            <p style={{ marginTop: 12 }}>
              FonTech provides website development, web application development, mobile app
              interface design, product design support, dashboard creation, brand visuals,
              and digital platform development.
            </p>
            <p style={{ marginTop: 12 }}>
              Each project is built around the business goal — helping a brand look more
              premium, helping customers understand services faster, creating a landing page
              that converts, or designing a platform that supports real users.
            </p>
            <p style={{ marginTop: 12 }}>
              FonTech combines design thinking, software development, and business
              understanding to create digital systems that are useful and professional.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Services"
            title="What FonTech builds."
            text="FonTech offers a range of digital production services for businesses, organizations, and brands."
          />
          <div className="grid cols-3">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p style={{ marginTop: 8 }}>{service.text}</p>
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
            <h2>Built for businesses that want to look serious online.</h2>
            <p style={{ marginTop: 16 }}>
              FonTech serves individuals, startups, companies, organizations, institutions,
              and brands that need a better digital presence or a functional digital product.
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

      {/* How FonTech works */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Process"
            title="How FonTech works."
            text="Every project follows a structured process to make sure the final product fits the goal and works well."
          />
          <div className="grid cols-3">
            {steps.map((step) => (
              <div className="card pillar" key={step.n}>
                <span className="pill-num">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Technology</div>
            <h2>Modern development for modern businesses.</h2>
            <p style={{ marginTop: 16 }}>
              FonTech works with modern web technologies and design tools to create fast,
              responsive, and scalable digital products.
            </p>
          </div>
          <div className="chips">
            {tech.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Selected Work"
            title="Product examples and screenshots."
            text="FonTech's work is connected to the wider Fonia Labs ecosystem. Product examples include business websites, real estate platforms, health platforms, opportunity systems, dashboards, and digital tools."
          />
          <div className="shot-grid">
            {[
              { src: "/screenshots/fontech/shot-1.png",       label: "FonTech website" },
              { src: "/screenshots/portfolio/shot-1.png",      label: "Portfolio website" },
              { src: "/screenshots/omegaestate/shot-1.png",    label: "OmegaEstate" },
              { src: "/screenshots/dokito/shot-1.png",         label: "Dokito" },
              { src: "/screenshots/smaid/shot-1.png",          label: "SMaid" },
              { src: "/screenshots/contractfeed/shot-1.png",   label: "ContractFeed" },
              { src: "/screenshots/stormbridge/shot-1.png",    label: "StormBridge" },
            ].map(({ src, label }) => (
              <div className="shot" key={label} style={{ padding: 0, overflow: "hidden" }}>
                <Image
                  src={src}
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
                <span className="kv-v">Active Company</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Category</span>
                <span className="kv-v">Software Production & Digital Services</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Tier</span>
                <span className="kv-v">Core Company</span>
              </div>
              <div className="kv-row">
                <span className="kv-k">Badge</span>
                <span className="kv-v">A Fonia Labs Company</span>
              </div>
            </div>
            <p style={{ marginTop: 16 }}>
              FonTech is active as the software production and digital services company under
              Fonia Labs. It is positioned to work with businesses, brands, and organizations
              that need websites, apps, platforms, design support, or custom digital systems.
            </p>
            <p style={{ marginTop: 12 }}>
              FonTech also supports the growth of other companies under Fonia Labs by helping
              build and shape their digital products.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Roadmap</div>
            <h3>What comes next for FonTech</h3>
            <ul className="list" style={{ marginTop: 12 }}>
              {roadmap.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="section tight">
        <div className="container">
          <div className="card">
            <div className="eyebrow">Start a Project</div>
            <h3>Want to build with FonTech?</h3>
            <p style={{ marginTop: 12 }}>
              If you need a premium website, mobile app interface, web platform, dashboard,
              landing page, or digital system for your business, FonTech can help you turn
              the idea into a clean and professional product.
            </p>
            <p style={{ marginTop: 12 }}>
              Send your business name, idea, pages needed, features, brand colors, logo,
              content, and examples of websites or apps you like. FonTech will help shape the
              direction and build a digital solution that fits your goal.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <a
                className="btn primary"
                href="https://fontech-site.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a Project <span className="btn-arrow">→</span>
              </a>
              <Link className="btn" href="/contact">
                Contact FonTech
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parent badge */}
      <section className="section tight">
        <div className="container">
          <BrandSig badge="A Fonia Labs Company" />
          <p className="muted-line" style={{ marginTop: 8 }}>
            Built by FonTech — A Fonia Labs Company.
          </p>
        </div>
      </section>
    </main>
  );
}
