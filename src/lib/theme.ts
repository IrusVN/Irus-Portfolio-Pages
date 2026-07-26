export type ThemeMode = "light" | "dark"

const STORAGE_KEY = "irustheme"

export function getStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") return null

  const value = window.localStorage.getItem(STORAGE_KEY)
  if (value === "light" || value === "dark") return value
  return null
}

export function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark"

  const stored = getStoredTheme()
  if (stored) return stored

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function applyTheme(theme: ThemeMode) {
  if (typeof document === "undefined") return

  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
  window.localStorage.setItem(STORAGE_KEY, theme)
}
