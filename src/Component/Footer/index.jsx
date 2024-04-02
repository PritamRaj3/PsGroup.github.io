import React from 'react'
import './footer.scss'
import { Col, Row } from 'antd'
import { PhoneFilled, EnvironmentOutlined, FacebookFilled, InstagramFilled, FileDoneOutlined, InstagramOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './footerMedia.scss'
import { useGlobleContext } from '../../Context'


export default function Footer() {
    const {ImgData} = useGlobleContext();
    return (
        <div className='footerWraper '>
            <Row id='footer'>
                <Col xl={8} md={12} sm={12} >
                    <div className="left_footer">
                        <div className="flogo">
                            <img src={ImgData.logo} alt="logoLoding" />
                            <span>PS Group</span>
                        </div>
                        <div className="location">
                            <div className="add">
                                <EnvironmentOutlined />
                                <p>Gaushala Road Dumraon,Buxar,India</p>
                            </div>
                            <div className="phone">
                                <PhoneFilled />
                                <p>62-026 70-211</p>
                            </div>
                        </div>
                        <div className="network">
                            <h2>Network</h2>
                            <div className="icon">
                                <span><FacebookFilled /></span>
                                <Link to='https://instagram.com/indrajeet__singh69?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D' target='_blank' >
                                    <span><InstagramFilled /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={8} md={12} sm={12} >
                    <div className="right_footer">
                        <h3> <span><FileDoneOutlined /></span> Information</h3>
                        <ul>
                            <li> <Link to='/contact'>Contact us</Link></li>
                            <li> <Link to='/about'>About</Link></li>
                            <li> <Link to='/services'>Services</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col xl={8} md={24} >
                    <div className="footer_insta">
                        <h3><span><InstagramOutlined /></span> Instagram</h3>
                        <div className="img_div">
                            <div className="img_box"><img src={ImgData.insta1} alt="insta" /></div>
                            <div className="img_box"><img src={ImgData.insta2} alt="insta" /></div>
                            <div className="img_box"><img src={ImgData.insta3} alt="insta" /></div>
                            <div className="img_box"><img src={ImgData.insta4} alt="insta" /></div>
                            <div className="img_box"><img src={ImgData.insta5} alt="insta" /></div>
                            <div className="img_box"><img src={ImgData.insta6} alt="insta" /></div>
                        </div>
                        <small>Follow my instagram - <Link to='https://instagram.com/indrajeet__singh69?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D' target='_blank' >
                            <span><InstagramFilled /></span>
                        </Link> </small>
                    </div>
                </Col>

                <Col span={24}><small className='footer_btm'>&copy;Copyright - PS Group,2022 </small></Col>
            </Row>
        </div>
    )
}
