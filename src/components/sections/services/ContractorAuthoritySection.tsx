import React from 'react'
import { Phone } from 'lucide-react'
import { COMPANY_DATA } from '../../../models/data/company.data'
import { LEADERSHIP_STATEMENT_DATA } from '../../../models/data/servicesPage.data'

export const ContractorAuthoritySection: React.FC = () => {
  return (
    <section className="w-full py-14 lg:py-16 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="p-7 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Quote & Founder Bio */}
          <div className="flex items-start gap-5 sm:gap-6 max-w-2xl">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0f172a] text-white flex items-center justify-center font-heading font-extrabold text-xl sm:text-2xl shrink-0 shadow-sm">
              {LEADERSHIP_STATEMENT_DATA.initials}
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0051d5]">
                Leadership Statement
              </span>
              <blockquote className="font-heading text-base sm:text-lg lg:text-xl text-slate-900 font-bold italic leading-snug">
                {LEADERSHIP_STATEMENT_DATA.quote}
              </blockquote>
              <span className="text-xs sm:text-sm text-slate-600 mt-1">
                — <strong className="text-slate-900">{LEADERSHIP_STATEMENT_DATA.author}</strong>,{' '}
                {LEADERSHIP_STATEMENT_DATA.role}
              </span>
            </div>
          </div>

          {/* Direct Superintendent Contact */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 shrink-0 w-full sm:w-auto justify-end">
            <div className="text-center sm:text-right lg:text-center xl:text-right">
              <div className="font-heading text-base text-slate-900 font-bold">
                Call for Guidance
              </div>
              <div className="text-xs text-slate-500">
                Direct line to site superintendents
              </div>
            </div>

            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0f172a] text-white font-bold text-sm hover:bg-[#0051d5] transition-all shadow-md shrink-0"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{COMPANY_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
