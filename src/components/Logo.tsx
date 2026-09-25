import { Link } from 'react-router-dom';

/**
 * Wesley Housing logo: a refined "W" whose inner strokes form the
 * gables of a house beneath a gold roofline. Strokes use currentColor
 * so it works on light and dark backgrounds; `onDark` switches the
 * wordmark and monogram to ivory.
 */
export default function Logo({ onDark = false }: { onDark?: boolean }) {
  const stroke = onDark ? '#f7f4ee' : '#0e1d30';
  const accent = onDark ? '#ddc393' : '#b08c46';

  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 select-none group"
      aria-label="Wesley Housing home"
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        {/* roofline */}
        <path
          d="M5 17.2 20 5l15 12.2"
          stroke={accent}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* outer W gables */}
        <path
          d="M9 30V17.8L14.6 25 20 17.8 25.4 25 31 17.8V30"
          stroke={stroke}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* threshold */}
        <path
          d="M9 30h22"
          stroke={stroke}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-display text-[1.35rem] leading-none tracking-tight ${
          onDark ? 'text-ivory' : 'text-navy-900'
        }`}
      >
        Wesley <span className="italic font-medium">Housing</span>
      </span>
    </Link>
  );
}
