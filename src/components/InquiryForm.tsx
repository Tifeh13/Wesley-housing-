import { useState, type FormEvent } from 'react';
import { Button } from './Buttons';
import { CheckIcon } from './Icons';
import { SITE } from '../data/site';
import { LOCATION_NAMES } from '../data/locations';

interface Props {
  /** Prefill the message, e.g. property inquiry. */
  defaultMessage?: string;
  compact?: boolean;
}

const LOCATIONS = [...LOCATION_NAMES, 'Not sure yet'];
const TYPES = [
  'Single-Family',
  'Condo',
  'Townhouse',
  'Multi-Family',
  'Apartment',
  'New Construction',
  'Any / Not sure',
];
const INTEREST = ['Buy', 'Rent', 'Either'];

/**
 * Inquiry form: validates input and shows a confirmation state.
 * Connect the submit handler to an email/CRM endpoint to deliver messages.
 */
export default function InquiryForm({ defaultMessage = '', compact = false }: Props) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interest: '',
    type: '',
    message: defaultMessage,
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) setSent(true);
  };

  const input =
    'w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-colors';
  const label = 'block text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/70 mb-1.5';

  if (sent) {
    return (
      <div className="rounded-xl border border-gold-400/40 bg-gold-400/10 p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-400 text-navy-950">
          <CheckIcon className="w-6 h-6" />
        </span>
        <h3 className="mt-4 font-display text-2xl text-navy-900">Thank you, {form.name.split(' ')[0]}.</h3>
        <p className="mt-2 text-sm text-charcoal/70 max-w-md mx-auto leading-relaxed">
          Your inquiry has been received. {SITE.realtor} will reach out shortly at{' '}
          <strong>{form.phone || form.email}</strong>. For anything urgent, call{' '}
          <a href={SITE.phoneHref} className="font-semibold text-navy-900 underline">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
        <Button variant="outline" size="sm" className="mt-5" onClick={() => setSent(false)}>
          Send another inquiry
        </Button>

      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate={false} className="space-y-4">
      <div className={compact ? 'space-y-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div>
          <label htmlFor="inq-name" className={label}>
            Full Name *
          </label>
          <input
            id="inq-name"
            required
            value={form.name}
            onChange={set('name')}
            className={input}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="inq-email" className={label}>
            Email *
          </label>
          <input
            id="inq-email"
            required
            type="email"
            value={form.email}
            onChange={set('email')}
            className={input}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className={compact ? 'space-y-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div>
          <label htmlFor="inq-phone" className={label}>
            Phone
          </label>
          <input
            id="inq-phone"
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            className={input}
            placeholder="(555) 000-0000"
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="inq-location" className={label}>
            Preferred Location
          </label>
          <select id="inq-location" value={form.location} onChange={set('location')} className={input}>
            <option value="">Select location</option>
            {LOCATIONS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={compact ? 'space-y-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div>
          <label htmlFor="inq-interest" className={label}>
            Looking to
          </label>
          <select id="inq-interest" value={form.interest} onChange={set('interest')} className={input}>
            <option value="">Select</option>
            {INTEREST.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="inq-type" className={label}>
            Property Type
          </label>
          <select id="inq-type" value={form.type} onChange={set('type')} className={input}>
            <option value="">Select type</option>
            {TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="inq-message" className={label}>
          Message
        </label>
        <textarea
          id="inq-message"
          rows={compact ? 3 : 4}
          value={form.message}
          onChange={set('message')}
          className={input}
          placeholder="Tell us what you're looking for…"
        />
      </div>

      <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
        Send Inquiry
      </Button>
    </form>
  );
}
