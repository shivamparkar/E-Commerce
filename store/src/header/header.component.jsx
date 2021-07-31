import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../src/assests/crown.svg';

import './header.styles.scss';

const Header = () => (
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
            </div>
        </div>
    );


export default Header;
