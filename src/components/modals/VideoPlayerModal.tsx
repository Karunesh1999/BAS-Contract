import React, { useState } from 'react'
import { Modal } from '../ui/Modal'
import { Play, Pause, Volume2, Maximize2, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react'
import { Button } from '../ui/Button'

export interface VideoPlayerModalProps {
  isOpen: boolean
  onClose: () => void
  onBookEstimate: () => void
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  onClose,
  onBookEstimate,
}) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(45)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Arcadia Ave Detached ADU Walkthrough"
      description="Direct contractor walkthrough with Belen & the framing crew (Vista, CA)"
      maxWidth="4xl"
    >
      <div className="space-y-5">
        {/* Mock Custom Interactive Video Player */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video shadow-2xl group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUwxz0Ar2k5yfY7d0SYUxLkxzQoKqbBO_SOIorHkK6AYy9pF_v6iilvlVZts9nyZdB2VWZL3qgBvyBHaLLre9SMY9PomTOJjBn7IT8tpSub3oJmkIY_Ajbs59VKuNpMCy60tYKX_NL7mFqe3jtZqVUWNv-OhnHKn770N6Rhz4Qg-E1xR04wcCkhCqRZO-5rBIKAFc0H9LMsaQDeAhhs-5np5VMY9R_zheZ8RWd2r4f-8ModYi1Nf_K-A"
            alt="Detached ADU walkthrough video frame"
            className="w-full h-full object-cover"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#0051d5] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-white" />
            ) : (
              <Play className="w-8 h-8 fill-white ml-1" />
            )}
          </button>

          {/* Top metadata tags */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white z-10 pointer-events-none">
            <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 font-medium border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              Vista, CA • 750 sq ft Detached ADU
            </span>
            <span className="bg-emerald-600/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% City Sign-Off Complete
            </span>
          </div>

          {/* Video Controls Bar */}
          <div className="absolute bottom-3 left-4 right-4 bg-slate-900/85 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white flex flex-col gap-2">
            {/* Progress bar */}
            <div
              className="w-full h-1.5 bg-slate-700 rounded-full cursor-pointer overflow-hidden"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const clickX = e.clientX - rect.left
                setProgress(Math.round((clickX / rect.width) * 100))
              }}
            >
              <div
                className="h-full bg-[#0051d5] rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <span>01:56 / 04:18</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 font-mono">1080p HD</span>
              </div>
              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                <Maximize2 className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Video Key Takeaways & Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-slate-900">4-Foot Setback Precision</p>
              <p className="text-[11px] text-slate-500">
                Engineered to maximize rear yard privacy and retain garden space.
              </p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-slate-900">Dedicated Subpanel</p>
              <p className="text-[11px] text-slate-500">
                Independent 200A electric line for tenant bill separation.
              </p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-slate-900">Turnkey Finish</p>
              <p className="text-[11px] text-slate-500">
                Full kitchen, closet sliders, LVP flooring, and ductless mini-split.
              </p>
            </div>
          </div>
        </div>

        {/* Action row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Want a layout walkthrough for your specific lot size?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="md"
              className="w-full sm:w-auto"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              variant="secondary"
              size="md"
              className="w-full sm:w-auto"
              onClick={() => {
                onClose()
                onBookEstimate()
              }}
            >
              Get Free Estimate on Your Lot
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
