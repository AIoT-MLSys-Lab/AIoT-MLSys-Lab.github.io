import React from 'react'
import './members.css'
import MemberCard from '../MemberCard'
import NoPhotoCard from '../NoPhotoCard'
import ContentTitle from '../ContentTitle'
import { useState } from 'react';

function Members() {
  const [activeTab, setActiveTab] = useState('Faculty');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <ContentTitle title = "Members" subtitle = "Member"></ContentTitle>
      <div className='memberContent'>
          <div className='memberType'>
              <div className="memberTitle">Faculty</div>
              <div className='facultySet'>
                
                <div className='mizhang_card'>
                  <a href="./#/members/MiZhang">
                    <img src="./images/memberPhotos/MiZhang.png" alt="" />  
                  </a>
                </div>
                <div className='mizhang_member'>
                  <div className='mizhang_title'>
                    Mi Zhang <br />
                  </div>
                  <div className='mizhang_profile'>
                    Associate Professor <br />
                    Director, AIoT and Machine Learning Systems Lab <br />
                    Department of Computer Science and Engineering <br />
                    The Ohio State University <br />
                    <br />
                    <div className='boldText'>Email</div>: mizhang.1 [at] osu [dot] edu <br />
                    <div className='boldText'>Office</div>: 495 Dreese Labs, 2015 Neil Ave, Columbus, OH 43210  <br />
                    <br />

                    <div className='mizhang_social'>
                      <a className='social-icon' href='https://scholar.google.com/citations?user=r3A90uAAAAAJ&hl=en'><svg t="1687226456429" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1477" width="32" height="32"><path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z" p-id="1478" fill="#ffffff"></path></svg></a>
                      <a className='social-icon' href='https://www.linkedin.com/in/mizhang/'><svg t="1687226640712" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2659" width="32" height="32"><path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3z m0 736c-447.8-0.1-671.7-0.2-671.7-0.3 0.1-447.8 0.2-671.7 0.3-671.7 447.8 0.1 671.7 0.2 671.7 0.3-0.1 447.8-0.2 671.7-0.3 671.7z" p-id="2660" fill="#ffffff"></path><path d="M230.6 411.9h118.7v381.8H230.6zM290 359.7c37.9 0 68.8-30.8 68.8-68.8 0-37.9-30.8-68.8-68.8-68.8s-68.8 30.8-68.8 68.8c-0.1 38 30.7 68.8 68.8 68.8zM542.3 604.8c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z" p-id="2661" fill="#ffffff"></path></svg></a>
                      <a className='social-icon' href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fmi-zhang.github.io%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Emizhang&screen_name=mizhang"><svg t="1687226787157" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3147" width="22" height="22"><path d="M919.759462 318.994613c0-9.605475-0.184234-19.102577-0.608696-28.534655 41.060787-30.595551 76.68666-68.894629 104.863684-112.720738a403.247526 403.247526 0 0 1-120.68436 33.017692c43.401647-26.708567 76.68666-69.423851 92.415219-120.68436-40.638132 24.645865-85.589515 42.265535-133.383889 51.446549-38.295465-43.575045-92.944441-71.329413-153.358869-72.360764-116.027926-1.918205-210.084998 96.132418-210.084999 218.973404 0 17.460724 1.826088 34.394031 5.451171 50.745736-174.722834-11.243716-329.55016-102.190479-433.116978-239.293373-18.071226 32.847907-28.438925 71.237296-28.438925 112.377556 0 77.811934 37.090717 146.970271 93.44657 187.779994-34.500598-1.560574-66.819283-12.009553-95.166091-29.141545v2.85744c0 108.752474 72.440238 199.870827 168.560013 221.13003-17.621477 5.012259-36.207475 7.62044-55.322696 7.526516a191.542349 191.542349 0 0 1-39.500214-4.325895c26.708567 89.120675 104.332655 154.231274 196.231295 156.400543-71.923659 59.635948-162.525433 95.258208-260.892145 95.00895-16.960401 0-33.720311-1.137918-50.15149-3.200621 93.011271 63.80109 203.418242 100.960443 322.104923 100.960443 386.350343 0.092117 597.636477-336.191629 597.636477-627.962902z" fill="#ffffff" p-id="3148"></path></svg></a>
                      <a className='social-icon' href="https://github.com/AIoT-MLSys-Lab"><svg t="1687226892328" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4283" width="26" height="26"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="4284" fill="#ffffff"></path></svg></a>
                      <a className='social-icon' href="https://en.wikipedia.org/wiki/Mi_Zhang"><svg t="1687227076077" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5220" width="24" height="24"><path d="M853.723429 936.557714L685.165714 539.428571c-66.852571 130.852571-140.580571 267.446857-203.995428 397.129143-0.585143 0.585143-30.866286 0-30.866286-0.585143-96.585143-225.718857-197.705143-449.718857-294.290286-675.986285-23.442286-54.857143-101.705143-144.018286-155.428571-143.433143C0.585143 110.262857 0 96 0 87.405714h333.129143v28.562286c-39.424 2.304-108.580571 27.428571-89.161143 70.290286 45.129143 102.290286 213.138286 494.299429 258.304 593.700571 30.866286-61.147429 118.857143-224.585143 154.843429-293.705143-28.562286-58.294857-120.576-275.419429-149.723429-329.142857-20.004571-36.571429-74.276571-40.009143-114.870857-40.557714v-28.562286l293.156571 0.585143v26.843429c-40.009143 1.133714-78.299429 16.018286-60.562285 53.723428 38.838857 82.285714 62.866286 139.995429 98.852571 215.442286 11.446857-22.272 71.424-142.848 98.852571-207.433143 18.285714-42.276571-8.009143-58.843429-79.433142-60.562286 0.585143-7.424 0-21.138286 0.585142-28.013714 91.428571-0.585143 228.571429-0.585143 253.147429-1.133714v28.013714c-46.299429 1.718857-94.281143 26.294857-119.442286 65.133714l-121.709714 252.562286c13.129143 33.133714 130.304 293.705143 142.299429 322.304l252.013714-581.156571c-17.700571-47.433143-74.861714-57.709714-97.133714-58.294858v-28.562285l262.838857 2.304 0.585143 1.133714-0.585143 25.161143c-57.709714 1.718857-92.562286 32.585143-114.870857 82.870857-51.419429 118.857143-212.553143 493.714286-319.414858 737.718857h-28.013714z" fill="#ffffff" p-id="5221"></path></svg></a>
                    </div>

                    <a href="./#/members/MiZhang" className='mizhang_link'>Read the Bio</a>
                  </div>
                </div>
              </div>
          </div>

          <div className='memberType'>
            <div className="memberTitle">Current Students</div>
              <div className='cardSet'>
                <div className='card'><a href="https://samiul272.github.io/"><MemberCard imageURL="./images/memberPhotos/SamiulAlam.jpg" title="Samiul Alam" description="Ph.D. Student   alam.140@osu.edu"></MemberCard></a></div>
                <div className='card'><a href="https://people.engineering.osu.edu/people/wan.512"><MemberCard imageURL="./images/memberPhotos/ZhongweiWan.jpg" title="Zhongwei Wan" description="Ph.D. Student   wan.512@osu.edu"></MemberCard></a></div>
                <div className='card'><a href="https://sites.google.com/view/shakhrul-iman-siam"><MemberCard imageURL="./images/memberPhotos/ShakhrulImanSiam.jpg" title="Shakhrul Iman Siam" description="Ph.D. Student   siam.5@osu.edu"></MemberCard></a></div>
                <div className='card'><a href="https://hyunhoahn.notion.site/Hyunho-Ahn-b1f93fbeb6fb41df9cbfaa21da5fe927"><MemberCard imageURL="./images/memberPhotos/HyunhoAhn.jpg" title="Hyunho Ahn" description="Ph.D. Student   ahn.377@osu.edu"></MemberCard></a></div>
                <div className='card'><MemberCard imageURL="./images/memberPhotos/XinWang.jpg" title="Xin Wang" description="Ph.D. Student   wang.15980@osu.edu"></MemberCard></div>
                <div className='card'><a href="https://marcusshen1227.github.io/"><MemberCard imageURL="./images/memberPhotos/MarcusShen.jpg" title="Hui Shen" description="Undergrad Student   shen.1780@osu.edu"></MemberCard></a></div>
              </div>
          </div>

          <div className='memberType'>
              <div className="memberTitle">Former Ph.D. Students</div>
              <div className='cardSet'>
                <div className='card'><a href="https://shenyann.github.io/"><MemberCard imageURL="./images/memberPhotos/YanShen.jpg" title="Shen Yan" description="Ph.D., Research Scientist @ Google Research"></MemberCard></a></div>
                <div className='card'><MemberCard imageURL="./images/memberPhotos/XiaoZeng.jpg" title="Xiao Zeng" description="Ph.D., Applied Scientist @ Amazon Lab126"></MemberCard></div>
                <div className='card'><MemberCard imageURL="./images/memberPhotos/BiyiFang.png" title="Biyi Fang" description="Ph.D., Machine Learning Scientist and Software Engineer @ Microsoft Machine Learning Cloud Services"></MemberCard></div>
              </div>
          </div>

          <div className='memberType'>
            <div className="memberTitle">Former Master Students</div>
              <div className='cardSet'>
                <div className='card'><NoPhotoCard title="Yun Lou" description="Master"></NoPhotoCard></div>
                <div className='card'><NoPhotoCard title="Fazlay Rabbi" description="Master"></NoPhotoCard></div>
              </div>
          </div>

          <div className='memberType'>
            <div className="memberTitle">Former Undergraduates</div>
              <div className='cardSet'>
                <div className='card'><NoPhotoCard title="Brian Wang" description="B.S."></NoPhotoCard></div>
                <div className='card'><NoPhotoCard title="Jordan Wagner" description="B.S."></NoPhotoCard></div>
                <div className='card'><NoPhotoCard title="Collin Dillinger" description="B.S."></NoPhotoCard></div>
                <div className='card'><NoPhotoCard title="Nathan Bagnall" description="B.S."></NoPhotoCard></div>
                <div className='card'><NoPhotoCard title="Stevers William" description="B.S."></NoPhotoCard></div>
                <div className='card'><NoPhotoCard title="Philip Dooley" description="B.S."></NoPhotoCard></div>
                <div className='card'><NoPhotoCard title="Polimante Sergio" description="B.S."></NoPhotoCard></div>
                <div className='card'><NoPhotoCard title="Haochen Sun" description="B.S."></NoPhotoCard></div>
                <div className='card'><NoPhotoCard title="Jillian Co" description="B.S."></NoPhotoCard></div>
              </div>
          </div>

          <div className='memberType'>
            <div className="memberTitle">Former High School Student</div>
              <div className='cardSet'>
                <div className='card'><NoPhotoCard title="Jake Zhang" description=""></NoPhotoCard></div>
              </div>
          </div>
      </div>

      {/* <div className='memberContent'>
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
      </div> */}
    </div>
  )
}

export default Members