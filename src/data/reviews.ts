/**
 * Wesley Housing: client testimonials.
 *
 * Add, edit, or remove reviews here. Each record feeds the homepage
 * carousel, the Reviews page, and location pages automatically.
 */

export type LocationName =
  | 'New York'
  | 'Florida'
  | 'Illinois'
  | 'Texas'
  | 'California'
  | 'Georgia';

export interface Review {
  id: string;
  name: string;
  location: LocationName;
  area: string;
  rating: 5;
  date: string; // ISO
  text: string;
  topic: 'realtor' | 'property' | 'process';
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('');

/** Deterministic pleasant avatar hue per name. */
export const avatarHue = (name: string) => {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) % 360;
  return h;
};

export const getInitials = initials;

const r = (
  id: string,
  name: string,
  location: LocationName,
  area: string,
  date: string,
  topic: Review['topic'],
  text: string
): Review => ({ id, name, location, area, rating: 5, date, topic, text });

export const REVIEWS: Review[] = [
  // New York
  r('r01', 'Amara Osei', 'New York', 'Brooklyn', '2026-08-14', 'realtor',
    'Mr. Believe Pessar made our first Brooklyn purchase feel calm instead of chaotic. He walked us through every number, flagged the co-op questions we never would have thought to ask, and negotiated confidently on our behalf. We always felt like his only clients.'),
  r('r02', 'Daniel Reyes', 'New York', 'Queens', '2026-07-30', 'process',
    'From the first search to the closing table, everything was organized and transparent. Wesley Housing\'s follow-up is unmatched. Every document arrived early, every question answered the same day.'),
  r('r03', 'Priya Natarajan', 'New York', 'Manhattan', '2026-07-11', 'property',
    'The listing presentation was beautiful and honest. No hype, no pressure, just a clear view of the building, the board process, and what our money could realistically do. We found a co-op we love.'),
  r('r04', 'Marcus Whitfield', 'New York', 'Park Slope', '2026-06-22', 'realtor',
    'Believe Pessar is exactly what his name promises. He believed in our budget when we didn\'t, and found us a garden-level home we now can\'t imagine leaving.'),
  r('r05', 'Lena Kowalski', 'New York', 'Westchester', '2026-06-05', 'property',
    'We toured nine houses in two days, each one thoughtfully matched to our list. The school-district research he prepared saved us weeks. Truly professional service.'),
  r('r06', 'Andre Baptiste', 'New York', 'Long Island', '2026-05-19', 'process',
    'Selling our parents\' home could have been overwhelming. Wesley Housing handled staging guidance, timeline, and buyers\' questions with total grace. The closing went exactly as planned.'),
  r('r07', 'Sofia Marchetti', 'New York', 'Brooklyn Heights', '2026-05-02', 'realtor',
    'Responsive, prepared, and genuinely kind. He sent us a shortlist within hours, not weeks, and told us candidly when a unit was overpriced. That honesty earned our trust completely.'),
  r('r08', 'Jamal Carter', 'New York', 'Harlem', '2026-04-15', 'property',
    'The market analysis he shared before our offer was the most thorough I\'ve seen: comparable sales, monthly-cost breakdowns, renovation considerations. We offered with confidence and won.'),
  r('r09', 'Grace Liu', 'New York', 'Forest Hills', '2026-03-28', 'process',
    'As a first-time buyer I asked a hundred questions. Every one was answered patiently, in plain English. The whole team treats people like neighbors, not transactions.'),
  r('r10', 'Ethan Brooks', 'New York', 'Astoria', '2026-03-09', 'realtor',
    'Believe Pessar negotiated a credit that covered our entire moving budget. Calm under pressure and sharp with details, exactly who you want on your side of the table.'),
  r('r11', 'Nadia Haddad', 'New York', 'Riverdale', '2026-02-18', 'property',
    'We relocated from out of state and saw this home once, virtually, before flying in. The video tour and neighborhood guide Wesley Housing prepared were so complete that we signed the day we arrived.'),
  r('r12', 'Victor Osei-Bonsu', 'New York', 'Flatbush', '2026-01-30', 'process',
    'Our multi-family purchase had a dozen moving parts. They coordinated lenders, attorneys, and inspectors without a single missed beat. Impeccable professionalism.'),

  // Florida
  r('r13', 'Isabella Fernandez', 'Florida', 'Coconut Grove', '2026-08-21', 'realtor',
    'Mr. Believe Pessar listened, really listened, to what our family needed. Every home he showed us fit our life. He even mapped school runs and weekend routines for us. A true professional.'),
  r('r14', 'Robert Callahan', 'Florida', 'Tampa', '2026-08-03', 'property',
    'The inspection timeline and insurance questions were handled before I could worry about them. Wesley Housing made a Florida purchase from out of state feel completely secure.'),
  r('r15', 'Chloe Anderson', 'Florida', 'Sarasota', '2026-07-17', 'realtor',
    'We interviewed three agents. Believe Pessar\'s market knowledge and warm, straightforward manner made the decision easy. He found our gulf-view condo before it hit the big portals.'),
  r('r16', 'James Okafor', 'Florida', 'Orlando', '2026-06-29', 'process',
    'New construction can be a maze of upgrade decisions. He sat with us through every builder meeting and protected us on options we didn\'t need. Money well saved.'),
  r('r17', 'Maria Delgado', 'Florida', 'Miami', '2026-06-12', 'property',
    'Our waterfront townhouse search took four months and he never once pushed us. When the right place appeared, he moved fast and negotiated a fair price. Pure class.'),
  r('r18', 'Thomas Weiss', 'Florida', 'Jacksonville', '2026-05-25', 'realtor',
    'Kind, knowledgeable, and tireless. He answered every late-night text and made our relocation feel like we had family on the ground in Florida.'),
  r('r19', 'Aaliyah Grant', 'Florida', 'St. Petersburg', '2026-05-08', 'process',
    'The closing-day checklist Wesley Housing prepared was gold. Nothing surprised us: not fees, not timelines, not paperwork. Smooth as glass.'),
  r('r20', 'Henrik Johansson', 'Florida', 'Naples', '2026-04-20', 'realtor',
    'Elegant, honest, and effective. He told us when to wait, when to move, and never wasted our time on homes that didn\'t fit. A rare quality in this business.'),
  r('r21', 'Danielle Fournier', 'Florida', 'Boca Raton', '2026-04-01', 'property',
    'Every property tour came with a printed analysis covering HOA, taxes, and insurance estimates. We compared homes like an investor and bought like a family. Perfect balance.'),
  r('r22', 'Kevin O\'Leary', 'Florida', 'Winter Park', '2026-03-14', 'realtor',
    'Believe Pessar\'s integrity stands out. He pointed out flaws in a house we loved, which saved us from a costly mistake, then found us a better one a week later.'),
  r('r23', 'Yvonne Mensah', 'Florida', 'Wesley Chapel', '2026-02-24', 'process',
    'From offer to keys in 31 days. His vendor list, from inspector to insurance agent to handyman, was worth its weight in gold. First-class service.'),
  r('r24', 'Carlos Mendes', 'Florida', 'Fort Lauderdale', '2026-02-05', 'realtor',
    'We were nervous first-time buyers with a hundred what-ifs. He turned every worry into a checklist and every checklist into a done item. We love our home.'),

  // Illinois
  r('r25', 'Natalie Kaczmarek', 'Illinois', 'Naperville', '2026-08-27', 'realtor',
    'Professional from hello. He knew the Naperville market cold, prepared us for the property-tax math, and negotiated a beautiful price on our family home.'),
  r('r26', 'David Osei', 'Illinois', 'Lincoln Park', '2026-08-09', 'property',
    'The condo search in the city can be exhausting. He narrowed it to five buildings that actually matched our criteria. Every tour was worth our time.'),
  r('r27', 'Ruth Goldberg', 'Illinois', 'Evanston', '2026-07-22', 'process',
    'Selling a home we\'d lived in for decades was emotional. Wesley Housing treated our story with respect and our timeline with discipline. Flawless closing.'),
  r('r28', 'Michael Torres', 'Illinois', 'Oak Park', '2026-07-04', 'realtor',
    'Believe Pessar helped us see the potential in a prairie-style two-flat, with vision and a spreadsheet. We\'re homeowners because of his guidance.'),
  r('r29', 'Angela Whitmore', 'Illinois', 'Schaumburg', '2026-06-16', 'property',
    'His Saturday tour itinerary was a masterclass: six homes, mapped logically, with notes on each. We made an offer that afternoon and it was accepted.'),
  r('r30', 'Samuel Adeyemi', 'Illinois', 'Logan Square', '2026-05-29', 'realtor',
    'Straight-talking and deeply prepared. He explained each contract clause before we signed, and everything happened exactly as he said it would.'),
  r('r31', 'Karen Nowak', 'Illinois', 'Arlington Heights', '2026-05-11', 'process',
    'The communication was constant but never pushy. Every step had a clear owner, date, and status. The most organized transaction of any kind I\'ve experienced.'),
  r('r32', 'Brian Fitzgerald', 'Illinois', 'Wicker Park', '2026-04-22', 'realtor',
    'He found the gem on our street before others noticed it, moved decisively, and kept our offer clean and competitive. Couldn\'t recommend Wesley Housing more.'),
  r('r33', 'Tanya Roberts', 'Illinois', 'Hyde Park', '2026-04-03', 'property',
    'The neighborhood guide they prepared, with parks, transit, and schools, helped us choose with confidence. The home has been everything promised.'),
  r('r34', 'Peter Vargas', 'Illinois', 'Des Plaines', '2026-03-15', 'realtor',
    'Courteous, candid, and committed. He treated our modest budget with the same care I\'d expect on a luxury purchase. That character is rare.'),
  r('r35', 'Michelle Duong', 'Illinois', 'River North', '2026-02-26', 'process',
    'Remote closing, out-of-state buyer, zero problems. Documents explained in advance, signed on schedule, keys on time. Remarkably smooth.'),
  r('r36', 'Gregory Sanders', 'Illinois', 'Beverly', '2026-02-08', 'realtor',
    'Mr. Believe Pessar is the standard other agents should be measured against. Loyal to his clients, respectful of everyone, and excellent at what he does.'),

  // Texas
  r('r37', 'Ashley Thomason', 'Texas', 'South Austin', '2026-08-25', 'realtor',
    'Relocating to Austin felt effortless with Believe Pessar guiding the search. He knew which neighborhoods fit our budget and commute, and he was right every time.'),
  r('r38', 'Marcus Dupree', 'Texas', 'Uptown Dallas', '2026-08-06', 'property',
    'He found our Uptown apartment before it hit the portals and negotiated a lower rate with a flexible lease. Exactly the advocate we needed.'),
  r('r39', 'Priyanka Raman', 'Texas', 'Cypress, Houston', '2026-07-19', 'process',
    'New construction in Texas means a hundred decisions. He handled the builder meetings, flagged the upgrades worth paying for, and saved us thousands.'),
  r('r40', 'Jordan Whitfield', 'Texas', 'Fort Worth', '2026-06-27', 'realtor',
    'Straightforward, responsive, and genuinely invested in our outcome. Our Fort Worth sale closed above asking in a weekend.'),
  r('r41', 'Elena Vasquez', 'Texas', 'San Antonio', '2026-06-02', 'process',
    'As first-time buyers we needed hand-holding through inspections and insurance quotes. Wesley Housing delivered clarity at every step.'),
  r('r42', 'Tom Beckett', 'Texas', 'Plano', '2026-05-15', 'property',
    'The market analysis he prepared was the difference between guessing and knowing. We bought with confidence and the numbers played out exactly as projected.'),

  // California
  r('r43', 'Sophia Lindqvist', 'California', 'Pacific Beach, San Diego', '2026-08-30', 'property',
    'Buying near the coast is competitive, and Believe Pessar moved fast without ever making us feel rushed. Our condo had three offers in a day; his strategy won it.'),
  r('r44', 'Daniel Okafor', 'California', 'Sunset Junction, Los Angeles', '2026-08-11', 'realtor',
    'He understood the Los Angeles rental market at street level: block by block, building by building. We signed a lease we love at a fair price.'),
  r('r45', 'Hannah Meyer', 'California', 'Natomas, Sacramento', '2026-07-24', 'process',
    'Remote relocation from Chicago, and every detail was handled: video tours, utility setups, even school research. Remarkable service.'),
  r('r46', 'Kevin Almeida', 'California', 'Mission District, San Francisco', '2026-07-02', 'realtor',
    'The San Francisco market rewards preparation, and no one prepares like Mr. Believe Pessar. Our offer was accepted because his was the cleanest package on the table.'),
  r('r47', 'Renee Calloway', 'California', 'Orange County', '2026-06-14', 'property',
    'He talked us out of a house with foundation issues that two other agents had glossed over. That honesty saved us six figures.'),
  r('r48', 'Andre Silva', 'California', 'Berkeley', '2026-05-21', 'process',
    'From disclosure review to closing, everything arrived early and explained. The most organized California purchase I have ever made.'),

  // Georgia
  r('r49', 'Camille Rousseau', 'Georgia', 'Historic District, Savannah', '2026-08-18', 'property',
    'Buying a historic home requires a specialist, and he knew exactly which preservation questions to ask. Our Savannah townhome is everything promised.'),
  r('r50', 'Jamal Whitmore', 'Georgia', 'West Midtown, Atlanta', '2026-07-29', 'realtor',
    'Believe Pessar found our Westside townhouse rental in a weekend and negotiated improvements before move-in. Landlords respect him, and it shows.'),
  r('r51', 'Laura Jenkins', 'Georgia', 'Alpharetta', '2026-07-08', 'process',
    'New construction closing with eleven moving parts, zero missed deadlines. He coordinated builder, lender, and attorney seamlessly.'),
  r('r52', 'Victor Nwosu', 'Georgia', 'Athens', '2026-06-20', 'realtor',
    'Honest about resale value, honest about condition, honest about price. His candor earned our trust and our business.'),
  r('r53', 'Bethany Cole', 'Georgia', 'Marietta', '2026-05-30', 'process',
    'Selling from out of state could have been chaos. Wesley Housing managed staging, showings, and paperwork with total professionalism.'),
  r('r54', 'Owen Gallagher', 'Georgia', 'Decatur', '2026-05-06', 'realtor',
    'Patient with our endless questions and tireless with the search. He treated our starter-home budget like a luxury purchase.'),
];

export const getReviewsByLocation = (location: LocationName | 'All') =>
  location === 'All' ? REVIEWS : REVIEWS.filter((rv) => rv.location === location);

export const averageRating = REVIEWS.reduce((s, rv) => s + rv.rating, 0) / REVIEWS.length;
