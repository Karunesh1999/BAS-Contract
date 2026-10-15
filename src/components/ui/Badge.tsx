import React from 'react'
import { cn } from '../../utils/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'amber' | 'emerald' | 'slate'
  size?: 'sm' | 'md'
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'secondary',
  size = 'md',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-bold tracking-wider uppercase rounded-full select-none'

  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
  }

  const variantStyles = {
    primary: 'bg-slate-900 text-white',
    secondary: 'bg-blue-100 text-blue-700 border border-blue-200/60',
    outline: 'border border-slate-300 text-slate-700 bg-white',
    amber: 'bg-amber-100 text-amber-800 border border-amber-200',
    emerald: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    slate: 'bg-slate-100 text-slate-700',
  }

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)} {...props}>
      {children}
    </span>
  )
}
