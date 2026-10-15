import React from 'react'
import { FOUNDER_DATA, ABOUT_PILLARS, ABOUT_TRUST_METRICS } from '../../../models/data/about.data'
import {
  Quote,
  MapPin,
  Phone,
  HardHat,
  Hammer,
  ClipboardCheck,
  ReceiptText,
} from 'lucide-react'

export const FounderSpotlightSection: React.FC = () => {
  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'engineering':
        return <HardHat className="w-5 h-5 text-[#0051d5]" />
      case 'handyman':
        return <Hammer className="w-5 h-5 text-[#0051d5]" />
      case 'assignment_turned_in':
        return <ClipboardCheck className="w-5 h-5 text-[#0051d5]" />
      case 'receipt_long':
        return <ReceiptText className="w-5 h-5 text-[#0051d5]" />
      default:
        return <HardHat className="w-5 h-5 text-[#0051d5]" />
    }
  }

  return (
    <section className="w-full bg-[#f8fafc] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Founder Profile Card (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Founder Header with Portrait & Credentials */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-md ring-2 ring-blue-500/20 shrink-0 bg-[#0f172a] text-white flex items-center justify-center font-heading font-extrabold text-xl">
                  {FOUNDER_DATA.portraitUrl && (
                    <img
                      src={FOUNDER_DATA.portraitUrl}
                      alt={FOUNDER_DATA.name}
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  )}
                  <span>{FOUNDER_DATA.avatarInitials}</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl text-slate-900 font-bold leading-tight">
                    {FOUNDER_DATA.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0051d5] font-semibold">
                    {FOUNDER_DATA.role}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    {FOUNDER_DATA.license}
                  </p>
                </div>
              </div>

              {/* Blueprint Table Image Context */}
              <div className="relative w-full h-60 rounded-2xl overflow-hidden bg-slate-100 shadow-inner group">
                <img
                  src={FOUNDER_DATA.blueprintImageUrl}
                  alt={FOUNDER_DATA.blueprintAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 bg-slate-950/85 backdrop-blur-md rounded-xl text-white text-[11px] font-bold uppercase tracking-wider text-center">
                  {FOUNDER_DATA.blueprintTag}
                </div>
              </div>

              {/* Quote Box */}
              <div className="bg-slate-50 border border-slate-200/70 p-5 sm:p-6 rounded-2xl space-y-3 relative">
                <Quote className="w-6 h-6 text-[#0051d5]/40" />
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{FOUNDER_DATA.quote}"
                </p>
                <span className="block text-xs font-bold text-slate-900">
                  — Belen Silva, Principal General Contractor
                </span>
              </div>
            </div>

            {/* Bottom Contact Strip */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-slate-600">
              <div className="flex items-center gap-2 text-xs font-medium">
                <MapPin className="w-4 h-4 text-[#0051d5] shrink-0" />
                <span>{FOUNDER_DATA.location}</span>
              </div>
              <a
                href={`tel:${FOUNDER_DATA.phoneRaw}`}
                className="text-xs sm:text-sm font-bold text-[#0051d5] hover:underline flex items-center gap-1.5"
              >
                <span>{FOUNDER_DATA.phone}</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 4 Pillars of Excellence & Trust Metrics (Right 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#0051d5] block">
                Engineering Standard
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                What Sets Belen & BAS Apart
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                In an industry frequently clouded by subcontracting layers and communication breakdowns, BAS operates on a hands-on, master-craftsman operational model.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {ABOUT_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-white p-6 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3 group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <h4 className="font-heading text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0051d5] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Numbers Strip */}
            <div className="bg-[#0f172a] text-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center border border-slate-800">
              {ABOUT_TRUST_METRICS.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-heading text-xl sm:text-3xl font-extrabold text-blue-400">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-300">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
