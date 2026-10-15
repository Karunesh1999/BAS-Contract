import React from 'react'
import { Handshake, Phone } from 'lucide-react'
import { COMPANY_DATA } from '../../models/data/company.data'

export const DirectCalloutSection: React.FC = () => {
  return (
    <section className="w-full py-10 bg-[#0f172a] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-2xl bg-[#0051d5] flex items-center justify-center text-white shrink-0 shadow-md">
            <Handshake className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-heading text-lg sm:text-xl font-bold">
              Ready to Start Planning Your Next Project?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Speak directly with licensed contractor Belen today for an upfront, honest quote.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <a
            href={`tel:${COMPANY_DATA.phoneRaw}`}
            className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm flex items-center gap-2 shadow-md hover:bg-blue-50 hover:text-[#0051d5] transition-all hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 text-[#0051d5]" />
            <span>{COMPANY_DATA.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
