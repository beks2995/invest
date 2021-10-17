import React from 'react';
import './tarrifs.scss'

const Tariffs = () => {
    return (
        <div className='tariffs' id='tariffs'>
           <div className="container">
               <h2 className="tariffs__title">
                   Тарифы
               </h2>
                <div className="row">
                    <div className="col-md-3">
                      <div className="tariff-card">
                          <div className="tariff-card__top">
                            <h3 className="tariff-card__title">Сутки</h3>
                              <div className="tariff-card__income">
                                 <div className="tariff-card__income-text">Доходность:</div>
                                 <div className="tariff-card__income-percent">1.2%</div>
                              </div>
                          </div>
                          <div className="tariff-card__text">Бонус: <span>0%</span></div>
                          <div className="tariff-card__text">Депозит: <span>от 15$</span></div>
                          <div className="tariff-card__text">Капитализация: <span>Нет</span></div>
                          <button type="button" className="tariff-card__btn">Инвестировать</button>
                      </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tariff-card">
                            <div className="tariff-card__top">
                                <h3 className="tariff-card__title">Неделя</h3>
                                <div className="tariff-card__income">
                                    <div className="tariff-card__income-text">Доходность:</div>
                                    <div className="tariff-card__income-percent">9.80%</div>
                                </div>
                            </div>
                            <div className="tariff-card__text">Бонус: <span>0%</span></div>
                            <div className="tariff-card__text">Депозит: <span>от 15$</span></div>
                            <div className="tariff-card__text">Капитализация: <span>Нет</span></div>
                            <button type="button" className="tariff-card__btn">Инвестировать</button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tariff-card">
                            <div className="tariff-card__top">
                                <h3 className="tariff-card__title">Две недели</h3>
                                <div className="tariff-card__income">
                                    <div className="tariff-card__income-text">Доходность:</div>
                                    <div className="tariff-card__income-percent">20.45%</div>
                                </div>
                            </div>
                            <div className="tariff-card__text">Бонус: <span>0%</span></div>
                            <div className="tariff-card__text">Депозит: <span>от 15$</span></div>
                            <div className="tariff-card__text">Капитализация: <span>Нет</span></div>
                            <button type="button" className="tariff-card__btn">Инвестировать</button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tariff-card">
                            <div className="tariff-card__top">
                                <h3 className="tariff-card__title">Месяц</h3>
                                <div className="tariff-card__income">
                                    <div className="tariff-card__income-text">Доходность:</div>
                                    <div className="tariff-card__income-percent">45.50%</div>
                                </div>
                            </div>
                            <div className="tariff-card__text">Бонус: <span>0%</span></div>
                            <div className="tariff-card__text">Депозит: <span>от 15$</span></div>
                            <div className="tariff-card__text">Капитализация: <span>Нет</span></div>
                            <button type="button" className="tariff-card__btn">Инвестировать</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Tariffs;