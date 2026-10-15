import React from 'react'
import { useServiceAreaController } from '../../controllers/useServiceAreaController'
import { COMPANY_DATA } from '../../models/data/company.data'
import { MapPin, Navigation, Phone, ShieldCheck, Check, Clock } from 'lucide-react'

export const ServiceCoverageSection: React.FC = () => {
  const { cities, selectedCity, selectedCityId, selectCity } = useServiceAreaController()

  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(COMPANY_DATA.address.full)}`

  return (
    <section id="service-areas" className="w-full py-20 bg-slate-100/70 border-y border-slate-200/60 scroll-mt-28 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          {/* Coverage List Column (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#0051d5]" />
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#0051d5]">
                Coastal & Inland Footprint
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Proudly Serving North County San Diego Communities
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our crews, project managers, and suppliers operate daily throughout North County. We have deep relationships with municipal planning departments for rapid plan checks and on-time inspections.
            </p>

            {/* Interactive City Pill Selectors */}
            <div className="flex flex-wrap gap-2 pt-1">
              {cities.map((city) => {
                const isSelected = city.id === selectedCityId
                return (
                  <button
                    key={city.id}
                    onClick={() => selectCity(city.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                      isSelected
                        ? 'bg-[#0051d5] text-white shadow-md shadow-blue-500/20'
                        : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200/80'
                    }`}
                  >
                    {city.isHeadquarters && <MapPin className="w-3.5 h-3.5" />}
                    <span>{city.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Dynamic Zoning Specs Breakdown Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-heading text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0051d5]" />
                  {selectedCity.name} Zoning & Permitting
                </span>
                <span className="text-[10px] font-bold text-[#0051d5] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
                  {COMPANY_DATA.license}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedCity.description}
              </p>

              {/* Specific zoning guidelines for this city */}
              <div className="space-y-1.5 pt-1">
                {selectedCity.zoningHighlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#0051d5] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  Avg Permit Check: <strong>{selectedCity.averagePermitDays} Days</strong>
                </span>
                <span className="font-semibold text-emerald-600">
                  ✓ Title 24 Energy Code Compliant
                </span>
              </div>
            </div>
          </div>

          {/* Right: Map Card with Aerial Satellite Reference (6 Cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200/80 flex flex-col space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0f172a] text-white flex items-center justify-center font-bold text-sm">
                  BAS
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-slate-900">
                    Headquarters & Dispatch
                  </h4>
                  <p className="text-xs text-slate-500">{COMPANY_DATA.address.full}</p>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#0051d5] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-[#1d4ed8] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Maps</span>
              </a>
            </div>

            {/* Aerial Map View Card */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-inner border border-slate-200 group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuibI2XHK4Xp1vS7aZjNDUfnBtjxb-iY6SC-Zwn2FLx2BLKZoGLPeXvmx9oFnml7WZxcUTDJ9QnAQkqISpt7UZRJXYPxe-Ok_K-9w6-ZzfQ7pFDUMIUaEhtIFXj6m6_j_EKxnVHnVQzHNcUJtZDBD9p1gwbSjwSkVK3J1EDtwqE7sa5CLs2bxg6Dx35TP3kZkiiqCF71fCrwLIeghrCQSJDvNuKqXQRiyR68c-MsnGRrWXY9lEgI2Ewg')`,
                }}
              />
              <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />

              {/* Central Location Marker Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="px-3 py-1 rounded-full bg-[#0f172a] text-white text-[11px] font-bold shadow-xl flex items-center gap-1.5 mb-1.5 border border-white/20 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>BAS General Contractor HQ</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-2xl ring-4 ring-white animate-bounce">
                  <MapPin className="w-5 h-5 fill-white text-rose-600" />
                </div>
              </div>

              {/* Floating Overlay Information Card */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200/80 flex items-center justify-between text-xs">
                <span className="text-slate-700 font-medium truncate pr-2">
                  Serving a 45-mile radius in North County
                </span>
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="text-[#0051d5] font-bold hover:underline flex items-center gap-1 shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{COMPANY_DATA.phone}</span>
                </a>
              </div>
            </div>

            <p className="text-center text-xs text-slate-500 pt-1">
              Need work in Carlsbad, Oceanside, or Encinitas? Call to confirm immediate dispatch availability for your project address.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
