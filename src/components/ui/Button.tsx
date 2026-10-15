import React from 'react'
import { cn } from '../../utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'subtle'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'secondary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer select-none rounded-xl active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none'

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5',
      xl: 'text-lg px-8 py-4 gap-3',
    }

    const variantStyles = {
      primary:
        'bg-[#0f172a] text-white hover:bg-[#1e293b] shadow-md hover:shadow-lg hover:-translate-y-0.5',
      secondary:
        'bg-[#0051d5] text-white hover:bg-[#1d4ed8] shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5',
      accent:
        'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-md hover:-translate-y-0.5',
      outline:
        'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm',
      subtle:
        'bg-slate-100 text-slate-800 hover:bg-slate-200 shadow-none',
      ghost:
        'text-slate-700 hover:bg-slate-100/80 shadow-none',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-1" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'
