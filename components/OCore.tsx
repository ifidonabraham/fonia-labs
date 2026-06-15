/**
 * O-Core — the Fonia Labs origin mark.
 * The "O" represents the origin: the point where ideas begin and
 * companies grow. A broken outer ring with a glowing blue core.
 */
export function OCore({ size = 40 }: { size?: number }) {
  return (
    <svg
      className="ocore"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Fonia Labs O-core mark"
    >
      <defs>
        <linearGradient id="oc-ring" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e2e8f0" />
          <stop offset="0.5" stopColor="#94a3b8" />
          <stop offset="1" stopColor="#475569" />
        </linearGradient>
        <radialGradient id="oc-core" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="45%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </radialGradient>
      </defs>

      {/* Outer broken ring (two arcs with gaps) */}
      <path
        d="M32 7 A25 25 0 0 1 57 32"
        stroke="url(#oc-ring)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M32 57 A25 25 0 0 1 7 32"
        stroke="url(#oc-ring)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Inner accent arc */}
      <path
        d="M44 20 A17 17 0 0 1 44 44"
        stroke="#38bdf8"
        strokeOpacity="0.55"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Glowing core */}
      <circle cx="32" cy="32" r="9" fill="url(#oc-core)" />
      <circle cx="32" cy="32" r="9" fill="none" stroke="#7dd3fc" strokeOpacity="0.35" strokeWidth="1.5" />
    </svg>
  );
}
