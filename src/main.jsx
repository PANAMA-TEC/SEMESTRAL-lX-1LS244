import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoProvider } from './components/TodoContext'
import './index.css'
import App from './components/App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
)
