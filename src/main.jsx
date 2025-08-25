import { asset } from "../utils/assets.js";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 🔧 Global helper so images/videos work locally AND on GitHub Pages
// Use it like: src={asset("images/p1.png")} or asset("videos/f1.mp4")
window.asset = (p) => {
  const s = typeof p === 'string' ? p : ''
  const clean = s.startsWith('/') ? s.slice(1) : s
  return `${import.meta.env.BASE_URL}${clean}`
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
