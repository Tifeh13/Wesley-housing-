import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import HeroSearch from '../components/sections/HeroSearch';
import PropertyCard from '../components/PropertyCard';
import LocationCard from '../components/LocationCard';
import ReviewCarousel from '../components/ReviewCarousel';
import InquiryForm from '../components/InquiryForm';
import Rating from '../components/Rating';
import { ButtonLink, ButtonA } from '../components/Buttons';
import { getFeatured, formatPrice, imageSrcSet } from '../data/properties';
import { LOCATIONS } from '../data/locations';
import { REVIEWS, averageRating } from '../data/reviews';
import { SITE } from '../data/site';
import {
  CompassIcon,
  HeartHandIcon,
  ShieldIcon,
  LayersIcon,
  KeyIcon,
  PhoneIcon,
  ArrowIcon,
  PinIcon,
} from '../components/Icons';

const HERO_IMG =
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2000&q=80'; // homepage-exclusive image

const WHY = [
  {
    icon: CompassIcon,
    title: 'Local Knowledge',
    text: 'Deep understanding of the communities and neighborhoods we serve.',
  },
  {
    icon: HeartHandIcon,
    title: 'Personalized Service',
    text: 'Every client receives individual attention throughout their property journey.',
  },
  {
    icon: ShieldIcon,
    title: 'Trusted Guidance',
    text: 'Professional assistance from property search through closing.',
  },
  {
    icon: LayersIcon,
    title: 'Wide Selection',
    text: 'Explore a variety of homes and property types.',
  },
  {
    icon: KeyIcon,
    title: 'Client Focused',
    text: 'Our goal is to make the home-search process simple and transparent.',
  },
];

const STATS = [
  SITE.stats.homesListed,
  SITE.stats.locationsServed,
  SITE.stats.clientReviews,
  SITE.stats.averageRating,
];

