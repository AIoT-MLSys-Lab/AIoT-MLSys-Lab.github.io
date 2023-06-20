import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footerBox'>
        {/* <div className='redLineFooter'></div>
        <div className='footerBlock'>
          <a href="https://accessibility.osu.edu/" className='footerLink'>
            Accessibility
            <svg t="1684109549920" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2865" width="16" height="16"><path d="M832 250.352L468.215 612.354c-15.66 15.582-40.986 15.52-56.569-0.14-15.582-15.659-15.52-40.985 0.14-56.568L777.222 192H626c-22.091 0-40-17.909-40-40s17.909-40 40-40h174c61.856 0 112 50.144 112 112v174c0 22.091-17.909 40-40 40s-40-17.909-40-40V250.352z m0 339.909c0-22.092 17.909-40 40-40s40 17.908 40 40V800c0 61.856-50.144 112-112 112H224c-61.856 0-112-50.144-112-112V224c0-61.856 50.144-112 112-112h209.74c22.09 0 40 17.909 40 40s-17.91 40-40 40H224c-17.673 0-32 14.327-32 32v576c0 17.673 14.327 32 32 32h576c17.673 0 32-14.327 32-32V590.26z" fill="#ffffff" p-id="2866"></path></svg>
          </a>

          <div className='footerText'>
            © 2023 AIoT and Machine Learning Systems Lab, The Ohio State University
          </div>

          <img src="./images/OSULogo.png" alt="" className='bigLogo'/>
        </div> */}
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