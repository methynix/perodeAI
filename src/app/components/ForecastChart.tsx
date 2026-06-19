export default function ForecastChart({ className = '' }: { className?: string }) {
  const actual = '48,170 115,148 182,160 249,126 316,146 384,120';
  const predicted = '384,120 450,104 516,112 582,88 648,80 712,58';
  const band =
    '384,120 450,97 516,98 582,67 648,52 712,23 712,93 648,108 582,109 516,126 450,111 384,120';

  const actualPts = [
    [48, 170],
    [115, 148],
    [182, 160],
    [249, 126],
    [316, 146],
    [384, 120],
  ];

  const months = [
    { x: 48, label: 'Jan' },
    { x: 182, label: 'Mar' },
    { x: 384, label: 'now' },
    { x: 582, label: 'Sep' },
    { x: 712, label: 'Dec' },
  ];

  return (
    <svg
      viewBox="0 0 760 264"
      className={className}
      role="img"
      aria-label="Forecast chart: actual revenue to date continuing as a predicted trajectory after today."
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="var(--color-line)" strokeWidth="1">
        <line x1="48" y1="40" x2="720" y2="40" />
        <line x1="48" y1="100" x2="720" y2="100" />
        <line x1="48" y1="160" x2="720" y2="160" />
      </g>

      <line
        x1="48"
        y1="220"
        x2="720"
        y2="220"
        stroke="var(--color-line-strong)"
        strokeWidth="1.25"
      />

      <polygon className="forecast-band" points={band} fill="var(--color-cyan-ink)" fillOpacity="0.1" />

      <polyline
        className="forecast-predicted"
        points={predicted}
        fill="none"
        stroke="var(--color-navy)"
        strokeOpacity="0.5"
        strokeWidth="2.5"
        strokeDasharray="7 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <polyline
        className="forecast-actual"
        points={actual}
        fill="none"
        stroke="var(--color-navy)"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />

      {actualPts.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="var(--color-canvas)" stroke="var(--color-navy)" strokeWidth="2" />
      ))}

      <line
        x1="384"
        y1="34"
        x2="384"
        y2="220"
        stroke="var(--color-cyan-ink)"
        strokeWidth="1.25"
        strokeDasharray="3 4"
      />

      <g className="forecast-tip">
        <circle cx="712" cy="58" r="8" fill="none" stroke="var(--color-cyan-ink)" strokeWidth="1.5" />
        <circle cx="712" cy="58" r="3.5" fill="var(--color-navy)" />
      </g>

      <g fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.04em">
        <text x="384" y="26" textAnchor="middle" fill="var(--color-cyan-ink)">today</text>
        {months.map((m) => (
          <text key={m.label} x={m.x} y="240" textAnchor="middle" fill="var(--color-ink-soft)">
            {m.label}
          </text>
        ))}
      </g>
    </svg>
  );
}
