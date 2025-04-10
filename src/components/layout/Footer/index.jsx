import { headerStyles } from "../../../utils/measurement";
import styles from "./footer.module.css"

const Footer = ({ heading, variant = "h1" }) => {
    const fontSize = headerStyles[variant] ? headerStyles[variant] + 'px' : headerStyles["h1"];
    console.log(styles.modal)
    return (
        <footer>
            <h1
                style={{
                    fontSize
                }}
            >
                {heading}
            </h1>
        </footer>
    )
}
export default Footer
