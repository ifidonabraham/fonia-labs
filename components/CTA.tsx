import Link from "next/link";

type Props = {
  title: string;
  text: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CTA({ title, text, primary, secondary }: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-block">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="actions">
            {primary ? (
              <Link className="btn primary" href={primary.href}>
                {primary.label}
              </Link>
            ) : null}
            {secondary ? (
              <Link className="btn" href={secondary.href}>
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
