import { Route, Routes } from "react-router"
import TodosPage from "./pages/todos"
import NotFoundPage from "./pages/not-found"
import AboutPage from "./pages/about"

const App = ({ }) => {
    return (
        <Routes>
            <Route path="/" element={<div>salam ana sehife</div>} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
export default App
