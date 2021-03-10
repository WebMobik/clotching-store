import React from 'react'
import CollectionItem from '../collection-item'
import { ICollectionPreview } from '../interfaces'

import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }: ICollectionPreview) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>
                {title.toUpperCase()}
            </h1>
            <div className='preview'>
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                    ))}
            </div>
        </div>
    )
}

export default CollectionPreview
