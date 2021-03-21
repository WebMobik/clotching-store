  
import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, count }, removeItem }: any) => (
  <tr className='checkout-item'>
    <td className='image-container'>
      <img src={ imageUrl } alt='item' />
    </td>
    <td className='name'>{ name }</td>
    <td className='quantity'>{ count }</td>
    <td className='price'>{ price }$</td>
    <td className='remove-button' onClick={ removeItem }> &#10005;</td>
  </tr>
);

export default CheckoutItem;