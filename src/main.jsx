import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CardContext, CardContextProvider } from './components/CardContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <CardContextProvider>
    <Router>
      <App />
    </Router>
  </CardContextProvider>,
)