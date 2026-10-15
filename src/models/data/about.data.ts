import type { AboutMilestone, AboutPillar, CraftsmanshipProject } from '../types'

export const ABOUT_HERO_DATA = {
  badge: 'CSLB Class B #1092902 • Bonded & Insured • Active Since 06-17-2022',
  kicker: 'Craftsmanship Heritage',
  title: 'Craftsmanship Built on Three Decades of Hands-On Experience',
  description:
    'From supervised apprentice managing repairs across 1,000+ apartment homes in 1991 to a fully licensed General Building Contractor shaping North County San Diego’s custom ADUs, structural additions, and whole-home renovations.',
  registration: {
    title: 'Class B: General Building',
    status: 'Verified Active',
    activationDate: 'June 17, 2022',
    description:
      'Official license activation date: June 17, 2022. Serving coastal homeowners with transparent contracts, direct framing supervision, and rigorous code compliance.',
    highlight: '100% In-House Jobsite Leadership',
  },
}

export const FOUNDER_DATA = {
  name: 'Belen Silva',
  role: 'Founder & Principal General Contractor',
  license: 'CSLB License #1092902',
  avatarInitials: 'BS',
  portraitUrl: '/images/about/belen-silva-portrait.jpg',
  blueprintImageUrl: '/images/about/blueprint-plans.jpg',
  blueprintAlt:
    'Close up architectural blueprints and construction plan drawings laid out on an outdoor field table next to a hardware box and measuring tape under bright coastal Southern California sunlight, representing rigorous on-site project planning.',
  blueprintTag: 'Field Office Blueprint Review • Vista, CA',
  quote:
    'Our company values dedication, honesty, and uncompromising attention to detail in every single frame, foundation, and interior finish. We build spaces meant to endure for generations.',
  location: 'Vista & North County',
  phone: '(760) 801-2065',
  phoneRaw: '7608012065',
}

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    id: 'oversight',
    title: 'Direct On-Site Oversight',
    description:
      'Belen Silva personally checks the string lines, foundation footings, timber crown orientation, and framing plumb lines. Your job site is never passed off to third parties.',
    icon: 'engineering',
  },
  {
    id: 'depth',
    title: '30+ Year Multi-Trade Depth',
    description:
      'From concrete slabs and retaining structures to finish trim, roof flashings, and drywall texturing—acquired through three decades of boots-on-the-ground work.',
    icon: 'handyman',
  },
  {
    id: 'permits',
    title: 'Permit & Code Mastery',
    description:
      'Fluency with city planning departments across Vista, Oceanside, Carlsbad, San Marcos, and Escondido guarantees frictionless plan approvals and passed city inspections.',
    icon: 'assignment_turned_in',
  },
  {
    id: 'transparency',
    title: 'Itemized Scope Clarity',
    description:
      'Transparent line-item bid architecture without surprise change orders. Milestone payouts directly linked to real structural progress and inspection completions.',
    icon: 'receipt_long',
  },
]

export const ABOUT_TRUST_METRICS = [
  { value: '1991', label: 'Heritage Start' },
  { value: '1,000+', label: 'Units Serviced' },
  { value: '100%', label: 'CSLB Compliant' },
  { value: '5.0 ★', label: 'Verified Rating' },
]

