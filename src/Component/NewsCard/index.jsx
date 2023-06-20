import React, { useState } from 'react';
import './newsCard.css'

const NewsCard = ( imageURL ) => (
  <div className='newsCard'>
    <img src="./images/OSU.jpg" alt="" className='newsCardImg'/>
    <div className='newsCardTitle'>
      USC ECE SIPI Distinguished Alumni Award
    </div>
    <div className='newsCardDate'>
      Jan 06, 2023
    </div>
    <div className='newsCardContent'>
    Feel extremely honored and excited to receive the inaugural USC ECE SIPI Distinguished Alumni Award in the Junior/Academia category for my contributions to mobile/edge computing in my early career.
    </div>
  </div>
);
export default NewsCard;