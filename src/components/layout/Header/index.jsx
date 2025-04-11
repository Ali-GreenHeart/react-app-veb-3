import { NavLink } from "react-router";
import styles from './header.module.css';
import { navLinks } from "../../../utils/links";

const CustomNavLink = ({ to, title }) => {
    return (
        <NavLink className={({ isActive }) => {
            if (isActive) {
                return styles.activeNavLink
            }
        }} to={to}>{title}</NavLink>
    )
}

const Header = ({ }) => {
    return (
        <header>
            {
                navLinks.map((link) => (
                    <CustomNavLink key={link.id} to={link.to} title={link.title} />
                ))
            }
        </header>
    )
}
export default Header
