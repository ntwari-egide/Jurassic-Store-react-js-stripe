import { Button, Image } from 'antd';
import React from 'react';

const ProductCol =() => {


    return (
                    <div>
                            <Image
                                height={230}
                                width={230}
                                src={'https://image.uniqlo.com/UQ/ST3/ca/imagesgoods/444967/sub/cagoods_444967_sub1.jpg?width=1600&impolicy=quality_75'}
                                preview={false}
                                className='rounded'
                            />

                            <h1 className='text-center font-light text-base mt-8'>Pullover Hoodie-  a loose fitting hooded sweater</h1>
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