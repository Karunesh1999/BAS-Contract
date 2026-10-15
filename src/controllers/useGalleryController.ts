import { useState, useMemo, useCallback } from 'react'
import {
  GALLERY_SLIDES,
  GALLERY_PROJECT_CARDS,
  GALLERY_FILTER_TABS,
} from '../models/data/gallery.data'
import type {
  GalleryFilterCategory,
  GalleryInquiryFormData,
  GalleryProjectCard,
} from '../models/types'

const INITIAL_FORM: GalleryInquiryFormData = {
  fullName: '',
  phone: '',
  email: '',
  projectCity: '',
  projectType: 'adu',
  projectNotes: '',
}

export function useGalleryController() {
  // Slider State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const totalSlides = GALLERY_SLIDES.length
  const currentSlide = GALLERY_SLIDES[currentSlideIndex]

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < GALLERY_SLIDES.length) {
      setCurrentSlideIndex(index)
    }
  }, [])

  // Filter State
  const [selectedFilter, setSelectedFilter] =
    useState<GalleryFilterCategory>('all')

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') {
      return GALLERY_PROJECT_CARDS
    }
    return GALLERY_PROJECT_CARDS.filter(
      (proj) => proj.category === selectedFilter
    )
  }, [selectedFilter])

  // Lightbox Dialog State for Services
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxCategory, setLightboxCategory] =
    useState<GalleryProjectCard['category'] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Get all projects for the currently opened service category in modal
  const lightboxProjects = useMemo(() => {
    if (!lightboxCategory) return []
    return GALLERY_PROJECT_CARDS.filter(
      (proj) => proj.category === lightboxCategory
    )
  }, [lightboxCategory])

  const openLightbox = useCallback((project: GalleryProjectCard) => {
    const categoryProjects = GALLERY_PROJECT_CARDS.filter(
      (proj) => proj.category === project.category
    )
    const foundIdx = categoryProjects.findIndex((p) => p.id === project.id)
    setLightboxCategory(project.category)
    setLightboxIndex(foundIdx !== -1 ? foundIdx : 0)
    setIsLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false)
  }, [])

  const nextLightboxProject = useCallback(() => {
    if (lightboxProjects.length === 0) return
    setLightboxIndex((prev) => (prev + 1) % lightboxProjects.length)
  }, [lightboxProjects.length])

  const prevLightboxProject = useCallback(() => {
    if (lightboxProjects.length === 0) return
    setLightboxIndex(
      (prev) => (prev - 1 + lightboxProjects.length) % lightboxProjects.length
    )
  }, [lightboxProjects.length])

  const goToLightboxIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < lightboxProjects.length) {
        setLightboxIndex(index)
      }
    },
    [lightboxProjects.length]
  )

  // Form State
  const [formData, setFormData] = useState<GalleryInquiryFormData>(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const updateField = <K extends keyof GalleryInquiryFormData>(
    field: K,
    value: GalleryInquiryFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errorMessage) setErrorMessage(null)
  }

  const resetForm = () => {
    setFormData(INITIAL_FORM)
    setIsSubmitted(false)
    setErrorMessage(null)
  }

  const prefillScopeAndScroll = useCallback(
    (scopeCategory: string, titleHint?: string) => {
      setFormData((prev) => ({
        ...prev,
        projectType: scopeCategory,
        projectNotes: titleHint
          ? `Inquiry regarding specifications similar to: ${titleHint}`
          : prev.projectNotes,
      }))

      const element = document.getElementById('quick-consultation')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    []
  )

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.')
      return
    }

    if (!formData.phone.trim()) {
      setErrorMessage('Please enter a valid phone number.')
      return
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    if (!formData.projectCity.trim()) {
      setErrorMessage('Please enter your project city or zip code.')
      return
    }

    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsSubmitted(true)
    } catch {
      setErrorMessage(
        'An error occurred submitting your request. Please call us directly at (760) 801-2065.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    // Slider
    currentSlideIndex,
    totalSlides,
    currentSlide,
    allSlides: GALLERY_SLIDES,
    nextSlide,
    prevSlide,
    goToSlide,

    // Filter
    filterTabs: GALLERY_FILTER_TABS,
    selectedFilter,
    setSelectedFilter,
    filteredProjects,

    // Service Lightbox Dialog
    isLightboxOpen,
    lightboxIndex,
    lightboxProjects,
    openLightbox,
    closeLightbox,
    nextLightboxProject,
    prevLightboxProject,
    goToLightboxIndex,

    // Form
    formData,
    updateField,
    prefillScopeAndScroll,
    handleSubmit,
    resetForm,
    isSubmitting,
    isSubmitted,
    errorMessage,
  }
}
