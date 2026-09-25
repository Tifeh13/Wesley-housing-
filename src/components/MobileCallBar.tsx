import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE } from '../data/site';
import { MessageIcon } from './Icons';

/** Thumb-friendly contact bar, visible on small screens only. */
export default function MobileCallBar() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (pathname === '/contact') return null;

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="frost border-t border-navy-900/10 px-4 py-3 grid grid-cols-2 gap-3">
        <a
          href={SITE.smsHref}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-900/25 bg-ivory px-4 py-3 text-sm font-semibold text-navy-900"
        >
          <MessageIcon className="w-4 h-4" />
          Message Us
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-navy-900 px-4 py-3 text-sm font-semibold text-ivory"
        >
          Send Inquiry
        </Link>
      </div>
    </div>
  );
}
