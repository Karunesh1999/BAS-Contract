import type {
  DetailedReviewItem,
  ReviewCategory,
} from '../types'

export const REVIEWS_PAGE_HERO = {
  breadcrumb: 'Client Reviews & Testimonials',
  badge: 'CSLB #1092902 • 100% VERIFIED CLIENT REVIEWS • NORTH COUNTY SAN DIEGO',
  title: 'Proven Craftsmanship, Verified by North County Homeowners',
  description:
    'Read authentic, uncensored experiences from property owners across Vista, Carlsbad, Oceanside, Encinitas, and San Marcos who trusted Belen Silva and BAS General Contractor Inc. with custom ADUs, structural additions, luxury remodels, and retaining walls.',
}

export const REVIEWS_SCORECARD_DATA = {
  googleScore: '5.0',
  ratingLabel: 'Based on 100% 5-Star verified client submissions',
  breakdown: [
    { stars: '5 Stars', percent: 100, barWidth: 'w-full' },
    { stars: '4 Stars', percent: 0, barWidth: 'w-0' },
    { stars: '3 Stars', percent: 0, barWidth: 'w-0' },
  ],
  metrics: [
    {
      subtitle: 'Inspection Record',
      title: 'First-Pass Inspections',
      value: '100%',
      desc: 'Zero structural citation holds across Vista, Carlsbad, Oceanside, and Encinitas building departments.',
      icon: 'verified',
    },
    {
      subtitle: 'Licensing Status',
      title: 'Class B General Building',
      value: 'CSLB #1092902',
      desc: "Bonded, workers' comp current, and backed by a comprehensive $2,000,000 General Liability policy.",
      icon: 'shield',
    },
    {
      subtitle: 'Supervision Standard',
      title: 'Bilingual Site Leadership',
      value: 'Daily',
      desc: 'Owner Belen Silva directly manages sub-trades and keeps direct homeowner communication active daily.',
      icon: 'engineering',
    },
    {
      subtitle: 'Repeat Client Ratio',
      title: 'Long-term Client Trust',
      value: '7+ Years',
      desc: 'Multi-phase renovations for long-standing coastal families who rely exclusively on BAS for residential needs.',
      icon: 'handshake',
    },
  ],
}

export const REVIEWS_FILTER_TABS: {
  id: ReviewCategory
  label: string
  count: number
}[] = [
  { id: 'all', label: 'All Reviews', count: 9 },
  { id: 'adu', label: 'ADU & Additions', count: 2 },
  { id: 'remodel', label: 'Kitchen & Bath', count: 3 },
  { id: 'structural', label: 'Walls & Structural', count: 2 },
  { id: 'deck', label: 'Balconies & Coastal', count: 2 },
]

