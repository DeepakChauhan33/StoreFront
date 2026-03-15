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

            // save updated orders
            setLocalStorage("order", state.orders);
        }
    }
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;