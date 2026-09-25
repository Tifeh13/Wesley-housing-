import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/site';
import Logo from './Logo';
import { MenuIcon, CloseIcon, PhoneIcon } from './Icons';
import { SITE } from '../data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHomeRoot = pathname === '/';
  const transparent = onHomeRoot && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'frost shadow-[0_1px_0_0_rgba(14,29,48,0.08),0_8px_24px_-16px_rgba(14,29,48,0.25)]'
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-[72px]"
        aria-label="Primary"
      >
        <Logo onDark={transparent} />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-[0.83rem] font-medium tracking-[0.14em] uppercase transition-colors duration-200 pb-1 border-b-2 ${
                    isActive
                      ? 'text-gold-500 border-gold-400'
                      : transparent
                        ? 'text-ivory/90 border-transparent hover:text-ivory hover:border-ivory/40'
                        : 'text-charcoal/80 border-transparent hover:text-navy-900 hover:border-gold-400/60'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              transparent ? 'text-ivory hover:text-gold-300' : 'text-navy-900 hover:text-gold-600'
            }`}
          >
            <PhoneIcon className="w-4 h-4" />
            {SITE.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className={`inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 ${
              transparent
                ? 'bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-sm'
                : 'bg-navy-900 text-ivory hover:bg-navy-800 shadow-sm hover:shadow-md'
            }`}
          >
            Find Your Home
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg transition-colors ${
            transparent ? 'text-ivory hover:bg-ivory/10' : 'text-navy-900 hover:bg-navy-900/5'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="frost border-t border-navy-900/10 px-5 pt-3 pb-6">
          <ul className="space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3.5 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-navy-900/[0.06] text-navy-900'
                        : 'text-charcoal/85 hover:bg-navy-900/[0.04] hover:text-navy-900'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-900/25 px-4 py-3 text-sm font-semibold text-navy-900 hover:bg-navy-900/5 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-navy-900 px-4 py-3 text-sm font-semibold text-ivory hover:bg-navy-800 transition-colors"
            >
              Find Your Home
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
