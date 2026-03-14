
// Hooks
import { useSelector } from 'react-redux';



import { useGetProductsQuery } from '../Product/ProductApi';

// Components
import CategoryCard from './CategoryCard';
import ProductCard from '../../Components/ProductCard';


// React ICons
import { TiArrowRight } from "react-icons/ti";
import { FiArrowRight } from "react-icons/fi";

// Import Framer Motion Library For Animation
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import Loader from '../../Components/Loader';






const Home = () => {



    const { data: Products, isLoading } = useGetProductsQuery();

    const isLogin = useSelector((state) => state.auth.isLogin);

    const navigate = useNavigate();




    const filterProduct = (category) => {
        return Products?.filter((item) => item.category === category);
    }


    const handleClick = () => {
        navigate("/products");
    }


    // This is not work properly as I come back from product page to home it show toast again and twice
    useEffect(() => {
        { isLogin ? (" ") : (toast(`Please login first `, { icon: "➜]", position: "top-right", duration: 2000, style: { marginTop: "80px" } })) }
    }, [])





    return (


        <>




            <div
                className='h-[85dvh] md:h-screen w-full flex justify-center items-center space-y-10 
                        bg-[url("https://i.pinimg.com/1200x/09/ab/dd/09abdd904702ef068837a7ac010e926b.jpg")]  bg-cover bg-no-repeat bg-center'>

                <motion.div
                    className='flex flex-col justify-center items-center space-y-10 border border-gray-200 rounded-lg p-4 md:p-6 lg:p-8 xl:p-10 bg-white/10 backdrop-blur-xs'

                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}

                >

                    <motion.h2 className="text-3xl xl:text-7xl text-gray-800 font-bold text-center mt-30"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Welcome to StoreMart
                    </motion.h2>

                    <div className='text-center'>
                        <motion.p
                            className='text-sm xl:text-lg font-medium text-white'
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 20 }}
                            transition={{ duration: 1 }}
                        >
                            Discover an amazing collection of products at unbeatable prices. <br />
                            Shop your favorite categories and enjoy fast, reliable delivery.
                        </motion.p>
                    </div>


                    <div className='flex gap-3'>
                        <button className='p-2 px-4 bg-black text-white rounded-md hover:text-black hover:bg-white transition transform hover:scale-105 duration-300'
                            onClick={handleClick}
                        >
                            Shop Now <TiArrowRight size={22} className='inline' />
                        </button>

                        <button className='p-2 text-black border border-gray-200 rounded-md'>
                            Learn More
                        </button>
                    </div>

                </motion.div>



            </div>



            {/* SHOP BY CATEGORY */}
            <motion.section

                className='py-12 px-5 space-y-8 sm:space-y-10 lg:space-y-12'

            // initial={{ opacity: 0, y: 40 }}  //Animation
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 1 }}
            // viewport={{ once: true, amount: 0.4 }}
            >

                {/* Title and Description */}
                <div className=''>

                    <motion.h2

                        className='text-3xl lg:text-4xl font-bold mb-1 md:mb-2 lg:mb-3' //Styling

                        initial={{ opacity: 0, x: -40 }} // Animation
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        Shop by Category
                    </motion.h2>

                    <motion.p

                        className='text-gray-500 text-sm md:text-md lg:text-lg font-medium'//Styling

                        initial={{ opacity: 0, x: -40 }} // Animation
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        Explore our diverse product categories
                    </ motion.p>
                </div>




                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 '>

                    <div className='py-4 px-3 rounded-md bg-gray-100 shadow-md hover:shadow-lg hover:scale-103 transition-transform duration-400 ease-in-out'>

                        <CategoryCard product={filterProduct("women's clothing")} heading={"Women's Wear"} isLoading={isLoading} />
                    </div>

                    <div className='py-4 px-3 rounded-md bg-gray-100 shadow-md hover:shadow-lg hover:scale-103 transition-transform duration-400 ease-in-out'>
                        <CategoryCard product={filterProduct("jewelery")} heading={"Jewelry"} isLoading={isLoading} />
                    </div>

                    <div className='py-4 px-3 rounded-md bg-gray-100 shadow-md hover:shadow-lg hover:scale-103 transition-transform duration-400 ease-in-out'>
                        <CategoryCard product={filterProduct("men's clothing")} heading={"Men's Wear"} isLoading={isLoading} />
                    </div>

                    <div className='py-4 px-3 rounded-md bg-gray-100 shadow-md hover:shadow-lg hover:scale-103 transition-transform duration-400 ease-in-out'>
                        <CategoryCard product={filterProduct("electronics")} heading={"Electronics"} isLoading={isLoading} />
                    </div>


                </div>
            </motion.section>






            {/* FEATURE PRODUCTS SECTION*/}
            <section className='py-12 px-4 space-y-8 sm:space-y-10 lg:space-y-8'>

                <div className=''>
                    <h2 className='text-3xl lg:text-4xl font-bold mb-1 md:mb-2 lg:mb-3'>
                        Featured Products
                    </h2>

                    <p className='text-gray-500 text-sm md:text-md lg:text-lg font-medium'>Check out our carefully curated selection</p>
                </div>



                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 '>

                    {Products?.slice(2, 6).map((item) => <ProductCard product={item} isLoading={isLoading} />)}

                </div>
            </section>






            <section className='p-2'>

                <div className=' flex flex-col justify-center items-center mb-12 rounded-md  gap-y-6 py-14 bg-linear-to-r from-stone-700 to-stone-500'>

                    <div className='text-center space-y-4'>
                        <h1 className='text-5xl font-black text-white'>Ready to shop?</h1>
                        <p className='text-center text-lg font-normal text-gray-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, iste! Soluta <br />mollitia expedita ad doloremque.</p>
                    </div>

                    <div className=''>
                        <button
                            className='inline-block text-white bg-stone-800 px-8 py-2 rounded-sm shadow-sm shadow-gray-50/50 transition-transform hover:scale-102 hover:text-md'
                            onClick={() => navigate('/products')}>
                            Browse All Products <FiArrowRight className='inline' />
                        </button>
                    </div>

                </div>


            </section>


        </>
    )
}

export default Home
