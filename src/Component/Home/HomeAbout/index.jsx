import React from 'react'
import './homeAbout.scss';
import './homeAboutMedia.scss';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import BoxIcon from '../../CreateComponent/BoxIcon';
import { WhatsAppOutlined } from '@ant-design/icons';

export default function HomeAbout() {
    return (
        <div className='homeAboutWraper'>
            <hr className='hrHeight' />
            <Row gutter={8} justify={'space-evenly'}>
                <Col xl={10} md={24} sm={24}>
                    <div className="leftSection">
                        <h4>We are PS Group</h4>
                        <h1><span>PS</span> Event Management</h1>
                        <div className="para">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias delectus quos officia! Odio molestiae sapiente, omnis eaque corrupti ullam dolorem harum cum nesciunt nulla.</p>
                        </div>
                        <div className="buttonBox">
                            <Link to='about'>
                                <button>about ps group</button>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col xl={14} md={24} sm={24}>
                    <div className="rightSection">
                        <Row>
                            <Col xl={24} sm={24}>
                                <Row>
                                    <Col xl={8} sm={24}>
                                        <BoxIcon height='240px' width='250px' icon= "🤝" h='friendly team' p='more than 200 temas' />
                                    </Col>
                                    <Col xl={8} sm={24}>
                                        <BoxIcon height='240px' width='250px' icon = "🍻" h= 'unique scenario' p='we think out of the box' />
                                    </Col>
                                    <Col xl={8} sm={24}>
                                        <BoxIcon height='240px' width='250px' icon = '🎈🎈' h= 'perfect venues' p = 'perfect venues' />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={24} sm={24}>
                                <Row>
                                    <Col xl={8} sm={24} >
                                        <BoxIcon  height='240px' width='250px' icon = {<WhatsAppOutlined/>} h= '24/7 hours support' p= 'anytime anywhere' />
                                    </Col>
                                    <Col xl={8} sm={24}>
                                        <BoxIcon height='240px' width='250px' icon = '✨✨' h='unforgetable time' p='more than 200 teams' />
                                    </Col>
                                    <Col xl={8} sm={24}>
                                        <BoxIcon height='240px' width='250px' icon = "💡" h= 'briliant idea' p='we think out of the box' />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
