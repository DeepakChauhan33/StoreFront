import { createSlice } from "@reduxjs/toolkit";

const initState = {
    cart: [],
}


const cartSlice = createSlice({

    name: "cart",
    initialState: initState,

    reducers: {

        addToCart: (state, action) => {
            state.cart.push(action.payload);
        }
    }
})



export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;