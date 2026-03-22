
// Hooks
import { useDispatch } from 'react-redux';

// Toast message Library
import toast from 'react-hot-toast';


// Action
import { addToCart } from '../Pages/Cart/CartSlice';

const ButtonComp = ({ children, width, product }) => {

  const dispatch = useDispatch();


  function handleCart() {
    dispatch(addToCart(product))
    toast.success("Item added", {
      position: "bottom-right",
      duration: 1000,
      style: { marginTop: "80px" }
    })
  }


  return (

    <button className={`${width} bg-black text-sm text-white flex items-center justify-evenly  rounded-sm hover:bg-gray-800`}
      onClick={() => handleCart(product)}>
      {children}
    </button>
  )
}

export default ButtonComp
