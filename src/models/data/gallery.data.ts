import type {
  GallerySlideItem,
  GalleryProjectCard,
  GalleryFilterCategory,
} from '../types'

export const GALLERY_HERO_DATA = {
  breadcrumb: 'Gallery & Portfolio',
  badge: 'CSLB #1092902 • LICENSED & BONDED • NORTH COUNTY SAN DIEGO',
  title: 'Craftsmanship in the Field: Our Project Gallery',
  description:
    'Explore real construction milestones across North County San Diego — from ground-up ADUs and structural balcony restorations to luxury kitchen remodels and engineered retaining walls.',
  ctaText: 'Schedule Site Assessment',
  stats: [
    { value: '100+', label: 'Completed Projects', icon: 'home_work' },
    { value: 'Zero', label: 'Permitting Violations', icon: 'verified' },
    { value: '100%', label: 'In-House Oversight', icon: 'engineering' },
    { value: '5.0 ★', label: 'Google Rating', icon: 'star' },
  ],
}

export const GALLERY_SLIDES: GallerySlideItem[] = [
  {
    id: 'slide-0',
    img: '/images/gallery/adu/adu-1.jpg',
    alt: 'Custom craftsman cottage detached ADU in Vista CA with light beige stucco, bronze windows, and porch',
    status: 'CSLB Certified Milestone',
    category: 'ADU & Framing',
    location: 'Vista, CA',
    title: 'Detached ADU Superstructure & Framing',
    desc: 'Ground-up structural engineering featuring heavy timber framing, Simpson hurricane ties, shear wall assemblies, and precise window rough-ins built to rigid Title 24 California energy standards.',
    scope: 'Turnkey Ground-Up',
    time: '14 Weeks',
    permit: 'Finaled & Passed',
    code: '100% Compliant',
  },
  {
    id: 'slide-1',
    img: '/images/gallery/kitchen/kitchen-1.jpg',
    alt: 'Modern custom kitchen remodel with dark espresso wood cabinets, polished white quartz countertops in Carlsbad home',
    status: 'Completed Interior',
    category: 'Kitchen Architecture',
    location: 'Carlsbad, CA',
    title: 'Luxury Custom Kitchen Modernization',
    desc: 'Full kitchen revitalization featuring deep espresso cabinetry, undermount stainless fixtures, premium quartz countertops, and dedicated task circuit wiring.',
    scope: 'Full Remodel',
    time: '5 Weeks',
    permit: 'Finaled',
    code: 'Energy Code Met',
  },
  {
    id: 'slide-2',
    img: '/images/gallery/structural/structural-1.jpg',
    alt: 'Exterior concrete masonry unit CMU retaining wall installation on landscaped sloped hillside in San Marcos CA',
    status: 'Engineered Civil Works',
    category: 'Structural Masonry',
    location: 'San Marcos, CA',
    title: 'Engineered CMU Retaining Wall & Integrated Drainage',
    desc: 'Slope stabilization engineered to resist heavy lateral soil pressure, integrating backfill gravel beds, geotextile cloth, and municipal storm-drain tie-ins.',
    scope: 'Earthwork & Wall',
    time: '3.5 Weeks',
    permit: 'Finaled',
    code: 'Grading Certified',
  },
  {
    id: 'slide-3',
    img: '/images/gallery/bath/bath-1.jpg',
    alt: 'Luxury bathroom remodel in Oceanside CA showing contemporary white vanity with chrome fixtures and designer lighting',
    status: 'Interior Renovation',
    category: 'Spa Bathroom',
    location: 'Oceanside, CA',
    title: 'Modern Minimalist Vanity & Tile Suite',
    desc: 'Space-maximizing vanity cabinetry with integrated porcelain basin, modern illumination, fresh waterproof drywall, and low-flow plumbing upgrades.',
    scope: 'Primary Bath',
    time: '2 Weeks',
    permit: 'Finaled',
    code: 'CalGreen Compliant',
  },
  {
    id: 'slide-4',
    img: '/images/gallery/bath/bath-2.jpg',
    alt: 'High-end modern walk-in glass shower renovation with white acrylic wall surround and black hardware',
    status: 'Plumbing & Glazing',
    category: 'Walk-In Shower',
    location: 'Oceanside, CA',
    title: 'Walk-In Shower Enclosure & Hardware',
    desc: 'Architectural sliding glass door assembly with modern matte black track hardware, seamless waterproof alcove walls, and dual-function thermostatic controls.',
    scope: 'Custom Shower',
    time: '1.5 Weeks',
    permit: 'Finaled',
    code: 'Title 24 Water',
  },
  {
    id: 'slide-5',
    img: '/images/gallery/deck/deck-1.jpg',
    alt: 'Balcony renovation and structural wooden deck repair before and after side-by-side restoration in Encinitas CA',
    status: 'Structural Repair',
    category: 'Decks & Balconies',
    location: 'Encinitas, CA',
    title: 'Coastal Balcony & Structural Deck Overhaul',
    desc: 'Comprehensive framing rebuild replacing dry-rotted joists, securing ledger boards with heavy galvanized lags, and applying UV weather-barrier treatments.',
    scope: 'Structural Restore',
    time: '3 Weeks',
    permit: 'Passed',
    code: 'IRC Structural Code',
  },
  {
    id: 'slide-6',
    img: '/images/gallery/adu/adu-5.jpg',
    alt: 'Modern luxury attached ADU addition in Encinitas with cedar wood slat accents, black pergola patio, and smooth stucco',
    status: 'Turnkey Living Suite',
    category: 'ADU Architecture',
    location: 'Encinitas, CA',
    title: 'Coastal Attached ADU & Modern Pergola Terrace',
    desc: 'Indoor-outdoor architectural conversion featuring floor-to-ceiling multi-slide glass doors, integrated shade canopy, and turnkey master living quarters.',
    scope: 'Attached ADU Suite',
    time: '12 Weeks',
    permit: 'Finaled',
    code: 'Title 24 Met',
  },
]

