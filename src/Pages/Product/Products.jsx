import React from 'react'

import { useState } from 'react';



// Components
import ProductCard from '../../Components/ProductCard';
import CategoryAccordion from '../../Components/CategoryAccordion';



import { useGetProductsQuery } from '../Product/ProductApi';

const ProductPage = () => {

    const { data: Products, isLoading } = useGetProductsQuery();







    const [selected, setSelected] = useState("All Products");

    if (isLoading) {
        return <p>Loading...</p>
    }



    let msg = "";


    if (selected === "All Products") {
        msg = "Explore our full collection—something for everyone!"
    } else if (selected === "electronics") {
        msg = "Latest gadgets and smart tech to power your life."
    } else if (selected === "jewelery") {
        msg = "Elegant designs that shine with every occasion."
    } else if (selected === "men's clothing") {
        msg = "Stylish fits and everyday essentials for him."
    } else if (selected === "women's clothing") {
        msg = "Trendy outfits and timeless fashion for her."
    } else {
        msg = "See Products"
    }




    // Filter products based on selected category
    const filterProducts = selected === "All Products" ? Products : Products?.filter((item) => item.category === selected);


    return (
        <main className='w-full p-3'>

            {/* Product page header */}
            <div className=' p-2 py-4'>
                <h2 className='text-3xl font-bold'>See Products</h2>
                <p>{msg}</p>
            </div>

            {/* COntainer for products */}
            <div className=' flex flex-col md:flex-row justify-start items-start space-x-0 md:space-x-10 space-y-5 md:space-y-0 p-2 mt-5'>

                {/* Category container */}
                <div className='w-full md:w-[20%] border border-gray-300 rounded-lg '>

                    <CategoryAccordion selected={selected} setSelected={setSelected} />
                </div>

                {/* Products Container */}
                <div className='w-full md:w-[80%]'>

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 '>

                        {filterProducts?.map((item) => <ProductCard product={item} />)}

                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductPage
