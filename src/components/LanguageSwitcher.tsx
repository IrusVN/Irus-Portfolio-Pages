"use client"

import * as React from "react"
import { useTranslation } from "react-i18next"
import { Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LANGUAGES, type LanguageCode } from "@/i18n"

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = React.useState(false)
  const [closing, setClosing] = React.useState(false)
  const ref = React.useRef<HTMLDivElement | null>(null)
  const closeTimerRef = React.useRef<number | null>(null)

  const current = (i18n.resolvedLanguage ?? i18n.language ?? "en") as LanguageCode

  React.useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return
      if (e.target instanceof Node && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("click", onDoc)
    return () => document.removeEventListener("click", onDoc)
  }, [])

  React.useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  const close = () => {
    setClosing(true)
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
    }
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false)
      setClosing(false)
      closeTimerRef.current = null
    }, 180)
  }

  const handleToggleOpen = () => {
    if (open) {
      close()
      return
    }
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setClosing(false)
    setOpen(true)
  }

  const handleSelect = (code: LanguageCode) => {
    i18n.changeLanguage(code)
    close()
  }

  return (
    <div className="relative" ref={ref}>
      <Button
        variant="ghost"
        size="icon-sm"
        className="p-2 transition-colors hover:bg-primary/15 hover:text-primary active:bg-primary/25 active:text-primary"
        onClick={handleToggleOpen}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={t("language.ariaLabel")}
      >
        <span className="flex items-center gap-1">
          <Languages />
          <span className="text-[10px] font-mono font-bold uppercase leading-none">
            {current}
          </span>
        </span>
      </Button>

      {(open || closing) && (
        <div
          className={`absolute right-0 mt-2 w-44 origin-top-right overflow-hidden rounded-lg border border-primary/60 bg-popover/95 bg-[radial-gradient(circle_at_top_left,rgba(25,60,184,0.14),transparent_34%)] p-1.5 shadow-[0_20px_80px_rgba(0,0,0,0.25),0_0_0_1px_rgba(25,60,184,0.15)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(25,60,184,0.18)] backdrop-blur-xl z-50 ${open ? "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200 ease-out" : "animate-out fade-out-0 zoom-out-95 slide-out-to-top-2 duration-180 ease-in"}`}
          role="menu"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/90 to-transparent" />

          {LANGUAGES.map((lang) => {
            const active = lang.code === current
            return (
              <button
                key={lang.code}
                role="menuitemradio"
                aria-checked={active}
                onClick={() => handleSelect(lang.code)}
                className={`relative flex w-full items-center justify-between rounded px-2.5 py-2 font-mono text-sm transition-colors ${
                  active
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  {/* Square indicator — matches the sound-on indicator style */}
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 ${active ? "bg-[color:var(--sound-accent-green)]" : "bg-transparent"}`}
                  />
                  {lang.native}
                </span>
                <span className="text-[10px] font-bold uppercase opacity-60">
                  {lang.code}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
