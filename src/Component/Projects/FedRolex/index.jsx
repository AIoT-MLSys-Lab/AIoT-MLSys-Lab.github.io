import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function FedRolex() {
  return (
    <div className='project_container'>
        <div className='project_title'>
        FedRolex: Model-Heterogeneous Federated Learning with Rolling Sub-Model Extraction
        </div>

        <div className='project_conference'>
        NeurIPS'22
        </div>
        <div className='project_members'>
        Samiul Alam, Luyang Liu, Ming Yan, and Mi Zhang.
        </div>
        <div className='project_buttons'>
            <a href="https://arxiv.org/abs/2212.01548" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

            <PopModal inproceeding = {`@inproceedings{fedrolex2022neurips,`}
                title = {`title={{FedRolex: Model-Heterogeneous Federated Learning with Rolling Sub-Model Extraction}},`}
                author = {`author={Alam, Samiul and Liu, Luyang and Yan, Ming and Zhang, Mi},`}
                booktitle = {`booktitle={Conference on Neural Information Processing Systems (NeurIPS)},`}
                year = {`year={2022}`}
            />

            <a href="https://github.com/MSU-MLSys-Lab/FedRolex" className='project_button'>
            <svg t="1687728592166" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3643" width="16" height="16"><path d="M438.4 849.1l222.7-646.7c0.2-0.5 0.3-1.1 0.4-1.6L438.4 849.1z" opacity=".224" p-id="3644" fill="#ffffff"></path><path d="M661.2 168.7h-67.5c-3.4 0-6.5 2.2-7.6 5.4L354.7 846c-0.3 0.8-0.4 1.7-0.4 2.6 0 4.4 3.6 8 8 8h67.8c3.4 0 6.5-2.2 7.6-5.4l0.7-2.1 223.1-648.3 7.4-21.4c0.3-0.8 0.4-1.7 0.4-2.6-0.1-4.5-3.6-8.1-8.1-8.1zM954.6 502.1c-0.8-1-1.7-1.9-2.7-2.7l-219-171.3c-3.5-2.7-8.5-2.1-11.2 1.4-1.1 1.4-1.7 3.1-1.7 4.9v81.3c0 2.5 1.1 4.8 3.1 6.3l115 90-115 90c-1.9 1.5-3.1 3.8-3.1 6.3v81.3c0 4.4 3.6 8 8 8 1.8 0 3.5-0.6 4.9-1.7l219-171.3c6.9-5.4 8.2-15.5 2.7-22.5zM291.1 328.1l-219 171.3c-1 0.8-1.9 1.7-2.7 2.7-5.4 7-4.2 17 2.7 22.5l219 171.3c1.4 1.1 3.1 1.7 4.9 1.7 4.4 0 8-3.6 8-8v-81.3c0-2.5-1.1-4.8-3.1-6.3l-115-90 115-90c1.9-1.5 3.1-3.8 3.1-6.3v-81.3c0-1.8-0.6-3.5-1.7-4.9-2.7-3.5-7.7-4.1-11.2-1.4z" p-id="3645" fill="#ffffff"></path></svg>
                &nbsp;Code
            </a>

            <a href="https://mi-zhang.github.io/papers/2022_NeurIPS_FedRolex_Poster.pdf" className='project_button'>
            <svg t="1689885276515" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1916" width="16" height="16"><path d="M884.4 810.5l-745.8 0.3 0.1-595.9 745.8-0.2 0.3 595.8h-0.4m0-670H138.7c-41.2-0.1-74.6 33.2-74.7 74.2v596.1c0.1 41.1 33.6 74.3 74.7 74.2h745.7c41.1 0 74.5-33.1 74.7-74.2V214.7c-0.1-41.1-33.5-74.3-74.7-74.2" p-id="1917" fill="#ffffff"></path><path d="M250.5 587.2h149.2c20.6 0 37.3-16.7 37.3-37.2 0-20.6-16.7-37.2-37.3-37.2H250.5c-20.6 0-37.3 16.7-37.3 37.2 0 20.5 16.7 37.2 37.3 37.2m298.4 74.4H250.5c-20.6 0-37.3 16.7-37.3 37.2s16.7 37.2 37.3 37.2h298.4c20.6 0 37.3-16.7 37.3-37.2s-16.7-37.2-37.3-37.2m-37.3-372.2v297.8H810V289.4H511.6z m223.7 223.3H586.2V363.8h149.2v148.9z m0 0" p-id="1918" fill="#ffffff"></path></svg>
                &nbsp;Poster
            </a>
        </div>
        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/FedRolex_in.svg" alt=""  className='project_collection_img'/>
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            Most cross-device federated learning (FL) studies focus on the model-homogeneous setting where the global server model and local client models are identical. However, such constraint not only excludes low-end clients who would otherwise make unique contributions to model training but also restrains clients from training large models due to on-device resource bottlenecks. In this work, we propose FedRolex, a partial training (PT)-based approach that enables model-heterogeneous FL and can train a global server model larger than the largest client model. At its core, FedRolex employs a rolling sub-model extraction scheme that allows different parts of the global server model to be evenly trained, which mitigates the client drift induced by the inconsistency between individual client models and server model architectures. We show that FedRolex outperforms state-of-the-art PT-based model-heterogeneous FL methods (e.g. Federated Dropout) and reduces the gap between model-heterogeneous and model-homogeneous FL, especially under the large-model large-dataset regime. In addition, we provide theoretical statistical analysis on its advantage over Federated Dropout and evaluate FedRolex on an emulated real-world device distribution to show that FedRolex can enhance the inclusiveness of FL and boost the performance of low-end devices that would otherwise not benefit from FL.
            </div>
        </div>
    </div>
  )
}

export default FedRolex