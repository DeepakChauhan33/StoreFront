
// Hooks
import { useDispatch } from 'react-redux';


// Action
import { addToCart } from '../Pages/Cart/CartSlice';

const ButtonComp = ({ children, width, product }) => {

  const dispatch = useDispatch();


  function handleCart() {
    dispatch(addToCart(product))
  }


  return (

    <button className={`${width} bg-black text-sm text-white flex items-center justify-evenly  rounded-sm hover:bg-gray-800`}
      onClick={() => handleCart(product)}>
      {children}
    </button>
  )
}

export default ButtonComp
