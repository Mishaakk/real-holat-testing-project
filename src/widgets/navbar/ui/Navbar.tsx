import { useState } from "react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";
import { IconButton } from "./IconButton";
import { MobileMenu, MobileMenuButton } from "./MobileMenu";
import { cn } from "@/shared/lib/cn";
import { SettingsIcon } from "@/shared/ui/SettingsIcon";


export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-30 flex justify-between items-center gap-4 px-4 md:px-8 py-3 md:py-4",
          "backdrop-blur-md",
        )}
      >
        <Logo className="mr-2" />

        <NavLinks className="ml-2" />

        <div className="hidden md:flex items-center gap-3">
          <SearchBar />
          <UserMenu />
          <IconButton aria-label="Settings">
            <SettingsIcon />
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
