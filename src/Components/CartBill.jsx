import React from 'react'

const CartBill = () => {
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

                    <div className="flex justify-between">
                        <span>Sub Total</span>
                        <span className="font-medium">$2000</span>
                    </div>

                    <div className="flex justify-between text-green-600">
                        <span>Discount (10%)</span>
                        <span>- $200</span>
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
                    <span>$1850</span>
                </div>

                {/* Checkout & Shoping Btn */}
                <div className='space-y-3'>
                    <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-900  ">Checkout Now</button>
                    <button className="w-full bg-gray-50 border text-black py-3 rounded-full ">Continue shopping</button>
                </div>


            </div>
        </section>
    )
}

export default CartBill
