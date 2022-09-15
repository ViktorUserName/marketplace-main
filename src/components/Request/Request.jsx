import React from 'react';
import './Request.scss';

const Request = () => {
    return (
        <section className='request'>
        <div className="wrapper">
            <div className="request-content">
                <h1 className="request__h1">LET`S TALK</h1>
                <p className="request__text">Please provide your contact details</p>
                <div className="request__conteiner">
                    <form action="/" method='post' className="request__form">
                        <label for="message">
                        <input type="text" name="name" required="" placeholder="Name" class="request__form-input"/>
                        <input type="email" name="email-text" required="" placeholder="Email" class="request__form-input"/>
                        <textarea name="message" placeholder="Your message" required="" class="request__form-text"></textarea>
                        </label>
                        <button type="submit" name="submit" font-size="inherit" font-weight="bold" color="white" class="banner-content__btn">send now</button>
                    </form>
                </div>
                <p className="request__text-bottom">We do not sell your personal data</p>
            </div>
        </div>
        </section>
    );
};

export default Request;