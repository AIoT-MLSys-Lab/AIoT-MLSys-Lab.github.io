import React from 'react'
import './header.css'
import NavBar from '../NavBar';

function Header() {
  return (
    <div>
        <div className='headerBox'>
          <img src="./images/LabLogo.png" alt="" className='labLogo'/>
          <div className='labTitle'>OSU AIoT and Machine Learning Systems Lab</div>
          <img src="./images/headerOSULogo.svg" alt="" className='headerOSULogo'/>
        </div>
        <NavBar></NavBar>
    </div>
  )
}

export default Header