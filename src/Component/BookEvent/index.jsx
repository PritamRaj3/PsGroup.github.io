import React, { useReducer, useRef, useState } from 'react'
import './book.scss';
import FrameBox from '../CreateComponent/FrameBox';
import { Col, Row, message } from 'antd';
import { Link } from 'react-router-dom';
import './bookMedia.scss'
import { useGlobleContext } from '../../Context';
import { AppstoreFilled, CalendarFilled, EnvironmentFilled, HomeOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import emailjs from '@emailjs/browser';
import BookReducer, { initialState } from '../../Reducer/BookReducer';


export default function BookEvent() {
  const { ImgData } = useGlobleContext();



  const BookContainer = () => {

    // creae use reducer for bluer event for all field
    const [state, dispatch] = useReducer(BookReducer, initialState);

    // when submit then show message from ant-design
    const [messageApi, contextHolder] = message.useMessage();

    // its event data handle state
    const [eventData, setEventData] = useState({ names: "", number: '', city: '', eventDate: '', eventPlace: '', eventName: '', textarea: '' });

    const EventHandle = (event) => {
      let { name, value } = event.target;
      setEventData({ ...eventData, [name]: value })
    };

    // this is for email js use for form tag--
    const form = useRef();


    // HandleBlur event start-->
    const HandleBlur = (event) => {
      let value = event.target.value;
      let names = event.target.name;

      dispatch({
        type: 'BlurHandle',
        payload: {
          nameValue: value,
          valueName: names
        }
      });
    }
    // handleBlur event ends-->

    // handle submit button start
    const BookEventHandle = (event) => {
      event.preventDefault();

      if (eventData.names === '' && eventData.eventName === '' && eventData.number === '') {
        messageApi.open({
          type: 'error',
          content: `Not Send your request. Fill the require field  `,
          duration: 4
        });
        dispatch({ type: 'BlankFill' });
      } else if (eventData.names === '' || eventData.eventName === '' || eventData.number === "") {
        messageApi.open({
          type: 'error',
          content: `Not Send your request. Fill the require field  `,
          duration: 4
        });
        dispatch({
          type: 'ReqError',
          payload: {
            RDN : eventData.names,
            RDEN : eventData.eventName,
            RDNO : eventData.number
          }
        });
      } else if (state.errmsgName || state.errmsgEventName || state.errmsgNumber) {
        messageApi.open({
          type: 'warning',
          content: `Not Send . Fill the correct field  `,
          duration: 4
        });
      } else {
        emailjs.sendForm('service_agebzjn', 'template_bookevent28', form.current, {
          publicKey: 'lC0iF4lor17bf5pim',
        }).then(
          () => {
            // when mail succes the run this code
            messageApi.open({
              type: 'success',
              content: 'Send your request PS Groups Sucessfull. You wait until 48 Hour! PS Groups shall contact you and Confirm your event. or after sending a message 48hour, you can call us.',
              duration: 8
            });
            setEventData({ names: "", number: '', city: '', eventDate: '', eventPlace: '', eventName: '', textarea: '' });
          },
          (error) => {
            messageApi.open({
              type: 'error',
              content: `Not Send your request. Please try some time later ${error} `,
              duration: 4
            });
          },
        );
      }
    }
    // handle submit button ends-->

    return (
      <section className='event_wraper'>
        {/* this is pop up for submitting */}
        {contextHolder}
        <h2>Event Details</h2>
        <p>Some details your event</p>
        <form ref={form} >
          <Row justify={'center'}>
            <Col lg={12} md={24}>
              {/* persnaol details  */}
              <div className="persnal">
                <h3>Persnoal Details</h3>
                <div className="input_box">
                  <label><UserOutlined /> Name</label>
                  <input value={eventData.names} onChange={EventHandle} onBlur={HandleBlur} name='names' type="text" placeholder='enter your name ' />

                  {state.requiredName && <small className='err_msg'>it's required</small>}
                  {
                    state.errmsgName && <small className='err_msg'>it's required. must start [a-zA-Z] min-2  </small>
                  }
                </div>
                <div className="input_box">
                  <label><PhoneOutlined /> Number</label>
                  <input value={eventData.number}
                    onChange={EventHandle}
                    onBlur={HandleBlur}
                    name='number' placeholder='enter your number' />

                  {state.requiredNumber && <small className='err_msg'>it's required</small>}
                  {state.errmsgNumber && <small className='err_msg'>number must be 10 digit long </small>}
                </div>
                <div className="input_box">
                  <label><HomeOutlined /> Place</label>
                  <input value={eventData.city}
                    onChange={EventHandle}
                    onBlur={HandleBlur}
                    name='city' type="text" placeholder='enter your Place' />

                  {state.errmsgCity && <small className='err_msg'>it's not blank and not start a number; max-14 char</small>}
                </div>
              </div>
            </Col>
            <Col lg={12} md={24}>
              {/* event details */}
              <div className="event">
                <h3>My Event Details</h3>
                <div className="event_box input_box">
                  <label> <AppstoreFilled /> Event Name</label>
                  <input value={eventData.eventName}
                    onBlur={HandleBlur}
                    onChange={EventHandle}
                    type="text" name='eventName' placeholder='event name' />

                  {state.requiredEventName && <small className='err_msg'>it's required</small>}
                  {state.errmsgEventName && <small className='err_msg'>it's not a blank</small>}
                </div>
                <div className="event_box input_box">
                  <label > <EnvironmentFilled /> Event Place</label>
                  <input value={eventData.eventPlace}
                    onChange={EventHandle}
                    name='eventPlace' type="text" placeholder='place' />
                </div>
                <div className="event_box input_box">
                  <label><CalendarFilled /> Event Date</label>
                  <input value={eventData.eventDate}
                    onChange={EventHandle}
                    name='eventDate' type="date" placeholder='event date' />

                </div>
              </div>
            </Col>
            <Col span={24}>
              <div className="text_box ">
                <label>Event Details</label>
                <textarea value={eventData.textarea}
                  onChange={EventHandle}
                  name="textarea" id="event_text" placeholder='About your event...'></textarea>
              </div>
            </Col>
            <Col xl={12} md={24} sm={24}>
              <div className="submit">
                <button onClick={BookEventHandle} type="submit">Book my event</button>
              </div>
            </Col>
            <Col xl={12} md={24} sm={24} >
              <div className="submit">
                <Link to='/contact '>
                  <button>Contact us</button>
                </Link>
              </div>
            </Col>
          </Row>
        </form>
      </section>
    )
  }


  return (
    <><FrameBox pagName='Book My Event' component={<BookContainer />} bgPath={ImgData.eventbg} /></>
  )
}
