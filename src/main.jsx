import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router'
import DataContextProvider from './context/DataContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </BrowserRouter>
)

