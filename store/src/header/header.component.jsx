import React from 'react';

import { Link } from 'react-router-dom';

import { auth } from '../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../src/assests/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
        <div className='header'>
            <Link  className="logo-container" to='/'>
             <logo className='logo' />
            </Link>
            <div className='option'>
                <link className='option' to='/shop'>
                    SHOP   
                </link>
                <link className='option' to='/shop'>
                    CONTACT      
                </link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                    </div>
                   ) : (
                    <link className='option' to='/signin'>
                    SIGN IN
                    </link>
                   )}
            </div>
        </div>
    );


export default Header;
