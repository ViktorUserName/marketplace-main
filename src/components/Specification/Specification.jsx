import React from 'react';
import Slider from './Slider';
import "./Specification.scss"
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
        </section>
        
    );
};

export default Specification;