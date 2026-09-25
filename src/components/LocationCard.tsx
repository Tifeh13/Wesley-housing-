import { Link } from 'react-router-dom';
import type { LocationInfo } from '../data/locations';
import { ArrowIcon } from './Icons';
import { imageSrcSet } from '../data/properties';

export default function LocationCard({ location: l }: { location: LocationInfo }) {
  return (
    <article className="group relative rounded-xl overflow-hidden shadow-[0_10px_30px_-18px_rgba(14,29,48,0.4)]">
      <Link
        to={`/locations/${l.slug}`}
        className="block aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]"
        aria-label={`Explore properties in ${l.name}`}
      >
        <img
          src={l.heroImage}
          srcSet={imageSrcSet(l.heroImage)}
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={l.imageAlt}
          loading="lazy"
          decoding="async"
          width={1600}
          height={1067}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-navy-950/10" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold-300">
            {l.stateAbbr} · United States
            </p>
          <h3 className="mt-1.5 font-display text-2xl text-white">{l.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-100 max-w-[28ch]">{l.blurb}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 group-hover:text-ivory transition-colors">
            Explore Properties
            <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
