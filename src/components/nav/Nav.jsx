import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#header');

    const handleNav = (event) => {
        let page = '#' + event.currentTarget.href.split('#')[1];
        setActiveNav(page);
    };

    return (
        <nav>
            <a href='#header' rel='noreferrer' className={activeNav === "#header" ? 'active' : ''} onClick={handleNav}><AiOutlineHome /></a>

            <a href='#aboutus' rel='noreferrer' className={activeNav === "#aboutus" ? 'active' : ''} onClick={handleNav}><AiOutlineUser /></a>

            <a href='#products' rel='noreferrer' className={activeNav === "#products" ? 'active' : ''} onClick={handleNav}><AiOutlineShoppingCart /></a>

            <a href='#contact' rel='noreferrer' className={activeNav === "#contact" ? 'active' : ''} onClick={handleNav}><BiMessageSquareDetail /></a>
        </nav>
    )
};

export default Nav;