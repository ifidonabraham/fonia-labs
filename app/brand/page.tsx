import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { SectionHeader } from "../../components/SectionHeader";
import { BrandMark } from "../../components/BrandMark";
import { BrandBadge } from "../../components/BrandBadge";
import { BrandAssetPreview } from "../../components/BrandAssetPreview";

export const metadata: Metadata = {
  title: "Brand Kit",
  description:
    "The Fonia Labs brand system: the O-core origin mark, logo lockups, endorsement badges, colors, and usage guidance."
};

const palette = [
  { name: "Background", hex: "#0B1120" },
  { name: "Primary Blue", hex: "#2563EB" },
  { name: "Accent Cyan", hex: "#38BDF8" },
  { name: "Text", hex: "#F8FAFC" },
  { name: "Muted", hex: "#6B7280" }
];

const dos = [
  "Keep clear space around the mark equal to the height of the core.",
  "Use the light logo on dark backgrounds and the dark logo on light backgrounds.",
  "Let the core stay the brightest point in the mark.",
  "Pair the wordmark with Poppins for supporting type."
];

const donts = [
  "Don't recolor the core away from the blue–cyan origin glow.",
  "Don't stretch, rotate, or distort the lockup.",
  "Don't add robot heads, brains, flasks, or AI-only motifs.",
  "Don't place the light logo on light backgrounds (or vice versa)."
];

