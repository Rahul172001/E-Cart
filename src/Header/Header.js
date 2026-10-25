import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus"
import { useContext, useRef } from "react"
import ThemeContext from "../Utils/ThemeContext"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { languageList, supported_language } from "../Utils/language"
import { changeLanguage } from "../StateUtils/LanguageSlice"

const Header = ()=>{
    const onlineStatus = useOnlineStatus()
    const {theme,toggleTheme} = useContext(ThemeContext)
    const isLight = theme==="light"
    const dispatch = useDispatch()
    const handleLanguage = (e)=>{
        dispatch(changeLanguage(e.target.value))
    }
    const cartItems = useSelector((store)=>store?.cart?.items)
    const selectedLanguage = useSelector((store)=>store?.language?.lang)
    const prefferedLanguage = useRef(null)
    console.log("pfl",prefferedLanguage?.current?.value)
    return(
    <header className={isLight? "sticky top-0 z-50 bg-[#1E3A8A] shadow-md" : "sticky top-0 z-50 bg-[#0F172A] shadow-md"}>
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-3xl font-bold text-white tracking-tight">E 
        <span className="text-[#FFD400]">Cart</span></h1>
    <ul className="flex items-center gap-2 list-none">
    <li className="px-2 flex items-center" title={ onlineStatus? "Online" : "Offline"}>{onlineStatus ? "🟩" : "🟥"}</li>
    <li className="px-1">
    <Link to="/" className="text-white no-underline px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
    {languageList[selectedLanguage]?.home}
    </Link>
    </li>
    <li className="px-1">
    <Link to="/table" className="text-white no-underline px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
    {languageList[selectedLanguage]?.table}
    </Link>
    </li>
    <li className="px-1">
    <Link to="/aboutus" className="text-white no-underline px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
    {languageList[selectedLanguage]?.aboutUs}
    </Link>
    </li>
    <li className="px-1">
    <Link to="/Cart" className="text-white no-underline px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors">
    🛒 {languageList[selectedLanguage]?.cart} - ({cartItems?.length})
    </Link>
    </li>
    <li className="px-1">
    <button type="button" onClick={toggleTheme} className="text-white text-sm font-medium px-4 py-1.5 rounded-full border border-white/40 hover:bg-white/20 transition-colors">
    {isLight ? `☀️ ${languageList[selectedLanguage]?.light || ""}` : `🌙 ${languageList[selectedLanguage]?.dark || ""}`}</button>
    </li>
    <li className="px-1">
        <select ref={prefferedLanguage} onChange={handleLanguage}>
            {supported_language?.map((data)=><option key={data?.id} value={data?.id}>{data?.lang}</option>)}
        </select>
    </li>
    </ul>
    </div>
    </header>
    )
}


export default Header