export const ABOUT_TIMELINE: AboutMilestone[] = [
  {
    id: 'milestone-1991',
    milestoneNumber: 'Milestone 01',
    year: '1991',
    periodTitle: 'Under Barbour Management Company',
    headline: 'The Foundation — Property Maintenance & Multi-Trade Apprentice',
    storyQuote:
      '"I began working in the construction/property maintenance industry as an employee under a different contractor’s supervision. Learned skills pertaining to the job. Furthermore, how to handle different jobs and projects in the work field on over one thousand apartments for over 7 years. Our About Us journey started here."',
    tags: ['1,000+ Units Managed', 'Structural Maintenance', 'Contractor Supervision'],
    statBox: {
      value: '7+ Years',
      description: 'Intensive field exposure across high-density residential properties.',
      icon: 'apartment',
    },
  },
  {
    id: 'milestone-1999',
    milestoneNumber: 'Milestone 02',
    year: '1999',
    periodTitle: 'HOA Mergers & Restoration Mastery',
    headline: 'Mastering Advanced Structural & Remediation Trades',
    storyQuote:
      '"This first company I worked for merged with another company, who had experience working with HOA’s. That merging was an important step in our About Us timeline. I was employed for 7 more years gaining valuable experience working with concrete, stucco, paint, retaining walls, building, and repairing them. Along with interior water damage restoration after being treated for mold, my About Us story includes mastering restoration skills as well. As well as cleaning up gutters, working on roofs, sealing roof vent pipes, drywall repairs, texturing."',
    tags: ['Concrete & Retaining Walls', 'Water Damage Remediation', 'Roof Sealing & Drywall'],
    photoShowcase: {
      imageUrl: '/images/about/timber-framing-worker.jpg',
      alt: 'A dedicated construction worker wearing a BAS safety uniform and helmet standing high on an A-frame ladder, assembling heavy structural timber framing and ceiling joists against an overcast Southern California sky, showcasing precision carpentry and structural framing integrity.',
      badge: 'Structural Framing Field Work',
      caption: 'Boots-on-the-ground framing and structural load-bearing execution.',
    },
  },
  {
    id: 'milestone-2005',
    milestoneNumber: 'Milestone 03',
    year: '2005',
    periodTitle: 'Self-Employed DBA Launch',
    headline: 'Independent Contractor Serving North County San Diego',
    storyQuote:
      '"Started work as a self-employer working as a DBA business in the local North County San Diego. Our company values dedication and attention to detail, as shown in our approach. Providing all types of services in construction with the skills gained through past work experience. Since then, I have been working for homeowners, real estate agents, churches, and property managers, and different General Contractors on framing new homes, and investors."',
    tags: ['Local North County Roots', 'Churches & Real Estate Teams', 'Framing New Custom Homes'],
    statBox: {
      value: '17+ Years DBA',
      description: 'Trusted partner to private owners, real estate agents, and churches across Vista & Carlsbad.',
      icon: 'location_city',
    },
  },
  {
    id: 'milestone-2022',
    milestoneNumber: 'Milestone 04',
    year: '2022',
    periodTitle: 'CSLB State Licensure',
    headline: 'General Building Contractor License #1092902 Activated',
    storyQuote:
      '"Applied to the CSLB Administration for a General Contractor License. I was accepted and currently hold this license. Which was activated on the date 06-17-22. Type: General Building Contractor. In short, the purpose of this page is to tell you About Us and highlight our journey and experience in the industry."',
    tags: ['License #1092902', 'Active 06-17-2022', 'Bonded & Comprehensive Insured'],
    statBox: {
      value: 'Class B Licensed',
      description: 'Delivering premier custom ADUs, major room additions, and structural remodel contracts.',
      icon: 'verified',
    },
    isHighlighted: true,
  },
]

export const CRAFTSMANSHIP_PROJECTS: CraftsmanshipProject[] = [
  {
    id: 'craft-framing',
    categoryBadge: 'Framing & Structural Wood',
    title: 'Detached ADU Superstructure',
    description:
      'Engineered shear wall fastening, hurricane ties, and precision roof rafter alignment in Vista, CA.',
    imageUrl: '/images/about/detached-adu-framing.jpg',
    alt: 'Heavy timber framing construction of a detached modern ADU with tall roof trusses, structural posts, and wooden shear walls against a clean California coastal skyline.',
  },
  {
    id: 'craft-kitchen',
    categoryBadge: 'Kitchen & Living Spaces',
    title: 'Full Home Interior Remodel',
    description:
      'Complete layout reconfiguration, plumbing relocations, and bespoke electrical installations in Carlsbad.',
    imageUrl: '/images/about/luxury-kitchen-remodel.jpg',
    alt: 'Interior luxury kitchen remodel with custom shaker cabinetry, marble waterfall island, recessed architectural lighting, and high-end fixtures.',
  },
  {
    id: 'craft-adu-turnkey',
    categoryBadge: 'Completed Turnkey Build',
    title: '750 Sq Ft Secondary Dwelling',
    description:
      'Turnkey architectural permit, foundation pour, framing, and final occupancy sign-off in Oceanside.',
    imageUrl: '/images/about/completed-turnkey-adu.jpg',
    alt: 'Exterior finished contemporary ADU guest house with smooth stucco, dark aluminum trim windows, wooden entry pergola, and drought-tolerant coastal landscaping.',
  },
]
