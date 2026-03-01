import { cn } from "@/shared/lib/cn";
import { useState } from "react";
import { NavLinksProps } from "../model/NavLinks.types";
import { NAV_LINKS } from "../model/Navigation.data";

export function NavLinks({ className, onLinkClick }: NavLinksProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("hidden md:flex items-center gap-1", className)}>
      {NAV_LINKS.map((link, index) => (
        <a
          key={link}
          href="#"
          onClick={() => {
            setActiveIndex(index);
            onLinkClick?.();
          }}
          className={cn(
            "relative px-4 py-2 text-[13px] font-medium transition-colors duration-200 no-underline rounded-full",
            activeIndex === index
              ? "text-[#111] bg-[#00FF7F]/10"
              : "text-[#555] hover:text-[#111] hover:bg-black/5",
          )}
        >
          {link}
          {activeIndex === index && (
            <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-[#00FF7F] rounded-full" />
          )}
        </a>
      ))}
    </div>
  );
}
