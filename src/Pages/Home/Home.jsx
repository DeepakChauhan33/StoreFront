

import { useGetProductsQuery } from '../Product/ProductApi';

// Components
import CategoryCard from '../../Components/CategoryCard';
import ProductCard from '../../Components/ProductCard';


// React ICons
import { TiArrowRight } from "react-icons/ti";

// Import Framer Motion Library For Animation
import { motion } from 'framer-motion';






const Home = () => {



    const { data: Products, isLoading } = useGetProductsQuery();



    const filterProduct = (category) => {

        return Products?.filter((item) => item.category === category);
    }





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
                        <button className='p-2 px-4 bg-black text-white rounded-md hover:text-black hover:bg-white transition transform hover:scale-105 duration-300'>
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

                initial={{ opacity: 0, y: 40 }}  //Animation
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.4 }}
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

                        {isLoading ? <p>Loading....</p> : <CategoryCard product={filterProduct("women's clothing")} heading={"Women's Wear"} />}
                    </div>

                    <div className='py-4 px-3 rounded-md bg-gray-100 shadow-md hover:shadow-lg hover:scale-103 transition-transform duration-400 ease-in-out'>
                        {isLoading ? <p>Loading....</p> : <CategoryCard product={filterProduct("jewelery")} heading={"Jewelry"} />}
                    </div>

                    <div className='py-4 px-3 rounded-md bg-gray-100 shadow-md hover:shadow-lg hover:scale-103 transition-transform duration-400 ease-in-out'>
                        {isLoading ? <p>Loading....</p> : <CategoryCard product={filterProduct("men's clothing")} heading={"Men's Wear"} />}
                    </div>

                    <div className='py-4 px-3 rounded-md bg-gray-100 shadow-md hover:shadow-lg hover:scale-103 transition-transform duration-400 ease-in-out'>
                        {isLoading ? <p>Loading....</p> : <CategoryCard product={filterProduct("electronics")} heading={"Electronics"} />}
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




                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 '>

                    {Products?.slice(2, 6).map((item) => <ProductCard product={item} />)}

                </div>
            </section>


        </>
    )
}

export default Home
