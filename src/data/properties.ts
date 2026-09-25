/**
 * Wesley Housing property listings.
 *
 * Update this file to add, remove, or edit listings. Each record feeds the
 * property cards, detail pages, filters, and structured data automatically.
 */

export type PropertyType =
  | 'Single-Family'
  | 'Condo'
  | 'Townhouse'
  | 'Multi-Family'
  | 'Apartment'
  | 'New Construction';

export type LocationName =
  | 'New York'
  | 'Florida'
  | 'Illinois'
  | 'Texas'
  | 'California'
  | 'Georgia';

export type ListingType = 'For Sale' | 'For Rent';

export interface Property {
  id: string;
  slug: string;
  name: string;
  /** Street address of the property, e.g. "142 Grace Court". */
  address: string;
  location: LocationName;
  area: string;
  type: PropertyType;
  /** Monthly rent for rentals; full price for sales. */
  price: number;
  listingType: ListingType;
  beds: number;
  baths: number;
  sqft: number;
  featured: boolean;
  images: string[];
  description: string[];
  features: string[];
  amenities: string[];
  areaInfo: string;
}

const img = (id: string, seed: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80&sig=${seed}`;

/** Curated Unsplash architecture/home photos reused across galleries. */
const GALLERY = [
  'photo-1600596542815-ffad4c1539a9', // modern luxury home exterior dusk
  'photo-1600607687939-ce8a6c25118c', // bright living room interior
  'photo-1600585154340-be6161a56a0c', // white modern house with pool
  'photo-1580587771525-78b9dba3b914', // suburban home exterior
  'photo-1600210492486-724fe5c67fb0', // living room with large windows
  'photo-1600566753086-00f18fb6b3ea', // kitchen interior modern
  'photo-1600121848594-d8644e57abab', // luxury home exterior
  'photo-1600607687920-4e2a09cf159d', // dining / interior detail
  'photo-1600047509807-ba8f99d2cdde', // townhouse street facade
  'photo-1600607688969-a5bfcd646154', // bathroom interior
  'photo-1512917774080-9991f1c4c750', // classic luxury home
  'photo-1560448204-e02f11c3d0e2', // apartment interior bright
  'photo-1560185007-cde436f6a4d0', // bedroom interior
  'photo-1449844908441-8829872d2607', // home exterior evening
  'photo-1560185127-6ed189bf02f4', // interior hallway
  'photo-1560184897-ae75f418493e', // kitchen light interior
];

/** Five photos rotated from the curated pool starting at `start` (wraps). */
const gallery = (seed: string, start: number): string[] =>
  Array.from({ length: 5 }, (_, i) =>
    img(GALLERY[(start + i) % GALLERY.length], `${seed}-${i}`, 1200, 800),
  );

export const PROPERTIES: Property[] = [
  {
    id: 'p1',
    slug: 'park-slope-legacy-townhouse',
    name: 'Park Slope Legacy Townhouse',
    address: '142 Grace Court',
    location: 'New York',
    area: 'Park Slope, Brooklyn',
    type: 'Townhouse',
    price: 1895000,
    listingType: 'For Sale',
    beds: 5,
    baths: 3.5,
    sqft: 3200,
    featured: true,
    images: gallery('parkslope', 8), // leads with the townhouse street facade
    description: [
      'A stately example of classic Brooklyn architecture, this townhouse offers the proportions today\'s buyers look for: original-period detail updated with a modern open rear parlor floor, tall south-facing windows, and a private garden level.',
      'The owner\'s floor offers a generous primary suite with dressing area, while the garden level flexes naturally to a guest suite, home office, or rental configuration.',
    ],
    features: ['Period parlor detail', 'Rear garden & patio', 'Full-height basement', 'Zoned HVAC', 'Detached garage access'],
    amenities: ['Private garden', 'Wine storage', 'Home office suite', 'Walk-in closets', 'Security system'],
    areaInfo:
      'Park Slope is known for its landmark brownstone blocks, Prospect Park access, and walkable 5th and 7th Avenue commercial strips.',
  },
  {
    id: 'p2',
    slug: 'tribeca-light-filled-penthouse',
    name: 'Tribeca Light-Filled Penthouse',
    address: '85 Worth Street, Unit 12A',
    location: 'New York',
    area: 'Tribeca, Manhattan',
    type: 'Condo',
    price: 3250000,
    listingType: 'For Sale',
    beds: 3,
    baths: 3,
    sqft: 2150,
    featured: true,
    images: gallery('tribeca', 1), // leads with a bright great-room interior
    description: [
      'This penthouse highlights the canyon-light interiors Tribeca lofts are prized for: oversized casement windows, wide-plank oak floors, and a 40-foot great room with skyline views.',
      'A sculpted primary suite, two additional en-suite bedrooms, and a wraparound terrace complete a layout built for effortless entertaining.',
    ],
    features: ['Wraparound terrace', 'Casement floor-to-ceiling windows', 'Custom Italian kitchen', 'Two deeded parking spaces', 'Full-service building'],
    amenities: ['24/7 doorman', 'Fitness center', 'Roof deck', 'Residents\' lounge', 'Bike room', 'Private storage'],
    areaInfo:
      'Tribeca blends historic loft architecture with quiet cobblestone streets, acclaimed restaurants, and Hudson River Park access.',
  },
  {
    id: 'p3',
    slug: 'westchester-garden-colonial',
    name: 'Westchester Garden Colonial',
    address: '23 Meadowbrook Lane',
    location: 'New York',
    area: 'Scarsdale, Westchester',
    type: 'Single-Family',
    price: 1449000,
    listingType: 'For Sale',
    beds: 4,
    baths: 2.5,
    sqft: 2800,
    featured: false,
    images: gallery('westchester', 13), // leads with a classic exterior at dusk
    description: [
      'A classic Westchester colonial layout: center-hall entry, formal living and dining rooms, and a sun-washed family room opening to a level, professionally-landscaped backyard.',
      'The second floor offers four bedrooms including a primary suite, with an expandable walk-up attic for growing families.',
    ],
    features: ['Center-hall colonial', 'Two-zone climate control', 'Updated systems', 'Walk-up attic', 'Attached two-car garage'],
    amenities: ['Level backyard', 'Tennis-court-size lot', 'Mudroom', 'Home office', 'Finished basement'],
    areaInfo:
      'Scarsdale is known for top-ranked public schools, Metro-North access, and village greens roughly 30 minutes from Midtown.',
  },
  {
    id: 'p4',
    slug: 'miami-waterfront-modern',
    name: 'Miami Waterfront Modern',
    address: '3105 Bayshore Drive',
    location: 'Florida',
    area: 'Coconut Grove, Miami',
    type: 'Single-Family',
    price: 2795000,
    listingType: 'For Sale',
    beds: 5,
    baths: 4.5,
    sqft: 4100,
    featured: true,
    images: gallery('miami', 6), // leads with a luxury exterior
    description: [
      'This residence captures the Coconut Grove ideal: a coral-stone and glass composition with 60 feet of waterfront, a resort pool terrace, and pocketing glass walls that dissolve the main living space outdoors.',
      'Chef\'s kitchen with dual islands, a main-floor guest suite, and a rooftop sunset deck round out the plan.',
    ],
    features: ['60 ft of waterfront', 'Resort pool & sun shelf', 'Pocketing glass walls', 'Summer kitchen', 'Impact glass throughout'],
    amenities: ['Private dock', 'Smart home system', 'Summer kitchen', 'Rooftop deck', '3-car garage', 'Outdoor shower'],
    areaInfo:
      "Coconut Grove is Miami's bayside village: sailing clubs, café culture, and canopied streets minutes from downtown.",
  },
  {
    id: 'p5',
    slug: 'sarasota-gulf-view-residence',
    name: 'Sarasota Gulf View Residence',
    address: '700 Ben Franklin Drive, Unit 802',
    location: 'Florida',
    area: 'Sarasota',
    type: 'Condo',
    price: 1195000,
    listingType: 'For Sale',
    beds: 3,
    baths: 3,
    sqft: 2250,
    featured: true,
    images: gallery('sarasota', 2), // leads with a white coastal home & pool
    description: [
      'A Gulf-front residence with direct-water terrace views, a light-toned coastal palette, and a split-bedroom plan designed for full-time living or seasonal escapes.',
      'Building amenities reflect the Florida condo standard: pool, fitness, and concierge services.',
    ],
    features: ['Direct Gulf views', 'Wrap terrace', 'Split-bedroom plan', 'Quantum quartz counters', 'Hurricane-rated windows'],
    amenities: ['Bayfront pool', 'Fitness center', 'Concierge', 'Under-building parking', 'Community room', 'Pet-friendly'],
    areaInfo:
      'Sarasota pairs Gulf beaches with a nationally recognized arts scene; St. Armands Circle and downtown are minutes away.',
  },
  {
    id: 'p6',
    slug: 'tampa-palm-family-home',
    name: 'Tampa Palm Family Home',
    address: '4819 Bayshore Boulevard',
    location: 'Florida',
    area: 'South Tampa',
    type: 'Single-Family',
    price: 845000,
    listingType: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 2650,
    featured: false,
    images: gallery('tampa', 3), // leads with a suburban family exterior
    description: [
      'This South Tampa plan shows what family buyers typically prioritize: an open kitchen with oversized island, a true flex room, and a covered lanai overlooking the pool-ready backyard.',
      'Four bedrooms including a downstairs guest suite make single-story living possible.',
    ],
    features: ['Open-concept plan', 'Covered lanai', 'Pool-ready yard', 'Downstairs guest suite', 'New roof'],
    amenities: ['Smart thermostats', 'Garden irrigation', 'Garage storage', 'Fenced yard', 'Ceiling fans throughout'],
    areaInfo:
      'South Tampa blends bayshore views, A-rated schools, and a five-minute drive to downtown or the airport.',
  },
  {
    id: 'p7',
    slug: 'lincoln-park-lakeview-duplex',
    name: 'Lincoln Park Lakeview Duplex',
    address: '2216 N Geneva Terrace',
    location: 'Illinois',
    area: 'Lincoln Park, Chicago',
    type: 'Condo',
    price: 899000,
    listingType: 'For Sale',
    beds: 3,
    baths: 2.5,
    sqft: 2000,
    featured: true,
    images: gallery('lincolnpark', 11), // leads with a bright apartment interior
    description: [
      'A duplex penthouse steps from the park: double-height windows, a wood-burning fireplace, and a private roof deck framing lake and skyline views.',
      'The upper level holds the primary suite and a den with rooftop access; two more bedrooms sit below for privacy.',
    ],
    features: ['Private roof deck', 'Double-height windows', 'Wood-burning fireplace', 'Heated bathroom floors', 'In-unit laundry'],
    amenities: ['Elevator building', 'Deeded parking', 'Storage locker', 'Bike room', 'Rooftop common deck'],
    areaInfo:
      'Lincoln Park offers lakefront trails, the zoo, and a dense restaurant scene along Clark Street, 20 minutes to the Loop.',
  },
  {
    id: 'p8',
    slug: 'naperville-maple-family-home',
    name: 'Naperville Maple Family Home',
    address: '1108 Whispering Oaks Drive',
    location: 'Illinois',
    area: 'Naperville',
    type: 'Single-Family',
    price: 675000,
    listingType: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 3100,
    featured: true,
    images: gallery('naperville', 0), // leads with an evening home exterior
    description: [
      'This Naperville home is the move-in-ready suburban family house: a two-story great room, first-floor study, and a finished basement with media area.',
      'The kitchen opens to a sunroom dining bay over a fenced, tree-lined yard.',
    ],
    features: ['Two-story great room', 'First-floor study', 'Finished basement', 'Sunroom dining bay', 'Fenced yard'],
    amenities: ['Whole-home humidifier', 'Media room', 'Mudroom lockers', 'Patio', 'Sprinkler system'],
    areaInfo:
      "Naperville is routinely cited among the nation's best family suburbs, with top schools, the Riverwalk, and Metra to Chicago.",
  },
  {
    id: 'p9',
    slug: 'oak-park-prairie-two-flat',
    name: 'Oak Park Prairie Two-Flat',
    address: '317 S Home Avenue',
    location: 'Illinois',
    area: 'Oak Park',
    type: 'Multi-Family',
    price: 549000,
    listingType: 'For Sale',
    beds: 5,
    baths: 2,
    sqft: 2400,
    featured: false,
    images: gallery('oakpark', 10), // leads with a classic home facade
    description: [
      'The classic Chicago two-flat: two mirrored three-bedroom floor-through units with period woodwork, plus an unfinished basement for storage or future expansion.',
      'Live in one unit and rent the other: a proven Illinois path to homeownership.',
    ],
    features: ['Two floor-through units', 'Period woodwork', 'Separate utilities', 'Unfinished basement', 'Fenced common yard'],
    amenities: ['Off-street parking', 'In-unit hookups', 'Enclosed porch', 'Separate entries', 'Storage'],
    areaInfo:
      'Oak Park is celebrated for its historic architecture districts and green-line/el access into the city.',
  },
  {
    id: 'p10',
    slug: 'brooklyn-heights-modern-apartment',
    name: 'Brooklyn Heights Modern Apartment',
    address: '75 Clark Street, Unit 5B',
    location: 'New York',
    area: 'Brooklyn Heights',
    type: 'Condo',
    price: 1295000,
    listingType: 'For Sale',
    beds: 2,
    baths: 2,
    sqft: 1250,
    featured: false,
    images: gallery('bkheights', 4), // leads with a large-window living room
    description: [
      'This two-bedroom shows the Brooklyn Heights premium: a corner great room with skyline views, a stone-primary bath, and custom built-ins throughout.',
      'A full-service boutique building completes the picture.'
    ],
    features: ['Corner skyline views', 'Custom built-ins', 'Stone primary bath', 'Private balcony', 'W/D in unit'],
    amenities: ['Doorman', 'Gym', 'Roof terrace', 'Package room', 'Bike storage'],
    areaInfo:
      'Brooklyn Heights offers the city\'s first historic district, the Promenade, and a fast A/C commute to Lower Manhattan.',
  },
  {
    id: 'p11',
    slug: 'orlando-sunridge-new-construction',
    name: 'Orlando Sunridge New Construction',
    address: '9242 Vintage Reserve Way',
    location: 'Florida',
    area: 'Lake Nona, Orlando',
    type: 'New Construction',
    price: 620000,
    listingType: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 2450,
    featured: false,
    images: gallery('orlando', 15), // leads with a new-build kitchen
    description: [
      'The Lake Nona new-build product: a smart-wired single-story plan with a spa-primary bath, covered porch, and energy package.',
      'Community amenities include pool, trails, and fitness access.'
    ],
    features: ['Single-story plan', 'Smart-home package', 'Spa primary bath', 'Covered porch', 'Energy-efficient windows'],
    amenities: ['Community pool', 'Walking trails', 'Fitness center', 'Playground', 'Gated entry'],
    areaInfo:
      "Lake Nona is Orlando's master-planned medical and tech city, with new schools, parks, and lakes at every turn.",
  },
  {
    id: 'p12',
    slug: 'queens-forest-hills-garden-coop',
    name: 'Queens Forest Hills Garden Co-op',
    address: '3 Burnside Place, Unit 2C',
    location: 'New York',
    area: 'Forest Hills, Queens',
    type: 'Multi-Family',
    price: 465000,
    listingType: 'For Sale',
    beds: 2,
    baths: 1.5,
    sqft: 1100,
    featured: false,
    images: gallery('foresthills', 5), // leads with a warm kitchen interior
    description: [
      'A storied Forest Hills Gardens co-op: herringbone floors, arched doorways, and a bay-window dining nook overlooking private gardens.',
      "The district's strict covenants keep the streetscapes remarkably preserved, a rare thing in NYC.",
    ],
    features: ['Herringbone floors', 'Bay-window dining nook', 'Private garden access', 'Original period detail', 'Updated kitchen'],
    amenities: ['Private parks (residents)', 'Community pool', 'Garage parking waitlist', 'Doorman court', 'Storage'],
    areaInfo:
      'Forest Hills Gardens is a planned Tudor-pines enclave with LIRR and E/F subway access, about 20 minutes to Midtown.',
  },
  {
    id: 'p13',
    slug: 'hoboken-brownstone-rental',
    name: 'Hoboken Brownstone Rental',
    address: '612 Bloomfield Street, Floor 2',
    location: 'New York',
    area: 'Hoboken, NJ Metro',
    type: 'Apartment',
    price: 3400,
    listingType: 'For Rent',
    beds: 2,
    baths: 1,
    sqft: 950,
    featured: false,
    images: gallery('hoboken', 12),
    description: [
      'A sun-filled second-floor apartment in a classic brownstone, moments from the Washington Street dining corridor and the PATH to Manhattan.',
      'Renovated kitchen, generous bedroom sizes, and shared rear garden access make this an easy turnkey rental.',
    ],
    features: ['Renovated kitchen', 'Bay windows', 'Shared garden', 'In-unit washer/dryer', 'Storage closet'],
    amenities: ['Heat & hot water included', 'Bike storage', 'Street parking permit', 'Pet-friendly (case by case)', 'PATH nearby'],
    areaInfo:
      "Hoboken offers a small-town feel with a fast PATH commute, a favorite of Manhattan workers priced out of the city.",
  },
  {
    id: 'p14',
    slug: 'williamsburg-loft-rental',
    name: 'Williamsburg Loft Rental',
    address: '88 N 7th Street, Unit 4F',
    location: 'New York',
    area: 'Williamsburg, Brooklyn',
    type: 'Apartment',
    price: 4650,
    listingType: 'For Rent',
    beds: 1,
    baths: 1,
    sqft: 820,
    featured: true,
    images: gallery('williamsburg', 7),
    description: [
      'An industrial-chic loft in the heart of Williamsburg: exposed brick, 11-foot ceilings, and oversized factory windows overlooking a quiet block.',
      'Steps from the Bedford L train, McCarren Park, and the waterfront promenade.',
    ],
    features: ['Exposed brick', '11-ft ceilings', 'Factory windows', 'Open kitchen island', 'Walk-in closet'],
    amenities: ['Rooftop lounge', 'Fitness center', 'Package room', 'Elevator building', 'Pet-friendly'],
    areaInfo:
      "Williamsburg is Brooklyn's creative hub: independent shops, waterfront parks, and a quick L-train ride to the East Village.",
  },
  {
    id: 'p15',
    slug: 'st-petersburg-waterfront-rental',
    name: 'St. Petersburg Waterfront Rental',
    address: '450 Beach Drive NE, Unit 1101',
    location: 'Florida',
    area: 'Downtown St. Petersburg',
    type: 'Condo',
    price: 3200,
    listingType: 'For Rent',
    beds: 2,
    baths: 2,
    sqft: 1180,
    featured: false,
    images: gallery('stpete', 2),
    description: [
      'A corner-unit high-floor rental with direct waterfront views over Tampa Bay, floor-to-ceiling glass, and a wraparound balcony.',
      'Walking distance to the Pier, Beach Drive restaurants, and the Dali Museum.',
    ],
    features: ['Waterfront views', 'Wraparound balcony', 'Floor-to-ceiling glass', 'Quartz counters', 'Split bedrooms'],
    amenities: ['Bayfront pool', 'Fitness center', 'Concierge', 'Valet parking', 'Pet spa'],
    areaInfo:
      'Downtown St. Petersburg blends a walkable waterfront arts district with some of Florida\'s best weather.',
  },
  {
    id: 'p16',
    slug: 'evanston-lakefront-rental',
    name: 'Evanston Lakefront Rental',
    address: '1615 Chicago Avenue, Unit 6E',
    location: 'Illinois',
    area: 'Evanston',
    type: 'Apartment',
    price: 2450,
    listingType: 'For Rent',
    beds: 2,
    baths: 1,
    sqft: 980,
    featured: false,
    images: gallery('evanston', 9),
    description: [
      'A bright, well-kept apartment minutes from Lake Michigan beaches and Northwestern University, with the Davis Street Metra stop nearby.',
      'Herringbone-entry foyer, updated bath, and dining room with natural light throughout the day.',
    ],
    features: ['Updated bath', 'Dining room', 'Herringbone foyer', 'Balcony', 'Heated building'],
    amenities: ['Heat included', 'Laundry on floor', 'Bike room', 'Elevator', 'Near Northwestern'],
    areaInfo:
      'Evanston pairs lakefront living with university-town energy: beaches, bookshops, and a 25-minute Purple Line ride downtown.',
  },
  {
    id: 'p17',
    slug: 'west-adams-renovated-rental',
    name: 'Wicker Park Renovated Rental',
    address: '1420 S Spalding Avenue, Unit B',
    location: 'Illinois',
    area: 'Wicker Park, Chicago',
    type: 'Apartment',
    price: 2850,
    listingType: 'For Rent',
    beds: 3,
    baths: 2,
    sqft: 1350,
    featured: false,
    images: gallery('wickerpark', 4),
    description: [
      'A full-floor unit in a renovated three-flat on a tree-lined Wicker Park block: three true bedrooms, two full baths, and a shared backyard.',
      'The Blue Line Damen stop and the 606 Trail are both a five-minute walk.',
    ],
    features: ['Three true bedrooms', 'Two full baths', 'Shared backyard', 'In-unit laundry', 'Period woodwork'],
    amenities: ['Off-street parking', 'Backyard patio', 'Storage locker', 'Cat-friendly', 'Blue Line nearby'],
    areaInfo:
      'Wicker Park is a hub of Chicago\'s dining and music scene, with historic flats and easy access to the Loop.',
  },
  {
    id: 'p18',
    slug: 'fort-lauderdale-pool-home-rental',
    name: 'Fort Lauderdale Pool Home Rental',
    address: '2211 NE 16th Terrace',
    location: 'Florida',
    area: 'Coral Ridge, Fort Lauderdale',
    type: 'Single-Family',
    price: 5400,
    listingType: 'For Rent',
    beds: 4,
    baths: 3,
    sqft: 2450,
    featured: true,
    images: gallery('coralridge', 13),
    description: [
      'A furnished pool home for seasonal or annual lease in Coral Ridge: heated pool, covered patio, and a quiet street minutes from the beach.',
      'Split floor plan with a den, plus hurricane-impact windows throughout.',
    ],
    features: ['Heated pool', 'Covered patio', 'Hurricane-impact windows', 'Split floor plan', 'Den/office'],
    amenities: ['Furnished option', 'Two-car garage', 'Smart thermostat', 'Fenced yard', 'Near beach'],
    areaInfo:
      "Coral Ridge offers some of Fort Lauderdale's most convenient family living, with boating canals, top schools, and beach access.",
  },
  {
    id: 'p19',
    slug: 'austin-hill-country-rental',
    name: 'Austin Hill Country Rental',
    address: '4108 Escarpment Way',
    location: 'Texas',
    area: 'South Austin',
    type: 'Single-Family',
    price: 2950,
    listingType: 'For Rent',
    beds: 3,
    baths: 2,
    sqft: 1650,
    featured: false,
    images: gallery('austinrental', 0),
    description: [
      'A single-story rental with hill-country views from the back patio, an open kitchen, and a split-bedroom plan.',
      'Fifteen minutes to downtown Austin with quick access to the greenbelt.',
    ],
    features: ['Hill-country views', 'Open kitchen', 'Split bedrooms', 'Covered patio', 'Sprinkler system'],
    amenities: ['Fenced yard', 'Two-car garage', 'Smart thermostat', 'Pet-friendly', 'No HOA'],
    areaInfo:
      'South Austin blends music-city culture with outdoor living; the greenbelt and downtown are both minutes away.',
  },
  {
    id: 'p20',
    slug: 'dallas-uptown-apartment-rental',
    name: 'Dallas Uptown Apartment Rental',
    address: '3120 McKinney Avenue, Unit 814',
    location: 'Texas',
    area: 'Uptown Dallas',
    type: 'Apartment',
    price: 2350,
    listingType: 'For Rent',
    beds: 1,
    baths: 1,
    sqft: 760,
    featured: false,
    images: gallery('uptowndallas', 11),
    description: [
      'A walk-everywhere Uptown apartment one block from the McKinney Avenue trolley, with resort pool and fitness access.',
      'Quartz counters, wood-style floors, and a private balcony overlooking the courtyard.',
    ],
    features: ['Private balcony', 'Quartz counters', 'Wood-style floors', 'Walk-in closet', 'W/D in unit'],
    amenities: ['Resort pool', 'Fitness center', 'Controlled access', 'Package lockers', 'Garage parking'],
    areaInfo:
      'Uptown Dallas is the walkable core: restaurants, the Katy Trail, and a fast commute to downtown.',
  },
  {
    id: 'p21',
    slug: 'houston-suburban-family-home',
    name: 'Houston Suburban Family Home',
    address: '12718 Cypress Rose Hill Drive',
    location: 'Texas',
    area: 'Cypress, Houston Metro',
    type: 'Single-Family',
    price: 385000,
    listingType: 'For Sale',
    beds: 4,
    baths: 2.5,
    sqft: 2680,
    featured: false,
    images: gallery('cypress', 3),
    description: [
      'A two-story family home in a master-planned Cypress community: game room, covered patio, and a kitchen built for gatherings.',
      'Zoned to highly regarded Cy-Fair schools with a community pool and splash pad nearby.',
    ],
    features: ['Game room', 'Covered patio', 'Kitchen island', 'Primary suite downstairs', 'Energy package'],
    amenities: ['Community pool', 'Splash pad', 'Fenced yard', 'Garage storage', 'Smart home wiring'],
    areaInfo:
      'Cypress offers some of the Houston metro\'s best-value family living with strong schools and new retail.',
  },
  {
    id: 'p22',
    slug: 'san-diego-coastal-condo',
    name: 'San Diego Coastal Condo',
    address: '855 Pacific Beach Drive, Unit 302',
    location: 'California',
    area: 'Pacific Beach, San Diego',
    type: 'Condo',
    price: 895000,
    listingType: 'For Sale',
    beds: 2,
    baths: 2,
    sqft: 1050,
    featured: true,
    images: gallery('pacificbeach', 2),
    description: [
      'A light-filled coastal condo blocks from the boardwalk: ocean views from the balcony, updated kitchen, and secure parking.',
      'The building offers a shared rooftop deck with fire pits and sunset views.',
    ],
    features: ['Ocean views', 'Updated kitchen', 'Balcony', 'Secure parking', 'In-unit laundry'],
    amenities: ['Rooftop deck', 'Fire pits', 'Controlled access', 'Bike storage', 'Pet-friendly'],
    areaInfo:
      'Pacific Beach is San Diego\'s quintessential beach neighborhood: boardwalk, bay, and a lively restaurant row.',
  },
  {
    id: 'p23',
    slug: 'los-angeles-bungalow-rental',
    name: 'Los Angeles Bungalow Rental',
    address: '1714 N Gardner Street',
    location: 'California',
    area: 'Sunset Junction, Los Angeles',
    type: 'Single-Family',
    price: 5200,
    listingType: 'For Rent',
    beds: 2,
    baths: 2,
    sqft: 1180,
    featured: false,
    images: gallery('sunsetjunction', 13),
    description: [
      'A restored 1920s bungalow in Sunset Junction with original charm: hardwood floors, arched doorways, and a private garden.',
      'Walk to Sunset Boulevard cafes; a five-minute drive to Silver Lake Reservoir.',
    ],
    features: ['Original hardwood', 'Private garden', 'Updated systems', 'Detached garage', 'Central air'],
    amenities: ['Washer/dryer included', 'Garden care included', 'Pet-friendly', 'Off-street parking', 'Walk to cafes'],
    areaInfo:
      'Sunset Junction is the heart of Eastside living: indie shops, coffee culture, and hillside views.',
  },
  {
    id: 'p24',
    slug: 'sacramento-family-rental',
    name: 'Sacramento Family Rental',
    address: '3812 Portage Bay Avenue',
    location: 'California',
    area: 'Natomas, Sacramento',
    type: 'Single-Family',
    price: 2650,
    listingType: 'For Rent',
    beds: 4,
    baths: 2,
    sqft: 1850,
    featured: false,
    images: gallery('natomas', 5),
    description: [
      'A spacious family rental with a downstairs bedroom and full bath, an oversized kitchen, and a low-maintenance yard.',
      'Near the airport corridor and downtown Sacramento with easy freeway access.',
    ],
    features: ['Downstairs bedroom', 'Oversized kitchen', 'Walk-in pantry', 'Covered patio', 'Ceiling fans'],
    amenities: ['Fenced backyard', 'Two-car garage', 'Sprinkler system', 'Pet-friendly', 'Solar lease included'],
    areaInfo:
      'Natomas offers family value close to downtown Sacramento with parks and top-rated schools.',
  },
  {
    id: 'p25',
    slug: 'san-francisco-victorian-condo',
    name: 'San Francisco Victorian Condo',
    address: '815 Guerrero Street, Unit 2',
    location: 'California',
    area: 'Mission District, San Francisco',
    type: 'Condo',
    price: 1295000,
    listingType: 'For Sale',
    beds: 2,
    baths: 1,
    sqft: 980,
    featured: false,
    images: gallery('mission', 8),
    description: [
      'A floor-through condo in a landmarked Victorian: parlors-high ceilings, decorative millwork, and a shared patio garden.',
      'One block from Dolores Park in the Mission\'s restaurant core.',
    ],
    features: ['Landmarked Victorian', 'High ceilings', 'Decorative millwork', 'Shared patio', 'Period detail'],
    amenities: ['Low HOA', 'Shared garden', 'Storage', 'Walk Score 98', 'Near BART'],
    areaInfo:
      'The Mission District is San Francisco\'s cultural engine: food, murals, and sunny Dolores Park at the doorstep.',
  },
  {
    id: 'p26',
    slug: 'atlanta-westside-townhouse-rental',
    name: 'Atlanta Westside Townhouse Rental',
    address: '1170 Howell Mill Road NW, Unit 14',
    location: 'Georgia',
    area: 'West Midtown, Atlanta',
    type: 'Townhouse',
    price: 3100,
    listingType: 'For Rent',
    beds: 2,
    baths: 2.5,
    sqft: 1420,
    featured: false,
    images: gallery('westmidtown', 4),
    description: [
      'A three-level townhouse near the Westside Provisions District: rooftop terrace, two-car garage, and a chef\'s kitchen.',
      'Walk to Atlanta\'s best restaurants; the BeltLine is a five-minute bike ride.',
    ],
    features: ['Rooftop terrace', 'Two-car garage', 'Chef\'s kitchen', 'Hardwood stairs', 'Smart locks'],
    amenities: ['Gated community', 'Fitness center', 'Dog park', 'Package room', 'BeltLine access'],
    areaInfo:
      'West Midtown is Atlanta\'s design and dining district, minutes to Georgia Tech and downtown.',
  },
  {
    id: 'p27',
    slug: 'savannah-historic-district-home',
    name: 'Savannah Historic District Home',
    address: '214 E Gaston Street',
    location: 'Georgia',
    area: 'Historic District, Savannah',
    type: 'Single-Family',
    price: 1150000,
    listingType: 'For Sale',
    beds: 4,
    baths: 3.5,
    sqft: 3400,
    featured: true,
    images: gallery('savannah', 10),
    description: [
      'A rare federally-listed Savannah townhome steps from Forsyth Park: double parlors, a courtyard fountain, and a carriage house.',
      'Restored with modern systems while preserving museum-quality period detail.',
    ],
    features: ['Double parlors', 'Courtyard fountain', 'Carriage house', 'Restored systems', 'Period mantels'],
    amenities: ['Courtyard garden', 'Wine cellar', 'Guest suite', 'Off-street parking', 'Walk to Forsyth Park'],
    areaInfo:
      'Savannah\'s Historic District offers moss-draped squares and architecture found nowhere else in America.',
  },
  {
    id: 'p28',
    slug: 'alpharetta-new-construction',
    name: 'Alpharetta New Construction',
    address: '5220 Windward Parkway Lane',
    location: 'Georgia',
    area: 'Alpharetta',
    type: 'New Construction',
    price: 645000,
    listingType: 'For Sale',
    beds: 5,
    baths: 4,
    sqft: 3200,
    featured: false,
    images: gallery('alpharetta', 15),
    description: [
      'A five-bedroom new build in the Windward corridor: owner\'s suite on the main, a finished terrace level, and a screened porch.',
      'Zoned to top-rated Alpharetta schools minutes from corporate campuses.',
    ],
    features: ['Owner\'s suite on main', 'Finished terrace level', 'Screened porch', 'Quartz kitchen', 'Smart home package'],
    amenities: ['Community pool', 'Clubhouse', 'Tennis courts', 'Sidewalked streets', 'Award-winning schools'],
    areaInfo:
      'Alpharetta pairs top schools and corporate employers with new-home value north of Atlanta.',
  },
];

export const PROPERTY_TYPES: PropertyType[] = [
  'Single-Family',
  'Condo',
  'Townhouse',
  'Multi-Family',
  'Apartment',
  'New Construction',
];

export const getPropertyBySlug = (slug: string | undefined) =>
  PROPERTIES.find((p) => p.slug === slug);

export const getFeatured = () => PROPERTIES.filter((p) => p.featured);

export const byLocation = (location: LocationName) =>
  PROPERTIES.filter((p) => p.location === location);

export const formatPrice = (n: number) =>
  '$' + n.toLocaleString('en-US');

/** Price line for a listing: rent shows "/month". */
export const formatListingPrice = (p: Property) =>
  p.listingType === 'For Rent' ? `${formatPrice(p.price)}/mo` : formatPrice(p.price);

export const formatPriceShort = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2).replace(/\.?0+$/, '')}M`
    : `$${Math.round(n / 1000)}K`;

/** Full location line including street address. */
export const fullAddress = (p: Property) =>
  `${p.address}, ${p.area}, ${p.location}`;

/**
 * Build a responsive srcSet from an Unsplash URL so each device downloads
 * only the width it needs (browser still receives modern AVIF/WebP via
 * auto=format). Variants keep the same 3:2 crop as the source.
 */
export const imageSrcSet = (url: string, widths = [600, 900, 1200, 1600]): string =>
  widths
    .map((w) => {
      const h = Math.round((w * 2) / 3);
      const variant = url.replace(/w=\d+/, `w=${w}`).replace(/h=\d+/, `h=${h}`);
      return `${variant} ${w}w`;
    })
    .join(', ');
