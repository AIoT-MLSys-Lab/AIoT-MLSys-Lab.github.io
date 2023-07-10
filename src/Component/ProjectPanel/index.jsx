import React, { useState } from 'react';
import './projectPanel.css'

const ProjectPanel = ( {link, imageURL, title, content} ) => (
  <div>
    <a href={ link } className='projectContainer'>
      <div className='projectPanel'>
          <div className='projectPanelTitle'>
            {title}
          </div>
          <div className='projectFlex'>
            <div className='projectPanelImgContainer'>
              <img src={imageURL} alt="" className='projectPanelImg'/>
            </div>
            <div className='projectPanelTextContainer'>
              <div className='projectPanelContent'>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
            </div>
          </div>
      </div>
    </a>
  </div>
);
export default ProjectPanel;