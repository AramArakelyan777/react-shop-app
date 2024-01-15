import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth"
import "../css/Login.css"

function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Welcome, {auth.user}!</h1>
            <button className="logOut" onClick={() => {
                auth.logout()
                navigate("/")
            }}>Logout</button>
        </div>
    )
}

export default Profile
