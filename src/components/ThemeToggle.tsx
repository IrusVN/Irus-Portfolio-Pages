"use client"

import * as React from "react"
import { MoonStar, SunMedium } from "lucide-react"

import { Button } from "@/components/ui/button"
import { applyTheme, getPreferredTheme, type ThemeMode } from "@/lib/theme"

export default function ThemeToggle() {
  // Theme is already applied in main.tsx before render — just read it here
  const [theme, setTheme] = React.useState<ThemeMode>(() => getPreferredTheme())

  const handleToggle = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    applyTheme(nextTheme)
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="group relative p-2 transition-colors hover:bg-primary/15 hover:text-primary active:bg-primary/25 active:text-primary"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      <SunMedium
        className={`absolute h-4 w-4 transition-all duration-200 ease-out ${
          isDark ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <MoonStar
        className={`absolute h-4 w-4 transition-all duration-200 ease-out ${
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
