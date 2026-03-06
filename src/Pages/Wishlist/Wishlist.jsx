import React, { useEffect } from 'react'

// Hooks
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Motion
import { motion } from 'framer-motion';

// React Icons
import { LuBox } from "react-icons/lu";
import { div } from 'framer-motion/client';
import ButtonComp from '../../Components/ButtonComp';

const Wishlist = () => {

  const navigate = useNavigate();

  const wishlist = useSelector((state) => state.wishlist.wishlist);

  // useEffect(() => {
  //   console.log(wishlist);
  // }, [wishlist]);

  return (
    <section className=' p-2 py-4'>

      <motion.div
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

          <div>

            <table className='border w-full '>
              <thead className=''>
                <tr>
                  <th className='text-left p-2 border-b'>Product</th>
                  <th className='text-left p-2 border-b'>Price</th>
                  <th className='text-left p-2 border-b'>Stock Status</th>
                  <th className='text-left p-2 border-b'>Action</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((item) => (
                  <tr key={item.id}>
                    <td className='p-2 border-b cursor-pointer'>{item.title}</td>
                    <td className='p-2 border-b '>$ {item.price.toFixed(2)}</td>
                    <td className='p-2 border-b '>In Stock</td>
                    <td className='p-2 border-b  flex'>
                      <ButtonComp width={"w-30"} onClick={() => navigate(`/product/${item.id}`)}>
                        Add to cart
                      </ButtonComp>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}
      </div>
    </section>
  )
}

export default Wishlist
