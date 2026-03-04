export interface Category {
  id: string;
  label: string;
  count: number;
  variant?: "white" | "beige";
  active?: boolean;
  img: string;
}
import card1 from "../../assets/images/card-1.png";
import card2 from "../../assets/images/card-2.png";
import card3 from "../../assets/images/card-3.png";
import card4 from "../../assets/images/card-4.png";

export const CATEGORIES: Category[] = [
  { id: "schools", label: "Maktablar", count: 11139, img: card1, active: true },
  { id: "kindergartens", label: "Bog'chalar", count: 6935, img: card2 },
  { id: "medical", label: "Tibbiyot muassasalari", count: 3034, img: card3 },
  { id: "sports", label: "Sport inshootlari", count: 356, img: card4 },
];
