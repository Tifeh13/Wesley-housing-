import type { Review } from '../data/reviews';
import { getInitials, avatarHue } from '../data/reviews';
import Rating from './Rating';
import { PinIcon } from './Icons';

export default function ReviewCard({ review: rv }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-navy-900/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,29,48,0.05)] hover:shadow-[0_18px_40px_-24px_rgba(14,29,48,0.3)] hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center justify-between">
        <Rating />
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-charcoal/40">
          Client review
        </span>
      </div>
      <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-charcoal/85">
        “{rv.text}”
      </blockquote>
      <footer className="mt-5 flex items-center gap-3 border-t border-navy-900/8 pt-4">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold text-white"
          style={{ backgroundColor: `hsl(${avatarHue(rv.name)} 32% 38%)` }}
          aria-hidden
        >
          {getInitials(rv.name)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-navy-900">{rv.name}</span>
          <span className="flex items-center gap-1 text-xs text-charcoal/60">
            <PinIcon className="w-3 h-3" />
            {rv.area}, {rv.location}
          </span>
        </span>
      </footer>
    </article>
  );
}
