// Hooks
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import { useGetProductsQuery } from '../Product/ProductApi';


// Icons
import { BsArrowLeft } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";


const Search = () => {

    const { data: Products, isLoading } = useGetProductsQuery();

    const navigate = useNavigate();

    const [val, setVal] = useState("");


    const handleChange = (e) => {
        setVal(e.target.value);
    }



    function debounce(func, delay) {

        let timerID;

        return function (...args) {
            clearTimeout(timerID);
            timerID = setTimeout(() => {
                func(...args);
            }, delay)
        }
    }

    const search = () => {
        console.log(Products);
    }


    const searchWithDebounce = debounce(search, 1000);

    return (
        <section className="bg-purple-50 h-[100vh]">

            <div className="h-18 border flex items-center gap-3 sm:gap-5 lg:gap-8 p-2 sm:p-5 lg:p-7">

                <button
                    className="group text-2xl font-bold text-gray-800 md:p-2 rounded-full md:bg-gray-300"
                    onClick={() => navigate(-1)} >
                    <BsArrowLeft className="transition-transform hover:-translate-x-0.5 ease-in-out duration-300"
                    />
                </button>

                <div className="relative flex-1 flex items-center border">

                    <span className="absolute insert-y-0  left-2  items-center ">
                        <CiSearch size={20} />
                    </span>

                    <input type="text" placeholder="Search products..." className="pl-10 w-full rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" value={val} onChange={handleChange} onKeyUp={searchWithDebounce} />
                </div>
            </div>


            <div>

            </div>
        </section>
    )
}

export default Search
