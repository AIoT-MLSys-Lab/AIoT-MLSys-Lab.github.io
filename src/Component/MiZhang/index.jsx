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
            <a href="https://engineering.osu.edu/people/mizhang.1">OSU Profile</a> <br />
            <a href="https://mi-zhang.github.io/">Personal Website</a>
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
          <div className='mizhangExp'>
            Postdoctoral Associate, Cornell Computing and Information Science
          </div>

          <div className='mizhangExp'>
            Ph.D., Computer Engineering, University of Southern California. 2013
          </div>

          <div className='mizhangExp'>
            M.S., Computer Science, University of Southern California
          </div>

          <div className='mizhangExp'>
            M.S., Electrical Engineering, University of Southern California
          </div>

          <div className='mizhangExp'>
            B.S., Electrical Engineering, Peking University
          </div>
        </div>

        <div className='mizhangTitle'>
            Honors
        </div>
        <div className='mizhangHonors'>
            <div className='mizhangHonor'>
            2022 &nbsp;<a href="https://minghsiehece.usc.edu/groups-and-institutes-sipi-sipi-50th-anniversary-awardees/">Inaugural USC ECE SIPI Distinguished Alumni Award in Junior/Academia Category</a>
            </div>

            <div className='mizhangHonor'>
            2022 &nbsp;Meta Reality Labs Faculty Research Award
            </div>

            <div className='mizhangHonor'>
            2022 &nbsp;ACM SIGMOBILE Research Highlight
            </div>

            <div className='mizhangHonor'>
            2021 &nbsp;Best Paper Award, ACM SenSys'21
            </div>

            <div className='mizhangHonor'>
            2020 &nbsp;Facebook Faculty Research Award
            </div>

            <div className='mizhangHonor'>
            2020 &nbsp;Best Paper Award, NeurIPS'20 Federated Learning Workshop
            </div>

            <div className='mizhangHonor'>
            2020 &nbsp;Best Paper Award Nominee, ACM/IEEE SEC'20
            </div>

            <div className='mizhangHonor'>
            2020 &nbsp;<a href="https://innovationcenter.msu.edu/events/2020-innovation-celebration/mi-zhang-innovation-of-the-year/">MSU Innovation of the Year Award</a>
            </div>

            <div className='mizhangHonor'>
            2019 &nbsp;Amazon AWS Machine Learning Research Award
            </div>

            <div className='mizhangHonor'>
            2019 &nbsp;<a href="https://micronet-challenge.github.io/leaderboard.html">Google MicroNet Challenge (CIFAR-100 Track) 4th Place Winner @ NeurIPS'19</a>
            </div>

            <div className='mizhangHonor'>
            2019 &nbsp;Best Paper Award Nominee, ICCV'19 Neural Architects Workshop
            </div>

            <div className='mizhangHonor'>
            2019 &nbsp;Google Security Reward
            </div>

            <div className='mizhangHonor'>
            2018 &nbsp;Best Paper Award, IEEE CNS'18
            </div>

            <div className='mizhangHonor'>
            2017 &nbsp;<a href="https://ninesights.ninesigma.com/servlet/hype/IMT?userAction=Browse&documentId=81e575b66f2412a2296a8204d15f0546&templateName=&documentTableId=1008809492095622127">NSF Hearables Challenge Third Place Winner</a>
            </div>

            <div className='mizhangHonor'>
            2017 &nbsp;NIH Mobile Health (mHealth) Scholar
            </div>

            <div className='mizhangHonor'>
            2016 &nbsp;NSF CRII Award
            </div>

            <div className='mizhangHonor'>
            2016 &nbsp;<a href="https://wayback.archive-it.org/org-350/20210227205551/https://www.nlm.nih.gov/news/pillimagerecognitionchallenge.html">NIH Pill Image Recognition Challenge First Place Winner</a>
            </div>

            <div className='mizhangHonor'>
            2015 &nbsp;Best Paper Award Honorable Mention, ACM UbiComp'15
            </div>

            <div className='mizhangHonor'>
            2015 &nbsp;All-Time Top Article, JMIR
            </div>

            <div className='mizhangHonor'>
            2014 &nbsp;ACM SIGMOBILE Research Highlight
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default MiZhang