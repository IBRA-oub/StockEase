import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    warehousemans: [],
    loading: false,
    error: null
}


export const login = createAsyncThunk('auth/login', async (secretKey, { rejectWithValue }) => {
    try {
        
        const response = await axios.get(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/warehousemans`)
        const users = response.data;
        
        const warehouseman = users.find(user => user.secretKey.toLowerCase() === secretKey.secretKey.toLowerCase());

        if (warehouseman) {

            await AsyncStorage.setItem('id' , warehouseman.id)
            await AsyncStorage.setItem('name' , warehouseman.name)
            await AsyncStorage.setItem('city' , warehouseman.city)
            await AsyncStorage.setItem('secretKey' , warehouseman.secretKey)

            return warehouseman
        } else {
            return rejectWithValue('invalid secretKey')
        }

    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.pending , (state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(login.fulfilled , (state,action)=>{
            state.loading = false;
            state.warehousemans = action.payload.warehousemans;
        })
        .addCase(login.rejected , (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default loginSlice.reducer;