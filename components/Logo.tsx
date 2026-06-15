import Link from "next/link";
import { OCore } from "./OCore";

/**
 * Fonia Labs primary lockup: O-core mark + "Fonia" wordmark with the
 * accent on "ia", and a spaced "LABS" sub-line — matching the brand guide.
 */
export function Logo({ size = 38 }: { size?: number }) {
  return (
    <Link href="/" className="logo-lockup" aria-label="Fonia Labs — home">
      <OCore size={size} animation="subtle" uid="logo" />
      <span className="logo-text">
        <span className="logo-word">
          Fon<span className="lw-blue">ia</span>
        </span>
        <span className="logo-sub">LABS</span>
      </span>
    </Link>
  );
}
