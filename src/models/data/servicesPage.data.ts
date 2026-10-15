import type { ServiceTableRow } from '../types'

export const SERVICES_PAGE_HERO = {
  breadcrumb: 'Services & Structural Solutions',
  badge: 'CSLB #1092902 — Class B General Building',
  title: 'Architectural Precision & Coastal Construction',
  description:
    'Delivering white-glove residential transformations, turnkey accessory dwellings, and engineered outdoor civil projects across coastal North County San Diego.',
  cards: [
    {
      title: '100% Permitted',
      subtitle: 'Zero-violation city permit mastery',
      icon: 'verified',
    },
    {
      title: '30+ Years Local',
      subtitle: 'North County geological & coastal code insight',
      icon: 'history_edu',
    },
  ],
}

export const SERVICES_QUICK_JUMP_LINKS = [
  { id: 'service-home-reno', label: 'Home Renovation' },
  { id: 'service-bathroom', label: 'Bathrooms' },
  { id: 'service-balcony', label: 'Balconies & Decks' },
  { id: 'service-kitchen', label: 'Kitchens' },
  { id: 'service-flipping', label: 'Investor Flipping' },
  { id: 'service-retaining-wall', label: 'Retaining Walls' },
  { id: 'service-adu', label: 'ADU & JADU' },
]

export const HOME_RENOVATION_DATA = {
  step: '01',
  kicker: 'Turnkey Whole-Home Architecture',
  title: 'Full-Scale Home Renovation & Structural Remodeling',
  description:
    'From reconfiguring load-bearing walls to bundling complete mechanical, electrical, and plumbing upgrades, BAS General Contractor oversees full-home modernizations that safeguard your asset value.',
  permitBox: {
    title: 'California Permitting & Code Advisory',
    text: 'In California, any alteration impacting building footprint, load-bearing frames, window placements, or bundled MEP layouts requires municipal sign-offs. We navigate Vista, Carlsbad, Oceanside, and San Marcos planning departments to secure valid permits before any hammer strikes.',
  },
  features: [
    'Load-bearing beam installation',
    'Complete MEP infrastructure',
    'Interior wall reconfiguration',
    'City inspection sign-offs',
  ],
  ctaText: 'Discuss Home Remodeling',
  durationBadge: 'AVERAGE DURATION: 10–18 WEEKS',
  image: {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBe2bG2eNnO33NeJSTiqUOZ3iYkT1oa1iLjyAYfP16F1zG6IPfGHVTd4u1PA1a1oPP9VomCU2zg7GkXp72Y-GvmFytRR-S2hAtA9ENl1zjxSFzaRn4wG0hcTZUaqmiAX4qsuNGfQ-VuswromFWwDBuxIQgZykQcXUxhKiT-3lgQafT4KKeARfV5nJJk6nGsMdoFitoJ9qjla7XiXzOapMnvTZqTToJj9ZoWUlVRRa0RFGawO3Z84Vjhw',
    alt: 'Open interior framing renovation construction site in North County San Diego showing raw wood studs, insulated ceiling joints, wrapped plumbing stack, and modern energy efficient window openings with coastal natural light streaming in.',
    badgeTop: 'Active In-Progress Site',
    badgeTitle: 'Carlsbad Coastal Whole-Home Remodel',
    badgeStatus: 'Framing Phase',
  },
}

