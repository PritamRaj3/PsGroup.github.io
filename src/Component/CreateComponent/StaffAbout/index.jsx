import React from 'react'
import './staff.scss'
import { Link } from 'react-router-dom'
import { FacebookFilled, InstagramFilled, TwitterOutlined } from '@ant-design/icons'

export default function StaffAbout(props) {
  const { names, src, title, facebook, insta, twiter } = props.card;

  return (
    <div className='card_wraper'>
      <div className="card_box">
        <div className="card_img"><img src={src} alt="staffImg" /></div>
        <div className="card_about">
          <div className="card_head">
            <h2>{names}</h2>
            <h3>{title}</h3>
          </div>
          <div className="card_link">
            <ol>
              <Link to={facebook}>
                <li>< FacebookFilled /></li>
              </Link>
              <Link to={twiter}>
                <li><TwitterOutlined /></li>
              </Link>
              <Link to={insta}>
                <li><InstagramFilled /></li>
              </Link>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
