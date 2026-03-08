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
        },

        removeFromCart: (state, action) => {
            console.log("called")
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        }
    }
})



export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;