import React from 'react'
import { CheckSquare } from 'lucide-react'
import { BATHROOM_RENOVATION_DATA } from '../../../models/data/servicesPage.data'

export interface BathroomRenovationSectionProps {
  onSelectService: (serviceName: string) => void
}

export const BathroomRenovationSection: React.FC<BathroomRenovationSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section
      id="service-bathroom"
      className="w-full py-16 lg:py-20 bg-white border-y border-slate-200/70 scroll-mt-32 sm:scroll-mt-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Center Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 mx-auto shadow-xs">
            <span className="w-7 h-7 rounded-lg bg-[#0f172a] text-white flex items-center justify-center font-bold text-xs">
              {BATHROOM_RENOVATION_DATA.step}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0051d5]">
              {BATHROOM_RENOVATION_DATA.kicker}
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {BATHROOM_RENOVATION_DATA.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {BATHROOM_RENOVATION_DATA.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Dual Imagery (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md bg-slate-100 border border-slate-200/80 group">
              <img
                src={BATHROOM_RENOVATION_DATA.images[0].url}
                alt={BATHROOM_RENOVATION_DATA.images[0].alt}
                className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md bg-slate-100 border border-slate-200/80 group">
              <img
                src={BATHROOM_RENOVATION_DATA.images[1].url}
                alt={BATHROOM_RENOVATION_DATA.images[1].alt}
                className="w-full h-60 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Steps & Information (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug">
              {BATHROOM_RENOVATION_DATA.subhead}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {BATHROOM_RENOVATION_DATA.subtext}
            </p>

            {/* 4-Step Process Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {BATHROOM_RENOVATION_DATA.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col gap-1.5"
                >
                  <span className="text-[11px] font-bold text-[#0051d5] uppercase tracking-wider">
                    {st.step}
                  </span>
                  <span className="font-heading text-base font-bold text-slate-900">
                    {st.title}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Step 05 Callout Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0f172a] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
              <div className="flex items-center gap-3">
                <CheckSquare className="w-6 h-6 text-emerald-400 shrink-0" />
                <span className="font-heading text-sm sm:text-base font-bold">
                  {BATHROOM_RENOVATION_DATA.finalStep.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => onSelectService('Bathroom Renovations')}
                className="text-xs sm:text-sm font-bold text-blue-300 hover:text-white transition-colors cursor-pointer shrink-0 underline underline-offset-4"
              >
                {BATHROOM_RENOVATION_DATA.finalStep.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
