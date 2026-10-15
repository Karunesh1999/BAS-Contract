import React from 'react'
import { Link } from 'react-router-dom'
import { ABOUT_HERO_DATA } from '../../../models/data/about.data'
import { ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react'

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white border-b border-slate-200/70 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-14 sm:pb-16 relative z-10">
        {/* Breadcrumb Bar */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 font-medium"
        >
          <Link to="/" className="hover:text-[#0051d5] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">About Us</span>
        </nav>

        {/* Trust Badging Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 mb-8 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-[#0051d5]" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700">
            {ABOUT_HERO_DATA.badge}
          </span>
        </div>

        {/* Hero Header & Asymmetric Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#0051d5] block">
              {ABOUT_HERO_DATA.kicker}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {ABOUT_HERO_DATA.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              {ABOUT_HERO_DATA.description}
            </p>
          </div>

          {/* Right CSLB Registration Card */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200/80 p-6 sm:p-7 rounded-2xl sm:rounded-3xl space-y-4 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                CSLB Registration
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {ABOUT_HERO_DATA.registration.status}
              </span>
            </div>

            <div className="font-heading text-lg sm:text-xl text-slate-900 font-bold">
              {ABOUT_HERO_DATA.registration.title}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {ABOUT_HERO_DATA.registration.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-[#0051d5] shrink-0" />
              <span className="text-xs sm:text-sm font-bold">
                {ABOUT_HERO_DATA.registration.highlight}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
