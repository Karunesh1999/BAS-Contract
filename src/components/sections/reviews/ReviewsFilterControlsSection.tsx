import React from 'react'
import { ArrowUpDown, ChevronDown } from 'lucide-react'
import type { useReviewsController } from '../../../controllers/useReviewsController'
import type { ReviewSortOption } from '../../../models/types'

export interface ReviewsFilterControlsSectionProps {
  controller: ReturnType<typeof useReviewsController>
}

export const ReviewsFilterControlsSection: React.FC<
  ReviewsFilterControlsSectionProps
> = ({ controller }) => {
  const {
    filterTabs,
    selectedCategory,
    setSelectedCategory,
    sortOption,
    setSortOption,
    visibleCount,
  } = controller

  return (
    <section
      id="reviews-feed"
      className="w-full bg-slate-100/95 py-4 sticky top-20 sm:top-[112px] z-30 backdrop-blur-md border-y border-slate-200/80 shadow-2xs scroll-mt-28 sm:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col min-[1200px]:flex-row items-stretch min-[1200px]:items-center justify-between gap-3.5 min-[1200px]:gap-6">
        {/* Filter Pills */}
        <div
          className="flex items-center gap-2 overflow-x-auto w-full min-[1200px]:w-auto pb-1 min-[1200px]:pb-0 scrollbar-none scroll-smooth shrink-0"
          id="filter-container"
        >
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0051d5] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/80'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            )
          })}
        </div>

        {/* Counter & Sorting Dropdown */}
        <div className="flex items-center justify-between min-[1200px]:justify-end gap-3 w-full min-[1200px]:w-auto pt-2.5 min-[1200px]:pt-0 border-t border-slate-200/60 min-[1200px]:border-t-0 shrink-0">
          <span className="text-xs sm:text-sm text-slate-500 font-medium whitespace-nowrap">
            Showing{' '}
            <strong className="text-slate-900 font-bold">{visibleCount}</strong>{' '}
            verified stories
          </span>

          <div className="relative inline-flex items-center shrink-0">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
            <select
              value={sortOption}
              onChange={(e) =>
                setSortOption(e.target.value as ReviewSortOption)
              }
              aria-label="Sort verified reviews"
              className="appearance-none pl-8 pr-8 py-2 rounded-xl bg-white text-slate-900 text-xs sm:text-sm font-semibold shadow-2xs border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-[#0051d5] cursor-pointer"
            >
              <option value="highest">Highest Rating (5.0)</option>
              <option value="recent">Most Recent Projects</option>
              <option value="scale">Largest Project Scale</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
