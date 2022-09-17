import React from 'react';
import "./slider.scss"
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "./sliderIMG/first.jpg";
import img2 from "./sliderIMG/second.jpg";
import img3 from "./sliderIMG/third.jpg";

Swiper.use([Navigation]);
Swiper.use([Pagination]);

new Swiper('.swiper', {
    navigation : {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        dynamicBullets: 'true',
    }
});

const Slider = () => {
    return (
        <div className='wrapper'>
            <div className='swiper'>
            
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="slider-image">
                            <img src={img1} alt="" className="" />
                            <h1 className="web-info">Lorum ipsum</h1>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slider-image">
                            <img src={img2} alt="" className="" />
                            <h1 className="web-info">Lorum ipsum</h1>
                        </div>
                    </div>    
                    <div className="swiper-slide">
                         <div className="slider-image">
                            <img src={img3} alt="" className="" />
                            <h1 className="web-info">Lorum ipsum</h1>
                        </div>
                    </div> 
                 </div>
                 <div class="swiper-pagination size-pag"></div>
                 <div class="swiper-button-prev"></div>
                 <div class="swiper-button-next"></div>
            </div>

        </div>
    );
};

export default Slider;