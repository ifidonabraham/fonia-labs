import Link from "next/link";
import { Logo } from "./Logo";

const explore = [
  ["Companies", "/companies"],
  ["About", "/about"],
  ["Collaborate", "/collaborate"],
  ["Updates", "/updates"],
  ["Contact", "/contact"],
  ["Brand Kit", "/brand"]
];

const ecosystem = [
  ["FonTech", "/companies/fontech"],
  ["OmegaEstate", "/companies/omegaestate"],
  ["SMaid", "/companies/smaid"],
  ["Dokito", "/companies/dokito"],
  ["Seek", "/companies/seek"]
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p className="mt-md">
              A global innovation group building companies, platforms, and products
              that solve real-world problems.
            </p>
            <p className="footer-brandline">Where Ideas Become Companies.</p>
            <span className="footer-badge">Part of the Fonia Labs Ecosystem</span>
          </div>

          <div>
            <h4>Explore</h4>
            <ul className="list compact">
              {explore.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Ecosystem</h4>
            <ul className="list compact">
              {ecosystem.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <ul className="list compact">
              <li>
                <a href="https://github.com/ifidonabraham" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:ifidonabraham249@gmail.com">Email Fonia Labs</a>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Fonia Labs. All rights reserved.</p>
          <p>Founded and built by Ifidon Abraham.</p>
        </div>
      </div>
    </footer>
  );
}
