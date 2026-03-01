import { StatItemProps } from "../model/statsItem.types";

export function StatItem({ label, value, unit }: StatItemProps) {
  return (
    <div className="min-w-[140px]">
      <p className="text-[13px] text-[#555] font-medium">{label}</p>
      <div className="flex items-baseline gap-1.5 mt-0.5">
        <span className="text-[26px] font-black text-[#111] leading-none">{value}</span>
        {unit && <span className="text-[11px] text-[#888] font-medium">{unit}</span>}
      </div>
    </div>
  )
}
