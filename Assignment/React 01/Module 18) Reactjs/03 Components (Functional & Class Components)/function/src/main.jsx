import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EmployeData from './EmployeData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeData />
  </StrictMode>,
)
