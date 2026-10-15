import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CRAFTSMANSHIP_PROJECTS } from '../../../models/data/about.data'
import type { CraftsmanshipProject } from '../../../models/types'
import { ArrowRight, Eye, X } from 'lucide-react'

export const CraftsmanshipGallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<CraftsmanshipProject | null>(null)

  return (
    <section className="w-full bg-[#f8fafc] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-2">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#0051d5] block">
              Our Work Speaks
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Precision Field Craftsmanship
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Real project milestones captured across North County jobsites.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0051d5] hover:underline group"
          >
            <span>View All Services & Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CRAFTSMANSHIP_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedPhoto(project)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Photo Frame */}
              <div className="h-64 sm:h-72 overflow-hidden relative bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3.5 left-3.5 bg-slate-950/85 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  {project.categoryBadge}
                </span>

                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-[#0051d5]" />
                    <span>View Inspection Detail</span>
                  </span>
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-6 sm:p-7 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#0051d5] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Inspection Detail Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-80 sm:h-96 relative bg-slate-950">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.alt}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-[#0051d5] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                {selectedPhoto.categoryBadge}
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedPhoto.description}
              </p>
              <p className="text-xs text-slate-500 pt-2 border-t border-slate-100 italic">
                Inspected and framed under active CSLB Class B #1092902 standards.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
