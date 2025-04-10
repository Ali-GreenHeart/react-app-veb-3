import styles from "./usercard.module.css"

const UserCard = ({
    img,
    username,
    job
}) => {
    return (
        <div className={styles.card}>
            <img src={`/Les3_img/${img}.jpg`} alt={`${username}'s image`} />
            <h3>{username}</h3>
            <p>{job}</p>
        </div>
    )
}
export default UserCard
