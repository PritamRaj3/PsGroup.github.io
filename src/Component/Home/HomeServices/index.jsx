import React from 'react'
import './hservices.scss';
import { Col, Row } from 'antd';
import Slider from 'react-slick';
import Sliderservices from '../../CreateComponent/SliderServices';
import { Link } from 'react-router-dom';

export default function HomeServices(props) {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }



  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    appendDots: dots => (
      <div
        style={{
          position: 'initial',
          bottom: "-50px !important",
          padding: "10px",
          margin: '4vw 0vw'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

  };


  return (
    <div className='homeSerWraper'>
      <Row>
        <Col xl={24}>
          <div className="name">our services</div>
          <div className="subName">Expertise</div>
        </Col>
        <Col xl={24}>
          <div className="servicesBox">
            <Slider{...settings}>
              <div className='slide1'>
                <Sliderservices imgPath='images/instaImg6.jpg' eventName='marriage' />
              </div>
              <div className='slide2'>
                <Sliderservices imgPath='images/birthday.jpg' eventName='BirthDay' />

              </div>
              <div className='slide3'>
                <Sliderservices imgPath='images/slider-bg3.jpeg' eventName='Car Decorate' />

              </div>
              <div className='slide4'>
                <Sliderservices imgPath='images/slider-bg4.jpg' eventName='Reception' />
              </div>
              <div className='slide5'>
                <Sliderservices imgPath='images/er.jpeg' eventName='gallery Decoration' />
              </div>
            </Slider>
          </div>
        </Col>
        <Col xl={24}>
          <div className="serBtn">
            <Link to='/services'>
              <button>more Services</button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}
