import React from 'react'
import './hservices.scss';
import { Col, Row } from 'antd';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import SliderServices from '../../CreateComponent/SliderServices';
import { useGlobleContext } from '../../../Context';

export default function HomeServices() {

  const {ImgData} =useGlobleContext();

  // this function is  slider for ant design, start 
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
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    slidesToShow: 3,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ],

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
  // this function is hide slider for ant design, end 


  return (
    <div className='homeSerWraper'>
      <Row>
        <Col span={24}>
          <div className="name">our services</div>
          <div className="subName">Expertise</div>
        </Col>
        <Col span={24}>
          <div className="servicesBox">
            <Slider {...settings}>
              <div className='slide1 slide'>
                <SliderServices imgPath={ImgData.expertise1} eventName='Marriage' />
              </div>
              <div className='slide2 slide'>
                <SliderServices imgPath={ImgData.expertise2} eventName='BirthDay' />
              </div>
              <div className='slide3 slide'>
                <SliderServices imgPath={ImgData.expertise3} eventName='All Event' />
              </div>
              <div className='slide4 slide'>
                <SliderServices imgPath={ImgData.expertise4} eventName='Gallery Decoration' />
              </div>
              <div className='slide5 slide'>
                <SliderServices imgPath={ImgData.expertise5} eventName='Home Decoration' />
              </div>
            </Slider>
          </div>
        </Col>
        <Col span={24}>
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
