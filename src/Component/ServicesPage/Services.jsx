import React from 'react'
import FrameBox from '../CreateComponent/FrameBox';
import { Col, Row } from 'antd';
import ServicesModel from '../CreateComponent/ServiceModel';
import BannerOffer from '../CreateComponent/BannerOffer'
import { useGlobleContext } from '../../Context';

export default function Services() {
const {ImgData} = useGlobleContext();

  const ServicesDesign = () => {

    const serviceData = [
      {
        img: ImgData.insta1,
        Name: 'wedding',
        about: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci, officiis voluptatibus porro autem.',
        inform: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci ',
        flexDirection: 'row'
      },
      {
        img: ImgData.slider2,
        Name: 'reception',
        about: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci, officiis voluptatibus porro autem.',
        inform: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci ',
        flexDirection: 'row-reverse'
      },
      {
        img:ImgData.cake ,
        Name: 'birthday',
        about: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci, officiis voluptatibus porro autem.',
        inform: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci ',
        flexDirection: 'row'
      },
      {
        img: ImgData.insta2,
        Name: 'all decoration',
        about: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci, officiis voluptatibus porro autem.',
        inform: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci ',
        flexDirection: 'row-reverse'
      },
      {
        img: ImgData.car,
        Name: 'car decoration',
        about: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci, officiis voluptatibus porro autem.',
        inform: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci ',
        flexDirection: 'row'
      },
      {
        img: ImgData.insta5,
        Name: 'gallery decoration',
        about: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci, officiis voluptatibus porro autem.',
        inform: ' dolor sit amet consectetur adipisicing elit. Exercitationem atque adipisci ',
        flexDirection: 'row-reverse'
      },
    ];


    return (
      <>
        {
          serviceData.map((currElement, index) => {
            return (
                <Row key={index}>
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
            );
          })
        }
      </>
    )

  }


  return (
    <div>
      <FrameBox pagName='services' component={<ServicesDesign />} bgPath={ImgData.aboutbg} />
      <BannerOffer />
    </div>
  )
}
