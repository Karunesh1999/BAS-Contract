import React from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  Calendar,
  Home,
  ShieldCheck,
  HardHat,
  Star,
} from 'lucide-react'
import { GALLERY_HERO_DATA } from '../../../models/data/gallery.data'

export interface GalleryHeroSectionProps {
  onScheduleClick: () => void
}

export const GalleryHeroSection: React.FC<GalleryHeroSectionProps> = ({
  onScheduleClick,
}) => {
  return (
    <section className="w-full bg-slate-100/80 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-14">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium mb-6"
        >
          <Link to="/" className="hover:text-[#0051d5] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">
            {GALLERY_HERO_DATA.breadcrumb}
          </span>
        </nav>

        {/* Title Lockup & Action */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200/80 rounded-full text-slate-800 text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0051d5]" />
              <span>{GALLERY_HERO_DATA.badge}</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {GALLERY_HERO_DATA.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {GALLERY_HERO_DATA.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onScheduleClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0051d5] text-white font-bold text-sm shadow-md hover:bg-[#0041b0] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{GALLERY_HERO_DATA.ctaText}</span>
            </button>
          </div>
        </div>

        {/* 4 Quick Stats Band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-200">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center shrink-0">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-xl font-bold text-slate-900">
                100+
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Completed Projects
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="font-heading text-xl font-bold text-slate-900">
                Zero
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Permitting Violations
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center shrink-0">
              <HardHat className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-xl font-bold text-slate-900">
                100%
              </div>
              <div className="text-xs text-slate-500 font-medium">
                In-House Oversight
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            </div>
            <div>
              <div className="font-heading text-xl font-bold text-slate-900">
                5.0 ★
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Google Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
