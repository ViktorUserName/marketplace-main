import React from 'react';
import "./Specification.scss"
import SpecImg from '../../img/SpecificationIMG.png'
import Slider from './Slider';
import "./slider.scss";


const Specification = () => {
    return (
        <section className='specification' id='ourWork'>

        <div className="specification__present">
            <div className="wrapper">    
                <div className="specification__present-content">
                        <h1>
                        Examples of our projects
                        </h1>
                </div>
            </div>
        </div>

        <div className="specification__examples">
        <Slider/>
        </div>
        {/* <div className="specification__examples">
            <div className="wrapper">
                <div className="specification__examples-items">
                    <div className="specification__examples-item">
                        <img src={SpecImg} alt=""/>
                        <h1>01. Исследование и упаковка</h1>
                        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                        <a href="#">Подробнее</a>
                    </div>
                    <div className="specification__examples-item">
                        <img src={SpecImg} alt=""/>
                        <h1>01. Исследование и упаковка</h1>
                        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                        <a href="#">Подробнее</a>
                    </div>
                    <div className="specification__examples-item">
                        <img src={SpecImg} alt=""/>
                        <h1>01. Исследование и упаковка</h1>
                        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                        <a href="#">Подробнее</a>
                    </div>
                </div>
            </div>
        </div> */}
        </section>
        
    );
};

export default Specification;