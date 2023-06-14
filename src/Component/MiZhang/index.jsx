import React from 'react'
import './MiZhang.css'
import GoogleButton from '../GoogleButton'

function MiZhang() {
  return (
    <div className='mizhang'>
      <div className='mizhangProfile'>
        <img src="./images/MiZhang.png" alt="" className='mizhangImg'/>
        <div className='googleButton'>
            <a href="https://scholar.google.com/citations?user=r3A90uAAAAAJ&hl=en">
                <button class="modern-button">Google Scholar</button>
            </a>
        </div>
        <div className='outsideProfile'>
            <a href="https://engineering.osu.edu/people/mizhang.1">OSU Profile</a>
        </div>
      </div>
      <div className='mizhangInfo'>
        <div className='mizhangTitle'>
            Mi Zhang
        </div>
        <div className='mizhangBio'>
            Associate Professor, Department of Computer Science and Engineering <br />
            Director, AIoT and Machine Learning Systems Lab
            
        </div>

        <div className='mizhangTitle'>
            Educational & Industrial Experiences
        </div>
        <div className='mizhangEdu'>

        </div>

        <div className='mizhangTitle'>
            Honors
        </div>
        <div className='mizhangHonors'>
            <div className='mizhangHonor'>
            2022 Inaugural USC ECE SIPI Distinguished Alumni Award in Junior/Academia Category
            </div>
            <div className='mizhangHonor'>
            2022 Meta Reality Labs Faculty Research Award
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default MiZhang