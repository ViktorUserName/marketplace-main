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
                        <li className='header-content__menu-item'><a href="#">Главная</a></li>
                        <li className='header-content__menu-item'><a href="#">Наши проекты</a></li>
                        <li className='header-content__menu-item'><a href="#">Услуги</a></li>
                        <li className='header-content__menu-item'><a href="#">Новости</a></li>
                        <li className='header-content__menu-item'><a href="#">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;