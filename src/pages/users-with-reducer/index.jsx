import { useEffect, useReducer, useState } from "react"
import UserCard from "../../components/UserCard"
import { getUsers } from "../../mock/users"
import styles from "./users.module.css"
import Loading from "../../components/common/Loading"
import ErrorComponent from "../../components/common/ErrorComponent"

const reducer = (previousState, actionObject) => {
    const { type, payload } = actionObject

    switch (type) {
        case "fetch_users":
            return { ...previousState, users: payload }
        case "add_user":
            return { ...previousState, users: [...previousState.users, payload] }
        case "set_error":
            return { ...previousState, error: payload }
        case "set_loading":
            return { ...previousState, loading: payload }
        default:
            return previousState;
    }
}

const UsersWithReducerPage = ({ }) => {
    const [store, dispatch] = useReducer(reducer,
        {
            users: [],
            loading: true,
            error: { message: '' }
        }
    )

    useEffect(() => {
        const fetchData = async () => {
            try {
                const _users = await getUsers();
                dispatch({ type: 'fetch_users', payload: _users })
            } catch (err) {
                dispatch({ type: "set_error", payload: err })
            } finally {
                dispatch({ type: "set_loading", payload: false })
            }
        }
        fetchData();
    }, [])

    if (store.loading) {
        return <Loading />;
    }

    if (store.error.message) {
        return <ErrorComponent error={store.error} />
    }
    const handleAddUser = () => {
        // business logic
        dispatch({
            type: "add_user", payload: {
                id: 123,
                img: "ayxan",
                username: 'Ayxan',
                job: "devehopper"
            }
        })
    }
    const handleEditUser = () => {
        dispatch({ type: "edit_user", payload: "hansisa edit data" })
        // some codes on handleEditUser
    }
    const handleDeleteUser = () => {
        dispatch({ type: "delete_user", payload: "hansisa delete id data" })
        // some codes on handleDeleteUser
    }
    return (
        <div className={styles.card_container}>
            <button onClick={handleAddUser}>add user</button>
            <button onClick={handleEditUser}>Edit user</button>
            <button onClick={handleDeleteUser}>Delete user</button>
            {
                store.users.map((user) => (
                    <UserCard
                        key={user.id}
                        {...user}
                    />
                ))
            }
        </div>
    )
}
export default UsersWithReducerPage
