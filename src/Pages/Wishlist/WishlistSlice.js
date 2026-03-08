import { createSlice } from "@reduxjs/toolkit";

const initState = {
    wishlist: []
}


const wishlistSlice = createSlice({

    name: "wishlist",
    initialState: initState,

    reducers: {

        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload);
        },


        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload)
        },


        toggleWishlist: (state, action) => {

            const product = action.payload;

            const exist = state.wishlist.find((item) => item.id === product.id);

            if (exist) {
                state.wishlist = state.wishlist.filter((item) => item.id !== product.id)
            } else {
                state.wishlist.push(product)
            }
        }
    }
})



export const { addToWishlist, removeFromWishlist, toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;