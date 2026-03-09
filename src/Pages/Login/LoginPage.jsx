import { section } from 'framer-motion/client'
import React from 'react'

const LoginPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(456)
    }
    return (

        <section className='h-fit flex justify-center items-center p-4'>
            <form className='w-full md:w-[60%] border rounded-xl p-4 space-y-6'
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Name' className='px-2 py-3 border' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Name' className='px-2 py-3 border' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Name' className='px-2 py-3 border' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Name' className='px-2 py-3 border' />
                </div>

                <button className='border w-full py-2.5 rounded-md'>
                    Submit
                </button>
            </form>
        </section>
    )
}

export default LoginPage
