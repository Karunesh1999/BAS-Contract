import type { ServiceItem } from '../types'

export const BENTO_SERVICES: ServiceItem[] = [
  {
    id: 'adu-jadu',
    title: 'ADU & JADU Construction',
    tagline: 'Flagship Expertise',
    category: 'adu',
    highlight: true,
    iconName: 'Home',
    description:
      'Turnkey detached and attached accessory dwelling units. Designed to maximize property appraisal value, multi-generational living, and immediate monthly rental cash flow.',
    features: [
      'Custom 3D Architectural Plans & Structural Engineering',
      'City Permitting & Zoning Expediting in North County',
      'Subpanel 200A Upgrades & Sewer Utility Trenching',
    ],
    ctaText: 'Explore ADU Options',
  },
  {
    id: 'kitchen-bath',
    title: 'Kitchen & Bath Remodels',
    tagline: 'Luxury Interior',
    category: 'kitchen',
    highlight: false,
    iconName: 'UtensilsCrossed',
    description:
      'Chef-grade kitchen conversions and spa-inspired walk-in baths. Solid hardwood shaker cabinetry, mitered quartz slab islands, designer backsplashes, and bespoke plumbing.',
    features: [
      'Custom Cabinetry & Waterfall Island Builds',
      'Curbless Walk-in Showers & Niche Tile Work',
      'High-End Stainless Appliance & Fixture Packages',
    ],
    ctaText: 'View Kitchen Projects',
  },
  {
    id: 'home-additions',
    title: 'Whole Home & Additions',
    tagline: 'Structural Expansion',
    category: 'addition',
    highlight: false,
    iconName: 'Building2',
    description:
      'Seamless square footage expansions, master suite add-ons, wall removals for modern open-concept floorplans, and turnkey whole-house coastal transformations.',
    features: [
      'Load-Bearing Beam & Structural Wall Removals',
      'Continuous Luxury Vinyl Plank & Hardwood Flooring',
      'Recessed LED Can Systems & Smart Home Pre-Wiring',
    ],
    ctaText: 'Home Additions Scope',
  },
  {
    id: 'grading-utilities',
    title: 'Grading, Utilities & Framing',
    tagline: 'Civil & Groundwork',
    category: 'grading',
    highlight: false,
    iconName: 'Pickaxe',
    description:
      'Engineered site preparation, foundation footings, precision heavy framing, soil stabilization, drainage grading, and underground infrastructure trenching.',
    features: [
      'Slab & Raised Foundation Engineering',
      'Water, Gas, Sewer & 200A Electrical Trenching',
      'Precision Seismic-Rated Framing & Shear Walls',
    ],
    ctaText: 'Site & Foundation Specs',
  },
]

export const FULL_SCOPE_ITEMS = [
  'Bathrooms Remodel & Tile Installation',
  'Kitchen Remodel & Custom Island Build',
  'Bedroom Renovation & Closet Framing',
  'Interior & Exterior Finishes & Level 5 Drywall',
  'Complete Full House Rebuild & Additions',
]
