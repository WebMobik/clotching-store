import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item';
import { removeCartItem, selectAllPrice, selectCartItems } from '../../redux/storeSlice'

import './checkout.styles.scss';

const Checkout = () =>  {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const allPrice = useSelector(selectAllPrice)

    return (
        <div className='checkout-page'>
            <div className='total-header'>
                <h2>TOTAL: { allPrice }$</h2>
            </div>
            <table className='checkout-header'>
                <tr>
                    <th className='header-block'>
                        <span>Product</span>
                    </th>
                    <th className='header-block'>
                        <span>Description</span>
                    </th>
                    <th className='header-block'>
                        <span>Quantity</span>
                    </th>
                    <th className='header-block'>
                        <span>Price</span>
                    </th>
                    <th className='header-block'>
                        <span>Remove</span>
                    </th>
                </tr>
                {cartItems.map(cartItem => (
                    <CheckoutItem
                        key={ cartItem.id }
                        cartItem={ cartItem }
                        removeItem={ () => dispatch(removeCartItem(cartItem.id)) }
                    />
                ))}
            </table>
        </div>
    )
};

export default Checkout;