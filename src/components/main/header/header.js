import React from 'react';
import {useDispatch} from "react-redux";
import {openLoginForm, openRegForm} from "../../../redux/reducers/popupReducer";
import './header.scss'
import logoPng from './logo.png'
import logoWebp from './logo.webp'

const Header = () => {
    const dispatch = useDispatch();
    const popupHandler = (e) => {
        if(e.target.className.includes('sign-in')){
            dispatch(openLoginForm())
        }
        if(e.target.className.includes('reg')){
            dispatch(openRegForm())
        }
    };
    return (
        <div className='header'>
          <div className="container">
              <nav className="header__nav">
                  <a href="#home" className="header__logo">
                      <picture>
                          <source srcSet={logoWebp} type='image/webp'/>
                          <img src={logoPng} alt="" className='header__logo-img'/>
                      </picture>
                      LogoCreat
                  </a>
                  <div className="menu">
                      <a href="#tariffs" className="menu-item">Тарифы</a>
                      <div className="menu-item dropdown">
                          <span className='dropdown__text'>Как мы работаем</span>
                          <div className="dropdown-content">
                              <a href="#benefits" className="dropdown__link">Наши преимущества</a>
                              <a href="#begin" className="dropdown__link">С чего начать инвестирование</a>
                              <a href="#calc" className="dropdown__link">Калькулятор доходности</a>
                          </div>
                      </div>
                      <a href="#about" className="menu-item">О компании</a>
                      <a href="#feedback" className="menu-item">Отзывы</a>
                      <a href="#faq" className="menu-item">FAQ</a>
                      <a href="#contacts" className="menu-item">Контакты</a>
                  </div>
                  <div className="personal">
                      <button type='button' className='sign-in' onClick={popupHandler}>Войти</button>
                      <button type='button' className='reg' onClick={popupHandler}>Регистрация</button>
                      <button type='button' className='logged hidden'>Личный кабинет</button>
                  </div>
              </nav>
          </div>
        </div>
    );
};

export default Header;