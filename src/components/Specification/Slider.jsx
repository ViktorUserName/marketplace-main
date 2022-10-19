import React from 'react';
import "./slider.scss"

import { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import img1 from "../../img/examples/coffee.png";
import img2 from "../../img/examples/hause.png";
import img3 from "../../img/examples/taste-eat.png";
import img4 from "../../img/examples/dubai.png";

const Slider = () => {
    return (
        <div className='wrapper'>
            <Swiper 
            spaceBetween={50} 
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            slideperview="auto"
            >
            <SwiperSlide>
                    <a href="https://dubai-realty-ex.netlify.app/"  target='_blank' className="slider-a slider-image">
                        <img src={img4} alt="Coffe-shop example" className="teest" />
                        <h1 className="web-info">Adaptive SPA application for Dubai Realty.</h1>
                    </a>
            </SwiperSlide>
            <SwiperSlide>
                    <a href="https://coffee-fox.netlify.app/"  target='_blank' className="slider-a slider-image">
                        <img src={img1} alt="Coffe-shop example" className="teest" />
                        <h1 className="web-info">Adaptive landing page application for coffee shop.</h1>
                    </a>
            </SwiperSlide>
            <SwiperSlide>
                    <a href="https://hause-2a7ddc.netlify.app/"  target='_blank' className="slider-a slider-image">
                        <img src={img2} alt="Premium alcohol shop example" className="teest" />
                        <h1 className="web-info">Adaptive landing page application for Premium alcohol shop.</h1>
                    </a>
            </SwiperSlide>
            <SwiperSlide>
                    <a href="https://tasty-eat.netlify.app"  target='_blank' className="slider-a slider-image">
                        <img src={img3} alt="Restaurant example" className="teest" />
                        <h1 className="web-info">Adaptive landing page application for restaurant.</h1>
                    </a>
            </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;