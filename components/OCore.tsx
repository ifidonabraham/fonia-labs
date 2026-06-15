type OCoreAnimation = "none" | "subtle" | "full";

type Props = {
  size?: number;
  /** Animation intensity. "subtle" suits the header; "full" suits the hero. */
  animation?: OCoreAnimation;
  /** Unique suffix for gradient ids when multiple marks render on one page. */
  uid?: string;
  title?: string;
};

/**
 * O-Core — the Fonia Labs origin mark.
 *
 * The "O" is the origin: the point where ideas begin and companies grow.
 * A broken outer ring, a middle ring, and an inner accent arc surround a
 * stable glowing core. Ring elements carry class names so they can rotate
 * slowly and independently via CSS (see globals.css).
 */
export function OCore({ size = 40, animation = "none", uid = "fl", title }: Props) {
  const ringId = `oc-ring-${uid}`;
  const coreId = `oc-core-${uid}`;
  const glowId = `oc-glow-${uid}`;

  return (
    <svg
      className={`ocore ocore--${animation}`}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={title ?? "Fonia Labs O-core mark"}
    >
      <defs>
        <linearGradient id={ringId} x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e2e8f0" />
          <stop offset="0.5" stopColor="#94a3b8" />
          <stop offset="1" stopColor="#475569" />
        </linearGradient>
        <radialGradient id={coreId} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="45%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </radialGradient>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow halo behind the core */}
      <circle className="oc-glow" cx="32" cy="32" r="20" fill={`url(#${glowId})`} />

      {/* Outer broken ring (two arcs with gaps) */}
      <g className="oc-ring oc-ring--outer">
        <path d="M32 7 A25 25 0 0 1 57 32" stroke={`url(#${ringId})`} strokeWidth="5" strokeLinecap="round" />
        <path d="M32 57 A25 25 0 0 1 7 32" stroke={`url(#${ringId})`} strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* Middle ring (single broken arc for depth) */}
      <g className="oc-ring oc-ring--mid">
        <path d="M14 20 A21 21 0 0 1 50 16" stroke="#cbd5e1" strokeOpacity="0.45" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Inner accent arc */}
      <g className="oc-ring oc-ring--inner">
        <path d="M44 20 A17 17 0 0 1 44 44" stroke="#38bdf8" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Stable glowing core */}
      <g className="oc-core">
        <circle cx="32" cy="32" r="9" fill={`url(#${coreId})`} />
        <circle cx="32" cy="32" r="9" fill="none" stroke="#7dd3fc" strokeOpacity="0.35" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
