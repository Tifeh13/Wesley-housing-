import { Link } from 'react-router-dom';
import type { Property } from '../data/properties';
import { formatListingPrice, imageSrcSet } from '../data/properties';
import { BedIcon, BathIcon, AreaIcon, PinIcon } from './Icons';

interface Props {
  property: Property;
  layout?: 'grid' | 'list';
}

export default function PropertyCard({ property: p, layout = 'grid' }: Props) {
  const spec = [
    { icon: BedIcon, value: `${p.beds}`, label: 'bd' },
    { icon: BathIcon, value: `${p.baths}`, label: 'ba' },
    { icon: AreaIcon, value: p.sqft.toLocaleString('en-US'), label: 'sqft' },
  ];

  return (
    <article
      className={`group rounded-xl overflow-hidden bg-white border border-navy-900/8 shadow-[0_1px_2px_rgba(14,29,48,0.05)] hover:shadow-[0_24px_48px_-24px_rgba(14,29,48,0.35)] hover:-translate-y-1 transition-all duration-300 ${
        layout === 'list' ? 'sm:flex' : ''
      }`}
    >
      <Link
        to={`/properties/${p.slug}`}
        className={`relative block overflow-hidden ${layout === 'list' ? 'sm:w-80 sm:shrink-0 aspect-[4/3]' : 'aspect-[4/3]'}`}
        aria-label={`View ${p.name}, ${p.area}, ${p.location}`}
      >
        <img
          src={p.images[0]}
          srcSet={imageSrcSet(p.images[0])}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={`${p.type} in ${p.area}, ${p.location}, ${p.name}`}
          loading="lazy"
          decoding="async"
          width={1200}
          height={800}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {p.featured && (
            <span className="inline-flex items-center rounded-md bg-gold-400 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-navy-950">
              Featured
            </span>
          )}
          <span
            className={`inline-flex items-center rounded-md px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] ${
              p.listingType === 'For Rent'
                ? 'bg-ivory/95 text-navy-900'
                : 'bg-navy-950/70 text-ivory backdrop-blur'
            }`}
          >
            {p.listingType}
          </span>
          <span className="inline-flex items-center rounded-md bg-navy-950/70 backdrop-blur px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ivory">
            {p.type}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="font-display text-2xl text-white drop-shadow">
            {formatListingPrice(p)}
          </span>
        </div>
        <span className="absolute bottom-3 right-3 inline-flex items-center rounded-md bg-ivory/90 px-3 py-1.5 text-xs font-semibold text-navy-900 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          View Property
        </span>
        <span className="sr-only">View Property</span>
      </Link>

      <div className={`p-5 ${layout === 'list' ? 'sm:flex-1 sm:flex sm:flex-col' : ''}`}>
        <p className="flex items-center gap-1.5 text-xs font-medium text-charcoal/65">
          <PinIcon className="w-3.5 h-3.5 text-gold-600" />
          {p.address}, {p.area}, {p.location}
        </p>
        <h3 className="mt-1.5 font-display text-xl leading-snug text-navy-900">
          <Link to={`/properties/${p.slug}`} className="hover:text-gold-600 transition-colors">
            {p.name}
          </Link>
        </h3>

        <div className="mt-4 flex items-center gap-5 border-t border-navy-900/8 pt-4 text-sm text-charcoal/80">
          {spec.map(({ icon: Icon, value, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5">
              <Icon className="w-[1.1rem] h-[1.1rem] text-navy-600" />
              <strong className="font-semibold text-navy-900">{value}</strong> {label}
            </span>
            ))}
        </div>

        {layout === 'list' && (
          <p className="mt-3 text-sm text-charcoal/70 leading-relaxed line-clamp-2">
            {p.description[0]}
          </p>
        )}

        {layout === 'list' && (
          <div className="mt-4 sm:mt-auto pt-1">
            <Link
              to={`/properties/${p.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
            >
              View Property →
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
