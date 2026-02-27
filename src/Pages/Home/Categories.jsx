import { div } from 'framer-motion/client';
import React from 'react'

import { animate, motion } from 'framer-motion';

const Categories = ({ product, heading }) => {


    return (


        <div className='text-start md:text-center cursor-pointer'>


            <motion.h2 className='text-xl font-bold mb-4'
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true, amount: 0.3 }}

            >{heading}</motion.h2>


            <div className=' grid grid-cols-2 grid-rows-2 justify-items-center gap-4'>
                {product?.slice(0, 4).map((item) => {
                    return <div id={product.id} className='h-auto bg-white rounded-2xl  '>
                        <div className='h-[30vw] w-auto   md:h-40 p-2 shadow-lg'>
                            <img src={item.image} alt={item.title} className='object-contain h-full w-full' />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Categories
