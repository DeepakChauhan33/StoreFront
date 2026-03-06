import React, { useEffect } from 'react'

// Components
import ButtonComp from '../../Components/ButtonComp';

// Hooks
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

// Motion
import { motion } from 'framer-motion';

// React Icons
import { LuBox } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { div } from 'framer-motion/client';


const Wishlist = () => {

  const navigate = useNavigate();

  const wishlist = useSelector((state) => state.wishlist.wishlist);

  // useEffect(() => {
  //   console.log(wishlist);
  // }, [wishlist]);

  return (
    <section className=' py-4 p-3'>

      <motion.div className='flex flex-col items-start p-2 gap-2 mb-6'

        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-4xl font-light'>My Wishlist</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, autem!</p>
      </motion.div>

      <div>
        {wishlist.length === 0 ? (
          <motion.div
            className='h-96 flex justify-center items-center border'

            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}

          >
            <div className='flex flex-col justify-center items-center gap-4'>
              <LuBox className='text-7xl text-gray-400' />
              <p>No items in your wishlist</p>

              <button
                onClick={() => navigate("/products")}
                className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200'>
                Shop Now
              </button>
            </div>
          </motion.div>
        ) : (



          <>
            {/* Wishlist for Mobile */}
            <div className="block sm:hidden p-3 space-y-4">

              {wishlist.map((item) => (
                <div className='flex shadow-sm bg-gray-100 py-4 p-2 rounded-lg gap-3' key={item.id}>
                  {/* Image */}
                  <div className='h-40 w-50 p-3 bg-gray-200'>
                    <img src={item.image} alt={item.category} className='h-full w-full object-contain' />
                  </div>

                  {/* Details */}
                  <div className='w-full flex flex-col justify-between p-3 gap-2'>

                    {/* Product Title */}
                    <p className='text-xl font-semibold'>{item.title}</p>

                    <p>{item.price}</p>

                    <ButtonComp width={"w-full cursor-pointer"} >Add to cart</ButtonComp>
                  </div>
                </div>
              ))}

            </div>
            {/*  Wishlist larger screens greater than sm */}
            <div className="hidden sm:block p-3">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">

                <thead className="bg-gray-300 text-gray-700 text-sm uppercase py-2">
                  <tr>
                    <th className="text-left px-6 py-3">Product</th>
                    <th className="text-left px-6 py-3">Price</th>
                    <th className="hidden md:block text-left px-6 py-3">Stock Status</th>
                    <th className="text-left px-6 py-3">Action</th>
                    <th className="text-left px-6 py-3">Remove</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">

                  {wishlist.map((item) =>
                  (
                    <tr key={item.id}
                      className="shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-gray-100/60 transition-colors duration-200">

                      <td className="w-[40%] group  px-6 py-4 font-medium cursor-pointer" title="product details">
                        <NavLink to={`/product/${item.id}`} className="flex items-center gap-3">
                          {<div className='flex justify-start gap-2 items-center'>

                            <img src={item.image} alt={item.category} className='h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-106' />
                            <span>{item.title}</span>

                          </div>}
                        </NavLink>
                      </td>

                      <td className="px-6 py-4">
                        ${item.price.toFixed(2)}
                      </td>

                      <td className="hidden md:block px-6 py-4  ">
                        <span className="text-green-600 font-normal">
                          In Stock
                        </span>
                      </td>

                      <td>
                        <ButtonComp
                          width={"w-32 cursor-pointer"}
                          onClick={() => navigate(`/product/${item.id}`)}
                        >
                          Add to Cart
                        </ButtonComp>
                      </td>


                      <td className="px-6 py-4">
                        <button
                          className="  hover:bg-red-200 rounded-full transition-colors duration-200"
                          onClick={() => console.log("Remove from wishlist")}
                        >
                          <IoIosClose className='text-3xl text-gray-400 hover:text-red-500 hover:scale-110 transition-transform duration-200 ' />
                        </button>
                      </td>



                    </tr>
                  ))}

                </tbody>

              </table>
            </div></>
        )}
      </div>
    </section>
  )
}

export default Wishlist
