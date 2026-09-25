import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '../Icons';
import { LOCATION_NAMES } from '../../data/locations';

const LOCATION_OPTIONS = LOCATION_NAMES;
const TYPE_OPTIONS = [
  'Any Type',
  'Single-Family',
  'Condo',
  'Townhouse',
  'Multi-Family',
  'Apartment',
  'New Construction',
];
const PRICE_OPTIONS = [
  'Any Price',
  'Up to $500K',
  '$500K – $1M',
  '$1M – $2M',
  '$2M – $3M',
  '$3M+',
];
const BED_OPTIONS = ['Any Beds', '1+', '2+', '3+', '4+', '5+'];

/** Cinematic hero search bar. Navigates to /properties with URL params. */
export default function HeroSearch() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    availability: 'For Sale',
    location: '',
    type: '',
    price: '',
    beds: '',
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (form.availability) params.set('availability', form.availability);
    if (form.location) params.set('location', form.location);
    if (form.type && form.type !== 'Any Type') params.set('type', form.type);
    if (form.price && form.price !== 'Any Price') params.set('price', form.price);
    if (form.beds && form.beds !== 'Any Beds') params.set('beds', form.beds);
    navigate(`/properties${params.toString() ? `?${params}` : ''}`);
  };

  const select =
    'w-full appearance-none rounded-lg border border-navy-900/15 bg-ivory px-3.5 py-3 text-sm text-charcoal focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-colors bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23555%27 stroke-width=%272%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E")] bg-[length:12px] bg-[right_0.9rem_center] bg-no-repeat pr-9';

  return (
    <form
      onSubmit={submit}
      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] items-center rounded-xl frost p-3 shadow-[0_24px_60px_-30px_rgba(10,22,38,0.55)] border border-white/60"
      aria-label="Property search"
    >
      <div
        className="sm:col-span-2 lg:col-span-5 flex rounded-lg overflow-hidden border border-navy-900/15"
        role="group"
        aria-label="Buy or rent"
      >
        {(['For Sale', 'For Rent'] as const).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => setForm((f) => ({ ...f, availability: mode }))}
            aria-pressed={form.availability === mode}
            className={`flex-1 py-2.5 text-sm font-bold tracking-wide transition-colors ${
              form.availability === mode
                ? 'bg-navy-950 text-gold-300'
                : 'bg-white text-charcoal/70 hover:bg-ivory-100'
            }`}
          >
            {mode === 'For Sale' ? 'Buy' : 'Rent'}
          </button>
        ))}
      </div>

      <label className="sr-only" htmlFor="hs-location">Location</label>
      <select id="hs-location" className={select} value={form.location} onChange={set('location')}>
        <option value="">Location</option>
        {LOCATION_OPTIONS.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>

      <label className="sr-only" htmlFor="hs-type">Property type</label>
      <select id="hs-type" className={select} value={form.type} onChange={set('type')}>
        {TYPE_OPTIONS.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>

      <label className="sr-only" htmlFor="hs-price">Price range</label>
      <select id="hs-price" className={select} value={form.price} onChange={set('price')}>
        {PRICE_OPTIONS.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>

      <label className="sr-only" htmlFor="hs-beds">Bedrooms</label>
      <select id="hs-beds" className={select} value={form.beds} onChange={set('beds')}>
        {BED_OPTIONS.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-bold tracking-wide text-navy-950 shadow-sm hover:bg-gold-300 hover:shadow-md transition-all duration-200"
      >
        <SearchIcon className="w-4 h-4" />
        Search Homes
      </button>
    </form>
  );
}
