import React from 'react';
import './About.scss';
import AboutImg from '../../img/BlockIMG.jpg';
import js from '../../img/js.svg';
import ts from '../../img/ts.svg';
import sass from '../../img/sass.svg';
import rreact from '../../img/react.svg';
import redux from '../../img/redux.svg';

const About = () => {
    return (
        <section className='about'>
            <div className="wrapper">
                <div className="about-content">
                    <div className="about-content__info">
                        <div className="about-content__info-text">
                            <h1>High quality of development</h1>
                            <p>
                                We use React-tools for solve all  development tasks. Do you want single-page application? Or maybe you want multipage application?
                                Write us, we help you to choose design for your application, estimate the time and do best in the shortest possible time.
                            </p>
                        </div>
                        <img src={AboutImg} alt="" className="about-content__info-img" />   
                    </div>

                    <div className="about__technologi">
                        TECHNOLOGIES WE USE
                    </div>

                    <div className="about-content__card">
                        <div className="about-content__card-items">
                            <div className="about-content__card-score">
                                <img src={js} alt="" className="about-content__card-svg" />
                            </div>
                            <p>JavaScript</p>
                        </div>
                        <div className="about-content__card-items">
                            <div className="about-content__card-score">
                                <img src={ts} alt="" className="about-content__card-svg" />  
                            </div>
                            <p>TypeScript</p>
                        </div>
                        <div className="about-content__card-items">
                            <div className="about-content__card-score">
                                <img src={sass} alt="" className="about-content__card-svg" />
                            </div>
                            <p>Sass</p>
                        </div>
                        <div className="about-content__card-items">
                            <div className="about-content__card-score">
                                <img src={rreact} alt="" className="about-content__card-svg" />   
                            </div>
                            <p>React</p>
                        </div>
                        <div className="about-content__card-items">
                            <div className="about-content__card-score">
                                <img src={redux} alt="" className="about-content__card-svg" />  
                            </div>
                            <p>Redux</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default About;
