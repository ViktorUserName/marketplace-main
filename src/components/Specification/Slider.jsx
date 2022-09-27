import React from 'react';
import "./slider.scss"
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import img1 from "../../img/examples/coffee.png";
import img2 from "../../img/examples/hause.png";
import img3 from "../../img/examples/taste-eat.png";

// Swiper.use([Navigation]);
// Swiper.use([Pagination]);

// new Swiper('.swiper', {
//     navigation : {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: 'true',
//         dynamicBullets: 'true',
//     }
// });

const Slider = () => {
    return (
        // <div className='wrapper'>
        //     <div className='swiper'>
            
        //         <div className="swiper-wrapper">
        //             <div className="swiper-slide">
        //                 <div className="slider-image">
        //                     <img src={img1} alt="" className="" />
        //                     <h1 className="web-info">Lorum ipsum</h1>
        //                 </div>
        //             </div>
        //             <div className="swiper-slide">
        //                 <div className="slider-image">
        //                     <img src={img2} alt="" className="" />
        //                     <h1 className="web-info">Lorum ipsum</h1>
        //                 </div>
        //             </div>    
        //             <div className="swiper-slide">
        //                  <div className="slider-image">
        //                     <img src={img3} alt="" className="" />
        //                     <h1 className="web-info">Lorum ipsum</h1>
        //                 </div>
        //             </div> 
        //          </div>
        //          <div class="swiper-pagination size-pag"></div>
        //          <div class="swiper-button-prev"></div>
        //          <div class="swiper-button-next"></div>
        //     </div>

        // </div>
        <div className='wrapper'>
            <Swiper 
            spaceBetween={50} 
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}

            >
            <SwiperSlide>
                    <a href="https://coffee-fox.netlify.app/"  target='_blank' className="slider-a slider-image">
                        <img src={img1} alt="Coffe-shop example" className="teest" />
                        <h1 className="web-info">Single-page application for coffee shop. The app has 3 examples of slider.</h1>
                    </a>
            </SwiperSlide>
            <SwiperSlide>
                    <a href="https://hause-2a7ddc.netlify.app/"  target='_blank' className="slider-a slider-image">
                        <img src={img2} alt="Premium alcohol shop example" className="teest" />
                        <h1 className="web-info">Single-page application for Premium alcohol shop.</h1>
                    </a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="#"  target='_blank' className="slider-a slider-image">
                        <img src={img3} alt="Restaurant example" className="teest" />
                        <h1 className="web-info">Single-page application for restaurant.</h1>
                    </a>
            </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;