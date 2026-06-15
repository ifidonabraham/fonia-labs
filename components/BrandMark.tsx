import { OCore } from "./OCore";

type Variant = "mark" | "horizontal" | "stacked";
type Animation = "none" | "subtle" | "full";

type Props = {
  variant?: Variant;
  size?: number;
  animation?: Animation;
  uid?: string;
};

/**
 * BrandMark — the Fonia Labs identity for display contexts (heroes, brand
 * surfaces, decks). Unlike Logo it does not link, and it supports the mark
 * alone, a horizontal lockup, or a stacked lockup.
 */
export function BrandMark({ variant = "mark", size = 64, animation = "none", uid = "brand" }: Props) {
  if (variant === "mark") {
    return <OCore size={size} animation={animation} uid={uid} />;
  }

  return (
    <span className={`brand-lockup brand-lockup--${variant}`}>
      <OCore size={size} animation={animation} uid={uid} />
      <span className="brand-lockup-word">
        <span className="brand-lockup-name">
          Fon<span className="lw-blue">ia</span>
        </span>
        <span className="brand-lockup-labs">LABS</span>
      </span>
    </span>
  );
}
