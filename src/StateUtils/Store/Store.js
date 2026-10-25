
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../CartSlice";
import languageReducer from "../LanguageSlice"

export const Store = configureStore({
    reducer:{
        cart: cartReducer,
        language : languageReducer
    }
})
