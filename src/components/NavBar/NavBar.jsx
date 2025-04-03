// src/components/NavBar/NavBar.jsx
import { Link } from "react-router"
import { useContext } from 'react'
import { UserContext } from "../../contexts/UserContext"

const NavBar = () => {
    const { user } = useContext(UserContext)
    return (
        <nav>
            <ul>
                {user ? (
                    <li>Welcome, {user.username}</li>
                ) : (
                 <li><Link to='/sign-up'>Sign Up</Link></li>   
                )} 
            </ul>
        </nav>
    )
}

export default NavBar