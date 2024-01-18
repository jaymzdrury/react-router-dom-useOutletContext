import { useOutletContext } from "react-router-dom"

function Child(){
    const auth = useOutletContext<boolean>()
    return <><p>{auth ? 'Child' : 'Forbbiden'}</p></>
}

export default Child