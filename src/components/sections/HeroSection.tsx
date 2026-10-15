import React from 'react'
import { RatingStars } from '../ui/RatingStars'
import { Button } from '../ui/Button'
import { HERO_METRICS, COMPANY_DATA } from '../../models/data/company.data'
import { FEATURED_PROJECTS } from '../../models/data/projects.data'
import type { ProjectCaseStudy } from '../../models/types'
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, HardHat } from 'lucide-react'

export interface HeroSectionProps {
  onEstimateClick: () => void
  onProjectClick: (project: ProjectCaseStudy) => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onEstimateClick,
  onProjectClick,
}) => {
  const primaryProject = FEATURED_PROJECTS[0] // Arcadia Kitchen
  const secondaryProject = FEATURED_PROJECTS[1] // Oak LVP Hallway

  return (
    <section className="relative w-full py-12 lg:py-20 overflow-hidden">
      {/* Subtle Architectural Ambient Radial Gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Hero Text Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs">
              <RatingStars rating={5} size="sm" />
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-slate-700">
                5.0 Google Rated • CSLB #1092902 • Bonded & Insured
              </span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Premier Custom Construction & ADU Renovations in{' '}
              <span className="text-[#0051d5]">North County San Diego</span>
            </h1>

            {/* Secondary Deck */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              From accessory dwelling units (ADU & JADU) and luxury ground-up home additions to turnkey kitchen & bathroom remodels. Full-service licensed general contracting managing your build from 3D architectural plans to final city sign-off.
            </p>

            {/* CTAs & Micro-trust */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <Button
                variant="secondary"
                size="xl"
                onClick={onEstimateClick}
                rightIcon={<ArrowRight className="w-5 h-5 ml-1" />}
                className="shadow-lg shadow-blue-500/20"
              >
                Get Free Estimate
              </Button>

              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white text-slate-900 font-bold text-base border border-slate-200 shadow-xs hover:bg-slate-50 hover:border-slate-300 transition-all gap-2"
              >
                <Phone className="w-5 h-5 text-[#0051d5]" />
                <span>Call {COMPANY_DATA.phone}</span>
              </a>
            </div>

            {/* Micro-trust line */}
            <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-[#0051d5] shrink-0" />
              <span>Free On-Site Consultation • Direct Oversight by Belen & Licensed Team</span>
            </div>

            {/* 3 Horizontally Aligned Metric Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-slate-200/60">
              {HERO_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-xs flex flex-col items-center text-center hover:border-slate-200 transition-colors"
                >
                  <span
                    className={`font-heading text-lg sm:text-2xl font-extrabold ${
                      metric.accent ? 'text-[#0051d5]' : 'text-slate-900'
                    }`}
                  >
                    {metric.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative">
            {/* Primary Showcase Card (Kitchen Remodel Inspiration) */}
            <div
              onClick={() => onProjectClick(primaryProject)}
              className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-2xl group cursor-pointer"
            >
              <img
                src={primaryProject.imageUrl}
                alt={primaryProject.alt}
                className="w-full h-[400px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#0051d5] text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                    {primaryProject.detailLabel}
                  </span>
                  <p className="font-heading text-lg sm:text-xl font-bold text-white leading-tight">
                    {primaryProject.title}
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {primaryProject.location} • {primaryProject.specSummary}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-[#0051d5] transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Detail Card (Hallway LVP Flooring) */}
            <div
              onClick={() => onProjectClick(secondaryProject)}
              className="hidden sm:flex absolute -bottom-8 -left-8 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/80 w-64 items-center gap-3 cursor-pointer hover:-translate-y-1 transition-all group"
            >
              <img
                src={secondaryProject.imageUrl}
                alt={secondaryProject.alt}
                className="w-16 h-20 rounded-xl object-cover"
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#0051d5] uppercase tracking-wider">
                  {secondaryProject.detailLabel}
                </span>
                <span className="font-heading text-sm font-bold text-slate-900 leading-snug group-hover:text-[#0051d5] transition-colors">
                  {secondaryProject.title}
                </span>
                <span className="text-xs text-slate-500 mt-0.5">
                  Seamless Level 5 Drywall
                </span>
              </div>
            </div>

            {/* Floating Engineering Spec Badge Top-Right */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-700/80 flex items-center gap-2.5">
              <HardHat className="w-5 h-5 text-amber-400" />
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-blue-300">
                  CSLB Class B
                </span>
                <span className="text-xs font-bold">General Building #1092902</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
