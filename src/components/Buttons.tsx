import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  primary:
    'bg-navy-900 text-ivory border border-navy-900 hover:bg-navy-800 hover:border-navy-800 shadow-sm hover:shadow-md',
  gold: 'bg-gold-400 text-navy-950 border border-gold-400 hover:bg-gold-300 hover:border-gold-300 shadow-sm hover:shadow-md',
  outline:
    'bg-transparent text-navy-900 border border-navy-900/25 hover:border-navy-900 hover:bg-navy-900/[0.04]',
  'outline-light':
    'bg-transparent text-ivory border border-ivory/35 hover:border-ivory hover:bg-ivory/10',
  ghost: 'bg-transparent text-navy-900 hover:bg-navy-900/[0.05]',
  'ghost-light': 'bg-transparent text-ivory/85 hover:text-ivory hover:bg-ivory/10',
} as const;

export type ButtonVariant = keyof typeof styles;

const base =
  'inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-lg transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none';

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-[0.95rem]',
  sm: 'px-4 py-2 text-sm',
} as const;

interface Common {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${styles[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: Common & React.ComponentProps<typeof Link>) {
  return (
    <Link className={`${base} ${styles[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonA({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: Common & React.ComponentProps<'a'>) {
  return (
    <a className={`${base} ${styles[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
