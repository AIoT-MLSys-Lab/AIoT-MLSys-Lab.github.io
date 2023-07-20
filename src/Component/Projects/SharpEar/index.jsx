import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function SharpEar() {
  return (
    <div className='project_container'>
        <div className='project_title'>
            SharpEar: Real-Time Speech Enhancement in Noisy Environments
        </div>

        <div className='project_conference'>

        </div>
        <div className='project_members'>
            Xiao Zeng, Kai Cao, Haochen Sun, and Mi Zhang.
        </div>
        <div className='project_buttons'>
            <a href="" className='project_button'>
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
            <Collection></Collection>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            Video cameras have been deployed at scale today. Driven by the breakthrough in deep learning (DL), organizations that have deployed these cameras start to use DL-based techniques for live video analytics. Although existing systems aim to optimize live video analytics from a variety of perspectives, they are agnostic to the workload dynamics in real-world deployments. In this work, we present Distream, a distributed live video analytics system based on the smart camera-edge cluster architecture, that is able to adapt to the workload dynamics to achieve low-latency, high-throughput, and scalable live video analytics. The key behind the design of Distream is to adaptively balance the workloads across smart cameras and partition the workloads between cameras and the edge cluster. In doing so, Distream is able to fully utilize the compute resources at both ends to achieve optimized system performance. We evaluated Distream with 500 hours of distributed video streams from two real-world video datasets with a testbed that consists of 24 cameras and a 4-GPU edge cluster. Our results show that Distream consistently outperforms the status quo in terms of throughput, latency, and latency service level objective (SLO) miss rate.
            </div>
        </div>
    </div>
  )
}

export default SharpEar