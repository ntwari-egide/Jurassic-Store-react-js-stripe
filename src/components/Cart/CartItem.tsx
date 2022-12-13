import { Image } from 'antd';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const CartItem = () => {
    return (
        <div className='flex flex-row mt-8'>
                    <div className='flex flex-row'>
                        <Image
                            height={100}
                            width={200}
                            src={'https://images.pexels.com/photos/4972847/pexels-photo-4972847.jpeg?auto=compress&cs=tinysrgb&w=800'}
                            preview={false}
                            className='rounded'
                        />

                        <div className='ml-4'>
                            <h1 className='w-[80%] font-normal'>Pullover Hoodie-  a loose fitting hooded sweater</h1>
                            <div className='flex flex-row'>
                                <h1 className='mt-2 font-light text-normal'>Qty: 5</h1>
                                <h1 className='mt-2 font-light text-normal ml-auto'>$19.999</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%]'>
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