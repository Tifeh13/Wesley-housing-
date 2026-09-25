import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Extra delay in ms before the fade-up runs. */
  delay?: number;
  as?: keyof HTMLElementTagNameMap;
}

/** Fade-up on scroll. Powered by the IntersectionObserver in App. */
export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  return (
    <div
      className={`reveal ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
