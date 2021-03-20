import React from 'react'

import './cart-item.styles.scss'

const CartItem = ({ item: { id, imageUrl, name, price, count }, removeItem }: any) => (
    <li className="cart-item">
        <img className="item-img" src={ imageUrl } alt="product-img" />
        <div className="item-content">
            <h4>{ name }</h4>
            <span>Price: { price }$</span>
            <span>Count: { count }</span>
        </div>
        <span className="delete-item" onClick={ () => removeItem(id) } >
            &times;
        </span>
    </li>
)

export default CartItem