export const BATHROOM_RENOVATION_DATA = {
  step: '02',
  kicker: 'Spa-Grade Ensuites & Powder Rooms',
  title: 'Transform Your Bathroom Into an Extraordinary Retreat',
  description:
    'From custom curbless walk-in showers to tailored quartz vanities, our master craftsmen deliver serene, water-sealed sanctuaries engineered to endure.',
  subhead: 'Tailored Vanity, Water-Shield Tiling & Custom Glass',
  subtext:
    'Whether your objective is a compact half-bath refresh or an expansive primary suite overhaul with heated subfloors and acoustic baffling, we manage design, permitting, and precision execution under one roof.',
  images: [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6KQppCYRdVqBWovFjO8tUyIDdU_koJz7wbpRhBjtSviCFvDpiKns4tZ24nFVnM_B5AnyIfQJ45JW-M6SQJpYrtt8-l0fzdA_9Rxyb9Fzzj4Iw0xMJRwAvGF4ecu81JeyuQz17UFDsOQMYH3h6zU_OpMHg9AOtW0q6oKcLaUsHtMMPMi1T2O8ELc22zW7KtFRMRE6qmihvxWW0Vm0OitxtWzq3ukVFFplkIoP80gcW2P-A6sQutKQxMg',
      alt: 'High-end modern bathroom renovation showing dark wood vanity with white quartz countertop, polished chrome hardware, framed vanity mirror with three-light sconce, and neutral grey luxury vinyl flooring with clean white trim.',
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSPJiqjoYxfCWKlI4VRWbxvH3wXE_KDGshb6iwSIXbBCRQlGvAc_HdyCxULPU-JgnFsG5-cPcLJYUWYSIHJaib1DiEpCfVYjIFsOhqiXj_7zT3D9aouDNcEFHqDRmKIjlFI4webP9nlAteL-b9PK1VaqFQFQX7LT2K3uvdQ4ebhrBIubHQPVTCsUb0aG4maSRzXhUNKxEPHP8A5ybdX-CzLOKJBlxw18GqqtY-IZpmSdE9tcfjAE42uw',
      alt: 'Pristine walk-in glass shower enclosure with matte black sliding door hardware, molded acrylic wall panels, overhead rain shower head, and matching contemporary toilet fixture in a newly remodeled bathroom.',
    },
  ],
  steps: [
    {
      step: 'STEP 01',
      title: 'Consultation & Vision',
      desc: 'In-home evaluation of plumbing stacks, footprint feasibility, and fixture choices.',
    },
    {
      step: 'STEP 02',
      title: 'Prep & Dust-Controlled Demo',
      desc: 'Surgical removal of obsolete tile, dry rot remediation, and subfloor leveling.',
    },
    {
      step: 'STEP 03',
      title: 'Rough-in Plumbing & Waterproofing',
      desc: 'Schluter or hydro-membrane pans, updated copper/PEX lines, and GFCI circuits.',
    },
    {
      step: 'STEP 04',
      title: 'Finish Installation & Seal',
      desc: 'Custom floating vanities, frameless tempered glass, precision grout, and vents.',
    },
  ],
  finalStep: {
    title: 'Step 05: Final Walkthrough & 100% Satisfaction Sign-off',
    ctaText: 'Book Walkthrough',
  },
}

export const BALCONY_DECK_DATA = {
  step: '03',
  kicker: 'Engineered Exterior Living',
  title: 'Balcony & Deck Structural Renovation',
  description:
    'Coastal marine air severely degrades exterior joists, flashing, and cantilevered balcony supports. We restore and build outdoor spaces that combine architectural beauty with stringent California seismic and safety codes.',
  image: {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEXDWjhryRvwE5GdVXt2crM5mVt4Iwt732Cat4ko3h5dnUZvfF4VAHWf6oolMdzRNKKM3f35ujwjxEOki8T96u8ry-r7_j0r_keoZYIsdiCKoUIHHuOPJHjzHvmCppz3JAY0LJSllBTjBdtlE4jbbO0_VKu4EWJz96SnkwQ7o7wDBWVEdBfIfbpp_cgP1qHJDY6ehN1DcDWfwTY3OK2Chg4TsmH9UD1ou_Gri9-7KZ7r-bbxMbdk_2UQ',
    alt: 'Expansive split-screen view of a weather-damaged wooden outdoor deck undergoing restoration, showing the half power-washed clean red cedar grain next to dark aged timber with structural railings and a sunny tree canopy.',
    badge: 'Structural Framing & Deck Restoration',
  },
  features: [
    {
      title: 'SB 721 & SB 326 Balcony Inspection & Repair',
      desc: 'Mandatory load-bearing and waterproofing assessments for elevated exterior elements.',
      icon: 'shield',
    },
    {
      title: 'Composite & Hardwood Resurfacing',
      desc: 'Trex, timbertech, and redwood decking with hidden stainless fasteners and waterproofing flashing.',
      icon: 'layers',
    },
    {
      title: 'Architectural Railings & Glass Windbreaks',
      desc: 'Clean horizontal cable systems, powder-coated aluminum, and coastal view-preserving glass.',
      icon: 'fence',
    },
  ],
  ctaText: 'Schedule Balcony Structural Review',
}

