import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../lib/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'green' | 'purple' | 'white' | 'dark' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const variantClasses = {
  green:  'bg-[#00FF7F] text-[#111] shadow-[0_4px_20px_rgba(0,255,127,0.4)] hover:shadow-[0_6px_28px_rgba(0,255,127,0.5)] hover:brightness-105',
  purple: 'bg-[#8B5CF6] text-white shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:shadow-[0_6px_28px_rgba(139,92,246,0.5)] hover:brightness-105',
  white:  'bg-white text-[#111] shadow-[0_2px_12px_rgba(0,0,0,0.10)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]',
  dark:   'bg-[#111] text-white hover:bg-[#222]',
  ghost:  'bg-white/60 text-[#444] hover:bg-white/90',
}

const sizeClasses = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-3.5 text-[15px]',
  lg: 'px-10 py-4 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'green', size = 'md', children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-bold',
        'transition-all duration-200 active:scale-[0.97] cursor-pointer',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
)
Button.displayName = 'Button'
