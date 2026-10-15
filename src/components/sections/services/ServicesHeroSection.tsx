import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ShieldCheck, History } from 'lucide-react'
import { SERVICES_PAGE_HERO } from '../../../models/data/servicesPage.data'

export const ServicesHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-slate-100/80 border-b border-slate-200/70 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-6">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium"
        >
          <Link to="/" className="hover:text-[#0051d5] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{SERVICES_PAGE_HERO.breadcrumb}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0051d5]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0051d5]">
                {SERVICES_PAGE_HERO.badge}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight max-w-4xl leading-[1.15]">
              {SERVICES_PAGE_HERO.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {SERVICES_PAGE_HERO.description}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            {/* Card 1: 100% Permitted */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0f172a] text-blue-300 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <div className="font-heading text-base sm:text-lg text-slate-900 font-bold">
                  {SERVICES_PAGE_HERO.cards[0].title}
                </div>
                <div className="text-xs sm:text-sm text-slate-500">
                  {SERVICES_PAGE_HERO.cards[0].subtitle}
                </div>
              </div>
            </div>

            {/* Card 2: 30+ Years Local */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center shrink-0">
                <History className="w-6 h-6" />
              </div>
              <div>
                <div className="font-heading text-base sm:text-lg text-slate-900 font-bold">
                  {SERVICES_PAGE_HERO.cards[1].title}
                </div>
                <div className="text-xs sm:text-sm text-slate-500">
                  {SERVICES_PAGE_HERO.cards[1].subtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
