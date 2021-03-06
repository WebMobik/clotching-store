import React, { createRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useClickOutside } from '@config/hooks'
import CartDropdown from '../cart-dropdown'
import {
  selectNumberProducts,
  selectShowCartItems,
  showDropdownMenu,
} from '@redux/storeSlice'

import { ReactComponent as ShoppingIcon } from '@assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon: React.FC = () => {
  const clickRef = createRef()
  const dispatch = useDispatch()
  const productNumber = useSelector(selectNumberProducts)
  const isShowCartItems = useSelector(selectShowCartItems)

  const toggleDropdownMenu = () => {
    dispatch(showDropdownMenu())
  }

  useClickOutside(clickRef, isShowCartItems, toggleDropdownMenu)

  return (
    <div className="shop-cart">
      <ShoppingIcon className="cart-icon" onClick={toggleDropdownMenu} />
      <span className="product-number">{productNumber ?? 0}</span>
      {isShowCartItems && <CartDropdown ref={clickRef} />}
    </div>
  )
}

export default CartIcon
