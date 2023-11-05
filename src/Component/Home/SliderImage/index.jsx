import React from 'react'
import './slider.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SliderImage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,

    };
    return (
        <div className='sliderName'>
            <Slider {...settings}>
                <div className='sliderImage'>
                    <div className="imageBox">
                        <img src="Images/slider-bg1.jpeg" alt="bannner" />
                    </div>
                </div>
                <div className='sliderImage'>
                    <div className="imageBox">
                        <img src='Images/slider-bg2.jpeg' alt="bannner" />
                    </div>
                </div>
                <div className='sliderImage'>
                    <div className="imageBox">
                        <img src='Images/slider-bg3.jpeg' alt="banner" /></div>
                </div>
                <div className='sliderImage'>
                    <div className="imageBox">
                        <img src='Images/slider-bg4.jpg' alt="banner" /></div>
                </div>
                <div className='sliderImage'>
                    <div className="imageBox">
                        <img src='Images/slider-bg5.jpg' alt="banner" /></div>
                </div>
            </Slider>
        </div>
    )
}
