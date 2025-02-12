import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    products: [],
    loading: false,
    error: null
}


export const allProduct = createAsyncThunk('product/allProduct', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/products`)
        return response.data

    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})

const allProductSlice = createSlice({
    name:'allProduct',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(allProduct.pending , (state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(allProduct.fulfilled , (state,action)=>{
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(allProduct.rejected , (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default allProductSlice.reducer;