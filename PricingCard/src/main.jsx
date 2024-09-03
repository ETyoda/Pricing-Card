import { StrictMode } from 'react'
import PricingCard from './Component/PricingCard/PricingCard.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PricingCard />
  </StrictMode>,
)
