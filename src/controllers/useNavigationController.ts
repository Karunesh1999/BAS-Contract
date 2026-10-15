import { useState } from 'react'

export function useNavigationController() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    closeMobileMenu()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    isVideoModalOpen,
    setIsVideoModalOpen,
    isQuoteModalOpen,
    setIsQuoteModalOpen,
    scrollToSection,
  }
}
