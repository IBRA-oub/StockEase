import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { allProduct } from "./allProductSlice";

const initialState = {
    product: null,
    loading: false,
    error: null
}


export const addProduct = createAsyncThunk('product/add', async (data, { rejectWithValue, dispatch }) => {
    try {

        const response = await axios.post(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/products`, data)
        await dispatch(allProduct())
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})

const addProductSlice = createSlice({
    name: 'addProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default addProductSlice.reducer;