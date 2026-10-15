import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { MobileNavDrawer } from './components/layout/MobileNavDrawer'
import { FloatingContactBar } from './components/layout/FloatingContactBar'
import { AduCalculatorModal } from './components/modals/AduCalculatorModal'
import { HomePage } from './views/pages/HomePage'
import { AboutUsPage } from './views/pages/AboutUsPage'
import { ServicesPage } from './views/pages/ServicesPage'
import { AduJaduPage } from './views/pages/AduJaduPage'
import { ReviewsPage } from './views/pages/ReviewsPage'
import { ContactPage } from './views/pages/ContactPage'
import { SpanishPage } from './views/pages/SpanishPage'
import { GalleryPage } from './views/pages/GalleryPage'

// Scroll restoration on navigation
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAduCalculatorOpen, setIsAduCalculatorOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleScrollToEstimate = () => {
    setIsMobileMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/#estimate-form')
      setTimeout(() => {
        const el = document.getElementById('estimate-form')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      const el = document.getElementById('estimate-form')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#1e293b] selection:bg-blue-600 selection:text-white">
      <ScrollToTop />

      {/* Main Header */}
      <Header
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
        onGetEstimateClick={handleScrollToEstimate}
      />

      {/* Mobile Drawer */}
      <MobileNavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onGetEstimateClick={handleScrollToEstimate}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-16 lg:pb-0">
        <Routes>
          <Route path="/" element={<HomePage onScrollToEstimate={handleScrollToEstimate} />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/adu-and-jadu" element={<AduJaduPage />} />
          <Route path="/service-areas" element={<Navigate to="/about-us#service-areas" replace />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/portfolio" element={<Navigate to="/gallery" replace />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/pagina-en-espanol" element={<SpanishPage />} />
          <Route path="/free-estimate" element={<HomePage onScrollToEstimate={handleScrollToEstimate} />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage onScrollToEstimate={handleScrollToEstimate} />} />
        </Routes>
      </main>

      {/* Persistent Mobile Bottom Action Bar */}
      <FloatingContactBar
        onEstimateClick={handleScrollToEstimate}
        onCalculatorClick={() => setIsAduCalculatorOpen(true)}
      />

      {/* Contractor Footer */}
      <Footer />

      {/* Global ADU Calculator Modal */}
      <AduCalculatorModal
        isOpen={isAduCalculatorOpen}
        onClose={() => setIsAduCalculatorOpen(false)}
        onApplyToEstimate={() => {
          setIsAduCalculatorOpen(false)
          handleScrollToEstimate()
        }}
      />
    </div>
  )
}

export default App
