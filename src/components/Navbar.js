import { NavLink } from "react-router-dom"
import "../css/Navbar.css"
import { useAuth } from "./auth"

function Navbar() {
    const auth = useAuth()

    return (
        <nav className="navbar">
            <NavLink to="/">Shop</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            {!auth.user && (
                <NavLink to="/login">Login</NavLink>
            )}
        </nav>
    )
}

export default Navbar
