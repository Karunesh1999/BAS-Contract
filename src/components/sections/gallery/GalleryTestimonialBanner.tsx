import React from 'react'
import { Star } from 'lucide-react'
import { GALLERY_TESTIMONIAL } from '../../../models/data/gallery.data'

export const GalleryTestimonialBanner: React.FC = () => {
  return (
    <section className="w-full py-14 lg:py-16 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-6 relative z-10">
        {/* 5 Stars */}
        <div className="flex items-center justify-center gap-1.5 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl text-white font-medium italic max-w-3xl mx-auto leading-snug">
          {GALLERY_TESTIMONIAL.quote}
        </blockquote>

        {/* Author */}
        <div className="flex flex-col items-center justify-center pt-2">
          <span className="font-heading text-lg font-bold text-white">
            {GALLERY_TESTIMONIAL.author}
          </span>
          <span className="text-xs sm:text-sm text-blue-200 mt-0.5">
            {GALLERY_TESTIMONIAL.location}
          </span>
        </div>
      </div>
    </section>
  )
}
