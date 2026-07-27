import type { Metadata } from "next";
import Link from "next/link";
import { BrandBadge } from "../../../../components/BrandBadge";

export const metadata: Metadata = {
  title: "SMaid — In Progress",
  description: "New SMaid content, in progress."
};

export default function SMaidNewPage() {
  return (
    <main>
      <section className="company-hero">
        <div className="container">
          <Link className="back-link" href="/companies">
            ← All companies
          </Link>
          <div className="eyebrow">Retail, Queue & Logistics Support</div>
          <h1>SMaid</h1>
          <BrandBadge badge="A Fonia Labs Company" />
          <p className="wide-text" style={{ marginTop: 16 }}>
            New content in progress. Not yet public.
          </p>
        </div>
      </section>
    </main>
  );
}
