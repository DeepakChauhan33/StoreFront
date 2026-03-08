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

            const productID = action.payload;

            const exist = state.cart.find((item)=> item.id===productID)
            state.cart = state.cart.filter((item) => item.id !== action.payload)

            if(exist){
                
            }
        }
    }
})



export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;