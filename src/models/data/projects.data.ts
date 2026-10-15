import type { ProjectCaseStudy } from '../types'

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'arcadia-kitchen',
    title: 'Arcadia Kitchen & Range Suite',
    location: 'Vista, CA',
    category: 'kitchen',
    specSummary: 'Custom Shaker Cabinets & Quartz',
    detailLabel: 'Completed Project',
    imageUrl: '/images/projects/kitchen-remodel.jpg',
    secondaryImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARCOaewX_0sUx2sQTI9kmC8dNQzPwVZAOT981Bnvi51G11w5-Jn7sDKu5SUT6ECaF1MtOHD9AqrsP_-ALVR6mtBo_sV_SGNf4R4ASHqRFVr8uoKNVYsYHZJBJ6espGZYUJzKpve6t29p_lzqNzmrTTBuTKypC45WFoktG4I7qL4or7YCs7BYGray5fVA9bB-qnJuIWgl4sRBDBE5RTBEF6LAAHfHGxx9v9NjOiQ8zRiCdDUTz7N_wzWw',
    alt: 'Modern California kitchen remodel built by BAS General Contractor in Vista California featuring rich dark shaker espresso wood cabinets, polished quartz marble-veined countertops, stainless steel gas stove range and microwave, neutral beige walls with natural daylight, and luxury wood grain flooring.',
    stats: {
      duration: '4 Weeks',
      sqft: '420 sq ft',
      permitTime: 'Fast-Track',
    },
    description:
      'Full kitchen reconfiguration featuring custom espresso shaker cabinetry, mitered edge Calacatta quartz countertops, commercial-grade slide-in range, built-in microwave niche, and continuous luxury vinyl plank flooring.',
  },
  {
    id: 'oak-lvp-hallway',
    title: 'Oak LVP & Architectural Trim',
    location: 'North County San Diego, CA',
    category: 'addition',
    specSummary: 'Seamless Level 5 Drywall & Custom Baseboards',
    detailLabel: 'Interior Spec',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARCOaewX_0sUx2sQTI9kmC8dNQzPwVZAOT981Bnvi51G11w5-Jn7sDKu5SUT6ECaF1MtOHD9AqrsP_-ALVR6mtBo_sV_SGNf4R4ASHqRFVr8uoKNVYsYHZJBJ6espGZYUJzKpve6t29p_lzqNzmrTTBuTKypC45WFoktG4I7qL4or7YCs7BYGray5fVA9bB-qnJuIWgl4sRBDBE5RTBEF6LAAHfHGxx9v9NjOiQ8zRiCdDUTz7N_wzWw',
    alt: 'Architectural perspective of modern bright residential hallway featuring honey oak luxury vinyl plank flooring, crisp white casing, recessed warm ceiling downlights, and pristine flat gray drywall finishes installed by BAS General Contractor in North County San Diego.',
    stats: {
      duration: '10 Days',
      sqft: '1,800 sq ft',
      permitTime: 'Direct Oversight',
    },
    description:
      'A whole-home flooring and drywall modernization including subfloor leveling, premium 20mil wear layer honey oak vinyl planks, 5-1/4 inch modern square baseboards, and smooth Level 5 drywall finish.',
  },
  {
    id: 'arcadia-adu-tour',
    title: 'Arcadia Ave Custom Detached ADU',
    location: 'Vista, CA',
    category: 'adu',
    specSummary: '750 sq ft 2-Bedroom ADU with Private Patio',
    detailLabel: 'Video Walkthrough Project',
    imageUrl: '/images/projects/adu-turnkey.jpg',
    alt: 'Interior walkthrough video still of finished San Diego accessory dwelling unit bedroom showing modern white sliding closet doors, neutral gray trim, warm luxury vinyl plank wood floors, and bright natural lighting constructed by BAS General Contractor.',
    stats: {
      duration: '14 Weeks',
      sqft: '750 sq ft',
      permitTime: 'Approved 1st Pass',
    },
    description:
      'Turnkey ground-up detached ADU build. Complete with independent 200A electrical panel, high-efficiency mini-split HVAC, dedicated laundry alcove, vaulted ceilings, and custom designer finishes throughout.',
  },
]
