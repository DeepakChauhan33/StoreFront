// React Icons
import { RiHome2Line } from "react-icons/ri";
import { BiBox, BiStoreAlt } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { FaBoxOpen } from "react-icons/fa";


// HOOKS
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";





const BottomNavbar = () => {

    const isLogin = useSelector((state) => state.auth.isLogin);

    const cart = useSelector((state) => state.cart.cart)
    const cartCount = cart.length;

    return (
        <nav>

            <ul className='w-full h-18  shadow-gray-300 bg-gray-900 text-xl sm:text-2xl md-text-3xl text-white  flex justify-between px-3 sm:px-6 md:px-9 items-center fixed bottom-0 left-0 z-50'>


                {/* HOME */}
                <NavLink to="/">
                    <li className="flex flex-col justify-center items-center gap-1.5 ">
                        <RiHome2Line />
                        <span className="text-xs sm:text-sm">Home</span>
                    </li>
                </NavLink>

                {/* PRODUCT */}
                <NavLink to="/products">
                    <li className="flex flex-col justify-center items-center gap-1.5">
                        <BiStoreAlt />
                        <span className="text-xs sm:text-sm">store</span>
                    </li>
                </NavLink>

                {/* CART */}
                <NavLink to="/cart">
                    <li className="relative flex flex-col justify-center items-center gap-1.5">
                        <FiShoppingCart />
                        {cartCount > 0 ? (<span className="absolute -top-3 right-1 text-[#fa6b6b] text-sm">{cartCount}</span>) : (" ")}

                        <span className="text-xs sm:text-sm">Cart</span>
                    </li>
                </NavLink>

                {/* ORDERS */}
                <NavLink to="/orders">
                    <li className="flex flex-col justify-center items-center gap-1.5">
                        <BiBox />
                        <span className="text-xs sm:text-sm">orders</span>
                    </li>
                </NavLink>


                {/* LOGIN */}
                <NavLink to="/login">
                    <li className="flex flex-col justify-center items-center gap-1.5">
                        <CgProfile />
                        <span className="text-xs sm:text-sm">Profile</span>
                    </li>
                </NavLink>

            </ul>

        </nav >
    )
}

export default BottomNavbar
