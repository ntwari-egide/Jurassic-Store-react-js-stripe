
/**
 * @author: ntwari egide
 * @description: Welcome page for swipe
 */

/**
 * @author:  Egide
 * @description: Welcome page for Jurrasic store
 */

import React, { useState } from 'react';
import '../styles/welcome.css'
import {BsCartCheck, BsSearch} from 'react-icons/bs'
import { Button, Col, Image, Input, Row } from 'antd';
import ProductCol from '../components/Product/Product';

const WelcomePage = () => {


    return (
        
        <div className='mt-8'>
            {/* right add to cart icon */}
            <div
                className='h-[30vh]'
            >
                <div
                    className="w-12 ml-auto"
                >
                    <BsCartCheck 
                        className='cursor-pointer'
                        color='#038C7F'
                        fontSize={23}
                    />
                </div>
                <h1 className='text-center font-bold text-4xl capitalize mt-[7vh] text-normal'>Jurassic Store</h1>
            </div>
            <div
                className=' min-h-screen background-normal px-24 pt-8'
            >
                <h1 className='text-center text-second'>Browse the Catalogue</h1>

                <div className="m-auto w-[50vw]">
                    <Input className='py-2 w-full mt-8' size="small" placeholder="Search" suffix={<BsSearch />} />
                </div>

                <div className="m-auto w-[70vw]">
                    <Row className='mt-8' gutter={40}>
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
                    <Row className='mt-8' gutter={40}>
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
                    <Row className='mt-8' gutter={40}>
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
            
        </div>
    )
}

export default WelcomePage;