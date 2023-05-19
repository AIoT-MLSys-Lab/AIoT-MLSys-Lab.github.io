import React from 'react'
import './members.css'
import MemberCard from '../MemberCard'
import ContentTitle from '../ContentTitle'

function Members() {
  return (
    <div>
      <ContentTitle title = "Our Member" subtitle = "Member"></ContentTitle>
      <div className='contentBG'>

        <div className='profBlock'>
          <div className='profTitle'>Principle Investigator</div>
          <div className='profRedLine'></div>
          <div className='profProfile'>
            <img src="./images/MiZhang.png" alt="Mi Zhang" className='profPhoto'></img>
          
            <div className='profProfileText'>
              <div className='profProfileTitle'>Mi Zhang</div>
              <div className='profProfileDes'>
                Associate Professor <br />
                Director, AIoT and Machine Learning Systems Lab <br />
                Department of Computer Science and Engineering <br />
                The Ohio State University <br />
                <br />
                <span className='boldText'>Email:</span> mizhang.1@osu.edu <br />
                <span className='boldText'>Office:</span> 495 Dreese Labs, 2015 Neil Ave, Columbus, OH 43210
              </div>
            </div>
          </div>
        </div>

        <div className='memberBlock'>
          <div className='memberType'>Ph.D. Students</div>
          <div className='redShortLineContent'></div>
          <div className='cardSet'>
            <div className='card'><MemberCard imageURL="./images/SamiulAlam.jpg" title="Samiul Alam" description="Ph.D. Student   shen.1780@osu.edu"></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/" title="Zhongwei Wan" description="Ph.D. Student   shen.1780@osu.edu"></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/" title="Shakhrul Iman Siam" description="Ph.D. Student   shen.1780@osu.edu"></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/HyunhoAhn.jpg" title="Hyunho Ahn" description="Ph.D. Student   shen.1780@osu.edu"></MemberCard></div>
          </div>
          <div className='cardSet'>
            <div className='card'><MemberCard imageURL="./images/" title="Yu Zheng" description="Ph.D. Candidate   shen.1780@osu.edu"></MemberCard></div>
          </div>

          <div className='memberType'>Master Students</div>
          <div className='redShortLineContent'></div>
          <div className='cardSet'>
            <div className='card'><MemberCard imageURL="./images/XinWang.jpg" title="Xin Wang" description="Master Student   wang.15980@osu.edu"></MemberCard></div>
          </div>

          <div className='memberType'>Undergraduate Students</div>
          <div className='redShortLineContent'></div>
          <div className='cardSet'>
            <div className='card'><MemberCard imageURL="./images/MarcusShen.jpg" title="Marcus Shen" description="CSE Department   shen.1780@osu.edu"></MemberCard></div>
          </div>

          <div className='memberType'>Alumni</div>
          <div className='redShortLineContent'></div>
          <div className='cardSet'>
            <div className='card'><MemberCard imageURL="./images/YanShen.jpg" title="Shen Yan" description="Ph.D., Research Scientist @ Google Research"></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/XiaoZeng.jpg" title="Xiao Zeng" description="Ph.D., Applied Scientist @ Amazon Lab126"></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/BiyiFang.jpg" title="Biyi Fang" description="Ph.D., Machine Learning Scientist and Software Engineer @ Microsoft Machine Learning Cloud Services"></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/YunLou.jpg" title="Yun Lou" description="Master"></MemberCard></div>
          </div>

          <div className='cardSet'>
            <div className='card'><MemberCard imageURL="./images/FazlayRabbi.jpg" title="Fazlay Rabbi" description="Master"></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/" title="Brian Wang" description="B.S."></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/" title="Jordan Wagner" description="B.S."></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/" title="Collin Dillinger" description="B.S."></MemberCard></div>
          </div>

          <div className='cardSet'>
            <div className='card'><MemberCard imageURL="./images/" title="Nathan Bagnall" description="B.S."></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/" title="Stevers William" description="B.S."></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/" title="Philip Dooley" description="B.S."></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/" title="Polimante Sergio" description="B.S."></MemberCard></div>
          </div>

          <div className='cardSet'>
            <div className='card'><MemberCard imageURL="./images/" title="Haochen Sun" description="B.S."></MemberCard></div>
            <div className='card'><MemberCard imageURL="./images/" title="Jillian Co" description="B.S."></MemberCard></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members