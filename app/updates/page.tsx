import { PageHero } from "../../components/PageHero";

const updates = [
  "Fonia Labs begins its public ecosystem rollout.",
  "FonTech becomes the software production company under Fonia Labs.",
  "Seek is recognized as an active opportunity discovery company.",
  "Testers and collaborators are invited across the ecosystem."
];

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="Updates" title="Building in public, growing with purpose." text="Follow the progress of Fonia Labs as ideas become products, products become platforms, and platforms grow into companies." />
      <section className="section"><div className="container grid cols-2">{updates.map((item) => <article className="card" key={item}><h3>{item}</h3><p>Company update from the Fonia Labs ecosystem.</p></article>)}</div></section>
    </main>
  );
}
