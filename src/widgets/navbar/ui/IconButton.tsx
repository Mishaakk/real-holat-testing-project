import { cn } from '@/shared/lib/cn'
import { forwardRef } from 'react'
import { IconButtonProps, sizeStyles, variantStyles } from '../model/IconButton.types'


export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = 'white', size = 'md', children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border-none',
        'active:scale-95',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
)

IconButton.displayName = 'IconButton'
