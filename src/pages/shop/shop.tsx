import React, { useState } from 'react'
import CollectionPreview from '@components/collection-preview'
import { SHOP_DATA } from '@redux/storeData'

const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA)

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }: any) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default Shop
