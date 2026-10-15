import React from 'react'
import {
  Star,
  Award,
  CheckCircle2,
  ShieldCheck,
  HardHat,
  Handshake,
} from 'lucide-react'
import { REVIEWS_SCORECARD_DATA } from '../../../models/data/reviewsPage.data'

export const ReviewsScorecardSection: React.FC = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Google Aggregate Master Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0051d5] block">
                    Independent Audited Rating
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                    Google Verified Score
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0051d5] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              <div className="my-6 flex items-baseline gap-4">
                <span className="font-heading text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
                  {REVIEWS_SCORECARD_DATA.googleScore}
                </span>
                <div className="space-y-1">
                  <div className="flex items-center text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    {REVIEWS_SCORECARD_DATA.ratingLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Rating Bar Breakdown Matrix */}
            <div className="space-y-2.5 pt-4 bg-slate-50 rounded-2xl p-4 border border-slate-100">
              {REVIEWS_SCORECARD_DATA.breakdown.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-xs font-semibold text-slate-700"
                >
                  <span className="w-14 shrink-0 text-slate-600 font-medium">
                    {row.stars}
                  </span>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`bg-amber-400 h-2 rounded-full ${row.barWidth}`}
                    />
                  </div>
                  <span className="w-10 text-right font-bold text-slate-900">
                    {row.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4-Stat Micro Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Metric 1: Inspection Record */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Inspection Record
                </span>
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  100%
                </div>
                <p className="font-heading text-sm sm:text-base font-bold text-slate-800 mt-0.5">
                  First-Pass Inspections
                </p>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Zero structural citation holds across Vista, Carlsbad, Oceanside, and Encinitas building departments.
                </p>
              </div>
            </div>

            {/* Metric 2: Licensing Status */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Licensing Status
                </span>
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0051d5]">
                  CSLB #1092902
                </div>
                <p className="font-heading text-sm sm:text-base font-bold text-slate-800 mt-0.5">
                  Class B General Building
                </p>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Bonded, workers' comp current, and backed by a comprehensive $2,000,000 General Liability policy.
                </p>
              </div>
            </div>

            {/* Metric 3: Supervision Standard */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Supervision Standard
                </span>
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center">
                  <HardHat className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Daily
                </div>
                <p className="font-heading text-sm sm:text-base font-bold text-slate-800 mt-0.5">
                  Bilingual Site Leadership
                </p>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Owner Belen Silva directly manages sub-trades and keeps direct homeowner communication active daily.
                </p>
              </div>
            </div>

            {/* Metric 4: Repeat Client Ratio */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Repeat Client Ratio
                </span>
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center">
                  <Handshake className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  7+ Years
                </div>
                <p className="font-heading text-sm sm:text-base font-bold text-slate-800 mt-0.5">
                  Long-term Client Trust
                </p>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Multi-phase renovations for long-standing coastal families who rely exclusively on BAS for residential needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
