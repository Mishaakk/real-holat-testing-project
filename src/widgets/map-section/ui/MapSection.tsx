import { useState } from 'react'
import { GlassPanel, Pill } from '../../../shared/ui'
import { DonorList } from '../../donor-list/ui/DonorList'
import { MapArea } from './MapArea'
import { BarChart } from '../../../widgets/bar-chart/ui/BarChart'

const MAIN_TABS = ["Ma'lumotlar", 'Garfik vositalar', 'Solishtirish']

export function MapSection() {
  const [activeTab, setActiveTab] = useState("Ma'lumotlar")

  return (
    <section className="px-8 pb-12">
      <GlassPanel className="p-5">
        {/* Header tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <h2 className="text-lg font-black text-[#111] mr-2">Xarita</h2>
          {MAIN_TABS.map(tab => (
            <Pill
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Pill>
          ))}
        </div>

        {/* Body */}
        <div className="flex gap-4">
          <DonorList />

          <div className="flex-1 min-h-[380px]">
            {activeTab === "Ma'lumotlar" && <MapArea />}
            {activeTab === 'Garfik vositalar' && <BarChart />}
            {activeTab === 'Solishtirish' && (
              <div className="flex-1 h-full rounded-2xl bg-white/60 flex items-center justify-center text-[#aaa] font-semibold">
                Solishtirish ko'rinishi
              </div>
            )}
          </div>
        </div>
      </GlassPanel>
    </section>
  )
}
