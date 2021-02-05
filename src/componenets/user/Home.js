import React from 'react'
import { Link} from 'react-router-dom'
import { useAuth } from './../../context/AuthContext'


export default function UserHome() {
    const { currentUser } = useAuth();

    return (
        <div>
            <h1 className="">Dashboard</h1>
            {currentUser.email}
            {
                currentUser && <Link to="/admin">Go to admin</Link>
            }
        </div>
    )
}
