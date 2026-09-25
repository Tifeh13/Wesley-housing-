import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import PropertyCard from '../components/PropertyCard';
import InquiryForm from '../components/InquiryForm';
import { ButtonA, ButtonLink } from '../components/Buttons';
import {
  getPropertyBySlug,
  formatPrice,
  formatListingPrice,
  byLocation,
  imageSrcSet,
} from '../data/properties';
import { SITE } from '../data/site';
import {
  BedIcon,
  BathIcon,
  AreaIcon,
  PinIcon,
  PhoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
  KeyIcon,
} from '../components/Icons';

export default function PropertyDetails() {
  const { slug } = useParams();
  const property = getPropertyBySlug(slug);
  const [active, setActive] = useState(0);

  if (!property) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-48 text-center">
        <h1 className="font-display text-4xl text-navy-900">Property not found</h1>
        <p className="mt-4 text-charcoal/70">
          This listing may have been renamed or removed.
        </p>
        <ButtonLink to="/properties" className="mt-8">
          Back to All Properties
        </ButtonLink>
      </div>
    );
  }

  const p = property;
  const similar = byLocation(p.location).filter((x) => x.id !== p.id).slice(0, 3);
  const specs = [
    { icon: BedIcon, label: 'Bedrooms', value: String(p.beds) },
    { icon: BathIcon, label: 'Bathrooms', value: String(p.baths) },
    { icon: AreaIcon, label: 'Square Feet', value: p.sqft.toLocaleString('en-US') },
    { icon: KeyIcon, label: 'Property Type', value: p.type },
  ];

  return (
    <>
      <Seo
        title={`${p.name} | ${p.area}, ${p.location}, Wesley Housing`}
        description={`${p.name}: ${p.listingType.toLowerCase()} ${p.type.toLowerCase()} at ${p.address}, ${p.area}, ${p.location}, ${p.beds} bd, ${p.baths} ba, ${p.sqft.toLocaleString('en-US')} sqft. Contact ${SITE.realtor} at ${SITE.phoneDisplay}.`}
      />

      {/* Breadcrumb + title band */}
      <section className="bg-navy-950 pt-32 pb-10 text-ivory">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-navy-300">
            <Link to="/properties" className="hover:text-gold-300 transition-colors">
              Properties
            </Link>
            <span className="mx-2" aria-hidden>/</span>
            <span aria-current="page" className="text-ivory/80">{p.name}</span>
          </nav>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="flex items-center gap-1.5 text-sm text-gold-300">
                <PinIcon className="w-4 h-4" />
                {p.address}, {p.area}, {p.location}
              </p>
              <h1 className="mt-2 font-display text-3xl sm:text-5xl">{p.name}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-md px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] ${
                    p.listingType === 'For Rent'
                      ? 'bg-ivory text-navy-900'
                      : 'bg-gold-400 text-navy-950'
                  }`}
                >
                  {p.listingType}
                </span>
                <span className="rounded-md border border-ivory/25 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ivory/85">
                  {p.type}
                </span>
              </div>
            </div>
            <p className="font-display text-3xl sm:text-4xl text-gold-300">
              {formatListingPrice(p)}
            </p>
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 -mt-2 pt-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl shadow-[0_32px_70px_-40px_rgba(14,29,48,0.55)]">
            <img
              src={p.images[active]}
              srcSet={imageSrcSet(p.images[active], [900, 1400, 2000])}
              sizes="(max-width: 1280px) 100vw, 1152px"
              alt={`${p.name}, photo ${active + 1} of ${p.images.length}, ${p.type} in ${p.area}`}
              fetchPriority="high"
              decoding="async"
              className="aspect-[16/9] w-full object-cover"
            />
            <button
              type="button"
              onClick={() => setActive((a) => (a - 1 + p.images.length) % p.images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy-950/55 text-ivory backdrop-blur hover:bg-navy-950/80 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setActive((a) => (a + 1) % p.images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy-950/55 text-ivory backdrop-blur hover:bg-navy-950/80 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
            <span className="absolute bottom-4 right-4 rounded-md bg-navy-950/60 px-3 py-1 text-xs font-medium text-ivory backdrop-blur">
              {active + 1} / {p.images.length}
            </span>
            {p.featured && (
              <span className="absolute top-4 left-4 rounded-md bg-gold-400 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-navy-950">
                Featured
              </span>
            )}
          </div>
          <div className="mt-4 grid grid-cols-5 gap-3">
            {p.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === active}
                className={`overflow-hidden rounded-lg border-2 transition-all ${
                  i === active ? 'border-gold-400' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={src} alt="" loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Body */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main column */}
            <div className="lg:col-span-8">
              <Reveal>
                <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {specs.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-navy-900/8 bg-white p-4 text-center"
                    >
                      <Icon className="mx-auto h-6 w-6 text-gold-600" />
                      <dt className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                        {label}
                      </dt>
                      <dd className="mt-0.5 font-display text-lg text-navy-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal className="mt-10">
                <h2 className="font-display text-2xl text-navy-900">About This Home</h2>
                {p.description.map((para, i) => (
                  <p key={i} className="mt-4 leading-relaxed text-charcoal/80">
                    {para}
                  </p>
                ))}
              </Reveal>

              <Reveal className="mt-10 grid gap-10 sm:grid-cols-2">
                <div>
                  <h2 className="font-display text-2xl text-navy-900">Features</h2>
                  <ul className="mt-4 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-navy-900">Amenities</h2>
                  <ul className="mt-4 space-y-2.5">
                    {p.amenities.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal className="mt-10 rounded-xl border border-navy-900/8 bg-ivory-100 p-6 sm:p-7">
                <h2 className="font-display text-2xl text-navy-900">The Neighborhood</h2>
                <p className="mt-3 leading-relaxed text-charcoal/80">{p.areaInfo}</p>

              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                <Reveal>
                  <div className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(14,29,48,0.45)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                      Listed by
                    </p>
                    <p className="mt-1 font-display text-xl text-navy-900">{SITE.name}</p>
                    <p className="text-sm text-charcoal/70">{SITE.realtor}</p>
                    <p className="mt-4 font-display text-3xl text-navy-900">
                      {formatListingPrice(p)}
                    </p>
                    <ButtonA
                      href={SITE.phoneHref}
                      variant="gold"
                      size="lg"
                      className="mt-5 w-full"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      Schedule a Viewing
                    </ButtonA>
                    <ButtonLink
                      to="/contact"
                      variant="outline"
                      className="mt-3 w-full"
                      state={{ property: p.name }}
                    >
                      Contact the Realtor
                    </ButtonLink>
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <div className="rounded-2xl border border-navy-900/8 bg-white p-6">
                    <h2 className="font-display text-xl text-navy-900">Inquire About This Home</h2>
                    <p className="mt-1 text-sm text-charcoal/60">
                      Response within one business day.
                    </p>
                    <div className="mt-5">
                      <InquiryForm
                        compact
                        defaultMessage={`I'd like more information about ${p.name} (${p.area}, ${p.location}).`}
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Similar homes */}
      {similar.length > 0 && (
        <section className="bg-ivory-100 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h2 className="font-display text-3xl text-navy-900">
                More homes in {p.location}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((s, i) => (
                <Reveal key={s.id} delay={i * 90}>
                  <PropertyCard property={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
