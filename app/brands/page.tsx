import { companies } from "../../data/companies";
import { CompanyCard } from "../../components/CompanyCard";
import { PageHero } from "../../components/PageHero";

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="Ecosystem" title="Companies & Ventures" text="Explore the Fonia Labs ecosystem." />
      <section className="section"><div className="container grid cols-3">{companies.map((item) => <CompanyCard key={item.slug} company={item} />)}</div></section>
    </main>
  );
}
