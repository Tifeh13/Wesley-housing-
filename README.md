# Wesley Housing

A modern, premium real-estate website for **Wesley Housing**, the practice of realtor **Mr. Believe Pessar** — homes for sale and for rent across New York, Florida, Illinois, Texas, California, and Georgia.

## Features

- Property listings with sale/rent availability, street addresses, galleries, and filters (location, type, price, beds, baths, availability)
- Six dedicated state location pages with neighborhood guides and market orientation
- 54 client reviews with location filters and an accessible testimonial carousel
- Inquiry forms, click-to-call, and mobile message bar
- SEO: per-page titles/meta, Open Graph, JSON-LD structured data (RealEstateAgent + areas served)
- Responsive srcset images, preconnected CDNs, and immutable asset caching for fast loads

## Tech Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) with [Tailwind CSS v4](https://tailwindcss.com)
- [React Router 7](https://reactrouter.com)

## Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build (outputs to dist/)
```

## Deployment

Configured for Vercel (`vercel.json`): SPA rewrites plus long-lived caching for hashed assets. Connect the repo in Vercel and deploy with defaults.

## Project Structure

```
src/
  components/   # reusable UI (cards, forms, navbar, footer, carousel)
  components/sections/  # homepage sections
  data/         # site config, properties, locations, reviews — edit content here
  pages/        # routed pages (Home, Properties, Reviews, Locations, ...)
```

To update listings, reviews, or company details, edit the files in `src/data/` — every page, filter, and structured-data block stays in sync automatically.

---

© 2026 Wesley Housing. All rights reserved.
