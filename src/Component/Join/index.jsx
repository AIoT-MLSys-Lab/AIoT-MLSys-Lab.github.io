import React, { useState } from 'react';
import './join.css'
import ContentTitle from '../ContentTitle'

function Join() {
  const [activeTab, setActiveTab] = useState('Introduction');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <ContentTitle title = "Our Openings" subtitle = "Join The Lab"></ContentTitle>

      <div className='joinContent'>
        <div className='openings'>
          <div className='oepningsTitle'>Openings</div>
          <button onClick={() => handleTabClick('Introduction')} className={`tab-button ${activeTab === 'Introduction' ? 'selectedButton' : ''}`}>Introduction</button>
          <hr />
          <button onClick={() => handleTabClick('Postdoc')} className={`tab-button ${activeTab === 'Postdoc' ? 'selectedButton' : ''}`}>Postdoc</button>
          <hr />
          <button onClick={() => handleTabClick('Ph.D.')} className={`tab-button ${activeTab === 'Ph.D.' ? 'selectedButton' : ''}`}>Ph.D.</button>
          <hr />
          <button onClick={() => handleTabClick('Master & Undergraduate')} className={`tab-button ${activeTab === 'Master & Undergraduate' ? 'selectedButton' : ''}`}>Master & Undergraduate</button>
          <hr />
          <button onClick={() => handleTabClick('Remote Research Intern')} className={`tab-button ${activeTab === 'Remote Research Intern' ? 'selectedButton' : ''}`}>Remote Research Intern</button>
        </div>

        <div className="application">
          {activeTab === 'Introduction' && (
            <div>
              <div className="applicationTitle">Introduction</div>
              <div>
                Research Topics: Specifically, my students and I work on the following topics:
                {/* 内容 */}
              </div>
            </div>
          )}
          {activeTab === 'Postdoc' && (
            <div>
              <div className="applicationTitle">Postdoc</div>
              <div>
                {/* Postdoc内容 */}
              </div>
            </div>
          )}
          {activeTab === 'Ph.D.' && (
            <div>
              <div className="applicationTitle">Ph.D.</div>
              <div>
                {/* Ph.D.内容 */}
              </div>
            </div>
          )}
          {activeTab === 'Master & Undergraduate' && (
            <div>
              <div className="applicationTitle">Master & Undergraduate</div>
              <div>
                {/* Master & Undergraduate内容 */}
              </div>
            </div>
          )}
          {activeTab === 'Remote Research Intern' && (
            <div>
              <div className="applicationTitle">Remote Research Intern</div>
              <div>
                {/* Remote Research Intern内容 */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Join