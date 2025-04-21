import { useEffect, useReducer, useState } from "react"
import UserCard from "../../components/UserCard"
import { getUsers } from "../../mock/users"
import styles from "./users.module.css"
import Loading from "../../components/common/Loading"
import ErrorComponent from "../../components/common/ErrorComponent"

const UsersPage = ({ }) => {
    useReducer()
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({ message: '' }) // 404

    useEffect(() => {
        const fetchData = async () => {
            try {
                const _users = await getUsers();
                setUsers(_users);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return <Loading />;
    }

    if (error.message) {
        return <ErrorComponent error={error} />
    }
    const handleAddUser = () => {
        // business logic
        dispatch({ type: "add_user" })
    }
    const handleEditUser = () => {
        // some codes on handleEditUser
    }
    const handleDeleteUser = () => {
        // some codes on handleDeleteUser
    }
    return (
        <div className={styles.card_container}>
            <button onClick={handleAddUser}>add user</button>
            <button onClick={handleEditUser}>Edit user</button>
            <button onClick={handleDeleteUser}>Delete user</button>
            {
                users.map((user) => (
                    <UserCard
                        key={user.id}
                        {...user}
                    />
                ))
            }
        </div>
    )
}
export default UsersPage
