// Hooks
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

// Actions
import { addToWishlist } from '../Wishlist/WishlistSlice';


// Components
import QuantityBtn from '../../Components/QuantityBtn';
import ButtonComp from '../../Components/ButtonComp';
import ProductCard from '../../Components/ProductCard';


// React Icons
import { FaShield } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { RiCashLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";


// Custom Hooks
import { useGetDynamicProductQuery, useGetProductsQuery } from '../Product/ProductApi';


const ProductsPage = () => {


    const { id } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { data: product, isLoading } = useGetDynamicProductQuery(id);
    const { data: allProducts } = useGetProductsQuery();

    if (isLoading) return <p>Loading...</p>;








    // Handle Add to Wishlist  
    function handleWishlist() {
        dispatch(addToWishlist(product));
        // console.log(wishlist);
    }





    const handleClick = () => {
        navigate(-1);
    }



    // Copy Product Link
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert("URL copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };


    // Calculate 10% increase in price
    function plusPercentageValue(num) {
        return 0.1 * num + num;
    }

    // Warranty information based on category
    function warrantyInfo(category) {
        if (category === "electronics") {
            return "2 years warranty";
        } else if (category === "jewelery") {
            return "1 year warranty";
        } else if (
            category === "men's clothing" ||
            category === "women's clothing"
        ) {
            return "6 month warranty";
        } else {
            return "No warranty information available";
        }
    }




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



    function relatedProducts() {
        if (!allProducts || !product) return [];

        return allProducts.filter(
            (item) =>
                item.category === product.category &&
                item.id !== product.id
        );
    }





    return (
        <>

            <section className="bg-gray-100/30   flex flex-col p-2 md:p-5 ">

                <div className='hidden md:block space-x-2'>
                    <button onClick={handleClick} className=' p-1.5 cursor-pointer rounded-full hover:bg-gray-200'>
                        <BsArrowLeft className='inline-block text-3xl font-light ' />
                    </button>

                    <span className='text-lg font-medium'>Back to home</span>
                </div>

                <div className='flex flex-col md:flex-row items-start mt-3 space-x-4 '>

                    {/* Product Image Container */}
                    <div className="relative  w-full  md:w-[45%] rounded-lg overflow-hidden mb-5 ">


                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-90 md:h-full md:min-h-100 object-contain bg-gray-300 p-4"
                        />



                        <button onClick={handleClick} className='block md:hidden absolute top-2 left-2 p-2 rounded-full '>
                            <BsArrowLeft className='inline-block text-2xl font-light ' />
                        </button>


                        <button
                            className='block md:hidden absolute top-2 right-2  bg-white p-2 rounded-full'
                            title='Add to wishlist' onClick={() => handleWishlist()}
                        >
                            <FaRegHeart className='text-lg' />
                        </button>


                    </div>


                    {/* Product Details Container */}
                    <div className="flex flex-col w-full md:w-[55%] p-2 space-y-6">


                        <p className='hidden md:block w-fit text-md font-normal border border-gray-300 rounded-3xl px-3 py-2 ronded-5xl'>{product.category}</p>


                        {/* Product Title and Copy URL Btn */}
                        <div className='flex  justify-between items-start'>
                            <p className="lg:underline text-xl  md:text-2xl xl:text-3xl font-bold md:font-semibold">
                                {product.title}
                            </p>


                            {/* Button to Copy Product Link  */}
                            <button className='block md:hidden text-2xl border p-1 rounded-sm' title='Share'
                                onClick={handleCopy}
                            >
                                <IoShareSocial />
                            </button>


                        </div>



                        {/* Price & Ratting */}
                        <div className="flex  justify-between items-center lg:items-center  ">
                            {/* Price */}
                            <div className="space-x-2  ">

                                <div className="flex items-center gap-3">
                                    <span className="text-md lg:text-xl text-red-500">-10%</span>

                                    <span className="text-2xl xl:text-3xl font-bold">${product.price.toFixed(2)}</span>
                                </div>

                                <div className="text-md lg:text-lg ">
                                    <span>{`M.R.P : $`}</span>
                                    <span className="line-through font-normal">
                                        {plusPercentageValue(product.price).toFixed(2)}</span>
                                </div>
                            </div>


                            {/* Rating */}
                            <div className="text-sm lg:text-lg">
                                <span>{`${product.rating.rate} ${handleRating(product.rating.rate)} (${product.rating.count} reviews)`}</span>
                            </div>

                        </div>



                        {/* Description */}

                        <div className="border-t border-b border-gray-200 py-4">
                            <h4 className="text-md font-semibold mb-2">Description</h4>

                            <p className="text-sm lg:text-lg">{product.description}</p>
                        </div>




                        {/* Quantity Button */}
                        <div className=''>
                            <QuantityBtn />
                        </div>









                        {/*  Add to cart button and Add to wishlist  */}
                        <div className="flex flex-col md:flex-row gap-x-2 ">

                            <ButtonComp width={"w-full"} product={product}>Add to cart</ButtonComp>

                            {/* Button to Copy Product Link  */}
                            <button className='hidden md:block text-2xl border p-1.5 rounded-sm ' title='Share'
                                onClick={handleCopy}
                            >
                                <IoShareSocial />
                            </button>

                            <button className='hidden md:block  text-2xl border p-1.5 rounded-sm ' title='Add to wishlist'
                                onClick={() => handleWishlist()}>
                                <FaRegHeart />
                            </button>
                        </div>




                        {/* Shipping Details */}
                        <div className="border border-gray-200  rounded-2xl space-y-2">
                            <h4 className="text-md lg:text-xl font-semibold px-2 py-3">Shipping</h4>

                            <ul className="grid grid-cols-2 ">



                                {/* Warranty Information */}
                                <li className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg">
                                    <div className="text-gray-700-600 text-xl lg:text-2xl xl:text-3xl rounded-full p-3 bg-gray-400/30">
                                        <FaShield />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-xs md:text-sm lg:text-md leading-none">
                                            Warranty
                                        </p>
                                        <span className="text-xs text-gray-500">
                                            {warrantyInfo(product.category)}
                                        </span>
                                    </div>
                                </li>




                                {/*  Dilivery */}
                                <li className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg">
                                    <div className="text-gray-700-600 text-xl lg:text-2xl xl:text-3xl rounded-full p-3 bg-gray-400/30">
                                        <FaTruck />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-xs md:text-sm lg:text-md leading-none">
                                            Delivery Time
                                        </p>
                                        <span className="text-xs text-gray-500">
                                            4-5 working days
                                        </span>
                                    </div>
                                </li>





                                {/* Return Policy */}
                                <li className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg">
                                    <div className="text-gray-700-600 text-xl lg:text-2xl xl:text-3xl rounded-full p-3 bg-gray-400/30">
                                        <TbTruckReturn />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-xs md:text-sm lg:text-md leading-none">
                                            Return Policy
                                        </p>
                                        <span className="text-xs text-gray-500">
                                            15 Days Return Policy
                                        </span>
                                    </div>
                                </li>




                                {/*  Cash on Delivery */}
                                <li className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg">
                                    <div className="text-gray-700-600 text-xl lg:text-2xl xl:text-3xl rounded-full p-3 bg-gray-400/30">
                                        <RiCashLine />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-xs md:text-sm lg:text-md leading-none">
                                            Cash on Delivery
                                        </p>
                                        <span className="text-xs text-gray-500">Available</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




                <div className=' mt-3 bg-gray-100/30'>
                    <h2 className="text-2xl text-center font-bold mt-10 mb-7">Related Products</h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-7 '>
                        {relatedProducts(product.category).map((item) => <ProductCard product={item} />)}
                    </div>


                </div>
            </section>






        </>
    );
};

export default ProductsPage