export default function BrandPage() {
  return (
    <main>
      <PageHero
        eyebrow="Brand"
        title="Fonia Labs Brand Kit"
        text="The visual system behind Fonia Labs — built around the O-core origin mark."
        support="Use these assets and guidelines to represent Fonia Labs and its companies consistently across products, sites, and materials."
      />

      {/* The O-core */}
      <section className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">The O-Core</div>
            <h2>The origin where ideas begin.</h2>
            <p className="lead">
              The O-core represents the origin point — the center from which ideas are
              formed, refined, and grown into companies. Rotating rings surround a stable,
              glowing core: motion on the outside, a constant origin at the center.
            </p>
          </div>
          <div className="card" style={{ display: "grid", placeItems: "center", minHeight: 280 }}>
            <BrandMark variant="mark" size={180} animation="full" uid="kit-hero" />
          </div>
        </div>
      </section>

      {/* Logo lockups */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Logo System"
            title="Marks & lockups."
            text="The full lockup pairs the O-core with the Fonia wordmark and a spaced LABS sub-line. The mark can also stand alone."
          />
          <div className="grid cols-3" style={{ marginBottom: 24, alignItems: "center" }}>
            <div className="card" style={{ display: "grid", placeItems: "center", minHeight: 150 }}>
              <BrandMark variant="horizontal" size={54} uid="kit-h" />
            </div>
            <div className="card" style={{ display: "grid", placeItems: "center", minHeight: 150 }}>
              <BrandMark variant="stacked" size={64} uid="kit-s" />
            </div>
            <div className="card" style={{ display: "grid", placeItems: "center", minHeight: 150 }}>
              <BrandMark variant="mark" size={72} uid="kit-m" />
            </div>
          </div>
          <div className="grid cols-4">
            <BrandAssetPreview src="/logos/fonia-labs-logo.svg" name="Primary Logo" fileLabel="fonia-labs-logo.svg" />
            <BrandAssetPreview src="/logos/fonia-labs-logo-light.svg" name="Light Logo (on dark)" fileLabel="fonia-labs-logo-light.svg" />
            <BrandAssetPreview src="/logos/fonia-labs-logo-dark.svg" name="Dark Logo (on light)" fileLabel="fonia-labs-logo-dark.svg" surface="light" />
            <BrandAssetPreview src="/logos/fonia-labs-mark.svg" name="Icon / Mark" fileLabel="fonia-labs-mark.svg" />
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Endorsement Badges"
            title="Badges for companies & products."
            text="Every company and product in the ecosystem carries a consistent badge."
          />
          <div className="chips" style={{ gap: 16, marginBottom: 24 }}>
            <BrandBadge badge="A Fonia Labs Company" />
            <BrandBadge badge="A Fonia Labs Product" />
            <BrandBadge badge="Part of the Fonia Labs Ecosystem" />
          </div>
          <div className="grid cols-3">
            <BrandAssetPreview src="/badges/a-fonia-labs-company.svg" name="Company Badge" fileLabel="a-fonia-labs-company.svg" />
            <BrandAssetPreview src="/badges/a-fonia-labs-product.svg" name="Product Badge" fileLabel="a-fonia-labs-product.svg" />
            <BrandAssetPreview src="/og/fonia-labs-og.svg" name="Social / OG Image" fileLabel="fonia-labs-og.svg" />
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="section tight">
        <div className="container">
          <SectionHeader eyebrow="Color" title="Palette." />
          <div className="grid cols-4">
            {palette.map((color) => (
              <div className="swatch" key={color.hex}>
                <div className="swatch-chip" style={{ background: color.hex }} />
                <div className="swatch-body">
                  <p className="swatch-name">{color.name}</p>
                  <p className="swatch-hex">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="section tight">
        <div className="container split">
          <div>
            <div className="eyebrow">Typography</div>
            <h2>Poppins.</h2>
            <p>Clean, modern, and professional. Bold / SemiBold / Medium / Regular.</p>
          </div>
          <div className="card">
            <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: "-0.03em" }}>Aa</div>
            <p className="mt-sm">The quick brown fox builds companies. 0123456789</p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="section tight">
        <div className="container">
          <SectionHeader eyebrow="Usage" title="Do & don't." />
          <div className="usage-grid">
            <div className="usage-col">
              <h3>Do</h3>
              <ul className="usage-list do">
                {dos.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="usage-col">
              <h3>Don't</h3>
              <ul className="usage-list dont">
                {donts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Site Badge Embed */}
      <section className="section tight">
        <div className="container">
          <SectionHeader
            eyebrow="Site Badge"
            title="Add the Fonia Labs badge to your site."
            text="Every company and product under Fonia Labs can display this badge. It adapts to any background and requires one line of code."
          />

          {/* Live preview */}
          <div className="badge-preview-row">
            <div className="badge-preview-swatch dark-swatch">
              <div className="eyebrow" style={{ marginBottom: 12, fontSize: 10 }}>Dark surface</div>
              <a
                href="https://fonia-labs.vercel.app"
                className="fonia-site-badge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="A Fonia Labs Company Fonia Labs"
              >
                <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                  <circle cx="32" cy="32" r="28" stroke="#38bdf8" strokeWidth="3.2" strokeOpacity="0.55" strokeLinecap="round" strokeDasharray="38.5 5.5" transform="rotate(-45 32 32)" />
                  <circle cx="32" cy="32" r="21" stroke="#94a3b8" strokeWidth="2.4" strokeOpacity="0.45" strokeLinecap="round" strokeDasharray="28.5 4.5" transform="rotate(-45 32 32)" />
                  <circle cx="32" cy="32" r="14" stroke="#38bdf8" strokeWidth="1.8" strokeOpacity="0.5" strokeLinecap="round" strokeDasharray="18 3.8" transform="rotate(-45 32 32)" />
                  <circle cx="32" cy="32" r="7.5" fill="#38bdf8" fillOpacity="0.9" />
                  <ellipse cx="29.5" cy="28.5" rx="2.8" ry="1.8" fill="white" fillOpacity="0.45" transform="rotate(-30 29.5 28.5)" />
                </svg>
                <span className="fsb-text">
                  <span className="fsb-label">A Fonia Labs Company</span>
                  <span className="fsb-wordmark">
                    <span className="fsb-fon">Fon</span><span className="fsb-ia">ia</span>
                    <span className="fsb-labs">LABS</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="badge-preview-swatch light-swatch">
              <div className="eyebrow" style={{ marginBottom: 12, fontSize: 10, color: "#64748b" }}>Light surface</div>
              <a
                href="https://fonia-labs.vercel.app"
                className="fonia-site-badge fonia-site-badge--light"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="A Fonia Labs Company Fonia Labs"
              >
                <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                  <circle cx="32" cy="32" r="28" stroke="#38bdf8" strokeWidth="3.2" strokeOpacity="0.7" strokeLinecap="round" strokeDasharray="38.5 5.5" transform="rotate(-45 32 32)" />
                  <circle cx="32" cy="32" r="21" stroke="#94a3b8" strokeWidth="2.4" strokeOpacity="0.5" strokeLinecap="round" strokeDasharray="28.5 4.5" transform="rotate(-45 32 32)" />
                  <circle cx="32" cy="32" r="14" stroke="#38bdf8" strokeWidth="1.8" strokeOpacity="0.6" strokeLinecap="round" strokeDasharray="18 3.8" transform="rotate(-45 32 32)" />
                  <circle cx="32" cy="32" r="7.5" fill="#2563eb" />
                  <ellipse cx="29.5" cy="28.5" rx="2.8" ry="1.8" fill="white" fillOpacity="0.55" transform="rotate(-30 29.5 28.5)" />
                </svg>
                <span className="fsb-text">
                  <span className="fsb-label" style={{ color: "#94a3b8" }}>A Fonia Labs Company</span>
                  <span className="fsb-wordmark">
                    <span className="fsb-fon" style={{ color: "#0f172a" }}>Fon</span><span className="fsb-ia">ia</span>
                    <span className="fsb-labs" style={{ color: "#64748b" }}>LABS</span>
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Embed code blocks */}
          <div className="embed-blocks">
            <div className="embed-block">
              <div className="eb-head">
                <span className="eb-tag">JS Embed</span>
                <span className="eb-desc">One line — auto-detects dark/light, supports floating or inline placement</span>
              </div>
              <pre className="code-block"><code>{`<!-- Floating badge (bottom-right corner) -->
<script src="https://fonia-labs.vercel.app/embed/fonia-badge.js"></script>

<!-- Bottom-left corner -->
<script src="https://fonia-labs.vercel.app/embed/fonia-badge.js"
        data-position="bottom-left"></script>

<!-- Inline in your footer (renders in place) -->
<script src="https://fonia-labs.vercel.app/embed/fonia-badge.js"
        data-position="inline"
        data-theme="dark"></script>`}</code></pre>
            </div>

            <div className="embed-block">
              <div className="eb-head">
                <span className="eb-tag">HTML Only</span>
                <span className="eb-desc">No JavaScript required — paste the full snippet from the file below</span>
              </div>
              <pre className="code-block"><code>{`<!-- Download and reference the full snippet:
     https://fonia-labs.vercel.app/embed/fonia-badge-inline.html

     Then add to your footer:
-->
<a href="https://fonia-labs.vercel.app"
   class="fonia-badge"
   target="_blank" rel="noopener noreferrer">
  <!-- SVG + text from the snippet file -->
</a>`}</code></pre>
            </div>
          </div>

          <div className="embed-options-grid">
            {[
              { opt: 'data-position="bottom-right"', desc: "Floating — bottom-right corner (default)" },
              { opt: 'data-position="bottom-left"',  desc: "Floating — bottom-left corner" },
              { opt: 'data-position="inline"',        desc: "Renders where the script tag is placed" },
              { opt: 'data-theme="auto"',             desc: "Follows system dark/light preference (default)" },
              { opt: 'data-theme="dark"',             desc: "Always dark pill — for light-themed sites" },
              { opt: 'data-theme="light"',            desc: "Always light pill — for dark-themed sites" },
            ].map((row) => (
              <div className="eo-row" key={row.opt}>
                <code className="eo-opt">{row.opt}</code>
                <span className="eo-desc">{row.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-block">
            <h2>Build with the Fonia Labs identity.</h2>
            <p>Explore the ecosystem or partner with a company under Fonia Labs.</p>
            <div className="actions">
              <Link className="btn primary" href="/companies">
                View Companies
              </Link>
              <Link className="btn" href="/collaborate">
                Collaborate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
