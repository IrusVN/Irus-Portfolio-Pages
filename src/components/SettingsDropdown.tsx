"use client"

import * as React from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"
import { playMusic, stopMusic, setGlobalVolume, setClickVolume, toggleMute, isMuted } from "@/lib/sound"

export default function SettingsDropdown() {
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false)
  const [closing, setClosing] = React.useState(false)
  const ref = React.useRef<HTMLDivElement | null>(null)
  const closeTimerRef = React.useRef<number | null>(null)
  const [volume, setVolume] = React.useState(0.5)
  const [clickVolume, setClickVolumeState] = React.useState(0.5)
  const [muted, setMuted] = React.useState<boolean>(isMuted())
  const [musicOn, setMusicOn] = React.useState(false)

  const sliderTrackStyle = (value: number) => ({
    background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${value * 100}%, var(--slider-track-rest) ${value * 100}%, var(--slider-track-rest) 100%)`,
  })

  const sliderClassName =
    "w-full h-2 rounded-full appearance-none cursor-pointer bg-transparent outline-none [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:mt-[-4px] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:bg-[#e8f1ff] [&::-webkit-slider-thumb]:shadow-[0_0_0_3px_rgba(25,60,184,0.18),0_0_12px_rgba(25,60,184,0.55)] [&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-none [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:bg-[#e8f1ff] [&::-moz-range-thumb]:shadow-[0_0_0_3px_rgba(25,60,184,0.18),0_0_12px_rgba(25,60,184,0.55)]"

  const formatPercent = (value: number) => `${Math.round(value * 100)}%`

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

  React.useEffect(() => setGlobalVolume(volume), [volume])
  React.useEffect(() => setClickVolume(clickVolume), [clickVolume])

  React.useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  const toggleMusic = () => {
    if (musicOn) {
      stopMusic()
      setMusicOn(false)
    } else {
      playMusic('/sounds/menu.mp3')
      setMusicOn(true)
    }
  }

  const handleToggleMute = () => {
    toggleMute()
    setMuted(isMuted())
  }

  // Sound is considered off when muted or master volume is zero
  const soundOff = muted || volume === 0

  const handleToggleOpen = () => {
    if (open) {
      setClosing(true)
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current)
      }
      closeTimerRef.current = window.setTimeout(() => {
        setOpen(false)
        setClosing(false)
        closeTimerRef.current = null
      }, 180)
      return
    }

    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setClosing(false)
    setOpen(true)
  }

  return (
    <div className="relative" ref={ref}>
      <Button
        variant="ghost"
        size="icon-sm"
        className={`p-2 transition-colors hover:bg-primary/15 hover:text-primary active:bg-primary/25 active:text-primary ${soundOff ? "text-muted-foreground" : ""}`}
        onClick={handleToggleOpen}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={soundOff ? t("sound.ariaOff") : t("sound.ariaOn")}
      >
        <span className="relative flex items-center justify-center">
          <Music className={soundOff ? "opacity-60" : undefined} />

          {/* Diagonal slash when sound is off */}
          {soundOff && (
            <span
              aria-hidden="true"
              className="absolute h-0.5 w-5 rotate-45 rounded-full bg-current"
            />
          )}

          {/* Green square when sound is on; pulses while background music plays */}
          {!soundOff && (
            <span aria-hidden="true" className="absolute -bottom-1 -right-1 flex h-2 w-2">
              {musicOn && (
                <span className="absolute inline-flex h-full w-full animate-ping bg-[color:var(--sound-accent-green)] opacity-75" />
              )}
              <span className="relative inline-flex h-2 w-2 bg-[color:var(--sound-accent-green)]" />
            </span>
          )}
        </span>
      </Button>

      {(open || closing) && (
        <div
           className={`absolute right-0 mt-2 w-72 origin-top-right overflow-hidden rounded-lg border border-primary/60 bg-popover/95 bg-[radial-gradient(circle_at_top_left,rgba(25,60,184,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(24,225,139,0.08),transparent_30%)] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.25),0_0_0_1px_rgba(25,60,184,0.15)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(25,60,184,0.18)] backdrop-blur-xl z-50 ${open ? "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200 ease-out" : "animate-out fade-out-0 zoom-out-95 slide-out-to-top-2 duration-180 ease-in"}`}
        >
           <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/90 to-transparent" />
           <div className="absolute -top-8 right-8 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-10 left-4 h-28 w-28 rounded-full bg-[color:var(--sound-accent-green)]/10 blur-3xl" />

          <div className="relative text-sm text-foreground font-medium mb-2">{t("sound.title")}</div>

          <div className="relative mb-3">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">{t("sound.masterVolume")}</div>
              <button className="text-xs px-2 py-1 border border-border rounded bg-foreground/5 text-foreground dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-colors hover:bg-foreground/10" onClick={handleToggleMute}>
                {muted ? 'OFF' : 'ON'}
              </button>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className={sliderClassName + " mt-2 mb-3"}
              style={sliderTrackStyle(volume)}
              aria-label="Master volume"
            />
            <div className="flex items-center justify-between text-[11px] text-muted-foreground/80">
              <span>0%</span>
              <span>{formatPercent(volume)}</span>
              <span>100%</span>
            </div>
          </div>

          <div className="relative mb-3">
            <div className="text-sm text-muted-foreground mb-1">{t("sound.buttonVolume")}</div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={clickVolume}
              onChange={(e) => setClickVolumeState(Number(e.target.value))}
              className={sliderClassName}
              style={sliderTrackStyle(clickVolume)}
              aria-label="Button volume"
            />
            <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground/80">
              <span>0%</span>
              <span>{formatPercent(clickVolume)}</span>
              <span>100%</span>
            </div>
          </div>

          <div className="relative mt-3 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">{t("sound.backgroundMusic")}</div>
            <button className="text-sm px-2 py-1 border border-border rounded bg-foreground/5 text-foreground dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-colors hover:bg-foreground/10" onClick={toggleMusic}>
              {musicOn ? 'Off' : 'On'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
