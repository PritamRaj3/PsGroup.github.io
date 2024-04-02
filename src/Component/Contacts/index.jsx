import React, { useRef, useState } from 'react'
import FrameBox from '../CreateComponent/FrameBox'
import { Col, Row, message } from 'antd'
import './contact.scss'
import { MailFilled, PhoneFilled } from '@ant-design/icons'
import './mediaCont.scss';
import { useGlobleContext } from '../../Context'
import emailjs from '@emailjs/browser';

export default function Contact() {
  let { ImgData } = useGlobleContext();


  const ContactContainer = () => {

    // this is end mail from email js,--start
    const form = useRef();

    // this is end mail from email js,--end


    const [messageApi, contextHolder] = message.useMessage();

    const [inputData, setInputData] = useState({
      userName: "",
      userEmail: '',
      userNo: "",
      userCity: '',
      userText: ''
    })

    const InputHandler = (event) => {
      let { value, name } = event.target;

      setInputData({ ...inputData, [name]: value })
    }

    const sendMail = (event) => {
      event.preventDefault();

      // conditon for mail start-->
      if (inputData.userName === '' || inputData.userNo === '' || inputData.userCity === '') {
        messageApi.open({
          type: 'error',
          content: 'Not Send your mail. Fill all  field ',
          duration: 4
        });
      } else {

        emailjs.sendForm('service_agebzjn', 'template_czkfzzl', form.current, {
          publicKey: 'lC0iF4lor17bf5pim',
        }).then(
          () => {
            // when mail succes the run this code
            messageApi.open({
              type: 'success',
              content: 'Send your mail. You wait until 48 Hour! PS Groups shall contact you. or after sending a message 48hour, you can call us. ',
              duration: 10
            });
          },
          (error) => {
            messageApi.open({
              type: 'warning',
              content: `Try again some time later, Some error ouccred ${error} `,
              duration: 5
            });
          },
        );
        setInputData({
          userName: "",
          userEmail: '',
          userNo: "",
          userCity: '',
          userText: ''
        });
      }
      // conditon for mail end-->
    }
    return (
      <>
        <Row>
          <Col span={24}>
            <div className="contactHead">
              <h1>Contacts us</h1>
              <p>you think any program or any idea then contact me</p>
            </div>
          </Col>
          <Col span={24}>
            <div className="contactContent">
              <Row justify={'center'}>
                <Col xl={8} md={24} sm={24}>
                  <div className="contactImg"><img src={ImgData.slider1} alt="loading" /></div>
                </Col>
                <Col xl={8} md={24} sm={24}>
                  <div className="contactPara">
                    <div className="iconCont"><MailFilled /></div>
                    <span>Email:</span>
                    <p>psgroups@2020gmail.com</p>
                  </div>
                </Col>
                <Col xl={8} md={24} sm={24}>
                  <div className="contactImg"><img src={ImgData.slider2} alt="loading" /></div>
                </Col>
              </Row>
              <Row justify={'center'}>
                <Col xl={8} md={24} sm={24}>
                  <div className="contactPara">
                    <div className="iconCont"><MailFilled /></div>
                    <span>Address:</span>
                    <p>PS Event Mangement</p>
                    <p>Goushala Road Dumraon 802119,<br /> <q>Buxar 802110</q>  Bihar <br />India </p>
                  </div>
                </Col>
                <Col xl={8} md={24} sm={24}><div className="contactImg"><img src={ImgData.slider3} alt="loading" /></div></Col>
                <Col xl={8} md={24} sm={24}>
                  <div className="contactPara">
                    <div className="iconCont"><PhoneFilled /></div>
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
        <form ref={form}>
          <Row id='mailSection'>
            <Col xl={24}>
              <div className="contactMailHead">
                <h2>Contact us</h2>
                <p>keep in touch <span>with PS Group</span></p>
              </div>
            </Col>
            <Col span={24}>
              <div className="mailContent">
                <Row>
                  <Col span={24}>
                    <div className="inputBox">
                      <input name='userName' value={inputData.userName} onChange={InputHandler} type="text" placeholder='Your Name' />
                      <input name='userEmail' value={inputData.userEmail} onChange={InputHandler} type="email" placeholder='Email Address' />
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="inputBox">
                      <input name='userCity' value={inputData.userCity} onChange={InputHandler} type="text" placeholder='Your City' />
                      <input name='userNo' value={inputData.userNo} onChange={InputHandler} type="number" placeholder='Phone Number' />
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="textBox">
                      <textarea name="userText" value={inputData.userText} onChange={InputHandler} id="textArea" placeholder='your message'></textarea>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={24}>
              <div className="sendBox">
                <button onClick={sendMail}>Send Mail</button>
              </div>
            </Col>
          </Row>
          {contextHolder}
        </form>
      </>
    )
  }

  return (
    <div>
      <FrameBox pagName='contact us' component={<ContactContainer />} bgPath={ImgData.contactbg} />
    </div>
  )
}
