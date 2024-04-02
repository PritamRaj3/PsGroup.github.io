import { Col, Row } from 'antd'
import React from 'react'
import './frame.scss'
import './framemedia.scss';
import { Link } from 'react-router-dom'

export default function FrameBox(props) {
  return (
    <div className='frameWraper' >
        <Row>
            <Col span={24}>
                <div className="header" style={{backgroundImage:`url(${props.bgPath})`}}>
                    <small className='text'> all you need to know</small>
                    <h1><span>PS</span>{props.pagName}</h1>
                    <div className="pathSection">
                        <Link to='/' ><h2>home</h2></Link>
                        <div className="devider"></div>
                        <h2>{props.pagName}</h2>
                    </div>
                </div>
            </Col>
            <Col span={24}>
                {props.component}
            </Col>
        </Row>      
    </div>
  )
}
