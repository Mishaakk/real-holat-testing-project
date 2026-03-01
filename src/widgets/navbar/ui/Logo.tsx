import { cn } from '@/shared/lib/cn'
import { LogoProps } from '../model/Logo.types'


export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div
        className="w-8 h-8 rounded-full flex-shrink-0"
        style={{ background: 'conic-gradient(#00FF7F 0deg, #3B82F6 120deg, #8B5CF6 240deg, #00FF7F 360deg)' }}
      />
      <span className="text-[15px] font-black tracking-tight text-[#111]">GEOPORTAL</span>
    </div>
  )
}
