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
import Search from './Pages/Search/Search';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

// Importing Layout Component
import Layout from './Layout/Layout';


// Importing Components
import BottomNavbar from './Components/BottomNavbar';
import CartPage from './Pages/Cart/CartPage';

// Toast Message Library
import { Toaster } from "react-hot-toast";
import LoginPage from './Pages/Login/LoginPage';







function App() {


  return (
    <>

      {/* Hot-toast library for toast msgs */}
      <Toaster position="bottom-right" reverseOrder={false} />


      <Routes>

        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path='/orders' element={<OrderPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Route>

        <Route path="/search" element={<Search />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>

      </Routes>



      <div className='md:hidden fixed bottom-0 left-0 w-full z-50'>
        <BottomNavbar />
      </div>
    </>
  )
}

export default App
