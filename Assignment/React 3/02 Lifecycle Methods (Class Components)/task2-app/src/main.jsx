import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LifecycleLogger from './Data.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LifecycleLogger />
  </StrictMode>,
)
