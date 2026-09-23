import { useState } from "react"

const Login = ({onClose})=>{
    const [signIn,setSignIn] = useState(true)
    return(
        <div onClick={onClose}>
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <form className="bg-white w-96 overflow-hidden flex-col" onClick={(e)=>e.stopPropagation()}>
                <h1 className="font-bold">{signIn ? "SignIn" : "Signup"}</h1>
                <input className="w-9/12 m-4 p-2" placeholder="User Name" />
                <input className="w-9/12 m-4 p-2"  placeholder="Password" />
                {!signIn && <input className="w-9/12 m-4 p-2" placeholder="Re Enter Password" /> }
                <button className="w-9/12">{signIn ? "SignIn" : "SignUp"}</button>
                <p className="cursor-pointer" onClick={()=>setSignIn(!signIn)}>New user? Signup</p>
                </form>
            </div>
        </div>
    )
}
export default Login