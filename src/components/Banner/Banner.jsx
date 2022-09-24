import React from 'react';
import Header from '../Header/Header';
import "./Banner.scss"


const Banner = () => {
    return (
        <main className="banner">
            <Header/>
            <div className="wrapper">
                <div className='banner-content'>
                    <p className='banner-content__subtitle'>
                        Web Studio
                    </p>
                    <h1 className="banner-content__title">
                    Сreate easy solutions for difficult tasks and problems
                    </h1>
                    <a href="#ourWork" className="banner-content__btn">
                        Our Works
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Banner;