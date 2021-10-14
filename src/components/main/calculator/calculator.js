import React from 'react';
import calcPng from './calc.png'
import calcWebp from './calc.webp'
import './calc.scss'

const Calculator = () => {
    const rangeHandler = (e) => {
        let target = e.target
        const min = target.min
        const max = target.max
        const val = target.value

        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    };
    return (
        <div className='calc' id='calc'>
            <div className="container">
                <div className="calc-relative">
                    <div className="calcBlock">
                        <div className="calcBlock-text">
                            <h3 className="calcBlock-text__title">Калькулятор доходности</h3>
                            <h4 className="calcBlock-text__subtitle">Посчитайте, сколько вы можете заработать вместе с Nextlvl</h4>
                            <button type='button' className="calcBlock-text__investBtn">Инвестировать сейчас</button>

                        </div>
                        <form className="calcBlock-form">
                            <ul className='calcBlock-form-list'>
                                <li className='calcBlock-form-item'>
                                    <div className='calcBlock-form-item__title'>Сумма инвестирования</div>
                                    <div className='calcBlock-form-item__value calcBlock-form-item__value_sum'>1200$</div>
                                </li>
                                <li className='calcBlock-form-item'>
                                    <div className='calcBlock-form-item__title'>В процентах</div>
                                    <div className='calcBlock-form-item__value calcBlock-form-item__value_percent'>46.14%</div>
                                </li>
                                <li className='calcBlock-form-item'>
                                    <div className='calcBlock-form-item__title'>Бонус</div>
                                    <div className='calcBlock-form-item__value calcBlock-form-item__value_bonus'>+1.14%</div>
                                </li>
                                <li className='calcBlock-form-item'>
                                    <div className='calcBlock-form-item__title'>Прибыль</div>
                                    <div className='calcBlock-form-item__value calcBlock-form-item__value_profit'>+1350$</div>
                                </li>
                            </ul>
                            <input type="range" min='15' max='2400' className='calcBlock-form__range' defaultValue='1200' onChange={rangeHandler}/>
                            <div className="calcBlock-form-term">
                                <div className="calcBlock-form-term__title">Выберите срок инвестиций</div>
                                <button type='button' className='calcBlock-form-term__btn' value='1 день'>1 день</button>
                                <button type='button' className='calcBlock-form-term__btn' value='7 дней'>7 дней</button>
                                <button type='button' className='calcBlock-form-term__btn active' value='14 дней'>14 дней</button>
                                <button type='button' className='calcBlock-form-term__btn' value='28 дней'>28 дней</button>
                            </div>
                            <button type='submit' className="calcBlock-form__investBtn">Инвестировать сейчас</button>
                        </form>

                    </div>
                    <picture>
                        <source srcSet={calcWebp} type='image/webp'/>
                        <img src={calcPng} alt="coin" className='coinBg'/>
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default Calculator;