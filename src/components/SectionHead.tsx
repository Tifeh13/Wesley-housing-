import Reveal from './Reveal';

interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  onDark?: boolean;
}

export default function SectionHead({
  eyebrow,
  title,
  intro,
  align = 'center',
  onDark = false,
}: Props) {
  return (
    <Reveal
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${
        onDark ? 'text-ivory' : ''
      }`}
    >
      <p
        className={`text-xs font-semibold tracking-[0.22em] uppercase ${
          onDark ? 'text-gold-300' : 'text-gold-600'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl sm:text-4xl leading-[1.12] tracking-tight ${
          onDark ? 'text-ivory' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${onDark ? 'text-navy-100' : 'text-charcoal/70'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
