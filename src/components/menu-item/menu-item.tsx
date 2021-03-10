import React from 'react'
import { match, withRouter } from 'react-router-dom'

import './menu-item.styles.scss'

interface IMenuItem {
    title: string,
    imageUrl: string,
    size: number,
    history: {
        push: Function
    },
    linkUrl: string,
    match: match
}

const MenuItem: any = ({ title, imageUrl, size, history, linkUrl, match }: IMenuItem) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)