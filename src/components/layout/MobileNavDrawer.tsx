import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COMPANY_DATA } from '../../models/data/company.data'
import { X, Phone, Globe, ShieldCheck, ArrowRight, MapPin } from 'lucide-react'
import { Button } from '../ui/Button'

export interface MobileNavDrawerProps {
  isOpen: boolean
  onClose: () => void
  onGetEstimateClick: () => void
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({
  isOpen,
  onClose,
  onGetEstimateClick,
}) => {
  const location = useLocation()

  if (!isOpen) return null

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Services', path: '/services' },
    { label: 'Project Gallery', path: '/gallery' },
    { label: 'Client Reviews', path: '/reviews' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Página en Español', path: '/pagina-en-espanol', highlight: true },
  ]

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out panel */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col justify-between p-6 z-10 animate-in slide-in-from-right duration-250">
        <div className="space-y-6">
          {/* Drawer Top */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-xs ring-1 ring-slate-200 bg-[#0f172a] flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_DATA.logoUrl}
                  alt={COMPANY_DATA.name}
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <span className="font-heading font-extrabold text-white text-xs">B</span>
              </div>
              <span className="font-heading text-base font-bold text-slate-900">
                {COMPANY_DATA.shortName}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const active = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    active
                      ? 'bg-blue-50 text-[#0051d5]'
                      : item.highlight
                      ? 'text-amber-700 bg-amber-50 hover:bg-amber-100'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.highlight && <Globe className="w-4 h-4 text-amber-600" />}
                    {item.label}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <Button
            variant="secondary"
            size="md"
            className="w-full justify-center"
            onClick={() => {
              onClose()
              onGetEstimateClick()
            }}
          >
            Get Free Estimate
          </Button>

          <a
            href={`tel:${COMPANY_DATA.phoneRaw}`}
            className="w-full py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#0051d5]" />
            Call {COMPANY_DATA.phone}
          </a>

          <div className="text-[11px] text-slate-500 space-y-1 text-center pt-2">
            <p className="flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0051d5]" />
              {COMPANY_DATA.license} • Class B
            </p>
            <p className="flex items-center justify-center gap-1 text-[10px]">
              <MapPin className="w-3 h-3 text-slate-400" />
              {COMPANY_DATA.address.full}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
