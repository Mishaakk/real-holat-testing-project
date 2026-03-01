import { HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  rounded?: 'md' | 'lg' | 'xl'
}

export function GlassPanel({ className, rounded = 'xl', children, ...props }: GlassPanelProps) {
  const roundedClass = { md: 'rounded-2xl', lg: 'rounded-[20px]', xl: 'rounded-3xl' }[rounded]

  return (
    <div
      className={cn(
        'bg-white/50 backdrop-blur-md',
        roundedClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
