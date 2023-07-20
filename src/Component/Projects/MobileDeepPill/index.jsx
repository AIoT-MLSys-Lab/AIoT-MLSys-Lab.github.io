import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function MobileDeepPill() {
  return (
    <div className='project_container'>
        <div className='project_title'>
        MobileDeepPill: A Small-Footprint Mobile Deep Learning System for Recognizing Unconstrained Pill Images
        </div>

        <div className='project_conference'>
        MobiSys'17
        </div>
        <div className='project_members'>
        Xiao Zeng, Kai Cao, and Mi Zhang.
        </div>
        <div className='project_buttons'>
            <a href="https://mi-zhang.github.io/papers/2017_MobiSys_MobileDeepPill.pdf" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

            <PopModal inproceeding = {`@inproceedings{zeng2017mobiledeeppill,`}
                title = {`title = {{MobileDeepPill: A Small-Footprint Mobile Deep Learning System for Recognizing Unconstrained Pill Images}},`}
                author = {`author = {Zeng, Xiao and Cao, Kai and Zhang, Mi},`}
                booktitle = {`booktitle = {Proceedings of the 15th ACM International Conference on Mobile Systems, Applications, and Services (MobiSys)},`}
                pages = {`pages = {56--67},`}
                year = {`year = {2017},`}
                numpages = {`numpages = {12},`}
                address = {`address = {Niagara Falls, NY, USA}`}
            />
        </div>
        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/MobileDeepPill_in.svg" alt=""  className='project_collection_img'/>
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            Correct identification of prescription pills based on their visual appearance is a key step required to assure patient safety and facilitate more effective patient care. With the availability of highquality cameras and computational power on smartphones, it is
possible and helpful to identify unknown prescription pills using
smartphones. Towards this goal, in 2016, the U.S. National Library of Medicine (NLM) of the National Institutes of Health (NIH)
announced a nationwide competition, calling for the creation of a
mobile vision system that can recognize pills automatically from
a mobile phone picture under unconstrained real-world settings.
In this paper, we present the design and evaluation of such mobile pill image recognition system called MobileDeepPill. The development of MobileDeepPill involves three key innovations: a
triplet loss function which attains invariances to real-world noisiness that deteriorates the quality of pill images taken by mobile
phones; a multi-CNNs model that collectively captures the shape,
color and imprints characteristics of the pills; and a Knowledge
Distillation-based deep model compression framework that significantly reduces the size of the multi-CNNs model without deteriorating its recognition performance. Our deep learning-based pill
image recognition algorithm wins the First Prize (champion) of the
NIH NLM Pill Image Recognition Challenge. Given its promising performance, we believe MobileDeepPill helps NIH tackle a
critical problem with significant societal impact and will benefit
millions of healthcare personnel and the general public.
            </div>
        </div>
    </div>
  )
}

export default MobileDeepPill