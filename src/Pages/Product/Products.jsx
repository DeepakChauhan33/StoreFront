import React from 'react'


// Components
import ProductCard from '../../Components/ProductCard';



import { useGetProductsQuery } from '../Product/ProductApi';
import CategoryAccordion from '../../Components/CategoryAccordion';

const ProductPage = () => {

    const { data: Products, isLoading } = useGetProductsQuery();

    return (
        <main className='w-full p-3'>

            {/* Product page header */}
            <div className=' p-2 py-4'>
                <h2 className='text-3xl font-bold'>See Products</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, autem!</p>
            </div>

            {/* COntainer for products */}
            <div className=' flex flex-col md:flex-row justify-start items-start space-x-0 md:space-x-10 space-y-5 md:space-y-0 p-2 mt-5'>

                {/* Category container */}
                <div className='w-full md:w-[20%] border border-gray-300 rounded-lg '>

                    <CategoryAccordion />
                </div>

                {/* Products Container */}
                <div className='w-full md:w-[80%]'>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 '>

                        {Products?.map((item) => <ProductCard product={item} />)}

                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductPage
