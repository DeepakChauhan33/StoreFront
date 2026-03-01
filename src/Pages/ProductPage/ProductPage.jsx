
// Components
import QuantityBtn from '../../Components/QuantityBtn';
import ButtonComp from '../../Components/ButtonComp';


// React Icons
import { FaShield } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { RiCashLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

import { useNavigate, useParams } from 'react-router-dom'
import { useGetDynamicProductQuery } from '../Product/ProductApi';

const ProductsPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { data: product, isLoading } = useGetDynamicProductQuery(id);

    if (isLoading) return <p>Loading...</p>;



    const handleClick = () => {
        navigate(-1);
    }

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
                rateStar += "★ ";
            } else {
                rateStar += "☆ ";
            }
        }
        return rateStar;
    }






    return (
        <>

            <section className="bg-gray-100/30  flex flex-col items-start mt-3  shadow-md space-x-4 p-2 md:p-5 lg:p-10">

                <div>
                    <button onClick={handleClick} className='p-2 border rounded-full'>
                        <FaArrowLeftLong />
                    </button>
                </div>

                <div className='flex items-start mt-3  shadow-md space-x-4 p-2 md:p-5 lg:p-10'>

                    {/* Product Image Container */}
                    <div className="w-full border  md:w-[45%] rounded-lg overflow-hidden mb-5 ">


                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-90 md:h-full md:min-h-100 object-contain bg-gray-300 p-4"
                        />
                    </div>


                    {/* Product Details Container */}
                    <div className="flex flex-col border w-full md:w-[55%] p-2 gap-y-5">


                        <p className='text-lg font-normal bg-gray-400 w-auto px-2 py-1 ronded-5xl'>{product.category}</p>


                        <div className='flex  justify-between items-center'>
                            {/* Product Title */}
                            <p className="underline text-lg  md:text-2xl xl:text-3xl font-bold md:font-semibold">
                                {product.title}
                            </p>

                            {/* <div className='wishlistCant cursor-pointer flex items-start' title='Add to wishlist' onClick={() => {
                            addToWishList()
                        }}>
                            <CiHeart className='text-3xl ' />
                        </div> */}
                        </div>



                        {/* Description */}

                        <div className="">
                            <h4 className="text-md font-semibold mb-2">Description</h4>

                            <p className="text-sm lg:text-lg">{product.description}</p>
                        </div>




                        {/* Quantity Button */}
                        <div className=''>
                            <QuantityBtn />
                        </div>




                        {/* Price & Ratting */}
                        <div className="flex  justify-between items-start lg:items-center  ">
                            {/* Price */}
                            <div className="space-x-2  ">

                                <div className="flex items-center gap-3">
                                    <span className="text-md lg:text-xl text-red-500">-10%</span>

                                    <span className="text-2xl xl:text-3xl font-bold">${product.price}</span>
                                </div>

                                <div className="text-md lg:text-lg ">
                                    <span>{`M.R.P : $`}</span>
                                    <span className="line-through font-normal">
                                        {plusPercentageValue(product.price)}</span>
                                </div>
                            </div>


                            {/* Rating */}
                            <div className="text-sm lg:text-lg">
                                <span>{`${product.rating.rate} ${handleRating(product.rating.rate)} (${product.rating.count} reviews)`}</span>
                            </div>

                        </div>




                        {/* Buy & Add to cart button */}
                        <div className="flex flex-col lg:flex-row gap-x-2 ">

                            <ButtonComp width={"w-full"}>Add to cart</ButtonComp>

                            <button className='text-2xl border p-1 rounded-sm' title='Share'>
                                <IoShareSocial />
                            </button>

                            <button className='text-2xl border p-1 rounded-sm' title='Add to wishlist'>
                                <FaRegHeart />
                            </button>
                        </div>




                        {/* Shipping Details */}
                        <div className="border border-gray-200 p-3 rounded-2xl space-y-2">
                            <h4 className="text-md lg:text-xl font-semibold">Shipping</h4>

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
            </section>






        </>
    );
};

export default ProductsPage
