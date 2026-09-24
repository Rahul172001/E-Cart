import { useParams,Link } from "react-router-dom"
import usePdpData from "../Utils/usePdpData"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../StateUtils/CartSlice"

const Pdp = ()=>{
    const [pdpClr,setPdpClr] = useState(false)
    const [pdpSize,setPdpSize] = useState(false)
    const {productid} = useParams()
    const productData = usePdpData("https://fakestoreapi.com/products/",productid)
    const product = {...productData,color:["red","blue","green","pink"],size:["XS","S","M","L","XL"]}
    console.log("product",product)
    const numericId = Number(productid)
    const dispatch = useDispatch()
    const cartItems = useSelector((store)=>store?.cart?.items)
    const inCart = cartItems?.some((data)=>data?.id === numericId)
    return(
        <div className="pdp-container" style={{display:"flex",margin:"20px"}}>
            <img style={{width:"40%",border:"1px solid black",padding:"25px",margin:"25px"}} src={product?.image} />
            <div className="product-desc" style={{margin:"25px",border:"1px solid black",padding:"25px"}}>
                <h2>{product?.title}</h2>
                <p style={{fontWeight:"bold"}}>{product?.category}</p>
                <h4>{product?.price}</h4>
                <h4  className="cursor-pointer" onClick={()=>setPdpClr(!pdpClr)}>{pdpClr ? " ▲" : " ▼"}</h4>
                {pdpClr && <div>{product?.color?.join(", ")}
                </div>}
                <h4 className="cursor-pointer" onClick={()=>setPdpSize(!pdpSize)}>{pdpSize?" ▲" : " ▼"}</h4>
                {pdpSize && <div>{product?.size?.join(", ")}
               </div>}
                <p>{product?.description}</p>
                <Link to="/Cart">
                <button onClick={()=>{
                    inCart 
                    ?dispatch(removeFromCart(numericId))
                    :dispatch(addToCart(product))
                }}>Checkout</button>
                </Link>
            </div>
        </div>
    )
}
export default Pdp