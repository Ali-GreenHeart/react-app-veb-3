import { useEffect, useReducer, useState } from "react"
import UserCard from "../../components/UserCard"
import { getUsers } from "../../mock/users"
import styles from "./users.module.css"
import Loading from "../../components/common/Loading"
import ErrorComponent from "../../components/common/ErrorComponent"
import { useDispatch, useSelector } from "react-redux"
import {
    add_user,
    fetch_users, set_error, set_loading
} from "../../store/slices/users-with-rtk.slice"


const UsersWithRTKPage = ({ }) => {
    const { loading, error, users } = useSelector((state) => state.usersWithRTK)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const _users = await getUsers();
                dispatch(fetch_users(_users))
            } catch (err) {
                dispatch(set_error(err))
            } finally {
                dispatch(set_loading(false))
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
        dispatch(add_user({
            id: 123,
            img: "ayxan",
            username: 'Ayxan',
            job: "devehopper"
        }))
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
export default UsersWithRTKPage
