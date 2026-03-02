import React from 'react'



// React Icons
import { FaRegHeart } from "react-icons/fa";

// Component
import ButtonComp from './ButtonComp';
import { NavLink } from 'react-router-dom';


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

        <div
            className='flex flex-col justify-between rounded-lg border shadow-md border-gray-200 min-h-[450px] p-2 pb-4 space-y-3 overflow-hidden'
            id={product.id}>



            {/* Image Div */}

            <div className='relative h-70 w-full rounded-lg overflow-hidden mb-5 '>
                <NavLink to={`/product/` + product.id}>
                    <img src={product.image} alt={product.title} className='h-full w-full bg-gray-200 p-3 object-contain' />
                </NavLink>

                <button className=' absolute top-2 right-2  bg-white p-2 rounded-full hover:scale-105 transition-transform duration-200 '>
                    <FaRegHeart className='text-lg md:text-xl ' />
                </button>


            </div>




            {/* Product Name */}
            <span className='text-lg text-gray-800 font-bold '>{product.title}</span>

            {/* Product Rating*/}
            <div className='flex justify-between items-center  text-sm text-gray-700 font-[700]'>
                <span>{`Rating : ${handleRating(product.rating.rate)} `}</span>
                <span>{`Reviews : ${product.rating.count}`}</span>
            </div>

            {/* Product Description */}
            <div className='text-sm'>
                <p className='line-clamp-3'>{product.description}</p>
            </div>


            {/* Div contain product price and button */}
            <div className='flex  justify-between mt-2 '>

                {/* Product Price */}
                <p className='text-2xl lg:text-3xl  font-extrabold'>${product.price}</p>


                {/*Add to Cart Button */}
                <ButtonComp width={"w-[50%]"}>Add to cart</ButtonComp>


            </div>


        </div>
    )
}

export default ProductCard
