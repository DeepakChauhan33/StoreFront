
// Hooks
import { useSelector } from 'react-redux';
import React, { useState } from "react";

// Reac Icons
import { FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";



// LOGO
import logo from '../Images/logo.jpg'
import logo2 from "../Images/logo2.png";


// Motion
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";


const Navbar = () => {

    const isLogin = useSelector((state) => state.auth.isLogin);

    const wishlist = useSelector((state) => state.wishlist.wishlist);
    const wishlistCount = wishlist.length;

    const cart = useSelector((state) => state.cart.cart);
    const cartCount = cart.length;

    return (
        <nav className="w-full bg-white  opacity-90   drop-shadow-lg fixed top-0 left-0 z-50">
            <div className=" mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18">


                    {/* Logo */}
                    <motion.div

                        className="p-1 flex items-center cursor-pointer border-2 border-transparent  hover:border-2 hover:border-purple-700"

                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <NavLink to="/">
                            {/* <span className="text-black">Store</span>
                            <span className="text-purple-700">Mart</span> */}
                            <img src={logo2} alt="logo" className='h-14 w-30 object-cover  ' />
                        </NavLink>
                    </motion.div>



                    <div className="hidden h-full  md:flex space-x-9 text-lg text-gray-900 font-bold">

                        <NavLink to="/" className="h-full flex justify-center px-2 items-center border-b-3 border-transparent  hover:border-b-3 hover:border-purple-700  hover:text-purple-700 transition transform hover:scale-100  ease-in-out duration-400">
                            Home
                        </NavLink>


                        <NavLink to="/products" className="h-full flex justify-center px-2 items-center border-b-3 border-transparent  hover:border-b-3 hover:border-purple-700  hover:text-purple-700 transition transform hover:scale-100  ease-in-out duration-400">
                            Products
                        </NavLink>


                        <NavLink to="/orders" className="h-full flex justify-center px-2 items-center border-b-3 border-transparent  hover:border-b-3 hover:border-purple-700  hover:text-purple-700 transition transform hover:scale-100  ease-in-out duration-400">
                            Orders
                        </NavLink>


                        <NavLink to="/cart" className="relative h-full flex justify-center px-2 items-center border-b-3 border-transparent  hover:border-b-3 hover:border-purple-700  hover:text-purple-700 transition transform hover:scale-100  ease-in-out duration-400">
                            <span className=' min-w-19'>Cart({cartCount})</span>

                        </NavLink>



                    </div>


                    <div className="flex items-center gap space-x-4 md:xl:space-x-6">


                        <NavLink to="/search">
                            <div className="cursor-pointer p-2 hover:bg-black hover:text-white rounded-lg  transition transform hover:scale-110 ease-in-out duration-300" >
                                <BsSearch size={20} />
                            </div>
                        </NavLink>


                        <NavLink to="/wishlist">
                            <div className="relative cursor-pointer p-2 hover:bg-black hover:text-white rounded-lg  transition transform hover:scale-110 ease-in-out duration-300" title="Wishlist" >

                                <FiHeart size={20} />
                                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1.5 text-xs font-normal leading-none text-white bg-red-600 rounded-full">{wishlistCount}</span>
                            </div>
                        </NavLink>




                        <div className={`hidden md:block relative cursor-pointer p-2  }`} title="Profile">
                            <NavLink to="/login">
                                <CgProfile size={26} className={`${isLogin ? 'text-purple-600' : 'text-gray-900'}`} />
                            </NavLink>
                        </div>





                    </div>
                </div>
            </div>


            {/* {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-700">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/orders">Orders</NavLink>
                    </div>




                </div>


            )} */}



        </nav>
    );
};

export default Navbar;