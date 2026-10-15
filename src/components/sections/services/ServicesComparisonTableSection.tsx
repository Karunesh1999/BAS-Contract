import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SERVICE_COMPARISON_TABLE_DATA } from '../../../models/data/servicesPage.data'

export const ServicesComparisonTableSection: React.FC = () => {
  const handleScrollToSection = (anchorId: string) => {
    const id = anchorId.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', anchorId)
    }
  }

  const getPermitBadge = (text: string) => {
    if (text.includes('Scope Dependent')) {
      return (
        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
          {text}
        </span>
      )
    }
    return (
      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#0051d5] text-xs font-bold">
        {text}
      </span>
    )
  }

  return (
    <section className="w-full py-16 lg:py-20 bg-slate-100/70 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5]">
            Service Architecture
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Scope, Timelines & Permitting at a Glance
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear, upfront expectations designed for discerning homeowners and property investors.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="w-full overflow-x-auto rounded-3xl bg-white border border-slate-200/80 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-bold text-[11px] tracking-wider">
                <th className="py-4 px-6">Service Category</th>
                <th className="py-4 px-6">City Permit Required?</th>
                <th className="py-4 px-6">Average Timeline</th>
                <th className="py-4 px-6">Key Engineering Focus</th>
                <th className="py-4 px-6 text-right">Direct Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {SERVICE_COMPARISON_TABLE_DATA.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <td className="py-4 px-6 font-heading font-bold text-slate-900">
                    {row.category}
                  </td>
                  <td className="py-4 px-6">{getPermitBadge(row.permitRequired)}</td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {row.timeline}
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    {row.keyFocus}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      type="button"
                      onClick={() => handleScrollToSection(row.anchorId)}
                      className="inline-flex items-center gap-1 text-[#0051d5] hover:text-[#0041b0] font-bold text-xs hover:underline cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
