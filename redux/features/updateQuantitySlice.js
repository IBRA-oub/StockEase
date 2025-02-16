import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { productDetails } from "./productDetailsSlice";
import { allProduct } from "./allProductSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    updateStock: null,
    loading: false,
    error: null
}


export const updateStock = createAsyncThunk('product/updateStock', async (product, { rejectWithValue, dispatch }) => {
    try {
        const response = await axios.get(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/products/${product.id}`)

        let productData = response.data
        let quantity = product.quantity
        let city = product.city
        const warehousemanIdString = await AsyncStorage.getItem('id');
        const warehousemanCity = await AsyncStorage.getItem('city');
        const warehousemanId = warehousemanIdString ? parseInt(warehousemanIdString, 10) : null;

        const date = new Date().toISOString().split('T')[0]

        let updatedEditedBy = productData?.editedBy || [];

        // edite By update 

        const existingEditor = updatedEditedBy.find(user => user.warehousemanId === warehousemanId);
        if (existingEditor) {
            existingEditor.at = date;
        } else {
            updatedEditedBy.push({ warehousemanId, at: date });
        }

        // stocks update
        let updatedStock = [...productData?.stocks];
        const existingStock  = updatedStock.find(stock => stock.localisation.city === city);
        if (existingStock ) {
            existingStock .quantity = parseInt(quantity, 10);
        } else {
            updatedStock.push({
                id: Date.now(),
                name: `Stock ${warehousemanCity}`,
                quantity: parseInt(quantity, 10),
                localisation: {
                    city: warehousemanCity,
                    latitude: 0,
                    longitude: 0
                }
            });
        }

        const updatedProduct = { ...productData, stocks: updatedStock, editedBy: updatedEditedBy };

        const res = await axios.put(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/products/${product.id}`, updatedProduct);
        if (res) {
            await dispatch(productDetails(product.id))
            await dispatch(allProduct())
        }

        return { updatedStock };

    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})

const updateStockSlice = createSlice({
    name: 'updateStock',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateStock.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(updateStock.fulfilled, (state, action) => {
                state.loading = false;
                state.updateStock = action.payload;
            })
            .addCase(updateStock.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default updateStockSlice.reducer;