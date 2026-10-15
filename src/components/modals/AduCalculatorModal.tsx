import React from 'react'
import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import { useAduCalculator } from '../../controllers/useAduCalculator'
import { DollarSign, TrendingUp, Calendar, Sparkles, ArrowRight } from 'lucide-react'

export interface AduCalculatorModalProps {
  isOpen: boolean
  onClose: () => void
  onApplyToEstimate: (notes: string) => void
}

export const AduCalculatorModal: React.FC<AduCalculatorModalProps> = ({
  isOpen,
  onClose,
  onApplyToEstimate,
}) => {
  const {
    inputs,
    results,
    setSquareFootage,
    setAduType,
    setFinishLevel,
  } = useAduCalculator()

  const handleApply = () => {
    const summary = `Estimated ${inputs.squareFootage} sq ft ${inputs.aduType.replace('_', ' ')} ADU (${inputs.finishLevel} finish) - Estimated cost: $${results.estimatedCostMin.toLocaleString()} - $${results.estimatedCostMax.toLocaleString()}`
    onApplyToEstimate(summary)
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="San Diego ADU Cost & Investment Yield Calculator"
      description="Based on 2025 California Title 24 codes and North County general contracting averages."
      maxWidth="2xl"
    >
      <div className="space-y-6">
        {/* Step 1: ADU Type */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
            1. Select ADU Configuration
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'detached', label: 'Detached Unit', desc: 'Stand-alone backyard build' },
              { id: 'attached', label: 'Attached Addition', desc: 'Connected to main residence' },
              { id: 'garage_conversion', label: 'Garage Conversion', desc: 'Existing structure retrofit' },
              { id: 'jadu', label: 'Junior ADU (JADU)', desc: 'Under 500 sq ft inside home' },
            ].map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setAduType(type.id as typeof inputs.aduType)}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  inputs.aduType === type.id
                    ? 'border-[#0051d5] bg-blue-50/70 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <p className="text-xs font-bold text-slate-900">{type.label}</p>
                <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-2">{type.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Square Footage Slider */}
        <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              2. Planned Square Footage
            </label>
            <span className="font-heading text-lg font-bold text-[#0051d5]">
              {inputs.squareFootage} sq ft
            </span>
          </div>

          <input
            type="range"
            min={250}
            max={1200}
            step={25}
            value={inputs.squareFootage}
            onChange={(e) => setSquareFootage(Number(e.target.value))}
            className="w-full accent-[#0051d5] cursor-pointer"
          />

          <div className="flex justify-between text-[11px] text-slate-500 font-medium">
            <span>250 sq ft (Studio)</span>
            <span>650 sq ft (1-Bed)</span>
            <span>850 sq ft (2-Bed)</span>
            <span>1,200 sq ft (Max Detached)</span>
          </div>
        </div>

        {/* Step 3: Finish Level */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
            3. Interior & Exterior Finish Level
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { id: 'standard', name: 'Standard Turnkey', detail: 'Clean modern finishes & LVP' },
              { id: 'luxury', name: 'Luxury Modern', detail: 'Quartz slabs, high-end tile, vaulted' },
              { id: 'ultra_premium', name: 'Bespoke Coastal', detail: 'Custom architectural millwork' },
            ].map((finish) => (
              <button
                key={finish.id}
                type="button"
                onClick={() => setFinishLevel(finish.id as typeof inputs.finishLevel)}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  inputs.finishLevel === finish.id
                    ? 'border-[#0051d5] bg-blue-50/70 ring-1 ring-[#0051d5]'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <p className="text-xs font-bold text-slate-900">{finish.name}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{finish.detail}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Calculated Results Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Preliminary Cost Estimate
            </span>
            <span className="text-xs text-slate-400">Permits, Foundation & Build</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-slate-400">Total Turnkey Cost</p>
              <p className="font-heading text-xl font-bold text-white mt-1">
                ${results.estimatedCostMin.toLocaleString()} - ${results.estimatedCostMax.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Est. Monthly Rental Yield</p>
              <p className="font-heading text-xl font-bold text-emerald-400 mt-1 flex items-center gap-0.5">
                <DollarSign className="w-4 h-4 -mr-1" />
                {results.monthlyRentalYieldMin.toLocaleString()} - ${results.monthlyRentalYieldMax.toLocaleString()}/mo
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Property Equity Surge</p>
              <p className="font-heading text-xl font-bold text-blue-400 mt-1 flex items-center gap-0.5">
                <TrendingUp className="w-4 h-4 mr-0.5" />
                +${results.equitySurgeMin.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              Build Duration: <strong>{results.timelineWeeks}</strong>
            </span>
            <span className="text-[11px] text-slate-400">
              *Exempt from impact fees under 750 sq ft
            </span>
          </div>
        </div>

        {/* Bottom CTA to attach this estimate */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Ready to confirm setback tolerances and utility trenching with Belen?
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" size="md" onClick={onClose} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={handleApply}
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Apply to Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
