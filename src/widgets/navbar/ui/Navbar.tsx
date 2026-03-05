import { useEffect, useState } from "react";
// import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";
import { IconButton } from "./IconButton";
import { MobileMenu, MobileMenuButton } from "./MobileMenu";
import { cn } from "@/shared/lib/cn";
// import { SettingsIcon } from "@/shared/ui/SettingsIcon";
import logoIcon from "../../../assets/icons/logo.svg";
import settingsIcon from "../../../assets/icons/icon-settings.svg";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    // Функция очистки для удаления слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-30 flex justify-between items-center gap-4 px-4 md:px-8 py-3 md:py-4 rounded-full transition-all duration-[500ms] ease-out",
          isScrolled  
            ? "drop-shadow-[0_2px_5px_rgba(100,100,100,0.25)]"
            : "",
          "backdrop-blur-md"
        )}
      >
        {/* <Logo className="mr-2" /> */}
        <div className="logo">
          <a href="" onClick={(e) => e.preventDefault()}>
            <img src={logoIcon} alt="logo" />
          </a>
        </div>

        <NavLinks className="ml-2" />

        <div className="hidden md:flex items-center gap-3">
          <SearchBar />
          <UserMenu />
          <IconButton aria-label="Settings">
            {/* <SettingsIcon /> */}
            <img src={settingsIcon} alt="settings icon" />
          </IconButton>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <MobileMenuButton
            open={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </nav>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
