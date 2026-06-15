export function OCore({ size = 40 }: { size?: number }) {
  const id = "oc";
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
        <radialGradient id={`${id}-orb`} cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="28%" stopColor="#7dd3fc" />
          <stop offset="62%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </radialGradient>
        <radialGradient id={`${id}-halo`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Outer broken ring — gaps at NW / NE / SE / SW */}
      <circle
        cx="32" cy="32" r="28"
        stroke="#cbd5e1"
        strokeWidth="3.2"
        strokeOpacity="0.55"
        strokeLinecap="round"
        strokeDasharray="38.5 5.5"
        transform="rotate(-45 32 32)"
      />

      {/* Mid ring */}
      <circle
        cx="32" cy="32" r="21"
        stroke="#94a3b8"
        strokeWidth="2.4"
        strokeOpacity="0.45"
        strokeLinecap="round"
        strokeDasharray="28.5 4.5"
        transform="rotate(-45 32 32)"
      />

      {/* Inner ring — cyan tint */}
      <circle
        cx="32" cy="32" r="14"
        stroke="#38bdf8"
        strokeWidth="1.8"
        strokeOpacity="0.5"
        strokeLinecap="round"
        strokeDasharray="18 3.8"
        transform="rotate(-45 32 32)"
      />

      {/* Ambient halo behind orb */}
      <circle cx="32" cy="32" r="12" fill={`url(#${id}-halo)`} />

      {/* Core orb */}
      <circle cx="32" cy="32" r="7.5" fill={`url(#${id}-orb)`} filter={`url(#${id}-glow)`} />

      {/* Specular highlight */}
      <ellipse cx="29.5" cy="28.5" rx="2.8" ry="1.8" fill="white" fillOpacity="0.5" transform="rotate(-30 29.5 28.5)" />
    </svg>
  );
}
