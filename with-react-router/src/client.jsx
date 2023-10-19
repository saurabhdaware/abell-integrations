import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter future={{ v7_startTransition: true }}>
    <App />
  </BrowserRouter>
)

