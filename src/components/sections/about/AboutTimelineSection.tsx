import React from 'react'
import { ABOUT_TIMELINE } from '../../../models/data/about.data'
import { Building2, Landmark, ShieldCheck, Tag } from 'lucide-react'

export const AboutTimelineSection: React.FC = () => {
  const getStatIcon = (iconName?: string) => {
    switch (iconName) {
      case 'apartment':
        return <Building2 className="w-8 h-8 text-[#0051d5]" />
      case 'location_city':
        return <Landmark className="w-8 h-8 text-[#0051d5]" />
      case 'verified':
        return <ShieldCheck className="w-8 h-8 text-amber-400" />
      default:
        return <Building2 className="w-8 h-8 text-[#0051d5]" />
    }
  }

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#0051d5] block">
            Our Proven Track Record
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Journey of BAS General Contractor
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore the authentic timeline documented by founder Belen Silva—from rigorous hands-on multi-family apprenticeship to licensed coastal builder.
          </p>
        </div>

        {/* Chronological Milestone Blocks */}
        <div className="space-y-8 sm:space-y-10">
          {ABOUT_TIMELINE.map((milestone) => {
            const isHighlighted = milestone.isHighlighted

            return (
              <div
                key={milestone.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-9 lg:p-10 rounded-3xl transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#0f172a] text-white shadow-2xl border border-slate-800'
                    : 'bg-slate-50 border border-slate-200/80 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Milestone Year Column (3 Cols) */}
                <div className="lg:col-span-3 space-y-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                      isHighlighted
                        ? 'bg-[#0051d5] text-white'
                        : 'bg-blue-100 text-[#0051d5]'
                    }`}
                  >
                    {milestone.milestoneNumber}
                  </span>
                  <div
                    className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                      isHighlighted ? 'text-blue-400' : 'text-slate-900'
                    }`}
                  >
                    {milestone.year}
                  </div>
                  <p
                    className={`text-sm sm:text-base font-semibold ${
                      isHighlighted ? 'text-blue-200' : 'text-slate-700'
                    }`}
                  >
                    {milestone.periodTitle}
                  </p>
                </div>

                {/* Milestone Narrative & Tags (5 or 6 Cols depending on right widget) */}
                <div
                  className={`${
                    milestone.photoShowcase ? 'lg:col-span-5' : 'lg:col-span-6'
                  } space-y-4`}
                >
                  <h4
                    className={`font-heading text-lg sm:text-xl font-bold leading-snug ${
                      isHighlighted ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {milestone.headline}
                  </h4>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed italic ${
                      isHighlighted ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {milestone.storyQuote}
                  </p>

                  {/* Badges / Skill tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {milestone.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold ${
                          isHighlighted
                            ? 'bg-white/10 text-slate-200 border border-white/10'
                            : 'bg-white text-slate-700 border border-slate-200 shadow-xs'
                        }`}
                      >
                        <Tag className="w-3 h-3 opacity-60" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Widget: Either Stat Card (3 Cols) or Photo Showcase (4 Cols) */}
                {milestone.photoShowcase ? (
                  <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-lg h-72 bg-slate-950 group">
                    <img
                      src={milestone.photoShowcase.imageUrl}
                      alt={milestone.photoShowcase.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[#0051d5] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                        {milestone.photoShowcase.badge}
                      </span>
                      <p className="text-xs font-semibold leading-snug text-slate-200">
                        {milestone.photoShowcase.caption}
                      </p>
                    </div>
                  </div>
                ) : milestone.statBox ? (
                  <div
                    className={`lg:col-span-3 p-6 sm:p-7 rounded-2xl text-center space-y-2.5 ${
                      isHighlighted
                        ? 'bg-white/10 backdrop-blur-md border border-white/10 text-white'
                        : 'bg-white border border-slate-200/80 shadow-xs text-slate-900'
                    }`}
                  >
                    <div className="flex justify-center mb-1">
                      {getStatIcon(milestone.statBox.icon)}
                    </div>
                    <div
                      className={`font-heading text-xl sm:text-2xl font-extrabold ${
                        isHighlighted ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {milestone.statBox.value}
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        isHighlighted ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {milestone.statBox.description}
                    </p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
