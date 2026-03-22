
// Hooks
import { Routes, Route } from 'react-router-dom';


// Importing Pages
import Home from './Pages/Home/Home';
import Products from './Pages/Product/Products';
import OrderPage from './Pages/Order/OrderPage';
import Wishlist from './Pages/Wishlist/Wishlist';
import ProductPage from './Pages/ProductPage/ProductPage';
import Search from './Pages/Search/Search';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import LoginPage from './Pages/Login/LoginPage';
import CartPage from './Pages/Cart/CartPage';



// Importing Layout Component
import Layout from './Layout/Layout';


// Importing Components
import BottomNavbar from './Components/BottomNavbar';
import Loader from './Components/Loader';

// Toast Message Library
import { Toaster } from "react-hot-toast";




function App() {



  return (
    <>

      {/* Hot-toast library for toast msgs */}
      <Toaster position="bottom-right" reverseOrder={false} />


      {/* Routes */}
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



        {/* These pages don't show navbar and footer */}
        <Route path="/search" element={<Search />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>

      </Routes>

      {/* Bottom navbar for mobile  */}
      <div className='lg:hidden fixed bottom-0 left-0 w-full z-50'>
        <BottomNavbar />
      </div>
    </>
  )
}

export default App
