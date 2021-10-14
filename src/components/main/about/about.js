import React from 'react';
import './about.scss'
import aboutPng from './about.png'
import aboutWebp from './about.webp'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about__imgBlock">
                            <picture>
                                <source srcSet={aboutWebp} type='image/webp'/>
                                <img src={aboutPng} alt="two person" className='about__img'/>
                            </picture>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about__textBlock">
                            <h2 className="about__title">О компании</h2>
                            <p className="about__description">
                                В своём стремлении повысить качество жизни, они забывают, что семантический разбор
                                внешних противодействий способствует повышению качества распределения внутренних
                                резервов и ресурсов. Но экономическая повестка сегодняшнего дня, а также свежий взгляд
                                на привычные вещи - безусловно открывает новые горизонты.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;