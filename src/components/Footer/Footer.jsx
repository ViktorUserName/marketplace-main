import React from 'react';
import './Footer.scss';
import emeil from '../../img/emeillMG.svg';
import phone from '../../img/phoneIMG.svg';



const Footer = () => {
    return (
        <section className='footer'>
        <div className="wrapper">
            <div className="footer-content">
                <div className="footer__info">
                    <div className="footer__info-item">
                        <p className="footer__info-item-title">Контактная информация</p>
                        <div className='footer__info-item-label'>
                            <img src={emeil} alt="" className="footer__info-svg" />
                            <p>example@gmail.com</p>
                        </div>
                        <div className='footer__info-item-label'>
                            <img src={phone} alt="" className="footer__info-svg" />
                            <p>+375256263144 (life)</p>
                        </div>
                    </div>

                    <div className="footer__info-item">
                        <p className="footer__info-item-title">Социальные Сети</p>
                        <div className='footer__info-item-label'>
                            <p>Instaram</p>
                        </div>
                        <div className='footer__info-item-label'>
                            <p>vk.com</p>
                        </div>
                        <div className='footer__info-item-label'>
                            <p>Telegram</p>
                        </div>
                    </div>
                </div>
                <p className="footer-last">(с) 2022. Все права защищены.</p>
            </div>
        </div>      
        </section>
    );
};

export default Footer;