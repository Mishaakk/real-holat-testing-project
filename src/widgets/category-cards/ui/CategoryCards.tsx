import { useState } from "react";
import { useNavigate } from "react-router";
import { CATEGORIES } from "@/entities/category/model";
import { CategoryCard } from "./CategoryCard";
import { getAccessToken } from "@/entities/session";

export function CategoryCards() {
  const [activeId, setActiveId] = useState("schools");
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    const token = getAccessToken();

    if (!token) {
      navigate("/login");
      return;
    }

    setActiveId(id);
    // navigate(`/category/${id}`) // если нужен переход на страницу категории
  };

  return (
    <section className="px-8 pb-8">
      <div className="flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            isActive={activeId === cat.id}
            onClick={() => handleCardClick(cat.id)}
          />
        ))}
      </div>
    </section>
  );
}
