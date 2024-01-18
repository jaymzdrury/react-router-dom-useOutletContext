import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

function GrandParent(){
    const [auth, authSet] = useState<boolean>(false)
    return (
        <>
            <button onClick={() => authSet(prev => !prev)}>{auth ? 'Log Out' : 'Log In'}</button>
            <p>Grand Parent</p>
            <div style={{display: 'flex', gap: '12px'}}>
                <Link to='/parent'>Parent</Link>
                <Link to='/parent/child'>Child</Link>
            </div>
            <Outlet context={auth} />
        </>
    )
}

export default GrandParent