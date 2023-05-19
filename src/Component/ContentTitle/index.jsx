import React from 'react'
import './contentTitle.css'

const ContentTitle = ( props ) => (
    <div>
        <div className='imageContainer'>
            <img src="./images/OSU.jpg"></img>

            <div className='imageTitle'>{props.title}</div>
            <a href='./' className='homeLink'>Home&nbsp;&nbsp;- </a>
            <div className='imageSubtitle'>{props.subtitle}</div>
        </div>
    </div>
  );

export default ContentTitle;