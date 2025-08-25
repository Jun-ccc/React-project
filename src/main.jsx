import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'
// import App from './App0805-1'
import './sass/all.scss'
// import App from './MyApp'
import App from './pages/App0825=localstorage2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
