import React, { useEffect, useState }from 'react'
import './MiZhang.css'

function MiZhang() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);
  
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='mizhang'>
      <div className='mizhangProfile'>
        <div className='mizhangImg'>
          <img src="./images/memberPhotos/MiZhang.png" alt="" />
        </div>
        {/* <div className='googleButton'>
            <a href="https://scholar.google.com/citations?user=r3A90uAAAAAJ&hl=en">
                <button class="modern-button">Google Scholar</button>
            </a>
        </div> */}
        {!isWideScreen && 
        <>
          <div className='mizhangTitle'>
              Mi Zhang
          </div>
        </>}
        <div className='outsideProfile'>
            <a href="https://engineering.osu.edu/people/mizhang.1">OSU Profile</a> <br />
            <a href="https://mi-zhang.github.io/">Personal Website</a>
        </div>
      </div>
      <div className='mizhangInfo'>
        {isWideScreen && 
        <>
          <div className='mizhangTitle'>
              Mi Zhang
          </div>
        </>}
        <div className='mizhangBio'>
            Associate Professor<br />
            Director, AIoT and Machine Learning Systems Lab <br />
            Department of Computer Science and Engineering <br />
            The Ohio State University <br />
            <br />
            Affiliations: <br />
            <a href="https://icdt.osu.edu/">Institute for Cybersecurity and Digital Trust </a> <br />
            <a href="https://tdai.osu.edu/">Translational Data Analytics Institute</a> <br />
            <a href="https://5g-oh.osu.edu/">5G and Broadband Connectivity Center</a>
        </div>

        <div className='mizhangTitle'>
          Education
        </div>
        <div className='mizhangEdu'>
          <div className='mizhangExp'>
            Postdoctoral Associate, Cornell University
          </div>

          <div className='mizhangExp'>
            Ph.D., Computer Engineering, University of Southern California
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
          Selected Awards
        </div>
        <div className='mizhangHonors'>
            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2022</div> &nbsp;<a href="https://minghsiehece.usc.edu/groups-and-institutes-sipi-sipi-50th-anniversary-awardees/">Inaugural USC ECE SIPI Distinguished Alumni Award in Junior/Academia Category</a>
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2022</div> &nbsp;Meta Reality Labs Faculty Research Award
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2022</div> &nbsp;ACM SIGMOBILE Research Highlight
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2021</div> &nbsp;Best Paper Award, ACM SenSys'21
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2020</div> &nbsp;Facebook Faculty Research Award
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2020</div> &nbsp;Best Paper Award, NeurIPS'20 Federated Learning Workshop
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2020</div> &nbsp;Best Paper Award Nominee, ACM/IEEE SEC'20
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2020</div> &nbsp;<a href="https://innovationcenter.msu.edu/events/2020-innovation-celebration/mi-zhang-innovation-of-the-year/">MSU Innovation of the Year Award</a>
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2019</div> &nbsp;Amazon AWS Machine Learning Research Award
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2019</div> &nbsp;<a href="https://micronet-challenge.github.io/leaderboard.html">Google MicroNet Challenge (CIFAR-100 Track) 4th Place Winner @ NeurIPS'19</a>
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2019</div> &nbsp;Best Paper Award Nominee, ICCV'19 Neural Architects Workshop
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2019</div> &nbsp;Google Security Reward
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2018</div> &nbsp;Best Paper Award, IEEE CNS'18
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2017</div> &nbsp;<a href="https://ninesights.ninesigma.com/servlet/hype/IMT?userAction=Browse&documentId=81e575b66f2412a2296a8204d15f0546&templateName=&documentTableId=1008809492095622127">NSF Hearables Challenge Third Place Winner</a>
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2017</div> &nbsp;NIH Mobile Health (mHealth) Scholar
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2016</div> &nbsp;NSF CRII Award
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2016</div> &nbsp;<a href="https://wayback.archive-it.org/org-350/20210227205551/https://www.nlm.nih.gov/news/pillimagerecognitionchallenge.html">NIH Pill Image Recognition Challenge First Place Winner</a>
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2015</div> &nbsp;Best Paper Award Honorable Mention, ACM UbiComp'15
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2015</div> &nbsp;All-Time Top Article, JMIR
            </div>

            <div className='mizhangHonor'>
            <div className='mizhangHighlight'>2014</div> &nbsp;ACM SIGMOBILE Research Highlight
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default MiZhang