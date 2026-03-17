import React, { useState } from 'react'


// Component
import ButtonComp from "../../Components/ButtonComp";



// React Icons
import { LuBox } from "react-icons/lu";
import { FaBox } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";


// Action
import { clearOrder } from './orderSlice';


// Motion
import { motion } from 'framer-motion';

// Hooks
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const OrderPage = () => {


  const orders = useSelector((state) => state.orders.orders);



  const [orderMsg, setOrderMsg] = useState("No orders here—why not start shopping?");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <section className=' p-2 py-4  '>

      <motion.div
        className='p-2 py-4 space-y-2 bg-linear-to-r from-blue-50 via-blue-100 to-blue-200'

        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-4xl font-light'>My Orders</h2>
        <p>You have {orders.length} orders</p>
      </motion.div>





      <motion.div className='h-auto w-full p-3 gap-y-6'

        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {orders.length === 0 ?
          (
            <div className='h-98 flex flex-col justify-center items-center gap-4 '>
              <LuBox className="text-7xl lg:text-8xl text-gray-400" />
              <p className="text-md md:text-xl lg:text-3xl font-light">
                {orderMsg}
              </p>

              <button
                onClick={() => navigate("/products")}
                className="bg-gray-800 text-white text-sm lg:text-lg px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                Shop Now

              </button>
            </div>
          )
          :
          (
            <div className='h-auto flex flex-col gap-4 rounded-lg overflow-hidden mt-6 '>

              {orders.map((order) => (
                <div key={order.id}  >

                  <div className='flex justify-between bg-gray-100 px-1.5 py-2 lg:px-6 lg:py-2.5 text-sm  md:text-md lg:text-lg'>
                    {/* Order ID */}
                    <div className='flex flex-col justify-center items-center lg:items-start gap-3 p-2 lg:p-3'>
                      <FaBox />
                      <p>ID : {order.id}</p>
                    </div>

                    {/* Order Date */}
                    <div className='flex flex-col justify-center items-center lg:items-start gap-3 p-2 lg:p-3'>
                      <FaRegCalendarAlt />
                      <p>{order.date}</p>
                    </div>

                    <div className='flex flex-col justify-center items-center lg:items-start gap-3 p-2 lg:p-3' title='Total amount'>
                      {/* Order Total */}
                      <FaDollarSign />
                      <p className='font-bold'>{(order.total + 50).toFixed(2)}</p>
                    </div>
                  </div>

                  <div className='p-3'>
                    <p className='text-md font-semibold mb-3'>Order items</p>
                    {order.products.map((item) => (
                      <div className='flex justify-between space-y-4'>
                        <div className='w-[70%] '>
                          <p className='text-sm'>{item.title}</p>
                          <p className='text-sm font-medium text-gray-600'>Qty : {item.quantity}</p>

                        </div>

                        <div className='text-end'>
                          <p className='text-sm'>${item.price}</p>
                          <p className='text-sm font-normal text-gray-600'>sub total : {(item.price * item.quantity).toFixed(2)}</p>

                        </div>

                      </div>
                    ))}
                  </div>

                  <div className='flex justify-between p-2 lg:p-3.5 lg:px-5 bg-gray-200'>
                    <span className=' p-2 hover:underline'>View Details</span>
                    <button
                      className='shadow-md rounded-md px-2 lg:px-3 py-1 text-sm  bg-white cursor-pointer transition-transform hover:scale-101'
                      onClick={() => (navigate("/products"))}>order again</button>
                  </div>

                </div>


              ))}


              <div className=' flex justify-center items-center mt-5'>
                <button className=' bg-black text-sm text-white px-2 py-3 lg:px-4 lg:py-3 rounded-sm hover:bg-gray-800' onClick={() => dispatch(clearOrder())}>Clear order</button>
              </div>


            </div>




          )


        }


      </motion.div>
    </section>
  )
}

export default OrderPage
