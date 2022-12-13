import React from "react";
import {BsCheckLg} from 'react-icons/bs'
import '../../styles/billing.css'

const Success = (props: any) => {

    return (
        <div>
            {
                props.visible ? 
                <div className='success-message-contaier flex-left'>
                        <div className='icon'>
                            <BsCheckLg
                                color='#18BB4B'
                                fontSize={20}
                            />
                        </div>
                        <div>
                            <p className='message-1'>{props.message}</p>
                            <p className='time'>
                                {props.timing}
                            </p>
                        </div>
                </div> : ''
            }
        </div>
    )
}

export default Success;