import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  ["Companies", "/brands"],
  ["About", "/about"],
  ["Updates", "/updates"],
  ["Contact", "/contact"]
];

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link className="btn primary" href="/contact">Partner With Us</Link>
        </nav>
      </div>
    </header>
  );
}
