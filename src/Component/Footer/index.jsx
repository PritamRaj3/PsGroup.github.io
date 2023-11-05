import React from 'react'
import './footer.scss'
import { Col, Row } from 'antd'
import { PhoneFilled, EnvironmentOutlined, FacebookFilled, InstagramFilled } from '@ant-design/icons'
// import ImgHover from '../CreateComponent/ImgHover'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className='footerWraper '>
            <Row id='footer'>
                <Col xl={12} md={24} sm={24} >
                    <div className="leftSection">
                        <div className="flogo">
                            <img src="images/logo.jpg" alt="logoLoding" />
                            <span>PS Group</span>
                        </div>
                        <div className="location">
                            <div className="add">
                                <EnvironmentOutlined />
                                <p>Gaushala Road Dumraon,Buxar,India</p>
                            </div>
                            {/* <div className="mail">
                                <MailFilled />
                                <p>contact@gmail.com</p>
                            </div> */}
                            <div className="phone">
                                <PhoneFilled />
                                <p>62-026 70-211</p>
                            </div>

                        </div>
                        <div className="network">
                            <h2>Network</h2>
                            <div className="icon">
                                <span><FacebookFilled /></span>
                                <span> <spWhatsAppOutlined /></span>
                                <Link to='https://instagram.com/indrajeet__singh69?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D' >
                                    <span><InstagramFilled /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={12} md={24} sm={24}>
                    
                </Col>
            </Row>
        </div>
    )
}
