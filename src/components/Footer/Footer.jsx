import React from 'react';
import './Footer.scss';
import emeil from '../../img/emeillMG.svg';
import phone from '../../img/phoneIMG.svg';



const Footer = () => {
    return (
        <section className='footer' id='contacts'>
        <div className="wrapper">
            <div className="footer-content">
                <div className="footer__info">
                    <div className="footer__info-item">
                        <p className="footer__info-item-title">Contact information</p>
                        <div className='footer__info-item-label'>
                            <img src={emeil} alt="" className="footer__info-svg" />
                            <p>foxwebduo@gmail.com</p>
                        </div>
                        <div className='footer__info-item-label'>
                            <img src={phone} alt="" className="footer__info-svg" />
                            <p>+375256263144 (life)</p>
                        </div>
                    </div>

                    <div className="footer__info-Socials">
                        <h1 className="footer__info-item-title">Socials</h1>
                        <p>Instagram</p>
                        <a href='https://instagram.com/ch4zc'>@ch4zc</a>
                        <a href='https://instagram.com/lobster_piza'>@lobster_piza</a>
                    </div>
                </div>
                <p className="footer-last">(с) 2022. All Rights Reserved.</p>
            </div>
        </div>      
        </section>
    );
};

export default Footer;