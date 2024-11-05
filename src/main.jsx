import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './Hero.jsx'
import Pricing from './Pricing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Hero/>
    <Pricing/>
    <App />
  </StrictMode>,
)
