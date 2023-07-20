import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function HeadScan() {
  return (
    <div className='project_container'>
        <div className='project_title'>
        HeadScan: A Wearable System for Radio-based Sensing of Head and Mouth-related Activities
        </div>

        <div className='project_conference'>
        IPSN'16
        </div>
        <div className='project_members'>
        Biyi Fang, Nicholas D. Lane, Mi Zhang, and Fahim Kawsar.
        </div>
        <div className='project_buttons'>
            <a href="https://mi-zhang.github.io/papers/2016_IPSN_HeadScan.pdf" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

            <PopModal inproceeding = {`@inproceedings{fang2016headscan,`}
                title = {`title = {HeadScan: A Wearable System for Radio-based Sensing of Head and Mouth-related Activities},`}
                author = {`author = {Fang, Biyi and Lane, Nicholas D and Zhang, Mi and Kawsar, Fahim},`}
                booktitle = {`booktitle = {The 15th ACM/IEEE International Conference on Information Processing in Sensor Networks (IPSN)},`}
                pages = {`pages = {1--12},`}
                year = {`year = {2016}`}
            />
        </div>
        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/HeadScan_in.svg" alt=""  className='project_collection_img'/>
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            The popularity of wearables continues to rise. However, possible applications, and even their raw functionality are
constrained by the types of sensors that are currently available.
Accelerometers and gyroscopes struggle to capture complex user
activities. Microphones and image sensors are more powerful but
capture privacy sensitive information. Physiological sensors are
obtrusive to users as they often require skin contact and must
be placed at certain body positions to function.
In contrast, radio-based sensing uses wireless radio signals to
capture movements of different parts of the body, and therefore
provides a contactless and privacy-preserving approach to detect
and monitor human activities. In this paper, we contribute to
the search for new sensing modalities for the next generation
of wearable devices by exploring the feasibility of mobile radiobased human activity recognition. We believe radio-based sensing
has the potential to fundamentally transform wearables as we
currently know them. As the first step to achieve our vision,
we have designed and developed HeadScan, a first-of-its-kind
wearable for radio-based sensing of a number of human activities
that involve head and mouth movements. HeadScan only requires
a pair of small antennas placed on the shoulder and collar and
one wearable unit worn on the arm or the belt of the user. HeadScan uses the fine-grained CSI measurements extracted from
radio signals and incorporates a novel signal processing pipeline
that converts the raw CSI measurements into the targeted
human activities. To examine the feasibility and performance of
HeadScan, we have collected approximate 50.5 hours data from
seven users. Our wide-ranging experiments include comparisons
to a conventional skin-contact audio-based sensing approach to
tracking the same set of head and mouth-related activities. Our
experimental results highlight the enormous potential of our
radio-based mobile sensing approach and provide guidance to
future explorations.
            </div>
        </div>
    </div>
  )
}

export default HeadScan