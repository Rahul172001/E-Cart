import { useState,useEffect, useContext,useRef } from "react"
import Cards, { promotedCards, recomendedCards } from "./Cards"
import { Link } from "react-router-dom"
import useDatafetch from "../Utils/useDatafetch"
import ThemeContext from "../Utils/ThemeContext"

const PromotedCards = recomendedCards(Cards)
const Home = ()=>{
  const [search,setSearch] = useState("")
  const {theme} = useContext(ThemeContext)
  const {product,setProduct,productBackup} = useDatafetch("https://fakestoreapi.com/products")
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setProduct(productBackup.filter((data)=>data?.title?.toLowerCase()?.includes(search?.toLowerCase())))
    },300)
    return ()=> clearTimeout(timer)
  },[search])
  const searchRef = useRef(null)
  useEffect(()=>{
    searchRef.current.focus()
  },[])
  return(
    <div className={theme==="light" ? "bg-neutral-50 min-h-screen" : "bg-neutral-900 min-h-screen" }>
       <div className="flex justify-center pt-6 pb-2">
      <input className={theme==="light" ? "w-full max-w-md px-4 py-2.5 rounded-full bg-white text-black placeholder-neutral-400 border-neutral-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" : "w-full max-w-md px-4 py-2.5 rounded-full bg-neutral-800 text-white placeholder-neutral-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"} 
      ref={searchRef}
      type="text" placeholder="Search Products" value={search} onChange={(e)=>setSearch(e.target.value)} />
      </div> 
      <div className="flex flex-wrap gap-6 py-6 px-4 justify-center" >
      {product.map((data)=>
        <Link to={`/pdp/${data?.id}`} key={data?.id}>
          {data?.rating?.rate > 3.9 ? 
          (<PromotedCards response={data}/>) :
          (<Cards response={data}/>)}
        </Link>
      )}
      </div>
    </div>
  )
}
export default Home