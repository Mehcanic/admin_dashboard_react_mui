import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
      
  </React.StrictMode>,
)
