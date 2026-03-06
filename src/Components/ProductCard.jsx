import React from 'react'

// Hooks
import { useDispatch, useSelector } from 'react-redux';


// Actions
import { addToWishlist } from '../Pages/Wishlist/WishlistSlice';

// Motion
import { motion } from 'framer-motion';

// React Icons
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

// Component
import ButtonComp from './ButtonComp';
import { NavLink } from 'react-router-dom';


const ProductCard = ({ product }) => {
    // console.log(product)

    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist.wishlist);


    function handleWishlist() {
        dispatch(addToWishlist(product));
        // console.log(wishlist);
    }



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

        <motion.div

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}

            className='flex flex-col justify-between rounded-lg border shadow-md border-gray-200 min-h-[450px] p-2 pb-4 space-y-2.5 overflow-hidden'
            id={product.id}>



            {/* Image Div */}

            <div className='relative h-70 w-full rounded-lg overflow-hidden mb-5 '>
                <NavLink to={`/product/` + product.id}>
                    <img src={product.image} alt={product.title} className='h-full w-full bg-gray-200 p-3 object-contain ' />
                </NavLink>

                <button className=' absolute top-2 right-2  bg-white p-2 rounded-full hover:scale-107 transition-transform duration-200'
                    onClick={() => handleWishlist()}
                >
                    <FaRegHeart className='text-lg md:text-xl ' />
                </button>


            </div>




            {/* Product Name */}

            <span className='text-lg text-gray-800 font-semibold cursor-pointer'>
                <NavLink to={`/product/` + product.id}>
                    {product.title}
                </NavLink>
            </span>


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
                <p className='text-2xl lg:text-[2vw]  font-extrabold'>${product.price}</p>


                {/*Add to Cart Button */}
                <ButtonComp width={"w-[50%]"}><IoCartOutline className='inline ' /> Add to cart</ButtonComp>


            </div>


        </motion.div >
    )
}

export default ProductCard
