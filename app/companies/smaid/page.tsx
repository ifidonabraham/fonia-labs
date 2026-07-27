import type { Metadata } from "next";
import Link from "next/link";
import { BrandBadge } from "../../../components/BrandBadge";

export const metadata: Metadata = {
  title: "SMaid",
  description: "SMaid — A Fonia Labs Company. Contact for more details."
};

export default function SMaidPage() {
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
            This page is currently private.
          </p>
          <div className="actions" style={{ marginTop: 24 }}>
            <Link className="btn primary" href="/contact">
              Contact me for more details <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
