import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import LoaderApp from './components/LoaderApp.jsx'
import FetchData from './components/FetchData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LoaderApp /> */}
    <FetchData/>
  </StrictMode>
)
