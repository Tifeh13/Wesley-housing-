import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import PropertyCard from '../components/PropertyCard';
import ReviewCard from '../components/ReviewCard';
import { ButtonLink, ButtonA } from '../components/Buttons';
import { getLocation, LOCATIONS } from '../data/locations';
import { byLocation, formatPriceShort, imageSrcSet } from '../data/properties';
import { getReviewsByLocation } from '../data/reviews';
import { SITE } from '../data/site';
import { PhoneIcon, ArrowIcon, CheckIcon } from '../components/Icons';

export default function LocationPage() {
  const { slug } = useParams();
  const loc = getLocation(slug);

  if (!loc) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-48 text-center">
        <h1 className="font-display text-4xl text-navy-900">Location not found</h1>
        <p className="mt-4 text-charcoal/70">
          We currently serve six states. Browse them all to find your market.
        </p>
        <ButtonLink to="/locations" className="mt-8">
          View All Locations
        </ButtonLink>
      </div>
    );
  }

  const properties = byLocation(loc.name);
  const featured = properties.filter((p) => p.featured);
  const reviews = getReviewsByLocation(loc.name).slice(0, 3);
  const otherStates = LOCATIONS.filter((l) => l.slug !== loc.slug);

  return (
    <>
      <Seo
        title={`Homes for Sale in ${loc.name} | Wesley Housing, Real Estate in ${loc.stateAbbr}`}
        description={`Discover homes for sale in ${loc.name} with Wesley Housing. Neighborhood guides, property types, and local price orientation. Realtor ${SITE.realtor}, call ${SITE.phoneDisplay}.`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 pt-40 pb-24 text-ivory">
        <img
          src={loc.heroImage}
          srcSet={imageSrcSet(loc.heroImage, [900, 1400, 2000])}
          sizes="100vw"
          alt=""
          aria-hidden
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-navy-950/30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
              {loc.stateAbbr} · United States
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Homes for Sale in {loc.name}
            </h1>
            <p className="mt-5 text-lg text-navy-100 leading-relaxed">{loc.blurb}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonA href={SITE.phoneHref} variant="gold" size="lg">
                <PhoneIcon className="w-4 h-4" />
                Talk to {SITE.realtor}
              </ButtonA>
              <ButtonLink to="/properties" variant="outline-light" size="lg">
                Browse All Homes
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured properties */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                Featured in {loc.name}
              </p>
              <h2 className="mt-2 font-display text-3xl text-navy-900">
                Homes across {loc.name}
              </h2>
            </div>
            <Link
              to={`/properties?location=${encodeURIComponent(loc.name)}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
            >
              View all {loc.name} properties
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(featured.length > 0 ? featured : properties).slice(0, 6).map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods + market orientation */}
      <section className="bg-ivory-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                Neighborhoods
              </p>
              <h2 className="mt-2 font-display text-3xl text-navy-900">
                Communities we know well
              </h2>
              <ul className="mt-7 space-y-4">
                {loc.neighborhoods.map((n) => (
                  <li
                    key={n.name}
                    className="flex items-start gap-4 rounded-xl border border-navy-900/8 bg-white p-5"
                  >
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                    <div>
                      <p className="font-semibold text-navy-900">{n.name}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-charcoal/70">{n.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={120}>
                <div className="rounded-2xl border border-navy-900/8 bg-white p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                    Price Orientation
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-navy-900">
                    What homes typically list for
                  </h3>
                  <dl className="mt-5 divide-y divide-navy-900/8">
                    {loc.priceRanges.map((r) => (
                      <div key={r.label} className="flex items-center justify-between py-3.5">
                        <dt className="text-sm text-charcoal/70">{r.label}</dt>
                        <dd className="font-display text-lg text-navy-900">{r.range}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-xs italic leading-relaxed text-charcoal/50">
                    Broad orientation ranges; contact us for a personalized market conversation.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="rounded-2xl border border-navy-900/8 bg-white p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                    Property Types
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-navy-900">What you'll find here</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {loc.propertyTypes.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-navy-900/12 bg-ivory px-4 py-2 text-sm font-medium text-charcoal/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-7 font-display text-2xl text-navy-900">Local notes</h3>
                  <ul className="mt-4 space-y-2.5">
                    {loc.marketNotes.map((note) => (
                      <li key={note} className="flex items-start gap-2.5 text-sm text-charcoal/75">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Local reviews */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              {loc.name} Clients
            </p>
            <h2 className="mt-2 font-display text-3xl text-navy-900">
              What {loc.name} clients say
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((rv, i) => (
              <Reveal key={rv.id} delay={i * 90}>
                <ReviewCard review={rv} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex justify-center">
            <ButtonLink to="/reviews" variant="outline">
              Read More Reviews
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16 lg:py-20 text-ivory">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">
              Ready to explore {loc.name}?
            </h2>
            <p className="mt-4 text-navy-100 leading-relaxed">
              {SITE.realtor} knows these communities personally. Call{' '}
              <a href={SITE.phoneHref} className="font-semibold text-gold-300 hover:text-gold-400">
                {SITE.phoneDisplay}
              </a>{' '}
              or send an inquiry to start your {loc.name} home search.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink to="/contact" variant="gold" size="lg">
                Contact {SITE.realtor}
              </ButtonLink>
              {otherStates.map((o) => (
                <ButtonLink key={o.slug} to={`/locations/${o.slug}`} variant="outline-light" size="lg">
                  {o.name}
                </ButtonLink>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
