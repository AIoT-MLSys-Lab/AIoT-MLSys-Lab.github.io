import {React, useState, useEffect} from 'react'
import './news.css'
import ContentTitle from '../ContentTitle'
import NewsCard from '../NewsCard'

function News() {
  const [activeTab, setActiveTab] = useState('2023');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);
  
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <ContentTitle title = "News" subtitle = "News"></ContentTitle>
      <div className='newsContent'>
        {!isWideScreen && <>
          <div className='newsYear'>
            <button onClick={() => handleTabClick('2023')} className={`tab-button ${activeTab === '2023' ? 'selectedButton' : ''}`}>2023</button>
            <button onClick={() => handleTabClick('2022')} className={`tab-button ${activeTab === '2022' ? 'selectedButton' : ''}`}>2022</button>
            <button onClick={() => handleTabClick('Before 2022')} className={`tab-button ${activeTab === 'Before 2022' ? 'selectedButton' : ''}`}>Before 2022</button>
            <hr />
          </div>
        </>
        }
        {isWideScreen && <>
          <div className='newsYear'>
            <button onClick={() => handleTabClick('2023')} className={`tab-button ${activeTab === '2023' ? 'selectedButton' : ''}`}>2023</button>
            <hr />
            <button onClick={() => handleTabClick('2022')} className={`tab-button ${activeTab === '2022' ? 'selectedButton' : ''}`}>2022</button>
            <hr />
            <button onClick={() => handleTabClick('Before 2022')} className={`tab-button ${activeTab === 'Before 2022' ? 'selectedButton' : ''}`}>Before 2022</button>
          </div>
        </>
        }

        <div className='newsInfo'>
          {activeTab === '2023' && (
            <div className='newsCards'>
              
              <div className='newsItem'>
                <NewsCard 
                imageURL="./images/news/news_2023_2.png" 
                title="Prof. Zhang Receives the USC ECE-SIPI Distinguished Alumni Award" 
                date="Feb. 2023"
                content="Prof. Zhang receives the inaugural USC ECE-SIPI Distinguished Alumni Award in the Junior/Academia category for his contributions to mobile/edge computing in his early career. Details about the award can be found <a href='https://minghsiehece.usc.edu/groups-and-institutes/sipi/sipi-50th-anniversary/'>here</a>."
                ></NewsCard>
              </div>

              <div className='newsItem'>
                <NewsCard 
                imageURL="./images/news/news_2023_1.jpg"
                title="Congrats to Samiul Alam!"
                date="Jan. 2023"
                content="Congratulations Samiul for being awarded the highly competitive OSU College Allocated Fellowship!"
                ></NewsCard>
              </div>
              
            </div>
          )}
          {activeTab === '2022' && (
            <div className='newsAll'>
              <div className='newsItem'>
                <div className='newsStrong'>12/2022:</div> Thanks Meta Reality Labs for the generous faculty award for supporting our research!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>09/2022:</div> <a href="https://arxiv.org/abs/2212.01548">FedRolex</a>, our work on model-heterogeneous federated learning is accepted to NeurIPS'22.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>08/2022:</div> After eight amazing years at MSU, our group has joined Department of Computer Science and Engineering at OSU.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>08/2022:</div> Congratulations Shen for denfending his PhD thesis! Wish you all the best at Google Research!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>07/2022:</div> Invited to give a talk at Meta (Facebook) to talk about how we build efficient, scalable, and inclusive federated learning systems.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>04/2022:</div> Invited to give a talk at Hong Kong University of Science and Technology (HKUST).
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>04/2022:</div> Invited to give a talk at the <a href="https://www.ece.rutgers.edu/events/efficient-ai-seminar-dr-mi-zhang-neural-architecture-search-data-centric-automl">Efficient AI Seminar at Rutgers University</a>.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>03/2022:</div> Our <a href="https://arxiv.org/abs/2111.07494">vision paper</a> on enabling federated learning on potentially billions of IoT devices is published at IEEE Internet of Things Magazine (IEEE IoTM).
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>01/2022:</div> Congratulations Shen for landing his summer internship at Google Brain!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>01/2022:</div> <a href="https://mi-zhang.github.io/papers/2022_ICLR_DeepAA.pdf">Deep AutoAugment</a>, our AutoML work on deep data augmentation policy search is accepted to ICLR'22.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>01/2022:</div> Invited to serve as the area chair of the International Conference on Automated Machine Learning (AutoML'22).
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>01/2022:</div> <a href="https://mi-zhang.github.io/papers/2022_MobiCom_PyramidFL.pdf">PyramidFL</a> (Client Selection for Federated Learning) is accepted to ACM MobiCom'22.
              </div>
            </div>
          )}
          {activeTab === 'Before 2022' && (
            <div className='newsAll'>
              <div className='newsItem'>
                <div className='newsStrong'>12/2021:</div> We are organizing the 1st <a href="https://sites.google.com/view/fedvision/home">International Workshop on Federated Learning for Computer Vision (FedVision) at CVPR'22</a>. Please consider submitting your best work.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>12/2021:</div> Invited to give a talk at the <a href="https://viterbi.usc.edu/calendar/?event=69936#user_options">USC Center for Cyber-Physical Systems and Internet of Things Seminar</a>.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>11/2021:</div> <a href="https://mi-zhang.github.io/papers/2021_SenSys_NELoRa.pdf">NELoRa</a> won the <div className='newsHighLight'>Best Paper Award</div> at ACM SenSys'21, and is selected as ACM SIGMOBILE Research Highlight.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>11/2021:</div> Invited to attend this year's Google Workshop on Federated Learning and Analytics.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>10/2021:</div> Invited to give a talk at the <a href="https://mlsys.stanford.edu/">Stanford Machine Learning Systems (MLSys) Seminar</a>.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>09/2021:</div> <a href="https://mi-zhang.github.io/papers/2021_SenSys_Mercury.pdf">Mercury</a> (On-Device Distributed DNN Training), <a href="https://mi-zhang.github.io/papers/2021_SenSys_FedMask.pdf">FedMask</a> (Federated Learning), and <a href="https://mi-zhang.github.io/papers/2021_SenSys_NELoRa.pdf">NELoRa</a> (AI-enhanced LoRa) are accepted to ACM SenSys'21.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>08/2021:</div> Invited to give a talk at the <a href="https://www.emc2-ai.org/virtual-21">7th Workshop on Energy Efficient Machine Learning and Cognitive Computing</a>.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>07/2021:</div> Invited to serve as the program committee of the Conference on Machine Learning and Systems (MLSys'22).
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>07/2021:</div> In collaboration with many colleagues, we are very excited to publish <a href="https://arxiv.org/abs/2107.06917">A Field Guide to Federated Optimization</a>, a paper that serves as a guide on federated learning research.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>05/2021:</div> Congratulations Xiao for denfending his PhD thesis! Wish you all the best at Amazon!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>05/2021:</div> <a href="https://arxiv.org/abs/2102.07108">CATE</a>, our AutoML work on neural architecture search based on computation-aware neural architecture encoding is accepted as long talk (top 3%) at ICML'21.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>05/2021:</div> Congratulations Shen and Yu for landing their internships at Google Research and Amazon!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>04/2021:</div> Invited to give a Keynote at <a href="https://sites.google.com/view/automl2021">ICML'21 AutoML Workshop</a>.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>04/2021:</div> Our book <a href="https://item.jd.com/12830375.html">创新工场讲AI课：从知识到实践 (Chinese)</a> is published.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>12/2020:</div> <a href="https://arxiv.org/abs/2007.13518">FedML</a> won the <div className='newsHighLight'>Best Paper Award</div> at NeurIPS'20 Federated Learning Workshop.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>10/2020:</div> Invited to attend and give a talk at the Facebook AI Systems Faculty Summit.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>09/2020:</div> <a href="https://mi-zhang.github.io/papers/2020_NeurIPS_arch2vec.pdf">arch2vec</a>, our AutoML work on neural architecture search based on unsupervised architecture representation learning is accepted to NeurIPS'20.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>09/2020:</div> <a href="https://mi-zhang.github.io/papers/2020_SenSys_Distream.pdf">Distream</a>, our distributed deep learning framework for large-scale video analytics is accepted to ACM SenSys'20.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>09/2020:</div> <a href="https://mi-zhang.github.io/papers/2020_SenSys_WiSIA.pdf">WiSIA (Wi-Fi See It All)</a> is accepted to ACM SenSys'20.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>08/2020:</div> Invited to give a tutorial on AutoML at <a href="https://hangzhang.org/ECCV2020/">ECCV'20 Tutorial session: From HPO to NAS: Automated Deep Learning</a>.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>08/2020:</div> <a href="https://mi-zhang.github.io/papers/2020_SEC_FlexDNN.pdf">FlexDNN</a>, our on-device deep learning framework for efficient mobile vision is accepted to ACM/IEEE SEC'20 and is the <div className='newsHighLight'>Best Paper Award Nominee</div>.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>07/2020:</div> In collaboration with many colleagues, we are very excited to introduce <a href="https://arxiv.org/abs/2007.13518">FedML</a>, a research library and benchmark for federated learning.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>07/2020:</div> Invited to attend the Workshop on Federated Learning and Analytics hosted by Google.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>07/2020:</div> <a href="https://mi-zhang.github.io/papers/2020_ECCV_MutualNet.pdf">MutualNet</a> is accepted as oral (top 2%) at ECCV'20. MutualNet is an adaptive ConvNet that is able to achieve adaptive accuracy-efficiency trade-offs at runtime for on-device AI.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>05/2020:</div> Congratulations Xiao, Yu, and Shen for landing their internships at Amazon and ByteDance!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>04/2020:</div> Thanks Amazon AWS AI for the <a href="https://www.amazon.science/research-awards/program-updates/2019-q4-aws-machine-learning-research-awards-recipients-announced">AWS Machine Learning Research Award</a>!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>03/2020:</div> <a href="https://mi-zhang.github.io/papers/2020_MobiSys_SecWIR.pdf">SecWIR</a> is accepted to ACM MobiSys'20.
              </div>
              
              <div className='newsItem'>
                <div className='newsStrong'>02/2020:</div> Thanks Facebook Research for the <a href="https://research.facebook.com/blog/2020/02/announcing-the-winners-of-the-systems-for-machine-learning-rfp/">Facebook Faculty Research Award on Systems for Machine Learning</a>!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>02/2020:</div> Our AI-enabled smart hearing aid receives the <a href="https://innovationcenter.msu.edu/events/2020-innovation-celebration/mi-zhang-innovation-of-the-year/">2020 MSU Innovation of the Year Award</a>!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>12/2019:</div> Congratulations Biyi for denfending his PhD thesis! Wish you all the best at Microsoft!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>12/2019:</div> We are the <div className='newsHighLight'>4th Place Winner (1st Place in U.S. and Canada)</div> of the Google MicroNet Challenge CIFAR-100 Track hosted at NeurIPS'19! <a href="https://micronet-challenge.github.io/leaderboard.html">Official Announcement</a>. This is our third global competition win over the past 4 years. We have made our algorithm <a href="https://github.com/AIoT-MLSys-Lab/MSUNet">open source</a>, and hope it can push the research area of on-device/edge AI forward.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>08/2019:</div> <a href="https://mi-zhang.github.io/papers/2019_ICCVW_HM-NAS.pdf">HM-NAS</a>, our AutoML work on weight-sharing based neural architecture search won the <div className='newsHighLight'>Best Paper Award Nominee</div> at ICCV'19 Neural Architects Workshop.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>05/2019:</div> Congratulations Shen for landing his internship at Bosch Research!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>08/2018:</div> Thanks NSF for the NeTS Small grant (Co-PI) to fund our Mobile Internet of Things (Mobile IoT) project!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>07/2018:</div> <a href="https://mi-zhang.github.io/papers/2018_MobiCom_NestDNN.pdf">NestDNN</a>, our on-device deep learning framework that enables resource-aware multi-tenant on-device AI is accepted to ACM MobiCom'18.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>05/2018:</div> <a href="https://mi-zhang.github.io/papers/2018_CNS_WiFiCalling.pdf">The Dark Side of Operational Wi-Fi Calling Services</a> won the <div className='newsHighLight'>Best Paper Award</div> at IEEE CNS'18. The work reported in this paper also won the Google Security Reward.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>05/2018:</div> Congratulations Biyi for landing his internship at Microsoft!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>08/2018:</div> Our <a href="https://mi-zhang.github.io/papers/2018_GetMobile_UbiquitousMR.pdf">vision paper</a> on realizing ubiquitous mixed reality by combining Internet of Things (IoT) and mixed reality (MR) is published at ACM SIGMOBILE GetMobile. Our <a href="https://mi-zhang.github.io/papers/2018_UbiComp_JARVIS.pdf">ACM UbiComp'18 paper</a> is one concrete realization of this vision.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>12/2017:</div> Invited to serve on the Technical Advisory Board of the <a href="https://grandchallenges.ucla.edu/depression/">UCLA Depression Grand Challenge</a>.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>09/2017:</div> Interviewed by <a href="https://www.wired.com/story/to-compete-with-new-rivals-chipmaker-nvidia-shares-its-secrets/?ncid=so-twi-nl-22946">WIRED</a> to share my view on NVIDIA's Deep Learning Accelerator and on accelerating deep learning on mobile and embedded devices.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>08/2017:</div> We are the <div className='newsHighLight'>Third Place Winner</div> of the NSF Hearables Challenge! <a href="https://ninesights.ninesigma.com/servlet/hype/IMT?userAction=Browse&documentId=81e575b66f2412a2296a8204d15f0546&templateName=&documentTableId=1008809492095622127">Official NSF Announcement</a>. We are <a href="https://ubicomp.org/ubicomp2017/program/nsfhearableschallenge.html">invited by NSF</a> to present our work at ACM UbiComp'17. Media coverage: <a href="https://cacm.acm.org/news/222774-tune-out-background-noise-with-msus-new-technology/fulltext">ACM TechNews</a>, <a href="https://www.tun.com/blog/msu-technology-hearing-aid-noise/">TUN</a>, <a href="https://www.rdworldonline.com/">R&D Magazine</a>, <a href="https://www.aau.edu/research-scholarship/featured-research-topics/msu-hearing-aid-technology-eliminate-background-noise">AAU</a>, <a href="https://msutoday.msu.edu/news/2017/msu-hearing-aid-technology-to-eliminate-background-noise">MSU Today</a>.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>07/2017:</div> <a href="https://mi-zhang.github.io/papers/2017_SenSys_DeepASL.pdf">DeepASL</a>, our deep learning based American sign language (ASL) translation system that enables ubiquitous and non-intrusive ASL translation at both word and sentence levels is accepted to ACM SenSys'17. Media coverage: <a href="https://www.youtube.com/watch?v=TwI1aeWz9Dc">NSF (video)</a>, <a href="https://www.youtube.com/watch?v=7HzUr9let48">MSU (video)</a>, <a href="https://developer.nvidia.com/blog/ai-can-interpret-and-translate-american-sign-language-sentences/">NVIDIA</a>, <a href="https://www.michiganradio.org/health/2019-03-08/stateside-asl-translation-technology-ingham-countys-first-public-defender-sen-peters-on-pfas">NPR (radio interview)</a>, <a href="https://www.smithsonianmag.com/innovation/sign-language-translators-are-cool-but-are-they-useful-180971535/">Smithsonian</a>, <a href="https://www.aau.edu/research-scholarship/featured-research-topics/new-technology-breaks-through-sign-language-barriers">AAU</a>, <a href="https://www.futurity.org/sign-language-translator-1984022/">Futurity</a>, <a href="http://msutoday.msu.edu/news/2017/msu-hearing-aid-technology-to-eliminate-background-noise/">MSU Today</a>.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>05/2017:</div> Our <a href="https://www.annualreviews.org/doi/abs/10.1146/annurev-clinpsy-032816-044949">review paper</a> on personal sensing and machine learning for digital mental health is published at the Annual Review of Clinical Psychology (Impact Factor: 12.214).
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>04/2017:</div> Honored to be selected as the 2017 NIH Mobile Health (mHealth) Scholar!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>02/2017:</div> <a href="https://mi-zhang.github.io/papers/2017_MobiSys_MobileDeepPill.pdf">MobileDeepPill</a>, our <a href="https://wayback.archive-it.org/org-350/20210227205551/https://www.nlm.nih.gov/news/pillimagerecognitionchallenge.html">award-winning</a> on-device deep learning based mobile pill recognition system is accepted to ACM MobiSys'17.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>09/2016:</div> Thanks NSF for the PFI:BIC grant (PI)! We are very grateful for receiving this grant to develop personal sensing technologies and mobile sensor data analytics techniques to combat depression on university campuses. Media coverage: <a href="https://www.youtube.com/watch?v=1dtQAvhaIuk">NSF (video)</a>, <a href="https://www.smithsonianmag.com/innovation/how-mobile-technology-can-help-universities-combat-depression-180961795/">Smithsonian Magazine</a>, <a href="https://msutoday.msu.edu/news/2016/1-million-nsf-grant-to-enhance-college-counseling-services">MSU Today</a>, <a href="https://edtechmagazine.com/higher/article/2016/11/michigan-state-university-app-helps-college-students-depression">EdTech</a>, <a href="http://www.itechpost.com/articles/30025/20160915/depression-and-anxiety-treated-through-smartphone-counseling-on-msu-campus.htm">iTechPost</a>, etc.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>08/2016:</div> We are the <div className='newsHighLight'>First Place Winner</div> of the NIH Pill Image Recognition Challenge! <a href="https://wayback.archive-it.org/org-350/20210227205551/https://www.nlm.nih.gov/news/pillimagerecognitionchallenge.html">Official NIH Announcement</a> | Media coverage: <a href="https://msutoday.msu.edu/news/2016/nih-challenge-winner-helping-solve-pill-recognition-problem">MSU Today</a>, <a href="https://www.wxyz.com/news/msu-professor-working-on-mobile-solution-to-identify-pills">ABC News (TV)</a>, etc.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>08/2016:</div> Thanks NSF for the CSR Small grant (PI)!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>08/2016:</div> Honored to receive the NSF CRII Award! Media coverage: <a href="http://msutoday.msu.edu/news/2016/msu-technology-could-help-keep-elderly-safe-in-their-homes/">MSU Today</a>, <a href="http://cacm.acm.org/news/206887-msu-technology-could-help-keep-elderly-safe-in-their-homes/fulltext">ACM TechNews</a>, <a href="https://www.michiganradio.org/health/2016-09-03/msu-researcher-studying-new-way-to-monitor-at-risk-senior-citizens">NPR</a>, <a href="https://www.wxyz.com/news/wi-fi-signals-could-keep-tabs-on-health-of-aging-family-members-msu-exploring-possibilities">ABC News (TV)</a>, etc.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>05/2016:</div> Congratulations Biyi for landing his internship at Intel Labs!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>05/2016:</div> <a href="https://mi-zhang.github.io/papers/2016_UbiComp_AirSense.pdf">AirSense</a>, our AIoT system for indoor air quality sensing and analytics is accepted to ACM UbiComp'16. Media coverage: <a href="https://www.theatlantic.com/sponsored/dyson/are-you-polluting-your-own-home/1838/">The Atlantic</a>, <a href="https://msutoday.msu.edu/news/2016/new-technology-monitors-indoor-air-quality">MSU Today</a>, <a href="http://www.futurity.org/airsense-indoor-pollution-1295542-2/">Futurity</a>, etc.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>02/2016:</div> <a href="https://mi-zhang.github.io/papers/2016_MobiSys_BodyScan.pdf">BodyScan</a>, our wireless sensing system for contactless activity and vital sign monitoring is accepted to ACM MobiSys'16.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>01/2016:</div> <a href="https://mi-zhang.github.io/papers/2016_IPSN_HeadScan.pdf">HeadScan</a>, our wireless sensing system for contactless activity monitoring is accepted to ACM/IEEE IPSN'16. Media coverage: <a href="https://scopeblog.stanford.edu/2016/05/25/engineers-develop-new-type-of-wearable-device/">Stanford Medicine</a>, <a href="https://readwrite.com/health-wearable-monitors-patients-depression-ht4/">ReadWrite</a>, <a href="http://www.futurity.org/headscan-wearables-1165962-2/?utm_source=Futurity+Today&utm_campaign=4b768f71bd-May_19_20165_19_2016&utm_medium=email&utm_term=0_e34e8ee443-4b768f71bd-206324325">Futurity</a>, <a href="http://msutoday.msu.edu/news/2016/wearable-technology-could-help-detect-health-risks-depression/">MSU Today</a>, <a href="https://www.medgadget.com/2016/05/headscan-keeps-jaw-radar-view.html">Medgadget</a>.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>09/2015:</div> Congratulations Biyi for landing his internship at Bell Labs!
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>07/2015:</div> <a href="https://mi-zhang.github.io/papers/2015_UbiComp_DoppleSleep.pdf">DoppleSleep</a>, our device-free wireless sensing system for contactless sleep monitoring won the <div className='newsHighLight'>Best Paper Honorable Mention Award</div> at ACM UbiComp'15. Media coverage: <a href="https://www.technologyreview.com/news/539961/got-sleep-problems-try-tracking-your-rest-with-radar/">MIT Technology Review</a>, etc.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>07/2015:</div> <a href="https://mi-zhang.github.io/papers/2015_UbiComp_MyBehavior.pdf">MyBehavior</a>, our reinforcement learning-based mobile recommendation system is accepted to ACM UbiComp'15. Media coverage: <a href="https://www.technologyreview.com/news/539721/a-health-tracking-app-you-might-actually-stick-with/">MIT Technology Review</a>, <a href="https://mashable.com/archive/health-tracking-app">Mashable</a>, <a href="https://www.mobihealthnews.com/45795/cornell-researchers-use-personalized-algorithm-in-weight-loss-app/">MobiHealth News</a>, etc.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>07/2015:</div> Our <a href="https://www.jmir.org/2015/7/e175/">paper</a> on personal sensing for depression detection using mobile phone sensors and machine learning is accepted to JMIR. It is one of the <div className='newsHighLight'>JMIR All-Time Top Article</div> now. See the <a href="https://www.jmir.org/top-articles/overview">rank</a> here. Media coverage: <a href="https://time.com/3958128/smartphone-depression/">TIME</a>, <a href="https://www.cnn.com/2015/07/15/health/smartphone-depression-diagnosis/">CNN</a>, <a href="https://techcrunch.com/2015/07/16/your-phone-can-tell-whether-youre-depressed/">TechCrunch</a>, <a href="https://www.theverge.com/2015/7/15/8970269/smartphone-depression-mental-health-detect">The Verge</a>, <a href="https://www.cbsnews.com/news/phone-habits-depression-mental-health/">CBS News</a>, <a href="https://www.foxnews.com/health/2015/07/15/smartphone-sensors-may-detect-depression-study-says/">Fox News</a>, <a href="https://www.dailymail.co.uk/health/article-3162416/How-SMARTPHONE-diagnose-depression-Using-68-minutes-day-sign-mental-illness.html">Daily Mail</a>, <a href="https://www.thetimes.co.uk/article/check-on-your-phone-for-signs-of-depression-vjf2q0jfh6v">The Times</a>, <a href="https://www.newsweek.com/black-box-how-your-phone-can-tell-youre-depressed-354099">Newsweek</a>, <a href="https://www.mirror.co.uk/news/health/smartphone-behaviour-could-diagnose-depression-6073355">Mirror</a>, <a href="https://www.telegraph.co.uk/news/science/science-news/11741234/Spend-an-hour-on-your-smartphone-daily-You-could-be-depressed.html">The Telegraph</a>, <a href="https://www.washingtonpost.com/news/to-your-health/wp/2015/07/16/how-your-cellphone-knows-if-youre-depressed-it-has-to-do-with-how-you-move-through-time-and-space/">The Washington Post</a>, <a href="https://www.huffpost.com/entry/your-phone-can-tell-if-youre-depressed_n_55a53e03e4b0b8145f73a97f">The Huffington Post</a>, <a href="https://www.latimes.com/science/sciencenow/la-sci-sn-depressed-cellphone-20150715-story.html">Los Angeles Times</a>, <a href="http://www.chicagotribune.com/bluesky/originals/ct-northwestern-feinberg-study-smartphones-depression-bsi-20150715-story.html">Chicago Tribune</a>, <a href="http://www.futurity.org/depression-iphone-960892/">Futurity</a>, <a href="https://www.webmd.com/depression/understanding-depression-basics#1">WebMD</a>, <a href="https://www.usnews.com/news/articles/2015/07/15/phones-can-help-detect-if-youre-depressed-study-says">US News</a>, etc.
              </div>

              <div className='newsItem'>
                <div className='newsStrong'>06/2014:</div> <a href="https://mi-zhang.github.io/papers/2014_MobiSys_BodyBeat.pdf">BodyBeat</a>, our mobile sensing system that listens to sounds inside human body for continuous health monitoring is accepted to ACM MobiSys'14, and is selected as ACM SIGMOBILE Research Highlight. Media coverage: <a href="https://www.technologyreview.com/news/528386/wearable-self-tracking-tool-listens-for-yawns-coughs-and-munches/">MIT Tech Review</a>, <a href="https://www.wsj.com/articles/BL-DGB-36292">Wall Street Journal</a>, <a href="http://www.newscientist.com/article/mg22229734.900-listen-to-sounds-inside#.VAZpWPldV8F">New Scientist</a>.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default News