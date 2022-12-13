/**
 * @author:  Egide
 * @description: Welcome page for Jurrasic store
 */

import React, { useEffect, useState } from 'react';
import '../styles/welcome.css'
import {BsCartCheck, BsSearch} from 'react-icons/bs'
import { Button, Col, Drawer, Input, Row } from 'antd';
import ProductCol from '../components/Product/Product';
import CartItem from '../components/Cart/CartItem';
import { useNavigate } from 'react-router-dom';
// src/components/Item.js
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import { AppDispatch, fetchProducts, RootState } from '../redux/productsSlice';


const WelcomePage = () => {

    const [cartOpen, setCartOpen] = useState(false);
    const navigate = useNavigate()
    
    // getting data from store
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

    console.log('data:  ', products.list)

    return (
        
        <div className='mt-14'>
            {/* right add to cart icon */}
            <div
                className='h-[30vh]'
            >
                <div
                    className="w-12 ml-auto"
                >
                    <BsCartCheck 
                        className='cursor-pointer'
                        onClick={() => setCartOpen(true)}
                        color='#038C7F'
                        fontSize={23}
                    />
                </div>
                <h1 className='text-center font-bold text-4xl capitalize mt-[7vh] text-normal'>Jurassic Store</h1>
            </div>

            {/* search bar and products */}

            <div
                className=' min-h-screen background-normal px-24 pt-8 pb-24'
            >
                <h1 className='text-center text-second'>Browse the Catalogue</h1>

                <div className="m-auto w-[50vw]">
                    <Input className='py-2 w-full mt-14' size="small" placeholder="Search" suffix={<BsSearch />} />
                </div>

                <div className="m-auto w-[70vw]">
                    <Row className='mt-14' gutter={40}>
                        <Col span={6} >
                            <div
                                // onClick={
                                //     () => 
                                    // dispatch(addToCart(null))
                                // }
                            >
                                <ProductCol />
                            </div>
                        </Col>
                        <Col span={6} >
                            <ProductCol 
                                imageUrl={'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/444967/sub/cagoods_444967_sub1.jpg?width=1600&impolicy=quality_75'}
                                prodName='Pullover Hoodie-  a loose fitting hooded sweater'
                                price={100}
                            />
                        </Col>
                        <Col span={6} >
                            <ProductCol />
                        </Col>
                        <Col span={6} >
                            <ProductCol />
                        </Col>
                    </Row>
                    <Row className='mt-14' gutter={40}>
                        <Col span={6} >
                            <ProductCol />
                        </Col>
                        <Col span={6} >
                            <ProductCol />
                        </Col>
                        <Col span={6} >
                            <ProductCol />
                        </Col>
                        <Col span={6} >
                            <ProductCol />
                        </Col>
                    </Row>
                    <Row className='mt-14' gutter={40}>
                        <Col span={6} >
                            <ProductCol />
                        </Col>
                        <Col span={6} >
                            <ProductCol />
                        </Col>
                        <Col span={6} >
                            <ProductCol />
                        </Col>
                        <Col span={6} >
                            <ProductCol />
                        </Col>
                    </Row>
                </div>

            </div>

            {/* Cart drawer */}
            <Drawer 
                open={cartOpen}
                title="Cart"
                onClose={() => setCartOpen(false)}
            >
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
            </Drawer>
            
        </div>
    )
}
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default WelcomePage;