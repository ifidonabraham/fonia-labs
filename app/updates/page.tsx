import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
import { SectionHeader } from "../../components/SectionHeader";
import { updates, updateCategories } from "../../data/updates";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Follow the progress of Fonia Labs as ideas become products, products become platforms, and platforms grow into companies."
};

export default function UpdatesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Updates"
        title="Updates"
        text="Follow the progress of Fonia Labs as ideas become products, products become platforms, and platforms grow into companies."
      />

      {/* Categories */}
      <section className="section tight">
        <div className="container">
          <div className="eyebrow">Update Categories</div>
          <div className="chips mt-sm">
            {updateCategories.map((category) => (
              <span className="chip" key={category}>
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Latest"
            title="Building in public, growing with purpose."
            text="The Updates page tracks company announcements, product milestones, build logs, testing opportunities, partnership updates, and founder notes."
          />
          <div className="timeline">
            {updates.map((update) => (
              <article className="timeline-item" key={update.title}>
                <span className="ti-cat">{update.category}</span>
                <h3>{update.title}</h3>
                <p>{update.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
