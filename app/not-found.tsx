import Link from "next/link";
import { OCore } from "../components/OCore";

export default function NotFound() {
  return (
    <main>
      <section className="container center-stage">
        <div>
          <OCore size={72} />
          <div className="big gradient-text">404</div>
          <h2>This page is not part of the ecosystem.</h2>
          <p className="muted-line" style={{ margin: "12px auto 24px" }}>
            The page you are looking for could not be found. Explore the Fonia Labs
            companies instead.
          </p>
          <div className="actions" style={{ justifyContent: "center" }}>
            <Link className="btn primary" href="/">
              Back Home
            </Link>
            <Link className="btn" href="/companies">
              View Companies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
