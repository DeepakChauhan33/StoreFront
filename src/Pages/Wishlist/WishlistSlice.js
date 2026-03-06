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

        },


        toggleWishlist: () => {

        }
    }
})



export const { addToWishlist, removeFromWishlist, toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;