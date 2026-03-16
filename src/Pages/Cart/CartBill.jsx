import { div, p } from 'framer-motion/client';
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

// ACTIONS
import { clearCart } from './CartSlice';
import { addOrder } from '../Order/orderSlice';


// Toast Message
import toast from 'react-hot-toast';

const CartBill = ({ setLoader }) => {

    const cart = useSelector((state) => state.cart.cart);
    const isLogin = useSelector((state) => state.auth.isLogin);
    const dispatch = useDispatch();

    const navigate = useNavigate();




    const total = useMemo(() => {
        console.log("called");
        return calculateTotal(cart);

    }, [cart])



    // Here i created an object, which have all the information of cart and then dispatch it

    function handleOrder() {

        if (isLogin) {

            setLoader(true);

            setTimeout(() => {
                const orderDtat = {
                    id: Date.now(),
                    products: cart,
                    total: total,
                    date: new Date().toLocaleDateString()
                }

                dispatch(addOrder(orderDtat))
                dispatch(clearCart());
                setLoader(false);
                navigate("/orders")

            }, 2000);
        } else {

            navigate('/login');
            (toast(`Please login first `, { icon: "➜]", position: "top-right", duration: 2000, style: { marginTop: "80px", color: 'red' } }))
        }
    }


    return (
        <section>
            <h2 className='text-xl font-semibold mb-3'>Order Smmary</h2>


            <div className='p-0.5 md:p-2 '>

                <div className='flex justify-between items-center gap-3 sm:gap-7 md:gap-10 lg:gap-6 mb-5 '>
                    <input type="text" placeholder='Discount voucher' className='flex-1 border p-1.5 lg:p-2.5 rounded-3xl uppercase' />
                    <button className='border rounded-3xl px-3.5 py-1.5 text-md font-light cursor-pointer hover:bg-black hover:text-white transition-colors duration-200 ease-in-out'>Apply</button>
                </div>

                {/* Price Details */}
                <div className="space-y-2 text-sm">



                    <div className='  '>
                        {cart.map((item) => (
                            <div className='flex justify-between space-y-2'>
                                <span className='line-clamp-1 w-[70%]'>{item.title}</span>
                                <span>${(item.price).toFixed(2)}</span>
                            </div>
                        ))}

                    </div>

                    
                    <hr className="my-4" />

                    <div className='flex justify-between '>
                        <span>SUb-total</span>
                        <span>{(total).toFixed(2)}</span>

                    </div>

                    <div className="flex justify-between">
                        <span></span>
                        <span className="font-medium">{ }</span>
                    </div>



                    <div className="flex justify-between">
                        <span>Delivery fee</span>
                        <span>$50</span>
                    </div>

                </div>

                {/* Divider */}
                <hr className="my-4" />

                {/* Total */}
                <div className="flex justify-between text-lg font-semibold mb-4">
                    <span>Total</span>
                    <span>${(total + 50).toFixed(2)}</span>
                </div>

                {/* Checkout & Shoping Btn */}
                <div className='space-y-3 mt-10'>
                    <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-900  " onClick={() => handleOrder()}>Checkout Now</button>
                    <button className="w-full bg-gray-50 border text-black py-3 rounded-full " onClick={() => navigate("/products")}>Continue shopping</button>
                </div>


            </div>
        </section>
    )
}


function calculateTotal(cart) {
    let total = cart.reduce((acc, crr) => {
        return acc + crr.price * crr.quantity
    }, 0)

    return total;

}

export default CartBill
