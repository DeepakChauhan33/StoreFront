// HOOKS
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


// LOGO
import logo from "../Images/STORE FRONT.jpg";



// ICONS
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";


const Footer = () => {


  return (
    <footer className="bg-[#0f0d11] text-gray-300 pb-12 md:p-0">
      <div className="max-w-7xl mx-auto px-6 py-12">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">


          <div className="flex flex-col items-start">

            {/* Logo */}
            <div
              className="p-1 flex flex-col items-start  mb-4"
            >

              <img src={logo} alt="logo" className='h-16 w-auto object-cover   ' />

              <h2 className="text-2xl font-bold text-white ">StoreFront.</h2>
            </div>

            <p className="text-sm text-gray-400 leading-6 mb-6">
              Minimal fashion for the modern world. Redefining style with
              sustainability and authenticity at our core.
            </p>

            <div className="flex gap-4">
              <FaInstagram className="cursor-pointer hover:text-white transition-transform hover:-translate-y-1 duration-200 ease-in-out" />
              <FaTwitter className="cursor-pointer hover:text-white transition-transform hover:-translate-y-1 duration-200 ease-in-out" />
              <FaFacebookF className="cursor-pointer hover:text-white transition-transform hover:-translate-y-1 duration-200 ease-in-out" />
            </div>
          </div>




          {/* Quick Links */}

          <div>

            <h2 className='text-white font-semibold mb-4'>
              Categories
            </h2>

            <ul className="">
              <NavLink to="/">
                <li className="hover:text-white cursor-pointer mb-2">Home</li>
              </NavLink>

              <NavLink to="/products">
                <li className="hover:text-white cursor-pointer mb-2">Products</li>
              </NavLink>

              <NavLink to="/cart">
                <li className="hover:text-white cursor-pointer mb-2">Cart</li>
              </NavLink>

              <NavLink to="orders">
                <li className="hover:text-white cursor-pointer mb-2">Orders</li>
              </NavLink>
            </ul>
          </div>


          {/* Categories */}
          <div>

            <h2 className='text-white font-semibold mb-4'>
              Categories
            </h2>

            <ul>

              <NavLink to="/products">
                <li className=" hover:text-white cursor-pointer mb-2">Men's</li>
              </NavLink>

              <NavLink to="/products">
                <li className=" hover:text-white cursor-pointer mb-2">Women's</li>
              </NavLink>

              <NavLink to="/products">
                <li className=" hover:text-white cursor-pointer mb-2">Electronics</li>
              </NavLink>

              <NavLink to="/products">
                <li className=" hover:text-white cursor-pointer mb-2">Jewelry</li>
              </NavLink>


            </ul>
          </div>


          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay in the loop</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to receive exclusive offers and updates.
            </p>

            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-2 mb-4 text-sm focus:outline-none focus:border-white"
            />

            <button className="w-full bg-white text-black font-medium py-2 rounded-md hover:bg-gray-200 transition">
              SUBSCRIBE
            </button>
          </div>

        </div>


        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2026 StoreFront Fashion. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
