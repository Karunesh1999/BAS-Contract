import React from 'react'
import { useAboutController } from '../../../controllers/useAboutController'
import { COMPANY_DATA } from '../../../models/data/company.data'
import { Phone, Mail, ShieldCheck, Send, CheckCircle2 } from 'lucide-react'

export const AboutContactQuoteSection: React.FC = () => {
  const {
    formData,
    updateField,
    handleSubmit,
    isSubmitting,
    isSubmitted,
    resetForm,
    errorMessage,
  } = useAboutController()

  return (
    <section id="about-contact-quote" className="w-full bg-[#0f172a] py-20 text-white relative overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Center Aligned Heading */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact Us Today!
          </h2>
          <div className="font-heading text-xl sm:text-2xl text-blue-300 font-bold">
            {COMPANY_DATA.name}
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            For a quote, please fill out the form with a valid email address.
          </p>

          {/* Direct Contact Details */}
          <div className="pt-3 pb-2 space-y-1.5">
            <div className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
              You can call or text:
            </div>
            <a
              className="inline-flex items-center gap-2 font-heading text-xl sm:text-2xl text-white font-extrabold hover:text-blue-300 transition-colors"
              href={`tel:${COMPANY_DATA.phoneRaw}`}
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>{COMPANY_DATA.phone}</span>
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm sm:text-base text-blue-200 hover:underline"
              href={`mailto:${COMPANY_DATA.email}`}
            >
              <Mail className="w-4 h-4 text-blue-300" />
              <span>{COMPANY_DATA.email}</span>
            </a>
          </div>
        </div>

        {/* Lead Capture Form Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/10">
          {isSubmitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                Thank You, {formData.name || 'Neighbor'}!
              </h3>
              <p className="text-sm sm:text-base text-slate-200 max-w-md mx-auto leading-relaxed">
                Your quote request has been sent directly to Belen Silva at BAS General Contractor Inc. We will review your project details and reach out within 24 hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="px-6 py-3 rounded-xl bg-[#0051d5] text-white font-bold text-sm flex items-center gap-2 hover:bg-blue-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Belen Now: (760) 801-2065</span>
                </a>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-white" htmlFor="about-name">
                  Name <span className="text-rose-400">(required)</span>
                </label>
                <input
                  id="about-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] shadow-xs"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-white" htmlFor="about-email">
                  Email <span className="text-rose-400">(required)</span>
                </label>
                <input
                  id="about-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] shadow-xs"
                />
              </div>

              {/* Phone & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-semibold text-white" htmlFor="about-phone">
                    Phone Number <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                  </label>
                  <input
                    id="about-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="(760) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] shadow-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-semibold text-white" htmlFor="about-location">
                    Project City / Location
                  </label>
                  <input
                    id="about-location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    placeholder="Vista, Oceanside, Carlsbad, etc."
                    className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] shadow-xs"
                  />
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-white" htmlFor="about-message">
                  Message / Project Details
                </label>
                <textarea
                  id="about-message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="What type of project are you planning? (ADU / Kitchen / Bath / Addition / Other)&#10;Estimated timeline? (Immediate / 1–3 Months / Planning Phase)&#10;Project location? (Vista, Oceanside, Carlsbad, etc.)&#10;Additional notes or questions for Belen..."
                  className="w-full p-4 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0051d5] shadow-xs leading-relaxed"
                />
              </div>

              {/* CTA Send Button & Trust Assurance */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-3.5 bg-white text-slate-950 hover:bg-blue-500 hover:text-white transition-all rounded-xl font-heading text-sm font-extrabold tracking-widest uppercase shadow-lg hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'SENDING...' : 'SEND'}</span>
                  <Send className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>CSLB #1092902 — Direct Contractor Reply Within 24 Hours</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
