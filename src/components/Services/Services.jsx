import React from 'react';
import "./Services.scss"
import "../../Index.scss"
import itemSvg from '../../img/ServicesIMG.svg'
import multiple from '../../img/multiple2.png'
import uxui from '../../img/uxui.svg'



const Services = () => {
    return (
        <section className='services' id='about'>
            <div className="wrapper">
                <div className='services-content'>
                    <div className="services-text">
                        <h2 className='services-text__title'>
                        We create desktop web applications
                        </h2>
                        <p className="services-text__subtitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit ut fugit eveniet commodi labore saepe autem magni non animi?
                        </p>
                    </div>
                    <div className="services-items">
                        <div className="services-items__item">
                            <img src={uxui} alt="" className="services-items__item-img" />
                            <div className="services-items__item-text">
                                <h3 className="item-text__title">UX/UI</h3>
                                <p className="item-text__subtitle">We help to choose design</p>
                            </div>
                        </div>
                        <div className="services-items__item">
                            <img src={itemSvg} alt="" className="services-items__item-img" />
                            <div className="services-items__item-text">
                                <h3 className="item-text__title">Single-page application</h3>
                                <p className="item-text__subtitle">Create SPA from scratch and add new to your project</p>
                            </div>
                        </div>
                        <div className="services-items__item">
                            <img src={multiple} alt="" className="services-items__item-img" />
                            <div className="services-items__item-text">
                                <h3 className="item-text__title">Multi-page application</h3>
                                <p className="item-text__subtitle">Create MPA from scratch and add new to your project</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Services;