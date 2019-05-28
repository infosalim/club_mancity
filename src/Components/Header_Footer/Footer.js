import React from 'react';
import { CityLogo } from '../UI/Icons';

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    width="70px"
                    height="70px"
                    link={true}
                    linkTo="/"
                />
            </div>
            <div className="footer_discl">
                Manchester city 2019. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;