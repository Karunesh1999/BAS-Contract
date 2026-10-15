import type { FaqItem, FaqCategory } from '../types'

export const FAQ_CATEGORIES: { id: FaqCategory; label: string; count?: number }[] = [
  { id: 'all', label: 'All Questions' },
  { id: 'licensing', label: 'Licensing & Permits' },
  { id: 'adus', label: 'ADUs & Additions' },
  { id: 'remodeling', label: 'Remodeling & Structural' },
  { id: 'pricing', label: 'Pricing & Contracts' },
]

export const ABOUT_FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-license-insurance',
    question: 'Is BAS General Contractor Inc. fully licensed, bonded, and insured in California?',
    answer:
      'Yes, 100%. We hold active California State License Board (CSLB) Class B General Building Contractor License #1092902 (activated June 17, 2022). We carry full state-mandated surety bonding, $2,000,000 in comprehensive General Liability coverage, and full Workers’ Compensation for all crew members. This protects homeowners from any potential jobsite liability or property damage.',
    category: 'licensing',
    categoryLabel: 'Licensing & Compliance',
    highlight: 'CSLB Class B #1092902 • $2M Liability Coverage',
  },
  {
    id: 'faq-onsite-supervision',
    question: 'Does founder Belen Silva personally oversee job sites, or is work outsourced?',
    answer:
      'Belen Silva provides direct, hands-on leadership on every project. With over three decades of boots-on-the-ground construction experience since 1991—spanning multi-unit maintenance, concrete framing, and HOA remediation—Belen personally checks string lines, footing depths, framing plumb, and waterproofing before city inspectors arrive. Your home is never handed off to third-party salesmen or disconnected project managers.',
    category: 'licensing',
    categoryLabel: 'Jobsite Oversight',
    highlight: 'Direct Hands-On Oversight on Every Project',
  },
  {
    id: 'faq-permits-cities',
    question: 'Who handles the municipal building permits with city planning departments?',
    answer:
      'We manage the entire municipal permit process from start to finish. Our team has deep, long-standing working relationships with municipal building departments across Vista, Carlsbad, Oceanside, Encinitas, San Marcos, and Escondido. We submit architectural blueprints, coordinate structural engineering reviews, manage plan-check revisions, pull the official building permit, and schedule all required municipal inspections through to final occupancy sign-off.',
    category: 'licensing',
    categoryLabel: 'Permits & Municipal Code',
    highlight: '100% Turnkey City Permitting Across North County',
  },
  {
    id: 'faq-adu-types',
    question: 'What types of ADUs and JADUs can you build under California law?',
    answer:
      'We build all California state-approved ADU configurations (under AB 1033, SB 9, and municipal guidelines): detached ground-up guest houses up to 1,200 sq ft, attached second-story or lateral additions, garage conversions, and interior Junior ADUs (JADUs up to 500 sq ft with efficiency kitchens). Our turnkey service covers site grading, utility trenching (water, sewer, 200A electrical upgrades), framing, and luxury interior finishes.',
    category: 'adus',
    categoryLabel: 'ADU & JADU Construction',
    highlight: 'Detached, Attached & Garage Conversions up to 1,200 sq ft',
  },
  {
    id: 'faq-adu-timeline',
    question: 'How long does an ADU or structural room addition typically take to build?',
    answer:
      'Once municipal permits are issued by your local city building department, actual construction typically takes 10 to 16 weeks. A standard two-car garage conversion typically completes in 8 to 12 weeks, while a ground-up 750–1,200 sq ft detached ADU with grading and utility tie-ins takes approximately 12 to 16 weeks. We provide clear milestone timelines so you always know what to expect.',
    category: 'adus',
    categoryLabel: 'Timelines & Scheduling',
    highlight: 'Average Build: 10–16 Weeks Post-Permit',
  },
  {
    id: 'faq-load-bearing-walls',
    question: 'Can you safely remove interior load-bearing walls for an open floor plan?',
    answer:
      'Yes, structural modifications are a core specialty. We work with licensed structural engineers to calculate loads, install temporary shoring walls, and insert concealed steel flitch plates or heavy-duty LVL (laminated veneer lumber) micro-lam beams. We pull structural permits and guarantee full seismic and California Building Code compliance while creating wide-open culinary and living spaces.',
    category: 'remodeling',
    categoryLabel: 'Structural Remodeling',
    highlight: 'Concealed Steel Flitch Beams & Certified Engineering',
  },
  {
    id: 'faq-retaining-walls',
    question: 'Do you build civil retaining walls and hillside erosion control systems?',
    answer:
      'Yes. North County topography often features steep, unbuildable coastal hillsides. We engineer and construct heavy-duty concrete masonry unit (CMU) retaining walls up to 120+ linear feet, reinforced with rebar cages and 3,000 PSI concrete grout. Every wall features integrated perforated French drain lines, waterproof membrane backing, crushed aggregate backfill, and hydrostatic weep holes to stop soil slippage and foundation damage.',
    category: 'remodeling',
    categoryLabel: 'Civil & Earth Retention',
    highlight: 'Rebar-Reinforced CMU Walls with French Drainage',
  },
  {
    id: 'faq-balcony-deck',
    question: 'Do you perform California SB 721 and SB 326 balcony and deck restorations?',
    answer:
      'Yes. In coastal Southern California, marine air causes severe concealed joist decay and dry rot. We inspect, repair, and resurface exterior elevated elements including multi-family balconies, cantilevered decks, and view railings. We apply elastomeric waterproof pedestrian coatings, replace rotted framing with marine-grade fasteners, and ensure full compliance with California deck safety laws.',
    category: 'remodeling',
    categoryLabel: 'Balcony & Deck Safety',
    highlight: 'SB 721 & SB 326 Compliant Structural Assessments',
  },
  {
    id: 'faq-bids-change-orders',
    question: 'How are estimates structured? Will I be hit with surprise change orders?',
    answer:
      'We believe in absolute financial transparency. We provide detailed, itemized line-item proposals that clearly outline demo, foundation, framing, plumbing, electrical, and finish allowances. We do not submit deceptively low bids just to capture the job and gouge you with change orders. If you choose to expand project scope or alter finish specs, any change is quoted, reviewed, and signed off in writing beforehand.',
    category: 'pricing',
    categoryLabel: 'Estimates & Transparency',
    highlight: 'Transparent Line-Item Bids with Zero Hidden Markups',
  },
  {
    id: 'faq-payment-schedule',
    question: 'What is your payment schedule? Do you require large upfront deposits?',
    answer:
      'No. We adhere strictly to California CSLB payment regulations: we collect only the state-allowed deposit at contract signing. All subsequent payments are broken down into transparent progress milestones tied directly to completed structural phases (e.g. foundation pour, framing rough-in inspection, drywall completion, final punch list). You only pay when real, inspectable milestones are reached.',
    category: 'pricing',
    categoryLabel: 'Payment Milestones',
    highlight: 'CSLB-Compliant Progress Payouts Tied to Passed Inspections',
  },
  {
    id: 'faq-flipper-disclosures',
    question: 'How do you assist real estate investors with California AB 968 flipper disclosures?',
    answer:
      'Under California Civil Code AB 968, properties flipped within 18 months require full written disclosures of all repairs, licensed contractors, and municipal permits. We provide investors with turnkey documentation packages, valid permits, and stamped city inspection sign-offs that satisfy escrow and buyer disclosures, eliminating post-sale litigation exposure.',
    category: 'pricing',
    categoryLabel: 'Investor Compliance',
    highlight: 'AB 968 Turnkey Permit Packages for Escrow Protection',
  },
  {
    id: 'faq-warranty',
    question: 'What warranty and craftsmanship guarantee do you provide on completed work?',
    answer:
      'All BAS General Contractor projects come with our comprehensive craftsmanship guarantee alongside all California CSLB statutory warranties. We stand behind our concrete footings, framing integrity, roof tie-ins, and waterproofing membranes. If any issue arises, our local team is based in Vista and responds promptly to ensure your total peace of mind.',
    category: 'licensing',
    categoryLabel: 'Warranty & Guarantee',
    highlight: 'Comprehensive Craftsmanship Guarantee & Local Support',
  },
]
