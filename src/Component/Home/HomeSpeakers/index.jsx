import React, { useState } from 'react'
import './homeSpeakers.scss'
import { Col, Row } from 'antd'
import './mediaHos.scss'
import { FacebookFilled, InstagramFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useGlobleContext } from '../../../Context'



export default function HomeSpeakers() {

    const {ImgData} = useGlobleContext();
    let Sumant = ImgData.gallery8;
    let Priyanshu = ImgData.gallery7;

    const [speakerAbout, setSpeakerAbout] = useState(
        {
            src: Sumant,
            about: ' sumant voluptatem? Iste cumque repellat veniam eveniet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, aliquid sint ducimus ',
            link: {
                facbook: 'facebook link',
                insta: 'insta link'
            },
        }
    );

    const ChangePr = () => {
        console.log('click change data');
        setSpeakerAbout({
            src: Priyanshu,
            about: ' priyanshu rtav cirtywe nlaskjodp ppippwr poepf sdue mnxsdi lwepwpi eew[wcwn w4eiwuye we',
            link: {
                facbook: 'facebook link',
                insta: 'insta link'
            },
        })
    }

    const ChangeSk = () => {

        setSpeakerAbout(
            {
                src: Sumant,
                about: ' sumant voluptatem? Iste cumque repellat veniam eveniet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, aliquid sint ducimus ',
                link: {
                    facbook: 'facebook link',
                    insta: 'insta link'
                },
            }
        );
    }


    return (
        <div className='hSpeakersWraper'>
            <Row>
                <Col xl={12} md={24}>
                    <div className="leftImg">
                        <img src={speakerAbout.src} alt="speakers" />
                    </div>
                </Col>
                <Col xl={12} md={24}>
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
                                        <h3 onClick={ChangeSk}>Sumant Raj</h3>
                                        <div className="hr"></div>
                                        <h3 onClick={ChangePr}>Priyanshu Raj</h3>
                                    </div>
                                    <div className="about">
                                        <p>{speakerAbout.about}</p>
                                    </div>
                                    <div className="socialSection">
                                        <h3>Soical Networks</h3>
                                        <div className="icon">
                                            <Link to={speakerAbout.link.facbook}>
                                                <FacebookFilled />
                                            </Link>
                                            <Link to={speakerAbout.link.insta}>
                                                <InstagramFilled />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
