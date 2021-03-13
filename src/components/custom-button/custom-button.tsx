import React from 'react'

import './custom-button.styles.scss'

interface ICustomButton {
    children: React.ReactChild
    type?: any
    onClick?: React.EventHandler<any>
    isGoogleSignIn?: boolean
}

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: ICustomButton) => {
    return (
        <button
            className={`${ isGoogleSignIn ? 'google-sign-in' : '' } custom-button`}
            {...otherProps}
        >
            { children }
        </button>
    )
}

export default CustomButton
