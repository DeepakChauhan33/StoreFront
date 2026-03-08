// Hooks
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';


// Components
import QuantityBtn from "../../Components/QuantityBtn";


// Actions
import { removeFromCart } from './CartSlice';

// React Icons
import { LuBox } from "react-icons/lu";
import { MdDelete } from "react-icons/md";


// Motion
import { motion } from 'framer-motion';


import { NavLink, useNavigate } from 'react-router-dom';



const CartPage = () => {

    const cart = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [orderMsg, setOrderMsg] = useState("No orders here—why not start shopping?");


    return (
        <section className=' p-2 py-4 '>


            {/* Heading and Desc */}
            <motion.div
                className='px-2'

                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className='text-2xl md:text-4xl font-black md:font-light'>Your Cart</h2>
                <p>Your cart have {cart.length} items</p>
            </motion.div>



            <motion.div
                className='min-h-96 flex justify-center items-center '

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
                            <div className='p-2 w-full flex flex-col lg:flex-row gap-6'>

                                {/* Products */}
                                <div className='w-full lg:w-[60%] flex flex-col gap-3 rounded-md p-2 '>
                                    {cart.map((item) => (
                                        <div className='flex  bg-gray-200/30 shadow-md gap-3 overflow-hidden'>


                                            {/* Image Div */}
                                            <div className='h-25 w-20 p-1'>
                                                <NavLink to={`/product/${item.id}`}>
                                                    <img src={item.image} alt={item.category} className='h-full w-full object-contain' />
                                                </NavLink>
                                            </div>

                                            {/* Product NAme and Quantity */}
                                            <div className='flex flex-1 justify-between p-2 gap-2 '>

                                                {/* Name and Price */}
                                                <div className='space-y-3'>
                                                    <p className='line-clamp-2 md:line-clamp-3 text-md md:text-lg font-semibold '>{item.title}</p>
                                                    <span className='text-xl font-black'>$ {item.price}</span>
                                                </div>

                                                {/* Quantity & Delete Button */}
                                                <div className=' flex flex-col justify-between items-end '>

                                                    <div className="min-w-26 ">
                                                        <QuantityBtn />
                                                    </div>

                                                    <button
                                                        className='text-2xl  text-red-300 hover:text-red-500 hover:scale-110 transition-transform duration-200 cursor-pointer'
                                                        onClick={() => dispatch(removeFromCart(item.id))}
                                                    >
                                                        <MdDelete />
                                                    </button>
                                                </div>
                                            </div>


                                        </div>
                                    ))}
                                </div>


                                {/* Bill Summary */}

                                <div className='p- border w-full lg:w-[40%] min-h-60 rounded-lg'>

                                    <h2>Order Smmary</h2>
                                </div>
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
