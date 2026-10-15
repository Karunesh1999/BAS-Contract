import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '../../utils/cn'

export interface RatingStarsProps {
  rating?: number
  maxRating?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showScore?: boolean
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating = 5,
  maxRating = 5,
  size = 'md',
  className,
  showScore = false,
}) => {
  const sizeMap = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }

  return (
    <div className={cn('inline-flex items-center gap-1', className)}>
      <div className="flex items-center text-amber-500">
        {Array.from({ length: maxRating }).map((_, index) => {
          const filled = index < Math.floor(rating)
          return (
            <Star
              key={index}
              className={cn(sizeMap[size], filled ? 'fill-amber-400 text-amber-500' : 'text-slate-300')}
            />
          )
        })}
      </div>
      {showScore && (
        <span className="text-xs font-bold text-slate-700 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}
