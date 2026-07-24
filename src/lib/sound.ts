import { Howl } from 'howler'

// Simple Howler wrapper for site sounds.
// Place your sound files under `/public/sounds/` (e.g. click.webm, click.mp3).

interface HowlShim {
  state?: () => string
  load?: () => void
  _src?: string
  once(event: string, fn: (...args: unknown[]) => void): void
  on(event: string, fn: (...args: unknown[]) => void): void
  play(): void
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
  clickSound.volume(vol)
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

