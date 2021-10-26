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
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3500,
            cssEase: "linear",
            pauseOnHover: true
        };
        const usersFeedback = [
            {userName: 'Василий Елисенко', bgColor: '#56CCF2'},
            {userName: 'Александр Воробьев', bgColor: "#55f277"},
            {userName: 'Кирил Александрович', bgColor: "#f2829d"},
            {userName: 'Степан Юрьевич', bgColor: "#f2d846"},
        ];
        return (
            <div className='feedback' id='feedback'>
                <div className="container">
                    <h2 className="feedback__title">Отзывы</h2>
                    <h3 className="feedback__subtitle">Наших клиентов</h3>
                    <Slider {...settings}>
                        {usersFeedback.map((user, idx) => (
                            <div className="feedback-card" key={idx}>
                                <div className="feedback-content">
                                    <h3 className="feedback-content__userName"><span
                                        className="feedback-content__userLetter" style={{background: user.bgColor}}>{user.userName[0]}</span>{user.userName}</h3>
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