import React from 'react'
import './gallery.scss';
import FrameBox from '../CreateComponent/FrameBox';
import GallerySkelten from '../CreateComponent/GallerySkelten'
import BannerOffer from '../CreateComponent/BannerOffer';

export default function Gallery() {
  return (
    <div>
      <FrameBox pagName='Gallery' component ={<GallerySkelten /> } bgPath='images/instaImg6.jpg' />
      <BannerOffer  />
    </div>
  )
}
