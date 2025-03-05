import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FruitList from './FruitList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FruitList />
  </StrictMode>,
)
