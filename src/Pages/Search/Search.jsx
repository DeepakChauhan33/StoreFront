// Hooks
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";


import { useGetProductsQuery } from '../Product/ProductApi';


// Icons
import { BsArrowLeft } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { s } from "framer-motion/client";
import { div } from "framer-motion/m";


const Search = () => {

    const { data: Products, isLoading } = useGetProductsQuery();

    const navigate = useNavigate();

    const [val, setVal] = useState("");

    const [results, setResults] = useState([]);


    const handleChange = (e) => {
        setVal(e.target.value);
    }


    // Debounce logic
    useEffect(() => {

        const timer = setTimeout(() => {

            const filtered = Products.filter((item) =>
                item.title.toLowerCase().includes(val.toLowerCase())
            );

            setResults(filtered);

        }, 1000);

        return () => clearTimeout(timer);

    }, [val, Products]);


    // Debounce logic
    useEffect(() => {

        const timer = setTimeout(() => {

            const filtered = Products.filter((item) =>
                item.title.toLowerCase().includes(val.toLowerCase())
            );

            setResults(filtered);

        }, 1000);

        return () => clearTimeout(timer);

    }, [val, Products]);



    return (
        <section className="bg-purple-50 h-fit">

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

                    <input type="text" placeholder="Search products..." className="pl-10 w-full rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" value={val} onChange={handleChange} />
                </div>
            </div>


            <div>

            </div>


            <div className="p-4 ">

                {results?.map((item) => (
                    <NavLink to={`/product/${item.id}`}>
                        <div key={item.id} className=" group flex items-center py-1.5  gap-3 hover:bg-gray-200 cursor-pointer my-2 ">
                            <div className="group h-15 w-15 ">
                                <img src={item.image} alt={item.title} className="h-full w-full object-contain transition-transform hover:scale-102 duration-200 ease-in-out" />
                            </div>
                            <p className="line-clamp-1" >{item.title}</p>
                        </div>
                    </NavLink>
                ))}

            </div>
        </section>
    );

}


export default Search
