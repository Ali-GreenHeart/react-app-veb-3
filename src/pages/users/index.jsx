import UserCard from "../../components/UserCard"
import { users } from "../../mock/users"
import styles from "./users.module.css"
import './user.css'
import styles from './users.module.css';

const UsersPage = ({ }) => {
    return (
        // jss -> javascript in css
        <div className={styles.card_container}>
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
