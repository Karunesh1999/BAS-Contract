import React from 'react'
import { Shield, Layers, Fence, Wrench } from 'lucide-react'
import { BALCONY_DECK_DATA } from '../../../models/data/servicesPage.data'

export interface BalconyDeckSectionProps {
  onSelectService: (serviceName: string) => void
}

export const BalconyDeckSection: React.FC<BalconyDeckSectionProps> = ({
  onSelectService,
}) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'shield':
        return <Shield className="w-5 h-5 text-[#0051d5] shrink-0 mt-0.5" />
      case 'layers':
        return <Layers className="w-5 h-5 text-[#0051d5] shrink-0 mt-0.5" />
      case 'fence':
        return <Fence className="w-5 h-5 text-[#0051d5] shrink-0 mt-0.5" />
      default:
        return <Shield className="w-5 h-5 text-[#0051d5] shrink-0 mt-0.5" />
    }
  }

  return (
    <section
      id="service-balcony"
      className="w-full py-16 lg:py-20 bg-[#f8fafc] scroll-mt-32 sm:scroll-mt-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Imagery (order-2 lg:order-1) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-200 border border-slate-200/80 group">
              <img
                src={BALCONY_DECK_DATA.image.url}
                alt={BALCONY_DECK_DATA.image.alt}
                className="w-full h-[400px] sm:h-[460px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-[#0f172a]/90 text-white text-xs font-bold backdrop-blur-md shadow-md border border-white/10">
                {BALCONY_DECK_DATA.image.badge}
              </div>
            </div>
          </div>

          {/* Right Content (order-1 lg:order-2) */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#0f172a] text-white flex items-center justify-center font-bold text-sm shrink-0">
                {BALCONY_DECK_DATA.step}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0051d5]">
                {BALCONY_DECK_DATA.kicker}
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {BALCONY_DECK_DATA.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {BALCONY_DECK_DATA.description}
            </p>

            {/* Feature Cards */}
            <div className="space-y-3 pt-1">
              {BALCONY_DECK_DATA.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5"
                >
                  {getIcon(feat.icon)}
                  <div>
                    <span className="font-heading text-sm sm:text-base font-bold text-slate-900 block">
                      {feat.title}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600 leading-relaxed block mt-0.5">
                      {feat.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectService('Balcony Renovations')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0051d5] text-white font-bold text-sm hover:bg-[#0041b0] transition-all shadow-md cursor-pointer"
              >
                <span>{BALCONY_DECK_DATA.ctaText}</span>
                <Wrench className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
