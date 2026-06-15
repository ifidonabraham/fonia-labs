import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { SectionHeader } from "../../components/SectionHeader";
import { UpdatesList } from "../../components/UpdatesList";
import {
  updates,
  updateCategories,
  categoryDescriptions,
  testingOpportunities,
  founderNotes
} from "../../data/updates";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Follow the progress of Fonia Labs as ideas become products, products become platforms, and platforms grow into companies."
};

const categoryIcons: Record<string, string> = {
  "Company Announcements": "📢",
  "Product Milestones": "🏁",
  "Build Logs": "🔧",
  "Testing Opportunities": "🧪",
  "Partnership Updates": "🤝",
  "Founder Notes": "✍️"
};

export default function UpdatesPage() {
  const featured = updates.find((u) => u.featured);
  const nonFeatured = updates.filter((u) => !u.featured);

  return (
    <main>
      <PageHero
        eyebrow="Updates"
        title="Updates from the Ecosystem"
        text="Follow the progress of Fonia Labs as ideas become products, products become platforms, and platforms grow into companies."
      />

      {/* Introduction */}
      <section className="section tight">
        <div className="container">
          <div className="prose-block">
            <h2 className="section-title">Building in public, growing with purpose.</h2>
            <p>
              Fonia Labs does not build behind closed doors. This page tracks everything happening
              across the ecosystem — new companies, product launches, behind-the-scenes builds,
              early testing invitations, partnerships, and founder reflections.
            </p>
            <p>
              Each update here is a record of progress. Some updates mark major milestones. Others
              capture small but meaningful steps forward. All of them reflect a commitment to
              building things that matter and sharing the journey openly.
            </p>
            <p>
              Whether you are a tester, a collaborator, an investor, or someone simply following
              along — this is the place to stay connected to everything Fonia Labs is building.
            </p>
          </div>
        </div>
      </section>

      {/* Update Categories */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Categories"
            title="What kinds of updates are shared here?"
            text="Updates are organized into six categories. Each category covers a different part of the Fonia Labs journey."
          />
          <div className="cards-grid">
            {updateCategories.map((cat) => (
              <div className="info-card" key={cat}>
                <div className="ic-icon">{categoryIcons[cat]}</div>
                <h3 className="ic-title">{cat}</h3>
                <p className="ic-text">{categoryDescriptions[cat]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Update */}
      {featured && (
        <section className="section tight">
          <div className="container">
            <div className="eyebrow">Featured Update</div>
            <div className="featured-update">
              <div className="fu-meta">
                <span className="uc-cat">{featured.category}</span>
                <span className="uc-sep">·</span>
                <span className="uc-company">{featured.company}</span>
                <span className="uc-sep">·</span>
                <span className="uc-date">{featured.date}</span>
              </div>
              <h2 className="fu-title">{featured.title}</h2>
              <p className="fu-text">{featured.text}</p>
            </div>
          </div>
        </section>
      )}

      {/* All Updates — filterable */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="All Updates"
            title="Every step of the journey, documented."
            text="Filter updates by company to follow a specific product or organization within the Fonia Labs ecosystem."
          />
          <UpdatesList updates={nonFeatured} />
        </div>
      </section>

      {/* Build Logs */}
      <section className="section tight updates-alt-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Build Logs"
            title="Behind the build."
            text="Build logs share how products are actually being made — design decisions, technical choices, rebuilds, experiments, and everything in between."
          />
          <div className="prose-block muted-block">
            <p>
              Build logs are not polished launch announcements. They are honest records of the
              process — what is being built, why certain decisions were made, what changed, and what
              comes next.
            </p>
            <p>
              Every product under Fonia Labs has a build log. Check company pages for detailed
              build progress, or follow along here for ecosystem-level build updates.
            </p>
          </div>
          <div className="mt-lg">
            <Link href="/companies" className="btn secondary">
              View all companies →
            </Link>
          </div>
        </div>
      </section>

      {/* Testing Opportunities */}
      <section className="section" id="testing">
        <div className="container">
          <SectionHeader
            eyebrow="Testing Opportunities"
            title="Help shape what we are building."
            text="Several Fonia Labs companies are actively looking for testers, early users, and real-world feedback. If you use or need the product, your input matters."
          />
          <div className="testing-grid">
            {testingOpportunities.map((opp) => (
              <Link
                key={opp.slug}
                href={`/companies/${opp.slug}`}
                className="testing-card"
              >
                <div className="tc-header">
                  <span className="tc-company">{opp.company}</span>
                  <span className="tc-status">{opp.status}</span>
                </div>
                <p className="tc-who">
                  <strong>Who:</strong> {opp.who}
                </p>
                <p className="tc-area">
                  <strong>Area:</strong> {opp.area}
                </p>
                <span className="tc-link">Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="mt-xl">
            <p className="muted-note">
              To apply as a tester, visit the company page and use the collaborate form — or reach
              out directly via the contact page.
            </p>
            <div className="btn-row mt-md">
              <Link href="/collaborate" className="btn primary">
                Collaborate with us →
              </Link>
              <Link href="/contact" className="btn secondary">
                Contact Fonia Labs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Notes */}
      <section className="section tight updates-alt-bg">
        <div className="container">
          <SectionHeader
            eyebrow="Founder Notes"
            title="Thoughts from the founder."
            text="Periodic reflections on why Fonia Labs exists, what drives it, and where it is going."
          />
          <div className="founder-notes">
            {founderNotes.map((note) => (
              <div className="founder-note" key={note.title}>
                <div className="fn-meta">
                  <span className="fn-author">Ifidon Abraham</span>
                  <span className="uc-sep">·</span>
                  <span className="fn-date">{note.date}</span>
                </div>
                <h3 className="fn-title">{note.title}</h3>
                <p className="fn-text">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Along */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Stay Connected"
            title="Follow the journey."
            text="Updates are shared across platforms. Find us wherever you prefer to follow along."
          />
          <div className="follow-grid">
            <div className="follow-card">
              <div className="flc-icon">📰</div>
              <h3 className="flc-title">Substack</h3>
              <p className="flc-text">
                Longer essays, founder notes, and ecosystem reflections — subscribe to stay informed.
              </p>
              <a
                href="https://substack.com/@ifidonabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary sm"
              >
                Follow on Substack →
              </a>
            </div>
            <div className="follow-card">
              <div className="flc-icon">💻</div>
              <h3 className="flc-title">GitHub</h3>
              <p className="flc-text">
                Watch the code evolve. See what is being built, updated, and shipped across the ecosystem.
              </p>
              <a
                href="https://github.com/ifidonabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary sm"
              >
                Follow on GitHub →
              </a>
            </div>
            <div className="follow-card">
              <div className="flc-icon">✉️</div>
              <h3 className="flc-title">Direct Contact</h3>
              <p className="flc-text">
                Have a question, idea, or opportunity to share? Reach out directly and start a conversation.
              </p>
              <Link href="/contact" className="btn secondary sm">
                Contact Fonia Labs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-section">
        <div className="container text-center">
          <div className="eyebrow">What&apos;s Next</div>
          <h2 className="section-title">See what we are building next.</h2>
          <p className="section-text">
            Fonia Labs is always moving. Visit the companies page to explore the full ecosystem,
            or collaborate to get involved directly.
          </p>
          <div className="btn-row centered mt-lg">
            <Link href="/companies" className="btn primary">
              Explore the ecosystem →
            </Link>
            <Link href="/collaborate" className="btn secondary">
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
