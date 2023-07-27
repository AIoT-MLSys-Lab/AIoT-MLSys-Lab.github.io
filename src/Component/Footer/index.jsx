import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footerBox'>
      <div className='lineFooter'></div> 
      <div className='footerContent'>
        <div className='footerLeft'>
          <div className='footerLogo'>
            <a href="https://www.osu.edu/">
              <img src="./images/osu-horiz-gray.svg" alt="" />
            </a>
          </div>
          <div className='footerAddr'>
            <div className='footerAddrTitle'>© 2023 OSU AIoT & Machine Learning Systems Lab</div>
            Columbus, OH
          </div>
        </div>

        <div className='footerMiddle'>
          <div className='footerContactTitle'>
            Contact
          </div>
          <div className='footerContactContent'>
            Email: mizhang.1@osu.edu
          </div>
        </div>

        <div className='footerRight'>
          <div className='footerContactTitle'>
            Affiliations
          </div>
          <div className='footerContactContent'>
            <a href="https://cse.osu.edu/">Department of Computer Science and Engineering</a> <br />
            <a href="https://icdt.osu.edu/">Institute for Cybersecurity and Digital Trust</a> <br />
            <a href="https://tdai.osu.edu/">Translational Data Analytics Institute</a> <br />
            <a href="https://5g-oh.osu.edu/">5G and Broadband Connectivity Center</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer