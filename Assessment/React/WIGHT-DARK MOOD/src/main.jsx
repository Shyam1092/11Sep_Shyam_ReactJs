import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { ThemeProvider } from "./ThemeContext";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>
)
