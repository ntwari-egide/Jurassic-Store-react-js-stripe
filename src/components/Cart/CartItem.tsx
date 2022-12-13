import { Image } from 'antd';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const CartItem = (props: any) => {
    return (
        <div className='flex flex-row mt-8'>
                    <div className='flex flex-row w-[80%]'>
                        <Image
                            height={100}
                            width={200}
                            src={props.product.cover}
                            preview={false}
                            className='rounded'
                        />

                        <div className='ml-4'>
                            <h1 className='w-[80%] font-normal'>{props.product.title}</h1>
                            <div className='flex flex-row'>
                                <h1 className='mt-2 font-light text-normal'>Qty: 1</h1>
                                <h1 className='mt-2 ml-8 font-light text-normal '>$1{props.product.price}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[5%]'>
                        <AiOutlineDelete
                            fontSize={25}
                            color={"red"}
                            className='cursor-pointer ml-4 mt-8'
                        />
                    </div>
        </div>
    )
}

export default CartItem