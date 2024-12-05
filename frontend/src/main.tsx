import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserProvider from './contexts/UserContext.tsx'
import SettingsProvider from './contexts/SettingsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <UserProvider>
    <SettingsProvider>    
      <StrictMode>
        <App />
      </StrictMode>
    </SettingsProvider>
  </UserProvider>
)
