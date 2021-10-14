import React from 'react';
import './home.scss'
import homePng from './home.png'
import homeWebp from './home.webp'

const Home = () => {
    return (
        <div className='home' id='home'>
            <div className="container">
                <div className="home-content">
                     <div className="home-text">
                         <h1 className="home-text__title">
                             Платформа для разумных инвестиций
                         </h1>
                         <h2 className="home-text__subtitle">
                             Мы предлагаем действенные и прибыльные инвестирования
                         </h2>
                         <a href="" className="home-text__link">Расcчитать доход</a>
                         <a href="" className="home-text__link">Выбрать тариф</a>
                     </div>
                    <div className="home-img">
                        <picture>
                            <source srcSet={homeWebp} type='image/webp'/>
                            <img src={homePng} alt=""/>
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;