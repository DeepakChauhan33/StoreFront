
import React from 'react'

// HOOKS
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';





// Components
import LoginForm from './LoginForm';
import UserPage from './UserPage';


// ICONS
import { CgProfile } from "react-icons/cg";




// ACTIONS
import { login, logout, userDetails } from './authSlice';

// Functions
import { getLocalStorage } from '../../Utils/localStorage';


const LoginPage = () => {

    const isLogin = useSelector((state) => state.auth.isLogin)

    const dispatch = useDispatch();


    useEffect(() => {

        const storeUser = getLocalStorage("user");

        if (storeUser) {
            dispatch(login(true));
        }
    }, [])


    return (

        <section
            className={`bg-gray-100 h-fit flex flex-col justify-center items-center ${isLogin ? " " : "px-4 py-14"}  `} >

            {isLogin ?
                (
                    <UserPage />
                )

                :

                (
                    <LoginForm />
                )

            }


        </section>
    )
}

export default LoginPage