export const KITCHEN_RENOVATION_DATA = {
  step: '04',
  kicker: 'Culinary Centerpieces',
  title: 'Chef-Grade Kitchen Modernization',
  description:
    'The kitchen is the hydraulic and social nerve center of your residence. We optimize traffic pathways, design custom solid-wood cabinetry, and integrate high-draw appliances with dedicated electrical panels.',
  stats: [
    {
      value: '100%',
      title: 'Custom Cabinetry',
      desc: 'Dovetail drawers, soft-close hardware, custom pantry pull-outs.',
    },
    {
      value: 'Title 24',
      title: 'Lighting & Efficiency',
      desc: 'Integrated under-cabinet high-CRI LEDs and ventilation routing.',
    },
  ],
  features: [
    'Quartzite, Calacatta marble, and waterfall island fabrication',
    'Sub-Zero, Wolf, and high-CFM range hood venting runs',
    'Open-concept wall removal with concealed steel flitch plates',
  ],
  ctaText: 'Explore Kitchen Design',
  image: {
    url: '/images/services/chef-kitchen-renovation.jpg',
    alt: 'High-end luxury kitchen renovation with oversized quartz waterfall island, custom flat-panel white oak cabinets, professional gas range with brass accents, designer pendant lighting, and warm wide-plank oak flooring.',
    badge: 'Encinitas Residence',
  },
}

export const INVESTOR_FLIPPING_DATA = {
  step: '05',
  kicker: 'Investor & Capital Execution',
  title: 'Strategic Home Flipping & Regulatory Compliance',
  description:
    'Maximize renovation return on investment while eliminating post-sale legal exposure. We partner with real estate investors, syndicates, and owners to deliver rapid, high-margin renovations built to full compliance standards.',
  complianceBox: {
    title: 'California Flipper Disclosure Law (AB 968) Mastery',
    intro:
      'Under California Civil Code, properties resold within 18 months of purchase require complete written disclosures of all repairs, room additions, and structural modifications. Sellers must provide:',
    points: [
      {
        icon: 'file-text',
        text: 'Copies of all permits obtained by licensed contractors',
      },
      {
        icon: 'badge',
        text: 'Contractor name, license number & contact record',
      },
      {
        icon: 'check-square',
        text: 'Transfer Disclosure Statement (TDS) alignment',
      },
      {
        icon: 'shield-check',
        text: 'Elimination of post-sale failure-to-disclose litigation',
      },
    ],
  },
  conclusion:
    'Unlicensed handyman flips put your capital at catastrophic risk. BAS General Contractor Inc. guarantees valid permits, architectural drawings, and signed off final inspections, protecting your purchase-to-sale timeline and investment liquidity.',
  investorCard: {
    badge: 'Investor Advantage',
    title: 'Why Top San Diego Flips Rely on BAS Contractor',
    items: [
      {
        title: 'Accelerated Schedules',
        desc: 'Synchronized subcontractor crews reduce holding costs and interest fees.',
        icon: 'zap',
      },
      {
        title: 'Bulletproof Disclosures',
        desc: 'We produce turnkey documentation packages for escrow & buyer inspections.',
        icon: 'shield',
      },
      {
        title: 'Value-Engineered Spec',
        desc: 'Materials chosen specifically for appraisal elevation and fast MLS days-on-market.',
        icon: 'calculator',
      },
    ],
    ctaText: 'Request Investor Flip Consultation',
  },
}

export const RETAINING_WALL_DATA = {
  step: '06',
  kicker: 'Civil & Geological Engineering',
  title: 'Precision Retaining Wall Construction',
  description:
    'A retaining wall is a specially engineered civil structure built to withstand continuous lateral earth pressure. We transform steep, unbuildable North County slopes into usable, leveled outdoor terraces.',
  features: [
    {
      title: 'Erosion Control & Slope Stabilization',
      desc: 'Prevent coastal hillside slide, washouts, and ground movement around foundations.',
    },
    {
      title: 'Integrated French Drainage & Hydrostatic Relief',
      desc: 'Perforated drain coils, crushed aggregate backfill, and weep holes prevent water weight blowout.',
    },
    {
      title: 'Increased Usable Yard Footprint',
      desc: 'Create level plateaus for synthetic turf, outdoor kitchens, ADUs, or custom pool decks.',
    },
    {
      title: 'Engineered Concrete Masonry Units (CMU)',
      desc: 'Rebar-reinforced cells, deep trench concrete footings, and architectural stucco or stone veneer.',
    },
  ],
  ctaText: 'Request Soil & Wall Assessment',
  image: {
    url: '/images/services/retaining-wall-system.jpg',
    alt: 'Long newly constructed concrete block retaining wall along a driveway in North County San Diego with tiered landscaped hillside behind it, fresh mulch, drought tolerant shrubbery, and dark gravel French drainage ditch along base with bright blue sky.',
    badgeTop: 'Finished Project • Vista CA',
    badgeTitle: '120-Foot CMU Retaining & Drainage System',
  },
}

