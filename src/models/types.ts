export type ProjectCategory = 'adu' | 'kitchen' | 'bathroom' | 'addition' | 'grading' | 'other'

export interface ServiceItem {
  id: string
  title: string
  tagline: string
  description: string
  iconName: string
  features: string[]
  ctaText: string
  category: ProjectCategory
  highlight?: boolean
}

export interface ProjectCaseStudy {
  id: string
  title: string
  location: string
  category: ProjectCategory
  specSummary: string
  detailLabel: string
  imageUrl: string
  secondaryImageUrl?: string
  alt: string
  stats: {
    duration: string
    sqft: string
    permitTime: string
  }
  description: string
}

export interface ClientReview {
  id: string
  author: string
  initials: string
  projectType: string
  rating: number
  reviewText: string
  date: string
  tag: string
  location?: string
}

export interface ServiceAreaCity {
  id: string
  name: string
  isHeadquarters?: boolean
  description: string
  zoningHighlights: string[]
  averagePermitDays: number
  distanceMiles: number
}

export interface EstimateFormData {
  fullName: string
  phone: string
  email: string
  projectType: ProjectCategory | ''
  propertyAddress: string
  notes: string
  estimatedBudgetRange?: string
  preferredTimeline?: string
}

export interface AduCalculationInputs {
  squareFootage: number
  aduType: 'detached' | 'attached' | 'garage_conversion' | 'jadu'
  finishLevel: 'standard' | 'luxury' | 'ultra_premium'
}

export interface AduCalculationResults {
  estimatedCostMin: number
  estimatedCostMax: number
  monthlyRentalYieldMin: number
  monthlyRentalYieldMax: number
  equitySurgeMin: number
  equitySurgeMax: number
  timelineWeeks: string
}

export interface MetricItem {
  value: string
  label: string
  sublabel?: string
  accent?: boolean
}

export interface AboutMilestone {
  id: string
  milestoneNumber: string
  year: string
  periodTitle: string
  headline: string
  storyQuote: string
  tags: string[]
  statBox?: {
    value: string
    description: string
    icon: 'apartment' | 'location_city' | 'verified' | 'building'
  }
  photoShowcase?: {
    imageUrl: string
    alt: string
    badge: string
    caption: string
  }
  isHighlighted?: boolean
}

export interface AboutPillar {
  id: string
  title: string
  description: string
  icon: 'engineering' | 'handyman' | 'assignment_turned_in' | 'receipt_long'
}

export interface CraftsmanshipProject {
  id: string
  categoryBadge: string
  title: string
  description: string
  imageUrl: string
  alt: string
}

export interface AboutContactFormData {
  name: string
  email: string
  phone: string
  location: string
  message: string
}

export interface ServicesQuoteFormData {
  fullName: string
  phone: string
  email: string
  propertyCity: string
  primaryService: string
  projectNotes: string
  preferSpanish: boolean
}

export interface ServiceTableRow {
  id: string
  category: string
  permitRequired: string
  permitStatusType?: 'always' | 'scope' | 'elevated' | 'standard'
  timeline: string
  keyFocus: string
  anchorId: string
}

export interface GallerySlideItem {
  id: string
  img: string
  alt?: string
  status: string
  category: string
  location: string
  title: string
  desc: string
  scope: string
  time: string
  permit: string
  code: string
}

export type GalleryFilterCategory = 'all' | 'adu' | 'kitchen' | 'bath' | 'deck' | 'structural'

export interface GalleryProjectCard {
  id: string
  category: 'adu' | 'kitchen' | 'bath' | 'deck' | 'structural'
  categoryLabel: string
  location: string
  title: string
  description: string
  duration: string
  imageUrl: string
  alt?: string
}

export interface GalleryInquiryFormData {
  fullName: string
  phone: string
  email: string
  projectCity: string
  projectType: string
  projectNotes: string
}

export type ReviewCategory = 'all' | 'adu' | 'remodel' | 'structural' | 'deck'
export type ReviewSortOption = 'highest' | 'recent' | 'scale'

export interface DetailedReviewItem {
  id: string
  author: string
  initials: string
  initialsBg: string
  initialsTextColor: string
  location: string
  rating: number
  dateLabel: string
  dateIso: string
  tags: { label: string; highlight?: boolean }[]
  reviewText: string
  response?: {
    author: string
    role: string
    text: string
  }
  category: 'adu' | 'remodel' | 'structural' | 'deck'
  scale: number
}

export interface ReviewFormState {
  stars: number
  fullName: string
  city: string
  projectScope: string
  completionYear: string
  reviewText: string
}

export interface ReviewsConsultationFormState {
  name: string
  phone: string
  email: string
  city: string
  scope: string
  notes: string
}

export type FaqCategory = 'all' | 'licensing' | 'adus' | 'remodeling' | 'pricing'

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: 'licensing' | 'adus' | 'remodeling' | 'pricing'
  categoryLabel: string
  highlight?: string
}

