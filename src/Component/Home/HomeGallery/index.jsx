import React from 'react'
import './hGallery.scss';
import './homemediag.scss';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import { PictureFilled } from '@ant-design/icons';
import ImgHover from '../../CreateComponent/ImgHover';
import { useGlobleContext } from '../../../Context';



export default function HomeGallery() {

  const { ImgData } = useGlobleContext();


  return (
    <div className='homeGalleryWraper'>

      <Row>
        {/* this section is gallery heading  */}
        <Col span={24}>
          <div className="galleryHeading">
            <h1>PS Group gallery</h1>
            <p>beautifull & <span>unforgettable time</span> </p>
          </div>
        </Col>
        {/* this section is gallery box */}
        <Col span={24}>
          <div className="galleryBox">
            <div className="leftSideBox" >
              <div className="boxl" >
                <ImgHover height='500px' width='100%' srcImg={ImgData.gallery1} icon={<PictureFilled />} />
              </div>
              <div className="boxl" >
                <ImgHover height='400px' width='100%' srcImg={ImgData.gallery2} icon={<PictureFilled />} />
              </div>
            </div>
            <div className="rightSideBox" >
              <div className="row" >
                <div className="box1" >
                  <ImgHover height='300px' width='' srcImg={ImgData.gallery3} icon={<PictureFilled />} />
                </div>
                <div className="box2" >
                  <ImgHover height='300px' width='' srcImg={ImgData.gallery4} icon={<PictureFilled />} />
                </div>
              </div>
              <div className="row">
                <div className="box2" >
                  <ImgHover height='300px' width='100%' srcImg={ImgData.gallery5} icon={<PictureFilled />} />
                </div>
                <div className="box1" >
                  <ImgHover height='300px' width='100%' srcImg={ImgData.gallery6} icon={<PictureFilled />} />
                </div>
              </div>
              <div className="row">
                <div className="box1" >
                  <ImgHover height='300px' width='100%' srcImg={ImgData.gallery7} icon={<PictureFilled />} />
                </div>
                <div className="box2" >
                  <ImgHover height='300px' width='100%' srcImg={ImgData.gallery8} icon={<PictureFilled />} />
                </div>
              </div>
            </div>
          </div>
        </Col>
        {/* this section is all button */}
        <Col span={24}>
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
