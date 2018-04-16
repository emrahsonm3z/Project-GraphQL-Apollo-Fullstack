// -------------------------------------- Global Imports --
import React from 'react'
import { render } from 'react-dom'

// ------------------------------------ Relative Imports --
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// -------------------------------- Render App Component --
render(wrapApp(), document.getElementById('root'))
registerServiceWorker()

// ********************************************************
function wrapApp() {
  return <App />
}
