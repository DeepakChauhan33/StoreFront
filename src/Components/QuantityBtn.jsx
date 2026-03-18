// HOOKS
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


// ACTIONS
import { increaseQuantity, decreaseQunatity } from '../Pages/Cart/CartSlice';


const QuantityBtn = ({ id, quantity }) => {



    const dispatch = useDispatch();

    // FUNCTION
    function hannleDecrease() {
        dispatch(decreaseQunatity(id));
    }

    // FUNCTION
    function handleIncrease() {
        dispatch(increaseQuantity(id));
    }

    return (

        <div className='border border-gray-200 inline-block p-0' title='Add quantity'>
            <button
                className='px-2 bg-gray-300 hover:bg-gray-400 transition-colors duration-300 ease-in-out'
                onClick={hannleDecrease}>-</button>
            <span className='inline-block py-0 px-3  bg-gray-100'>{quantity}</span>
            <button
                className='px-2 bg-gray-300 hover:bg-gray-400 transition-colors duration-300 ease-in-out'
                onClick={handleIncrease}>+</button>
        </div>




    )
}

export default QuantityBtn
