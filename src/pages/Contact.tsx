import { useLocation as useRouterLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import InquiryForm from '../components/InquiryForm';
import { SITE } from '../data/site';
import { LOCATION_NAMES } from '../data/locations';
import { PhoneIcon, PinIcon, CheckIcon } from '../components/Icons';

export default function Contact() {
  const routerLocation = useRouterLocation();
  const referredProperty = (routerLocation.state as { property?: string } | null)?.property;

  return (
    <>
      <Seo
        title={`Contact Wesley Housing | ${SITE.realtor}, (708) 730-2617`}
        description={`Contact Wesley Housing and realtor ${SITE.realtor}. Call ${SITE.phoneDisplay} or send an inquiry about homes across our six state service area.`}
      />

      <section className="bg-navy-950 pt-36 pb-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
              Contact
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
              Let's find your home
            </h1>
            <p className="mt-5 text-lg text-navy-100 leading-relaxed">
              Whether you're just beginning to browse or ready to make a move, the conversation
              starts here. Call directly, or send an inquiry and {SITE.realtor} will respond
              personally.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
            {/* Info column */}
            <Reveal className="lg:col-span-2">
              <div className="rounded-2xl border border-navy-900/8 bg-white p-7 sm:p-9 shadow-[0_24px_60px_-44px_rgba(14,29,48,0.5)]">
                <h2 className="font-display text-2xl text-navy-900">Wesley Housing</h2>
                <p className="mt-1 text-charcoal/70">
                  {SITE.realtor}, Realtor
                </p>

                <a
                  href={SITE.phoneHref}
                  className="mt-6 flex items-center gap-3 rounded-xl border border-gold-400/40 bg-gold-400/10 p-4 transition-colors hover:bg-gold-400/20"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-gold-300">
                    <PhoneIcon className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/60">
                      Call Wesley Housing
                    </span>
                    <span className="block font-display text-xl text-navy-900">
                      {SITE.phoneDisplay}
                    </span>
                  </span>
                </a>

                <dl className="mt-7 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                      Agency
                    </dt>
                    <dd className="mt-1 font-medium text-navy-900">{SITE.name}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                      Realtor
                    </dt>
                    <dd className="mt-1 font-medium text-navy-900">{SITE.realtor}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                      Service Areas
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {LOCATION_NAMES.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/12 bg-ivory px-3.5 py-1.5 text-sm text-charcoal/80"
                        >
                          <PinIcon className="w-3.5 h-3.5 text-gold-600" />
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                      Response Time
                    </dt>
                    <dd className="mt-1 flex items-start gap-2 text-sm text-charcoal/75">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                      Inquiries answered within one business day, often sooner.
                    </dd>
                  </div>
                </dl>

                <p className="mt-7 border-t border-navy-900/8 pt-5 text-xs leading-relaxed text-charcoal/50 italic">
                  For the fastest response, please call {SITE.phoneDisplay}. Mr. Believe Pessar answers
                  inquiries personally.
                </p>
              </div>
            </Reveal>

            {/* Form column */}
            <Reveal delay={140} className="lg:col-span-3">
              <div className="rounded-2xl border border-navy-900/8 bg-white p-7 sm:p-9 shadow-[0_24px_60px_-44px_rgba(14,29,48,0.5)]">
                <h2 className="font-display text-2xl text-navy-900">Send an Inquiry</h2>
                <p className="mt-1 text-sm text-charcoal/60">
                  Fields marked * are required.
                </p>
                {referredProperty && (
                  <p className="mt-4 rounded-lg border border-gold-400/40 bg-gold-400/10 px-4 py-3 text-sm text-navy-900">
                    Asking about <strong>{referredProperty}</strong>
                  </p>
                )}
                <div className="mt-6">
                  <InquiryForm
                    defaultMessage={
                      referredProperty ? `I'd like more information about ${referredProperty}.` : ''
                    }
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
