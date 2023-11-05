import React from 'react'
import './hGallery.scss';
import './homemediag.scss';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import { PictureFilled } from '@ant-design/icons';
import ImgHover from '../../CreateComponent/ImgHover';



export default function HomeGallery() {

  return (
    <div className='homeGalleryWraper'>

      <Row>
        {/* this section is gallery heading  */}
        <Col xl={24} sm={24} md={24}>
          <div className="galleryHeading">
            <h1>PS Group gallery</h1>
            <p>beautifull & <span>unforgettable time</span> </p>
          </div>
        </Col>
        {/* this section is gallery box */}
        <Col xl={24} sm={24} md={24}>
          <div className="galleryBox">
            <div className="leftSideBox" >
              <div className="box" >
                <ImgHover height='500px' width='350px' srcImg='images/galleryround.jpeg' icon={<PictureFilled />} />
              </div>
              <div className="box" >
                <ImgHover height='400px' width='350px' srcImg='images/galleryj.jpg' icon={<PictureFilled />} />
              </div>
            </div>
            <div className="rightSideBox" >

              <div className="row" >
                <div className="box1" >
                  <ImgHover height='300px' width='100%' srcImg='images/galleryR.jpg' icon={<PictureFilled />} />
                </div>
                <div className="box2" >
                  <ImgHover height='300px' width='100%' srcImg='images/galleryw.jpg' icon={<PictureFilled />} />
                </div>
              </div>
              <div className="row">
                <div className="box2" >
                  <ImgHover height='300px' width='100%' srcImg='images/galleryP.jpg' icon={<PictureFilled />} />
                </div>
                <div className="box1" >
                  <ImgHover height='300px' width='100%' srcImg='images/er.jpeg' icon={<PictureFilled />} />
                </div>
              </div>
              <div className="row">
                <div className="box1" >
                  <ImgHover height='300px' width='100%' srcImg='images/galleryBeach.jpg' icon={<PictureFilled />} />
                </div>
                <div className="box2" >
                  <ImgHover height='300px' width='100%' srcImg='images/galleryD.jpg' icon={<PictureFilled />} />
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* this section is all button */}
        <Col xl={24} sm={24} md={24}>
          <div className="allButton">
            <Link to='gallery'>
              <button>view all gallery</button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}
