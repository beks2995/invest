import React from 'react';
import './contacts.scss'

const Contacts = () => {
    return (
        <div className='contacts' id='contacts'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3992.442591677669!2d1.4215665302792526!3d38.91015719128213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129946bc6d9d1985%3A0xb6ca1af29357fa88!2zMDc4MDAg0JjQstC40YHQsCwg0JHQsNC70LXQsNGA0YHQutC40LUg0L4t0LLQsCwg0JjRgdC_0LDQvdC40Y8!5e0!3m2!1sru!2skg!4v1634496449572!5m2!1sru!2skg"
                width="100%" height="490" style={{border: '0'}} allowFullScreen="" loading="lazy"> </iframe>
            <div className="container">
              <div className="contacts__card">
                  <h2 className="contacts__title">Контакты</h2>
                  <address className='contacts__info'>г. Город 85, Укажите адрес компании</address>
                  <a href="tel:+8 (856) 558-122-986" className="contacts__info">+8 (856) 558-122-986</a>
                  <a href="mailto:support@Nextlvl.com" className="contacts__info">support@Nextlvl.com</a>
              </div>
            </div>
        </div>
    );
};

export default Contacts;