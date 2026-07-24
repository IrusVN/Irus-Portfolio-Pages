"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"
import { playMusic, stopMusic, setGlobalVolume, setClickVolume, toggleMute, isMuted } from "@/lib/sound"

export default function SettingsDropdown() {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [volume, setVolume] = React.useState(0.5)
  const [clickVolume, setClickVolumeState] = React.useState(0.5)
  const [muted, setMuted] = React.useState<boolean>(isMuted())
  const [musicOn, setMusicOn] = React.useState(false)

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

  return (
    <div className="relative" ref={ref}>
      <Button
        variant="ghost"
        size="icon-sm"
        className="p-2"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Music />
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 rounded-lg border bg-sound-panel-bg p-4 shadow-lg z-50">
          <div className="text-sm text-sound-text-light font-medium mb-2">Cài đặt âm thanh</div>

          <div className="mb-3">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Master Volume</div>
              <button className="text-xs px-2 py-1 border rounded" onClick={handleToggleMute}>
                {muted ? 'OFF' : 'ON'}
              </button>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full mt-2 mb-3"
              aria-label="Master volume"
            />
          </div>

          <div className="mb-3">
            <div className="text-sm text-muted-foreground mb-1">Button Sound Volume</div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={clickVolume}
              onChange={(e) => setClickVolumeState(Number(e.target.value))}
              className="w-full"
              aria-label="Button volume"
            />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Nhạc nền</div>
            <button className="text-sm px-2 py-1 border rounded" onClick={toggleMusic}>
              {musicOn ? 'Tắt' : 'Bật'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
