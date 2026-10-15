import React from 'react'
import { Phone, Calculator, ArrowRight } from 'lucide-react'
import { COMPANY_DATA } from '../../models/data/company.data'

export interface FloatingContactBarProps {
  onEstimateClick: () => void
  onCalculatorClick: () => void
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({
  onEstimateClick,
  onCalculatorClick,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-2">
      <a
        href={`tel:${COMPANY_DATA.phoneRaw}`}
        className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-900 font-semibold text-xs flex items-center justify-center gap-1.5 active:bg-slate-200 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#0051d5]" />
        <span>Call</span>
      </a>

      <button
        onClick={onCalculatorClick}
        className="py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1 active:bg-slate-200 transition-colors cursor-pointer"
        aria-label="Open ADU Calculator"
      >
        <Calculator className="w-3.5 h-3.5 text-blue-600" />
        <span className="hidden sm:inline">ADU Calc</span>
      </button>

      <button
        onClick={onEstimateClick}
        className="flex-2 py-2.5 px-4 rounded-xl bg-[#0051d5] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:bg-[#1d4ed8] transition-colors cursor-pointer"
      >
        <span>Get Estimate</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}
