import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ChevronRight, Calendar } from 'lucide-react'
import { REVIEWS_PAGE_HERO } from '../../../models/data/reviewsPage.data'

export interface ReviewsHeroSectionProps {
  onWriteReviewClick: () => void
  onScheduleClick: () => void
}

export const ReviewsHeroSection: React.FC<ReviewsHeroSectionProps> = ({
  onWriteReviewClick,
  onScheduleClick,
}) => {
  return (
    <section className="w-full bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 md:py-14">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium mb-6"
        >
          <Link
            to="/"
            className="hover:text-[#0051d5] transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#0051d5] font-semibold">
            {REVIEWS_PAGE_HERO.breadcrumb}
          </span>
        </nav>

        {/* Header Content & Quick Actions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px] sm:text-xs tracking-wider uppercase border border-slate-200/80">
              <span className="w-2 h-2 rounded-full bg-[#0051d5] animate-pulse" />
              <span>{REVIEWS_PAGE_HERO.badge}</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {REVIEWS_PAGE_HERO.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {REVIEWS_PAGE_HERO.description}
            </p>
          </div>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onWriteReviewClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm shadow-xs hover:bg-slate-50 transition-all cursor-pointer hover:border-slate-300"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
              <span>Write a Review</span>
            </button>

            <button
              type="button"
              onClick={onScheduleClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0051d5] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#0041b0] transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Free Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
