import React from 'react'
import './gallery.scss';
import FrameBox from '../CreateComponent/FrameBox';
import GallerySkelten from '../CreateComponent/GallerySkelten'
import BannerOffer from '../CreateComponent/BannerOffer';
import { useGlobleContext } from '../../Context';

export default function Gallery() {

  const {ImgData } = useGlobleContext();

  return (
    <div>
      <FrameBox pagName='Gallery' component ={<GallerySkelten /> } bgPath={ImgData.gallerybg} />
      <BannerOffer  />
    </div>
  )
}
