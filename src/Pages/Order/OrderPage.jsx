import React, { useState } from 'react'

// React Icons
import { LuBox } from "react-icons/lu";


// Motion
import { motion } from 'framer-motion';

// Hooks
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const OrderPage = () => {


  const orders = useSelector((state) => state.orders.orders);
  console.log(orders)
  const [orderMsg, setOrderMsg] = useState("No orders here—why not start shopping?");

  const navigate = useNavigate();
  return (
    <section className=' p-2 py-4'>

      <motion.div
        className='px-3'

        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-4xl font-light'>My Orders</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, autem!</p>
      </motion.div>


      <motion.div
        className='h-96 flex justify-center items-center '

        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}

      >
        <div className='flex flex-col justify-center items-center gap-4'>
          <LuBox className='text-7xl text-gray-400' />
          <p className='text-xl font-light'>{orderMsg}</p>

          <button
            onClick={() => navigate("/products")}
            className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200'>
            Shop Now

          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default OrderPage
