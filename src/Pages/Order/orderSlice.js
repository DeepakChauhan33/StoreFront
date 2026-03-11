import { createSlice } from "@reduxjs/toolkit";

const initState = {
    orders: []
}

const orderSlice = createSlice({
    name: "orders",
    initialState: initState,


    reducers: {

        addOrder: (state, action) => {
            console.log(456)
            state.orders.push(action.payload);
        }
    }

})



export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;