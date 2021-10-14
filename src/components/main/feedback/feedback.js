import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './feedback.scss'


export default class Feedback extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        const bg = ['#56CCF2', "#55f277", "#f2829d", "#f2d846"];
        return (
            <div className='feedback' id='feedback'>
                <div className="container">
                    <h2 className="feedback__title">Отзывы</h2>
                    <h3 className="feedback__subtitle">Наших клиентов</h3>
                    <Slider {...settings}>
                        {bg.map((bgColor) => (
                            <div className="feedback-card">
                                <div className="feedback-content">
                                    <h3 className="feedback-content__userName"><span
                                        className="feedback-content__userLetter" style={{background: bgColor}}>В</span>Василий Елисенко</h3>
                                    <p className='feedback-content__text'>Спасибо! С вами приятно работать! Быстро вывел
                                        средства на свой счет.</p>
                                </div>
                            </div>
                        ))}

                       </Slider>
                </div>
            </div>
        );
    }
}