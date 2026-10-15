import React from 'react'
import { COMPANY_DATA } from '../../models/data/company.data'
import { EstimateFormSection } from '../../components/sections/EstimateFormSection'
import { MapPin, Phone, Mail } from 'lucide-react'

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase font-extrabold tracking-wider text-[#0051d5]">
          Direct Contractor Access
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Contact BAS General Contractor
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Reach Belen and the construction team directly. We are always available for lot assessments, plan reviews, and honest project consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0051d5] flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-lg font-bold text-slate-900">Direct Phone</h3>
          <p className="text-xs text-slate-500">Call or text for immediate scheduling</p>
          <a
            href={`tel:${COMPANY_DATA.phoneRaw}`}
            className="font-heading text-xl font-bold text-[#0051d5] hover:underline block pt-2"
          >
            {COMPANY_DATA.phone}
          </a>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0051d5] flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-lg font-bold text-slate-900">Email Address</h3>
          <p className="text-xs text-slate-500">Send architectural plans or sketches</p>
          <a
            href={`mailto:${COMPANY_DATA.email}`}
            className="text-sm font-bold text-slate-800 hover:text-[#0051d5] block pt-2 break-all"
          >
            {COMPANY_DATA.email}
          </a>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0051d5] flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-lg font-bold text-slate-900">Vista Headquarters</h3>
          <p className="text-xs text-slate-500">Office & Materials Yard</p>
          <p className="text-sm font-semibold text-slate-800 pt-2">
            {COMPANY_DATA.address.full}
          </p>
        </div>
      </div>

      {/* Embedded Lead Capture */}
      <EstimateFormSection />
    </div>
  )
}
