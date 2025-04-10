import { createRoot } from 'react-dom/client'
import TodosPage from './pages/todos'

createRoot(document.getElementById('root')).render(
  <>
    <TodosPage />
  </>
)

