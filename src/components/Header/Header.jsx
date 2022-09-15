import React from 'react';
import "./Header.scss";

const Header = () => {
    return (
        <header className='header'>
            <div className="wrapper">
                <div className="header-burger">
                    <span className="span-1"></span>
                    <span className="span-2"></span>
                    <span className="span-3"></span>
                </div>
                <nav className='header-content'>
                    <ul className='header-content__menu'>
                        <li className='header-content__menu-item'><a href="/">Main</a></li>
                        <li className='header-content__menu-item'><a href="#about">About</a></li>
                        <li className='header-content__menu-item'><a href="#ourWork">Our works</a></li>
                        <li className='header-content__menu-item'><a href="#contacts">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;