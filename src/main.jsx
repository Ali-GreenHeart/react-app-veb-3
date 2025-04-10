import { createRoot } from 'react-dom/client'
import Modal from './components/Modal'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <>
    <Modal />
    <Header />
  </>
)


// npm create vite@latest react-app -- --template react
