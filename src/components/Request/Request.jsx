import React from 'react';
import './Request.scss';

const Request = () => {
    return (
        <section className='request'>
            <div className="wrapper">
                <div className="request-content">
                    <h1 className="request__h1">LET`S TALK</h1>
                    <p className="request__text">Please provide your contact details</p>
                    
                        <form action="#" method='post' className="request__form">
                            <div>
                                <input type="text" name="name" required placeholder="Name" className="request__form-input"/>
                                <input type="email" name="email-text" required placeholder="Email" className="request__form-input"/>
                            </div>
                            <textarea name="message" rows="6" cols="8" placeholder="Your message" required className="request__form-text"></textarea>
                            <button type="submit" name="submit" className="banner-content__btn">send now</button>
                        </form>
                    
                    <p className="request__text-bottom">We do not sell your personal data.</p>
                </div>
            </div>
        </section>
    );
};

export default Request;