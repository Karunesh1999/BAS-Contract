import React from 'react'
import { BENTO_SERVICES, FULL_SCOPE_ITEMS } from '../../models/data/services.data'
import type { ProjectCategory } from '../../models/types'
import { CheckCircle2, ArrowRight, ShieldCheck, Home, UtensilsCrossed, Building2, Pickaxe } from 'lucide-react'

export interface BentoServicesSectionProps {
  onSelectCategory: (category: ProjectCategory) => void
}

export const BentoServicesSection: React.FC<BentoServicesSectionProps> = ({
  onSelectCategory,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6" />
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6" />
      case 'Building2':
        return <Building2 className="w-6 h-6" />
      case 'Pickaxe':
        return <Pickaxe className="w-6 h-6" />
      default:
        return <Home className="w-6 h-6" />
    }
  }

  return (
    <section id="services" className="w-full py-20 bg-slate-100/70 border-y border-slate-200/60 scroll-mt-28 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0051d5]" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#0051d5]">
                End-To-End Capabilities
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built with Structural Precision
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
            We handle everything: architectural plans, permit expediting with city building departments, foundation framing, MEP electrical/plumbing, and final code inspections.
          </p>
        </div>

        {/* 4 Columns Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENTO_SERVICES.map((service) => (
            <div
              key={service.id}
              className={`group bg-white rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl border transition-all duration-300 flex flex-col justify-between ${
                service.highlight
                  ? 'border-blue-200 ring-1 ring-blue-100 hover:border-blue-400'
                  : 'border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                    service.highlight
                      ? 'bg-blue-100 text-[#0051d5]'
                      : 'bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-[#0051d5]'
                  }`}
                >
                  {getIcon(service.iconName)}
                </div>

                <span
                  className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                    service.highlight ? 'text-[#0051d5]' : 'text-slate-500'
                  }`}
                >
                  {service.tagline}
                </span>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0051d5] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0051d5] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <button
                onClick={() => onSelectCategory(service.category)}
                className="inline-flex items-center text-xs font-bold text-[#0051d5] group-hover:translate-x-1 transition-all pt-4 border-t border-slate-100 cursor-pointer"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Full Renovation Scope Horizontal Banner */}
        <div className="mt-10 p-6 sm:p-7 rounded-3xl bg-[#0f172a] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
            <span className="font-heading text-base sm:text-lg font-bold">
              Licensed Full Scope Contract Work:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium text-center">
            {FULL_SCOPE_ITEMS.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className={idx === FULL_SCOPE_ITEMS.length - 1 ? 'text-white font-bold' : ''}>
                  {item}
                </span>
                {idx < FULL_SCOPE_ITEMS.length - 1 && (
                  <span className="hidden sm:inline text-slate-600">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={() => onSelectCategory('other')}
            className="px-5 py-2.5 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-blue-50 hover:text-[#0051d5] transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            Get Itemized Bid
          </button>
        </div>
      </div>
    </section>
  )
}
