import React from 'react';
import "./Services.scss"
import "../../Index.scss"
import SPA from '../../img/SPA.svg'
import MPA from '../../img/MPA.svg'
import uxui from '../../img/uxui.svg'
import maintain from '../../img/maintain.svg'


const Services = () => {
    return (
        <section className='services' id='about'>
            <div className="wrapper">
                <div className='services-content'>
                    <div className="services-text">
                        <h2 className='services-text__title'>
                            Create desktop web applications
                        </h2>
                        <p className="services-text__subtitle">
                        We offer services in web apps development, help you choose the UI / UX design for your application. We utilize a wide variety of libraries and frameworks to meet your specific needs.
                        </p>
                    </div>
                    <div className="services-items">
                        <div className="services-items__item">
                            <img src={uxui} alt="" className="services-items__item-img" />
                            <div className="services-items__item-text">
                                <h3 className="item-text__title">UX/UI</h3>
                                <p className="item-text__subtitle">Help to choose design</p>
                            </div>
                        </div>
                        <div className="services-items__item">
                            <img src={SPA} alt="" className="services-items__item-img" />
                            <div className="services-items__item-text">
                                <h3 className="item-text__title">Single-page application</h3>
                                <p className="item-text__subtitle">Create SPA & add new functional to your project</p>
                            </div>
                        </div>
                        <div className="services-items__item">
                            <img src={MPA} alt="" className="services-items__item-img" />
                            <div className="services-items__item-text">
                                <h3 className="item-text__title">Multi-page application</h3>
                                <p className="item-text__subtitle">Create MPA & add new functional to your project</p>
                            </div>
                        </div>
                        <div className="services-items__item">
                            <img src={maintain} alt="" className="services-items__item-img" />
                            <div className="services-items__item-text">
                                <h3 className="item-text__title">Maintenance</h3>
                                <p className="item-text__subtitle">We support the web product after the release</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Services;