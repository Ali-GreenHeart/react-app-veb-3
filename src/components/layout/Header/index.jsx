import { NavLink } from "react-router";
import styles from './header.module.css';
import { navLinks } from "../../../utils/links";
import FakeDropDown from "./FakeDropDown";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

const CustomNavLink = ({ to, title }) => {
    return (
        <NavLink className={({ isActive }) => {
            if (isActive) {
                return styles.activeNavLink
            }
        }} to={to}>{title}</NavLink>
    )
}

const Header = () => {
    const { username } = useContext(DataContext)
    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <div>
                {
                    navLinks.map((link) => (
                        <CustomNavLink key={link.id} to={link.to} title={link.title} />
                    ))
                }
                <CustomNavLink to={"https://alion.dev"} title={`${username}'s portfolio`} />
            </div>
            <FakeDropDown />
        </header>
    )
}
export default Header
