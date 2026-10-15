import React, { useState, useMemo } from 'react'
import {
  HelpCircle,
  Search,
  X,
  ChevronDown,
  ShieldCheck,
  Award,
  CheckCircle2,
  FileCheck2,
  Phone,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { ABOUT_FAQ_DATA, FAQ_CATEGORIES } from '../../../models/data/aboutFaq.data'
import { COMPANY_DATA } from '../../../models/data/company.data'
import type { FaqCategory } from '../../../models/types'

export const AboutFaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(['faq-license-insurance', 'faq-onsite-supervision'])
  )

  // Toggle single item
  const handleToggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  // Filter questions based on category and search query
  const filteredFaqs = useMemo(() => {
    return ABOUT_FAQ_DATA.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory

      const query = searchQuery.trim().toLowerCase()
      if (!query) return matchesCategory

      const matchesText =
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query) ||
        (item.highlight && item.highlight.toLowerCase().includes(query))

      return matchesCategory && matchesText
    })
  }, [activeCategory, searchQuery])

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: ABOUT_FAQ_DATA.length }
    ABOUT_FAQ_DATA.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1
    })
    return counts
  }, [])

  const handleExpandAll = () => {
    setOpenIds(new Set(filteredFaqs.map((f) => f.id)))
  }

  const handleCollapseAll = () => {
    setOpenIds(new Set())
  }

  const handleScrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('about-contact-quote')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="about-faq"
      className="w-full bg-[#f8fafc] py-16 sm:py-24 border-t border-slate-200/80 scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative ambient gradient spots */}
      <div className="absolute top-1/4 -right-36 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-36 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-[#0051d5] text-xs font-extrabold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#0051d5]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Clear Answers to Help You Build With Confidence
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Planning an ADU, structural home renovation, or retaining wall involves key municipal permits, budget clarity, and licensed oversight. Here is everything you need to know about partnering with BAS General Contractor Inc.
          </p>
        </div>

        {/* 4 Trust Highlights Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 pt-2">
          <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 block leading-tight">
                CSLB #1092902
              </span>
              <span className="text-[11px] text-slate-500 font-medium">Class B • Bonded &amp; Insured</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 block leading-tight">
                30+ Years Trade
              </span>
              <span className="text-[11px] text-slate-500 font-medium">Boots-on-ground since 1991</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 block leading-tight">
                100% Permitted
              </span>
              <span className="text-[11px] text-slate-500 font-medium">North County City Mastery</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 block leading-tight">
                Direct Supervision
              </span>
              <span className="text-[11px] text-slate-500 font-medium">No 3rd-party handoffs</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {FAQ_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id
                const count = categoryCounts[cat.id] ?? 0

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0051d5] text-white shadow-md shadow-blue-500/20'
                        : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-md font-extrabold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Expand / Collapse All Quick Button */}
            <div className="flex items-center gap-2 shrink-0 self-end lg:self-auto">
              <button
                type="button"
                onClick={handleExpandAll}
                className="text-xs font-semibold text-slate-600 hover:text-[#0051d5] transition-colors px-2 py-1 cursor-pointer"
              >
                Expand All
              </button>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="text-xs font-semibold text-slate-600 hover:text-[#0051d5] transition-colors px-2 py-1 cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions (e.g. permits, ADU timeline, pricing, load-bearing walls)..."
              className="w-full pl-12 pr-11 py-3.5 rounded-2xl bg-white border border-slate-200/90 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0051d5] focus:ring-4 focus:ring-blue-500/10 shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Questions Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.has(faq.id)

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border bg-white overflow-hidden ${
                    isOpen
                      ? 'border-[#0051d5]/50 ring-2 ring-blue-500/10 shadow-md'
                      : 'border-slate-200/80 shadow-xs hover:border-slate-300'
                  }`}
                >
                  {/* Header Button */}
                  <button
                    type="button"
                    onClick={() => handleToggle(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-6 py-4.5 sm:py-5 flex items-start sm:items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                  >
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0051d5] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                          {faq.categoryLabel}
                        </span>
                      </div>
                      <h3
                        className={`font-heading text-base sm:text-lg font-bold leading-snug transition-colors ${
                          isOpen ? 'text-[#0051d5]' : 'text-slate-900'
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 mt-1 sm:mt-0 ${
                        isOpen
                          ? 'bg-blue-50 text-[#0051d5] rotate-180'
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Body Content */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 space-y-3 border-t border-slate-100">
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>

                      {faq.highlight && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700">
                          <Sparkles className="w-3.5 h-3.5 text-[#0051d5]" />
                          <span>{faq.highlight}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="p-10 text-center rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
            <h4 className="font-heading text-lg font-bold text-slate-900">
              No matching questions found
            </h4>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Try another search term or click below to reset.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('all')
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-[#0051d5] transition-colors cursor-pointer"
            >
              <span>Reset Search &amp; Filters</span>
            </button>
          </div>
        )}

        {/* Still Have Questions CTA Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white shadow-xl overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase font-extrabold tracking-wider text-blue-400 block">
                HAVE A SPECIFIC NORTH COUNTY PROJECT IN MIND?
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Speak Directly with Belen Silva
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have lot setback questions, need advice on municipal permits, or want an honest feasibility assessment, we are here to help.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-blue-50 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#0051d5]" />
                <span>Call {COMPANY_DATA.phone}</span>
              </a>

              <button
                type="button"
                onClick={handleScrollToQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0051d5] hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-sm cursor-pointer"
              >
                <span>Request Free Itemized Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
