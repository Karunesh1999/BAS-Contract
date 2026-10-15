import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ServicesHeroSection } from '../../components/sections/services/ServicesHeroSection'
import { ServicesQuickJumpBar } from '../../components/sections/services/ServicesQuickJumpBar'
import { HomeRenovationSection } from '../../components/sections/services/HomeRenovationSection'
import { BathroomRenovationSection } from '../../components/sections/services/BathroomRenovationSection'
import { BalconyDeckSection } from '../../components/sections/services/BalconyDeckSection'
import { KitchenRenovationSection } from '../../components/sections/services/KitchenRenovationSection'
import { InvestorFlippingSection } from '../../components/sections/services/InvestorFlippingSection'
import { RetainingWallSection } from '../../components/sections/services/RetainingWallSection'
import { AduJaduServiceSection } from '../../components/sections/services/AduJaduServiceSection'
import { ServicesComparisonTableSection } from '../../components/sections/services/ServicesComparisonTableSection'
import { ContractorAuthoritySection } from '../../components/sections/services/ContractorAuthoritySection'
import { ServicesConsultationQuoteSection } from '../../components/sections/services/ServicesConsultationQuoteSection'
import { useServicesQuoteController } from '../../controllers/useServicesQuoteController'

export const ServicesPage: React.FC = () => {
  const quoteController = useServicesQuoteController()
  const { hash } = useLocation()

  useEffect(() => {
    document.title =
      'Services & Structural Solutions | BAS General Contractor Inc. — CSLB #1092902'
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

  const handleSelectService = (serviceName: string) => {
    quoteController.selectServiceAndScroll(serviceName)
  }

  return (
    <div className="flex flex-col w-full bg-[#f8fafc]">
      {/* 1. Breadcrumb & Intro Hero */}
      <ServicesHeroSection />

      {/* 2. Quick-Jump Sticky Anchor Bar */}
      <ServicesQuickJumpBar />

      {/* 3. Service 01: Home Renovation & Structural Remodeling */}
      <HomeRenovationSection onSelectService={handleSelectService} />

      {/* 4. Service 02: Bathroom Renovations */}
      <BathroomRenovationSection onSelectService={handleSelectService} />

      {/* 5. Service 03: Balcony & Deck Structural Renovation */}
      <BalconyDeckSection onSelectService={handleSelectService} />

      {/* 6. Service 04: Chef-Grade Kitchen Modernization */}
      <KitchenRenovationSection onSelectService={handleSelectService} />

      {/* 7. Service 05: Strategic Home Flipping & California Flipper Disclosure Law (AB 968) */}
      <InvestorFlippingSection onSelectService={handleSelectService} />

      {/* 8. Service 06: Precision Retaining Wall Construction */}
      <RetainingWallSection onSelectService={handleSelectService} />

      {/* 9. Service 07: Turnkey ADU & Junior ADU (JADU) Construction */}
      <AduJaduServiceSection onSelectService={handleSelectService} />

      {/* 10. Comparison & Service Summary Table */}
      <ServicesComparisonTableSection />

      {/* 11. Contractor Authority & Leadership Callout */}
      <ContractorAuthoritySection />

      {/* 12. High-Converting Consultation & Estimate Form */}
      <ServicesConsultationQuoteSection controller={quoteController} />
    </div>
  )
}

export default ServicesPage
