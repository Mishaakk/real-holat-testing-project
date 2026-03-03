import { cn } from "../../../shared/lib/cn";
import { bgVariant, CategoryCardProps } from "../model/category-card.types";

export function CategoryCard({
  category,
  isActive,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex-1 min-w-[148px] min-h-[160px] rounded-[20px] p-5 text-left",
        "border-2 transition-all duration-300 cursor-pointer overflow-hidden",
        "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
        "active:scale-[0.97]",
        isActive
          ? "bg-[#E8FDF5] border-[#00FF7F] shadow-[0_4px_20px_rgba(0,255,127,0.25)]"
          : `${bgVariant[category.variant || "white"]} shadow-[0_2px_12px_rgba(0,0,0,0.08)]`,
      )}
    >
      {/* Arrow badge */}
      <div
        className={cn(
          "absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-colors",
          isActive ? "bg-[#00FF7F] text-[#111]" : "bg-black/5 text-[#999]", // ← добавил фон неактивным
        )}
      >
        ↗
      </div>

      <p className="text-[13px] font-bold text-[#111] leading-snug pr-8">
        {category.label}
      </p>
      <p className="text-[22px] font-black text-[#111] mt-1">
        {category.count.toLocaleString("ru-RU")}
      </p>

      {/* Emoji — абсолютно в правом нижнем углу */}
      <div className="absolute bottom-3 right-3 text-4xl opacity-75 select-none">
        {category.emoji}
      </div>
    </button>
  );
}