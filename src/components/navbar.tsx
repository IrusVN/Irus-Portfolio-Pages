import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import ThemeToggle from "@/components/ThemeToggle"
import SettingsDropdown from "@/components/SettingsDropdown"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { playClick } from "@/lib/sound";
import { useTranslation } from "react-i18next";

interface NavItem {
  title: string;
  href: string;
}

function Navbar() {
  const { t } = useTranslation();

  const menuItems: NavItem[] = [
    { title: t("nav.about"), href: "#aboutme" },
    { title: t("nav.projects"), href: "#projects" },
    { title: t("nav.techStack"), href: "#techstack" },
    { title: t("nav.journey"), href: "#journey" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border bg-background/70 backdrop-blur-3xl shadow-md">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center gap-6">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <NavigationMenu>
                <NavigationMenuList>
                  {menuItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <a
                        href={item.href}
                        className={`${navigationMenuTriggerStyle()}`}
                      >
                        {item.title}
                      </a>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex md:hidden items-center">
            <div className="container items-center">
              <Sheet>
                <SheetTrigger>
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={t("nav.openMenu")}
                    className="p-4 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </div>
                </SheetTrigger>

                <SheetContent
                  side="left"
                  className="w-62.5 bg-background border-l border-border p-6"
                >
                  <SheetTitle className="text-muted-foreground font-mono text-sm mb-6">
                    {t("nav.menu")}
                  </SheetTitle>

                  <div className="flex flex-col gap-4 mt-4">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2 rounded-md transition-all duration-200"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div className="mr-4 flex items-center gap-2">
            <div>
              <LanguageSwitcher />
            </div>
            <div>
              <ThemeToggle />
            </div>
            <div>
              <SettingsDropdown />
            </div>
            <div>
              <Button
                className="p-4"
                onClick={() => {
                  playClick()
                  try {
                    const el = document.getElementById('contact')
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    } else {
                      window.location.hash = '#contact'
                    }
                  } catch (e) {
                    void e
                  }
                }}
              >
                {t("nav.contactMe")}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
