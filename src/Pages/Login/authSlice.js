import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isLogin: false,
}


const authSlice = createSlice({

    name: "auth",
    initialState: initState,

    reducers: {

        login: (state, action) => {
            state.isLogin = action.payload;
        },

        logout: (state, action) => {
            state.isLogin = action.payload;
        }
    }
})



export const { login, logout } = authSlice.actions;
export default authSlice.reducer;