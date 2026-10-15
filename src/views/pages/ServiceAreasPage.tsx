import React from 'react'
import { SERVICE_AREAS } from '../../models/data/serviceAreas.data'
import { COMPANY_DATA } from '../../models/data/company.data'
import { MapPin, Clock, Check, Phone } from 'lucide-react'

export const ServiceAreasPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase font-extrabold tracking-wider text-[#0051d5]">
          North County San Diego Coverage
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Service Areas & City Permitting
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          From our headquarters in Vista, BAS General Contractor operates daily within a 45-mile radius across coastal and inland North County. We know every municipal building department and inspector.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICE_AREAS.map((city) => (
          <div
            key={city.id}
            className={`p-7 rounded-3xl bg-white border transition-all space-y-4 flex flex-col justify-between ${
              city.isHeadquarters
                ? 'border-blue-300 ring-2 ring-blue-100 shadow-md'
                : 'border-slate-200/80 shadow-xs hover:border-slate-300'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className={`w-4 h-4 ${city.isHeadquarters ? 'text-[#0051d5]' : 'text-slate-400'}`} />
                  {city.name}
                </span>
                {city.isHeadquarters && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-[#0051d5] px-2 py-0.5 rounded-full">
                    HQ
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {city.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                {city.zoningHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#0051d5] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                Avg Plan Check: <strong>{city.averagePermitDays} Days</strong>
              </span>
              <span className="font-semibold text-slate-700">
                {city.distanceMiles === 0 ? 'Home Base' : `${city.distanceMiles} mi from HQ`}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-3xl bg-[#0f172a] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="font-heading text-xl font-bold">Don't See Your Specific Neighborhood?</h3>
          <p className="text-sm text-slate-300 mt-1">
            If your address is in San Diego County, call Belen directly to confirm dispatch availability and permit timelines.
          </p>
        </div>
        <a
          href={`tel:${COMPANY_DATA.phoneRaw}`}
          className="px-6 py-3.5 rounded-xl bg-[#0051d5] text-white font-bold text-sm flex items-center gap-2 shrink-0 hover:bg-blue-600 transition-colors shadow-lg"
        >
          <Phone className="w-4 h-4" />
          <span>Call (760) 801-2065</span>
        </a>
      </div>
    </div>
  )
}
