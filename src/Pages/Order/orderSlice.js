import { createSlice } from "@reduxjs/toolkit";

// Functions
import { setLocalStorage, getLocalStorage } from "../../Utils/localStorage";

const initState = {
    orders: getLocalStorage("order") || [],
};

const orderSlice = createSlice({
    name: "orders",
    initialState: initState,

    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);

            setLocalStorage("order", state.orders);
        },

        clearOrder: (state, action) => {
            state.orders = [];
            setLocalStorage("order", state.orders);

        }
    }
});

export const { addOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;