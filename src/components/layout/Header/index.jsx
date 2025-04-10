import { headerStyles } from "../../../utils/measurement";
import styles from "./header.module.css"

const Header = ({ heading, variant = "h1" }) => {
    const fontSize = headerStyles[variant] ? headerStyles[variant] + 'px' : headerStyles["h1"];
    console.log(styles.modal)
    return (
        <header>
            <h1
                style={{
                    fontSize
                }}
            >
                {heading}
            </h1>
        </header>
    )
}
export default Header
