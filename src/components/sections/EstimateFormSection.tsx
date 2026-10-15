import React from 'react'
import { useEstimateController } from '../../controllers/useEstimateController'
import { ConsultationSuccessModal } from '../modals/ConsultationSuccessModal'
import { COMPANY_DATA } from '../../models/data/company.data'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Textarea } from '../ui/Textarea'
import { Button } from '../ui/Button'
import { Receipt, Clock, UserCheck, Phone, Mail, Send, Lock } from 'lucide-react'

export interface EstimateFormSectionProps {
  initialProjectType?: string
  initialNotes?: string
}

export const EstimateFormSection: React.FC<EstimateFormSectionProps> = ({
  initialProjectType,
  initialNotes,
}) => {
  const {
    formData,
    updateField,
    handleSubmit,
    isSubmitting,
    isSubmitted,
    errorMessage,
    setIsSubmitted,
  } = useEstimateController()

  // Prepopulate if provided from ADU calculator or category click
  React.useEffect(() => {
    if (initialProjectType && !formData.projectType) {
      updateField('projectType', initialProjectType)
    }
  }, [initialProjectType])

  React.useEffect(() => {
    if (initialNotes && !formData.notes) {
      updateField('notes', initialNotes)
    }
  }, [initialNotes])

  return (
    <section id="estimate-form" className="w-full py-20 bg-slate-100/70 border-t border-slate-200/60 scroll-mt-28 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left: Consultation Value & Direct Connect (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0051d5]" />
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#0051d5]">
                Fast Response Time
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Get Your Free Estimate & Project Consultation
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Fill out the form to request a detailed on-site assessment with Belen and our engineering team. We deliver line-item transparent bids with exact timelines and material specs.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white text-[#0051d5] flex items-center justify-center shadow-xs border border-slate-200/80 shrink-0 mt-0.5">
                  <Receipt className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading text-sm sm:text-base font-bold text-slate-900">
                    Transparent Itemized Pricing
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500">
                    No hidden contractor fees or surprise billings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white text-[#0051d5] flex items-center justify-center shadow-xs border border-slate-200/80 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading text-sm sm:text-base font-bold text-slate-900">
                    Fast 24-48 Hour Turnaround
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Rapid consultation scheduling across North County.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white text-[#0051d5] flex items-center justify-center shadow-xs border border-slate-200/80 shrink-0 mt-0.5">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading text-sm sm:text-base font-bold text-slate-900">
                    Direct Contractor Access
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Work directly with Belen and seasoned on-site foremen.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone & Email Bar */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                Direct Office & Mobile
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm font-semibold">
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="flex items-center gap-2 text-slate-900 hover:text-[#0051d5] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0051d5]" />
                  <span>{COMPANY_DATA.phone}</span>
                </a>
                <span className="hidden sm:inline text-slate-300">|</span>
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="flex items-center gap-2 text-slate-900 hover:text-[#0051d5] transition-colors truncate"
                >
                  <Mail className="w-4 h-4 text-[#0051d5]" />
                  <span className="truncate">{COMPANY_DATA.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Modern Desktop Lead Capture Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 shadow-xl border border-slate-200/80">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name *"
                  id="name"
                  placeholder="e.g. Michael Davis"
                  value={formData.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  required
                />
                <Input
                  label="Phone Number *"
                  id="phone"
                  type="tel"
                  placeholder="(760) 000-0000"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Email Address *"
                  id="email"
                  type="email"
                  placeholder="michael@example.com"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  required
                />
                <Select
                  label="Project Type *"
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => updateField('projectType', e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Primary Scope
                  </option>
                  <option value="adu">ADU / JADU Construction (Detached or Attached)</option>
                  <option value="kitchen">Full Kitchen Remodel & Cabinetry</option>
                  <option value="bathroom">Master Bathroom Renovation</option>
                  <option value="addition">Whole Home Addition & Framing</option>
                  <option value="grading">Grading, Utilities & Site Work</option>
                  <option value="other">Other Residential Renovation</option>
                </Select>
              </div>

              <Input
                label="Property Address or Zip Code *"
                id="address"
                placeholder="e.g. 828 Arcadia Ave, Vista, CA 92084"
                value={formData.propertyAddress}
                onChange={(e) => updateField('propertyAddress', e.target.value)}
                required
              />

              <Textarea
                label="Project Details / Goals"
                id="notes"
                rows={4}
                placeholder="Tell us about your square footage, timeline, budget range, or specific architectural needs..."
                value={formData.notes}
                onChange={(e) => updateField('notes', e.target.value)}
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="secondary"
                  size="xl"
                  className="w-full justify-center shadow-lg shadow-blue-500/20"
                  isLoading={isSubmitting}
                  rightIcon={<Send className="w-5 h-5 ml-1" />}
                >
                  Send Free Quote Request
                </Button>
              </div>

              <p className="text-center text-xs text-slate-500 pt-1 flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  Your contact information is never shared. CSLB #1092902 licensed & bonded protection guaranteed.
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <ConsultationSuccessModal
        isOpen={isSubmitted}
        onClose={() => setIsSubmitted(false)}
        customerName={formData.fullName}
      />
    </section>
  )
}
