"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const topLinks = [
  ["About", "/about"],
  ["Collaborate", "/collaborate"],
  ["Updates", "/updates"],
  ["Contact", "/contact"]
];

const companyGroups = [
  {
    label: "Core Company",
    items: [{ name: "FonTech", slug: "fontech" }]
  },
  {
    label: "Featured Companies",
    items: [
      { name: "OmegaEstate", slug: "omegaestate" },
      { name: "SMaid", slug: "smaid" },
      { name: "Dokito", slug: "dokito" },
      { name: "Seek", slug: "seek" }
    ]
  },
  {
    label: "Growth Companies",
    items: [
      { name: "ContractFeed", slug: "contractfeed" },
      { name: "StormBridge", slug: "stormbridge" },
      { name: "ComplyIQ", slug: "complyiq" }
    ]
  },
  {
    label: "Community & Labs",
    items: [
      { name: "UnilagFoodSpots", slug: "unilagfoodspots" },
      { name: "Deadline Dungeon", slug: "deadline-dungeon" },
      { name: "SystemGuardian", slug: "systemguardian" }
    ]
  }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileCompaniesOpen, setMobileCompaniesOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container">
        <div className="nav-inner">
          <Logo />

          <nav className="nav-links" aria-label="Main navigation">
            <div className="nav-dropdown-wrap">
              <Link href="/companies" className="nav-dropdown-trigger">
                Companies
                <svg className="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="2 4 6 8 10 4" />
                </svg>
              </Link>
              <div className="nav-dropdown">
                <div className="nav-dropdown-inner">
                  {companyGroups.map((group) => (
                    <div className="nav-dropdown-group" key={group.label}>
                      <div className="nav-dropdown-label">{group.label}</div>
                      {group.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/companies/${item.slug}`}
                          className="nav-dropdown-item"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="nav-dropdown-footer">
                  <Link href="/companies" className="nav-dropdown-all">
                    View all companies →
                  </Link>
                </div>
              </div>
            </div>

            {topLinks.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="nav-cta">
            <Link className="btn primary" href="/collaborate">
              Partner With Us
            </Link>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <nav className={"nav-mobile" + (open ? " open" : "")} aria-label="Mobile navigation">
          <div className="nav-mobile-companies">
            <button
              className="nav-mobile-companies-toggle"
              onClick={() => setMobileCompaniesOpen((v) => !v)}
            >
              Companies
              <svg className={"nav-chevron" + (mobileCompaniesOpen ? " rotated" : "")} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="2 4 6 8 10 4" />
              </svg>
            </button>
            {mobileCompaniesOpen && (
              <div className="nav-mobile-companies-list">
                <Link href="/companies" className="nav-mobile-companies-all" onClick={() => setOpen(false)}>
                  All companies
                </Link>
                {companyGroups.flatMap((group) =>
                  group.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/companies/${item.slug}`}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>

          {topLinks.map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link className="btn primary" href="/collaborate" onClick={() => setOpen(false)}>
            Partner With Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
