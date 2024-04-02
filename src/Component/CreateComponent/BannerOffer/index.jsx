import { Col, Row } from 'antd'
import React from 'react'
import './banner.scss';
import './bannerMedia.scss'
import { Link } from 'react-router-dom'

export default function BannerOffer(props) {
  return (
    <div className='offerSection'>
       <Row justify={'center'}>
          <Col xl={18} md={24}>
            <div className="title">
              <h1><span>30%</span>off in june~jully For <span>Birthday events</span></h1>
              <p>Contact us now and we will make your event  unique & Unforgettable </p>
            </div>
          </Col>
          <Col xl={6} md={24}>
            <div className="buttonBox">
              <Link to='/contact'>
                <button>make an event now</button>
              </Link>
            </div>
          </Col>
        </Row>
    </div>
  )
}
