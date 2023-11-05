import React from 'react'
import './home.scss';
import SliderImage from './SliderImage';
import HomeAbout from './HomeAbout';
import HomeGallery from './HomeGallery';
import HomeServices from './HomeServices';
import HomeSpeakers from './HomeSpeakers';
import ImgHover from '../CreateComponent/ImgHover';
import BannerOffer from '../CreateComponent/BannerOffer';

export default function Home() {

  return (
    <div className='homeWraper'>
      <SliderImage />
      <div className="bannerTextWraper">
        <div className="bannerText">
          <h3>PS Event Group</h3>
          <p>Every Event should be Perfect</p>
        </div>
      </div>
      {/* this section is about section */}
      <HomeAbout />

      {/* special Banner offer */}
      <BannerOffer />

      {/* Gallary section */}
      <HomeGallery />

      {/* Services section */}
      <HomeServices />
      {/* section speakers */}
      <HomeSpeakers />
      
      <ImgHover />
    </div>
  );
}