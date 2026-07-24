"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { setGlobalVolume, setClickVolume, toggleMute, isMuted, playMusic, stopMusic } from "@/lib/sound"

export default function SettingsPanel() {
  const [volume, setVolume] = React.useState(0.5)
  const [clickVolume, setClickVolumeState] = React.useState(0.5)
  const [muted, setMuted] = React.useState<boolean>(isMuted())
  const [musicOn, setMusicOn] = React.useState(false)

  React.useEffect(() => {
    setGlobalVolume(volume)
  }, [volume])

  React.useEffect(() => {
    setClickVolume(clickVolume)
  }, [clickVolume])

  const handleToggleMute = () => {
    toggleMute()
    setMuted(isMuted())
  }

  const handleToggleMusic = () => {
    if (musicOn) {
      stopMusic()
      setMusicOn(false)
    } else {
      // sample path — replace with your own public sound
      playMusic('/sounds/menu.mp3')
      setMusicOn(true)
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost">Settings</Button>
      </DialogTrigger>
      <DialogContent className="w-[360px] max-w-full bg-sound-panel-bg border" showCloseButton>
        <DialogHeader>
          <DialogTitle className="text-sound-text-light">Cài đặt âm thanh</DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Master Volume</span>
              <Button variant="outline" size="sm" onClick={handleToggleMute}>
                {muted ? 'OFF' : 'ON'}
              </Button>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div>
            <div className="text-sm text-muted-foreground mb-1">Button Sound Volume</div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={clickVolume}
              onChange={(e) => setClickVolumeState(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Background Music</span>
              <Button variant="outline" size="sm" onClick={handleToggleMusic}>
                {musicOn ? 'Off' : 'On'}
              </Button>
            </div>
            <div className="mt-2">
              <Button className="w-full justify-between" variant="link">
                Menu Music
                <span>▶</span>
              </Button>
              <Button className="w-full mt-2" variant="ghost">
                Cobblemon Music
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <DialogClose render={<Button variant="outline" />}>Đóng</DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
