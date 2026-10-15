import React from 'react'
import { MapPin, Star, CornerDownRight } from 'lucide-react'
import type { DetailedReviewItem } from '../../../models/types'

export interface ReviewsGridSectionProps {
  reviews: DetailedReviewItem[]
}

export const ReviewsGridSection: React.FC<ReviewsGridSectionProps> = ({
  reviews,
}) => {
  return (
    <section
      id="testimonials"
      className="w-full py-12 sm:py-16 bg-[#f8fafc] scroll-mt-44 sm:scroll-mt-48"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {reviews.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200/80 p-8">
            <p className="text-slate-500 font-medium">
              No reviews found matching this filter category.
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
            id="reviews-grid"
          >
            {reviews.map((review) => (
              <article
                key={review.id}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-lg border border-slate-200/80 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  {/* Author Header Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-2xl ${review.initialsBg} ${review.initialsTextColor} flex items-center justify-center font-heading text-sm font-bold shadow-2xs shrink-0`}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <h4 className="font-heading text-base font-bold text-slate-900 leading-snug">
                          {review.author}
                        </h4>
                        <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-[#0051d5] shrink-0" />
                          <span>{review.location}</span>
                        </p>
                      </div>
                    </div>

                    {/* Google Icon Badge */}
                    <svg
                      className="w-4 h-4 shrink-0 mt-1 opacity-90"
                      viewBox="0 0 24 24"
                    >
                      <title>Google Verified Review</title>
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
                  </div>

                  {/* Stars & Date */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center text-amber-400 gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                      {review.dateLabel}
                    </span>
                  </div>

                  {/* Tags Pill Row */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {review.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                          tag.highlight
                            ? 'bg-blue-50 text-[#0051d5] border border-blue-100'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-slate-700 leading-relaxed font-normal pt-1">
                    {review.reviewText}
                  </p>
                </div>

                {/* Owner Response Box */}
                {review.response && (
                  <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/80 -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 p-4 sm:p-5 rounded-b-3xl">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                      <CornerDownRight className="w-3.5 h-3.5 text-[#0051d5] shrink-0" />
                      <span>Response from {review.response.author}:</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed pl-5 italic">
                      {review.response.text}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
