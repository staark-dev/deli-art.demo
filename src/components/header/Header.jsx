import React from 'react';
import './header.css';
import HeaderSocials from './HeaderSocials';
import logo from '../../assets/home.jpg';

const Header = () => {
    return (
        <header id='header'>
            <div className="container header__container">
                <h1 className='header__logo'>Deli Art</h1>
                <h5 className='text-light'>Homemade with love!</h5>

                <HeaderSocials />
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header;