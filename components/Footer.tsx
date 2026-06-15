import Link from "next/link";
import { Logo } from "./Logo";
import { OCore } from "./OCore";

const explore = [
  ["Companies", "/companies"],
  ["About", "/about"],
  ["Collaborate", "/collaborate"],
  ["Updates", "/updates"],
  ["Contact", "/contact"],
  ["Brand Kit", "/brand"]
];

const coreAndFeatured = [
  ["FonTech", "/companies/fontech"],
  ["OmegaEstate", "/companies/omegaestate"],
  ["SMaid", "/companies/smaid"],
  ["Dokito", "/companies/dokito"],
  ["Seek", "/companies/seek"]
];

const growthAndProducts = [
  ["ContractFeed", "/companies/contractfeed"],
  ["StormBridge", "/companies/stormbridge"],
  ["ComplyIQ", "/companies/complyiq"],
  ["UnilagFoodSpots", "/companies/unilagfoodspots"],
  ["Deadline Dungeon", "/companies/deadline-dungeon"],
  ["SystemGuardian", "/companies/systemguardian"]
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid footer-grid-wide">
          <div>
            <Logo />
            <p className="mt-md">
              A global innovation group building companies, platforms, and products
              that solve real-world problems.
            </p>
            <p className="footer-brandline">Where Ideas Become Companies.</p>
            <div className="footer-built">
              <OCore size={22} />
              <span>
                <span className="footer-built-by">Proudly built by</span>
                <span className="footer-built-name">FonTech — A Fonia Labs Company</span>
              </span>
            </div>
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
            <h4>Core & Featured</h4>
            <ul className="list compact">
              {coreAndFeatured.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Growth & Products</h4>
            <ul className="list compact">
              {growthAndProducts.map(([label, href]) => (
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
