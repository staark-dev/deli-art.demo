import React from 'react';
import './footer.css';
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoTiktok } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer>
            <h1 className='header__logo'>Deli Art</h1>
        
            <ul className="permalinks">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Shop Products</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Terms & Conditions</a></li>
            </ul>

            <div className="footer__socials">
                <a href="#"><BiLogoFacebookCircle /></a>
                <a href="#"><BiLogoInstagramAlt /></a>
                <a href="#"><BiLogoTiktok /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Deli Art. All right reserved.</small>
            </div>
        </footer>
    )
};

export default Footer;