import React from 'react'
import {
  CheckCircle2,
  Phone,
  MapPin,
  Lock,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { COMPANY_DATA } from '../../../models/data/company.data'
import { GALLERY_CONSULTATION_INFO } from '../../../models/data/gallery.data'
import type { useGalleryController } from '../../../controllers/useGalleryController'

export interface GalleryConsultationFormSectionProps {
  controller: ReturnType<typeof useGalleryController>
}

export const GalleryConsultationFormSection: React.FC<
  GalleryConsultationFormSectionProps
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
      id="quick-consultation"
      className="w-full py-16 lg:py-20 bg-[#f8fafc] scroll-mt-24 sm:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Context & Reassurance (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200/80 rounded-full text-[#0051d5] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <ShieldCheck className="w-4 h-4" />
              <span>{GALLERY_CONSULTATION_INFO.badge}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {GALLERY_CONSULTATION_INFO.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {GALLERY_CONSULTATION_INFO.description}
            </p>

            <div className="space-y-4 pt-2">
              {GALLERY_CONSULTATION_INFO.pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0051d5] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-sm sm:text-base font-bold text-slate-900">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coverage Tag */}
            <div className="p-4 bg-white border border-slate-200/80 rounded-2xl flex items-center gap-3 shadow-2xs">
              <MapPin className="w-5 h-5 text-[#0051d5] shrink-0" />
              <div className="text-xs sm:text-sm text-slate-700 font-medium">
                {GALLERY_CONSULTATION_INFO.servingCities}
              </div>
            </div>
          </div>

          {/* Right: Intake Form Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8 lg:p-10">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
                Request an On-Site Project Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Provide your project details below. We review specs and respond within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-slate-900">
                  Thank You, {formData.fullName}!
                </h4>
                <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                  Your inquiry has been sent to our estimating team. We will call you within 24 business hours to discuss your project scope and schedule an on-site walk.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <a
                    href={`tel:${COMPANY_DATA.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0051d5] text-white font-bold text-sm shadow-md hover:bg-[#0041b0] transition-all cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Belen: {COMPANY_DATA.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
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

                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="gallery-name"
                      className="text-xs font-bold text-slate-700"
                    >
                      Full Name *
                    </label>
                    <input
                      id="gallery-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      placeholder="e.g. Robert Hansen"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="gallery-phone"
                      className="text-xs font-bold text-slate-700"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="gallery-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="(760) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Email & City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="gallery-email"
                      className="text-xs font-bold text-slate-700"
                    >
                      Email Address *
                    </label>
                    <input
                      id="gallery-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="gallery-city"
                      className="text-xs font-bold text-slate-700"
                    >
                      City / Zip Code *
                    </label>
                    <input
                      id="gallery-city"
                      type="text"
                      required
                      value={formData.projectCity}
                      onChange={(e) => updateField('projectCity', e.target.value)}
                      placeholder="e.g. Vista, CA 92084"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Scope Selection */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="gallery-scope"
                    className="text-xs font-bold text-slate-700"
                  >
                    Primary Project Scope
                  </label>
                  <select
                    id="gallery-scope"
                    value={formData.projectType}
                    onChange={(e) => updateField('projectType', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] focus:bg-white transition-all"
                  >
                    <option value="adu">
                      Accessory Dwelling Unit (ADU / JADU)
                    </option>
                    <option value="kitchen">
                      Custom Kitchen Transformation
                    </option>
                    <option value="bathroom">Spa Bathroom Renovation</option>
                    <option value="deck">Balcony or Deck Construction</option>
                    <option value="retaining">
                      Engineered Retaining Wall &amp; Drainage
                    </option>
                    <option value="addition">
                      Room Addition &amp; Structural Remodel
                    </option>
                  </select>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="gallery-notes"
                    className="text-xs font-bold text-slate-700"
                  >
                    Project Details &amp; Desired Timeline
                  </label>
                  <textarea
                    id="gallery-notes"
                    rows={3}
                    value={formData.projectNotes}
                    onChange={(e) => updateField('projectNotes', e.target.value)}
                    placeholder="Briefly describe square footage, existing conditions, or timeline requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>100% confidential. No spam guarantee.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0051d5] text-white font-bold text-sm shadow-md hover:bg-[#0041b0] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    <span>
                      {isSubmitting
                        ? 'Sending Details...'
                        : 'Submit Consultation Request'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
