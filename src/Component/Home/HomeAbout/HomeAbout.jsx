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
            <Row gutter={8} >
                <Col xl={10} md={24}>
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
                <Col xl={14} md={24}  id=''>
                    <div className="rightSection">
                        <BoxIcon height='200px' width='220px' icon="🤝" h='friendly team' p='more than 200 temas' />
                        <BoxIcon height='200px' width='220px' icon="🍻" h='unique scenario' p='we think out of the box' />
                        <BoxIcon height='200px' width='220px' icon='🎈🎈' h='perfect venues' p='perfect venues' />
                        <BoxIcon height='200px' width='220px' icon={<WhatsAppOutlined />} h='24/7 hours support' p='anytime anywhere' />
                        <BoxIcon height='200px' width='220px' icon='✨✨' h='unforgetable time' p='more than 200 teams' />
                        <BoxIcon height='200px' width='220px' icon="💡" h='briliant idea' p='we think out of the box' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
