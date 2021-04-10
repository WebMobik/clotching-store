import React from 'react'

import './header.styles.scss'

const HeaderSkeleton: React.FC = () => (
    <div className="header__skeleton">
        <div className="logo"/>
        <div className="navlinks"/>
        <div className="cart"/>
    </div>
);

export default HeaderSkeleton;
