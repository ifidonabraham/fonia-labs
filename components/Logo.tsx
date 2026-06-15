import Link from "next/link";
import { OCore } from "./OCore";

export function Logo({ size = 38 }: { size?: number }) {
  return (
    <Link href="/" className="logo-lockup" aria-label="Fonia Labs — home">
      <OCore size={size} animation="subtle" uid="logo" />
      <span className="logo-text">
        <span className="logo-word">
          Fon<span className="lw-blue">ia</span>
        </span>
        <span className="logo-sub">
          <span className="logo-rule" />
          LABS
          <span className="logo-rule" />
        </span>
      </span>
    </Link>
  );
}
