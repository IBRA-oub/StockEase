import { configureStore } from "@reduxjs/toolkit";
import loginSlice from '../features/loginSlice'
import allProductSlice from "../features/allProductSlice";
import productDetailsSlice from "../features/productDetailsSlice";
import warehousemansSlice from "../features/warehousemansSlice";
import updateStockSlice from "../features/updateQuantitySlice";
import addProductSlice from "../features/addProductSlice";

export const store = configureStore({
    reducer:{
        login : loginSlice,
        allProduct : allProductSlice,
        productDetails : productDetailsSlice,
        allWarehousemans : warehousemansSlice,
        updateStock : updateStockSlice,
        addProduct : addProductSlice,
    }
})