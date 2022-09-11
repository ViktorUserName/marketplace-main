import React from 'react';
import './Request.scss';

const Request = () => {
    return (
        <section className='request'>
        <div className="wrapper">
            <div className="request-content">
                <h1 className="request__h1">Подпишитесь на нашу рассылку</h1>
                <p className="request__text">Полезные статьи, акции, новости - получите все это сейчас!</p>
                <div className="request__conteiner">
                    <input type="text" placeholder='Введите ваш e-mail' className="request__conteiner-input" />
                    <button className="request__conteiner-button">Подписаться</button>
                </div>
                <p className="request__text-bottom">Мы не шлем спам, и передаем никому ваши данные.</p>
            </div>
        </div>
        </section>
    );
};

export default Request;