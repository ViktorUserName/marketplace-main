import React from 'react';
import "./Banner.scss"


const Banner = () => {
    return (
        <main className="banner" id='home'>
            <div className="wrapper">
                <div className='banner-content'>
                    <p className='banner-content__subtitle'>
                        Web Studio
                    </p>
                    <h1 className="banner-content__title">
                    we create websites & apps
                    </h1>
                    <p className="banner-content__subtitle">
                    Create and maintain a quality web product is our priority
                    </p>
                    <a href="#request" className="banner-content__btn">
                        Let`s talk
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Banner;