import { useState, useMemo, useCallback } from 'react'
import {
  DETAILED_REVIEWS_LIST,
  REVIEWS_FILTER_TABS,
  STAR_RATING_LABELS,
} from '../models/data/reviewsPage.data'
import { CLIENT_REVIEWS } from '../models/data/reviews.data'
import type {
  ReviewCategory,
  ReviewSortOption,
  ReviewFormState,
  ReviewsConsultationFormState,
  ClientReview,
} from '../models/types'

export type ReviewFilterCategory = 'all' | 'kitchen-bath' | 'flooring-remodel'

const INITIAL_REVIEW_FORM: ReviewFormState = {
  stars: 5,
  fullName: '',
  city: 'Vista',
  projectScope: 'ADU',
  completionYear: '2024',
  reviewText: '',
}

const INITIAL_CONSULTATION_FORM: ReviewsConsultationFormState = {
  name: '',
  phone: '',
  email: '',
  city: 'Vista, CA',
  scope: 'ADU',
  notes: '',
}

export function useReviewsController() {
  // 0. Backwards Compatibility for HomePage ReviewsSection
  const [activeCategory, setActiveCategory] =
    useState<ReviewFilterCategory>('all')

  const reviews = useMemo<ClientReview[]>(() => {
    if (activeCategory === 'kitchen-bath') {
      return CLIENT_REVIEWS.filter(
        (r) =>
          r.projectType.toLowerCase().includes('bath') ||
          r.projectType.toLowerCase().includes('kitchen')
      )
    }
    if (activeCategory === 'flooring-remodel') {
      return CLIENT_REVIEWS.filter(
        (r) =>
          r.projectType.toLowerCase().includes('flooring') ||
          r.projectType.toLowerCase().includes('archway') ||
          r.projectType.toLowerCase().includes('entryway') ||
          r.projectType.toLowerCase().includes('remodel')
      )
    }
    return CLIENT_REVIEWS
  }, [activeCategory])

  // 1. Filtering & Sorting for Dedicated Reviews Page
  const [selectedCategory, setSelectedCategory] =
    useState<ReviewCategory>('all')
  const [sortOption, setSortOption] = useState<ReviewSortOption>('highest')

  const displayedReviews = useMemo(() => {
    // Filter
    let list =
      selectedCategory === 'all'
        ? [...DETAILED_REVIEWS_LIST]
        : DETAILED_REVIEWS_LIST.filter(
            (rev) => rev.category === selectedCategory
          )

    // Sort
    list.sort((a, b) => {
      if (sortOption === 'recent') {
        return b.dateIso.localeCompare(a.dateIso)
      } else if (sortOption === 'scale') {
        return b.scale - a.scale
      } else {
        // 'highest'
        return b.rating - a.rating
      }
    })

    return list
  }, [selectedCategory, sortOption])

  // 2. Video Modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const openVideoModal = useCallback(() => setIsVideoModalOpen(true), [])
  const closeVideoModal = useCallback(() => setIsVideoModalOpen(false), [])

  // 3. Write Review Form State
  const [reviewForm, setReviewForm] =
    useState<ReviewFormState>(INITIAL_REVIEW_FORM)
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false)
  const [reviewSubmitFeedback, setReviewSubmitFeedback] = useState<
    string | null
  >(null)

  const setStars = useCallback((count: number) => {
    setReviewForm((prev) => ({ ...prev, stars: count }))
  }, [])

  const updateReviewField = useCallback(
    <K extends keyof ReviewFormState>(field: K, value: ReviewFormState[K]) => {
      setReviewForm((prev) => ({ ...prev, [field]: value }))
    },
    []
  )

  const handleReviewSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      setIsReviewSubmitted(true)
      setReviewSubmitFeedback(
        'Thank you! Your verified homeowner review has been submitted to BAS General Contractor Inc.'
      )
    },
    []
  )

  const resetReviewForm = useCallback(() => {
    setReviewForm(INITIAL_REVIEW_FORM)
    setIsReviewSubmitted(false)
    setReviewSubmitFeedback(null)
  }, [])

  // 4. Consultation Form State
  const [consultationForm, setConsultationForm] =
    useState<ReviewsConsultationFormState>(INITIAL_CONSULTATION_FORM)
  const [isConsultationSubmitted, setIsConsultationSubmitted] = useState(false)

  const updateConsultationField = useCallback(
    <K extends keyof ReviewsConsultationFormState>(
      field: K,
      value: ReviewsConsultationFormState[K]
    ) => {
      setConsultationForm((prev) => ({ ...prev, [field]: value }))
    },
    []
  )

  const handleConsultationSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      setIsConsultationSubmitted(true)
    },
    []
  )

  const resetConsultationForm = useCallback(() => {
    setConsultationForm(INITIAL_CONSULTATION_FORM)
    setIsConsultationSubmitted(false)
  }, [])

  return {
    // Backwards compatibility for ReviewsSection.tsx on HomePage
    reviews,
    activeCategory,
    setActiveCategory,

    // Filter & Sort for Reviews Page
    filterTabs: REVIEWS_FILTER_TABS,
    selectedCategory,
    setSelectedCategory,
    sortOption,
    setSortOption,
    displayedReviews,
    visibleCount: displayedReviews.length,

    // Video modal
    isVideoModalOpen,
    openVideoModal,
    closeVideoModal,

    // Write review form
    reviewForm,
    setStars,
    updateReviewField,
    handleReviewSubmit,
    isReviewSubmitted,
    reviewSubmitFeedback,
    resetReviewForm,
    starFeedbackText:
      STAR_RATING_LABELS[reviewForm.stars] ||
      '5.0 - Exceptional Quality & Communication',

    // Consultation form
    consultationForm,
    updateConsultationField,
    handleConsultationSubmit,
    isConsultationSubmitted,
    resetConsultationForm,
  }
}
