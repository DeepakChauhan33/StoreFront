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
import { div } from 'framer-motion/client';



const CartPage = () => {

    const cart = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [orderMsg, setOrderMsg] = useState("No orders here—why not start shopping?");


    return (
        <section className=' p-2 py-4 '>


            {/* ================= HEADING AND ITEMS COUNT================= */}
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

                <div className='w-full'>

                    {
                        cart.length === 0 ?


                            {/* ================= IF NO PRODUCT IN THE CART THEN THIS WILL DISPLAY ================= */ }

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

                                <div className='flex flex-col lg:flex-row gap-8 '>

                                    {/* Cart for Mobile */}

                                    <div className="block sm:hidden w-full space-y-4">

                                        {cart.map((item) => (
                                            <div className='flex  bg-gray-200/30 shadow-md gap-3 overflow-hidden'>


                                                {/* Image Div */}
                                                <div className='h-auto w-20 md:w-25 p-1'>
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
                                                    <div className=' flex flex-col justify-between items-end gap-3 '>

                                                        <div className="min-w-26 flex justify-end ">
                                                            <QuantityBtn />
                                                        </div>

                                                        <div>
                                                            <p className='text-sm font-normal'>sub total</p>
                                                            <span className='text-md font-black'>${item.price}</span>
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




                                    {/*  Cart larger screens greater than sm */}
                                    <div className="hidden sm:block p-3 w-full lg:w-[60%] border">
                                        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">

                                            <thead className="bg-gray-300 text-gray-700 text-sm uppercase py-2">
                                                <tr>
                                                    <th className="text-left px-6 py-3">Product</th>
                                                    <th className="text-left px-6 py-3">Quantity</th>
                                                    <th className="text-left px-6 py-3">Price</th>
                                                    <th className="text-left px-6 py-3">Remove</th>
                                                </tr>
                                            </thead>

                                            <tbody className="text-gray-700">

                                                {cart.map((item) =>
                                                (
                                                    <tr key={item.id}
                                                        className="shadow-[0_2px_4px_rgba(0,0,0,0.1)]  hover:bg-gray-100/60 transition-colors duration-200">

                                                        <td className="w-[40%] group  px-6 py-4 font-medium cursor-pointer" title="product details">
                                                            <NavLink to={`/product/${item.id}`} >
                                                                {<div className='flex justify-start gap-2 items-center'>

                                                                    <img src={item.image} alt={item.category} className='h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-108' />
                                                                    <span>{item.title}</span>

                                                                </div>}
                                                            </NavLink>
                                                        </td>


                                                        <td className="px-6 py-4">
                                                            <QuantityBtn />
                                                        </td>


                                                        <td className="px-6 py-4 ">
                                                            ${item.price.toFixed(2)}
                                                        </td>

                                                        <td className="px-6 py-4  ">
                                                            <button
                                                                className='text-2xl  text-red-300 hover:text-red-500 hover:scale-110 transition-transform duration-200 cursor-pointer'
                                                                onClick={() => dispatch(removeFromCart(item.id))}
                                                            >
                                                                <MdDelete />
                                                            </button>
                                                        </td>



                                                    </tr>
                                                ))}

                                            </tbody>

                                        </table>


                                    </div>


                                    {/* Bill Summary */}

                                    <div className='p-4 border w-full lg:w-[40%] min-h-60 rounded-lg'>

                                        <h2 className='text-xl font-semibold mb-3'>Order Smmary</h2>


                                        <div className='p-0.5 md:p-2 '>

                                            <div className='flex justify-between items-center gap-3 lg:gap-6 mb-5 '>
                                                <input type="text" placeholder='Discount voucher' className='flex-1 border p-1.5 lg:p-2.5 rounded-3xl uppercase' />
                                                <button className='border rounded-3xl px-3.5 py-1.5 text-md font-light cursor-pointer hover:bg-black hover:text-white transition-colors duration-200 ease-in-out'>Apply</button>
                                            </div>

                                            {/* Price Details */}
                                            <div className="space-y-2 text-sm">

                                                <div className="flex justify-between">
                                                    <span>Sub Total</span>
                                                    <span className="font-medium">$2000</span>
                                                </div>

                                                <div className="flex justify-between text-green-600">
                                                    <span>Discount (10%)</span>
                                                    <span>- $200</span>
                                                </div>

                                                <div className="flex justify-between">
                                                    <span>Delivery fee</span>
                                                    <span>$50</span>
                                                </div>

                                            </div>

                                            {/* Divider */}
                                            <hr className="my-4" />

                                            {/* Total */}
                                            <div className="flex justify-between text-lg font-semibold mb-4">
                                                <span>Total</span>
                                                <span>$1850</span>
                                            </div>

                                            {/* Checkout & Shoping Btn */}
                                            <div className='space-y-3'>
                                                <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-900  ">Checkout Now</button>
                                                <button className="w-full bg-gray-50 border text-black py-3 rounded-full ">Continue shopping</button>
                                            </div>


                                        </div>
                                    </div>
                                </div>





                            )
                    }


                </div>



            </motion.div>
        </section >
    )

}

export default CartPage


