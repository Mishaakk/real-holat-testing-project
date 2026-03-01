import { useState } from 'react'
import { CATEGORIES } from '../../../entities/category/model'
import { CategoryCard } from './CategoryCard'

export function CategoryCards() {
  const [activeId, setActiveId] = useState('schools')

  return (
    <section className="px-8 pb-8">
      <div className="flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map(cat => (
          <CategoryCard
            key={cat.id}
            category={cat}
            isActive={activeId === cat.id}
            onClick={() => setActiveId(cat.id)}
          />
        ))}
      </div>
    </section>
  )
}
