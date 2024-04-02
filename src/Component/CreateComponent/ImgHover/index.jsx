import React, { memo, useState } from 'react'
import './img.scss';
import Model from './Model';

const ImgHover = (props) => {

  const [showModel, setShowModel] = useState(false);
  const closeModel = () => setShowModel(false);

  return (
    <>
      <div className="cantainer" style={{ height: `${props.height}`, width: `${props.width}` }}>
        <div className="hoverBox" style={{ backgroundImage: `url(${props.srcImg})` }}>
          <span onClick={() => setShowModel(true)}>{props.icon}</span>
        </div>
      </div>
      <div className="modelBox">
        {
          showModel && <Model img={props.srcImg} close={closeModel} />
        }
      </div>
    </>
  )
}

export default memo(ImgHover)