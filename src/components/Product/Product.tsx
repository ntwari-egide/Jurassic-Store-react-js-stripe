import { Button, Image } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const ProductCol =(
    props: any
) => {

    const dispatch = useDispatch();

    return (
                    <div>
                            <Image
                                height={230}
                                width={230}
                                src={props.product.cover}
                                preview={false}
                                className='rounded'
                            />

                            <h1 className='text-center font-light text-base mt-8'>{props.product.title}</h1>
                            <div className='mt-4 flex flex-row'>
                                <h1 className='text-2xl mt-2'>${props.product.price}</h1>
                                <Button 
                                    className='button-primary ml-4 rounded-none'
                                    onClick={() => {
                                        dispatch(addToCart(props.product));
                                    }}
                                >
                                    Add To Cart
                                </Button>
                            </div>
                    </div>
    )
}

export default ProductCol