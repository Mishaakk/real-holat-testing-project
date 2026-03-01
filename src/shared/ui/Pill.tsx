import { ButtonHTMLAttributes } from 'react'
import { cn } from '../lib/cn'

interface PillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  dark?: boolean
}

export function Pill({ active, dark, className, children, ...props }: PillProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border-none',
        active && !dark && 'bg-[#00FF7F] text-[#111] shadow-[0_2px_10px_rgba(0,255,127,0.35)]',
        active && dark  && 'bg-[#00FF7F] text-[#111]',
        !active && !dark && 'bg-white/60 text-[#444] hover:bg-white/90',
        !active && dark  && 'bg-transparent text-white hover:bg-white/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
