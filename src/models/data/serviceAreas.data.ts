import type { ServiceAreaCity } from '../types'

export const SERVICE_AREAS: ServiceAreaCity[] = [
  {
    id: 'vista',
    name: 'Vista (Headquarters)',
    isHeadquarters: true,
    description: 'Our primary headquarters, equipment dispatch, and materials staging yard.',
    distanceMiles: 0,
    averagePermitDays: 14,
    zoningHighlights: [
      'Vista Building Department expedited ADU pre-approved plan sets',
      'Standard 4-foot rear & side setbacks for detached ADUs',
      'No minimum lot size requirement under California state law',
    ],
  },
  {
    id: 'carlsbad',
    name: 'Carlsbad',
    description: 'Coastal and inland luxury remodels, master suites, and detached guest houses.',
    distanceMiles: 8,
    averagePermitDays: 21,
    zoningHighlights: [
      'Coastal Zone guidelines and scenic corridor requirements',
      'Strict fire clearance zones and stucco/siding material specifications',
      'Water meter capacity assessments handled seamlessly',
    ],
  },
  {
    id: 'oceanside',
    name: 'Oceanside',
    description: 'Beach cottage renovations, whole-home rebuilds, and high-yield rental ADUs.',
    distanceMiles: 9,
    averagePermitDays: 18,
    zoningHighlights: [
      'Expedited residential solar and electrical service upgrades',
      'Alley access detached garage conversions (JADUs)',
      'Floodplain and coastal bluff setback compliance verification',
    ],
  },
  {
    id: 'san-marcos',
    name: 'San Marcos',
    description: 'Modern family additions, open-concept floorplans, and backyard casitas.',
    distanceMiles: 7,
    averagePermitDays: 16,
    zoningHighlights: [
      'Topography grading and retaining wall engineering',
      'Vallecitos Water District sewer lateral tie-ins',
      'Subdivision HOA architectural review board submissions',
    ],
  },
  {
    id: 'encinitas',
    name: 'Encinitas',
    description: 'High-end architectural remodels, luxury baths, and custom ADU homes.',
    distanceMiles: 14,
    averagePermitDays: 24,
    zoningHighlights: [
      'Encinitas PRADU (Permit Ready ADU) program integration',
      'Green building Title 24 energy compliance certifications',
      'Historical preservation and neighborhood overlay compatibility',
    ],
  },
  {
    id: 'escondido',
    name: 'Escondido',
    description: 'Expansive lot guest homes, equestrian property ADUs, and total kitchen conversions.',
    distanceMiles: 12,
    averagePermitDays: 18,
    zoningHighlights: [
      'Large rural residential zoning accommodating up to 1,200 sq ft ADUs',
      'Septic tank expansion and perc test certifications',
      'Wildland-Urban Interface (WUI) fire sprinkler requirements',
    ],
  },
  {
    id: 'fallbrook',
    name: 'Fallbrook',
    description: 'Custom estate additions, accessory cottages, and structural civil groundwork.',
    distanceMiles: 16,
    averagePermitDays: 20,
    zoningHighlights: [
      'County of San Diego building department jurisdiction',
      'Slope stability and engineered pad grading',
      'Propane and well pump utility connections',
    ],
  },
  {
    id: 'la-costa',
    name: 'La Costa',
    description: 'Resort-style outdoor living, kitchen overhauls, and multigenerational quarters.',
    distanceMiles: 11,
    averagePermitDays: 21,
    zoningHighlights: [
      'Strict HOA architectural consistency approvals',
      'Soundproofing and acoustic insulation between shared walls',
      'Modern low-profile rooflines and glass accordion doors',
    ],
  },
  {
    id: 'cardiff',
    name: 'Cardiff-by-the-Sea',
    description: 'Coastal craftsman remodels, indoor-outdoor living, and modern studio additions.',
    distanceMiles: 16,
    averagePermitDays: 25,
    zoningHighlights: [
      'Strict height limit and ocean view preservation ordinances',
      'Corrosion-resistant coastal hardware and fasteners',
      'Maximizing tight zero-lot-line urban spaces',
    ],
  },
]
