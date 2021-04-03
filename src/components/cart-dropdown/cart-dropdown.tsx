import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
  removeCartItem,
  selectAllPrice,
  selectCartItems,
  showDropdownMenu,
} from '@redux/storeSlice'
import CartItem from '../cart-item'
import CustomButton from '../custom-button'

import './cart-dropdown.styles.scss'

const CartDropdown: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const allPrice = useSelector(selectAllPrice)

  const handleRemoveCartItem = (id: number) => {
    dispatch(removeCartItem(id))
  }

  const handleCheckItems = (e: MouseEvent) => {
    e.stopPropagation()
    dispatch(showDropdownMenu())
    history.push('/checkout')
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-all_price">
        <h3>Price:</h3>
        <span>{allPrice}$</span>
      </div>
      <ul className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeItem={handleRemoveCartItem}
            />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </ul>
      <CustomButton onClick={handleCheckItems}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
