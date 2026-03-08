// Hooks
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';


// Components
import QuantityBtn from "../../Components/QuantityBtn";

// React Icons
import { LuBox } from "react-icons/lu";
import { MdDelete } from "react-icons/md";


// Motion
import { motion } from 'framer-motion';


import { useNavigate } from 'react-router-dom';
import { div } from 'framer-motion/client';

const CartPage = () => {

    const cart = useSelector((state) => state.cart.cart);

    const navigate = useNavigate();

    const [orderMsg, setOrderMsg] = useState("No orders here—why not start shopping?");


    return (
        <section className=' p-2 py-4'>

            <motion.div
                className='px-3'

                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className='text-4xl font-light'>Your Cart</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, autem!</p>
            </motion.div>


            <motion.div
                className='h-96 flex justify-center items-center '

                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}

            >


                {
                    cart.length === 0 ?
                        (<div className='flex flex-col justify-center items-center gap-4'>
                            <LuBox className='text-6xl  text-gray-400' />
                            <p className='text-lg md:text-3xl lg:text-5xl font-light'>{orderMsg}</p>

                            <button
                                onClick={() => navigate("/products")}
                                className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200'>
                                Shop Now
                            </button>

                        </div>)
                        :
                        (
                            <div className='bg-gray-100 p-2 w-full'>

                                {/* Products */}
                                <div className='flex flex-col gap-3'>
                                    {cart.map((item) => (
                                        <div className='flex border bg-white gap-3 '>


                                            {/* Image Div */}
                                            <div className='h-20 w-20'>
                                                <img src={item.image} alt={item.category} className='h-full w-full object-contain' />
                                            </div>

                                            {/* Product NAme and Quantity */}
                                            <div className='flex flex-1 justify-between p-2 gap-2 border'>

                                                {/* Name and Price */}
                                                <div className='space-y-3'>
                                                    <p className='line-clamp-2 md:line-clamp-3 text-sm md:text-lg font-bold '>{item.title}</p>
                                                    <span>{item.price}</span>
                                                </div>

                                                {/* Quantity & Delete Button */}
                                                <div className=' flex flex-col justify-between items-end '>

                                                    <div className="min-w-23 ">
                                                        <QuantityBtn />
                                                    </div>

                                                    <span className='text-2xl'>
                                                        <MdDelete />
                                                    </span>
                                                </div>
                                            </div>


                                        </div>
                                    ))}
                                </div>


                                {/* Bill Summary */}
                            </div>
                        )
                }



                {/* <div className='flex flex-col justify-center items-center gap-4'>
                    <LuBox className='text-6xl  text-gray-400' />
                    <p className='text-lg md:text-3xl lg:text-5xl font-light'>{orderMsg}</p>

                    <button
                        onClick={() => navigate("/products")}
                        className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200'>
                        Shop Now
                    </button>

                    <div>
                        {
                            cart.length === 0 ? (
                                <p className="text-gray-500">Your cart is empty</p>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="border p-3 rounded-md w-72">
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p>${item.price}</p>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div> */}
            </motion.div>
        </section>
    )

}

export default CartPage
