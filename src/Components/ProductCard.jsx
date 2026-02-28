import React from 'react'

import { CiHeart } from "react-icons/ci";

const ProductCard = ({ product }) => {
    // console.log(product)

    function handleRating(rate) {
        let rateStar = "";

        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rate)) {
                rateStar += "★ ";
            } else {
                rateStar += "☆ ";
            }
        }
        return rateStar;
    }

    return (
        <div className='border p-1.5 flex flex-col items-start justify-between rounded-xl '>

            {/* Product IMage */}
            <div className='relative h-60 w-full rounded-xl overflow-hidden flex items-center justify-center py-2 bg-gray-200 '>

                {/* Image */}
                <img
                    className='h-full  object-contain overflow-hidden hover:scale-105 transition duration-400 ease-initial'
                    src={product.image} alt={product.title}
                />

                {/* Wishlist Icon */}
                <button className='absolute top-2 right-3 text-3xl  rounded-full p-1 bg-white shadow-md'>
                    <CiHeart className='' />
                </button>
            </div>


            {/* Product Info */}

            <div className='w-full h-fit flex flex-col justify-around space-y-2 px-2 mt-4 '>

                {/* Product Title */}
                <p className='text-lg font-semibold'>
                    {product.title}

                </p>


                {/* Product Rating */}
                <div className='w-full'>
                    <span className=' text-amber-300 text-xl font-semibold'>{`${handleRating(product.rating.rate)}`}</span>
                    <span className='text-lg'>{`(${product.rating.count})`}</span>

                </div>


                <div className='flex justify-between w-full  '>
                    <p className='text-2xl lg:text-3xl font-extrabold'>
                        {`$${product.price}`}
                    </p>

                    <button className='  text-white px-4 py-2 rounded-sm bg-gray-800'>
                        Add to cart
                    </button>
                </div>

            </div>

        </div >
    )
}

export default ProductCard
