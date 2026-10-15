import React from 'react'
import { Link } from 'react-router-dom'
import { COMPANY_DATA } from '../../models/data/company.data'
import { MapPin, Phone, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0f172a] text-slate-300 pt-16 pb-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand & Business Information */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 shrink-0 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm ring-2 ring-slate-700 group-hover:ring-[#0051d5] transition-all bg-[#0f172a] flex items-center justify-center shrink-0">
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
                <span className="font-heading text-lg sm:text-xl font-extrabold text-white tracking-tight uppercase leading-none group-hover:text-blue-300 transition-colors">
                  {COMPANY_DATA.shortName}
                </span>
                <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mt-0.5">
                  {COMPANY_DATA.subHeading}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Architectural precision and luxury residential construction serving coastal North County San Diego. Specializing in custom ADUs, structural additions, and whole-home remodeling.
            </p>

            <div className="space-y-2.5 pt-1 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span className="text-slate-300">{COMPANY_DATA.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="text-slate-300 hover:text-white transition-colors font-medium"
                >
                  {COMPANY_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {COMPANY_DATA.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-blue-200 font-semibold">{COMPANY_DATA.license} ({COMPANY_DATA.licenseClass})</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/adu-and-jadu" className="text-slate-400 hover:text-white transition-colors">
                  ADU & JADU Specialist
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-white transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/about-us#service-areas" className="text-slate-400 hover:text-white transition-colors">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/about-us#about-faq" className="text-slate-400 hover:text-white transition-colors">
                  FAQ &amp; Pricing
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-slate-400 hover:text-white transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/pagina-en-espanol" className="text-amber-400 hover:text-amber-300 transition-colors font-semibold flex items-center gap-1">
                  Español <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Accessory Dwelling Units (ADU)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Junior ADUs (JADU)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Full Home Remodeling
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Custom Additions & Framing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Kitchen Transformations
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Architectural Plans & Permits
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Coverage Areas */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Coverage Areas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about-us#service-areas" className="text-slate-400 hover:text-white transition-colors">
                  Vista, CA (HQ)
                </Link>
              </li>
              <li>
                <Link to="/about-us#service-areas" className="text-slate-400 hover:text-white transition-colors">
                  Carlsbad & La Costa
                </Link>
              </li>
              <li>
                <Link to="/about-us#service-areas" className="text-slate-400 hover:text-white transition-colors">
                  Oceanside
                </Link>
              </li>
              <li>
                <Link to="/about-us#service-areas" className="text-slate-400 hover:text-white transition-colors">
                  Encinitas & Leucadia
                </Link>
              </li>
              <li>
                <Link to="/about-us#service-areas" className="text-slate-400 hover:text-white transition-colors">
                  San Marcos
                </Link>
              </li>
              <li>
                <Link to="/about-us#service-areas" className="text-slate-400 hover:text-white transition-colors">
                  Solana Beach & Del Mar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 {COMPANY_DATA.name}. All rights reserved. {COMPANY_DATA.license} — Licensed, Bonded & Insured.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/licensing" className="hover:text-slate-300 transition-colors">
              Licensing Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
