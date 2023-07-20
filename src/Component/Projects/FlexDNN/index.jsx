import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function FlexDNN() {
  return (
    <div className='project_container'>
        <div className='project_title'>
            FlexDNN: Input-Adaptive On-Device Deep Learning for Efficient Mobile Vision
        </div>

        <div className='project_conference'>
            SEC'20
        </div>
        <div className='project_members'>
            Biyi Fang, Xiao Zeng, Faen Zhang, Hui Xu, and Mi Zhang.
        </div>
        <div className='project_buttons'>
            <a href="https://mi-zhang.github.io/papers/2020_SEC_FlexDNN.pdf" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

            <PopModal inproceeding = {`@inproceedings{flexdnn2020sec,`}
                title = {`title={{FlexDNN: Input-Adaptive On-Device Deep Learning for Efficient Mobile Vision}},`}
                author = {`author={Fang, Biyi and Zeng, Xiao and Zhang, Faen and Xu, Hui and Zhang, Mi},`}
                booktitle = {`booktitle={ACM/IEEE Symposium on Edge Computing (SEC)},`}
                year = {`year={2020}`}
            />
        </div>
        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/FlexDNN_in.svg" alt="" />
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            Mobile vision systems powered by the recent advancement in Deep Neural Networks (DNNs) are enabling a wide range of on-device video analytics applications. Considering mobile systems are constrained with limited resources, reducing resource demands of DNNs is crucial to realizing the full potential of these applications. In this paper, we present FlexDNN, an input-adaptive DNN-based framework for efficient on-device video analytics. To achieve this, FlexDNN takes the intrinsic dynamics of mobile videos into consideration, and dynamically adapts its model complexity to the difficulty levels of input video frames to achieve computation efficiency. FlexDNN addresses the key drawbacks of existing systems and pushes the state-of-theart forward. We use FlexDNN to build three representative ondevice video analytics applications, and evaluate its performance on both mobile CPU and GPU platforms. Our results show that FlexDNN significantly outperforms status quo approaches in accuracy, average CPU/GPU processing time per frame, frame drop rate, and energy consumption.
            </div>
        </div>
    </div>
  )
}

export default FlexDNN