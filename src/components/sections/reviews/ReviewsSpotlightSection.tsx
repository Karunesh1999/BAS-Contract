import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  ArrowRight,
  Hammer,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import { REVIEWS_SPOTLIGHT_DATA } from '../../../models/data/reviewsPage.data'

export const ReviewsSpotlightSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'completed' | 'framing'>('completed')

  return (
    <section className="w-full bg-[#0f172a] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive Visual Showcase (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700/60 group">
              {/* High-res project imagery with stage switching */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
                <img
                  src={
                    activeStage === 'completed'
                      ? REVIEWS_SPOTLIGHT_DATA.completedImage
                      : REVIEWS_SPOTLIGHT_DATA.framingImage
                  }
                  alt={
                    activeStage === 'completed'
                      ? REVIEWS_SPOTLIGHT_DATA.alt
                      : REVIEWS_SPOTLIGHT_DATA.framingAlt
                  }
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/40 pointer-events-none" />

                {/* Top Interactive Stage Switcher & Verification Tag */}
                <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 z-10 flex-wrap">
                  {/* Interactive Tab Switcher */}
                  <div className="p-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/15 flex items-center gap-1 shadow-lg">
                    <button
                      type="button"
                      onClick={() => setActiveStage('completed')}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeStage === 'completed'
                          ? 'bg-[#0051d5] text-white shadow-sm'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>Completed Residence</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveStage('framing')}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeStage === 'framing'
                          ? 'bg-[#0051d5] text-white shadow-sm'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Hammer className="w-3 h-3 text-blue-300" />
                      <span>Framing Inspection</span>
                    </button>
                  </div>

                  {/* 100% Passed City Inspection Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-xs font-bold text-emerald-300 shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>City Sign-Off Complete</span>
                  </div>
                </div>

                {/* Clean Bottom Meta Strip */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 text-xs z-10 flex-wrap">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white font-medium shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span className="font-heading font-bold text-white">
                      {REVIEWS_SPOTLIGHT_DATA.projectTitle}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-300">{REVIEWS_SPOTLIGHT_DATA.location}</span>
                  </div>

                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950/80 hover:bg-[#0051d5] backdrop-blur-md text-white font-bold text-xs transition-all border border-white/15 shadow-md group/btn"
                  >
                    <span>Explore Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 3 Metric Pills below card */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {REVIEWS_SPOTLIGHT_DATA.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-slate-850 border border-slate-800 text-center"
                >
                  <div className="font-heading text-base sm:text-lg font-extrabold text-blue-400">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
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
