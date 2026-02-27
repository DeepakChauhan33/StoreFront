import { Routes, Route } from 'react-router-dom';
import './App.css'

// Importing Navbar
import Navbar from './Components/Navbar'

// Importing Pages
import Home from './Pages/Home/Home';
import ProductPage from './Pages/Product/ProductPage';
import OrderPage from './Pages/Order/OrderPage';

// Importing Footer
import Footer from './Components/Footer';
import Wishlist from './Pages/Wishlist';

function App() {


  return (
    <>

      <Navbar />
      <div className='pt-18'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<ProductPage />}></Route>
          <Route path='/orders' element={<OrderPage />}></Route>
          <Route path='/wishlist' element={<Wishlist/>}></Route>
        </Routes>
      </div>
      <Footer />

    </>
  )
}

export default App
