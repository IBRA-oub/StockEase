import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import updateStockSlice, { updateStock } from "../redux/features/updateQuantitySlice";

jest.mock("@react-native-async-storage/async-storage", () => ({
    getItem: jest.fn((key) =>
    Promise.resolve(key === "city" ? "Casablanca" : "1")
  ),
    setItem: jest.fn(() => Promise.resolve()),
    removeItem: jest.fn(() => Promise.resolve()),
}));

const mock = new MockAdapter(axios);

describe("updateQuantitySlice Test", () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                updateStock: updateStockSlice,
            },
        });
    });

    afterEach(() => {
        mock.reset();
    });

    it("should update stock successfully", async () => {
        const mockProduct = { id: 1, quantity: 10, city: "Casablanca" };
        const mockData = { updatedStock: [{ id: expect.any(Number), quantity: 10, localisation: { city: "Casablanca", latitude: 0, longitude: 0 },name: "Stock Casablanca" }] };

        mock.onGet(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/products/1`).reply(200, { stocks: [] });
        mock.onPut(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/products/1`).reply(200, mockData);

        await store.dispatch(updateStock(mockProduct));
        const state = store.getState().updateStock;

        expect(state.updateStock).toMatchObject(mockData);
        expect(state.loading).toBe(false);
        expect(state.error).toBeNull();
    });

    it("should handle stock update error", async () => {
        const mockProduct = { id: 1, quantity: 10, city: "Casablanca" };
        mock.onPut(`${process.env.EXPO_PUBLIC_IP_ADDRESS}/products/1`).reply(500, "Server Error");

        await store.dispatch(updateStock(mockProduct));
        const state = store.getState().updateStock;

        expect(state.error).toContain("Request failed with status code 404");
        expect(state.loading).toBe(false);
        expect(state.updateStock).toBeNull();
    });
});
