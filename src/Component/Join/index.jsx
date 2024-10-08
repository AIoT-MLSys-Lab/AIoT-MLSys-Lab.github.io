import {React, useEffect, useState} from 'react';
import './join.css'
import ContentTitle from '../ContentTitle'

function Join() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);
  
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <ContentTitle title = "Joining Us" subtitle = "Join The Lab"></ContentTitle>

      <div className='JoinContainer'>
        <div className='JoinContent'>
          <div className='JoinTitle'>
            Prospective Students
          </div>
          <div className='JoinDesc'>
          For prospective Postdoc, PhD, Master, undergraduate students, and remote research interns who want to join my group, please email me your CV, transcripts, and GitHub repository. I may not be able to reply to your emails if those documents are incomplete.
          </div>

          {/* <div className='JoinTitle'>
            Current Opportunities
          </div>
          <div className='JoinDesc'>
            <li>
              <div className='JoinHighLight'>
              Position 1: &nbsp;
              </div>
              We are looking for a Master/Undergraduate student to work on a project on developing a chatbot. Please see the <a href="./files/ChatGPT_Job Ads.pdf" className='JoinAdsLink'>ads</a> for more information.
            
            </li>
          </div> */}
        </div>
        <div className='JoinLabLogo'>
          <img src="./images/LabLogoWhite.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Join