export const ADU_JADU_SERVICE_DATA = {
  step: '07',
  kicker: 'Passive Income & Multigenerational Living',
  title: 'Turnkey ADU & Junior ADU (JADU) Construction',
  description:
    "California's state ADU laws offer homeowners unprecedented property expansion rights. We design and build high-efficiency detached guesthouses, garage conversions, and attached rental suites with speed and precision.",
  types: [
    {
      title: 'Detached ADU (up to 1,200 sq ft)',
      desc: 'Independent standalone residences with dedicated utilities, private yards, and full kitchen/laundry.',
      icon: 'home',
    },
    {
      title: 'JADU & Garage Conversions',
      desc: 'Up to 500 sq ft built inside the existing home or garage envelope for minimum construction timelines.',
      icon: 'building',
    },
  ],
  features: [
    'Sub-panel electrical 200A upgrades and water/sewer tie-ins',
    'San Diego County & Coastal Commission setback compliance',
    'Energy-efficient mini-split HVAC & Title 24 compliant envelope',
  ],
  primaryCta: 'View Dedicated ADU Page',
  secondaryCta: 'Get Free ADU Feasibility Check',
  image: {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrDOn8TDkBV7gGfLnKbk_cIoUSCg7kRFVBF39tiqsVc9r9IWHBXjpJNh3AgRgf05IYeLWjnNmr_lqUXS-cEJfeWk9YmpjNGi99UlA8MdKfiPksvVVHeYpbHWFO0PxKwe69fwF5gmNF5qOhbI6X1oPsyrm6fb79Ww2ad9Nx-7D4MIlOuKlKbNiM569aZrfVvAMciuGJUZKXzOHL_zto10ADwe4GAe8_AYN8Cb-spnivW6ePcQsbhL8E-Q',
    alt: 'Modern custom detached Accessory Dwelling Unit in Southern California backyard with black standing seam roof, light board and batten siding, sliding glass doors opening to a drought-tolerant paver patio.',
    badgeTop: 'Featured North County Build',
    badgeTitle: '2-Bed, 2-Bath Detached ADU (750 sq ft)',
    badgeDuration: '12-Week Build',
  },
}

export const SERVICE_COMPARISON_TABLE_DATA: ServiceTableRow[] = [
  {
    id: 'home-reno',
    category: 'Whole-Home Renovation',
    permitRequired: 'Yes (Always)',
    permitStatusType: 'always',
    timeline: '10–18 Weeks',
    keyFocus: 'Load paths, MEP upgrades, architectural plans',
    anchorId: '#service-home-reno',
  },
  {
    id: 'bathroom',
    category: 'Bathroom Renovations',
    permitRequired: 'Scope Dependent',
    permitStatusType: 'scope',
    timeline: '2–4 Weeks',
    keyFocus: 'Waterproofing membranes, drain venting, GFCI',
    anchorId: '#service-bathroom',
  },
  {
    id: 'balcony',
    category: 'Balcony & Deck Restoration',
    permitRequired: 'Yes (Elevated)',
    permitStatusType: 'elevated',
    timeline: '2–5 Weeks',
    keyFocus: 'SB 721 compliance, ledger flashing, joist safety',
    anchorId: '#service-balcony',
  },
  {
    id: 'kitchen',
    category: 'Chef-Grade Kitchens',
    permitRequired: 'Yes (Gas/Electric)',
    permitStatusType: 'always',
    timeline: '4–8 Weeks',
    keyFocus: 'Title 24 electrical, gas line re-route, custom cabinetry',
    anchorId: '#service-kitchen',
  },
  {
    id: 'flipping',
    category: 'Investor Flip Remodels',
    permitRequired: 'Yes (AB 968)',
    permitStatusType: 'always',
    timeline: '6–12 Weeks',
    keyFocus: 'California disclosure compliance, high ROI turn',
    anchorId: '#service-flipping',
  },
  {
    id: 'retaining-wall',
    category: 'Retaining Walls',
    permitRequired: 'Yes (>3ft High)',
    permitStatusType: 'always',
    timeline: '2–4 Weeks',
    keyFocus: 'Hydrostatic drainage, rebar footing, soil load',
    anchorId: '#service-retaining-wall',
  },
  {
    id: 'adu',
    category: 'ADU & JADU Construction',
    permitRequired: 'Yes (Always)',
    permitStatusType: 'always',
    timeline: '12–20 Weeks',
    keyFocus: 'Zoning, foundation slab, utility tap, Title 24',
    anchorId: '#service-adu',
  },
]

export const LEADERSHIP_STATEMENT_DATA = {
  initials: 'BS',
  quote:
    '"When you build or remodel in California, cutting corners on permits or engineering isn\'t just risky—it degrades the actual equity of your home. We build every project to withstand generations."',
  author: 'Belen Silva',
  role: 'President & Principal Contractor, BAS General Contractor Inc.',
}
