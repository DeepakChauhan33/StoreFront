import {createSlice} from "@reduxjs/toolkit";

const initState = {
    wishlist: []
}


const wishlistSlice = createSlice({

    name  : "wislist",
    initialState : initState,

    reducers : {

        addToWishlist : (state, action)=>{
            state.wishlist.push(action.payload);
        },


        removeFromWishlist : (state, action)=>{
            
        },


        toggleWishlist : ()=>{
            
        }
    }
})