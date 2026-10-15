import React from 'react'
import { CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react'
import { HOME_RENOVATION_DATA } from '../../../models/data/servicesPage.data'

export interface HomeRenovationSectionProps {
  onSelectService: (serviceName: string) => void
}

export const HomeRenovationSection: React.FC<HomeRenovationSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section
      id="service-home-reno"
      className="w-full py-16 lg:py-20 bg-[#f8fafc] scroll-mt-32 sm:scroll-mt-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#0f172a] text-white flex items-center justify-center font-bold text-sm shrink-0">
                {HOME_RENOVATION_DATA.step}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0051d5]">
                {HOME_RENOVATION_DATA.kicker}
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {HOME_RENOVATION_DATA.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {HOME_RENOVATION_DATA.description}
            </p>

            {/* Permitting Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-slate-900 font-heading font-bold text-base sm:text-lg">
                <ShieldAlert className="w-5 h-5 text-[#0051d5] shrink-0" />
                <span>{HOME_RENOVATION_DATA.permitBox.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {HOME_RENOVATION_DATA.permitBox.text}
              </p>
            </div>

            {/* Feature Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {HOME_RENOVATION_DATA.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0051d5] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onSelectService('Whole Home Renovation')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-[#0051d5] transition-all shadow-sm cursor-pointer"
              >
                <span>{HOME_RENOVATION_DATA.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase">
                {HOME_RENOVATION_DATA.durationBadge}
              </span>
            </div>
          </div>

          {/* Right Imagery */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-200 border border-slate-200/80 group">
              <img
                src={HOME_RENOVATION_DATA.image.url}
                alt={HOME_RENOVATION_DATA.image.alt}
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-[#0051d5] uppercase tracking-wider block">
                    {HOME_RENOVATION_DATA.image.badgeTop}
                  </span>
                  <span className="font-heading text-sm sm:text-base text-slate-900 font-bold block">
                    {HOME_RENOVATION_DATA.image.badgeTitle}
                  </span>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-[#0051d5] text-white text-xs font-bold shrink-0">
                  {HOME_RENOVATION_DATA.image.badgeStatus}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