export default function Home() {
  const featured = getFeatured().slice(0, 6);

  return (
    <>
      <Seo
        title="Wesley Housing | Homes for Sale & Rent in NY, FL, IL, TX, CA & GA"
        description="Discover beautiful homes for sale and for rent across New York, Florida, Illinois, Texas, California, and Georgia with Wesley Housing. Realtor Mr. Believe Pessar, call (708) 730-2617."
      />

      {/* 1. Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy-950">
        <div className="absolute inset-0" aria-hidden>
          <img
            src={HERO_IMG}
            srcSet={imageSrcSet(HERO_IMG, [900, 1400, 2000])}
            sizes="100vw"
            alt=""
            className="ken-burns h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/55 to-navy-950/25" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/70 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-3xl">
            <p className="hero-zoom text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
              Wesley Housing · NY · FL · IL · TX · CA · GA
            </p>
            <h1
              className="hero-zoom mt-5 font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] text-ivory"
              style={{ animationDelay: '120ms' }}
            >
              Find a Place You'll Be{' '}
              <span className="italic text-gold-300">Proud</span> to Call Home
            </h1>
            <p
              className="hero-zoom mt-6 max-w-xl text-lg leading-relaxed text-navy-100"
              style={{ animationDelay: '240ms' }}
            >
              Discover beautiful homes and properties for sale or rent across six states with
              Wesley Housing.
            </p>
            <div
              className="hero-zoom mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '360ms' }}
            >
              <ButtonA href={SITE.phoneHref} variant="gold" size="lg">
                <PhoneIcon className="w-4 h-4" />
                Call {SITE.phoneDisplay}
              </ButtonA>
              <ButtonLink to="/properties" variant="outline-light" size="lg">
                Browse Properties
              </ButtonLink>
            </div>
          </div>

          <div className="hero-zoom mt-12 lg:mt-16" style={{ animationDelay: '480ms' }}>
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* 2. Featured Homes */}
      <section className="py-20 lg:py-28" aria-labelledby="featured-homes">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              align="left"
              eyebrow="Featured Homes"
              title="Homes chosen with care"
              intro="A curated look at residences across our three markets: modern apartments, luxury homes, family houses, condos, and townhouses."
            />
            <Reveal delay={150}>
              <ButtonLink to="/properties" variant="outline">
                View All Properties
                <ArrowIcon className="w-4 h-4" />
              </ButtonLink>
            </Reveal>
          </div>
          <span id="featured-homes" className="sr-only">Featured homes</span>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Explore Locations */}
      <section className="bg-ivory-100 py-20 lg:py-28" aria-labelledby="explore-locations">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            eyebrow="Explore Our Locations"
            title="Six states. One standard of service."
            intro="From Brooklyn brownstones to Gulf-coast villas and Chicago family suburbs, find the community that fits your life."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={i * 120}>
                <LocationCard location={l} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Wesley Housing */}
      <section className="py-20 lg:py-28" aria-labelledby="why-wesley">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            eyebrow="Why Wesley Housing"
            title="Guidance you can trust, service you'll remember"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {WHY.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="group h-full rounded-xl border border-navy-900/8 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-26px_rgba(14,29,48,0.35)]">
                  <span className="mx-auto flex h-13 w-13 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10 text-gold-600 transition-colors group-hover:bg-gold-400 group-hover:text-navy-950" style={{ height: 52, width: 52 }}>
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-navy-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About Mr. Believe Pessar */}
      <section className="bg-navy-950 py-20 lg:py-28 text-ivory" aria-labelledby="about-realtor">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative mx-auto max-w-md">
                <div className="aspect-[4/5] overflow-hidden rounded-xl border border-gold-400/25 bg-navy-800">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center p-8">
                    <span className="flex h-28 w-28 items-center justify-center rounded-full border border-gold-400/40 font-display text-4xl text-gold-300">
                      BP
                    </span>
                    <p className="font-display text-lg text-ivory">{SITE.realtor}</p>
                  </div>
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-lg frost px-6 py-3 text-center shadow-lg">
                  <p className="font-display text-lg text-navy-900">{SITE.realtor}</p>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold-600">
                    Realtor · Wesley Housing
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                Meet Your Realtor
              </p>
              <h2 id="about-realtor" className="mt-3 font-display text-3xl sm:text-4xl leading-tight">
                {SITE.realtor}
              </h2>
              <p className="mt-5 text-navy-100 leading-relaxed">
                {SITE.realtor} is the realtor behind {SITE.name}, serving homebuyers and sellers
                across six states. His approach is simple: listen carefully,
                advise honestly, and negotiate tirelessly, so every client moves forward with
                confidence.
              </p>
              <p className="mt-4 text-navy-200 leading-relaxed text-[0.95rem]">
                Areas served: New York · Florida · Illinois · Texas · California · Georgia, with personal, direct service in
                every market.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <ButtonLink to="/contact" variant="gold" size="lg">
                  Talk to Mr. Believe Pessar
                </ButtonLink>
                <ButtonA href={SITE.phoneHref} variant="outline-light" size="lg">
                  <PhoneIcon className="w-4 h-4" />
                  {SITE.phoneDisplay}
                </ButtonA>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Reviews */}
      <section className="bg-navy-900 py-20 lg:py-28 text-ivory" aria-labelledby="reviews-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            onDark
            eyebrow="What Our Clients Say"
            title="Five stars, earned one family at a time"
            intro={`What clients say about working with ${SITE.realtor} across six states, rated ${averageRating.toFixed(1)}/5.`}
          />
          <div className="mt-12">
            <Reveal>
              <ReviewCarousel reviews={REVIEWS} />
            </Reveal>
          </div>
          <Reveal className="mt-10 flex justify-center">
            <ButtonLink to="/reviews" variant="outline-light" size="lg">
              Read More Reviews
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* 7. Statistics */}
      <section className="py-20 lg:py-24" aria-label="Wesley Housing statistics">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="text-center">
                <p className="font-display text-5xl lg:text-6xl text-navy-900">{s.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28" aria-labelledby="cta-title">
        <img
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1800&q=80" // homepage-exclusive image
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/82" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center text-ivory">
          <Reveal>
            <h2 id="cta-title" className="font-display text-3xl sm:text-5xl leading-tight">
              Ready to Find Your <span className="italic text-gold-300">Next Home?</span>
            </h2>
            <p className="mt-5 text-lg text-navy-100 leading-relaxed">
              Let Wesley Housing help you discover a property that fits your lifestyle and needs.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink to="/properties" variant="gold" size="lg">
                Browse Properties
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline-light" size="lg">
                Contact {SITE.realtor}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Contact */}
      <section className="py-20 lg:py-28" aria-labelledby="contact-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <Reveal className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                Contact
              </p>
              <h2 id="contact-title" className="mt-3 font-display text-3xl sm:text-4xl text-navy-900 leading-tight">
                Start the conversation
              </h2>
              <p className="mt-5 text-charcoal/70 leading-relaxed">
                Tell us what you're looking for: a first home, an investment, or a fresh start in
                a new city. {SITE.realtor} will respond personally.
              </p>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                    Agency
                  </dt>
                  <dd className="mt-1 font-display text-xl text-navy-900">{SITE.name}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                    Realtor
                  </dt>
                  <dd className="mt-1 font-display text-xl text-navy-900">{SITE.realtor}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={SITE.phoneHref}
                      className="inline-flex items-center gap-2 font-display text-2xl text-navy-900 hover:text-gold-600 transition-colors"
                    >
                      <PhoneIcon className="w-5 h-5 text-gold-600" />
                      {SITE.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 rounded-xl border border-navy-900/8 bg-ivory-100 p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-navy-900">
                  <PinIcon className="w-4 h-4 text-gold-600" />
                  Call Wesley Housing
                </p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  Prefer to talk it through? Call{' '}
                  <a href={SITE.phoneHref} className="font-semibold text-navy-900 underline">
                    {SITE.phoneDisplay}
                  </a>{' '}
                  Evenings and weekends welcome.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-3">
              <div className="rounded-2xl border border-navy-900/8 bg-white p-6 sm:p-9 shadow-[0_24px_60px_-40px_rgba(14,29,48,0.4)]">
                <InquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
