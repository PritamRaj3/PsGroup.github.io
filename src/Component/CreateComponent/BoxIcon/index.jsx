import React from 'react'
import './boxicon.scss';
import './boxMedia.scss'

import { Col, Row } from 'antd'

export default function BoxIcon(props) {
    return (
        <div className='boxiconWraper'>
            <Row>
                <Col xl={8} sm={24}>
                    <div className="box"
                        style={
                            {
                                height: `${props.height}` ,
                                width: `${props.width}` 

                            }
                        }>
                        <div className="iconBox">
                            {props.icon}
                        </div>
                        <div className="detailBox">
                            <strong className='strong'>{props.h}</strong>
                            <p>{props.p}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
