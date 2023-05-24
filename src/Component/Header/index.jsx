import React from 'react'
import './header.css'
import NavBar from '../NavBar';

function Header() {
  return (
    <div>
        {/* <div className='rectangle1'>
            <div className='OSULogo'>The Ohio State University</div>
            <div className='redLine'></div>
            <div className='labBlock'>
              <img src="./images/LabLogo.png" alt="" className='labLogo'/>
              <div className='labTitle'>AIoT And Machine Learning Systems Lab</div>
            </div>
            <NavBar></NavBar>
        </div> */}
        <div className='headerBox'>
          <img src="./images/LabLogo.png" alt="" className='labLogo'/>
          <div className='labTitle'>AIoT And Machine Learning Systems Lab</div>
          <img src="./images/OSULogo2.png" alt="" className='labLogo'/>
        </div>
        <NavBar></NavBar>
    </div>
  )
}

export default Header