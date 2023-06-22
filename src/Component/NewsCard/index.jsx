import React, { useState } from 'react';
import './newsCard.css'

const NewsCard = ( {imageURL, title, content, date} ) => (
  <div className='newsCard'>
    <div className='newsCardImgContainer'>
      <img src={imageURL} alt="" className='newsCardImg'/>
    </div>
    <div className='newsCardTitle'>
      {title}
    </div>
    <div className='newsCardDate'>
      {date}
    </div>
    <div className='newsCardContent'>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  </div>
);
export default NewsCard;