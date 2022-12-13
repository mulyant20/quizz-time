import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ScoreContextProvider from './context/ScoreContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScoreContextProvider>
      <App />
    </ScoreContextProvider>
  </React.StrictMode>
)
