import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Pages/Product/ProductSlice";
import { ProductApi } from "../Pages/Product/ProductApi";
import wishlistReducer from "../Pages/Wishlist/WishlistSlice";
import cartReducer from "../Pages/Cart/CartSlice";
import authReducer from "../Pages/Login/authSlice";
import orderReducer from "../Pages/Order/orderSlice";


const Store = configureStore({
    reducer: {
        products: productReducer,
        [ProductApi.reducerPath]: ProductApi.reducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
        auth: authReducer,
        orders: orderReducer,


    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProductApi.middleware)
})


export default Store;