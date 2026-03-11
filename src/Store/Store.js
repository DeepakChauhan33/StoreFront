import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Pages/Product/ProductSlice";
import { ProductApi } from "../Pages/Product/ProductApi";
import wishlistReducer from "../Pages/Wishlist/WishlistSlice";
import cartReducer from "../Pages/Cart/CartSlice";
import authSlice from "../Pages/Login/authSlice"

const Store = configureStore({
    reducer: {
        products: productReducer,
        [ProductApi.reducerPath]: ProductApi.reducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
        auth: authSlice


    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProductApi.middleware)
})


export default Store;