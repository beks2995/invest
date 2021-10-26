import React from 'react';
import './footer.scss'
import footerLogoPng from './footerLogo.png'
import footerLogoWebp from './footerLogo.webp'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="container">
              <div className="footer__row">
                  <div className="footer__col">
                      <a href="" className='footer__logo'>
                          <picture>
                              <source srcSet={footerLogoWebp} type='image/webp'/>
                              <img src={footerLogoPng} alt=""/>
                          </picture>
                          LogoCreat
                      </a>
                  </div>
                  <div className="footer__col">
                      <a href="" className='footer__link'>О компании</a>
                      <a href="" className='footer__link'>Тарифы</a>
                      <a href="" className='footer__link'>Наши преимущества</a>
                      <a href="" className='footer__link'>Калькулятор доходности</a>
                      <a href="" className='footer__link'>Контакты</a>
                  </div>
                  <div className="footer__col">
                      <a href="" className='footer__link'>Отзывы</a>
                      <a href="" className='footer__link'>FAQ</a>
                      <a href="" className='footer__link'>Клиентское соглашение</a>
                      <a href="" className='footer__link'>Личный кабинет</a>
                  </div>
              </div>
            </div>
            <div className="subfooter">
                © 2021 ООО «‎Nextlvl»
            </div>
        </div>
    );
};

export default Footer;