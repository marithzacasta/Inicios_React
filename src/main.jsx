// import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import './index.css'

const root = createRoot(document.getElementById('root')) // Donde queremos crear nuestra app, donde la queremos renderizar

root.render(
  <App />
)
