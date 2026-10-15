import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Calculator,
  FileCheck2,
  Ruler,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '../ui/Button'

export interface AduCaseStudySectionProps {
  onOpenCalculator: () => void
}

interface ShowcaseImage {
  url: string
  title: string
  caption: string
  tag: string
  milestone: string
}

const ADU_SHOWCASE_IMAGES: ShowcaseImage[] = [
  {
    url: '/images/projects/adu-turnkey.jpg',
    title: 'Custom Detached ADU Elevation',
    caption: 'Modern coastal stucco siding, redwood pergola patio & floor-to-ceiling glass slider.',
    tag: 'Turnkey Exterior',
    milestone: '100% Final Inspection Passed',
  },
  {
    url: '/images/gallery/adu/adu-2.jpg',
    title: 'Open-Concept Living & High Ceilings',
    caption: 'Airy, sunlit interior layout with continuous luxury vinyl plank flooring and recessed LED lighting.',
    tag: 'Interior Living',
    milestone: 'Title 24 Envelope Compliant',
  },
  {
    url: '/images/gallery/adu/adu-3.jpg',
    title: 'Designer Kitchenette & Quartz Island',
    caption: 'Custom soft-close cabinetry, full electrical subpanel & stainless energy-star appliances.',
    tag: 'Kitchen & Dining',
    milestone: 'Dedicated 100A Subpanel',
  },
  {
    url: '/images/projects/adu-framing.jpg',
    title: 'Precision Structural Framing & Shear Walls',
    caption: 'Heavy-duty Simpson Strong-Tie hold-downs, engineered trusses & seismic tie-ins.',
    tag: 'Structural Build',
    milestone: 'First-Pass City Sign-Off',
  },
]

export const AduCaseStudySection: React.FC<AduCaseStudySectionProps> = ({
  onOpenCalculator,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? ADU_SHOWCASE_IMAGES.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === ADU_SHOWCASE_IMAGES.length - 1 ? 0 : prev + 1
    )
  }

  const currentImage = ADU_SHOWCASE_IMAGES[activeIndex]

  return (
    <section id="adu-walkthrough" className="w-full py-20 bg-white scroll-mt-28 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: ADU Architectural Photo Showcase & Case Study (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0051d5]" />
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#0051d5]">
                Featured ADU Project Showcase & Architectural Case Study
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              How We Build High-Yield ADUs in North County San Diego
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore our step-by-step custom detached Accessory Dwelling Unit completed in Vista, California. From foundation trenching and seismic framing to high-end interior finishes and turn-key fixtures.
            </p>

            {/* Interactive Image Showcase Frame */}
            <div className="flex flex-col space-y-3">
              <div className="relative rounded-3xl overflow-hidden bg-slate-950 shadow-xl group aspect-[16/10] sm:aspect-video flex items-center justify-center border border-slate-200">
                <img
                  src={currentImage.url}
                  alt={currentImage.title}
                  key={currentImage.url}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-102"
                />

                {/* Subtle dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/35 pointer-events-none" />

                {/* Top Overlay Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white font-semibold border border-white/10 shadow-sm text-[11px] sm:text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {currentImage.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-200 font-mono text-[11px] border border-white/10 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    {currentImage.milestone}
                  </span>
                </div>

                {/* Navigation Arrows */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous photo"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer z-10 backdrop-blur-xs"
                >
                  <ChevronLeft className="w-6 h-6 -ml-0.5 text-slate-800" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next photo"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer z-10 backdrop-blur-xs"
                >
                  <ChevronRight className="w-6 h-6 -mr-0.5 text-slate-800" />
                </button>

                {/* Bottom Photo Details & Gallery Link */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 text-white">
                  <div className="space-y-1 max-w-md">
                    <p className="font-heading text-base sm:text-lg font-bold leading-tight drop-shadow-sm">
                      {currentImage.title}
                    </p>
                    <p className="text-xs text-slate-300 leading-snug drop-shadow-sm line-clamp-2">
                      {currentImage.caption}
                    </p>
                  </div>

                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0051d5] hover:bg-blue-600 text-white font-bold text-xs backdrop-blur-md transition-all self-start sm:self-auto shrink-0 shadow-md group/link cursor-pointer"
                  >
                    <span>View In Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Clickable 4-Photo Thumbnail Strip */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 pt-1">
                {ADU_SHOWCASE_IMAGES.map((img, idx) => {
                  const isSelected = idx === activeIndex
                  return (
                    <button
                      key={img.url}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`relative rounded-xl overflow-hidden aspect-[16/10] border-2 transition-all cursor-pointer group text-left ${
                        isSelected
                          ? 'border-[#0051d5] ring-2 ring-blue-500/30 scale-102 shadow-md'
                          : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-slate-900/25 group-hover:bg-transparent transition-colors" />
                      <span className="absolute bottom-1 left-1.5 right-1.5 text-[9px] sm:text-[10px] font-bold text-white truncate drop-shadow-md">
                        {img.tag}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Construction Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <FileCheck2 className="w-5 h-5 text-[#0051d5] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">Permits & Plans</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    100% handled directly with city planning officers.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <Ruler className="w-5 h-5 text-[#0051d5] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">Zoning & Setbacks</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    San Diego County ADU compliant rear & side 4ft setbacks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: ADU Value Proposition & Investment Yield Box (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 shadow-xl border border-slate-200/80 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#0051d5] text-[10px] font-bold uppercase tracking-wider">
                ADU Financial Impact
              </span>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                Why Build an ADU in San Diego?
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                California Senate Bill 9 & 897 make adding an Accessory Dwelling Unit the highest return investment for coastal homeowners.
              </p>

              {/* ROI Preview Metric Panel */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-xs sm:text-sm font-medium text-slate-600">
                    Avg Monthly Rental Income
                  </span>
                  <span className="font-heading text-base sm:text-lg font-bold text-[#0051d5]">
                    $2,200 - $3,400/mo
                  </span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-xs sm:text-sm font-medium text-slate-600">
                    Immediate Property Equity Surge
                  </span>
                  <span className="font-heading text-base sm:text-lg font-bold text-slate-900">
                    +$150k - $280k
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-slate-600">
                    Typical Construction Timeline
                  </span>
                  <span className="font-heading text-base sm:text-lg font-bold text-slate-900">
                    12 - 16 Weeks
                  </span>
                </div>
              </div>

              {/* Bulleted Highlights */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0051d5] shrink-0" />
                  <span>Rental housing, guest suite, or independent home office</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0051d5] shrink-0" />
                  <span>Exempt from local development impact fees under 750 sq ft</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0051d5] shrink-0" />
                  <span>Separate utility meters and private subpanel routing</span>
                </li>
              </ul>
            </div>

            {/* Calculate Button */}
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-lg"
              onClick={onOpenCalculator}
              leftIcon={<Calculator className="w-4 h-4 mr-1 text-amber-400" />}
              rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              Calculate Your ADU Costs
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
