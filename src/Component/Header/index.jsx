import React, { useEffect, useState } from 'react'
import './header.css'
import NavBar from '../NavBar';
import { FloatButton, Drawer } from 'antd';

function Header() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);
  
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <div className='headerBox'>
          <img src="./images/LabLogo2.png" alt="" className='labLogo'/>
          <div className='labTitle'>OSU AIoT and Machine Learning Systems Lab</div>
          <a href="https://www.osu.edu/" className='headerOSULink'>
            <img src="./images/headerOSULogo.svg" alt="" className='headerOSULogo'/>
          </a>
          {!isWideScreen && 
            <>
              <button type="primary" onClick={showDrawer} className='headerBtn'>
              <svg t="1689907402318" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2311" width="48" height="48"><path d="M892.928 128q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-759.808 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.64t48.64-19.968l759.808 0zM892.928 448.512q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-759.808 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.64t48.64-19.968l759.808 0zM892.928 769.024q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-759.808 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.64t48.64-19.968l759.808 0z" p-id="2312" fill="#ffffff"></path></svg>
              </button>
              <Drawer title="Navigate" placement="right" onClose={onClose} open={open} width={250}>
                <div className='navBarContent'>
                  <a href="">
                    Home
                  </a>
                  <a href="">
                    Research
                  </a>
                  <a href="./#/Members">
                    Members
                  </a>
                  <a href="">
                    News
                  </a>
                  <a href="">
                    Publications
                  </a>
                  <a href="">
                    Courses
                  </a>
                  <a href="">
                    Talks
                  </a>
                  <a href="">
                    Join the Lab
                  </a>
                  <a href="">
                    OSU AIoT Seminar
                  </a>
                </div>
              </Drawer>
            </>
          }
        </div>
        {isWideScreen && <NavBar></NavBar>}
        {!isWideScreen &&
          <div className='floatButton'>
            <FloatButton.BackTop />
          </div>
        }
    </div>
  )
}

export default Header