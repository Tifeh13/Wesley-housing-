import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import LocationCard from '../components/LocationCard';
import { LOCATIONS } from '../data/locations';

export default function Locations() {
  return (
    <>
      <Seo
        title="Locations Served | Wesley Housing, Six States"
        description="Explore Wesley Housing's service areas: New York, Florida, Illinois, Texas, California, and Georgia. Neighborhood guides, property types, and local market orientation for each state."
      />
      <section className="bg-navy-950 pt-36 pb-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
              Locations
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
              Explore Our Locations
            </h1>
            <p className="mt-5 text-lg text-navy-100 leading-relaxed">
              Six states, each with its own character and housing market. Start with the
              community overviews below, then browse homes in the area that fits your life.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={i * 120}>
                <LocationCard location={l} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
