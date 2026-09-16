// import { useState } from "react"

import { useContext, useState } from "react"
import ThemeContext from "../Utils/ThemeContext"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../StateUtils/CartSlice"

const Cards = ({response})=>{
    const {id,title,price,image,description,rating} = response
    const [descDropDown,setDescDropDown] = useState(false)
    const {theme} = useContext(ThemeContext)
    const isLight = theme==="light"
    const dispatch = useDispatch()
    const cartItems = useSelector((store)=>store?.cart?.items)
    const inCart = cartItems?.some((data)=>data?.id === id)
    return(
        <div className={isLight ? "bg-white text-black w-[250px] min-h-[420px] p-4 rounded-xl shadow-md flex flex-col hover:-translate-y-1 transition-transform" :"bg-neutral-800 text-white w-[250px] min-h-[420px] p-4 rounded-xl shadow-md hover:shadow-lg flex flex-col hover:-translate-y-1 transition-transform" }>
            <div className="flex justify-center items-center h-[160px] mb-3 ">
            <img src={image} className="max-h-[140px] object-contain"/>
            </div>
            <h2 className="text-sm font-medium line-clamp-2 mb-1">{title}</h2>
            <h3 className="text-lg font-bold mb-2">₹{price}</h3>
            <div className="cursor-pointer text-sm flex items-center gap-1 mb-1 select-none" onClick={(e)=> {
                 e.stopPropagation();
                 e.preventDefault();
                 setDescDropDown(!descDropDown)}}>
                {descDropDown ? "Hide details" : "View Details"}
                {descDropDown ? " ▲" : " ▼"}</div>
            {descDropDown && <p className={isLight ? "text-xs text-neutral-300 mb-3 line-clamp-4" : "text-xs text-neutral-600 mb-3 line-clamp-4"}>{description}</p>}
            <button type="button" className={`relative z-30 ${
             inCart
              ? "bg-red-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-red-600 transition"
              : "bg-[#FFD400] text-black text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-yellow-400 transition"
            }`} onClick={(e)=> {
                e.stopPropagation();
                e.preventDefault()
                inCart ? dispatch(removeFromCart(id)) : dispatch(addToCart(response))
                }}>{inCart ? "Remove" : "Add"}</button>
            <p style={{fontWeight:"bold"}}>{rating.rate}⭐ - 👥{rating.count}</p>
        </div>
    )
}

export const recomendedCards = (Cards)=>{
    return(props)=>{
        return(
            <div className="relative border-2 border-[#FFD400] rounded-xl">
            <span className="bg-[#FFD400] text-Black font-bold absolute px-2 py-0.5 rounded-md -top-2 -left-2 text-xs shadow z-20">Recommended</span>
            <Cards {...props}/>
            </div>
        )
    }
}
export default Cards