import { div } from 'framer-motion/client';
import React from 'react'

import { animate, motion } from 'framer-motion';

const Categories = ({ product }) => {



    return (


        <div className='grid grid-cols-2  items-center justify-items-center gap-4 hover:opacity-15'>


            {/* Overlay Text */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-center px-3"
                initial={{ opacity: 0, y: -30 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <h2 className="text-xl font-semibold text-gray-800">
                    Men's Wear
                </h2>
            </motion.div>


            {product?.slice(0, 4).map((item) => {
                return <div className='h-auto bg-white rounded-2xl  '>
                    <div className='h-40 p-2 shadow-lg'>
                        <img src={item.image} alt={item.title} className='object-contain h-full' />
                    </div>
                </div>
            })}
        </div>
    )
}

export default Categories
