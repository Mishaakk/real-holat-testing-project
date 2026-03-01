import type { Donor } from '@/entities/donor/model/'

interface DonorRowProps {
  donor: Donor
}

export function DonorRow({ donor }: DonorRowProps) {
  return (
    <div className="flex items-center justify-between gap-2 bg-[#F7F6F2] rounded-[14px] px-4 py-3 hover:bg-[#eeece6] transition-colors cursor-pointer">
      <span className="text-[12px] font-semibold text-[#333] truncate max-w-[130px]">
        {donor.name}
      </span>
      <span className="text-[11px] font-bold text-[#111] flex-shrink-0 tabular-nums">
        {donor.amount}
      </span>
    </div>
  )
}
