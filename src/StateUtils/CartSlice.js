import { createSlice } from "@reduxjs/toolkit";

const CarrtSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addToCart:(state,actions)=>{
            state.items?.push(actions?.payload)
        },
        removeFromCart:(state,actions)=>{
            state.items = state?.items?.filter((data)=>data?.id !== actions?.payload)
        },
        clearCart:(state)=>{
            state.items = []
        }
    }
})

export const {addToCart,removeFromCart,clearCart} = CarrtSlice.actions
export default CarrtSlice.reducer