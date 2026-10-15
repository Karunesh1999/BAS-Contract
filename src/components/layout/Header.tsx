import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COMPANY_DATA } from '../../models/data/company.data'
import { ShieldCheck, Star, Phone, Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'

export interface HeaderProps {
  onOpenMobileMenu: () => void
  isMobileMenuOpen: boolean
  onGetEstimateClick: () => void
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMobileMenu,
  isMobileMenuOpen,
  onGetEstimateClick,
}) => {
  const location = useLocation()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact Us', path: '/contact-us' },
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0f172a] text-white text-xs py-1.5 px-4 sm:px-6 lg:px-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
          {/* Left Badges */}
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-blue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="font-semibold">{COMPANY_DATA.license}</span>
              <span className="hidden sm:inline text-slate-400">— Licensed, Bonded & Insured</span>
            </span>

            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-200">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
              <span>5.0 Google Rated (Verified Contractor)</span>
            </span>
          </div>

          {/* Right Direct Phone Access */}
          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="text-white font-bold flex items-center gap-1.5 hover:text-blue-300 transition-colors text-[11px] sm:text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{COMPANY_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm ring-2 ring-slate-100 group-hover:ring-[#0051d5] transition-all bg-[#0f172a] flex items-center justify-center shrink-0">
            <img
              src={COMPANY_DATA.logoUrl}
              alt={COMPANY_DATA.name}
              className="absolute inset-0 w-full h-full object-cover z-10"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="font-heading font-extrabold text-white text-base">B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight uppercase leading-none">
              {COMPANY_DATA.shortName}
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mt-0.5">
              {COMPANY_DATA.subHeading}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((item) => {
            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-all duration-150 py-1 ${
                  active
                    ? 'text-[#0051d5] border-b-2 border-[#0051d5]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right CTA & Phone Section */}
        <div className="flex items-center gap-4 shrink-0">
          {/* 24/7 Estimates Live Indicator */}
          <div className="hidden lg:flex flex-col items-end">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                ONLINE 24/7 ESTIMATES
              </span>
            </div>
            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="font-heading text-sm font-bold text-slate-900 hover:text-[#0051d5] transition-colors"
            >
              {COMPANY_DATA.phone}
            </a>
          </div>

          {/* Primary Action Button */}
          <Button
            variant="secondary"
            size="md"
            className="hidden sm:inline-flex"
            onClick={onGetEstimateClick}
            rightIcon={<ArrowRight className="w-4 h-4 ml-0.5" />}
          >
            Get Free Estimate
          </Button>

          {/* Mobile Menu Hamburger Trigger */}
          <button
            onClick={onOpenMobileMenu}
            className="xl:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  )
}
