import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function NELoRa() {
  return (
    <div className='project_container'>
        <div className='project_title'>
        Wi-Fi See It All: Generative Adversarial Network-augmented Versatile Wi-Fi Imaging
        </div>

        <div className='project_conference'>
        SenSys'20
        </div>
        <div className='project_members'>
        Chenning Li, Zheng Liu, Yuguang Yao, Zhichao Cao, Mi Zhang, and Yunhao Liu.
        </div>
        <div className='project_buttons'>
            <a href="https://mi-zhang.github.io/papers/2020_SenSys_WiSIA.pdf" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

            <PopModal inproceeding = {`@inproceedings{wisia2020sensys,`}
                title = {`title={{Wi-Fi See It All: Generative Adversarial Network-augmented Versatile Wi-Fi Imaging},`}
                author = {`author={Li, Chenning and Liu, Zheng and Yao, Yuguang and Cao, Zhichao and Zhang, Mi and Liu, Yunhao},`}
                booktitle = {`booktitle={ACM Conference on Embedded Networked Sensor Systems (SenSys)},`}
                year = {`year={2020}`}
            />
        </div>
        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/WiSIA_in.svg" alt=""  className='project_collection_img'/>
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            Wi-Fi imaging has attracted signifcant interests due to the ubiquitous availability of Wi-Fi devices today. In this paper, we present
Wi-Fi See It All (WiSIA), a versatile Wi-Fi imaging system built
upon commercial of-the-shelf (COTS) Wi-Fi devices, which is able
to simultaneously detect objects and humans, segment their boundaries, and identify them within the image plane. To achieve this,
WiSIA utilizes three techniques. First, instead of constructing the
image plane at the receiver side using a high-cost antenna array
and complex parameter estimation, WiSIA pushes the image plane
to the object side with two pairs of transceivers and 2D-IFFT. Second, WiSIA extracts the specifc physical signature of the signals
refected from multiple objects to segment their boundaries. Third,
WiSIA incorporates a cGAN (conditional Generative Adversarial
Network) to enhance the boundary of diferent objects. We have
implemented WiSIA using COTS Wi-Fi devices and evaluated it
using a rich set of experiments. Our results demonstrate the efcacy
of WiSIA. It outperforms the state-of-the-art vision-based method
in dark and occlusion scenarios, demonstrating its superiority in
such challenge scenarios.
            </div>
        </div>
    </div>
  )
}

export default NELoRa