import React from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import type { useGalleryController } from '../../../controllers/useGalleryController'

export interface InteractiveShowcaseSliderSectionProps {
  controller: ReturnType<typeof useGalleryController>
  onRequestSimilar: (category: string, title: string) => void
}

export const InteractiveShowcaseSliderSection: React.FC<
  InteractiveShowcaseSliderSectionProps
> = ({ controller, onRequestSimilar }) => {
  const {
    currentSlideIndex,
    totalSlides,
    currentSlide,
    allSlides,
    nextSlide,
    prevSlide,
    goToSlide,
  } = controller

  const formattedCounter = `${String(currentSlideIndex + 1).padStart(2, '0')} / ${String(
    totalSlides
  ).padStart(2, '0')}`

  return (
    <section className="w-full py-12 lg:py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header & Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5] block">
              Spotlight Field Projects
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Interactive Field Showcase
            </h2>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-xs font-mono font-bold text-slate-600 px-3 py-1.5 bg-slate-200/70 rounded-lg">
              {formattedCounter}
            </span>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Project"
              className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:bg-slate-100 flex items-center justify-center text-slate-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Project"
              className="w-10 h-10 rounded-xl bg-[#0051d5] text-white shadow-xs hover:bg-[#0041b0] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Slider Viewport Card */}
        <div className="relative bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:h-[560px]">
          {/* Left Imagery (7 Cols) */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full bg-slate-900 overflow-hidden group">
            <img
              src={currentSlide.img}
              alt={currentSlide.alt || currentSlide.title}
              key={currentSlide.id}
              className="w-full h-full object-cover transition-all duration-500 ease-out animate-in fade-in"
            />

            {/* Floating Status Badge */}
            <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl flex items-center gap-2 shadow-md border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider">
                {currentSlide.status}
              </span>
            </div>

            {/* Overlay Navigation Buttons on Image */}
            <div className="absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-md transition-all hover:scale-105 cursor-pointer backdrop-blur-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center p-3 pointer-events-none">
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Slide"
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-md transition-all hover:scale-105 cursor-pointer backdrop-blur-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Details Panel (5 Cols) */}
          <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-lg bg-blue-100 text-[#0051d5] text-xs font-bold uppercase tracking-wider">
                  {currentSlide.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-[#0051d5]" />
                  <span>{currentSlide.location}</span>
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {currentSlide.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentSlide.desc}
              </p>

              {/* Technical Spec Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Scope
                  </div>
                  <div className="font-heading text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                    {currentSlide.scope}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Timeline
                  </div>
                  <div className="font-heading text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                    {currentSlide.time}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Permit Status
                  </div>
                  <div className="font-heading text-sm sm:text-base font-bold text-[#0051d5] mt-0.5">
                    {currentSlide.permit}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Inspection
                  </div>
                  <div className="font-heading text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                    {currentSlide.code}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Action */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#0051d5]" />
                <span>CSLB Inspected #1092902</span>
              </div>

              <button
                type="button"
                onClick={() =>
                  onRequestSimilar(currentSlide.category, currentSlide.title)
                }
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#0051d5] hover:text-[#0041b0] hover:underline cursor-pointer transition-colors"
              >
                <span>Request Similar Build</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {allSlides.map((slide, idx) => {
              const isActive = idx === currentSlideIndex
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`relative shrink-0 w-24 sm:w-28 h-16 sm:h-20 rounded-xl overflow-hidden transition-all cursor-pointer shadow-2xs ${
                    isActive
                      ? 'border-2 border-[#0051d5] ring-2 ring-blue-200 scale-102'
                      : 'border-2 border-transparent hover:border-slate-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {!isActive && (
                    <span className="absolute inset-0 bg-slate-900/25 hover:bg-transparent transition-colors" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
