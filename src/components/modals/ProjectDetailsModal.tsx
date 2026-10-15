import React from 'react'
import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import type { ProjectCaseStudy } from '../../models/types'
import { MapPin, Clock, Ruler, ShieldCheck, CheckCircle2 } from 'lucide-react'

export interface ProjectDetailsModalProps {
  project: ProjectCaseStudy | null
  isOpen: boolean
  onClose: () => void
  onBookSimilar: (projectTitle: string) => void
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  isOpen,
  onClose,
  onBookSimilar,
}) => {
  if (!project) return null

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      description={`${project.location} • ${project.specSummary}`}
      maxWidth="3xl"
    >
      <div className="space-y-6">
        {/* Main Project Image */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-100 shadow-md aspect-video">
          <img
            src={project.imageUrl}
            alt={project.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-semibold flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            {project.location}
          </div>
        </div>

        {/* Project Key Metrics */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
            <div className="flex items-center justify-center text-[#0051d5] mb-1">
              <Clock className="w-4 h-4" />
            </div>
            <p className="font-heading text-base font-bold text-slate-900">{project.stats.duration}</p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Total Turnaround</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
            <div className="flex items-center justify-center text-[#0051d5] mb-1">
              <Ruler className="w-4 h-4" />
            </div>
            <p className="font-heading text-base font-bold text-slate-900">{project.stats.sqft}</p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Square Footage</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
            <div className="flex items-center justify-center text-emerald-600 mb-1">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="font-heading text-base font-bold text-slate-900">{project.stats.permitTime}</p>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">City Sign-Off</p>
          </div>
        </div>

        {/* Project Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Scope Overview</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Contractor Quality Assurances */}
        <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100/80 space-y-2">
          <p className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0051d5]" />
            BAS Contractor Quality Guarantee
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0051d5]" />
              <span>Full CSLB #1092902 permit compliance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0051d5]" />
              <span>Direct on-site management by Belen</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0051d5]" />
              <span>1-Year Workmanship Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0051d5]" />
              <span>Transparent lien waivers provided</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <Button variant="outline" size="md" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              onClose()
              onBookSimilar(project.title)
            }}
          >
            Request Bid for Similar Project
          </Button>
        </div>
      </div>
    </Modal>
  )
}
