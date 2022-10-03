import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Request.scss';

const Request = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_81azkkp', 'template_h43rfn4', form.current, 'dcnZ3U-BvlD33_E_z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };
  
    return (
        <section className='request' id='request'>
            <div className="wrapper">
                <div className="request-content">
                    <h1 className="request__h1">LET`S TALK</h1>
                    <p className="request__text">Please provide your contact details</p>
                            <form ref={form} onSubmit={sendEmail} className="request__form">
                            <div>
                                <input type="text" name="name" required placeholder="Name" className="request__form-input"/>
                                <input type="email" name="email-text" required placeholder="Email" className="request__form-input"/>
                            </div>
                            <textarea name="message" rows="6" cols="8" placeholder="Your message" required className="request__form-text"></textarea>
                            <button type="submit" name="submit" value='Send' className="banner-content__btn">send now</button>
                            {/* <input type="submit" value="Send" /> */}
                        </form>
                    
                    <p className="request__text-bottom">We do not sell your personal data.</p>
                </div>
            </div>
        </section>
    );
};

export default Request;