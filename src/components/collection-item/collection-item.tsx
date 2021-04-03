import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '@redux/storeSlice'
import CustomButton from '../custom-button'
import { ICollectionPreviewProps } from '../types'

import './collection-item.styles.scss'

const CollectionItem: React.FC<ICollectionPreviewProps> = (item) => {
  const { name, price, imageUrl } = item
  const dispatch = useDispatch()

  const handleAddItemToCart = () => {
    dispatch(addItemToCart(item))
  }

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`${price}$`}</span>
      </div>
      <CustomButton onClick={handleAddItemToCart}>Add to cart</CustomButton>
    </div>
  )
}

export default CollectionItem
