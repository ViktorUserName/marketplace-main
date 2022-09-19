import React from 'react';
import './Footer.scss';
import emeil from '../../img/emeillMG.svg';
import phone from '../../img/phoneIMG.svg';
import inst from "../../img/instagramICO.svg";



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
                            <p><a href="mailto:foxwebduo@gmail.com">foxwebduo@gmail.com</a></p>
                        </div>
                        <div className='footer__info-item-label'>
                            <img src={phone} alt="" className="footer__info-svg" />
                            <p><a href="tel:+375256263144">+375256263144</a></p>
                        </div>
                    </div>

                    <div className="footer__info-Socials">
                        <p className="footer__info-item-title">Socials</p>
                        <div className='footer__info-item-label'>
                            <img src={inst} alt="instagramm" />
                            <a href='https://instagram.com/ch4zc'>@ch4zc</a>
                        </div>
                        <div className='footer__info-item-label'>
                            <img src={inst} alt="instagramm" />
                            <a href='https://instagram.com/lobster_piza'>@lobster_piza</a>
                        </div>
                        
                        
                    </div>
                </div>
                <p className="footer-last">(с) 2022. All Rights Reserved.</p>
            </div>
        </div>      
        </section>
    );
};

export default Footer;