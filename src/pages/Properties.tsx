import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Seo from '../components/Seo';
import PropertyCard from '../components/PropertyCard';
import Reveal from '../components/Reveal';
import { SearchIcon } from '../components/Icons';
import { PROPERTIES, PROPERTY_TYPES } from '../data/properties';
import { LOCATION_NAMES } from '../data/locations';

const LOCATIONS = LOCATION_NAMES;
const PRICE_RANGES = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: 'Up to $500K', min: 0, max: 500_000 },
  { label: '$500K – $1M', min: 500_000, max: 1_000_000 },
  { label: '$1M – $2M', min: 1_000_000, max: 2_000_000 },
  { label: '$2M – $3M', min: 2_000_000, max: 3_000_000 },
  { label: '$3M+', min: 3_000_000, max: Infinity },
];
const BEDS = ['Any', '1+', '2+', '3+', '4+', '5+'];
const BATHS = ['Any', '1+', '2+', '3+', '4+'];
const AVAILABILITY = ['All', 'For Sale', 'For Rent'] as const;
const PAGE_SIZE = 9;

export default function Properties() {
  const [params, setParams] = useSearchParams();
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const query = params.get('q') ?? '';
  const location = params.get('location') ?? '';
  const type = params.get('type') ?? '';
  const price = params.get('price') ?? 'Any Price';
  const beds = params.get('beds') ?? 'Any';
  const baths = params.get('baths') ?? 'Any';
  const availability = params.get('availability') ?? 'All';
  const featuredOnly = params.get('featured') === '1';
  const sort = params.get('sort') ?? 'featured';

  const setParam = (key: string, value: string, def = '') => {
    const next = new URLSearchParams(params);
    if (!value || value === def) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
    setVisible(PAGE_SIZE);
  };

  // Keep defaults in sync when arriving from hero search with partial params
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [params]);

  const results = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.label === price) ?? PRICE_RANGES[0];
    const minBeds = beds === 'Any' ? 0 : parseInt(beds);
    const minBaths = baths === 'Any' ? 0 : parseInt(baths);
    const q = query.trim().toLowerCase();

    let list = PROPERTIES.filter((p) => {
      if (location && p.location !== location) return false;
      if (type && p.type !== type) return false;
      if (availability !== 'All' && p.listingType !== availability) return false;
      if (p.price < range.min || p.price > range.max) return false;
      if (p.beds < minBeds) return false;
      if (p.baths < minBaths) return false;
      if (featuredOnly && !p.featured) return false;
      if (
        q &&
        !`${p.name} ${p.address} ${p.area} ${p.location} ${p.type}`
          .toLowerCase()
          .includes(q)
      )
        return false;
      return true;
    });

    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'sqft':
        list = [...list].sort((a, b) => b.sqft - a.sqft);
        break;
      default:
        list = [...list].sort(
          (a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name)
        );
    }
    return list;
  }, [query, location, type, availability, price, beds, baths, featuredOnly, sort]);

  const select =
    'w-full appearance-none rounded-lg border border-navy-900/15 bg-white px-3.5 py-2.5 text-sm text-charcoal focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-colors';

  const shown = results.slice(0, visible);

  return (
    <>
      <Seo
        title="Properties for Sale & Rent | Wesley Housing Homes"
        description="Browse homes for sale and for rent across New York, Florida, Illinois, Texas, California, and Georgia. Filter by location, price, property type, bedrooms, and bathrooms with Wesley Housing."
      />

      {/* Page head */}
      <section className="bg-navy-950 pt-36 pb-16 text-ivory">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
              Properties
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">
              Homes for Sale &amp; Rent in Six States
            </h1>
            <p className="mt-4 max-w-2xl text-navy-100 leading-relaxed">
              Explore our collection of residences across New York, Florida, Illinois, Texas,
              California, and Georgia, available to buy or to rent. Refine with the filters below
              to find the home that fits your life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-navy-900/8 bg-ivory-100 sticky top-[72px] z-30 frost">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-2 relative">
              <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
              <input
                value={query}
                onChange={(e) => setParam('q', e.target.value)}
                placeholder="Search city, area, or name…"
                aria-label="Search properties"
                className="w-full rounded-lg border border-navy-900/15 bg-white pl-10 pr-3.5 py-2.5 text-sm focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-colors"
              />
            </div>
            <select
              className={`${select} lg:col-span-2`}
              value={location}
              onChange={(e) => setParam('location', e.target.value)}
              aria-label="Location filter"
            >
              <option value="">All Locations</option>
              {LOCATIONS.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
            <select
              className={`${select} lg:col-span-2`}
              value={type}
              onChange={(e) => setParam('type', e.target.value)}
              aria-label="Property type filter"
            >
              <option value="">All Types</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <select
              className={`${select} lg:col-span-2`}
              value={availability}
              onChange={(e) => setParam('availability', e.target.value, 'All')}
              aria-label="Availability filter"
            >
              {AVAILABILITY.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
            <select
              className={`${select} lg:col-span-2`}
              value={price}
              onChange={(e) => setParam('price', e.target.value, 'Any Price')}
              aria-label="Price range filter"
            >
              {PRICE_RANGES.map((r) => (
                <option key={r.label}>{r.label}</option>
              ))}
            </select>
            <select
              className={`${select} lg:col-span-1`}
              value={beds}
              onChange={(e) => setParam('beds', e.target.value, 'Any')}
              aria-label="Bedrooms filter"
            >
              {BEDS.map((b) => (
                <option key={b}>{b === 'Any' ? 'Beds: Any' : `${b} Beds`}</option>
              ))}
            </select>
            <select
              className={`${select} lg:col-span-1`}
              value={baths}
              onChange={(e) => setParam('baths', e.target.value, 'Any')}
              aria-label="Bathrooms filter"
            >
              {BATHS.map((b) => (
                <option key={b}>{b === 'Any' ? 'Baths: Any' : `${b} Baths`}</option>
              ))}
            </select>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-charcoal/70">
              <strong className="text-navy-900">{results.length}</strong>{' '}
              {results.length === 1 ? 'home' : 'homes'} found
              {availability !== 'All' && ` · ${availability.toLowerCase()}`}
              {featuredOnly && ' · featured only'}
            </p>
            <div className="flex items-center gap-2">
              <select
                value={sort}
                onChange={(e) => setParam('sort', e.target.value, 'featured')}
                aria-label="Sort results"
                className="rounded-lg border border-navy-900/15 bg-white px-3 py-2 text-xs font-semibold text-charcoal/80 focus:border-gold-400 outline-none transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price ↑</option>
                <option value="price-desc">Price ↓</option>
                <option value="sqft">Size</option>
              </select>
              <button
                type="button"
                onClick={() => setParam('featured', featuredOnly ? '' : '1')}
                aria-pressed={featuredOnly}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                  featuredOnly
                    ? 'bg-gold-400 text-navy-950'
                    : 'border border-navy-900/15 text-charcoal/70 hover:border-navy-900/40'
                }`}
              >
                Featured
              </button>
              <div
                className="flex overflow-hidden rounded-lg border border-navy-900/15"
                role="group"
                aria-label="Layout"
              >
                {(['grid', 'list'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setLayout(mode)}
                    aria-pressed={layout === mode}
                    className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                      layout === mode
                        ? 'bg-navy-900 text-ivory'
                        : 'bg-white text-charcoal/60 hover:text-navy-900'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {shown.length === 0 ? (
            <div className="rounded-xl border border-dashed border-navy-900/20 bg-white p-14 text-center">
              <p className="font-display text-2xl text-navy-900">No homes match those filters.</p>
              <p className="mt-2 text-sm text-charcoal/60">
                Try widening the price range or clearing a filter.
              </p>
              <button
                type="button"
                onClick={() => setParams({}, { replace: true })}
                className="mt-6 rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-ivory hover:bg-navy-800 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div
                className={
                  layout === 'grid'
                    ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
                    : 'flex flex-col gap-6'
                }
              >
                {shown.map((p) => (
                  <PropertyCard key={p.id} property={p} layout={layout} />
                ))}
              </div>

              {visible < results.length && (
                <div className="mt-12 text-center">
                  <button
                    type="button"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="rounded-lg border border-navy-900/25 px-8 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:border-navy-900 hover:bg-navy-900 hover:text-ivory"
                  >
                    Load More Homes ({results.length - visible} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
