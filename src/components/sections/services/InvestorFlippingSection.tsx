import React from 'react'
import {
  Scale,
  FileText,
  BadgeCheck,
  CheckSquare,
  ShieldCheck,
  TrendingUp,
  Zap,
  Shield,
  Calculator,
} from 'lucide-react'
import { INVESTOR_FLIPPING_DATA } from '../../../models/data/servicesPage.data'

export interface InvestorFlippingSectionProps {
  onSelectService: (serviceName: string) => void
}

export const InvestorFlippingSection: React.FC<InvestorFlippingSectionProps> = ({
  onSelectService,
}) => {
  const getSubcardIcon = (iconName: string) => {
    switch (iconName) {
      case 'file-text':
        return <FileText className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
      case 'badge':
        return <BadgeCheck className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
      case 'check-square':
        return <CheckSquare className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
      case 'shield-check':
        return <ShieldCheck className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
      default:
        return <CheckSquare className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
    }
  }

  const getInvestorItemIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
      case 'shield':
        return <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
      case 'calculator':
        return <Calculator className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
      default:
        return <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
    }
  }

  return (
    <section
      id="service-flipping"
      className="w-full py-16 lg:py-20 bg-white border-y border-slate-200/70 scroll-mt-32 sm:scroll-mt-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#0f172a] text-white flex items-center justify-center font-bold text-sm shrink-0">
                {INVESTOR_FLIPPING_DATA.step}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0051d5]">
                {INVESTOR_FLIPPING_DATA.kicker}
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {INVESTOR_FLIPPING_DATA.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {INVESTOR_FLIPPING_DATA.description}
            </p>

            {/* AB 968 Compliance Box */}
            <div className="p-6 rounded-2xl bg-slate-100/90 border border-slate-200/90 flex flex-col gap-4 shadow-xs">
              <div className="flex items-center gap-2.5 text-slate-900 font-heading font-bold text-base sm:text-lg">
                <Scale className="w-6 h-6 text-[#0051d5] shrink-0" />
                <span>{INVESTOR_FLIPPING_DATA.complianceBox.title}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {INVESTOR_FLIPPING_DATA.complianceBox.intro}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-800 text-xs sm:text-sm">
                {INVESTOR_FLIPPING_DATA.complianceBox.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/70 shadow-2xs font-medium"
                  >
                    {getSubcardIcon(pt.icon)}
                    <span>{pt.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {INVESTOR_FLIPPING_DATA.conclusion}
            </p>
          </div>

          {/* Right Column: Investor Advantage Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0f172a] text-white flex flex-col gap-6 shadow-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-blue-300">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  {INVESTOR_FLIPPING_DATA.investorCard.badge}
                </span>
              </div>

              <h4 className="font-heading text-xl sm:text-2xl text-white font-extrabold leading-snug">
                {INVESTOR_FLIPPING_DATA.investorCard.title}
              </h4>

              <div className="space-y-4">
                {INVESTOR_FLIPPING_DATA.investorCard.items.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    {getInvestorItemIcon(item.icon)}
                    <div>
                      <div className="font-heading text-sm sm:text-base text-white font-bold">
                        {item.title}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onSelectService('Home Flipping')}
                className="w-full text-center py-3.5 rounded-xl bg-[#0051d5] text-white text-sm font-bold hover:bg-[#0041b0] transition-all shadow-md cursor-pointer mt-2"
              >
                {INVESTOR_FLIPPING_DATA.investorCard.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
