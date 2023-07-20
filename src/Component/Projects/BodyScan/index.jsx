import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function BodyScan() {
  return (
    <div className='project_container'>
        <div className='project_title'>
        BodyScan: Enabling Radio-based Sensing on Wearable Devices for Contactless Activity and Vital Sign Monitoring
        </div>

        <div className='project_conference'>
        MobiSys'16
        </div>
        <div className='project_members'>
        Biyi Fang, Nicholas D. Lane, Mi Zhang, Aidan Boran, and Fahim Kawsar.
        </div>
        <div className='project_buttons'>
            <a href="https://mi-zhang.github.io/papers/2016_MobiSys_BodyScan.pdf" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

            <PopModal inproceeding = {`@inproceedings{fang2016bodyscan,`}
                title = {`title = {BodyScan: Enabling Radio-based Sensing on Wearable Devices for Contactless Activity and Vital Sign Monitoring},`}
                author = {`author = {Fang, Biyi and Lane, Nicholas D. and Zhang, Mi and Boran, Aidan and Kawsar, Fahim},`}
                booktitle = {`booktitle = {The 14th ACM International Conference on Mobile Systems, Applications, and Services (MobiSys)},`}
                pages = {`pages = {97--110},`}
                year = {`year = {2016},`}
                location = {`location = {Singapore, Singapore}`}
            />
        </div>
        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/BodyScan_in.svg" alt=""  className='project_collection_img'/>
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            Wearable devices are increasingly becoming mainstream consumer
products carried by millions of consumers. However, the potential
impact of these devices is currently constrained by fundamental
limitations of their built-in sensors. In this paper, we introduce radio as a new powerful sensing modality for wearable devices and
propose to transform radio into a mobile sensor of human activities
and vital signs. We present BodyScan, a wearable system that enables radio to act as a single modality capable of providing wholebody continuous sensing of the user. BodyScan overcomes key
limitations of existing wearable devices by providing a contactless
and privacy-preserving approach to capturing a rich variety of human activities and vital sign information. Our prototype design of
BodyScan is comprised of two components: one worn on the hip
and the other worn on the wrist, and is inspired by the increasingly
prevalent scenario where a user carries a smartphone while also
wearing a wristband/smartwatch. This prototype can support daily
usage with one single charge per day. Experimental results show
that in controlled settings, BodyScan can recognize a diverse set
of human activities while also estimating the user’s breathing rate
with high accuracy. Even in very challenging real-world settings,
BodyScan can still infer activities with an average accuracy above
60% and monitor breathing rate information a reasonable amount
of time during each day.
            </div>
        </div>
    </div>
  )
}

export default BodyScan