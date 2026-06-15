"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  ["Companies", "/companies"],
  ["About", "/about"],
  ["Collaborate", "/collaborate"],
  ["Updates", "/updates"],
  ["Contact", "/contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container">
        <div className="nav-inner">
          <Logo />

          <nav className="nav-links" aria-label="Main navigation">
            {links.map(([label, href]) => (
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
          {links.map(([label, href]) => (
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
