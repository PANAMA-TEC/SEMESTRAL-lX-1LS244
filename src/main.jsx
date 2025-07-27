import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './screens/App'
import { AppProvider } from './components/AppContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <AppProvider>
      
        <App />
      </AppProvider>
      
    </BrowserRouter>
    
  </StrictMode>
)
