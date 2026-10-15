import React from 'react'
import { Play, ShieldCheck } from 'lucide-react'
import { REVIEWS_SPOTLIGHT_DATA } from '../../../models/data/reviewsPage.data'

export interface ReviewsSpotlightSectionProps {
  onPlayVideo: () => void
}

export const ReviewsSpotlightSection: React.FC<ReviewsSpotlightSectionProps> = ({
  onPlayVideo,
}) => {
  return (
    <section className="w-full bg-[#0f172a] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Video Preview Card (6 Cols) */}
          <div className="lg:col-span-6">
            <div
              onClick={onPlayVideo}
              className="relative rounded-3xl overflow-hidden shadow-2xl group bg-slate-900 border border-slate-700/60 cursor-pointer aspect-video"
            >
              <img
                src={REVIEWS_SPOTLIGHT_DATA.videoThumbnail}
                alt={REVIEWS_SPOTLIGHT_DATA.alt}
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Pulsing Play Trigger */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0051d5] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform group-hover:bg-[#0041b0]">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                </div>
              </div>

              {/* Bottom Video Badge Strip */}
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-semibold text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{REVIEWS_SPOTLIGHT_DATA.videoTitle}</span>
                </div>
                <span className="text-blue-300 font-medium">
                  {REVIEWS_SPOTLIGHT_DATA.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Supervision Philosophy (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 text-blue-300 font-bold text-xs uppercase tracking-wider border border-blue-400/20">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>{REVIEWS_SPOTLIGHT_DATA.kicker}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {REVIEWS_SPOTLIGHT_DATA.headline}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {REVIEWS_SPOTLIGHT_DATA.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              {REVIEWS_SPOTLIGHT_DATA.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-850 border border-slate-800"
                >
                  <div className="font-heading text-lg font-bold text-blue-400">
                    {pt.title}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
