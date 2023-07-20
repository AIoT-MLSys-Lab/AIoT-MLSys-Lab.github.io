import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function NestDNN() {
  return (
    <div className='project_container'>
        <div className='project_title'>
            NestDNN: Resource-Aware Multi-Tenant On-Device Deep Learning for Continuous Mobile Vision
        </div>

        <div className='project_conference'>
            MobiCom'18
        </div>
        <div className='project_members'>
            Biyi Fang*, Xiao Zeng*, and Mi Zhang.
        </div>
        <div className='project_buttons'>
            <a href="https://mi-zhang.github.io/papers/2018_MobiCom_NestDNN.pdf" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

            <PopModal inproceeding = {`@inproceedings{fangzeng2018nestdnn,`}
                title = {`title = {{NestDNN: Resource-Aware Multi-Tenant On-Device Deep Learning for Continuous Mobile Vision}},`}
                author = {`author = {Fang, Biyi and Zeng, Xiao and Zhang, Mi},`}
                booktitle = {`booktitle = {Proceedings of the 24th Annual International Conference on Mobile Computing and Networking (MobiCom)},`}
                year = {`year = {2018},`}
                pages = {`pages = {115--127},`}
                numpages = {`numpages = {13},`}
                address = {`address = {New Delhi, India}`}
            />
        </div>

        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/NestDNN_in.svg" alt="" />
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
                Mobile vision systems such as smartphones, drones, and augmented-reality headsets are revolutionizing our lives. These systems usually run multiple applications concurrently and their available resources at runtime are dynamic due to events such as starting new applications, closing existing applications, and application priority changes. In this paper, we present NestDNN, a framework that takes the dynamics of runtime resources into account to enable resourceaware multi-tenant on-device deep learning for mobile vision systems. NestDNN enables each deep learning model to offer flexible resource-accuracy trade-offs. At runtime, it dynamically selects the optimal resource-accuracy trade-off for each deep learning model to fit the model’s resource demand to the system’s available runtime resources. In doing so, NestDNN efficiently utilizes the limited resources in mobile vision systems to jointly maximize the performance of all the concurrently running applications. Our experiments show that compared to the resource-agnostic status quo approach, NestDNN achieves as much as 4.2% increase in inference accuracy, 2.0× increase in video frame processing rate and 1.7× reduction on energy consumption.
            </div>
        </div>
    </div>
  )
}

export default NestDNN