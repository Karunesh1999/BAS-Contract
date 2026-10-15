import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { GalleryHeroSection } from '../../components/sections/gallery/GalleryHeroSection'
import { InteractiveShowcaseSliderSection } from '../../components/sections/gallery/InteractiveShowcaseSliderSection'
import { FilterableWorkGridSection } from '../../components/sections/gallery/FilterableWorkGridSection'
import { GalleryTestimonialBanner } from '../../components/sections/gallery/GalleryTestimonialBanner'
import { GalleryConsultationFormSection } from '../../components/sections/gallery/GalleryConsultationFormSection'
import { GalleryServiceLightboxModal } from '../../components/modals/GalleryServiceLightboxModal'
import { useGalleryController } from '../../controllers/useGalleryController'

export const GalleryPage: React.FC = () => {
  const galleryController = useGalleryController()
  const { hash } = useLocation()

  useEffect(() => {
    document.title =
      'Project Gallery & Field Portfolio | BAS General Contractor Inc. — CSLB #1092902'
  }, [])

  // Support direct hash navigation on page load
  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '')
      setTimeout(() => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [hash])

  const handleScrollToEstimate = () => {
    const el = document.getElementById('quick-consultation')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleRequestSimilar = (category: string, title: string) => {
    galleryController.prefillScopeAndScroll(category, title)
  }

  return (
    <div className="flex flex-col w-full bg-[#f8fafc]">
      {/* 1. Header & Breadcrumbs & Stats Band */}
      <GalleryHeroSection onScheduleClick={handleScrollToEstimate} />

      {/* 2. Interactive Featured Showcase Slider */}
      <InteractiveShowcaseSliderSection
        controller={galleryController}
        onRequestSimilar={handleRequestSimilar}
      />

      {/* 3. Filterable Work Grid */}
      <FilterableWorkGridSection
        controller={galleryController}
        onProjectClick={handleRequestSimilar}
        onRequestPortfolioClick={handleScrollToEstimate}
      />

      {/* 4. Client Testimonial Banner */}
      <GalleryTestimonialBanner />

      {/* 5. Ready to Build Consultation & Intake Form */}
      <GalleryConsultationFormSection controller={galleryController} />

      {/* 6. Service Gallery Interactive Lightbox Dialog (< > Navigation) */}
      <GalleryServiceLightboxModal
        isOpen={galleryController.isLightboxOpen}
        onClose={galleryController.closeLightbox}
        projects={galleryController.lightboxProjects}
        currentIndex={galleryController.lightboxIndex}
        onNext={galleryController.nextLightboxProject}
        onPrev={galleryController.prevLightboxProject}
        onSelectIndex={galleryController.goToLightboxIndex}
        onRequestEstimate={handleRequestSimilar}
      />
    </div>
  )
}

export default GalleryPage
