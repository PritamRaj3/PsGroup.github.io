import { Col, Row } from 'antd'
import React from 'react'
import './frame.scss'
import { Link } from 'react-router-dom'

export default function FrameBox(props) {
  return (
    <div className='frameWraper' >
        <Row>
            <Col xl={24} sm={24}>
                <div className="header" style={{backgroundImage:`url(${props.bgPath})`}}>
                    <text>all you need to know</text>
                    <h1><span>PS</span>{props.pagName}</h1>
                    <div className="pathSection">
                        <Link to='/' >
                        <h2>home</h2>
                        </Link>
                        <div className="devider"></div>
                        <h2>{props.pagName}</h2>
                    </div>
                </div>
            </Col>
            <Col xl={24} sm={24}>
                {props.component}
            </Col>
        </Row>
      
    </div>
  )
}
