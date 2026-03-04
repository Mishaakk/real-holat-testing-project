import { cn } from "../../../shared/lib/cn";
import { bgVariant, CategoryCardProps } from "../model/category-card.types";
import arrowIcon from "../../../assets/icons/icon-arrow-right-top.svg";
import cardImg from '../../../assets/images/card-1.png';


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
          : `${
              bgVariant[category.variant || "white"]
            } shadow-[0_2px_12px_rgba(0,0,0,0.08)]`
      )}
    >
      {/* Arrow badge */}
      <div
        className={cn(
          "absolute top-3 right-3 rounded-full flex items-center justify-center text-sm transition-colors p-3 shadow-[0_2px_12px_0_rgba(0,0,0,0.1)]",
          isActive ? "bg-[#00FF7F]" : "bg-[var(--mint)] border-6 border-[var(--white)]" // ← добавил фон неактивным
        )}
      >
        <img src={arrowIcon} alt="arrow icon" />
      </div>

      <p className="text-[24px] font-bold text-[var(--grey)] leading-snug pr-8">
        {category.label}
      </p>
      <p className="text-[24px] font-black text-[var(--light-grey)] mt-1">
        {category.count.toLocaleString("ru-RU")}
      </p>

      {/* Emoji — абсолютно в правом нижнем углу */}
      <div className=" bottom-3 right-3 text-4xl opacity-75 select-none">
        {/* {category.emoji} */}
        <img src={cardImg} alt="card image" />
      </div>
    </button>
  );
}
