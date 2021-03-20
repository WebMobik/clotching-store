import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useClickOutside } from '../../config/hooks'
import CartDropdown from '../cart-dropdown'
import { selectNumberProducts, selectShowCartItems, showDropdownMenu } from '../../redux/storeSlice'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = () => {
    const clickRef: any = useRef()
    const dispatch = useDispatch()
    const productNumber = useSelector(selectNumberProducts) 
    const isShowCartItems = useSelector(selectShowCartItems)

    const toggleDropdownMenu = () => {
        dispatch(showDropdownMenu())
    }
    
    useClickOutside(clickRef, isShowCartItems, toggleDropdownMenu)

    return (
        <div ref={ clickRef } className="shop-cart" onClick={ toggleDropdownMenu }>
            <ShoppingIcon className="cart-icon" />
            <span className="product-number">
                { productNumber ?? 0 }
            </span>
            { isShowCartItems && <CartDropdown /> }
        </div>
    )
}

export default CartIcon
