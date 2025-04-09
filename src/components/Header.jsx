import { headerStyles } from "../utils/measurement";
const Header = ({ heading, variant = "h1" }) => {
    const fontSize = headerStyles[variant] ? headerStyles[variant] + 'px' : headerStyles["h1"];
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
