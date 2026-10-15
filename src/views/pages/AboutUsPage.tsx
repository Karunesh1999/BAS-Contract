import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AboutHeroSection } from '../../components/sections/about/AboutHeroSection'
import { FounderSpotlightSection } from '../../components/sections/about/FounderSpotlightSection'
import { AboutTimelineSection } from '../../components/sections/about/AboutTimelineSection'
import { CraftsmanshipGallerySection } from '../../components/sections/about/CraftsmanshipGallerySection'
import { AboutServiceAreasSection } from '../../components/sections/about/AboutServiceAreasSection'
import { AboutFaqSection } from '../../components/sections/about/AboutFaqSection'
import { AboutContactQuoteSection } from '../../components/sections/about/AboutContactQuoteSection'

export const AboutUsPage: React.FC = () => {
  const { hash } = useLocation()

  useEffect(() => {
    document.title = 'About Us | BAS General Contractor Inc. — CSLB #1092902'
  }, [])

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

  return (
    <div className="flex flex-col w-full bg-[#f8fafc]">
      {/* 1. Top Heritage Breadcrumb & Hero Architectural Band */}
      <AboutHeroSection />

      {/* 2. Founder Spotlight & Core Tenets (Belen Silva, Blueprint Table, 4 Pillars & Stats) */}
      <FounderSpotlightSection />

      {/* 3. Chronological Journey / Authentic Timeline Section (1991, 1999, 2005, 2022) */}
      <AboutTimelineSection />

      {/* 4. Real-World Craftsmanship & Project Showcase Gallery */}
      <CraftsmanshipGallerySection />

      {/* 5. Where We Build / Regional Footprint & Municipal Service Areas */}
      <AboutServiceAreasSection />

      {/* 6. Frequently Asked Questions (FAQ) Section */}
      <AboutFaqSection />

      {/* 7. Contact Us Today / Dedicated Consultation Quote Section */}
      <AboutContactQuoteSection />
    </div>
  )
}

export default AboutUsPage
