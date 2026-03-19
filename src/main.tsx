import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import icon from './assets/icon.png'

const link = document.createElement('link')
link.rel = 'icon'
link.href = icon
document.head.appendChild(link)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)