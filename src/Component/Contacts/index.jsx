import React from 'react'
import FrameBox from '../CreateComponent/FrameBox'
import { Col, Row } from 'antd'
import './contact.scss'
import { MailFilled, PhoneFilled } from '@ant-design/icons'

export default function Contact() {

  const ContactContainer = () => {
    return (
      <>
        <Row>
          <Col xl={24}>
            <div className="contactHead">
              <h1>Contacts us</h1>
              <p>you think any program or any idea then contact me</p>
            </div>
          </Col>
          <Col xl={24}>
            <div className="contactContent">
              <Row>
                <Col xl={8}>
                  <div className="contactImg"><img src="images/slider-bg1.jpeg" alt="loading" /></div>
                </Col>
                <Col xl={8}>
                  <div className="contactPara">
                    <div className="iconCont"><MailFilled /></div>
                    <span>Email:</span>
                    <p>
                      pritambca25@gmail.com
                    </p>
                  </div>
                </Col>
                <Col xl={8}>
                  <div className="contactImg"><img src="images/slider-bg2.jpeg" alt="" /></div>
                </Col>
              </Row>
              <Row>
                <Col xl={8}>
                  <div className="contactPara">
                    <div className="iconCont"><MailFilled/></div>
                    <span>Address:</span>
                    <p>PS Event Mangement</p>
                    <p>Goushala Road Dumraon 802119,<br /> <q>Buxar 802110</q>  Bihar <br />India </p>
                  </div>
                </Col>
                <Col xl={8}><div className="contactImg"><img src="images/slider-bg3.jpeg" alt="" /></div></Col>
                <Col xl={8}>
                  <div className="contactPara">
                    <div className="iconCont"><PhoneFilled/></div>
                    <span>Call:</span>
                    <p>
                      (+91) 6202 - 6702 - 11
                      <br />
                      (+91) 8210 - 5679 - 68
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row id='mailSection'>
          <Col xl={24}>
            <div className="contactMailHead">
              <h2>Contact us</h2>
              <p>keep in touch <span>with PS Group</span></p>
            </div>
          </Col>
          <Col xl={24}>
            <div className="mailContent">
              <Row>
                <Col xl={24}><div className="inputBox">
                  <input type="text" placeholder='Your Name' />
                  <input type="text" placeholder='Email Address' />
                  </div></Col>
                <Col xl={24}>
                  <div className="inputBox">
                    <input type="text" placeholder='Your City' />
                    <input type="text" placeholder='Phone Number' />
                  </div>
                </Col>
                <Col xl={24}>
                  <div className="textBox">
                    <textarea name="messageText" id="textArea"  placeholder='your message'></textarea>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={24}>
            <div className="sendBox">
              <button>Send Mail</button>
            </div>
          </Col>
        </Row>
      </>
    )
  }

  return (
    <div>
      <FrameBox pagName='contact us' component={<ContactContainer />} bgPath='images/frame-bg.png' />
    </div>
  )
}
