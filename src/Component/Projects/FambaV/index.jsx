import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'


function FambaV() {
  return (
    <div className='project_container'>
        <div className='project_title'>
        Famba-V: Fast Vision Mamba with Cross-Layer Token Fusion
        </div>

        <div className='project_conference'>
        ECCV'24 Workshop on Computational Aspects of Deep Learning
        </div>
        <div className='project_members'>
        Hui Shen, Zhongwei Wan, Xin Wang, and Mi Zhang.
        </div>
        <div className='project_buttons'>
            <a href="https://mi-zhang.github.io/papers/2024_ECCVW_Famba-V.pdf" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

            <PopModal inproceeding = {`@inproceedings{fambav2024eccvw,`}
                title = {`title={Famba-V: Fast Vision Mamba with Sparse Fusion-based Visual Representation},`}
                author = {`author={Shen, Hui and Wan, Zhongwei and Wang, Xin and Zhang, Mi},`}
                booktitle = {`booktitle={European Conference on Computer Vision (ECCV) Workshop on Computational Aspects of Deep Learning},`}
                year = {`year={2024}`}
            />

            <a href="https://github.com/AIoT-MLSys-Lab/Famba-V" className='project_button'>
            <svg t="1687728592166" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3643" width="16" height="16"><path d="M438.4 849.1l222.7-646.7c0.2-0.5 0.3-1.1 0.4-1.6L438.4 849.1z" opacity=".224" p-id="3644" fill="#ffffff"></path><path d="M661.2 168.7h-67.5c-3.4 0-6.5 2.2-7.6 5.4L354.7 846c-0.3 0.8-0.4 1.7-0.4 2.6 0 4.4 3.6 8 8 8h67.8c3.4 0 6.5-2.2 7.6-5.4l0.7-2.1 223.1-648.3 7.4-21.4c0.3-0.8 0.4-1.7 0.4-2.6-0.1-4.5-3.6-8.1-8.1-8.1zM954.6 502.1c-0.8-1-1.7-1.9-2.7-2.7l-219-171.3c-3.5-2.7-8.5-2.1-11.2 1.4-1.1 1.4-1.7 3.1-1.7 4.9v81.3c0 2.5 1.1 4.8 3.1 6.3l115 90-115 90c-1.9 1.5-3.1 3.8-3.1 6.3v81.3c0 4.4 3.6 8 8 8 1.8 0 3.5-0.6 4.9-1.7l219-171.3c6.9-5.4 8.2-15.5 2.7-22.5zM291.1 328.1l-219 171.3c-1 0.8-1.9 1.7-2.7 2.7-5.4 7-4.2 17 2.7 22.5l219 171.3c1.4 1.1 3.1 1.7 4.9 1.7 4.4 0 8-3.6 8-8v-81.3c0-2.5-1.1-4.8-3.1-6.3l-115-90 115-90c1.9-1.5 3.1-3.8 3.1-6.3v-81.3c0-1.8-0.6-3.5-1.7-4.9-2.7-3.5-7.7-4.1-11.2-1.4z" p-id="3645" fill="#ffffff"></path></svg>
                &nbsp;Code
            </a>


        </div>
        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/FambaV_in.png" alt=""  className='project_collection_img'/>
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            Mamba and Vision Mamba (Vim) models have shown their potential as an alternative to methods based on Transformer architecture. This work introduces Fast Mamba for Vision (Famba-V), a cross-layer token fusion technique to enhance the training efficiency of Vim models. The key idea of Famba-V is to identify and fuse similar tokens across different Vim layers based on a suit of cross-layer strategies instead of simply applying token fusion uniformly across all the layers that existing works propose. We evaluate the performance of Famba-V on CIFAR-100. Our results show that Famba-V is able to enhance the training efficiency of Vim models by reducing both training time and peak memory usage during training. Moreover, the proposed cross-layer strategies allow Famba-V to deliver superior accuracy-efficiency trade-offs. These results all together demonstrate Famba-V as a promising efficiency enhancement technique for Vim models.

            </div>
        </div>
    </div>
  )
}

export default FambaV