import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {


    return (
        <main className='footer'>
            <Link to='/about'>
                <p className='about'>ABOUT</p>
            </Link>
            <Link to='/contact'>
                <p className='contact'>CONTACT</p>
            </Link>
        </main>
    )
}

export default Footer;