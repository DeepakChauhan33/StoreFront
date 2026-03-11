import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { useSelector } from "react-redux";

const initState = {
    cart: [],
}


const cartSlice = createSlice({




    name: "cart",
    initialState: initState,

    reducers: {

        addToCart: (state, action) => {

            const product = action.payload;

            const existing = state.cart.find((item) => item.id === product.id);

            if (existing) {
                existing.quantity += 1;
            } else {
                state.cart.push({ ...product, quantity: 1 }) //Here I add our own quantity property 
            }
        },

        removeFromCart: (state, action) => {

            const productID = action.payload;

            const exist = state.cart.find((item) => item.id === productID)
            state.cart = state.cart.filter((item) => item.id !== action.payload)


        },


        increaseQuantity: (state, action) => {

            const product = state.cart.find((item) => item.id === action.payload);

            if (product) {
                product.quantity += 1;
                console.log("called")
            } else {

            }
        },


        decreaseQunatity: (state, action) => {

            const product = state.cart.find((item) => item.id === action.payload);

            if (product && product.quantity > 1) {  // Here it decrease only if quantity is greater than 1
                product.quantity -= 1;
                console.log("decrease CLicked")
            } else {

            }
        }



    }
})



export const { addToCart, removeFromCart, increaseQuantity, decreaseQunatity } = cartSlice.actions;
export default cartSlice.reducer;