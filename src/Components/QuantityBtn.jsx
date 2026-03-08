import React, { useState } from 'react'

const QuantityBtn = () => {

    const [quantity, setQuantity] = useState(1);


    function hannleDecrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            setQuantity(1);
        }
    }

    function handleIncrease() {
        setQuantity(quantity + 1);
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
