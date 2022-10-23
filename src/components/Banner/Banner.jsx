import React, {useState} from 'react';
import "./Banner.scss";
import PopOutInput from './PopOutInput';


const Banner = () => {
    const [popupActive, setPopupActive] = useState(false);
    const popupMenuActive = () => setPopupActive(!popupActive)
    return (
        <main className="banner" id='home'>
            <div className="wrapper">
                <div className='banner-content'>
                    <p className='banner-content__subtitle'>
                        Web Studio
                    </p>
                    <h1 className="banner-content__title">
                    we create websites & apps
                    </h1>
                    <p className="banner-content__subtitle">
                    Create and maintain a quality web product is our priority
                    </p>
                    <button onClick={popupMenuActive} className="banner-content__btn">
                        Let`s talk
                    </button>
                    <PopOutInput change={popupActive} onClick={popupMenuActive}/>
                </div>
            </div>
        </main>
    );
};

export default Banner;