import React, {  useState } from 'react'
import { Col, Row } from 'antd'
import './img.scss';
import Model from './Model';

export default function ImgHover(props) {

  const [showModel,setShowModel]= useState(false);
  const closeModel =()=> setShowModel(false);
  

  return (
    <div className='imgHoWraper'>
      <Row>
        <Col xl={24}>
          <div className="cantainer" style={{ height: `${props.height}`, width: `${props.width}` }}>

            <div className="hoverBox" style={{ backgroundImage: `url(${props.srcImg})` }}>
              <span onClick={()=>setShowModel(true)}>{props.icon}</span>
            </div>
          </div>
        </Col>
        <Col xl={24}>
          <div className="modelBox">
          {showModel && <Model img={props.srcImg} close = {closeModel}/>}
          </div>
        </Col>
      </Row>
    </div>
  )
}
