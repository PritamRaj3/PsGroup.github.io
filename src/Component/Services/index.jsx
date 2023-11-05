import React from 'react'
import FrameBox from '../CreateComponent/FrameBox';
import { Col, Row } from 'antd';
import ServicesModel from '../CreateComponent/ServiceModel';
import BannerOffer from '../CreateComponent/BannerOffer'

export default function Services() {

  const ServicesDesign = () => {

    const serviceData = [
      {
        img: 'images/instaImg6.jpg',
        Name: 'wedding',
        about: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci, officiis voluptatibus porro autem.',
        inform: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci ',
        flexDirection: 'row'
      },
      {
        img: 'images/slider-bg2.jpeg',
        Name: 'reception',
        about: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci, officiis voluptatibus porro autem.',
        inform: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci ',
        flexDirection: 'row-reverse'
      },
      {
        img: 'images/birthday.jpg',
        Name: 'birthday',
        about: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci, officiis voluptatibus porro autem.',
        inform: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci ',
        flexDirection: 'row'
      },
      {
        img: 'images/galleryD.jpg',
        Name: 'all decoration',
        about: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci, officiis voluptatibus porro autem.',
        inform: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci ',
        flexDirection: 'row-reverse'
      },
      {
        img: 'images/slider-bg5.jpg',
        Name: 'car decoration',
        about: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci, officiis voluptatibus porro autem.',
        inform: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci ',
        flexDirection: 'row'
      },
      {
        img: 'images/er.jpeg',
        Name: 'gallery decoration',
        about: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci, officiis voluptatibus porro autem.',
        inform: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci ',
        flexDirection: 'row-reverse'
      },



    ];


    return (
      <>
        {
          serviceData.map((currElement) => {

            return (
              <>

                <Row>
                  <Col xl={24}>
                    <ServicesModel
                      imgServices={currElement.img}
                      sName={currElement.Name}
                      about={currElement.about}
                      inform={currElement.inform}
                      flexDirection={currElement.flexDirection}
                    />
                  </Col>
                </Row>

              </>
            );
          })
        }
      </>
    )

  }


  return (
    <div>
      <FrameBox pagName='services' component={<ServicesDesign />} bgPath='images/about-bg.png' />
      <BannerOffer />
    </div>
  )
}
