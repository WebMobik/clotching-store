import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase'
import { LINKS, LINKS_TEXT } from '../../config/constants';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

const Header = ({ currentUser }: any) => {

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
                { !currentUser.id ? (
                    <>
                        <Link to={ LINKS.SIGN_IN } className='option'>
                            { LINKS_TEXT.SIGN_IN }
                        </Link>
                        <Link to={ LINKS.SIGN_UP } className='option'>
                            { LINKS_TEXT.SIGN_UP }
                        </Link>
                    </>
                ) : (
                    <div className='option out' onClick={() => auth.signOut()}>
                        { LINKS_TEXT.SIGN_OUT }
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
