import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../StateUtils/CartSlice"
import Cards from "../ECart/Cards"

const Cart = ()=>{
    const dispatch = useDispatch()
    const cartItems = useSelector((store=>store?.cart?.items))
    console.log("cartItems",cartItems)
    return(
        <>
        <h1>Added Items - {cartItems?.length}</h1>
        <button type="button" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        <div className="flex flex-wrap gap-6 py-6 px-4 justify-center">
        {cartItems?.map((data)=>
        <Cards key={data?.id} response={data} />
        )}
        </div>
        </>
    )
}
export default Cart