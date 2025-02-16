import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import allProductSlice,{ allProduct } from "../redux/features/allProductSlice";

const mock = new MockAdapter(axios);

describe("allProductSlice Test", () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                allProduct: allProductSlice,
            },
        });
    });

    afterEach(() => {
        mock.reset();
    });

    it("should fetch all products successfully", async () => {
        const mockData = [{ id: 1, name: "Product 1" }];
        mock.onGet(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/products`).reply(200, mockData);

        await store.dispatch(allProduct());
        const state = store.getState().allProduct;

        expect(state.products).toEqual(mockData);
        expect(state.loading).toBe(false);
        expect(state.error).toBeNull();
    });

    it("should handle fetch error", async () => {
        mock.onGet(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/products`).reply(500, "Server Error");

        await store.dispatch(allProduct());
        const state = store.getState().allProduct;

        expect(state.error).toBe("Server Error");
        expect(state.loading).toBe(false);
        expect(state.products).toEqual([]);
    });
});
 