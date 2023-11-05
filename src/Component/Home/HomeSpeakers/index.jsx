import React from 'react'
import './homeSpeakers.scss'
import { Col, Row } from 'antd'



export default function HomeSpeakers() {
   
    return (
        <div className='hSpeakersWraper'>
            <Row> 
                <Col span={12}>
                    <div className="leftImg">
                        <img src="images/galleryhome.jpg" alt="" />
                    </div>
                </Col>
                <Col span={12}>
                    <div className="rightContainer">
                        <hr />
                        <Row>
                            <Col xl={24}>
                                <div className="speakersHeading">
                                    <div className="subTitle">
                                        <small>ps creater</small>
                                    </div>
                                    <div className="title">
                                        <h2>professional <span>speakers</span></h2>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={24}>
                                <div className="speakAbout">
                                    <div className="nameAbout">
                                        <h3>Sumant Raj</h3>
                                        <div className="hr"></div>
                                        <span>1 years exprenced</span>
                                    </div>
                                    <div className="about">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, voluptatem? Iste cumque repellat veniam eveniet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, aliquid sint ducimus accusantium sed ad.
                                        </p>
                                    </div>
                                    {/* <div className="socialSection">
                                        <h3>Soical Networks</h3>
                                        <div className="icon">
                                            <FacebookFilled />
                                            <WhatsAppOutlined />
                                            <InstagramFilled />
                                        </div>
                                    </div> */}
                                </div>
                            </Col>
                            <Col xl={24}>
                                {/* <div className='videoBox'>
                                  <video src="video/mehandi.mp4" autoPlay  loop  ></video>
                                </div> */}
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
