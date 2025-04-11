import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { getData } from "../../utils/api"

const SingleTodo = ({ }) => {
    const { id } = useParams();
    const [todo, setTodo] = useState({})

    useEffect(() => {
        getData(`todos/${id}`).then((data) => {
            setTodo(data)
        })
    }, [])

    return (
        <div>
            <Link to="/todos">Back to todos page</Link>
            <h1>Todo title: {todo.title}</h1>
        </div>
    )
}
export default SingleTodo
