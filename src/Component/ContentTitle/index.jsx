import React from 'react'
import './contentTitle.css'

const ContentTitle = ( props ) => (
    <div>
        <div className='imageContainer'>

            <div className='imageTitle'>
                {props.title}
                
            </div>
        </div>
    </div>
  );

export default ContentTitle;