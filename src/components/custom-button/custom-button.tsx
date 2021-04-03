import React from 'react'

import './custom-button.styles.scss'

type CustomButtonProps = {
  children: React.ReactChild
  type?: any
  onClick?: React.EventHandler<any>
  isGoogleSignIn?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
