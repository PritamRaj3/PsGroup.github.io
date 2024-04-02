import React from 'react'
import './slider.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobleContext } from '../../../Context';


export default function SliderImage() {
    const { ImgData} = useGlobleContext();


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,

    };

    return (
        <div className='sliderName'>
            <Slider {...settings}>
                <div className='sliderImage'>
                    <div className="imageBox">
                        <img src={ImgData.slider1} alt="bannner" />
                    </div>
                </div>
                <div className='sliderImage'>
                    <div className="imageBox">
                        <img src={ImgData.slider2} alt="bannner" />
                    </div>
                </div>
                <div className='sliderImage'>
                    <div className="imageBox">
                        <img src={ImgData.slider3} alt="banner" /></div>
                </div>
                <div className='sliderImage'>
                    <div className="imageBox">
                        <img src={ImgData.slider4} alt="banner" /></div>
                </div>
                <div className='sliderImage'>
                    <div className="imageBox">
                        <img src={ImgData.slider5} alt="banner" /></div>
                </div>
            </Slider>
        </div>
    )
}
