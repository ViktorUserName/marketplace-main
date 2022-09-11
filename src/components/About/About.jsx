import React from 'react';
import './About.scss';
import AboutImg from '../../img/AboutIMG.png';
import CardSvg from '../../img/AboutItem.svg';


const About = () => {
    return (
        <section className='about'>
            <div className="wrapper">
                <div className="about-content">
                    <div className="about-content__info">
                        <div className="about-content__info-text">
                            <h1>Высокие стандарты разработки</h1>
                            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.  стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                            <a href="#">Подробнее о компании</a>
                        </div>
                        <img src={AboutImg} alt="" className="about-content__info-img" />   
                    </div>

                    <div className="about-content__card">
                        <div className="about-content__card-items">
                            <div className="about-content__card-score">
                                <img src={CardSvg} alt="" className="about-content__card-svg" />
                                <h1>125</h1>   
                            </div>
                            <p>Our projects</p>
                        </div>
                        <div className="about-content__card-items">
                            <div className="about-content__card-score">
                                <img src={CardSvg} alt="" className="about-content__card-svg" />
                                <h1>125</h1>   
                            </div>
                            <p>Our projects</p>
                        </div>
                        <div className="about-content__card-items">
                            <div className="about-content__card-score">
                                <img src={CardSvg} alt="" className="about-content__card-svg" />
                                <h1>125</h1>   
                            </div>
                            <p>Our projects</p>
                        </div>
                        <div className="about-content__card-items">
                            <div className="about-content__card-score">
                                <img src={CardSvg} alt="" className="about-content__card-svg" />
                                <h1>125</h1>   
                            </div>
                            <p>Our projects</p>
                        </div>
                        <div className="about-content__card-items">
                            <div className="about-content__card-score">
                                <img src={CardSvg} alt="" className="about-content__card-svg" />
                                <h1>125</h1>   
                            </div>
                            <p>Our projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default About;
