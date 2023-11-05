import React from 'react'
import FrameBox from '../CreateComponent/FrameBox'
import { Col, Row } from 'antd';
import BannerOffer from '../CreateComponent/BannerOffer'
import './about.scss'
import BoxIcon from '../CreateComponent/BoxIcon'
import { WhatsAppOutlined } from '@ant-design/icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function About() {

  const AboutContainer = () => {

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
      <>
        <Row className='aboutWraper'>
          <Col xl={24}>
            <strong>PS Group</strong>
            {/* this section is first row mission and vission Box Content */}
            <div className="miviWraper">
              <div className="mission box">
                <div className="title"><h1>our Mission <span><div className="line"></div></span></h1></div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
                <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi.
                </div>
              </div>
              <div className="vission box">
                <div className="title"><h1>our Vission <span><div className="line"></div></span></h1></div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
                <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi.
                </div>
              </div>
            </div>
          </Col>

          {/* this section is second row and advantage content  */}
          <Col xl={24}>
            <div className="chooseSection">
              <div className="choiseHead">
                <hr />
                <h2>why Choose us</h2>
                <p>PS Group Advantages</p>
              </div>
              <div className="choiseContent">
                < BoxIcon height='250px' width='250px' icon="🤝" h='friendly team' p='more than 200 temas' />
                < BoxIcon height='250px' width='250px' icon="🍻" h='unique scenario' p='we think out of the box' />
                < BoxIcon height='250px' width='250px' icon='🎈🎈' h='perfect venues' p='perfect venues' />
                < BoxIcon height='250px' width='250px' icon={<WhatsAppOutlined />} h='24/7 hours support' p='anytime anywhere' />
                < BoxIcon height='250px' width='250px' icon='✨✨' h='unforgetable time' p='more than 200 teams' />
                < BoxIcon height='250px' width='250px' icon="🕯️"  h='briliant idea' p='we think out of the box' />
                < BoxIcon height='250px' width='250px' icon='📆'  h='unique scenario' p='perfect venues' />
                < BoxIcon height='250px' width='250px' icon='🎇'  h='best management' p='anytime anywhere' />
              </div>
            </div>
          </Col>
        </Row>
        <Row>

          {/* this section is third row for slider testmonial */}
          <Col xl={24}>
            <div className="sliderWraper">
              <Slider {...settings}>
                <div>
                  <div className="sliderSer">
                    <i> 🌟 </i>
                    <big>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consecteturDolores?</big>                    
                    <cite>_sumant Raj </cite>
                  </div>
                </div>
                <div>
                <div className="sliderSer">
                    <i>🌟</i>
                    <big>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consecteturDolores?</big>                    
                    <cite>-Priyanshu Raj </cite>
                  </div>
                </div>
                <div>
                <div className="sliderSer">
                    <i>🌟</i>
                    <big>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Dolores?</big>                    
                    <cite>-Soul Raj </cite>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
        <BannerOffer />
      </>
    )
  }


  return (
    <div>
      <FrameBox pagName='about' component={<AboutContainer />} bgPath='images/about-bg.png' />
    </div>
  )
}
