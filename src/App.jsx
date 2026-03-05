import { Routes, Route } from 'react-router-dom';
import './App.css'

// Importing Navbar
import Navbar from './Components/Navbar'

// Importing Pages
import Home from './Pages/Home/Home';
import Products from './Pages/Product/Products';
import OrderPage from './Pages/Order/OrderPage';
import Wishlist from './Pages/Wishlist/Wishlist';
import ProductPage from './Pages/ProductPage/ProductPage';

// Importing Footer
import Footer from './Components/Footer';




function App() {


  return (
    <>

      <Navbar />
      <div className='pt-18'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/orders' element={<OrderPage />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
        </Routes>
      </div>
      <Footer />

    </>
  )
}

export default App
