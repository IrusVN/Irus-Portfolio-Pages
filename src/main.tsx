import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initGlobalButtonSound } from '@/lib/globalButtonSound'
import { applyTheme, getPreferredTheme } from '@/lib/theme'

applyTheme(getPreferredTheme())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Initialize global button sound listener for native buttons
initGlobalButtonSound()
