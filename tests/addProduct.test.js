import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import addProductSlice,{addProduct} from "../redux/features/addProductSlice";

const mock = new MockAdapter(axios);

describe("addProductSlice Test", () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                addProduct: addProductSlice,
            },
        });
    });

    afterEach(() => {
        mock.reset();
    });

    it("should add product successfully", async () => {
        const newProduct = { id: 1, name: "New Product" };
        mock.onPost(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/products`).reply(200, newProduct);

        await store.dispatch(addProduct(newProduct));
        const state = store.getState().addProduct;

        expect(state.product).toEqual(newProduct);
        expect(state.loading).toBe(false);
        expect(state.error).toBeNull();
    });

    it("should handle product addition error", async () => {
        const newProduct = { id: 1, name: "New Product" };
        mock.onPost(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/products`).reply(500, "Server Error");

        await store.dispatch(addProduct(newProduct));
        const state = store.getState().addProduct;

        expect(state.error).toBe("Server Error");
        expect(state.loading).toBe(false);
        expect(state.product).toBeNull();
    });
});
