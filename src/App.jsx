import { Route, Routes } from "react-router"
import TodosPage from "./pages/todos"
import NotFoundPage from "./pages/not-found"
import AboutPage from "./pages/about"
import SingleTodo from "./pages/single-todo"
import Header from "./components/layout/Header"
import UsersPage from "./pages/users"
import CounterWithSingleUndo from "./pages/counter/CounterWithSingleUndo"
import CounterWithMultipleUndo from "./pages/counter/CounterWithMultipleUndo"

const App = ({ }) => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<div>salam ana sehife</div>} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="/todos/:id" element={<SingleTodo />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/counter" element={<CounterWithSingleUndo />} />
                <Route path="/counter1" element={<CounterWithMultipleUndo />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}
export default App
