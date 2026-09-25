import { useMemo, useState } from 'react';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import ReviewCard from '../components/ReviewCard';
import ReviewCarousel from '../components/ReviewCarousel';
import Rating from '../components/Rating';
import { ButtonLink } from '../components/Buttons';
import { REVIEWS, averageRating } from '../data/reviews';
import { SITE } from '../data/site';
import { LOCATION_NAMES } from '../data/locations';
import { PhoneIcon } from '../components/Icons';

const FILTERS = ['All', ...LOCATION_NAMES] as const;

export default function Reviews() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const shown = useMemo(
    () => (filter === 'All' ? REVIEWS : REVIEWS.filter((r) => r.location === filter)),
    [filter]
  );

  return (
    <>
      <Seo
        title="Client Reviews | Wesley Housing"
        description="Read what clients say about working with Wesley Housing and realtor Mr. Believe Pessar across New York, Florida, Illinois, Texas, California, and Georgia."
      />

      {/* Header */}
      <section className="bg-navy-950 pt-36 pb-16 text-ivory">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
              Client Reviews
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">
              What Our Clients Say
            </h1>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Rating size={16} />
              <span className="font-display text-xl text-gold-300">
                {averageRating.toFixed(1)} / 5
              </span>
              <span className="text-sm text-navy-200">
                across {REVIEWS.length} client reviews
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured carousel */}
      <section className="bg-navy-900 py-16 lg:py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <ReviewCarousel reviews={shown} interval={5500} />
          </Reveal>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col items-center gap-6">
            <div
              className="flex flex-wrap justify-center gap-2"
              role="group"
              aria-label="Filter reviews by location"
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    filter === f
                      ? 'bg-navy-900 text-ivory shadow-md'
                      : 'border border-navy-900/15 bg-white text-charcoal/70 hover:border-navy-900/40 hover:text-navy-900'
                  }`}
                >
                  {f === 'All' ? 'All Reviews' : f}
                  <span className="ml-2 text-xs opacity-60">
                    {f === 'All'
                      ? REVIEWS.length
                      : REVIEWS.filter((r) => r.location === f).length}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((rv, i) => (
              <Reveal key={rv.id} delay={(i % 3) * 80}>
                <ReviewCard review={rv} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="bg-ivory-100 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900">
              Worked with Wesley Housing?
            </h2>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              We'd love to hear about your experience. Verified client reviews will be featured
              here; for now, share your feedback directly with {SITE.realtor}.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink to="/contact" variant="primary" size="lg">
                Share Your Experience
              </ButtonLink>
              <ButtonLink to="/properties" variant="outline" size="lg">
                Browse Properties
              </ButtonLink>
            </div>
            <a
              href={SITE.phoneHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              Or call {SITE.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