export const DETAILED_REVIEWS_LIST: DetailedReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Christina Barney',
    initials: 'CB',
    initialsBg: 'bg-blue-100',
    initialsTextColor: 'text-[#0051d5]',
    location: 'Oceanside, CA',
    rating: 5,
    dateLabel: '1 YEAR AGO',
    dateIso: '2024-02',
    tags: [
      { label: 'CUSTOM ARCHWAY & GLASS ENTRY', highlight: false },
      { label: '2-WEEK TIMELINE', highlight: true },
    ],
    reviewText:
      '“BAS General Contractor absolutely exceeded my hopes and expectations for my new front glass door install. They beautifully created an arch for the door and made it look so seamless. They were prompt, clean, and highly professional throughout the entire build.”',
    response: {
      author: 'Belen Silva',
      role: 'Owner, BAS General Contractor Inc.',
      text: '“Christina, framing an archway into existing coastal stucco requires meticulous geometry. We are thrilled your entryway looks so organic to the home!”',
    },
    category: 'remodel',
    scale: 3,
  },
  {
    id: 'rev-2',
    author: 'Alicia Enriquez',
    initials: 'AE',
    initialsBg: 'bg-emerald-100',
    initialsTextColor: 'text-emerald-700',
    location: 'Vista, CA',
    rating: 5,
    dateLabel: '1 YEAR AGO',
    dateIso: '2024-01',
    tags: [
      { label: 'COMPLETE MASTER BATHROOM', highlight: false },
      { label: 'ZERO WATERPROOFING LEAKS', highlight: true },
    ],
    reviewText:
      '“Thanks to Belen and her team my bathroom came out amazing! Very reliable, trustworthy, honest, clean and hard working. I would highly recommend them to anyone in North County looking for high craftsmanship.”',
    response: {
      author: 'Belen Silva',
      role: 'Owner, BAS General Contractor Inc.',
      text: '“Muchísimas gracias, Alicia! Ensuring daily job site cleanliness and accurate tile waterproofing is our team’s absolute rule.”',
    },
    category: 'remodel',
    scale: 2,
  },
  {
    id: 'rev-3',
    author: 'Joshua R.',
    initials: 'JR',
    initialsBg: 'bg-amber-100',
    initialsTextColor: 'text-amber-800',
    location: 'Encinitas, CA',
    rating: 5,
    dateLabel: '2 YEARS AGO',
    dateIso: '2023-10',
    tags: [
      { label: 'STRUCTURAL BALCONY RETROFIT', highlight: false },
      { label: 'COASTAL CORROSION SHIELD', highlight: true },
    ],
    reviewText:
      '“Belen is an exceptional contractor who consistently demonstrates high efficiency and organization. Most importantly, she is incredibly trustworthy. Initially recommended to us through family, Belen has completed projects on schedule and within budget.”',
    response: {
      author: 'Belen Silva',
      role: 'Owner, BAS General Contractor Inc.',
      text: '“Joshua, coastal structures need stainless hardware and special flashing. It was an honor working with your family again!”',
    },
    category: 'deck',
    scale: 4,
  },
  {
    id: 'rev-4',
    author: 'Margarita Muñoz',
    initials: 'MM',
    initialsBg: 'bg-purple-100',
    initialsTextColor: 'text-purple-800',
    location: 'San Marcos, CA',
    rating: 5,
    dateLabel: '2 YEARS AGO',
    dateIso: '2023-08',
    tags: [
      { label: 'MULTI-PROJECT HOME (7+ YRS)', highlight: false },
      { label: 'ELECTRICAL & FLOORS', highlight: true },
    ],
    reviewText:
      '“I have known this company for over 7 years. They are reliable, trustworthy, honest and very hard working. They\'re very clean and thorough on their work. I have called them for electric, floors, remodeling and they always perform at the highest standard.”',
    response: {
      author: 'Belen Silva',
      role: 'Owner, BAS General Contractor Inc.',
      text: '“Margarita, having your ongoing trust for more than 7 years is the highest badge of honor our crew could ever ask for!”',
    },
    category: 'structural',
    scale: 5,
  },
  {
    id: 'rev-5',
    author: 'Robert & Elena Hansen',
    initials: 'RH',
    initialsBg: 'bg-[#0051d5]',
    initialsTextColor: 'text-white',
    location: 'Vista, CA (Foothill Dr)',
    rating: 5,
    dateLabel: 'RECENT VERIFIED',
    dateIso: '2024-04',
    tags: [
      { label: '800 SQ FT DETACHED ADU', highlight: true },
      { label: 'TURNKEY CITY APPROVAL', highlight: false },
    ],
    reviewText:
      '“Navigating San Diego County ADU permits felt daunting until BAS took over. Belen handled city hall, structural engineering, trenching, and utility connections seamlessly. Passed all inspections on the first visit! Our rental income is now flowing.”',
    response: {
      author: 'Belen Silva',
      role: 'Owner, BAS General Contractor Inc.',
      text: '“Elena and Robert, having clean structural drawings upfront guarantees fast permitting. Congratulations on your completed unit!”',
    },
    category: 'adu',
    scale: 5,
  },
  {
    id: 'rev-6',
    author: 'Nam Shin',
    initials: 'NS',
    initialsBg: 'bg-sky-100',
    initialsTextColor: 'text-sky-800',
    location: 'Carlsbad, CA',
    rating: 5,
    dateLabel: '1 YEAR AGO',
    dateIso: '2023-11',
    tags: [
      { label: 'WHOLE-HOME LVP & BASEBOARDS', highlight: false },
      { label: 'PRECISION LEVELING', highlight: true },
    ],
    reviewText:
      '“Work completed as expected. Super Satisfied with thanks! Belen oversaw all floor leveling and acoustic underlayment personally before a single plank was installed.”',
    response: {
      author: 'Belen Silva',
      role: 'Owner, BAS General Contractor Inc.',
      text: '“Thank you, Nam! Proper concrete subfloor prep is what makes flooring last 25+ years.”',
    },
    category: 'remodel',
    scale: 2,
  },
  {
    id: 'rev-7',
    author: 'David Miller',
    initials: 'DM',
    initialsBg: 'bg-slate-200',
    initialsTextColor: 'text-slate-900',
    location: 'Fallbrook / Bonsall Border',
    rating: 5,
    dateLabel: 'VERIFIED STORY',
    dateIso: '2024-03',
    tags: [
      { label: '120-FT CMU RETAINING WALL', highlight: false },
      { label: 'SLOPE STABILIZATION', highlight: true },
    ],
    reviewText:
      '“Living on a steep slope, hillside erosion was threatening our driveway. BAS engineered a heavy-duty retaining wall with gravel backfill and weep holes. Super solid craftsmanship and transparent itemized pricing.”',
    response: {
      author: 'Belen Silva',
      role: 'Owner, BAS General Contractor Inc.',
      text: '“David, proper hydrostatic relief is critical for North County hillsides. Glad your property is secured for the rainy season!”',
    },
    category: 'structural',
    scale: 4,
  },
  {
    id: 'rev-8',
    author: 'Sofia & Marcus Keller',
    initials: 'SK',
    initialsBg: 'bg-indigo-100',
    initialsTextColor: 'text-indigo-800',
    location: 'Carlsbad, CA (Aviara)',
    rating: 5,
    dateLabel: 'LATEST PROJECT',
    dateIso: '2024-05',
    tags: [
      { label: 'LOAD-BEARING WALL REMOVAL', highlight: false },
      { label: 'OPEN CONCEPT KITCHEN', highlight: true },
    ],
    reviewText:
      '“Removing a central load-bearing wall required city structural calculations and custom steel header installation. Belen coordinated everything without any disruption. Our new quartz kitchen island is stunning.”',
    response: {
      author: 'Belen Silva',
      role: 'Owner, BAS General Contractor Inc.',
      text: '“Sofia, recessed steel beams make such a dramatic architectural transformation. Enjoy the open entertaining space!”',
    },
    category: 'adu',
    scale: 4,
  },
  {
    id: 'rev-9',
    author: 'Hector Ramirez',
    initials: 'HR',
    initialsBg: 'bg-slate-900',
    initialsTextColor: 'text-white',
    location: 'Solana Beach, CA',
    rating: 5,
    dateLabel: 'SB 721 COMPLIANT',
    dateIso: '2023-12',
    tags: [
      { label: 'BALCONY WATERPROOFING', highlight: false },
      { label: 'STRUCTURAL JOIST REPAIR', highlight: true },
    ],
    reviewText:
      '“Living along the coast degrades exterior joists rapidly. BAS retrofitted framing, installed waterproof membrane, and finished with clean railings. Honest, punctual, and bilingual communication throughout.”',
    response: {
      author: 'Belen Silva',
      role: 'Owner, BAS General Contractor Inc.',
      text: '“Hector, thank you! Ensuring elevated decks are 100% structurally safe and weather-tight is our duty under California building code.”',
    },
    category: 'deck',
    scale: 3,
  },
]

export const REVIEWS_SPOTLIGHT_DATA = {
  videoTitle: 'Arcadia Ave Homeowner Walkthrough (4:18)',
  location: 'Vista, CA',
  videoThumbnail: '/images/reviews/walkthrough-preview.jpg',
  alt: 'Modern architectural ADU home completed in Vista California with clean stucco siding and landscaping',
  kicker: 'FIELD SUPERVISION PHILOSOPHY',
  headline: '“When you hire BAS, Belen is on your job site every single morning.”',
  description:
    'Most general contracting firms sell your project and pass the framing to nameless subcontractors. At BAS General Contractor Inc., owner Belen Silva supervises every structural header, concrete pour, and final trim detail in person.',
  points: [
    {
      title: 'Fixed-Fee',
      desc: 'Transparent milestone billing with no surprise change orders.',
    },
    {
      title: '100% Clean',
      desc: 'Daily broom-clean job site guarantee for peace of mind.',
    },
  ],
}

export const STAR_RATING_LABELS: Record<number, string> = {
  1: '1.0 - Needs Improvement',
  2: '2.0 - Below Expectations',
  3: '3.0 - Satisfactory Work',
  4: '4.0 - High Quality Build',
  5: '5.0 - Exceptional Quality & Communication',
}
