import React from 'react'

import {BsCheckCircleFill} from 'react-icons/bs'
import LayoutComponent from '../components/Layout';
import '../styles/connect-account.css'

const ConnectStripeAccount = () => {
    return(
        <div>
            <LayoutComponent 
                showBanner={false}
                starting={false}
                stepNum={1}
                showSteps={true}
            >
                    <div className='stripe-container'>
                        <h1>Stripe</h1>
                    </div>

                    <h1 className="connect-header">
                        Connect Stripe Account
                    </h1>
                        
                    
                    <div className="transaction-container bg-white flex-left">
                        <div>
                            <p>Derrick Stripe Account</p>
                            <span className='email-content'>testing@gmail.com</span>
                        </div>

                        <p className="transaction-amount">
                            Connected
                            <BsCheckCircleFill
                                color='#18BB4B'
                                style={{
                                    paddingTop: '5px',
                                    marginLeft: '10px'
                                }}
                            />
                        </p>
                    </div>

                    <div className='m-auto'>
                        <button className="button" >
                            Continue
                        </button>
                    </div>            
            </LayoutComponent>
        </div>
    )
}

export default ConnectStripeAccount