import React from 'react';
import coinPng from './begin.png'
import coinWebp from './begin.webp'
import './begin.scss'

const Begin = () => {
    return (
        <div className='begin' id='begin'>
            <div className="container">
                <div className="begin__content">
                    <h2 className="begin__title">С чего начать инвестирование?</h2>
                    <picture>
                        <source srcSet={coinWebp} type='image/webp'/>
                        <img src={coinPng} alt="coin" className='begin__img'/>
                    </picture>
                    <ul className="step-list">
                        <li className="step-item">
                            <div className="step-item__number">01</div>
                            <div className="step-item__text">Зарегистрируйтесь <br/> на платформе</div>
                        </li>
                        <li className="step-item">
                            <div className="step-item__number">02</div>
                            <div className="step-item__text">Выбираете <br/> подходящий вам тариф</div>
                        </li>
                        <li className="step-item">
                            <div className="step-item__number">03</div>
                            <div className="step-item__text">Подсчет своей прибыли <br/> и ее мониторинг </div>
                        </li>
                        <li className="step-item">
                            <div className="step-item__number">04</div>
                            <div className="step-item__text">Выбор способа пополнения <br/> и вывода средств</div>
                        </li>
                    </ul>
                </div>
                <a href="" className='begin__btn'>Инвестировать прямо сейчас</a>

            </div>
        </div>
    );
};

export default Begin;