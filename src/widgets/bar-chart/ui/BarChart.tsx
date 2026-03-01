import { INTERNET_DATA } from '../../../entities/donor/model'

const MAX_VALUE = 1200

function BarRow({ region, optik, mobil }: { region: string; optik: number; mobil: number }) {
  const optikPct = (optik / MAX_VALUE) * 100
  const mobilPct = (mobil / MAX_VALUE) * 100

  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-semibold text-[#666] w-[80px] text-right flex-shrink-0">
        {region}
      </span>
      <div className="flex-1 flex gap-1 h-4 rounded-full overflow-hidden bg-[#f0f0f0]">
        <div
          className="h-full rounded-full bg-[#3B82F6]"
          style={{ width: `${mobilPct}%` }}
        />
        <div
          className="h-full rounded-full"
          style={{
            width: `${optikPct}%`,
            background: 'linear-gradient(90deg, #00FF7F, #00e5a0)',
          }}
        />
      </div>
    </div>
  )
}

export function BarChart() {
  return (
    <div className="bg-white/80 rounded-2xl p-5">
      {/* Legend */}
      <div className="flex items-center gap-5 mb-4">
        <p className="text-sm font-bold text-[#111] mr-auto">Internet</p>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#555]">
          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00FF7F] to-[#00e5a0] inline-block"/>
          Optik
        </span>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#555]">
          <span className="w-3 h-3 rounded-full bg-[#3B82F6] inline-block"/>
          Mobil internet
        </span>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#555]">
          <span className="w-3 h-3 rounded-full bg-[#f0f0f0] border border-[#ddd] inline-block"/>
          Internet yo'q
        </span>
      </div>
      <div className="flex flex-col gap-2.5">
        {INTERNET_DATA.map(d => (
          <BarRow key={d.region} region={d.region} optik={d.optik} mobil={d.mobil} />
        ))}
      </div>
    </div>
  )
}
