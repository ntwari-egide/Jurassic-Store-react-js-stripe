import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartTotalPriceSelector } from '../../redux/selectors';
import CartItem from './CartItem';

const CartContainer = () =>{

    const navigate = useNavigate()

    const cart = useSelector((state: any) => state.cart);
    const totalPrice = useSelector(cartTotalPriceSelector);

    return (
                <div>
                    
                    {
                        cart.map((item: any) => {
                            return (
                                <CartItem 
                                    key={item.id}
                                    product={item}
                                />
                            )
                        })
                    }
                    
                    <h1 className='text-normal mt-8 font-bold'>Total : ${totalPrice}</h1>

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