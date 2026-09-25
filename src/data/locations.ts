/**
 * Wesley Housing location content.
 *
 * Neighborhood guides and price orientation for each state we serve.
 * Update ranges here as market data is refreshed.
 */

export type LocationSlug =
  | 'new-york'
  | 'florida'
  | 'illinois'
  | 'texas'
  | 'california'
  | 'georgia';

import type { LocationName } from './properties';

export interface LocationInfo {
  slug: LocationSlug;
  name: LocationName;
  stateAbbr: string;
  blurb: string;
  heroImage: string;
  imageAlt: string;
  neighborhoods: { name: string; note: string }[];
  propertyTypes: string[];
  priceRanges: { label: string; range: string }[];
  marketNotes: string[];
}

export const LOCATIONS: LocationInfo[] = [
  {
    slug: 'new-york',
    name: 'New York',
    stateAbbr: 'NY',
    blurb: 'Discover homes in vibrant neighborhoods across New York.',
    heroImage:
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Classic New York brownstone residences with stoops on a tree-lined street',
    neighborhoods: [
      { name: 'Brooklyn', note: 'Brownstones, townhouses, and a celebrated food and arts scene.' },
      { name: 'Queens', note: 'One of the most diverse counties in the U.S., with co-ops and family homes.' },
      { name: 'Manhattan', note: 'High-rise condos and pre-war apartments close to everything.' },
      { name: 'Westchester', note: 'Suburban villages with commuter rail access to the city.' },
      { name: 'Long Island', note: 'Beach-adjacent communities and classic single-family homes.' },
    ],
    propertyTypes: ['Co-op', 'Condo', 'Townhouse', 'Single-Family', 'Multi-Family'],
    priceRanges: [
      { label: 'Studio–1BR apartments', range: '$300K – $900K+' },
      { label: 'Family homes', range: '$500K – $1.5M+' },
      { label: 'Luxury residences', range: '$2M+' },
    ],
    marketNotes: [
      'Co-op boards are common in NYC, so budget extra time for approval.',
      'Property taxes and common charges vary widely by building and borough.',
      'Commuter rail (LIRR, Metro-North) shapes value in the suburbs.',
    ],
  },
  {
    slug: 'florida',
    name: 'Florida',
    stateAbbr: 'FL',
    blurb:
      'Explore beautiful homes, coastal communities, and modern residences across Florida.',
    heroImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'White Florida home with swimming pool and palm trees',
    neighborhoods: [
      { name: 'Miami', note: 'Waterfront condos, Art Deco districts, and international energy.' },
      { name: 'Tampa', note: 'Growing job market with bayside suburbs and new construction.' },
      { name: 'Orlando', note: 'Family communities, theme-park proximity, and value pricing.' },
      { name: 'Jacksonville', note: 'One of the largest city land areas in the U.S., with beaches.' },
      { name: 'Sarasota', note: 'Gulf-coast culture, golf communities, and relaxed living.' },
    ],
    propertyTypes: ['Condo', 'Single-Family', 'Villa', 'Townhouse', 'New Construction'],
    priceRanges: [
      { label: 'Condos', range: '$200K – $700K+' },
      { label: 'Family homes', range: '$350K – $900K+' },
      { label: 'Waterfront / luxury', range: '$1M+' },
    ],
    marketNotes: [
      'Ask about HOA fees and community amenities; they shape monthly cost.',
      'Windstorm and flood insurance considerations are unique to Florida.',
      'New-construction communities offer builder incentives in many areas.',
    ],
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    stateAbbr: 'IL',
    blurb: 'Find comfortable homes and properties throughout Illinois.',
    heroImage:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Chicago skyline behind quiet residential streets in Illinois',
    neighborhoods: [
      { name: 'Chicago', note: 'Lakefront condos, classic two-flats, and distinct neighborhoods.' },
      { name: 'Naperville', note: 'Top-rated schools and family-friendly suburbs.' },
      { name: 'Evanston', note: 'Lakefront charm with university-town character.' },
      { name: 'Oak Park', note: 'Historic homes, including Frank Lloyd Wright architecture.' },
      { name: 'Schaumburg', note: 'Convenient northwest suburbs with strong value.' },
    ],
    propertyTypes: ['Single-Family', 'Condo', 'Townhouse', 'Two-Flat / Multi-Family', 'New Construction'],
    priceRanges: [
      { label: 'Condos', range: '$150K – $500K+' },
      { label: 'Family homes', range: '$250K – $700K+' },
      { label: 'Luxury homes', range: '$1M+' },
    ],
    marketNotes: [
      'Cook County property taxes are a key part of the monthly budget.',
      'Winter showings make homes easy to evaluate for heating and upkeep.',
      'Metra lines make downtown commuting practical from many suburbs.',
    ],
  },
  {
    slug: 'texas',
    name: 'Texas',
    stateAbbr: 'TX',
    blurb: 'Discover spacious homes and thriving communities across Texas.',
    heroImage:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Modern Texas home exterior with wide porch at golden hour',
    neighborhoods: [
      { name: 'Austin', note: 'Tech-driven growth, hill-country views, and vibrant culture.' },
      { name: 'Dallas', note: 'Diverse neighborhoods from urban condos to leafy suburbs.' },
      { name: 'Houston', note: 'Energy-capital economy with exceptional housing value.' },
      { name: 'San Antonio', note: 'Historic charm and some of the state\'s best prices.' },
      { name: 'Fort Worth', note: 'Cowtown character with family-friendly suburbs.' },
    ],
    propertyTypes: ['Single-Family', 'Condo', 'Townhouse', 'New Construction', 'Apartment'],
    priceRanges: [
      { label: 'Condos & apartments', range: '$180K – $450K+' },
      { label: 'Family homes', range: '$300K – $700K+' },
      { label: 'Luxury homes', range: '$1M+' },
    ],
    marketNotes: [
      'Texas has no state income tax, which stretches housing budgets further.',
      'Property taxes run higher than the national average; factor them into monthly cost.',
      'New-build communities are plentiful around all major metros.',
    ],
  },
  {
    slug: 'california',
    name: 'California',
    stateAbbr: 'CA',
    blurb: 'Explore diverse homes, from coastal cities to quiet suburbs, across California.',
    heroImage:
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'California coastal homes with palm trees and ocean views',
    neighborhoods: [
      { name: 'Los Angeles', note: 'Everything from hillside view homes to walkable village districts.' },
      { name: 'San Diego', note: 'Beach communities with a relaxed, outdoor lifestyle.' },
      { name: 'Bay Area', note: 'Tech-hub towns, Victorians, and hillside suburbs.' },
      { name: 'Sacramento', note: 'Value pricing and a growing downtown riverfront scene.' },
      { name: 'Orange County', note: 'Coastal living from surf towns to planned communities.' },
    ],
    propertyTypes: ['Single-Family', 'Condo', 'Townhouse', 'Multi-Family', 'New Construction'],
    priceRanges: [
      { label: 'Condos', range: '$400K – $750K+' },
      { label: 'Family homes', range: '$600K – $1.2M+' },
      { label: 'Coastal / luxury', range: '$1.5M+' },
    ],
    marketNotes: [
      'Earthquake insurance and Mello-Roos taxes affect monthly cost in some areas.',
      'Older homes may lack modern seismic retrofits; inspections matter here.',
      'Coastal zones carry premium prices and stricter permitting rules.',
    ],
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    stateAbbr: 'GA',
    blurb: 'Find welcoming neighborhoods and exceptional value throughout Georgia.',
    heroImage:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Classic Georgia home with covered porch among mature trees',
    neighborhoods: [
      { name: 'Atlanta', note: 'Intown neighborhoods with a mix of bungalows and new builds.' },
      { name: 'Savannah', note: 'Historic squares, moss-draped oaks, and coastal charm.' },
      { name: 'Alpharetta', note: 'Top schools and corporate campuses north of the city.' },
      { name: 'Athens', note: 'College-town energy with affordable historic districts.' },
      { name: 'Marietta', note: 'Family suburbs with easy northwest commutes.' },
    ],
    propertyTypes: ['Single-Family', 'Condo', 'Townhouse', 'New Construction', 'Multi-Family'],
    priceRanges: [
      { label: 'Condos', range: '$200K – $400K+' },
      { label: 'Family homes', range: '$300K – $600K+' },
      { label: 'Luxury homes', range: '$900K+' },
    ],
    marketNotes: [
      'Georgia offers strong value per square foot compared with coastal states.',
      'Property tax homestead exemptions can significantly reduce annual costs.',
      'Mild winters make year-round relocations and rentals straightforward.',
    ],
  },
];

export const getLocation = (slug: string | undefined) =>
  LOCATIONS.find((l) => l.slug === slug);

export const LOCATION_NAMES = LOCATIONS.map((l) => l.name);
