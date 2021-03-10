  
import React, { useState } from 'react';

import SHOP_DATA from './shop-data';

import CollectionPreview from '../../components/collection-preview';

const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA)

    return (
        <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }: any) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
}

export default Shop;