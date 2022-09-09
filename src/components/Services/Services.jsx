import React from 'react';
import "./Services.scss"
import "../../Index.scss"
import itemSvg from '../../img/ServicesIMG.svg'

const Services = () => {
    return (
        <section className='services'>
            <div className="wrapper">
                <div className='services-content'>
                    <div className="services-text">
                        <h2 className='services-text__title'>
                            Мы создаем мобильные приложениядля крупных корпораций
                        </h2>
                        <p className="services-text__subtitle">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Explicabo eveniet placeat similique aliquam corporis repudiandae
                            corrupti neque doloremque laboriosam facilis.
                        </p>
                    </div>
                    <div className="services-items">
                        <div className="services-items__item">
                            <img src={itemSvg} alt="" className="services-items__item-img" />
                            <div className="services-items__item-text">
                                <h3 className="item-text__title">Создание сайтов</h3>
                                <p className="item-text__subtitle">Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
                            </div>
                        </div>
                        <div className="services-items__item">
                            <img src={itemSvg} alt="" className="services-items__item-img" />
                            <div className="services-items__item-text">
                                <h3 className="item-text__title">Создание сайтов</h3>
                                <p className="item-text__subtitle">Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
                            </div>
                        </div>
                        <div className="services-items__item">
                            <img src={itemSvg} alt="" className="services-items__item-img" />
                            <div className="services-items__item-text">
                                <h3 className="item-text__title">Создание сайтов</h3>
                                <p className="item-text__subtitle">Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Services;