import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>Fonia Labs is a global innovation group building companies, platforms, and products that solve real-world problems.</p>
          <p><strong>Where Ideas Become Companies.</strong></p>
          <p>Founded and built by Ifidon Abraham.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <ul className="list compact">
            <li><Link href="/companies">Companies</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/collaborate">Collaborate</Link></li>
            <li><Link href="/updates">Updates</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Connect</h3>
          <ul className="list compact">
            <li><a href="https://github.com/ifidonabraham" target="_blank">GitHub</a></li>
            <li><a href="https://portfolio2007.vercel.app" target="_blank">Portfolio</a></li>
            <li>@ifidonabraham249</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
