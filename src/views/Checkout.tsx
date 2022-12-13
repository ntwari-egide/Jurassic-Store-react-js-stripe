/**
 * @file Checkout.tsx
 * @author: Egide
 * @description: Checkout page
 */

import { Button, Input } from 'antd'
import React from 'react'
import CartItem from '../components/Cart/CartItem'

const CheckoutView = () => {

    return (
        <div className='pt-24'>
            <h1 className="text-normal text-3xl font-bold text-center">Check Out</h1>

            <div className='flex flex-row mx-24 mt-8'>
                <div className='w-[70%]'>
                    <h1 className='text-normal text-lg text-second font-medium'>Shipping Address</h1>

                    <div className='mt-8'>
                        <Input size="small" placeholder="Name" className='w-[60%] py-3 px-2 mt-4 rounded-none' />
                        <Input size="small" placeholder="Email" className='w-[60%] py-3 px-2 mt-4 rounded-none' />
                        <Input size="small" placeholder="Address" className='w-[60%] py-3 px-2 mt-4 rounded-none' /> <br />
                    
                        <Button className='button-primary rounded-none mt-14'>
                            Confirm & Pay
                        </Button>
                    </div>
                </div>
                <div>
                    <h1 className='text-normal text-lg text-second ml-auto font-medium'>Cart</h1>

                    <div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    
                    <h1 className='text-normal mt-8 font-bold'>Total : $59.97</h1>
                </div>
                </div>
            </div>
        </div>
    )

}

export default CheckoutView