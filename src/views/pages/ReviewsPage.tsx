import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ReviewsHeroSection } from '../../components/sections/reviews/ReviewsHeroSection'
import { ReviewsScorecardSection } from '../../components/sections/reviews/ReviewsScorecardSection'
import { ReviewsFilterControlsSection } from '../../components/sections/reviews/ReviewsFilterControlsSection'
import { ReviewsGridSection } from '../../components/sections/reviews/ReviewsGridSection'
import { ReviewsSpotlightSection } from '../../components/sections/reviews/ReviewsSpotlightSection'
import { ReviewsWriteFormSection } from '../../components/sections/reviews/ReviewsWriteFormSection'
import { ReviewsConsultationSection } from '../../components/sections/reviews/ReviewsConsultationSection'
import { VideoPlayerModal } from '../../components/modals/VideoPlayerModal'
import { useReviewsController } from '../../controllers/useReviewsController'

export const ReviewsPage: React.FC = () => {
  const reviewsController = useReviewsController()
  const { hash } = useLocation()

  useEffect(() => {
    document.title =
      'Client Reviews & Testimonials | BAS General Contractor Inc. — 5.0 Google Verified'
  }, [])

  // Handle direct hash navigation on load
  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '')
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) {
          const isTestimonialSection =
            targetId === 'testimonials' || targetId === 'reviews-grid'
          const headerOffset = isTestimonialSection ? 175 : 112
          const elementPosition = el.getBoundingClientRect().top
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth',
          })
        }
      }, 120)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [hash])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const isTestimonialSection =
        id === 'testimonials' || id === 'reviews-grid'
      const headerOffset = isTestimonialSection ? 175 : 112
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="flex flex-col w-full bg-[#f8fafc]">
      {/* 1. Breadcrumbs & Page Header */}
      <ReviewsHeroSection
        onWriteReviewClick={() => scrollToSection('write-review')}
        onScheduleClick={() => scrollToSection('consultation-form')}
      />

      {/* 2. Scorecard & Trust Metrics Banner */}
      <ReviewsScorecardSection />

      {/* 3. Interactive Filter Chips & Sticky Controls */}
      <ReviewsFilterControlsSection controller={reviewsController} />

      {/* 4. Masonry / 3-Column Reviews Grid */}
      <ReviewsGridSection reviews={reviewsController.displayedReviews} />

      {/* 5. Spotlight Client Case & Field Proof (Cinematic Section) */}
      <ReviewsSpotlightSection />

      {/* 6. Leave a Verified Review Intake Section */}
      <ReviewsWriteFormSection controller={reviewsController} />

      {/* 7. Free Consultation & Estimate Intake */}
      <ReviewsConsultationSection controller={reviewsController} />

      {/* Interactive Video Player Modal */}
      <VideoPlayerModal
        isOpen={reviewsController.isVideoModalOpen}
        onClose={reviewsController.closeVideoModal}
        onBookEstimate={() => {
          reviewsController.closeVideoModal()
          scrollToSection('consultation-form')
        }}
      />
    </div>
  )
}

export default ReviewsPage
