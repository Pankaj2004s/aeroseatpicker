import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SeatProvider } from './context/SeatProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SeatProvider>
      <App />
    </SeatProvider>
  </StrictMode>,
)
