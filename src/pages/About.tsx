import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { ButtonLink, ButtonA } from '../components/Buttons';
import { LOCATIONS } from '../data/locations';
import { SITE } from '../data/site';
import {
  CompassIcon,
  HeartHandIcon,
  ShieldIcon,
  KeyIcon,
  PhoneIcon,
  CheckIcon,
} from '../components/Icons';

const VALUES = [
  {
    icon: ShieldIcon,
    title: 'Integrity First',
    text: "Honest guidance over easy answers. If a home isn't right, we say so, every time.",
  },
  {
    icon: HeartHandIcon,
    title: 'People Before Transactions',
    text: 'Behind every search is a family, a fresh start, or a long-awaited milestone. We treat it that way.',
  },
  {
    icon: CompassIcon,
    title: 'Local Understanding',
    text: 'Neighborhoods have personalities. We help you find the one that matches yours.',
  },
  {
    icon: KeyIcon,
    title: 'Clarity Throughout',
    text: 'Clear timelines, clear numbers, clear next steps, from first tour to final signature.',
  },
];

const APPROACH = [
  'Listen first: your goals define the search, not the other way around.',
  'Research deeply: neighborhoods, schools, commutes, and total monthly cost.',
  'Advise honestly: strengths and trade-offs of every property, in plain language.',
  'Negotiate carefully: protecting your interests at the table.',
  'Stay close: responsive support before, during, and long after closing.',
];

export default function About() {
  return (
    <>
      <Seo
        title="About Wesley Housing | Realtor Mr. Believe Pessar"
        description="Learn about Wesley Housing and realtor Mr. Believe Pessar: our mission, values, and the approach we bring to helping clients find homes across six states."
      />

      {/* Header */}
      <section className="bg-navy-950 pt-36 pb-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
              About Us
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
              A boutique real-estate practice built on trust
            </h1>
            <p className="mt-5 text-lg text-navy-100 leading-relaxed">
              Wesley Housing is the real-estate practice of {SITE.realtor}, serving homebuyers and
              sellers and renters across New York, Florida, Illinois, Texas, California, and Georgia
              with personal, transparent guidance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <Reveal>
            <h2 className="font-display text-3xl text-navy-900">Who We Are</h2>
            <p className="mt-5 leading-relaxed text-charcoal/80">
              {SITE.name} was founded on a simple observation: buying or selling a home is one of
              life's largest decisions, and it deserves more than a transactional experience.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/80">
              We keep our practice deliberately boutique. Every client works directly with{' '}
              {SITE.realtor}, from the first conversation about neighborhoods to the final walk
              through, so nothing is lost in handoffs and every question gets a real answer.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/80">
              The practice is built on repeat clients and referrals, the measure that matters
              most in this business.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl border border-gold-400/30 bg-navy-950 p-8 sm:p-10 text-ivory">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                Our Mission
              </p>
              <p className="mt-4 font-display text-2xl leading-relaxed">
                "To make finding home feel less like a transaction and more like a{' '}
                <span className="italic text-gold-300">welcome</span>."
              </p>
              <p className="mt-6 text-sm leading-relaxed text-navy-200">
                Trust • Homes • Professionalism • Community • Reliability
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            eyebrow="Our Values"
            title="What we hold the line on"
            intro="Four commitments that shape every client relationship."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="h-full rounded-xl border border-navy-900/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-26px_rgba(14,29,48,0.35)]">
                  <span
                    className="flex items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10 text-gold-600"
                    style={{ height: 52, width: 52 }}
                  >
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-navy-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <Reveal>
              <h2 className="font-display text-3xl text-navy-900">How We Help</h2>
              <p className="mt-5 leading-relaxed text-charcoal/80">
                Our approach is unhurried where it matters and decisive where it counts. Five
                principles guide every engagement:
              </p>
              <ul className="mt-7 space-y-4">
                {APPROACH.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm text-gold-300">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-[0.95rem] leading-relaxed text-charcoal/80">{step}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={140}>
              <h2 className="font-display text-3xl text-navy-900">Where We Work</h2>
              <p className="mt-5 leading-relaxed text-charcoal/80">
                Six states, one standard of care. We focus on markets we know well so our
                guidance stays genuinely local:
              </p>
              <div className="mt-7 space-y-4">
                {LOCATIONS.map((l) => (
                  <div
                    key={l.slug}
                    className="flex items-start gap-4 rounded-xl border border-navy-900/8 bg-white p-5"
                  >
                    <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-gold-600" />
                    <div>
                      <p className="font-semibold text-navy-900">{l.name}</p>
                      <p className="mt-0.5 text-sm text-charcoal/70">{l.blurb}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Realtor profile */}
      <section className="bg-navy-950 py-16 lg:py-24 text-ivory">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="mx-auto max-w-md aspect-[4/5] overflow-hidden rounded-xl border border-gold-400/25 bg-navy-800 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <span className="flex h-28 w-28 items-center justify-center rounded-full border border-gold-400/40 font-display text-4xl text-gold-300">
                  BP
                </span>
                <p className="font-display text-lg text-ivory">{SITE.realtor}</p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                The Realtor Behind Wesley Housing
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">{SITE.realtor}</h2>
              <p className="mt-5 leading-relaxed text-navy-100">
                Clients describe {SITE.realtor} as prepared, patient, and refreshingly direct. He
                believes a realtor's job is to remove uncertainty, translating market noise into
                clear, confident decisions.
              </p>
              <p className="mt-4 leading-relaxed text-navy-200 text-[0.95rem]">
                Serving buyers, sellers, and renters across six states with the same standard: clear
                advice, careful negotiation, and follow-through that doesn't end at closing.
              </p>
              <dl className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-navy-700/60 bg-navy-900/60 p-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-300">
                    Areas Served
                  </dt>
                  <dd className="mt-1.5 text-sm text-ivory">NY · FL · IL · TX · CA · GA</dd>
                </div>
                <div className="rounded-xl border border-navy-700/60 bg-navy-900/60 p-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-300">
                    Direct Line
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={SITE.phoneHref}
                      className="text-sm font-semibold text-gold-300 hover:text-gold-400 transition-colors"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink to="/contact" variant="gold" size="lg">
                  Talk to Mr. Believe Pessar
                </ButtonLink>
                <ButtonA href={SITE.phoneHref} variant="outline-light" size="lg">
                  <PhoneIcon className="w-4 h-4" />
                  Call Now
                </ButtonA>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
