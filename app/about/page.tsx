import { PageHero } from "../../components/PageHero";

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="About" title="About Fonia Labs" text="Fonia Labs is a global innovation group building companies, platforms, and products that solve real-world problems." />
      <section className="section"><div className="container card"><h2>Founder-led. Globally focused.</h2><p>Fonia Labs was founded and built by Ifidon Abraham with a long-term vision to build useful companies from practical ideas.</p></div></section>
    </main>
  );
}
