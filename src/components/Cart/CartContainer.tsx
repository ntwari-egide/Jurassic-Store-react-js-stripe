import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const CartContainer = () =>{

    const navigate = useNavigate()

    return (
                <div>
                    <CartItem />
                    <CartItem />
                    
                    <h1 className='text-normal mt-8 font-bold'>Total : $39.98</h1>

                    <Button 
                        className='button-primary mt-4 rounded-none'
                        onClick={() => navigate('/checkout')}
                    >
                        Checkout
                    </Button>
                </div>
    )
}

export default CartContainer