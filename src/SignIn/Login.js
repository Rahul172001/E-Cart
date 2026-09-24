import { useState,useRef } from "react"
import { checkValidate } from "../Utils/Validate"

const Login = ({onClose})=>{
    const [signIn,setSignIn] = useState(true)
    const [error,setError] =useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const validation = ()=>{
        const message = checkValidate(email.current.value,password.current.value)
        setError(message)
        console.log("em",email)
        console.log("pwd",password)
    }
    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={onClose}>
                <form className="bg-white w-96 overflow-hidden flex-col" onClick={(e)=>e.stopPropagation()
                }>
                <h1 className="font-bold">{signIn ? "SignIn" : "Signup"}</h1>
                <input className="w-9/12 m-4 p-2" ref={email} placeholder="User Name" />
                <input className="w-9/12 m-4 p-2" ref={password} placeholder="Password" />
                {!signIn && <input className="w-9/12 m-4 p-2" placeholder="Re Enter Password" /> }
                <p>{error}</p>
                <button className="w-9/12" onClick={validation}>{signIn ? "SignIn" : "SignUp"}</button>
                <p className="cursor-pointer" onClick={()=>setSignIn(!signIn)}>{signIn ?"New user? Signup":"Already Signedup then signin "}</p>
                </form>
        </div>
    )
}
export default Login