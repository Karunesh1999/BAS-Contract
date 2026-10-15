import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { KITCHEN_RENOVATION_DATA } from '../../../models/data/servicesPage.data'

export interface KitchenRenovationSectionProps {
  onSelectService: (serviceName: string) => void
}

export const KitchenRenovationSection: React.FC<KitchenRenovationSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section
      id="service-kitchen"
      className="w-full py-16 lg:py-20 bg-slate-100/80 border-y border-slate-200/70 scroll-mt-32 sm:scroll-mt-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#0f172a] text-white flex items-center justify-center font-bold text-sm shrink-0">
                {KITCHEN_RENOVATION_DATA.step}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0051d5]">
                {KITCHEN_RENOVATION_DATA.kicker}
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {KITCHEN_RENOVATION_DATA.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {KITCHEN_RENOVATION_DATA.description}
            </p>

            {/* 2 Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {KITCHEN_RENOVATION_DATA.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col gap-1"
                >
                  <span className="font-heading text-2xl sm:text-3xl text-[#0051d5] font-extrabold">
                    {stat.value}
                  </span>
                  <span className="font-heading text-base font-bold text-slate-900">
                    {stat.title}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Feature Bullets */}
            <ul className="space-y-2.5 pt-1">
              {KITCHEN_RENOVATION_DATA.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#0051d5] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectService('Kitchen Renovations')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-[#0051d5] transition-all shadow-sm cursor-pointer"
              >
                <span>{KITCHEN_RENOVATION_DATA.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

          {/* Right Imagery (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-200 border border-slate-200/80 group">
              <img
                src={KITCHEN_RENOVATION_DATA.image.url}
                alt={KITCHEN_RENOVATION_DATA.image.alt}
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-slate-100 text-slate-900 text-xs font-bold">
                {KITCHEN_RENOVATION_DATA.image.badge}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
