import React from 'react';
import './About.scss';
import AboutImg from '../../img/BlockIMG.jpg';
import CardSvg from '../../img/AboutItem.svg';


const About = () => {
    return (
        <section className='about'>
            <div className="wrapper">
                <div className="about-content">
                    <div className="about-content__info">
                        <div className="about-content__info-text">
                            <h1>High quality of development</h1>
                            <p>We use React-tools for solve all  development tasks. Do you want single-page application? Or maybe you want multipage application?
Write us, we help you to choose design for your application, estimate the time and do best in the shortest possible time.</p>
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
