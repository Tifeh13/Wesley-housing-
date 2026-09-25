/**
 * Wesley Housing site-wide configuration.
 *
 * Everything the marketing site needs lives here: contact details,
 * navigation, and company statistics. Update the `value` fields as the
 * business grows, and every section that displays them stays in sync.
 */

export const SITE = {
  name: 'Wesley Housing',
  realtor: 'Mr. Believe Pessar',
  phoneDisplay: '(708) 730-2617',
  phoneHref: 'tel:+17087302617',
  smsHref: 'sms:+17087302617',
  tagline: 'Homes for sale & rent across six states',
  /** Company statistics: update as figures change. */
  stats: {
    homesListed: { value: '28', label: 'Homes & Rentals Listed' },
    locationsServed: { value: '6', label: 'Locations Served' },
    clientReviews: { value: '54', label: 'Client Reviews' },
    averageRating: { value: '5.0', label: 'Average Rating' },
  },
} as const;

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'Locations', to: '/locations' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
] as const;
