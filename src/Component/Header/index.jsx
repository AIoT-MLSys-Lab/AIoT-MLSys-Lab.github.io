import React from 'react'
import './header.css'
import NavBar from '../NavBar';

function Header() {
  return (
    <div>
        <div className='headerBox'>
          <img src="./images/LabLogo2.png" alt="" className='labLogo'/>
          <div className='labTitle'>OSU AIoT and Machine Learning Systems Lab</div>
          <a href="https://www.osu.edu/" className='headerOSULink'>
            <img src="./images/headerOSULogo.svg" alt="" className='headerOSULogo'/>
          </a>
        </div>
        <NavBar></NavBar>
    </div>
  )
}

export default Header