export const GALLERY_FILTER_TABS: {
  id: GalleryFilterCategory
  label: string
  count: number
}[] = [
  { id: 'all', label: 'All Projects', count: 40 },
  { id: 'adu', label: 'ADUs & Additions', count: 8 },
  { id: 'kitchen', label: 'Kitchens', count: 8 },
  { id: 'bath', label: 'Bathrooms', count: 8 },
  { id: 'deck', label: 'Decks & Balconies', count: 8 },
  { id: 'structural', label: 'Retaining Walls', count: 8 },
]

export const GALLERY_PROJECT_CARDS: GalleryProjectCard[] = [
  // ==========================================
  // 1. ADUS & ADDITIONS (8 Projects)
  // ==========================================
  {
    id: 'proj-adu-1',
    category: 'adu',
    categoryLabel: 'ADU & Addition',
    location: 'Vista, CA',
    title: 'Modern Craftsman Cottage Detached ADU',
    description:
      'Turnkey 850 sq ft detached guesthouse featuring heavy timber entry framing, Title 24 insulation, energy-efficient HVAC, and private paver courtyard.',
    duration: '14 Weeks',
    imageUrl: '/images/gallery/adu/adu-1.jpg',
    alt: 'Modern craftsman cottage detached ADU in Vista CA',
  },
  {
    id: 'proj-adu-2',
    category: 'adu',
    categoryLabel: 'ADU & Addition',
    location: 'Carlsbad, CA',
    title: 'Contemporary Farmhouse Board & Batten ADU',
    description:
      'Ground-up coastal farmhouse ADU with standing seam metal roofing, timber covered porch, custom dark bronze windows, and drought-tolerant landscape.',
    duration: '12 Weeks',
    imageUrl: '/images/gallery/adu/adu-2.jpg',
    alt: 'Modern farmhouse board and batten detached ADU in Carlsbad CA',
  },
  {
    id: 'proj-adu-3',
    category: 'adu',
    categoryLabel: 'ADU & Addition',
    location: 'Oceanside, CA',
    title: 'Open-Concept ADU Vaulted Living & Kitchen',
    description:
      'Exposed natural timber beams, quartz island with barstool seating, luxury vinyl oak plank flooring, and dual sliding glass doors welcoming Pacific breezes.',
    duration: '8 Weeks',
    imageUrl: '/images/gallery/adu/adu-3.jpg',
    alt: 'Interior open concept living room and kitchen of luxury ADU in Oceanside',
  },
  {
    id: 'proj-adu-4',
    category: 'adu',
    categoryLabel: 'ADU & Addition',
    location: 'San Marcos, CA',
    title: 'Engineered Timber Truss & Framing Superstructure',
    description:
      'Rigid seismic shear-panel assembly, pre-engineered roof truss craning, Simpson hurricane ties, and rough electrical rough-ins for detached dwelling.',
    duration: '4 Weeks',
    imageUrl: '/images/gallery/adu/adu-4.jpg',
    alt: 'Construction site progress of ADU heavy timber framing in San Marcos',
  },
  {
    id: 'proj-adu-5',
    category: 'adu',
    categoryLabel: 'ADU & Addition',
    location: 'Encinitas, CA',
    title: 'Attached Coastal ADU with Architectural Pergola',
    description:
      'Seamless single-story home expansion with modern cedar wood slats, black aluminum pergola patio, polished concrete pavers, and private entrance.',
    duration: '11 Weeks',
    imageUrl: '/images/gallery/adu/adu-5.jpg',
    alt: 'Luxury attached ADU addition with modern pergola in Encinitas CA',
  },
  {
    id: 'proj-adu-6',
    category: 'adu',
    categoryLabel: 'ADU & Addition',
    location: 'Oceanside, CA',
    title: 'Two-Story Detached ADU with Upper Sundeck',
    description:
      'Space-maximizing two-story guest suite with second-floor cantilevered balcony, stainless horizontal cable railings, and charcoal vertical siding.',
    duration: '16 Weeks',
    imageUrl: '/images/gallery/adu/adu-6.jpg',
    alt: 'Two-story detached modern ADU with upper sundeck in Oceanside CA',
  },
  {
    id: 'proj-adu-7',
    category: 'adu',
    categoryLabel: 'ADU & Addition',
    location: 'Vista, CA',
    title: 'Turnkey Detached ADU Superstructure & Utilities',
    description:
      'Complete ground-up framing, engineered floor joists, hurricane anchor ties, and rough mechanical, electrical, and plumbing rough-ins.',
    duration: '14 Weeks',
    imageUrl: '/images/gallery/adu/adu-7.jpg',
    alt: 'Turnkey detached ADU superstructure in Vista CA',
  },
  {
    id: 'proj-adu-8',
    category: 'adu',
    categoryLabel: 'ADU & Addition',
    location: 'Fallbrook, CA',
    title: 'Heavy Structural Framing & Shear Wall Addition',
    description:
      'Master suite structural wing addition featuring seismic hold-downs, vaulted ceiling joists, and weatherized exterior building wrap.',
    duration: '5 Weeks',
    imageUrl: '/images/gallery/adu/adu-8.jpg',
    alt: 'Heavy structural framing and shear wall addition in Fallbrook CA',
  },

  // ==========================================
  // 2. KITCHENS (8 Projects)
  // ==========================================
  {
    id: 'proj-kitchen-1',
    category: 'kitchen',
    categoryLabel: 'Kitchen Remodel',
    location: 'Carlsbad, CA',
    title: 'Executive Dark Espresso & Quartz Suite',
    description:
      'Precision dark espresso shaker cabinets, undermount stainless sink, custom quartz slabs, subway tile backsplash, and full Title 24 LED conversion.',
    duration: '5 Weeks',
    imageUrl: '/images/gallery/kitchen/kitchen-1.jpg',
    alt: 'Modern custom kitchen remodel with dark espresso wood cabinets in Carlsbad',
  },
  {
    id: 'proj-kitchen-2',
    category: 'kitchen',
    categoryLabel: 'Kitchen Remodel',
    location: 'Vista, CA',
    title: 'Chef-Grade Stainless Gas Range & Custom Millwork',
    description:
      'Custom solid-wood upper cabinetry, high-CFM stainless range hood venting, Calacatta quartz countertops, and dedicated appliance circuits.',
    duration: '4.5 Weeks',
    imageUrl: '/images/gallery/kitchen/kitchen-2.jpg',
    alt: 'Custom dark wood cabinetry and quartz kitchen in Vista',
  },
  {
    id: 'proj-kitchen-3',
    category: 'kitchen',
    categoryLabel: 'Kitchen Remodel',
    location: 'Encinitas, CA',
    title: 'Modern White Oak & Calacatta Waterfall Island',
    description:
      'Mitered waterfall marble island, flat-panel rift-sawn white oak cabinets, integrated panel-ready refrigerator, and designer brass pendant lighting.',
    duration: '6 Weeks',
    imageUrl: '/images/gallery/kitchen/kitchen-3.jpg',
    alt: 'High-end luxury kitchen renovation with waterfall island in Encinitas',
  },
  {
    id: 'proj-kitchen-4',
    category: 'kitchen',
    categoryLabel: 'Kitchen Remodel',
    location: 'San Marcos, CA',
    title: 'Open-Concept Coastal Kitchen Overhaul',
    description:
      'Load-bearing wall removal replaced with recessed steel beam, continuous hardwood transitions, and custom breakfast bar with dual wine cooler.',
    duration: '5 Weeks',
    imageUrl: '/images/gallery/kitchen/kitchen-4.jpg',
    alt: 'Open-concept kitchen remodel in San Marcos',
  },
  {
    id: 'proj-kitchen-5',
    category: 'kitchen',
    categoryLabel: 'Kitchen Remodel',
    location: 'Del Mar, CA',
    title: 'Culinary Masterpiece with Oversized Marble Island',
    description:
      'Commercial Wolf/Sub-Zero package, custom pantry room framing, soft-close dovetail drawers, and hand-glazed Moroccan ceramic tile backsplash.',
    duration: '7 Weeks',
    imageUrl: '/images/gallery/kitchen/kitchen-5.jpg',
    alt: 'Luxury chef kitchen with marble island and barstools in Del Mar',
  },
  {
    id: 'proj-kitchen-6',
    category: 'kitchen',
    categoryLabel: 'Kitchen Remodel',
    location: 'Solana Beach, CA',
    title: 'Scandinavian Warm Wood & Crisp White Kitchen',
    description:
      'Two-tone custom cabinetry with warm maple base units and matte white uppers, concealed under-cabinet task lighting, and matte black plumbing.',
    duration: '4 Weeks',
    imageUrl: '/images/gallery/kitchen/kitchen-6.jpg',
    alt: 'Scandinavian style warm wood and white kitchen in Solana Beach',
  },
  {
    id: 'proj-kitchen-7',
    category: 'kitchen',
    categoryLabel: 'Kitchen Remodel',
    location: 'Oceanside, CA',
    title: 'Coastal Navy Blue Accent Island Transformation',
    description:
      'Striking coastal navy blue center island with satin brass handles, farmhouse fireclay apron sink, and seamless quartz solid surfaces.',
    duration: '5 Weeks',
    imageUrl: '/images/gallery/kitchen/kitchen-7.jpg',
    alt: 'Coastal kitchen remodel with navy accent island in Oceanside',
  },
  {
    id: 'proj-kitchen-8',
    category: 'kitchen',
    categoryLabel: 'Kitchen Remodel',
    location: 'Fallbrook, CA',
    title: 'Gourmet Estate Kitchen & Walk-In Butler Pantry',
    description:
      'Large estate kitchen remodel with walk-in pantry, secondary prep sink, pot filler over gas range, and wide-plank French oak hardwood flooring.',
    duration: '6.5 Weeks',
    imageUrl: '/images/gallery/kitchen/kitchen-8.jpg',
    alt: 'Gourmet estate kitchen with walk-in pantry in Fallbrook',
  },

  // ==========================================
  // 3. BATHROOMS (8 Projects)
  // ==========================================
  {
    id: 'proj-bath-1',
    category: 'bath',
    categoryLabel: 'Bathroom Renovation',
    location: 'Oceanside, CA',
    title: 'Modern Minimalist Floating Vanity & Tile Suite',
    description:
      'Space-maximizing wall-hung vanity cabinetry with integrated porcelain basin, modern illumination, fresh waterproof drywall, and low-flow plumbing.',
    duration: '2 Weeks',
    imageUrl: '/images/gallery/bath/bath-1.jpg',
    alt: 'Modern minimalist bathroom vanity and tile in Oceanside CA',
  },
  {
    id: 'proj-bath-2',
    category: 'bath',
    categoryLabel: 'Bathroom Renovation',
    location: 'Carlsbad, CA',
    title: 'Matte Black Heavy-Gauge Shower Enclosure',
    description:
      'Architectural sliding glass door assembly with modern matte black track hardware, seamless waterproof alcove walls, and dual-function thermostatic controls.',
    duration: '1.5 Weeks',
    imageUrl: '/images/gallery/bath/bath-2.jpg',
    alt: 'Walk-in shower enclosure with black hardware in Carlsbad CA',
  },
  {
    id: 'proj-bath-3',
    category: 'bath',
    categoryLabel: 'Bathroom Renovation',
    location: 'Vista, CA',
    title: 'Curbless Walk-In Shower & Waterproof Surround',
    description:
      'Zero-barrier roll-in shower conversion, Schluter hydro-membrane system, heavy-gauge roller glass enclosure, and anti-slip stone composite floor.',
    duration: '2.5 Weeks',
    imageUrl: '/images/gallery/bath/bath-3.jpg',
    alt: 'Curbless walk-in shower with roller glass doors in Vista CA',
  },
  {
    id: 'proj-bath-4',
    category: 'bath',
    categoryLabel: 'Bathroom Renovation',
    location: 'Encinitas, CA',
    title: 'Primary Ensuite Dark Timber Vanity & Quartz Top',
    description:
      'Custom dark timber double vanity with Calacatta quartz countertops, polished chrome widespread faucets, and frameless backlit LED vanity mirror.',
    duration: '3 Weeks',
    imageUrl: '/images/gallery/bath/bath-4.jpg',
    alt: 'High-end primary ensuite dark wood vanity in Encinitas CA',
  },
  {
    id: 'proj-bath-5',
    category: 'bath',
    categoryLabel: 'Bathroom Renovation',
    location: 'San Marcos, CA',
    title: 'Spa Rain Shower with Integrated Recessed Niche',
    description:
      'Ceiling-mounted 12-inch rain shower head, handheld wand, recessed shampoo niche with accent mosaic tiling, and modern water-efficient fixtures.',
    duration: '2 Weeks',
    imageUrl: '/images/gallery/bath/bath-5.jpg',
    alt: 'Spa walk-in glass shower enclosure in San Marcos CA',
  },
  {
    id: 'proj-bath-6',
    category: 'bath',
    categoryLabel: 'Bathroom Renovation',
    location: 'Solana Beach, CA',
    title: 'Freestanding Soaking Tub & Heated Tile Floor',
    description:
      'Cast-acrylic oval soaking tub, floor-mounted chrome filler with handheld sprayer, Schluter Ditra-Heat underfloor warming, and frosted privacy window.',
    duration: '3.5 Weeks',
    imageUrl: '/images/gallery/bath/bath-6.jpg',
    alt: 'Modern freestanding soaking tub and heated tile floor in Solana Beach',
  },
  {
    id: 'proj-bath-7',
    category: 'bath',
    categoryLabel: 'Bathroom Renovation',
    location: 'Del Mar, CA',
    title: 'Vertical Stacked Subway Tile & Glass Partition',
    description:
      'Floor-to-ceiling vertical stacked white artisan ceramic tile, brushed brass thermostatic controls, floating bench, and frameless glass partition.',
    duration: '2.5 Weeks',
    imageUrl: '/images/gallery/bath/bath-7.jpg',
    alt: 'Vertical stacked subway tile walk-in shower in Del Mar CA',
  },
  {
    id: 'proj-bath-8',
    category: 'bath',
    categoryLabel: 'Bathroom Renovation',
    location: 'Fallbrook, CA',
    title: 'Double White Oak Vanity & Brushed Gold Suite',
    description:
      'Custom 72-inch white oak dual vanity with vessel sinks, brushed gold wall-mounted faucets, dual medicine cabinets, and grey hexagon floor tiles.',
    duration: '3 Weeks',
    imageUrl: '/images/gallery/bath/bath-8.jpg',
    alt: 'Double vanity with custom mirrors and brushed brass in Fallbrook',
  },

  // ==========================================
  // 4. DECKS & BALCONIES (8 Projects)
  // ==========================================
  {
    id: 'proj-deck-1',
    category: 'deck',
    categoryLabel: 'Deck & Balcony',
    location: 'Encinitas, CA',
    title: 'Coastal Balcony & Structural Deck Overhaul',
    description:
      'Comprehensive framing rebuild replacing dry-rotted joists, securing ledger boards with heavy galvanized lags, and applying UV weather-barrier treatments.',
    duration: '3 Weeks',
    imageUrl: '/images/gallery/deck/deck-1.jpg',
    alt: 'Balcony renovation and structural wooden deck repair in Encinitas',
  },
  {
    id: 'proj-deck-2',
    category: 'deck',
    categoryLabel: 'Deck & Balcony',
    location: 'Carlsbad, CA',
    title: 'Side-by-Side Weathered Deck Restoration & Stain',
    description:
      'Deep power-wash stripping of sun-damaged planking, joist rot mitigation, sistering compromised supports, and marine-grade protective stain application.',
    duration: '2 Weeks',
    imageUrl: '/images/gallery/deck/deck-2.jpg',
    alt: 'Wooden balcony deck split view restoration in Carlsbad CA',
  },
  {
    id: 'proj-deck-3',
    category: 'deck',
    categoryLabel: 'Deck & Balcony',
    location: 'Solana Beach, CA',
    title: 'SB 721 Compliant Cantilever Deck Reconstruction',
    description:
      'Mandatory multi-family/single-family cantilever structural inspection, waterproofing membrane replacement, and steel hurricane bracket reinforcement.',
    duration: '3.5 Weeks',
    imageUrl: '/images/gallery/deck/deck-3.jpg',
    alt: 'Weather damaged outdoor deck undergoing structural restoration',
  },
  {
    id: 'proj-deck-4',
    category: 'deck',
    categoryLabel: 'Deck & Balcony',
    location: 'Oceanside, CA',
    title: 'Low-Maintenance Composite Deck with Cable Rail',
    description:
      'Trex Transcend composite planking with hidden fastener system, powder-coated black posts with 316 marine-grade stainless horizontal cable railings.',
    duration: '2.5 Weeks',
    imageUrl: '/images/gallery/deck/deck-4.jpg',
    alt: 'Modern composite outdoor deck with horizontal cable railings in Oceanside',
  },
  {
    id: 'proj-deck-5',
    category: 'deck',
    categoryLabel: 'Deck & Balcony',
    location: 'Del Mar, CA',
    title: 'Second-Story Ocean-View Balcony & Glass Windbreak',
    description:
      'Precision cantilever beam sistering, seamless vinyl walkable roof membrane, and 1/2-inch tempered coastal view-preserving glass windbreak panels.',
    duration: '4 Weeks',
    imageUrl: '/images/gallery/deck/deck-5.jpg',
    alt: 'Elevated cantilever second-story balcony with glass railing in Del Mar',
  },
  {
    id: 'proj-deck-6',
    category: 'deck',
    categoryLabel: 'Deck & Balcony',
    location: 'San Marcos, CA',
    title: 'Custom Redwood Deck with Integrated Bench Seating',
    description:
      'Natural heartwood redwood deck with custom perimeter picture framing, built-in L-shaped bench seating, and low-voltage LED riser lighting.',
    duration: '3 Weeks',
    imageUrl: '/images/gallery/deck/deck-6.jpg',
    alt: 'Redwood deck with custom built-in seating in San Marcos CA',
  },
  {
    id: 'proj-deck-7',
    category: 'deck',
    categoryLabel: 'Deck & Balcony',
    location: 'Vista, CA',
    title: 'Multi-Level Hillside Terrace & Sun Deck',
    description:
      'Engineered concrete pier footings anchored into bedrock, heavy joist framing, multi-tier entertaining platforms, and matching architectural pergola.',
    duration: '4.5 Weeks',
    imageUrl: '/images/gallery/deck/deck-7.jpg',
    alt: 'Coastal view terrace with cedar decking in Vista CA',
  },
  {
    id: 'proj-deck-8',
    category: 'deck',
    categoryLabel: 'Deck & Balcony',
    location: 'Fallbrook, CA',
    title: 'Wrap-Around Outdoor Living Deck & Step Illumination',
    description:
      '1,200 sq ft expansive wrap-around deck surrounding home perimeter with wide stairs, commercial code handrails, and flush-mounted deck lighting.',
    duration: '5 Weeks',
    imageUrl: '/images/gallery/deck/deck-8.jpg',
    alt: 'Multi-level hillside outdoor living deck in Fallbrook CA',
  },

  // ==========================================
  // 5. RETAINING WALLS & STRUCTURAL (8 Projects)
  // ==========================================
  {
    id: 'proj-structural-1',
    category: 'structural',
    categoryLabel: 'Structural & Masonry',
    location: 'San Marcos, CA',
    title: 'Engineered CMU Retaining Wall on Sloped Hillside',
    description:
      'Structural retaining wall preventing severe slope erosion, incorporating perforated drainage piping, waterproof membrane, and finished capstones.',
    duration: '3.5 Weeks',
    imageUrl: '/images/gallery/structural/structural-1.jpg',
    alt: 'CMU retaining wall installation on landscaped sloped hillside in San Marcos',
  },
  {
    id: 'proj-structural-2',
    category: 'structural',
    categoryLabel: 'Structural & Masonry',
    location: 'Vista, CA',
    title: 'Driveway Slope Stabilization & French Drain System',
    description:
      'Heavy-duty split-face block wall along driveway with washed aggregate drainage bed, geotextile fabric filter, and city storm-drain tie-in.',
    duration: '3 Weeks',
    imageUrl: '/images/gallery/structural/structural-2.jpg',
    alt: 'CMU block retaining wall along paved driveway in Vista CA',
  },
  {
    id: 'proj-structural-3',
    category: 'structural',
    categoryLabel: 'Structural & Masonry',
    location: 'Vista, CA',
    title: '120-Foot Tiered CMU Retaining & Drainage Wall',
    description:
      'Continuous 120-linear-foot retaining wall engineering, rebar-reinforced core cells filled with 3,000 PSI grout, and integrated terrace landscaping.',
    duration: '4 Weeks',
    imageUrl: '/images/gallery/structural/structural-3.jpg',
    alt: '120-foot CMU retaining wall and drainage system in Vista CA',
  },
  {
    id: 'proj-structural-4',
    category: 'structural',
    categoryLabel: 'Structural & Masonry',
    location: 'Carlsbad, CA',
    title: 'Terraced Concrete Block Wall with Planting Beds',
    description:
      'Two-tier gravity retaining structure converting unusable 35-degree coastal hillside into level patio terraces and succulent planter gardens.',
    duration: '4 Weeks',
    imageUrl: '/images/gallery/structural/structural-4.jpg',
    alt: 'Terraced concrete block retaining wall with gravel drainage in Carlsbad',
  },
  {
    id: 'proj-structural-5',
    category: 'structural',
    categoryLabel: 'Structural & Masonry',
    location: 'Encinitas, CA',
    title: 'Architectural Stone Veneer Hillside Boundary Wall',
    description:
      'Engineered core CMU blocks faced with natural stacked coastal ledger stone, smooth limestone cap, and concealed hydrostatic pressure relief pipes.',
    duration: '3.5 Weeks',
    imageUrl: '/images/gallery/structural/structural-5.jpg',
    alt: 'Heavy stone veneer retaining wall with capping stones in Encinitas',
  },
  {
    id: 'proj-structural-6',
    category: 'structural',
    categoryLabel: 'Structural & Masonry',
    location: 'Solana Beach, CA',
    title: 'Hillside Erosion Control Wall & Permeable Pavers',
    description:
      'Geotechnical slope stabilization system with interlocking structural blocks, geo-grid soil reinforcement, and heavy-duty permeable pavers.',
    duration: '4.5 Weeks',
    imageUrl: '/images/gallery/structural/structural-6.jpg',
    alt: 'Hillside erosion control wall with engineered pavers in Solana Beach',
  },
  {
    id: 'proj-structural-7',
    category: 'structural',
    categoryLabel: 'Structural & Masonry',
    location: 'Oceanside, CA',
    title: 'Deep Trench Rebar Concrete Foundation Pour',
    description:
      'Engineered continuous footing trench excavation, #5 Grade 60 rebar cage assembly, municipal city inspection sign-off, and high-strength concrete pour.',
    duration: '2.5 Weeks',
    imageUrl: '/images/gallery/structural/structural-7.jpg',
    alt: 'Rebar-reinforced concrete footing pour for structural wall in Oceanside',
  },
  {
    id: 'proj-structural-8',
    category: 'structural',
    categoryLabel: 'Structural & Masonry',
    location: 'Fallbrook, CA',
    title: 'Multi-Tier Garden Retaining Wall & Integrated Stairs',
    description:
      'Engineered multi-level retention system with cast concrete steps connecting upper avocado orchard to lower residential entertainment patio.',
    duration: '5 Weeks',
    imageUrl: '/images/gallery/structural/structural-8.jpg',
    alt: 'Tiered garden retaining wall with integrated concrete steps in Fallbrook',
  },
]

