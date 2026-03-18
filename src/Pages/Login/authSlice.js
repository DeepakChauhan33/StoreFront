import { createSlice } from "@reduxjs/toolkit";

const initState = {
    loginDetails: [],
    isLogin: false,
}


const authSlice = createSlice({

    name: "auth",
    initialState: initState,

    reducers: {

        userDetails: (state, action) => {
            state.loginDetails.push(action.payload);
        },


        login: (state, action) => {
            state.isLogin = action.payload;
        },


        logout: (state, action) => {
            state.isLogin = action.payload;
        }
    }
})



export const { login, logout, userDetails } = authSlice.actions;
export default authSlice.reducer;