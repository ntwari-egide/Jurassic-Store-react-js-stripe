/**
 * @author: ntwari egide
 * @description: billing current page for swipe
 */

import React, { useState } from 'react';
import LayoutComponent from '../components/Layout';
import {BsChevronLeft} from 'react-icons/bs'
import '../styles/billing.css'
import {RiErrorWarningFill} from 'react-icons/ri'
import Warning from '../components/Warning';
import {BsCheckLg} from 'react-icons/bs'
import Success from '../components/Success';

const BillingCurrency = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisibility = () =>   ! visible ? setVisible(true) : ''

    return (
        <LayoutComponent
        showBanner={false}
        starting={false}
        stepNum={2}
        showSteps={true}
        >
            <div className="flex-left small-size cursor-pointer">
                <div className='icon-cover'>
                    <BsChevronLeft 
                    />
                </div>
                <span>Back</span>
            </div>

            <div>
                <h1 className="connect-header">
                Choose Billing Currency
                </h1>

                <p className="details-description">Select the currency you want to use to bill your clients.</p>

                <Warning
                    message={"Note: Billing currency cannot be changed in the future. Please make sure you select the correct currency."}
                />

                <select name="" id="">
                    <option value="">USD - United States Dollars</option>
                    <option value="">USD - United States Dollars</option>
                    <option value="">USD - United States Dollars</option>
                </select>

                <div className="check-agreement">
                    <input type="radio" name="" id="" checked={false} /> <span>I am aware that I cannot change currency later</span>
                </div>
                {/* toggleVisibility */}
                <button 
                    className={`button ${visible ? 'color-less-button': ''}`}
                    onClick={toggleVisibility}
                >
                    Finish Setup
                </button>
            </div>

            <Success 
                message={"Stripe account connected successfully!"}
                visible={visible}
                timing={'A SECOND AGO'}
            />

        </LayoutComponent>
    )
}

export default BillingCurrency