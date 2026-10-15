import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Building2, CheckCircle2, ExternalLink } from 'lucide-react'
import { ADU_JADU_SERVICE_DATA } from '../../../models/data/servicesPage.data'

export interface AduJaduServiceSectionProps {
  onSelectService: (serviceName: string) => void
}

export const AduJaduServiceSection: React.FC<AduJaduServiceSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section
      id="service-adu"
      className="w-full py-16 lg:py-20 bg-[#0f172a] text-white scroll-mt-32 sm:scroll-mt-36 relative overflow-hidden"
    >
      {/* Background ambient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#0051d5] text-white flex items-center justify-center font-bold text-sm shrink-0">
                {ADU_JADU_SERVICE_DATA.step}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                {ADU_JADU_SERVICE_DATA.kicker}
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {ADU_JADU_SERVICE_DATA.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {ADU_JADU_SERVICE_DATA.description}
            </p>

            {/* 2 Subcards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col gap-2">
                <Home className="w-6 h-6 text-amber-400" />
                <h4 className="font-heading text-base font-bold text-white">
                  {ADU_JADU_SERVICE_DATA.types[0].title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ADU_JADU_SERVICE_DATA.types[0].desc}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col gap-2">
                <Building2 className="w-6 h-6 text-amber-400" />
                <h4 className="font-heading text-base font-bold text-white">
                  {ADU_JADU_SERVICE_DATA.types[1].title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ADU_JADU_SERVICE_DATA.types[1].desc}
                </p>
              </div>
            </div>

            {/* Bullets */}
            <div className="space-y-2 pt-1 text-slate-300 text-sm">
              {ADU_JADU_SERVICE_DATA.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/adu-and-jadu"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0051d5] text-white font-bold text-sm hover:bg-[#0041b0] transition-all shadow-md"
              >
                <span>{ADU_JADU_SERVICE_DATA.primaryCta}</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => onSelectService('ADU Construction')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all cursor-pointer shadow-sm"
              >
                <span>{ADU_JADU_SERVICE_DATA.secondaryCta}</span>
              </button>
            </div>
          </div>

          {/* Right Imagery (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-800 border border-slate-700 group">
              <img
                src={ADU_JADU_SERVICE_DATA.image.url}
                alt={ADU_JADU_SERVICE_DATA.image.alt}
                className="w-full h-[440px] sm:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0f172a]/95 backdrop-blur-md shadow-xl border border-white/10 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                    {ADU_JADU_SERVICE_DATA.image.badgeTop}
                  </span>
                  <span className="font-heading text-sm sm:text-base text-white font-bold block">
                    {ADU_JADU_SERVICE_DATA.image.badgeTitle}
                  </span>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-[#0051d5] text-white text-xs font-bold shrink-0">
                  {ADU_JADU_SERVICE_DATA.image.badgeDuration}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
