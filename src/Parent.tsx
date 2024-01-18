import { Outlet, useOutletContext } from "react-router-dom"

function Parent(){
    const auth = useOutletContext<boolean>()
    return <><p>{auth ? 'Parent' : 'Forbidden'}</p><Outlet context={auth} /></>
}

export default Parent