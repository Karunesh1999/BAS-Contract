import React from 'react'
import {
  MapPin,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
  Lock,
  Phone,
} from 'lucide-react'
import { COMPANY_DATA } from '../../../models/data/company.data'
import type { useServicesQuoteController } from '../../../controllers/useServicesQuoteController'

export interface ServicesConsultationQuoteSectionProps {
  controller: ReturnType<typeof useServicesQuoteController>
}

export const ServicesConsultationQuoteSection: React.FC<
  ServicesConsultationQuoteSectionProps
> = ({ controller }) => {
  const {
    formData,
    updateField,
    handleSubmit,
    resetForm,
    isSubmitting,
    isSubmitted,
    errorMessage,
  } = controller

  return (
    <section
      id="consultation-quote"
      className="w-full py-16 lg:py-20 bg-[#f8fafc] scroll-mt-32 sm:scroll-mt-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Context & Credentials (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0051d5]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0051d5]">
                Complimentary On-Site Estimate
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ready to Begin Your Project?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Fill out the form to schedule a site walk with our licensed general contractor. We review floorplans, municipal zoning constraints, and deliver clear line-item proposals.
            </p>

            {/* 3 Detail Cards */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col gap-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-sm sm:text-base text-slate-900 font-bold block">
                    Headquarters
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500">
                    {COMPANY_DATA.address.full}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <span className="font-heading text-sm sm:text-base text-slate-900 font-bold block">
                    Contractors State License Board
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500">
                    License #1092902 (Class B) — Active, Bonded, $2M Insured
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0051d5] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="font-heading text-sm sm:text-base text-slate-900 font-bold block">
                    Response Time
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500">
                    Written estimate callback within 24 business hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white shadow-xl border border-slate-200/80 flex flex-col gap-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-heading text-xl sm:text-2xl text-slate-900 font-extrabold">
                  Request a Scope &amp; Budget Review
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Tell us about your home and timeline. No pressure, transparent guidance.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-slate-900">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                    A BAS General Contractor representative will review your project details and contact you within 24 business hours to schedule your consultation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <a
                      href={`tel:${COMPANY_DATA.phoneRaw}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0051d5] text-white font-bold text-sm shadow-sm hover:bg-[#0041b0] transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call (760) 801-2065 Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-all cursor-pointer"
                    >
                      Submit Another Scope
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="services-name"
                        className="text-xs font-bold text-slate-700"
                      >
                        Full Name *
                      </label>
                      <input
                        id="services-name"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        placeholder="e.g. Robert Smith"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="services-phone"
                        className="text-xs font-bold text-slate-700"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="services-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="(760) 000-0000"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email and Property City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="services-email"
                        className="text-xs font-bold text-slate-700"
                      >
                        Email Address *
                      </label>
                      <input
                        id="services-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="robert@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="services-city"
                        className="text-xs font-bold text-slate-700"
                      >
                        Property City *
                      </label>
                      <select
                        id="services-city"
                        value={formData.propertyCity}
                        onChange={(e) => updateField('propertyCity', e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] focus:bg-white transition-all"
                      >
                        <option value="" disabled>
                          Select City
                        </option>
                        <option value="Vista">Vista, CA</option>
                        <option value="Carlsbad">Carlsbad / La Costa</option>
                        <option value="Oceanside">Oceanside</option>
                        <option value="Encinitas">Encinitas / Leucadia</option>
                        <option value="San Marcos">San Marcos</option>
                        <option value="Solana Beach">Solana Beach / Del Mar</option>
                        <option value="Other">Other North County</option>
                      </select>
                    </div>
                  </div>

                  {/* Primary Service */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="services-category"
                      className="text-xs font-bold text-slate-700"
                    >
                      Primary Service Required *
                    </label>
                    <select
                      id="services-category"
                      value={formData.primaryService}
                      onChange={(e) => updateField('primaryService', e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] focus:bg-white transition-all"
                    >
                      <option value="" disabled>
                        Choose a Service
                      </option>
                      <option value="Whole Home Renovation">
                        Whole Home Renovation &amp; Structural Remodeling
                      </option>
                      <option value="Bathroom Renovations">
                        Bathroom Renovations &amp; Custom Ensuite
                      </option>
                      <option value="Balcony Renovations">
                        Balcony &amp; Deck Structural Renovation
                      </option>
                      <option value="Kitchen Renovations">
                        Kitchen Renovations &amp; Chef Layouts
                      </option>
                      <option value="Home Flipping">
                        Home Flipping &amp; AB 968 Compliance
                      </option>
                      <option value="Retaining Wall">
                        Retaining Wall &amp; Civil Drainage
                      </option>
                      <option value="ADU Construction">
                        Accessory Dwelling Unit (ADU / JADU)
                      </option>
                      <option value="Multiple Services">
                        Multiple Services / Whole-Property Scope
                      </option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="services-notes"
                      className="text-xs font-bold text-slate-700"
                    >
                      Project Notes &amp; Square Footage Details
                    </label>
                    <textarea
                      id="services-notes"
                      rows={4}
                      value={formData.projectNotes}
                      onChange={(e) => updateField('projectNotes', e.target.value)}
                      placeholder="Briefly describe what you'd like to achieve, current conditions, or approximate desired timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#0051d5] text-white font-bold text-sm shadow-md hover:bg-[#0041b0] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>
                      {isSubmitting ? 'Submitting Request...' : 'Submit Estimate Request'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1.5">
                      <Lock className="w-3 h-3 text-slate-400" />
                      Protected by standard client confidentiality • No obligations
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
