import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE, SOCIAL_LINKS } from '../data/site';
import { LOCATIONS } from '../data/locations';
import Logo from './Logo';
import { PhoneIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from './Icons';

const socialIcons = [FacebookIcon, InstagramIcon, LinkedInIcon];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100 pb-16 md:pb-0">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo onDark />
            <p className="mt-5 text-sm leading-relaxed text-navy-200 max-w-xs">
              Helping buyers, sellers, and renters discover beautiful homes across six states,
              with guidance you can trust at every step.
            </p>
            <p className="mt-6 text-sm">
              <span className="block text-navy-300">{SITE.realtor}</span>
              <a
                href={SITE.phoneHref}
                className="mt-1 inline-flex items-center gap-2 font-semibold text-gold-300 hover:text-gold-400 transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                {SITE.phoneDisplay}
              </a>
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((s, i) => {
                const Icon = socialIcons[i];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={`${SITE.name} on ${s.label} (coming soon)`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-navy-600 text-navy-200 hover:text-gold-300 hover:border-gold-400/60 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-navy-200 hover:text-ivory transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Locations
            </h3>
            <ul className="mt-4 space-y-2.5">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="text-sm text-navy-200 hover:text-ivory transition-colors"
                  >
                    Homes for Sale in {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Contact
            </h3>
            <p className="mt-4 text-sm text-navy-200 leading-relaxed">
              {SITE.name}
              <br />
              {SITE.realtor}
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-2 inline-block text-sm font-semibold text-ivory hover:text-gold-300 transition-colors"
            >
              {SITE.phoneDisplay}
            </a>
            <p className="mt-4 text-sm text-navy-300 leading-relaxed">
              Serving homebuyers, sellers, and renters across six states.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-navy-800/70 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-navy-300">
            © 2026 {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
