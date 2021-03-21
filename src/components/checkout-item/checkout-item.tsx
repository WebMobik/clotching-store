  
import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem: { name, imageUrl, price, count },
  removeAllItems,
  removeItem,
  addItem
}: any) => (
  <tr className='checkout-item'>
    <td className='image-container'>
      <img src={ imageUrl } alt='item' />
    </td>
    <td className='name'>{ name }</td>
    <td className='quantity'>
        <span className='arrow' onClick={ removeItem }>
          &#10094;
        </span>
        <span className='value'>{ count }</span>
        <span className='arrow' onClick={ addItem }>
          &#10095;
        </span>
    </td>
    <td className='price'>{ price }$</td>
    <td className='remove-button' onClick={ removeAllItems }> &#10005;</td>
  </tr>
);

export default CheckoutItem;