import React from 'react'

const Footer = () => {
  return (
    <footer>

      <div className='flex'>

        {/* Logo and Short Title */}
        <div className=''>

          {/* Logo */}
          <div>
            logo
          </div>

          <p>Your trusted source for quality products at great prices.</p>

          <div>
            <ul className='flex'>
              <li>insta</li>
              <li>twiter</li>
              <li>facebook</li>
            </ul>
          </div>
        </div>



        {/* Quick Links */}
        <div>

          <h2>Links</h2>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Orders</li>
          </ul>
        </div>


        {/* Categories */}
        <div>

          <h2>Categories</h2>

          <ul>
            <li>Men's</li>
            <li>Women's</li>
            <li>Electronics</li>
            <li>Jewelry</li>
          </ul>
        </div>


        {/* Support & Help */}
        <div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
