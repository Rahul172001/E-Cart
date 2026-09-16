import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const err = useRouteError()
    console.log(err)
    return(
        <> 
        <h1>oops!!!!</h1>
        <h2>Some thing went wrong</h2>
        <h4>{err.status} : {err.statusText}</h4>
        </>
    )
}
export default Error