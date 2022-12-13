import { Button, Image } from 'antd';
import React from 'react';

const ProductCol =(
    props: any
) => {


    return (
                    <div>
                            <Image
                                height={230}
                                width={230}
                                src={props.imageUrl}
                                preview={false}
                                className='rounded'
                            />

                            <h1 className='text-center font-light text-base mt-8'>{props.prodName}</h1>
                            <div className='mt-4 flex flex-row'>
                                <h1 className='text-2xl mt-2'>${props.price}</h1>
                                <Button className='button-primary ml-4 rounded-none'>
                                    Add To Cart
                                </Button>
                            </div>
                    </div>
    )
}

export default ProductCol