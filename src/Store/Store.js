import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Pages/Product/ProductSlice";
import { ProductApi } from "../Pages/Product/ProductApi";
import wishlistReducer from "../Pages/Wishlist/WishlistSlice";
import cartReducer from "../Pages/Cart/CartSlice";

const Store = configureStore({
    reducer: {
        products: productReducer,
        [ProductApi.reducerPath]: ProductApi.reducer,
        wishlist: wishlistReducer,
        cart: cartReducer,

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProductApi.middleware)
})


export default Store;