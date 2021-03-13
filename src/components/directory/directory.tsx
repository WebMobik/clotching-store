import React from 'react'
import MenuItem from '../menu-item'

import './directory.styles.scss';

const initialState = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        size: 'small',
        id: 1,
        linkUrl: 'hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        size: 'small',
        id: 2,
        linkUrl: ''
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: 'small',
        id: 3,
        linkUrl: ''
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: ''
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: ''
      }
    ]
}

const Directory = () => {
    return (
      <div className='directory-menu'>
        {initialState.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
}

export default Directory;