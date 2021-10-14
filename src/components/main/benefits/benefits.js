import React from 'react';
import './benefits.scss'
import benefitsPng from './benefits.png'
import benefitsWebp from './benefits.webp'

const Benefits = () => {
    return (
        <div className='benefits' id='benefits'>
            <div className="container">
                <div className="row flex-wrap">
                    <div className="col-md-6">
                        <div className="benefits__imgBlock">
                            <picture>
                                <source srcSet={benefitsWebp} type='image/webp'/>
                                <img src={benefitsPng} alt="" className='benefits__img'/>
                            </picture>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="benefits__text-block">
                            <h3 className="benefits__title">Преимущества работы с нами</h3>
                            <ul className="benefits__list">
                                <li className="benefits__list-item"><span>1.</span> Порог для инвестиций начинаются с 15$</li>
                                <li className="benefits__list-item"><span>2.</span> Команда опытных специалистов</li>
                                <li className="benefits__list-item"><span>3.</span> Высокая % ставка инвестиционных депозитов</li>
                                <li className="benefits__list-item"><span>4.</span> Личный кабинет для мониторинга личного счета</li>
                                <li className="benefits__list-item"><span>5.</span> Быстрый вывод средств</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;