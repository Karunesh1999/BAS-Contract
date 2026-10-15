import React from 'react'
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react'
import type { useGalleryController } from '../../../controllers/useGalleryController'

export interface FilterableWorkGridSectionProps {
  controller: ReturnType<typeof useGalleryController>
  onProjectClick?: (category: string, title: string) => void
  onRequestPortfolioClick: () => void
}

export const FilterableWorkGridSection: React.FC<
  FilterableWorkGridSectionProps
> = ({ controller, onRequestPortfolioClick }) => {
  const { filterTabs, selectedFilter, setSelectedFilter, filteredProjects } =
    controller

  return (
    <section className="w-full py-16 bg-slate-100/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0051d5] block">
              Verified Portfolio Archive
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-1">
              Explore by Specialty
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mt-2 leading-relaxed">
              Filter our completed projects by project category. Every project reflects strict engineering adherence to San Diego municipal building codes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs cursor-pointer ${
                    isActive
                      ? 'bg-[#0051d5] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200/80'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              )
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => controller.openLightbox(project)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col h-full group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-60 bg-slate-900 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.alt || project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-xl bg-white/95 text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                    <span>View {project.categoryLabel} (8 Photos)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0051d5]" />
                  </span>
                </div>

                {/* Top-Left Category Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-white/10">
                  {project.categoryLabel}
                </div>

                {/* Bottom-Right Location Badge */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm border border-slate-100">
                  <MapPin className="w-3.5 h-3.5 text-[#0051d5]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#0051d5] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span>
                    Duration: <strong>{project.duration}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      controller.openLightbox(project)
                    }}
                    className="text-[#0051d5] font-bold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>View 8 Photos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Assurance Strip Under Grid */}
        <div className="mt-12 p-6 sm:p-7 bg-white rounded-3xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0051d5] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-heading text-base sm:text-lg text-slate-900 font-bold">
                Looking for a specific architectural blueprint or custom scope?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                We hold full Class B General Building Contracting licensure for both major structural engineering and interior transformations.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onRequestPortfolioClick}
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm shrink-0 hover:bg-[#0051d5] transition-colors shadow-sm cursor-pointer"
          >
            Request In-Person Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
