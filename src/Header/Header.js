import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus"
import { useContext } from "react"
import ThemeContext from "../Utils/ThemeContext"
import { useSelector } from "react-redux"

const Header = ()=>{
    const onlineStatus = useOnlineStatus()
    const {theme,toggleTheme} = useContext(ThemeContext)
    const isLight = theme==="light"
    const cartItems = useSelector((store)=>store?.cart?.items)
    return(
    <header className={isLight? "sticky top-0 z-50 bg-[#1E3A8A] shadow-md" : "sticky top-0 z-50 bg-[#0F172A] shadow-md"}>
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-3xl font-bold text-white tracking-tight">E 
        <span className="text-[#FFD400]">Cart</span></h1>
    <ul className="flex items-center gap-2 list-none">
    <li className="px-2 flex items-center" title={ onlineStatus? "Online" : "Offline"}>{onlineStatus ? "🟩" : "🟥"}</li>
    <li className="px-1">
    <Link to="/" className="text-white no-underline px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
    Home
    </Link>
    </li>
    <li className="px-1">
    <Link to="/table" className="text-white no-underline px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
    Table
    </Link>
    </li>
    <li className="px-1">
    <Link to="/aboutus" className="text-white no-underline px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
    About Us
    </Link>
    </li>
    <li className="px-1">
    <Link to={"/Cart"}>
    🛒 Cart - ({cartItems?.length})
    </Link>
    </li>
    <li className="px-1">
    <button type="button" onClick={toggleTheme} className="text-white text-sm font-medium px-4 py-1.5 rounded-full border border-white/40 hover:bg-white/20 transition-colors">{isLight ? "☀️Light" :"🌙 Dark"}</button></li>
    </ul>
    </div>
    </header>
    )
}


export default Header