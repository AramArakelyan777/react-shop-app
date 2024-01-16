import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth"
import "../css/Login.css"

function User() {
    const auth = useAuth()
    const navigate = useNavigate()

    return (
        <div>
            <h2>Welcome, {auth.user}!</h2>
            <button className="logOut" onClick={() => {
                auth.logout()
                navigate("/")
            }}>Logout</button>
        </div>
    )
}

export default User
