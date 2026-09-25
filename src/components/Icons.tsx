/**
 * Reusable icon set: thin 1.5px strokes, no fills, consistent style.
 * All icons inherit currentColor.
 */

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

type IconProps = { className?: string };

export const BedIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
    <path d="M3 18h18" />
    <path d="M5 10V6h6v4" />
    <circle cx="8" cy="13.5" r="1.25" />
  </svg>
);

export const BathIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
    <path d="M6 12V6a2 2 0 0 1 4 0" />
    <path d="M7 19l-1 2M17 19l1 2" />
  </svg>
);

export const AreaIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="4" y="4" width="16" height="16" rx="1" />
    <path d="M4 9h5V4M20 15h-5v5" />
  </svg>
);

export const PinIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 21s-6.5-5.2-6.5-10.2a6.5 6.5 0 0 1 13 0C18.5 15.8 12 21 12 21Z" />
    <circle cx="12" cy="10.6" r="2.2" />
  </svg>
);

export const StarIcon = ({ className }: IconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className={className}
  >
    <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6Z" />
  </svg>
);

export const PhoneIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const MessageIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.2 0-2.4-.2-3.4-.7L3 21l1.7-5.1A8.5 8.5 0 1 1 21 11.5Z" />
    <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
  </svg>
);

export const SearchIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-4.2-4.2" />
  </svg>
);

export const ArrowIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 12h16" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

export const ChevronLeftIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m14.5 5-7 7 7 7" />
  </svg>
);

export const ChevronRightIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m9.5 5 7 7-7 7" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const CloseIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const MenuIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const ShieldIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 3l7 2.6v5.1c0 4.7-3 8.4-7 10.3-4-1.9-7-5.6-7-10.3V5.6L12 3Z" />
    <path d="m9 11.5 2 2 4-4.5" />
  </svg>
);

export const CompassIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </svg>
);

export const HeartHandIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 20s-7-4.3-7-9.3A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.7c0 5-7 9.3-7 9.3Z" />
  </svg>
);

export const HomeIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m4 11 8-7 8 7" />
    <path d="M6 9.5V20h12V9.5" />
    <path d="M10 20v-5h4v5" />
  </svg>
);

export const KeyIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="8" cy="14" r="4" />
    <path d="m11 11 8-8" />
    <path d="m16 6 2.5 2.5M14 8l2.5 2.5" />
  </svg>
);

export const LayersIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m4.5 12.8 7.5 4.2 7.5-4.2" />
    <path d="m4.5 16.8 7.5 4.2 7.5-4.2" />
  </svg>
);

export const FacebookIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v5.5H14V14h2.5l.5-3.5h-3V8.3c0-.2.2-.3.3-.3Z" />
  </svg>
);

export const InstagramIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const LinkedInIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M6.5 10v7" />
    <circle cx="6.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
    <path d="M10.5 17v-4a2.5 2.5 0 0 1 5 0v4" />
    <path d="M10.5 10v2M10.5 12v5" />
  </svg>
);
