import { OCore } from "./OCore";

type Variant = "company" | "product" | "ecosystem";

const labels: Record<Variant, string> = {
  company: "A Fonia Labs Company",
  product: "A Fonia Labs Product",
  ecosystem: "Part of the Fonia Labs Ecosystem"
};

type Props = {
  variant?: Variant;
  /** Override the label (e.g. "Built by FonTech — A Fonia Labs Company"). */
  label?: string;
  uid?: string;
};

/**
 * BrandBadge — the consistent endorsement badge used across companies and
 * products in the ecosystem.
 */
export function BrandBadge({ variant = "company", label, uid }: Props) {
  return (
    <span className="brand-badge">
      <OCore size={18} uid={uid ?? `badge-${variant}`} />
      <span>{label ?? labels[variant]}</span>
    </span>
  );
}
