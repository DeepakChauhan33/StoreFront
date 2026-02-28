import React from 'react'

// React Icons
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='px-12 py-10 bg-gray-200'>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between max-w-8xl gap-10'>

        {/* Logo and Short Title */}
        <div className='border'>

          {/* Logo */}
          <div className='text-2xl font-bold  mb-4'>
            logo
          </div>

          <p className="text-sm text-gray-400 leading-6 mb-6">
            Your trusted source for quality products at great prices.
          </p>

          <div>
            <ul className='flex gap-4 text-2xl'>
              <li>
                <RiInstagramFill />
              </li>

              <li>
                <FaSquareXTwitter />
              </li>

              <li>
                <FaFacebook />
              </li>
            </ul>
          </div>
        </div>



        {/* Quick Links */}
        <div>

          <h2 className='font-semibold mb-4'>
            Links
          </h2>

          <ul>
            <li className=" cursor-pointer">Home</li>
            <li className=" cursor-pointer">Products</li>
            <li className=" cursor-pointer">Cart</li>
            <li className=" cursor-pointer">Orders</li>
          </ul>
        </div>


        {/* Categories */}
        <div>

          <h2 className='font-semibold mb-4'>
            Categories
          </h2>

          <ul>
            <li className=" cursor-pointer">Men's</li>
            <li className=" cursor-pointer">Women's</li>
            <li className=" cursor-pointer">Electronics</li>
            <li className=" cursor-pointer">Jewelry</li>
          </ul>
        </div>


        {/* Support */}
        <div>

          <h3 className=" font-semibold mb-4">
            Stay Updated
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Subscribe to receive exclusive offers and updates.
          </p>


          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-purple-500 border border-gray-700 rounded-md px-4 py-2 mb-4 text-sm focus:outline-none focus:border-white"
          />

          <button className="w-full bg-yellow-100 text-black font-medium py-2 rounded-md hover:bg-gray-200 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <p className='text-center mt-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, tenetur!
      </p>
    </footer>
  )
}

export default Footer
