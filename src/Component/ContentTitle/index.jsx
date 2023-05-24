import React from 'react'
import './contentTitle.css'

const ContentTitle = ( props ) => (
    <div>
        <div className='imageContainer'>
            {/* <img src="./images/OSU.jpg"></img> */}

            <div className='imageTitle'>
                {props.title}
                
            </div>
        </div>
    </div>
  );

export default ContentTitle;