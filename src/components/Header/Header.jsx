import React, { useState, setState } from 'react';
import "./Header.scss";

const Header = () => { 
    const [isActive, setActive] = useState(true)
    
    return (
        <header className='header'>
            <div className="wrapper">
                {/* <div className='header-burger' onClick={()=>{setActive(!isActive)}}>
                    <span></span>
                </div> */}
                <nav className={isActive? 'header-content' : 'header-content _active'} onClick={()=>{setActive(!isActive)}}>
                    <ul className='header-content__menu'>
                        <li className='header-content__menu-item'><a href="#">Home</a></li>
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