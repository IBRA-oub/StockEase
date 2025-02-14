import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    productDetails: null,
    loading: false,
    error: null
}


export const productDetails = createAsyncThunk('product/productDetails', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/products/${id}`)
        return response.data

    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})

const productDetailsSlice = createSlice({
    name:'productDetails',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(productDetails.pending , (state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(productDetails.fulfilled , (state,action)=>{
            state.loading = false;
            state.productDetails = action.payload;
        })
        .addCase(productDetails.rejected , (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default productDetailsSlice.reducer;