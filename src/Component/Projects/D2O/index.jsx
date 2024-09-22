import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'


function D2O() {
  return (
    <div className='project_container'>
        <div className='project_title'>
        D2O: Dynamic Discriminative Operations for Efficient Generative Inference of Large Language Models
        </div>

        <div className='project_conference'>
        arXiv:2406.13035
        </div>
        <div className='project_members'>
        Zhongwei Wan, Xinjian Wu, Yu Zhang, Yi Xin, Chaofan Tao, Zhihong Zhu, Xin Wang, Siqi Luo, Jing Xiong, Mi Zhang.
        </div>
        <div className='project_buttons'>
            <a href="https://arxiv.org/abs/2406.13035" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

        </div>
        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/D2O_in.png" alt=""  className='project_collection_img'/>
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            Efficient inference in Large Language Models (LLMs) is impeded by the growing memory demands of key-value (KV) caching, especially for longer sequences. Traditional KV cache eviction strategies, which prioritize less critical KV-pairs based on attention scores, often degrade generation quality, leading to issues such as context loss or hallucinations. To address this, we introduce Dynamic Discriminative Operations (D2O), a novel method that utilizes two-level discriminative strategies to optimize KV cache size without fine-tuning, while preserving essential context. Initially, by observing varying densities of attention weights between shallow and deep layers, we use this insight to determine which layers should avoid excessive eviction to minimize information loss. Subsequently, for the eviction strategy in each layer, D2O innovatively incorporates a compensation mechanism that maintains a similarity threshold to re-discriminate the importance of previously discarded tokens, determining whether they should be recalled and merged with similar tokens. Our approach not only achieves significant memory savings and enhances inference throughput by more than 3 times but also maintains high-quality long-text generation. Extensive experiments across various benchmarks and LLM architectures have demonstrated that D2O significantly enhances performance with a constrained KV cache budget.

            </div>
        </div>
    </div>
  )
}

export default D2O