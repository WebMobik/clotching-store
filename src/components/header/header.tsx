import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { LINKS, LINKS_TEXT } from '../../config/constants';
import './header.styles.scss'

const Header = () => {

    return (
        <div className='header'>
           <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to={ LINKS.SHOP } className='option'>
                    { LINKS_TEXT.SHOP }
                </Link>
                <Link to={ LINKS.CONTACT } className='option'>
                    { LINKS_TEXT.CONTACT }
                </Link>
                <Link to={ LINKS.SIGN_IN } className='option'>
                    { LINKS_TEXT.SIGN_IN }
                </Link>
            </div>
        </div>
    )
}

export default Header
