import { configureStore } from "@reduxjs/toolkit";
import loginSlice from '../features/loginSlice'
import allProductSlice from "../features/allProductSlice";
export const store = configureStore({
    reducer:{
        login : loginSlice,
        allProduct : allProductSlice
    }
})