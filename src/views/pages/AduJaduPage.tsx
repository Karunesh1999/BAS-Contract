import React, { useState } from 'react'
import { AduCalculatorModal } from '../../components/modals/AduCalculatorModal'
import { VideoPlayerModal } from '../../components/modals/VideoPlayerModal'
import { Calculator, Play, ShieldCheck, ArrowRight, Home } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Link } from 'react-router-dom'

export const AduJaduPage: React.FC = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
      {/* Title */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0051d5] text-xs font-bold uppercase tracking-wider">
          <Home className="w-4 h-4" />
          <span>North County San Diego ADU Specialist</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Accessory Dwelling Units (ADU & JADU)
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Unlock high monthly rental income, provide independent space for aging parents or adult children, and add hundreds of thousands in instant home equity with a California SB-compliant ADU.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setIsCalculatorOpen(true)}
            leftIcon={<Calculator className="w-4 h-4 mr-1 text-amber-400" />}
          >
            Launch Interactive Cost Calculator
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsVideoOpen(true)}
            leftIcon={<Play className="w-4 h-4 mr-1 text-[#0051d5]" />}
          >
            Watch Arcadia Ave Walkthrough
          </Button>
        </div>
      </div>

      {/* 4 ADU Types Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <span className="text-xs font-bold text-[#0051d5] uppercase tracking-wider">Type 1</span>
          <h3 className="font-heading text-lg font-bold text-slate-900">Detached ADU</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Free-standing cottage up to 1,200 sq ft in your backyard. Complete privacy with separate entrance, utilities, and patio.
          </p>
          <p className="text-xs font-semibold text-slate-900 pt-2 border-t border-slate-100">
            Est. Rent: $2,400 - $3,500/mo
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <span className="text-xs font-bold text-[#0051d5] uppercase tracking-wider">Type 2</span>
          <h3 className="font-heading text-lg font-bold text-slate-900">Attached ADU</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Directly connected to the primary residence, often sharing one wall. Up to 50% of existing home size (max 1,200 sq ft).
          </p>
          <p className="text-xs font-semibold text-slate-900 pt-2 border-t border-slate-100">
            Est. Rent: $2,000 - $2,800/mo
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <span className="text-xs font-bold text-[#0051d5] uppercase tracking-wider">Type 3</span>
          <h3 className="font-heading text-lg font-bold text-slate-900">Garage Conversion</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Convert an underutilized 2-car garage into a modern 400-500 sq ft studio or 1-bedroom flat. Lower foundation costs.
          </p>
          <p className="text-xs font-semibold text-slate-900 pt-2 border-t border-slate-100">
            Est. Rent: $1,800 - $2,400/mo
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <span className="text-xs font-bold text-[#0051d5] uppercase tracking-wider">Type 4</span>
          <h3 className="font-heading text-lg font-bold text-slate-900">Junior ADU (JADU)</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Up to 500 sq ft contained entirely within the existing walls of the primary home, featuring an efficient efficiency kitchenette.
          </p>
          <p className="text-xs font-semibold text-slate-900 pt-2 border-t border-slate-100">
            Est. Rent: $1,400 - $1,900/mo
          </p>
        </div>
      </div>

      {/* San Diego Permitting Advantages */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-6">
        <div className="flex items-center gap-2 text-blue-400">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">California State Law Protections</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold">
          Why 2025 is the Best Time to Build in North County
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <p className="font-bold text-white text-base">No Minimum Lot Size</p>
            <p>Cities cannot deny an ADU due to lot size or inadequate parking under California state law.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <p className="font-bold text-white text-base">Impact Fee Exemption</p>
            <p>Units under 750 square feet are completely exempt from local school and city development impact fees.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <p className="font-bold text-white text-base">4-Foot Setback Mandate</p>
            <p>Municipalities cannot enforce rear or side setbacks greater than 4 feet for accessory units.</p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
          <p className="text-xs text-slate-400">
            Ready to find out what fits on your property lot?
          </p>
          <Link
            to="/#estimate-form"
            className="px-6 py-3 rounded-xl bg-[#0051d5] text-white font-bold text-xs flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg"
          >
            <span>Book Free Lot Feasibility Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Modals */}
      <AduCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onApplyToEstimate={() => {}}
      />
      <VideoPlayerModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onBookEstimate={() => {}}
      />
    </div>
  )
}
