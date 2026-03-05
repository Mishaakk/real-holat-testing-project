import { Navbar } from '@/widgets/navbar/ui/Navbar'
import { Hero } from '@/widgets/hero/ui/Hero'
import { CategoryCards } from '@/widgets/category-cards/ui/CategoryCards'
import { StatsBar } from '@/widgets/stats-bar/ui/StatsBar'
import { MapSection } from '@/widgets/map-section/ui/MapSection'

export function HomePage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* навигация, вверхняя шапка страницы */}
      <Navbar /> 
      {/* контент */}
      <Hero />
      {/* категории */}
      <CategoryCards />
      {/* статистика */}
      <StatsBar />
      {/* карта */}
      <MapSection />
    </div>
  )
}
