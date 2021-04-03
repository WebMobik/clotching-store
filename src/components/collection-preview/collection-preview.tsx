import React from 'react'
import CollectionItem from '../collection-item'
import { ICollectionPreview } from '../types'

import './collection-preview.styles.scss'

const CollectionPreview: React.FC<ICollectionPreview> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} id={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
