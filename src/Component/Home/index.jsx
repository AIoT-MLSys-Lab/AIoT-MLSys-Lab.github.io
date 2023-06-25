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
        The proliferation of edge devices such as mobile phones and Internet of Things as well as the gigantic amount of data they generate make it no longer feasible to transmit all the data to the cloud for processing. Such constraint fuels the need to move the intelligence from the cloud to the edge where data reside. Our mission is to bring the power of AI, in particular, deep learning, to <div className='missionHighLight'>Empowering Billions of Everyday Devices with AI</div>. To achieve this mission, we focus on its core challenges related to sensing, intelligence, connectivity, efficiency, automation, scalability, privacy, inclusiveness and important applications such as healthcare and sustainability. Achieving such a goal requires a combination of approaches. Our work draws insights from a broad set of disciplines including mobile & embedded systems, AI/machine learning, wireless networking, distributed systems, and human-centered computing.

        </div>        
      </div>



      <div className="news">
      <div className='homeSocialMedia'>
        <a className='homeSocialIcon' href='https://scholar.google.com/citations?user=r3A90uAAAAAJ&hl=en'><svg t="1687630495782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2397" width="36" height="36"><path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z" p-id="2398" fill="#ffffff"></path></svg></a>
        <a className='homeSocialIcon' href="https://github.com/AIoT-MLSys-Lab"><svg t="1687630537267" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3489" width="36" height="36"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="3490" fill="#ffffff"></path></svg></a>
        <a className='homeSocialIcon' href=""><svg t="1687630563656" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4546" width="36" height="36"><path d="M512 576a32 32 0 0 1-17.184-4.992L128 337.568v430.656A64 64 0 0 0 192.064 832h639.872A64 64 0 0 0 896 768.224V337.888l-366.816 233.12A32.096 32.096 0 0 1 512 576" fill="#ffffff" p-id="4547"></path><path d="M831.936 192H192.064A64 64 0 0 0 128 255.808v4.896l384 245.376 384-244.032v-6.24A64 64 0 0 0 831.936 192" fill="#ffffff" p-id="4548"></path></svg></a>
      </div>
        <div className='homeNews'>
          <div className='homeNewsTitle'>News</div>
          <div className='new'>
            <div className='newDate'>
              Feb 2023
            </div>
            <div className='newContent'>
            Prof. Zhang receives the inaugural USC ECE-SIPI Distinguished Alumni Award in the Junior/Academia category for his contributions to mobile/edge computing in his early career. Details about the award can be found <a href="https://minghsiehece.usc.edu/groups-and-institutes-sipi-sipi-50th-anniversary-awardees/" >here</a>. 
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
            <a href="https://arxiv.org/abs/2212.01548">FedRolex</a>, our work on model-heterogeneous federated learning is accepted to NeurIPS'22.
            </div>
          </div>

          <div className='homeNewsLink'>
            <a href="./#/News">...See All News</a>
          </div>
        </div>
        
      </div>
      

      <div className='homeAchievement'>
        <h2 className='homeAchievementTitle'>Our Achievements</h2>
        <div className='homeAchievementContent'>
        The OSU AIoT and MLSys Lab has been conducting world-class research at the intersection of systems and AI/ML. Our research has been published at top-tier venues in both mobile/wireless/embedded sensor systems (MobiCom, MobiSys, SenSys) and AI/ML (NeurIPS, ICML, ICLR). Our works have received seven best paper awards and nominations, and won the 4th Place (1st Place in U.S. and Canada) of 2019 Google MicroNet Challenge (CIFAR-100 Track), the Third Place of 2017 NSF Hearables Challenge, and the champion of 2016 NIH Pill Image Recognition Challenge. Many of our works have been reported by NSF, NIH, IEEE, ACM, and media such as TIME, MIT Technology Review, WIRED, TechCrunch, and Smithsonian magazine more than one hundred times.
        </div>
      </div>
      {/* <div className='collection'>
        <Collection className="collection"></Collection>
      </div> */}
      
      <div className="homeResearch">
        <div className='homeResearchTitle'>Research Areas</div>
        <div className='researchBlocks'>
          <div className='researchBlock'><div className='researchBlockTitle'>Edge AI</div><img src="./images/mhealth.png" alt="" /></div>
          <div className='researchBlock'><div className='researchBlockTitle'>Federated Learning and Systems</div><img src="./images/mhealth2.webp" alt="" /></div>
          <div className='researchBlock'><div className='researchBlockTitle'>AutoML</div><img src="./images/mhealth.png" alt="" /></div>
          <div className='researchBlock'><div className='researchBlockTitle'>AI for Wireless Sensing and Networking</div><img src="./images/mhealth2.webp" alt="" /></div>
          <div className='researchBlock'><div className='researchBlockTitle'>Mobile Health</div><img src="./images/mhealth.png" alt="" /></div>
        </div>
      </div>

      <div className='homeSponsor'>
        <div className='homeSponsorTitle'>Sponsors</div>
        <img src="./images/Sponsors.png" alt="" className='homeSponsorImg'/>
      </div>

    </div>
  )
}

export default Home