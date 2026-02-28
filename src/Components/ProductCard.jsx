import React from 'react'

const ProductCard = ({ product }) => {
    console.log(product)

    function handleRating(rate) {
        let rateStar = "";

        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rate)) {
                rateStar += "★";
            } else {
                rateStar += "☆";
            }
        }
        return rateStar;
    }

    return (
        <div className='border p-2 flex flex-col items-center rounded-xl gap-y-5 '>

            {/* Product IMage */}
            <div className='h-60 md:h-70 w-full flex items-center justify-center py-2 bg-gray-200 '>
                <img
                    className='h-full  object-contain hover:scale-105 transition duration-400 ease-initial'
                    src={product.image} alt={product.title} />
            </div>


            {/* Product Info */}

            <div className=' w-full'>

                {/* Product Title */}
                <p className='text-lg font-semibold'>
                    {product.title}

                </p>


                {/* Product Rating */}
                <p className='text-amber-300'>
                    {`${handleRating(product.rating.rate)}`}
                </p>


                <p className='text-lg font-semibold'>
                    {`$${product.price}`}

                </p>


            </div>
        </div>
    )
}

export default ProductCard
