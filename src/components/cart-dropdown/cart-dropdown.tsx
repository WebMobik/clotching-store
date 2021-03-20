import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem, selectCartItem } from '../../redux/storeSlice'
import CartItem from '../cart-item'
import CustomButton from '../custom-button'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItem)
    
    const handleRemoveCartItem = (id: number) => {
        dispatch(removeCartItem(id))
    }

    return (
        <div className='cart-dropdown'>
            <ul className='cart-items'>
                {
                    cartItems.map((item) => (
                        <CartItem
                            key={ item.id }
                            item={ item }
                            removeItem={ handleRemoveCartItem }
                        />
                    ))
                }
            </ul>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
