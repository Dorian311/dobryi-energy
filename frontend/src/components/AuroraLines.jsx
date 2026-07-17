/**
 * AuroraLines — SVG wave art used as a background signature element.
 * A stack of translucent Prism-gradient curves.
 */
export default function AuroraLines({ className = "" }) {
  const paths = [
    { d: "M-100 300 Q 400 100, 800 300 T 1700 300", stroke: "url(#g1)" },
    { d: "M-100 340 Q 500 140, 900 340 T 1700 340", stroke: "url(#g2)" },
    { d: "M-100 380 Q 400 180, 900 380 T 1700 380", stroke: "url(#g3)" },
    { d: "M-100 420 Q 600 220, 1000 420 T 1700 420", stroke: "url(#g4)" },
    { d: "M-100 460 Q 500 260, 900 460 T 1700 460", stroke: "url(#g5)" },
  ];
  return (
    <svg
      viewBox="0 0 1600 600"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0" />
          <stop offset="30%" stopColor="#EC4899" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#22D3EE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
          <stop offset="40%" stopColor="#8B5CF6" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#22D3EE" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g3" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
          <stop offset="40%" stopColor="#22D3EE" stopOpacity="0.7" />
          <stop offset="80%" stopColor="#34D399" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g4" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g5" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0" />
          <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
        </linearGradient>
      </defs>
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke={p.stroke}
          strokeWidth="1"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
