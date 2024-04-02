import { Col, Row } from 'antd'
import React from 'react'
import './sliderS.scss'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'


export default function SliderServices(props) {
    return (
        <div className='overFlow'>
            <Row>
                <Col xl={24} >
                    <div className="container">
                        <div className="child " style={{ backgroundImage: `url(${props.imgPath})` }}>
                            <span>
                                <Link to='/services'>
                                    <PlusOutlined />
                                </Link>
                            </span>
                            <div className="priceDetails">
                                <div className="nameEvent">
                                    <small>{props.eventName}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}
