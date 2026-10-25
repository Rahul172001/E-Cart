import { createSlice } from "@reduxjs/toolkit";

const savedLanguage = localStorage.getItem("appLanguage") || "en"
const LanguageSlice = createSlice({
    name:"language",
    initialState:{
        lang:savedLanguage
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang = action.payload
        }
    }
})

export const {changeLanguage} = LanguageSlice.actions
export default LanguageSlice.reducer