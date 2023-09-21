import React from 'react';

import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoTiktok } from 'react-icons/bi';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.facebook.com/profile.php?id=100068131505061"><BiLogoFacebookCircle /></a>
            <a href="https://instagram.com/deli.art95"><BiLogoInstagramAlt /></a>
            <a href="#tiktok"><BiLogoTiktok /></a>
        </div>
    )
};

export default HeaderSocials;