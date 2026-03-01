import { cn } from "@/shared/lib/cn";
import { useEffect } from "react";
import { MobileMenuProps } from "../model/MobileMenu.types";
import { NAV_LINKS } from "../model/Navigation.data";
import { CloseIcon } from "@/shared/ui/CloseIcon";
import { MenuIcon } from "@/shared/ui/MenuIcon";

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200"
        onClick={onClose}
      />
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-[-8px_0_32px_rgba(0,0,0,0.15)]",
          "animate-in slide-in-from-right duration-300 ease-out",
        )}
      >
        <div className="flex flex-col h-full pt-6 pb-4">
          <div className="flex items-center justify-between px-6 mb-8">
            <span className="text-sm font-bold text-[#111]">Menyu</span>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex-1 px-4">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link}
                href="#"
                onClick={onClose}
                className={cn(
                  "block py-3.5 px-4 text-[15px] font-medium text-[#444] rounded-xl",
                  "hover:bg-[#00FF7F]/10 hover:text-[#111] transition-all duration-200",
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="px-4 pt-4 border-t border-black/5">
            <div className="flex items-center gap-3 px-4 py-3 bg-[#f9f9f9] rounded-xl">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00FF7F] to-[#3B82F6] flex items-center justify-center text-white text-xs font-bold">
                F
              </span>
              <div>
                <p className="text-sm font-semibold text-[#111]">Fuqaro</p>
                <p className="text-xs text-[#888]">prof@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function MobileMenuButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "md:hidden w-10 h-10 flex items-center justify-center rounded-full",
        "bg-white shadow-[0_1px_8px_rgba(0,0,0,0.10)] hover:shadow-[0_2px_16px_rgba(0,0,0,0.15)]",
        "transition-all duration-200 cursor-pointer border-none",
        "active:scale-95",
      )}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      {open ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}
