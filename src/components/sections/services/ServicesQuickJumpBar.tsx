import React, { useState, useEffect } from 'react'
import { Filter } from 'lucide-react'
import { SERVICES_QUICK_JUMP_LINKS } from '../../../models/data/servicesPage.data'

export const ServicesQuickJumpBar: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return window.location.hash.replace('#', '')
    }
    return null
  })

  // IntersectionObserver to dynamically highlight the category currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-160px 0px -55% 0px',
        threshold: 0,
      }
    )

    SERVICES_QUICK_JUMP_LINKS.forEach((link) => {
      const element = document.getElementById(link.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setActiveId(id)
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 165
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      })

      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <section className="sticky top-20 sm:top-[112px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-2 flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#0051d5]" />
            Jump to:
          </span>

          {SERVICES_QUICK_JUMP_LINKS.map((link) => {
            const isSelected = activeId === link.id

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0051d5] text-white font-bold shadow-xs scale-[1.02]'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 font-semibold'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
