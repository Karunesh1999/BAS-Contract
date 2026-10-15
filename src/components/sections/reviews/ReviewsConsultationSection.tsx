import React from 'react'
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { COMPANY_DATA } from '../../../models/data/company.data'
import type { useReviewsController } from '../../../controllers/useReviewsController'

export interface ReviewsConsultationSectionProps {
  controller: ReturnType<typeof useReviewsController>
}

export const ReviewsConsultationSection: React.FC<
  ReviewsConsultationSectionProps
> = ({ controller }) => {
  const {
    consultationForm,
    updateConsultationField,
    handleConsultationSubmit,
    isConsultationSubmitted,
    resetConsultationForm,
  } = controller

  const scopes = [
    { id: 'ADU', label: 'ADU / JADU' },
    { id: 'Kitchen', label: 'Kitchen' },
    { id: 'Bath', label: 'Bathroom' },
    { id: 'Addition', label: 'Addition' },
    { id: 'Retaining Wall', label: 'Retaining Wall' },
    { id: 'Balcony', label: 'Balcony/Deck' },
  ]

  return (
    <section
      id="consultation-form"
      className="w-full py-16 md:py-24 bg-white scroll-mt-24 sm:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-slate-200/80">
          {/* Left Column: Direct Contractor Contact (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0f172a] text-white p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs uppercase tracking-wider border border-blue-400/20">
                Free Initial Assessment
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Start Your North County Project With Total Clarity
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every consultation includes an on-site feasibility walkthrough with General Contractor Belen Silva, zoning permit review, and itemized transparent pricing.
              </p>

              <div className="space-y-4 pt-4">
                {/* Phone */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center shrink-0 border border-slate-700">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                      DIRECT CONTRACTOR CALL / TEXT
                    </p>
                    <a
                      href={`tel:${COMPANY_DATA.phoneRaw}`}
                      className="font-heading text-base font-bold text-white hover:text-blue-300 transition-colors"
                    >
                      {COMPANY_DATA.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center shrink-0 border border-slate-700">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                      EMAIL INQUIRIES
                    </p>
                    <a
                      href={`mailto:${COMPANY_DATA.email}`}
                      className="font-heading text-sm sm:text-base font-bold text-white hover:text-blue-300 transition-colors"
                    >
                      {COMPANY_DATA.email}
                    </a>
                  </div>
                </div>

                {/* HQ Address */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center shrink-0 border border-slate-700">
                    <MapPin className="w-4 h-4 text-[#0051d5]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                      HEADQUARTERS
                    </p>
                    <p className="font-heading text-sm sm:text-base font-semibold text-slate-200">
                      {COMPANY_DATA.address.full}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Insurance & License Strip */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>{COMPANY_DATA.license}</span>
              <span>$2,000,000 Liability Insured</span>
            </div>
          </div>

          {/* Right Column: Intake Scope Form (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 bg-white flex flex-col justify-center">
            {isConsultationSubmitted ? (
              <div className="py-10 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-slate-900">
                  Thank You, {consultationForm.name}!
                </h4>
                <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                  Belen Silva from BAS General Contractor will contact you within 24 hours to coordinate your project assessment.
                </p>
                <button
                  type="button"
                  onClick={resetConsultationForm}
                  className="mt-3 px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <div>
                  <h4 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
                    Request a Free Estimate &amp; Walkthrough
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Please provide project details and we will reply within 24 hours.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Homeowner Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={consultationForm.name}
                      onChange={(e) =>
                        updateConsultationField('name', e.target.value)
                      }
                      placeholder="Your First & Last Name"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0051d5] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={consultationForm.phone}
                      onChange={(e) =>
                        updateConsultationField('phone', e.target.value)
                      }
                      placeholder="(760) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0051d5] transition-all"
                    />
                  </div>
                </div>

                {/* Email & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={consultationForm.email}
                      onChange={(e) =>
                        updateConsultationField('email', e.target.value)
                      }
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0051d5] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Project Location (City) *
                    </label>
                    <select
                      value={consultationForm.city}
                      onChange={(e) =>
                        updateConsultationField('city', e.target.value)
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0051d5] transition-all"
                    >
                      <option value="Vista, CA">Vista, CA</option>
                      <option value="Carlsbad, CA">Carlsbad, CA</option>
                      <option value="Oceanside, CA">Oceanside, CA</option>
                      <option value="Encinitas, CA">Encinitas, CA</option>
                      <option value="San Marcos, CA">San Marcos, CA</option>
                      <option value="Solana Beach, CA">Solana Beach, CA</option>
                      <option value="Del Mar, CA">Del Mar, CA</option>
                      <option value="Fallbrook, CA">Fallbrook, CA</option>
                    </select>
                  </div>
                </div>

                {/* Scope Radio Badges */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Primary Construction Scope
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                    {scopes.map((item) => {
                      const isChecked = consultationForm.scope === item.id
                      return (
                        <label
                          key={item.id}
                          className={`flex items-center gap-2 p-2.5 rounded-xl cursor-pointer transition-all border text-xs font-semibold ${
                            isChecked
                              ? 'bg-blue-50 border-[#0051d5] text-[#0051d5]'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="consultationScope"
                            value={item.id}
                            checked={isChecked}
                            onChange={(e) =>
                              updateConsultationField('scope', e.target.value)
                            }
                            className="text-[#0051d5] focus:ring-[#0051d5]"
                          />
                          <span>{item.label}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Project Notes or Permitting Questions
                  </label>
                  <textarea
                    rows={3}
                    value={consultationForm.notes}
                    onChange={(e) =>
                      updateConsultationField('notes', e.target.value)
                    }
                    placeholder="Tell us about your property goals, timeline, or specific requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0051d5] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0051d5] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#0041b0] transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Submit Free Estimate Request
                </button>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  Licensed California General Contractor • CSLB #1092902 • Never sold to third parties
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
