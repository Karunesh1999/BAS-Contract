import React, { useState } from 'react'
import { HeroSection } from '../../components/sections/HeroSection'
import { BentoServicesSection } from '../../components/sections/BentoServicesSection'
import { AduCaseStudySection } from '../../components/sections/AduCaseStudySection'
import { ServiceCoverageSection } from '../../components/sections/ServiceCoverageSection'
import { ReviewsSection } from '../../components/sections/ReviewsSection'
import { EstimateFormSection } from '../../components/sections/EstimateFormSection'
import { DirectCalloutSection } from '../../components/sections/DirectCalloutSection'
import { VideoPlayerModal } from '../../components/modals/VideoPlayerModal'
import { AduCalculatorModal } from '../../components/modals/AduCalculatorModal'
import { ProjectDetailsModal } from '../../components/modals/ProjectDetailsModal'
import type { ProjectCaseStudy, ProjectCategory } from '../../models/types'

export interface HomePageProps {
  onScrollToEstimate: () => void
}

export const HomePage: React.FC<HomePageProps> = ({ onScrollToEstimate }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
  const [prefilledScope, setPrefilledScope] = useState<string>('')
  const [prefilledNotes, setPrefilledNotes] = useState<string>('')

  const handleSelectCategory = (category: ProjectCategory) => {
    setPrefilledScope(category)
    onScrollToEstimate()
  }

  const handleApplyCalculatorNotes = (notes: string) => {
    setPrefilledScope('adu')
    setPrefilledNotes(notes)
    onScrollToEstimate()
  }

  const handleBookSimilarProject = (projectTitle: string) => {
    setPrefilledNotes(`Inquiry regarding specifications similar to: ${projectTitle}`)
    onScrollToEstimate()
  }

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroSection
        onEstimateClick={onScrollToEstimate}
        onProjectClick={(proj) => setSelectedProject(proj)}
      />

      {/* 2. Comprehensive Services Bento Section */}
      <BentoServicesSection onSelectCategory={handleSelectCategory} />

      {/* 3. Featured Case Study & ADU Architectural Showcase */}
      <AduCaseStudySection
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* 4. Service Coverage & Interactive Map Card */}
      <ServiceCoverageSection />

      {/* 5. Client Feedback & Google Reviews */}
      <ReviewsSection />

      {/* 6. Lead-Capture Estimate & Consultation Form */}
      <EstimateFormSection
        initialProjectType={prefilledScope}
        initialNotes={prefilledNotes}
      />

      {/* 7. Bottom Callout / Quick Dial Strip */}
      <DirectCalloutSection />

      {/* Modals */}
      <VideoPlayerModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onBookEstimate={onScrollToEstimate}
      />

      <AduCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onApplyToEstimate={handleApplyCalculatorNotes}
      />

      <ProjectDetailsModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onBookSimilar={handleBookSimilarProject}
      />
    </div>
  )
}
