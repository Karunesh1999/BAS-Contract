import React, { useEffect, useCallback } from 'react'
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import type { GalleryProjectCard } from '../../models/types'

export interface GalleryServiceLightboxModalProps {
  isOpen: boolean
  onClose: () => void
  projects: GalleryProjectCard[]
  currentIndex: number
  onNext: () => void
  onPrev: () => void
  onSelectIndex: (index: number) => void
  onRequestEstimate: (category: string, title: string) => void
}

export const GalleryServiceLightboxModal: React.FC<
  GalleryServiceLightboxModalProps
> = ({
  isOpen,
  onClose,
  projects,
  currentIndex,
  onNext,
  onPrev,
  onSelectIndex,
  onRequestEstimate,
}) => {
  const currentProject = projects[currentIndex]

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        onNext()
      } else if (e.key === 'ArrowLeft') {
        onPrev()
      }
    },
    [isOpen, onClose, onNext, onPrev]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || !currentProject) return null

  const formattedCounter = `${String(currentIndex + 1).padStart(2, '0')} / ${String(
    projects.length
  ).padStart(2, '0')}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
      {/* Dark Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Dialog Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${currentProject.categoryLabel} Gallery`}
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-200/80 my-auto animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
      >
        {/* Top Header Strip */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-slate-100 bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-lg bg-[#0051d5] text-white text-xs font-bold uppercase tracking-wider">
              {currentProject.categoryLabel}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-500">
              Service Gallery ({projects.length} Verified Builds)
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Counter */}
            <span className="font-mono text-xs sm:text-sm font-bold text-slate-700 px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">
              {formattedCounter}
            </span>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-5">
          {/* Main Visual Carousel Viewport */}
          <div className="relative w-full h-64 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden bg-slate-950 shadow-md group">
            <img
              key={currentProject.id}
              src={currentProject.imageUrl}
              alt={currentProject.alt || currentProject.title}
              className="w-full h-full object-cover animate-in fade-in duration-300 select-none"
            />

            {/* Floating Location Chip */}
            <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-[#0051d5]" />
              <span>{currentProject.location}</span>
            </div>

            {/* Previous '<' Button on Image */}
            <div className="absolute inset-y-0 left-0 flex items-center p-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onPrev()
                }}
                aria-label="Previous project photo"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg transition-all hover:scale-110 cursor-pointer backdrop-blur-xs border border-slate-200/50"
              >
                <ChevronLeft className="w-6 h-6 -ml-0.5" />
              </button>
            </div>

            {/* Next '>' Button on Image */}
            <div className="absolute inset-y-0 right-0 flex items-center p-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onNext()
                }}
                aria-label="Next project photo"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg transition-all hover:scale-110 cursor-pointer backdrop-blur-xs border border-slate-200/50"
              >
                <ChevronRight className="w-6 h-6 -mr-0.5" />
              </button>
            </div>
          </div>

          {/* Project Details Information */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            <div className="md:col-span-8 space-y-2">
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {currentProject.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            <div className="md:col-span-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#0051d5]" />
                  <span>Timeline</span>
                </span>
                <span className="font-bold text-slate-900 font-heading">
                  {currentProject.duration}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-200/60">
                <span className="font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Compliance</span>
                </span>
                <span className="font-bold text-emerald-600">100% CSLB Met</span>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation Strip (All 8 images in this service) */}
          <div className="space-y-2 pt-1 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>All Projects in this Specialty:</span>
              <span className="text-[11px] text-slate-400">
                Click any thumbnail or use &larr; &rarr; keys
              </span>
            </div>

            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
              {projects.map((proj, idx) => {
                const isActive = idx === currentIndex
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => onSelectIndex(idx)}
                    className={`relative shrink-0 w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden transition-all cursor-pointer shadow-2xs ${
                      isActive
                        ? 'border-2 border-[#0051d5] ring-2 ring-blue-300 scale-105'
                        : 'border-2 border-transparent hover:border-slate-300 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                    />
                    {!isActive && (
                      <span className="absolute inset-0 bg-slate-950/20 hover:bg-transparent transition-colors" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Dialog Bottom Footer Actions */}
        <div className="px-5 sm:px-7 py-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-white transition-colors cursor-pointer"
          >
            Close Viewer
          </button>

          <button
            type="button"
            onClick={() => {
              onClose()
              onRequestEstimate(currentProject.category, currentProject.title)
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#0051d5] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#0041b0] transition-all cursor-pointer"
          >
            <span>Request Estimate for Similar Build</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
