import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router'
import DataContextProvider from './context/DataContext'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </Provider>
  </BrowserRouter>
)

