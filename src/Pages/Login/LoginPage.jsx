
import React from 'react'

// HOOKS
import { useSelector } from 'react-redux';



// Components
import LoginForm from './LoginForm';



const LoginPage = () => {

    const isLogin = useSelector((state) => state.auth.isLogin)
    return (

        <section className='bg-gray-100 h-fit  py-14 flex flex-col justify-center items-center p-8'>

            {isLogin ?
                (
                    <div className='w-full -m-8  h-screen border
                    bg-[url("https://www.pngall.com/wp-content/uploads/19/Ecommerce-Website-Seasonal-Discount-Banner-PNG.png")]  bg-cover bg-no-repeat bg-center'>

                    </div>
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
