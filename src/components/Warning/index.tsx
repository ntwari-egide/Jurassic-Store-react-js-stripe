import React from 'react'
import '../../styles/billing.css'
import {RiErrorWarningFill} from 'react-icons/ri'

const Warning = (props: any) => {
    return (
        <div className="warning">
            <p>
                <RiErrorWarningFill
                    fontSize={13}
                    color={"#FFAC14"}
                />   
                            {props.message}</p>
        </div>
    )
}

export default Warning