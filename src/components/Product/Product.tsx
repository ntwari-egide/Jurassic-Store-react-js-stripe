import { Button, Image } from 'antd';
import React from 'react';

const ProductCol =() => {


    return (
                    <div>
                            <Image
                                height={230}
                                width={230}
                                src={'https://images.pexels.com/photos/4972847/pexels-photo-4972847.jpeg?auto=compress&cs=tinysrgb&w=800'}
                                preview={false}
                                className='rounded'
                            />

                            <h1 className='text-center font-light text-base'>Pullover Hoodie-  a loose fitting hooded sweater</h1>
                            <div className='mt-4 flex flex-row'>
                                <h1 className='text-2xl mt-2'>$100</h1>
                                <Button className='button-primary ml-4 rounded-none'>
                                    Add To Cart
                                </Button>
                            </div>
                    </div>
    )
}

export default ProductCol