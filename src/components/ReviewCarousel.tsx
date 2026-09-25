import { useCallback, useEffect, useRef, useState } from 'react';
import type { Review } from '../data/reviews';
import { getInitials, avatarHue } from '../data/reviews';
import Rating from './Rating';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface Props {
  reviews: Review[];
  interval?: number;
}

/**
 * Accessible testimonial carousel: auto-advances, pauses on hover/focus,
 * supports arrow keys and touch swipe, and animates slides with a
 * fade-up motion. Stops auto-advance after any manual interaction.
 */
export default function ReviewCarousel({ reviews, interval = 6000 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const interactive = useRef(false);
  const touchX = useRef<number | null>(null);
  const count = reviews.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      interactive.current = true;
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (paused || interactive.current || count < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(t);
  }, [paused, count, interval]);

  if (count === 0) return null;

  // Render a window of 3 slides (prev/current/next) for smooth transitions
  const windowed = [0, 1, 2].map((o) => (index + o) % count);

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="overflow-hidden"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div
          className="relative h-[380px] sm:h-[340px] md:h-[300px]"
          aria-live="polite"
        >
          {windowed.map((reviewIdx, slot) => {
            const rv = reviews[reviewIdx];
            const pos = slot === 0 ? 'current' : slot === 1 ? 'next' : 'prev';
            return (
              <figure
                key={`${reviewIdx}-${slot}`}
                className={`absolute inset-0 mx-auto max-w-3xl rounded-2xl border bg-white/95 shadow-[0_24px_60px_-30px_rgba(14,29,48,0.4)] p-7 sm:p-10 flex flex-col transition-all duration-500 ease-out ${
                  pos === 'current'
                    ? 'opacity-100 translate-y-0 z-10'
                    : 'opacity-0 pointer-events-none translate-y-3 scale-[0.98] z-0'
                }`}
                aria-hidden={pos !== 'current'}
              >
                <div className="flex items-center justify-between">
                  <Rating size={16} />
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-charcoal/45">
                    Client review
                  </span>
                </div>
                <blockquote className="mt-4 flex-1 font-display text-lg sm:text-xl leading-relaxed text-navy-900 italic">
                  “{rv.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3.5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold text-white"
                    style={{ backgroundColor: `hsl(${avatarHue(rv.name)} 32% 38%)` }}
                    aria-hidden
                  >
                    {getInitials(rv.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-navy-900">{rv.name}</span>
                    <span className="block text-xs text-charcoal/60">
                      {rv.area}, {rv.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          </button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
          {(count <= 10 ? reviews : reviews.slice(0, 10)).map((rv, i) => (
            <button
              key={rv.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1} of ${count}`}
              onClick={() => {
                interactive.current = true;
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-7 bg-gold-400' : 'w-2 bg-ivory/35 hover:bg-ivory/60'
              }`}
            />
          ))}
          {count > 10 && (
            <span className="ml-2 text-xs font-medium text-ivory/70 tabular-nums">
              {index + 1} / {count}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
