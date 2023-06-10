import React from 'react'
import { Outlet } from 'react-router-dom'
import Collection from '../Collection';
import './home.css'

function Home() {
  return (
    <div className="homeContainer">
      <div className="mission">
        <h2 className='missionTitle'>Our Mission</h2>
        <div className='missionContent'>
        The proliferation of edge devices such as mobile phones and Internet of Things as well as the gigantic amount of data they generate make it no longer feasible to transmit all the data to the cloud for processing. Such constraint fuels the need to move the intelligence from the cloud to the edge where data reside. The key mission of my lab is to bring the power of AI, in particular, deep learning, to Empowering Billions of Everyday Devices with AI to realize the vision of Artificial Intelligence of Things (AIoT). To achieve this mission, my group focuses on its core challenges related to sensing, intelligence, connectivity, efficiency, automation, scalability, privacy, inclusiveness and important applications such as healthcare and sustainability. Achieving such goal requires a combination of approaches. My work draws insights from a broad set of disciplines including mobile & embedded systems, AI/machine learning, wireless networking, distributed systems, and human-centered computing.
        </div>        
      </div>

      <div className="news">
        <div className='homeNewsTitle'>News</div>
        <div className='new'>
          <div className='newDate'>
            Jan 2023
          </div>
          <div className='newContent'>
            Feel extremely honored and excited to receive the inaugural <a href="https://minghsiehece.usc.edu/groups-and-institutes-sipi-sipi-50th-anniversary-awardees/" >USC ECE SIPI Distinguished Alumni Award</a> in the Junior/Academia category for my contributions to mobile/edge computing in my early career.
          </div>
        </div>

        <div className='new'>
          <div className='newDate'>
            Jan 2023
          </div>
          <div className='newContent'>
            Congratulations Samiul for being awarded the highly competitive OSU College Allocated Fellowship!
          </div>
        </div>

        <div className='new'>
          <div className='newDate'>
            Dec 2023
          </div>
          <div className='newContent'>
          Thanks Meta Reality Labs for the generous faculty award for supporting our research!
          </div>
        </div>

        <div className='new'>
          <div className='newDate'>
            Sep 2022
          </div>
          <div className='newContent'>
          <a href="https://arxiv.org/abs/2212.01548">FedRolex</a>, our work on model-heterogeneous federated learning is accepted to NeurIPS\'22.
          </div>
        </div>

        <div className='homeNewsLink'>
          <a href="./#/News">...See All News</a>
        </div>
      </div>
      

      <div className='homeAchievement'>
        <h2 className='homeAchievementTitle'>Our Achievements</h2>
        <div className='homeAchievementContent'>
        I have received a number of awards for my work. I am the 4th Place Winner (1st Place in U.S. and Canada) of 2019 Google MicroNet Challenge (CIFAR-100 Track), the Third Place Winner of 2017 NSF Hearables Challenge, and the champion of 2016 NIH Pill Image Recognition Challenge. I am the recipient of seven best paper awards and nominations. I am also the recipient of NSF CRII Award, Facebook Faculty Research Award, Amazon Machine Learning Research Award, MSU Innovation of the Year Award, and the inaugural USC ECE SIPI Distinguished Alumni Award in the Junior/Academia category for my contributions to mobile/edge computing in my early career.
        </div>
      </div>
      {/* <div className='collection'>
        <Collection className="collection"></Collection>
      </div> */}
      
      <div className="homeResearch">
        <div className='homeResearchTitle'>Research</div>
        <div className='researchBlocks'>
          <div className='researchBlock'>research1</div>
          <div className='researchBlock'>research2</div>
          <div className='researchBlock'>research3</div>
          <div className='researchBlock'>research4</div>
        </div>
      </div>

      <div className='homeSponsor'>
        <div className='homeSponsorTitle'>Sponsor</div>
        {/* <div className='homeSponsorIntro'>Our research is generously sponsored by the following federal agencies and industry partners. We express our sincere gratitude to their support.</div> */}
        <div className='homeSponsorImages'>
          <img src="./images/Sponsor_NSF.jpeg" alt="" className='homeSponsorItem'/>
          <img src="./images/Sponsor_facebook.png" alt="" className='homeSponsorItem'/>
          <img src="./images/Sponsor_realitylabs.png" alt="" className='homeSponsorItem'/>
          <img src="./images/Sponsor_NIH.png" alt="" className='homeSponsorItem'/>
          <img src="./images/Sponsor_DoT.png" alt="" className='homeSponsorItem'/>
          <img src="./images/Sponsor_Microsoft.jpg" alt="" className='homeSponsorItem'/>
          <img src="./images/Sponsor_Google.png" alt="" className='homeSponsorItem'/>
          <img src="./images/Sponsor_amazon.jpeg" alt="" className='homeSponsorItem'/>
        </div>
      </div>

    </div>
  )
}

export default Home