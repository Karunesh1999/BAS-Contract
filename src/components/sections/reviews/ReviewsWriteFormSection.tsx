import React, { useState } from 'react'
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react'
import type { useReviewsController } from '../../../controllers/useReviewsController'

export interface ReviewsWriteFormSectionProps {
  controller: ReturnType<typeof useReviewsController>
}

export const ReviewsWriteFormSection: React.FC<
  ReviewsWriteFormSectionProps
> = ({ controller }) => {
  const {
    reviewForm,
    setStars,
    updateReviewField,
    handleReviewSubmit,
    isReviewSubmitted,
    reviewSubmitFeedback,
    resetReviewForm,
    starFeedbackText,
  } = controller

  const [hoveredStar, setHoveredStar] = useState<number | null>(null)

  return (
    <section
      id="write-review"
      className="w-full py-16 lg:py-20 bg-slate-100/70 scroll-mt-24 sm:scroll-mt-32 border-t border-slate-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-slate-200/80 space-y-8">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0051d5] text-xs font-bold uppercase tracking-wider">
              Homeowner Feedback
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
              Worked with Belen and the BAS Team?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Share your experience to help fellow North County homeowners choose a dependable, licensed general contractor.
            </p>
          </div>

          {isReviewSubmitted ? (
            <div className="py-10 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Thank You, {reviewForm.fullName || 'Neighbor'}!
              </h3>
              <p className="text-sm text-slate-600 max-w-md">
                {reviewSubmitFeedback}
              </p>
              <button
                type="button"
                onClick={resetReviewForm}
                className="mt-2 px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Submit Another Review
              </button>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="space-y-6">
              {/* Interactive Star Picker */}
              <div className="space-y-2 text-center">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Select Your Star Rating
                </label>
                <div
                  className="flex items-center justify-center gap-2"
                  id="star-picker"
                >
                  {[1, 2, 3, 4, 5].map((starNum) => {
                    const isFilled =
                      hoveredStar !== null
                        ? starNum <= hoveredStar
                        : starNum <= reviewForm.stars

                    return (
                      <button
                        key={starNum}
                        type="button"
                        onClick={() => setStars(starNum)}
                        onMouseEnter={() => setHoveredStar(starNum)}
                        onMouseLeave={() => setHoveredStar(null)}
                        className="p-1 hover:scale-115 transition-transform cursor-pointer focus:outline-none"
                        aria-label={`${starNum} stars`}
                      >
                        <Star
                          className={`w-7 sm:w-8 h-7 sm:h-8 transition-colors ${
                            isFilled
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300'
                          }`}
                        />
                      </button>
                    )
                  })}
                </div>
                <p className="text-xs font-semibold text-slate-600">
                  {starFeedbackText}
                </p>
              </div>

              {/* Input Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Your Full Name (or initials) *
                  </label>
                  <input
                    type="text"
                    required
                    value={reviewForm.fullName}
                    onChange={(e) =>
                      updateReviewField('fullName', e.target.value)
                    }
                    placeholder="e.g. Christina B."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0051d5] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    City / Neighborhood *
                  </label>
                  <select
                    value={reviewForm.city}
                    onChange={(e) => updateReviewField('city', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0051d5] transition-all"
                  >
                    <option value="Vista">Vista, CA</option>
                    <option value="Carlsbad">Carlsbad, CA</option>
                    <option value="Oceanside">Oceanside, CA</option>
                    <option value="Encinitas">Encinitas, CA</option>
                    <option value="San Marcos">San Marcos, CA</option>
                    <option value="Fallbrook">Fallbrook, CA</option>
                    <option value="Solana Beach">Solana Beach, CA</option>
                    <option value="Other">Other North County</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Project Scope Performed *
                  </label>
                  <select
                    value={reviewForm.projectScope}
                    onChange={(e) =>
                      updateReviewField('projectScope', e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0051d5] transition-all"
                  >
                    <option value="ADU">Accessory Dwelling Unit (ADU / JADU)</option>
                    <option value="Kitchen">Kitchen Transformation</option>
                    <option value="Bathroom">Luxury Bathroom Remodel</option>
                    <option value="Addition">Framing &amp; Room Addition</option>
                    <option value="Balcony">Balcony Repair &amp; Deck Waterproofing</option>
                    <option value="Retaining Wall">Retaining Wall &amp; Drainage</option>
                    <option value="Electrical/Flooring">Flooring / Electrical / General</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Approximate Completion Year
                  </label>
                  <input
                    type="text"
                    value={reviewForm.completionYear}
                    onChange={(e) =>
                      updateReviewField('completionYear', e.target.value)
                    }
                    placeholder="e.g. 2024"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0051d5] transition-all"
                  />
                </div>
              </div>

              {/* Experience Textarea */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">
                  Your Experience with BAS *
                </label>
                <textarea
                  required
                  rows={4}
                  value={reviewForm.reviewText}
                  onChange={(e) =>
                    updateReviewField('reviewText', e.target.value)
                  }
                  placeholder="Tell us about the craftsmanship, punctuality, jobsite cleanliness, and working with Belen..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0051d5] transition-all resize-none"
                />
              </div>

              {/* Submit Row & CSLB Assurance */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#0051d5] shrink-0" />
                  <span>Submissions verified via CSLB client project record.</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0051d5] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#0041b0] transition-all cursor-pointer"
                >
                  Submit Homeowner Review
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
