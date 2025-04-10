// get data from the endpoint!

import { useEffect, useState } from "react"
import { getData } from "../../utils/api"
// Component 3 halda render edir!
// 1. oz daxili state-i deyiserse (setUser, setData, set*)
// 2. props deyisende!
// 3. Parent-i render olunanda!

// sonsuz dovr -> loop-larin (infinite loop)
// rekursiya -> funksiya oz ozunu cagirir!

const TodosPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getData('todos')
            .then((d) => {
                console.log(d)
                setTodos(d)
            })
    }, [])

    return (
        <div>
            <h1>TodosPage</h1>
            {
                todos.map((todo) => {
                    return (
                        <div
                            style={{
                                color: 'white',
                                backgroundColor: todo.completed ? "green" : "darkred",
                                fontSize: 32
                            }}
                            key={todo.id}>
                            <p> {todo.title}</p>
                            <button
                                onClick={() => {
                                    const clickedId = todo.id;
                                    setTodos((preTodos) => {
                                        return preTodos.map((_t) => {
                                            if (_t.id === clickedId) {
                                                return { ..._t, completed: !todo.completed }
                                            }
                                            return _t;
                                        })
                                    })

                                    /*
                                    // Yuxaridaki ile eynidir, sadece yuxaridaki versiya (callback ile) 
                                    // daha yaxsi hesab edilir. 
                                    const newTodos =  todos.map((_t) => {
                                            if (_t.id === clickedId) {
                                                return { ..._t, completed: !todo.completed }
                                            }
                                            return _t;
                                        })
                                        setTodos(newTodos);
                                    */
                                }}
                            >click my tongue!</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default TodosPage
