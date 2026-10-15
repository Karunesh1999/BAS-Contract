import React from 'react'
import { Link } from 'react-router-dom'
import { useReviewsController, type ReviewFilterCategory } from '../../controllers/useReviewsController'
import { RatingStars } from '../ui/RatingStars'
import { COMPANY_DATA } from '../../models/data/company.data'
import { StarHalf, ArrowRight, Quote, Sparkles } from 'lucide-react'

export const ReviewsSection: React.FC = () => {
  const { reviews, activeCategory, setActiveCategory } = useReviewsController()

  const categories: { id: ReviewFilterCategory; label: string }[] = [
    { id: 'all', label: 'All Reviews' },
    { id: 'kitchen-bath', label: 'Kitchen & Bath' },
    { id: 'flooring-remodel', label: 'Flooring & Entryway' },
  ]

  return (
    <section id="reviews" className="w-full py-20 bg-white scroll-mt-28 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Link
            to="/reviews#testimonials"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 shadow-xs transition-colors cursor-pointer group"
          >
            <div className="relative w-4 h-4 rounded-full overflow-hidden bg-[#0f172a] shrink-0 flex items-center justify-center">
              <img
                src={COMPANY_DATA.logoUrl}
                alt="Google Verified"
                className="absolute inset-0 w-full h-full object-cover z-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="font-heading font-bold text-white text-[9px]">B</span>
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 group-hover:text-[#0051d5] transition-colors">
              5.0 Star Aggregate Customer Rating
            </span>
          </Link>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Verified Reviews from Local Homeowners
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl">
            Hear directly from our San Diego clients about their remodeling, ADU, and custom structural construction experiences.
          </p>

          {/* Interactive filter pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0f172a] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <RatingStars rating={review.rating} size="sm" />
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[10px] font-bold text-[#0051d5]">
                    {review.tag}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-slate-200 absolute -top-1 -left-1 opacity-40 pointer-events-none" />
                  <p className="text-sm text-slate-700 leading-relaxed relative z-10 pt-1">
                    {review.reviewText}
                  </p>
                </div>
              </div>

              {/* Reviewer signature */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#0051d5] flex items-center justify-center font-bold text-xs shadow-xs">
                  {review.initials}
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-slate-900 leading-tight">
                    {review.author}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {review.projectType} • {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Google Aggregate CTA Card */}
          <div className="bg-[#0f172a] p-7 rounded-3xl text-white shadow-xl flex flex-col justify-between space-y-6 border border-slate-800">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0051d5] flex items-center justify-center">
                <StarHalf className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-heading text-xl font-bold text-white leading-snug">
                100% Client Satisfaction Commitment
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We never collect final payment until city building inspectors sign off and you are completely thrilled with every detail.
              </p>

              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold pt-1">
                <Sparkles className="w-4 h-4" />
                <span>Zero BBB or CSLB complaints across 7+ years</span>
              </div>
            </div>

            <Link
              to="/reviews#testimonials"
              className="inline-flex items-center justify-center py-3.5 px-5 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-blue-50 hover:text-[#0051d5] transition-all shadow-sm group cursor-pointer"
            >
              <span>Read All Verified Google Reviews</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
