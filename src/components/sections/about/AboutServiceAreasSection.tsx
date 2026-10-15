import React, { useState } from 'react'
import { SERVICE_AREAS } from '../../../models/data/serviceAreas.data'
import { COMPANY_DATA } from '../../../models/data/company.data'
import { MapPin, Clock, Check, Phone } from 'lucide-react'

export const AboutServiceAreasSection: React.FC = () => {
  const [hoveredCityId, setHoveredCityId] = useState<string | null>(null)

  return (
    <section
      id="service-areas"
      className="w-full bg-[#f8fafc] border-y border-slate-200/70 py-16 sm:py-20 scroll-mt-24 sm:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-wider text-[#0051d5] block">
            NORTH COUNTY SAN DIEGO COVERAGE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Service Areas &amp; City Permitting
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From our headquarters in Vista, BAS General Contractor operates daily within a 45-mile radius across coastal and inland North County. We know every municipal building department and inspector.
          </p>
        </div>

        {/* 3-Column City Cards Grid with exclusive hover selection & scaling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((city) => {
            const isSelected = hoveredCityId === city.id

            return (
              <div
                key={city.id}
                onMouseEnter={() => setHoveredCityId(city.id)}
                onMouseLeave={() => setHoveredCityId(null)}
                className={`group p-7 rounded-3xl bg-white border space-y-4 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out relative ${
                  isSelected
                    ? 'border-[#0051d5] ring-4 ring-blue-500/15 shadow-2xl scale-[1.03] -translate-y-1.5 z-10'
                    : 'border-slate-200/80 shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-heading text-lg font-bold transition-colors flex items-center gap-1.5 ${
                        isSelected ? 'text-[#0051d5]' : 'text-slate-900'
                      }`}
                    >
                      <MapPin
                        className={`w-4 h-4 transition-colors ${
                          isSelected ? 'text-[#0051d5]' : 'text-slate-400'
                        }`}
                      />
                      {city.name}
                    </span>
                    {city.isHeadquarters && (
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-colors border ${
                          isSelected
                            ? 'bg-[#0051d5] text-white border-[#0051d5]'
                            : 'bg-blue-100 text-[#0051d5] border-blue-200/60'
                        }`}
                      >
                        HQ
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {city.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {city.zoningHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-700 leading-snug"
                      >
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-colors ${
                            isSelected ? 'text-[#0051d5]' : 'text-blue-500'
                          }`}
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock
                      className={`w-3.5 h-3.5 transition-colors ${
                        isSelected ? 'text-[#0051d5]' : 'text-slate-400'
                      }`}
                    />
                    Avg Plan Check:{' '}
                    <strong className="text-slate-900 font-bold">
                      {city.averagePermitDays} Days
                    </strong>
                  </span>
                  <span
                    className={`font-semibold transition-colors ${
                      isSelected ? 'text-[#0051d5]' : 'text-slate-700'
                    }`}
                  >
                    {city.distanceMiles === 0
                      ? 'Home Base'
                      : `${city.distanceMiles} mi from HQ`}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0f172a] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Don't See Your Specific Neighborhood?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              If your address is in San Diego County, call Belen directly to confirm dispatch availability and permit timelines.
            </p>
          </div>
          <a
            href={`tel:${COMPANY_DATA.phoneRaw}`}
            className="px-6 py-3.5 rounded-xl bg-[#0051d5] text-white font-bold text-sm flex items-center gap-2 shrink-0 hover:bg-[#0041b0] transition-colors shadow-lg cursor-pointer"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call {COMPANY_DATA.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
