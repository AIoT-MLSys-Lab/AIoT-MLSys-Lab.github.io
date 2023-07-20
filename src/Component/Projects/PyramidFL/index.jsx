import React from 'react'
import './project.css'
import Collection from '../../Collection'
import PopModal from '../PopModal'

function PyramidFL() {
  return (
    <div className='project_container'>
        <div className='project_title'>
        PyramidFL: A Fine-grained Client Selection Framework for Efficient Federated Learning
        </div>

        <div className='project_conference'>
        MobiCom'22
        </div>
        <div className='project_members'>
        Chenning Li, Xiao Zeng, Mi Zhang, and Zhichao Cao.
        </div>
        <div className='project_buttons'>
            <a href="https://mi-zhang.github.io/papers/2022_MobiCom_PyramidFL.pdf" className='project_button'>
                <svg t="1687728426228" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="16" height="16"><path d="M213.34016 0l597.34016 0q53.00224 0 90.50112 37.49888t37.49888 90.50112l0 768q0 53.00224-37.49888 90.50112t-90.50112 37.49888l-597.34016 0q-53.00224 0-90.50112-37.49888t-37.49888-90.50112l0-768q0-53.00224 37.49888-90.50112t90.50112-37.49888zM341.34016 725.34016l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 554.65984l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM810.65984 85.34016l-597.34016 0q-17.67424 0-30.16704 12.4928t-12.4928 30.16704l0 768q0 17.67424 12.4928 30.16704t30.16704 12.4928l597.34016 0q17.67424 0 30.16704-12.4928t12.4928-30.16704l0-768q0-17.67424-12.4928-30.16704t-30.16704-12.4928zM341.34016 384l341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928zM341.34016 213.34016l170.65984 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-170.65984 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928z" fill="#ffffff" p-id="2400"></path></svg>
                &nbsp;Paper
            </a>

            <PopModal inproceeding = {`@inproceedings{pyramidfl2022mobicom,`}
                title = {`title = {{PyramidFL: A Fine-grained Client Selection Framework for Efficient Federated Learning}},`}
                author = {`author = {Li, Chenning and Zeng, Xiao and Zhang, Mi and Cao, Zhichao},`}
                booktitle = {`booktitle = {ACM International Conference on Mobile Computing and Networking (MobiCom)},`}
                year = {`year = {2022}`}
            />
        </div>
        
        <div className='project_collection'>
            <div>
                <img src="./images/projects/PyramidFL_in.svg" alt=""  className='project_collection_img'/>
            </div>
        </div>

        <div className='project_abstract'>
            <div className='project_abstract_title'>
                Abstract
            </div>
            <div className='project_abstract_content'>
            Federated learning (FL) is an emerging distributed machine learning (ML) paradigm with enhanced privacy, aiming to achieve a “good" ML model for as many as participants while consuming as little as wall clock time. By executing across thousands or even millions of clients, FL demonstrates heterogeneous statistical characteristics and system divergence widely across participants, making its training suffer when adopting the traditional ML paradigm. The root cause of the training efficiency degradation is the random client selection criteria. Although existing FL paradigms propose several optimization schemes for client selection, they are still coarse-grained due to their under-exploitation on the clients’ data and system heterogeneity, yielding sub-optimal performance for a variety of FL applications. In this paper, we propose PyramidFL1 to speed up the FL training while achieving a higher final model performance (i.e., time-to-accuracy). The core of PyramidFL is a fine-grained client selection, in which PyramidFL does not only focus on the divergence of those selected participants and nonselected ones for client selection but also fully exploits the data and system heterogeneity within selected clients to profile their utility more efficiently. Specifically, PyramidFL first determines the utilitybased client selection from the global (i.e., server) view and then optimizes its utility profiling locally (i.e., client) for further client selection. In this way, we can prioritize the use of those clients with higher statistical and system utility consistently. In comparison with the state-of-the-art (i.e., Oort), our evaluation on the opensource FL benchmark shows that PyramidFL improves the final model accuracy by 3.68% − 7.33%, with a speedup of 2.71 × −13.66× on the wall clock time consumption.
            </div>
        </div>
    </div>
  )
}

export default PyramidFL