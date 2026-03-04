export interface Category {
  id: string;
  label: string;
  count: number;
  // emoji: string
  variant?: "white" | "beige";
  active?: boolean;
}

export const CATEGORIES: Category[] = [
  { id: "schools", label: "Maktablar", count: 11139, active: true },
  { id: "kindergartens", label: "Bog'chalar", count: 6935 },
  { id: "medical", label: "Tibbiyot muassasalari", count: 3034 },
  { id: "sports", label: "Sport inshootlari", count: 356 },
];

/* 
emoji: '🎒',
emoji: '🌱'
emoji: '🏥'
emoji: '⚽'
*/