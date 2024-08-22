import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './recipe-preview.css'
// import './recipe-modal.css'
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
