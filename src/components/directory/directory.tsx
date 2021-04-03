import React from 'react'
import { mainStateData } from '@redux/storeData'
import MenuItem from '../menu-item'

import './directory.styles.scss'

const Directory: React.FC = () => {
  return (
    <div className="directory-menu">
      {mainStateData.sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

export default Directory
