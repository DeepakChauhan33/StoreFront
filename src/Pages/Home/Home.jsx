import React, { useEffect, useState } from 'react'
import axios from 'axios';



import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Product/ProductSlice';

// React ICons
import { TiArrowRight } from "react-icons/ti";



const Home = () => {



    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.products);

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts()
    },[])


    const getProducts = async () => {
        try {
            let response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <div
                className=' h-screen w-full flex justify-center items-center space-y-10 
                        bg-[url("https://i.pinimg.com/1200x/09/ab/dd/09abdd904702ef068837a7ac010e926b.jpg")]  bg-cover bg-no-repeat bg-center'>

                <div className='flex flex-col justify-center items-center space-y-10 border border-gray-200 rounded-lg p-4 md:p-6 lg:p-8 xl:p-10 bg-white/10 backdrop-blur-xs'>

                    <h2 className="text-3xl xl:text-7xl text-gray-800 font-bold text-center mt-30">Welcome to StoreMart</h2>

                    <div className='text-center'>
                        <p className='text-sm xl:text-lg font-medium text-white'>
                            Discover an amazing collection of products at unbeatable prices. <br />
                            Shop your favorite categories and enjoy fast, reliable delivery.
                        </p>
                    </div>


                    <div className='flex gap-3'>
                        <button className='p-2 px-4 bg-black text-white rounded-md hover:text-black hover:bg-white transition transform hover:scale-105 duration-300'>
                            Shop Now <TiArrowRight size={22} className='inline' />
                        </button>

                        <button className='p-2 text-black border border-gray-200 rounded-md'>
                            Learn More
                        </button>
                    </div>

                </div>



            </div>



            {/* SHOP BY CATEGORY */}
            <section className='py-12 px-4 space-y-8 sm:space-y-10 lg:space-y-12'>

                <div className=''>
                    <h2 className='text-3xl lg:text-4xl font-bold mb-1 md:mb-2 lg:mb-3'>
                        Shop by Category
                    </h2>

                    <p className='text-gray-500 text-sm md:text-md lg:text-lg font-medium'>Explore our diverse product categories</p>
                </div>




                <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 '>

                    <div className='bg-blue-100 flex flex-col justify-center items-start rounded-md py-10 px-5 cursor-pointer border border-transparent hover:border hover:border-gray-600'>
                        <h3 className='text-2xl font-bold'>Women's Wear</h3>
                        <p className='text-md font-medium text-gray-500'>Fashionable clothing for women</p>
                    </div>

                    <div className='bg-blue-100 flex flex-col justify-center items-start rounded-md py-10 px-5 cursor-pointer border border-transparent hover:border hover:border-gray-600'>
                        <h3 className='text-2xl font-bold'>Men's Wear</h3>
                        <p className='text-md font-medium text-gray-500'>Stylish apparel for men</p>
                    </div>

                    <div className='bg-blue-100 flex flex-col justify-center items-start rounded-md py-10 px-5 cursor-pointer border border-transparent hover:border hover:border-gray-600'>
                        <h3 className='text-2xl font-bold'>Electronicsr</h3>
                        <p className='text-md font-medium text-gray-500'>Gadgets and devices</p>
                    </div>

                    <div className='bg-blue-100 flex flex-col justify-center items-start rounded-md py-10 px-5 cursor-pointer border border-transparent hover:border hover:border-gray-600'>
                        <h3 className='text-2xl font-bold'>Jewelry</h3>
                        <p className='text-md font-medium text-gray-500'>Beautiful and elegant pieces</p>
                    </div>

                </div>
            </section>






            {/* FEATURE PRODUCTS SECTION*/}
            <section className='py-12 px-4 space-y-8 sm:space-y-10 lg:space-y-12'>

                <div className=''>
                    <h2 className='text-3xl lg:text-4xl font-bold mb-1 md:mb-2 lg:mb-3'>
                        Featured Products
                    </h2>

                    <p className='text-gray-500 text-sm md:text-md lg:text-lg font-medium'>Check out our carefully curated selection</p>
                </div>




                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 '>

                    {products.map((item)=>{
                        return <div id={item.id}>
                            {item.title}
                        </div>
                    })}

                </div>
            </section>


            <button
                className='h-10 w-20 border'
                onClick={() => dispatch(getProducts())}>Press</button>

        </>
    )
}

export default Home
