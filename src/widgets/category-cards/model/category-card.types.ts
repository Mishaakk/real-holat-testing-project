import { Category } from "@/entities/category/model";

export interface CategoryCardProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

export const bgVariant = {
  active: "bg-[#E8FDF5] border-[#00FF7F]",
  white: "bg-white border-transparent",
  beige: "bg-[#F5F3EE] border-transparent",
};
