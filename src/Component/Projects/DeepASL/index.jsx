import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function DeepASL() {
  return (
    <div className='project_container'>
        <div className='project_title'>
        DeepASL: Enabling Ubiquitous and Non-Intrusive Word and Sentence-Level Sign Language Translation
        </div>

        <div className='project_conference'>
        SenSys'17
        </div>
        <div className='project_members'>
        Biyi Fang, Jillian Co, and Mi Zhang.
        </div>
        <div className='project_buttons'>
            <a href="https://mi-zhang.github.io/papers/2017_SenSys_DeepASL.pdf" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

            <PopModal inproceeding = {`@inproceedings{fang2017deepasl,`}
                title = {`title = {{DeepASL: Enabling Ubiquitous and Non-Intrusive Word and Sentence-Level Sign Language Translation}}, `}
                author = {`author = {Fang, Biyi and Co, Jillian and Zhang, Mi},`}
                booktitle = {`booktitle = {Proceedings of the 15th ACM Conference on Embedded Networked Sensor Systems (SenSys)},`}
                year = {`year = {2017},`}
                address = {`address = {Delft, The Netherlands}`}
            />
        </div>
        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/DeepASL_in.svg" alt=""  className='project_collection_img'/>
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            There is an undeniable communication barrier between deaf people
and people with normal hearing ability. Although innovations in
sign language translation technology aim to tear down this communication barrier, the majority of existing sign language translation systems are either intrusive or constrained by resolution or
ambient lighting conditions. Moreover, these existing systems can
only perform single-sign ASL translation rather than sentence-level
translation, making them much less useful in daily-life communication scenarios. In this work, we fill this critical gap by presenting DeepASL, a transformative deep learning-based sign language
translation technology that enables ubiquitous and non-intrusive
American Sign Language (ASL) translation at both word and sentence levels. DeepASL uses infrared light as its sensing mechanism
to non-intrusively capture the ASL signs. It incorporates a novel
hierarchical bidirectional deep recurrent neural network (HB-RNN)
and a probabilistic framework based on Connectionist Temporal
Classification (CTC) for word-level and sentence-level ASL translation respectively. To evaluate its performance, we have collected
7, 306 samples from 11 participants, covering 56 commonly used
ASL words and 100 ASL sentences. DeepASL achieves an average
94.5% word-level translation accuracy and an average 8.2% word
error rate on translating unseen ASL sentences. Given its promising performance, we believe DeepASL represents a significant step
towards breaking the communication barrier between deaf people and hearing majority, and thus has the significant potential to
fundamentally change deaf people’s lives.
            </div>
        </div>
    </div>
  )
}

export default DeepASL