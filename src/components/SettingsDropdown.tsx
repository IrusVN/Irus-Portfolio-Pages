"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"
import { playMusic, stopMusic, setGlobalVolume, setClickVolume, toggleMute, isMuted } from "@/lib/sound"

export default function SettingsDropdown() {
  const [open, setOpen] = React.useState(false)
  const [closing, setClosing] = React.useState(false)
  const ref = React.useRef<HTMLDivElement | null>(null)
  const closeTimerRef = React.useRef<number | null>(null)
  const [volume, setVolume] = React.useState(0.5)
  const [clickVolume, setClickVolumeState] = React.useState(0.5)
  const [muted, setMuted] = React.useState<boolean>(isMuted())
  const [musicOn, setMusicOn] = React.useState(false)

  const sliderTrackStyle = (value: number) => ({
    background: `linear-gradient(to right, #193cb8 0%, #193cb8 ${value * 100}%, rgba(255,255,255,0.10) ${value * 100}%, rgba(255,255,255,0.10) 100%)`,
  })

  const sliderClassName =
    "w-full h-2 rounded-full appearance-none cursor-pointer bg-transparent outline-none [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:mt-[-4px] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#193cb8] [&::-webkit-slider-thumb]:bg-[#e8f1ff] [&::-webkit-slider-thumb]:shadow-[0_0_0_3px_rgba(25,60,184,0.18),0_0_12px_rgba(25,60,184,0.55)] [&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-none [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#193cb8] [&::-moz-range-thumb]:bg-[#e8f1ff] [&::-moz-range-thumb]:shadow-[0_0_0_3px_rgba(25,60,184,0.18),0_0_12px_rgba(25,60,184,0.55)]"

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
        className="p-2 transition-colors hover:bg-[#193cb8]/15 hover:text-[#193cb8] active:bg-[#193cb8]/25 active:text-[#193cb8]"
        onClick={handleToggleOpen}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Music />
      </Button>

      {(open || closing) && (
        <div
           className={`absolute right-0 mt-2 w-72 origin-top-right overflow-hidden rounded-lg border border-[#193cb8]/60 bg-[radial-gradient(circle_at_top_left,rgba(25,60,184,0.20),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(24,225,139,0.08),transparent_30%),linear-gradient(180deg,rgba(18,10,16,0.98),rgba(7,7,10,0.98))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(25,60,184,0.18)] backdrop-blur-xl z-50 ${open ? "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200 ease-out" : "animate-out fade-out-0 zoom-out-95 slide-out-to-top-2 duration-180 ease-in"}`}
        >
           <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#193cb8]/90 to-transparent" />
           <div className="absolute -top-8 right-8 h-24 w-24 rounded-full bg-[#193cb8]/12 blur-3xl" />
          <div className="absolute -bottom-10 left-4 h-28 w-28 rounded-full bg-[color:var(--sound-accent-green)]/10 blur-3xl" />

          <div className="relative text-sm text-sound-text-light font-medium mb-2">Sound Settings</div>

          <div className="relative mb-3">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Master Volume</div>
              <button className="text-xs px-2 py-1 border border-white/10 rounded bg-white/5 text-sound-text-light shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-colors hover:bg-white/10" onClick={handleToggleMute}>
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
            <div className="text-sm text-muted-foreground mb-1">Button Sound Volume</div>
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
            <div className="text-sm text-muted-foreground">Background Music</div>
            <button className="text-sm px-2 py-1 border border-white/10 rounded bg-white/5 text-sound-text-light shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-colors hover:bg-white/10" onClick={toggleMusic}>
              {musicOn ? 'Off' : 'On'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
