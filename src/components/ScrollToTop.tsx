"use client"

import * as React from "react"
import { useTranslation } from "react-i18next"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const { t } = useTranslation()
  const [visible, setVisible] = React.useState(false)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
      setVisible(window.scrollY > 400)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const handleClick = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
  }

  return (
    <button
      onClick={handleClick}
      aria-label={t("common.scrollToTop")}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center border border-border bg-background/80 text-muted-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-primary/15 hover:text-primary ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {/* Scroll-progress border: traces the square's perimeter as you read down */}
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="pointer-events-none absolute -inset-px h-[calc(100%+2px)] w-[calc(100%+2px)]"
      >
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          fill="none"
          strokeWidth="2"
          pathLength={100}
          strokeDasharray={100}
          strokeDashoffset={100 - progress * 100}
          className="stroke-primary"
        />
      </svg>

      <ArrowUp className="h-4 w-4" />
    </button>
  )
}
