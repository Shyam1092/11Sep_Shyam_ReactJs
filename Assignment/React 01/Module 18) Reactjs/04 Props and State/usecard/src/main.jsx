import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardApp from './Components/UserCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardApp />
  </StrictMode>,
)