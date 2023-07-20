import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function Mercury() {
  return (
    <div className='project_container'>
        <div className='project_title'>
            Mercury: Efficient On-Device Distributed DNN Training via Stochastic Importance Sampling
        </div>

        <div className='project_conference'>
            SenSys'21
        </div>
        <div className='project_members'>
            Xiao Zeng, Ming Yan, and Mi Zhang.
        </div>
        <div className='project_buttons'>
            <a href="https://mi-zhang.github.io/papers/2021_SenSys_Mercury.pdf" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

            <PopModal inproceeding = {`@inproceedings{mercury2021sensys,`}
                title = {`title={{Mercury: Efficient On-Device Distributed DNN Training via Stochastic Importance Sampling}},`}
                author = {`author={Zeng, Xiao and Yan, Ming and Zhang, Mi},`}
                booktitle = {`booktitle={ACM Conference on Embedded Networked Sensor Systems (SenSys)},`}
                year = {`year={2021}`}
            />
        </div>
        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/Mercury_in.svg" alt="" />
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
                As intelligence is moving from data centers to the edges, intelligent edge devices such as smartphones, drones, robots, and smart IoT devices are equipped with the capability to altogether train a deep learning model on the devices from the data collected by themselves. Despite its considerable value, the key bottleneck of making on-device distributed training practically useful in realworld deployments is that they consume a significant amount of training time under wireless networks with constrained bandwidth. To tackle this critical bottleneck, we present Mercury, an importance sampling-based framework that enhances the training efficiency of on-device distributed training without compromising the accuracies of the trained models. The key idea behind the design of Mercury is to focus on samples that provide more important information in each training iteration. In doing this, the training efficiency of each iteration is improved. As such, the total number of iterations can be considerably reduced so as to speed up the overall training process. We implemented Mercury and deployed it on a self-developed testbed. We demonstrate its effectiveness and show that Mercury consistently outperforms two status quo frameworks on six commonly used datasets across tasks in image classification, speech recognition, and natural language processing.
            </div>
        </div>
    </div>
  )
}

export default Mercury