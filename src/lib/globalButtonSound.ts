import { playClick } from "./sound"

export function initGlobalButtonSound() {
  if (typeof window === "undefined") return

  const handler = (e: MouseEvent) => {
    try {
      // Only respond to primary mouse button
      // @ts-expect-error DOM types
      if (e.button && e.button !== 0) return

      const target = (e.target as Element | null)
      if (!target) return

      const el = target.closest("button, [role=\"button\"]") as HTMLElement | null
      if (!el) return

      // Skip if element marked as already having sound attached
      if (el.dataset.soundAttached === "true" || el.getAttribute("data-sound-attached") === "true") return

      if ((el as HTMLButtonElement).disabled) return

      playClick()
    } catch (err) {
      void err
    }
  }

  document.addEventListener("click", handler, { capture: true })
}

export default initGlobalButtonSound
