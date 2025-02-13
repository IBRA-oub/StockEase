import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    warehousemans: [],
    loading: false,
    error: null
}


export const warehousemans = createAsyncThunk('warehousemans/allWarehousemans', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/warehousemans`)
        return response.data


    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})

const allWarehousemansSlice = createSlice({
    name:'allWarehousemans',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(warehousemans.pending , (state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(warehousemans.fulfilled , (state,action)=>{
            state.loading = false;
            state.warehousemans = action.payload;
        })
        .addCase(warehousemans.rejected , (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default allWarehousemansSlice.reducer;