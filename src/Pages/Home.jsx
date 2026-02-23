import React from 'react'

// React ICons
import { TiArrowRight } from "react-icons/ti";

const Home = () => {
    return (
        <>
            <div
                className=' h-screen flex justify-center items-center space-y-10 
                        bg-[url("https://i.pinimg.com/1200x/09/ab/dd/09abdd904702ef068837a7ac010e926b.jpg")]  bg-cover bg-no-repeat bg-center'>

                <div className='flex flex-col justify-center items-center space-y-10 border border-gray-200 rounded-lg p-4 md:p-6 lg:p-8 xl:p-10 bg-white/10 backdrop-blur-xs'>

                    <h2 className="text-3xl xl:text-7xl text-gray-800 font-bold text-center mt-30">Welcome to StoreMart</h2>

                    <div className='text-center'>
                        <p className='text-sm xl:text-lg font-medium text-white'>
                            Discover an amazing collection of products at unbeatable prices. <br />
                            Shop your favorite categories and enjoy fast, reliable delivery.
                        </p>
                    </div>


                    <div className='flex gap-3'>
                        <button className='p-2 px-4 bg-black text-white rounded-md hover:text-black hover:bg-white transition transform hover:scale-105 duration-300'>
                            Shop Now <TiArrowRight size={22} className='inline' />
                        </button>

                        <button className='p-2 text-black border border-gray-200 rounded-md'>
                            Learn More
                        </button>
                    </div>

                </div>



            </div>

            <div className='h-50'>
                56
            </div>

        </>
    )
}

export default Home