export const GALLERY_TESTIMONIAL = {
  quote:
    '“BAS General Contractor exceeded my hopes for our custom installation. Their on-site framing precision, constant permitting updates, and prompt delivery made the entire build completely seamless.”',
  author: 'Christina Barney',
  location: 'Verified Homeowner • Oceanside, CA Remodel',
}

export const GALLERY_CONSULTATION_INFO = {
  badge: 'Licensed & Bonded In California',
  title: 'Ready to Build Your Next North County Milestone?',
  description:
    'Whether you are planning a ground-up ADU, rebuilding an exterior cantilever balcony, or remodeling a high-traffic kitchen, our licensed estimators provide detailed, zero-surprise cost breakdowns.',
  pillars: [
    {
      title: 'Direct CSLB #1092902 Accountability',
      desc: 'We handle architectural plans, city plan-checks, permit submittals, and inspection scheduling.',
    },
    {
      title: 'Direct On-Site Supervision',
      desc: 'Founder Belen Silva personally oversees framing, concrete footings, and structural inspections.',
    },
    {
      title: 'Direct Phone Access',
      desc: 'Speak directly with project management: (760) 801-2065',
      phone: '(760) 801-2065',
      phoneRaw: '7608012065',
    },
  ],
  servingCities:
    'Serving: Vista, Carlsbad, Oceanside, Encinitas, San Marcos, Fallbrook, & Solana Beach',
}
