import { section } from 'framer-motion/client'
import React from 'react'


// Components
import LoginForm from './LoginForm';

const LoginPage = () => {


    return (

        <section className='bg-gray-100 h-fit  py-14 flex flex-col justify-center items-center p-8'>



            <div className='w-full lg:w-[50%] p-4 bg-white rounded-xl shadow-xl '>


                <div className='space-y-2 md:space-y-4 mb-4 md:mb-6 lg:mb-10 px-2'>
                    <h2 className='text-xl md:text-2xl lg:text-4xl font-bold'>Welcome back</h2>
                    <p className='text-sm md:text-lg lg:text-xl '>Welcome back! Please enter your details</p>
                </div>



                <LoginForm />

            </div>
        </section>
    )
}

export default LoginPage
