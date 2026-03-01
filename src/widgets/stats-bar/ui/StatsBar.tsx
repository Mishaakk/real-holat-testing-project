import { GlassPanel } from '../../../shared/ui'
import { STATS } from '../model/StatsBar.data'
import { StatItem } from './StatItem'


export function StatsBar() {
  return (
    <section className="px-8 pb-6">
      <GlassPanel className="px-8 py-5 flex flex-wrap gap-x-10 gap-y-4">
        {STATS.map(s => (
          <StatItem key={s.label} {...s} />
        ))}
      </GlassPanel>
    </section>
  )
}
