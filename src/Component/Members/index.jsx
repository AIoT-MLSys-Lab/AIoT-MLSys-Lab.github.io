import React from 'react'
import './members.css'
import MemberCard from '../MemberCard'
import ContentTitle from '../ContentTitle'
import { useState } from 'react';

function Members() {
  const [activeTab, setActiveTab] = useState('Faculty');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <ContentTitle title = "Our Member" subtitle = "Member"></ContentTitle>
      <div className='memberContent'>
      <div className='memberType'>
          <button onClick={() => handleTabClick('Faculty')} className={`tab-button ${activeTab === 'Faculty' ? 'selectedButton' : ''}`}>Faculty</button>
          <hr />
          <button onClick={() => handleTabClick('Ph.D. Student')} className={`tab-button ${activeTab === 'Ph.D. Student' ? 'selectedButton' : ''}`}>Ph.D. Student</button>
          <hr />
          <button onClick={() => handleTabClick('Master Student')} className={`tab-button ${activeTab === 'Master Student' ? 'selectedButton' : ''}`}>Master Student</button>
          <hr />
          <button onClick={() => handleTabClick('Undergrads Student')} className={`tab-button ${activeTab === 'Undergrads Student' ? 'selectedButton' : ''}`}>Undergrads Student</button>
          <hr />
          <button onClick={() => handleTabClick('Alumi')} className={`tab-button ${activeTab === 'Alumi' ? 'selectedButton' : ''}`}>Alumi</button>
        </div>

        <div className="membetInfo">
          {activeTab === 'Faculty' && (
            <div>
              <div className="memberTitle">Faculty</div>
              <div className='cardSet'>
                <div className='card'><MemberCard imageURL="./images/MiZhang.png" title="Mi Zhang" description="Principle Investigator   mizhang.1@osu.edu"></MemberCard></div>
              </div>
            </div>
          )}
          {activeTab === 'Ph.D. Student' && (
            <div>
              <div className="memberTitle">Ph.D. Student</div>
              <div className='cardSet'>
                <div className='card'><MemberCard imageURL="./images/SamiulAlam.jpg" title="Samiul Alam" description="Ph.D. Student   shen.1780@osu.edu"></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/" title="Zhongwei Wan" description="Ph.D. Student   shen.1780@osu.edu"></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/" title="Shakhrul Iman Siam" description="Ph.D. Student   shen.1780@osu.edu"></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/HyunhoAhn.jpg" title="Hyunho Ahn" description="Ph.D. Student   shen.1780@osu.edu"></MemberCard></div>
              </div>
            </div>
          )}
          {activeTab === 'Master Student' && (
            <div>
              <div className="memberTitle">Master Student</div>
              <div className='cardSet'>
                <div className='card'><MemberCard imageURL="./images/XinWang.jpg" title="Xin Wang" description="Master Student   wang.15980@osu.edu"></MemberCard></div>  
              </div>
            </div>
          )}
          {activeTab === 'Undergrads Student' && (
            <div>
              <div className="memberTitle">Undergrads Student</div>
              <div className='cardSet'>
                <div className='card'><MemberCard imageURL="./images/MarcusShen.jpg" title="Marcus Shen" description="CSE Department   shen.1780@osu.edu"></MemberCard></div>
              </div>
            </div>
          )}
          {activeTab === 'Alumi' && (
            <div>
              <div className="memberTitle">Alumi</div>
              <div className='cardSet'>
                <div className='card'><MemberCard imageURL="./images/YanShen.jpg" title="Shen Yan" description="Ph.D., Research Scientist @ Google Research"></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/XiaoZeng.jpg" title="Xiao Zeng" description="Ph.D., Applied Scientist @ Amazon Lab126"></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/BiyiFang.jpg" title="Biyi Fang" description="Ph.D., Machine Learning Scientist and Software Engineer @ Microsoft Machine Learning Cloud Services"></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/YunLou.jpg" title="Yun Lou" description="Master"></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/FazlayRabbi.jpg" title="Fazlay Rabbi" description="Master"></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/" title="Brian Wang" description="B.S."></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/" title="Jordan Wagner" description="B.S."></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/" title="Collin Dillinger" description="B.S."></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/" title="Nathan Bagnall" description="B.S."></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/" title="Stevers William" description="B.S."></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/" title="Philip Dooley" description="B.S."></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/" title="Polimante Sergio" description="B.S."></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/" title="Haochen Sun" description="B.S."></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/" title="Jillian Co" description="B.S."></MemberCard></div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      
    </div>
  )
}

export default Members