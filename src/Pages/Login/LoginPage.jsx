
import React from 'react'

// HOOKS
import { useSelector } from 'react-redux';



// Components
import LoginForm from './LoginForm';


// ICONS
import { CgProfile } from "react-icons/cg";
import UserPage from './UserPage';
import { div } from 'framer-motion/client';


const LoginPage = () => {

    const isLogin = useSelector((state) => state.auth.isLogin)
    return (

        <section className='bg-gray-100  flex flex-col justify-center items-center px-3 py-10  '>

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
