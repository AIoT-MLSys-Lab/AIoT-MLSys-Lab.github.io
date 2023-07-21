import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function MobilePhoneSensorCorrelatesofDepressiveSymptomSeverityinDailyLifeBehavior() {
  return (
    <div className='project_container'>
        <div className='project_title'>
        Mobile Phone Sensor Correlates of Depressive Symptom Severity in Daily-Life Behavior: An Exploratory Study
        </div>

        <div className='project_conference'>
        JMIR
        </div>
        <div className='project_members'>
        Sohrob Saeb, Mi Zhang, Christopher J. Karr, Stephen M. Schueller, Marya E. Corden, Konrad P. Kording, and David C. Mohr.
        </div>
        <div className='project_buttons'>
            <a href="https://mi-zhang.github.io/papers/2015_JMIR_MobileDepression.pdf" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>
            
            <PopModal inproceeding = {`@article{saeb2015mobile,`}
                title = {`title = {Mobile Phone Sensor Correlates of Depressive Symptom Severity in Daily-Life Behavior: An Exploratory Study},`}
                author = {`author = {Saeb, Sohrab and Zhang, Mi and Karr, Christopher J and Schueller, Stephen M and Corden, Marya E and Kording, Konrad P and Mohr, David C},`}
                journal = {`journal = {Journal of Medical Internet Research (JMIR)},`}
                volume = {`volume = {17},`}
                number = {`number = {7},7`}
                pages = {`pages = {e175},`}
                year = {`year = {2015}`}
            />
        </div>
        
        <div className='project_collection'>
        <div>
                <img src="./images/projects/DigitalMentalHealth_in.svg" alt=""  className='project_collection_img'/>
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            Background: Depression is a common, burdensome, often recurring mental health disorder that frequently goes undetected
and untreated. Mobile phones are ubiquitous and have an increasingly large complement of sensors that can potentially be useful
in monitoring behavioral patterns that might be indicative of depressive symptoms.
Objective: The objective of this study was to explore the detection of daily-life behavioral markers using mobile phone global
positioning systems (GPS) and usage sensors, and their use in identifying depressive symptom severity.
Methods: A total of 40 adult participants were recruited from the general community to carry a mobile phone with a sensor
data acquisition app (Purple Robot) for 2 weeks. Of these participants, 28 had sufficient sensor data received to conduct analysis.
At the beginning of the 2-week period, participants completed a self-reported depression survey (PHQ-9). Behavioral features
were developed and extracted from GPS location and phone usage data.
Results: A number of features from GPS data were related to depressive symptom severity, including circadian movement
(regularity in 24-hour rhythm; r=-.63, P=.005), normalized entropy (mobility between favorite locations; r=-.58, P=.012), and
location variance (GPS mobility independent of location; r=-.58, P=.012). Phone usage features, usage duration, and usage
frequency were also correlated (r=.54, P=.011, and r=.52, P=.015, respectively). Using the normalized entropy feature and a
classifier that distinguished participants with depressive symptoms (PHQ-9 score ≥5) from those without (PHQ-9 score &lt; 5), we
achieved an accuracy of 86.5%. Furthermore, a regression model that used the same feature to estimate the participants’ PHQ-9
scores obtained an average error of 23.5%.
Conclusions: Features extracted from mobile phone sensor data, including GPS and phone usage, provided behavioral markers
that were strongly related to depressive symptom severity. While these findings must be replicated in a larger study among
participants with confirmed clinical symptoms, they suggest that phone sensors offer numerous clinical opportunities, including
continuous monitoring of at-risk populations with little patient burden and interventions that can provide just-in-time outreach.

            </div>
        </div>
    </div>
  )
}

export default MobilePhoneSensorCorrelatesofDepressiveSymptomSeverityinDailyLifeBehavior