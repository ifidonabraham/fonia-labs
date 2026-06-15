import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo-lockup" aria-label="Fonia Labs home">
      <span className="logo-mark"><span className="logo-core" /></span>
      <span>Fonia Labs</span>
    </Link>
  );
}
