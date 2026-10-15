import React from 'react'
import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import { CheckCircle, Phone, Calendar, ShieldCheck } from 'lucide-react'
import { COMPANY_DATA } from '../../models/data/company.data'

export interface ConsultationSuccessModalProps {
  isOpen: boolean
  onClose: () => void
  customerName?: string
}

export const ConsultationSuccessModal: React.FC<ConsultationSuccessModalProps> = ({
  isOpen,
  onClose,
  customerName,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="md">
      <div className="text-center space-y-5 py-2">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle className="w-10 h-10" />
        </div>

        <div className="space-y-1.5">
          <h3 className="font-heading text-2xl font-bold text-slate-900">
            Request Received!
          </h3>
          <p className="text-sm text-slate-600">
            Thank you{customerName ? `, ${customerName}` : ''}. Belen and our senior engineering team have received your project details.
          </p>
        </div>

        {/* What happens next */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
            What Happens Next:
          </p>
          <div className="space-y-2.5 text-xs text-slate-600">
            <div className="flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
              <span>We review your address zoning, setback ordinances, and preliminary square footage.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#0051d5] shrink-0 mt-0.5" />
              <span>Within <strong>24-48 hours</strong>, Belen will reach out directly to schedule a free on-site property evaluation.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>You receive a line-item, transparent estimate with guaranteed permit pass milestones.</span>
            </div>
          </div>
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <Button variant="secondary" size="lg" className="w-full" onClick={onClose}>
            Back to Overview
          </Button>
          <a
            href={`tel:${COMPANY_DATA.phoneRaw}`}
            className="text-xs font-semibold text-slate-600 hover:text-[#0051d5] flex items-center justify-center gap-1.5 py-1"
          >
            <Phone className="w-3.5 h-3.5 text-[#0051d5]" />
            Need an urgent response? Call {COMPANY_DATA.phone}
          </a>
        </div>
      </div>
    </Modal>
  )
}
