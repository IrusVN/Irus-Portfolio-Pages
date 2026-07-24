import { Howl, Howler } from 'howler'

// Simple Howler wrapper for site sounds.
// Place your sound files under `/public/sounds/` (e.g. click.webm, click.mp3).

interface HowlShim {
  state?: () => string
  load?: () => void
  _src?: string
  once(event: string, fn: (...args: unknown[]) => void): void
  on(event: string, fn: (...args: unknown[]) => void): void
  play(): void
  stop(): void
  unload(): void
  volume(v: number): void
}

export const clickSound = new Howl({
  // prefer mp3 first to avoid webm/cache issues while debugging
  src: ['/sounds/click.mp3', '/sounds/click.webm'],
  volume: 0.5,
  preload: true,
})
;

// handle play errors by attempting to play after unlock (mobile)
(clickSound as unknown as HowlShim).on('playerror', () => {
  ;(clickSound as unknown as HowlShim).once('unlock', () => clickSound.play())
})

export function playClick() {
  try {
    const shim = clickSound as unknown as HowlShim
    const state = typeof shim.state === 'function' ? shim.state() : 'unknown'

    if (state === 'loaded') {
      clickSound.play()
      return
    }

    if (state === 'loading' || state === 'unloaded') {
      shim.once('load', () => {
        try {
          clickSound.play()
        } catch (err) {
          void err
        }
      })
      // ensure loading started
      try {
        if (shim.load) shim.load()
      } catch (err) {
        void err
      }
      return
    }

    // unknown state: try to play anyway
    clickSound.play()
  } catch (err) {
    // ignore play errors (autoplay policy or missing files)
    void err
  }
}

export function setGlobalVolume(v: number) {
  // clamp 0..1
  const vol = Math.max(0, Math.min(1, v))
  // set global Howler volume (affects music and sounds)
  try {
    // Howler.volume exists on the Howler namespace
    const h = Howler as unknown as { volume?: (v: number) => void }
    if (typeof h.volume === 'function') h.volume(vol)
    else clickSound.volume(vol)
  } catch {
    // fallback: set clickSound volume if anything goes wrong
    clickSound.volume(vol)
  }
}

export function setClickVolume(v: number) {
  const vol = Math.max(0, Math.min(1, v))
  try {
    clickSound.volume(vol)
  } catch {
    void 0
  }
}

// Howler global controls (mute, music playback)
export function toggleMute() {
  try {
    const muted = Howler._muted || false
    Howler.mute(!muted)
  } catch (err) {
    void err
  }
}

export function isMuted() {
  try {
    const h = Howler as unknown as { _muted?: boolean }
    return !!h._muted
  } catch {
    return false
  }
}

let musicHowl: HowlShim | null = null
export function playMusic(src: string) {
  try {
    if (musicHowl) {
      musicHowl.stop()
      musicHowl.unload()
      musicHowl = null
    }
    musicHowl = new Howl({ src: [src], loop: true, volume: 0.5 }) as unknown as HowlShim
    musicHowl.play()
  } catch (err) {
    void err
  }
}

export function stopMusic() {
  try {
    if (musicHowl) {
      musicHowl.stop()
      musicHowl.unload()
      musicHowl = null
    }
  } catch (err) {
    void err
  }
}

export function unloadAllSounds() {
  try {
    clickSound.unload()
  } catch (err) {
    void err
  }
}

export default {
  playClick,
  setGlobalVolume,
  unloadAllSounds,
}

// Expose for quick debugging in browser console
;(window as unknown as Record<string, unknown>)['playClick'] = playClick

