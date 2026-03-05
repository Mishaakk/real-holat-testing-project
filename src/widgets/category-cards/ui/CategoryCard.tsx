import { cn } from "../../../shared/lib/cn";
import { bgVariant, CategoryCardProps } from "../model/category-card.types";
import arrowIcon from "../../../assets/icons/icon-arrow-right-top.svg";

export function CategoryCard({
  category,
  isActive,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex flex-col flex-1 justify-between min-w-[148px] min-h-[160px] rounded-[20px] p-5 text-left",
        "border-6 transition-all duration-300 cursor-pointer overflow-hidden",
        "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
        "active:scale-[0.97] bg-[image:var(--gd-cards)] max-w-280 max-h-280",
        isActive
          ? " border-[var(--green)] shadow-[0_4px_20px_rgba(0,255,127,0.25)]"
          : "border-[var(--white)] shadow-[0_4px_20px_rgba(0,255,127,0.25)]" /*`${
              bgVariant[category.variant || "white"]
            } shadow-[0_2px_12px_rgba(0,0,0,0.08)]`*/
      )}
    >
      {/* Arrow badge */}
      <div
        className={cn(
          "absolute top-3 right-3 rounded-full flex items-center justify-center text-sm transition-colors p-1.5 shadow-[0_2px_12px_0_rgba(0,0,0,0.1)]",
          isActive
            ? "bg-[var(--green)] border-6 border-[var(--green)]"
            : "bg-[var(--mint)] border-6 border-[var(--white)]" // ← добавил фон неактивным
        )}
      >
        <img src={arrowIcon} alt="arrow icon" />
      </div>

      <p className="text-[24px] font-bold text-[var(--grey)] leading-snug">
        {category.label}
      </p>

      <div className="flex justify-between items-center">
        <p className="text-[24px] font-semibold text-[var(--light-grey)]">
          {category.count.toLocaleString("ru-RU")}
        </p>
        {/* {category.emoji} */}
        <img src={category.img} alt="card image" />
      </div>
    </button>
  );
}
