/**
 * @author: ntwari egide
 * @description: stripe configuration page for swipe
 */

import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import LayoutComponent from '../components/Layout';
import '../styles/configurations.css'

const StripeConfiguration = () => {
  return (
        <LayoutComponent
            showBanner={false}
            starting={false}
            stepNum={2}
            showNavbar={true}
            showSteps={false}
        >

            <div className="spinning">
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA']}
                />
            </div>
            <h1 className="connect-header">
            Importing Stripe Configurations
            </h1>
            <p className="details-description">Please wait while we are importing your Stripe configurations. It will only take a few seconds…</p>


        </LayoutComponent>
    );
}

export default StripeConfiguration