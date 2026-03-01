import { useState } from 'react'
import { Pill } from '../../../shared/ui'
import { TOP_DONORS } from '../../../entities/donor/model'
import { DonorRow } from './DonorRow'

const DONOR_TABS = ['Top donorlar', 'Top viloyatlar', "Yo'nalishlar", 'Eng yirik loyihalar']

export function DonorList() {
  const [activeTab, setActiveTab] = useState('Top donorlar')

  return (
    <div className="w-[260px] flex-shrink-0 flex flex-col gap-3">
      {/* Tab switcher — dark bg */}
      <div className="bg-[#111] rounded-2xl p-2 flex flex-col gap-1">
        {DONOR_TABS.map(tab => (
          <Pill
            key={tab}
            dark
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className="text-left justify-start rounded-xl py-2.5"
          >
            {tab}
          </Pill>
        ))}
      </div>

      {/* Donor rows */}
      <div className="flex flex-col gap-2">
        {TOP_DONORS.map(donor => (
          <DonorRow key={donor.id} donor={donor} />
        ))}
      </div>
    </div>
  )
}
