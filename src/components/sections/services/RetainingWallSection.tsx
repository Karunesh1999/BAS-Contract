import React from 'react'
import { Check, ShieldCheck, Mountain } from 'lucide-react'
import { RETAINING_WALL_DATA } from '../../../models/data/servicesPage.data'

export interface RetainingWallSectionProps {
  onSelectService: (serviceName: string) => void
}

export const RetainingWallSection: React.FC<RetainingWallSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section
      id="service-retaining-wall"
      className="w-full py-16 lg:py-20 bg-[#f8fafc] scroll-mt-32 sm:scroll-mt-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#0f172a] text-white flex items-center justify-center font-bold text-sm shrink-0">
                {RETAINING_WALL_DATA.step}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0051d5]">
                {RETAINING_WALL_DATA.kicker}
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {RETAINING_WALL_DATA.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {RETAINING_WALL_DATA.description}
            </p>

            {/* Checkpoint list */}
            <div className="space-y-4 pt-1">
              {RETAINING_WALL_DATA.features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0051d5] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="font-heading text-sm sm:text-base text-slate-900 font-bold block">
                      {item.title}:
                    </strong>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectService('Retaining Wall')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-[#0051d5] transition-all shadow-sm cursor-pointer"
              >
                <span>{RETAINING_WALL_DATA.ctaText}</span>
                <Mountain className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

          {/* Right Imagery (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-200 border border-slate-200/80 group">
              <img
                src={RETAINING_WALL_DATA.image.url}
                alt={RETAINING_WALL_DATA.image.alt}
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-[#0051d5] uppercase tracking-wider block">
                    {RETAINING_WALL_DATA.image.badgeTop}
                  </span>
                  <span className="font-heading text-sm sm:text-base text-slate-900 font-bold block">
                    {RETAINING_WALL_DATA.image.badgeTitle}
                  </span>
                </div>
                <ShieldCheck className="w-6 h-6 text-[#0051d5] shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
