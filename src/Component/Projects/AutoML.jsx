import React from 'react'
import ContentTitle from '../ContentTitle'
import './project.css'
import ProjectPanel from '../ProjectPanel'

function AutoML() {
  return (
    <div>
      <ContentTitle title = "AutoML" subtitle = "Research"></ContentTitle>
      <ProjectPanel 
      link = "./#/AutoML/DoesUnsupervisedArchitectureRepresentationLearningHelpNeuralArchitectureSearch"
      imageURL = "./images/projects/arch2vec.svg"
      title = "Does Unsupervised Architecture Representation Learning Help Neural Architecture Search?"
      content = "Existing Neural Architecture Search (NAS) methods either encode neural architectures using discrete encodings that do not scale well, or adopt supervised learning-based methods to jointly learn architecture representations and optimize architecture search on such representations which incurs search bias. Despite the widespread use, architecture representations learned in NAS are still poorly understood. We observe that the structural properties of neural architectures are hard to preserve in the latent space if architecture representation learning and search are coupled, resulting in less effective search performance. In this work, we find empirically that pre-training architecture representations using only neural architectures without their accuracies as labels improves the downstream architecture search efficiency. To explain this finding, we visualize how unsupervised architecture representation learning better encourages neural architectures with similar connections and operators to cluster together. This helps map neural architectures with similar performance to the same regions in the latent space and makes the transition of architectures in the latent space relatively smooth, which considerably benefits diverse downstream search strategies."
      ></ProjectPanel>

      <ProjectPanel 
      link = "./#/AutoML/DeepAutoAugment"
      imageURL = "./images/projects/DeepAutoAugment.svg"
      title = "Deep AutoAugment"
      content = "While recent automated data augmentation methods lead to state-of-the-art results, their design spaces and the derived data augmentation strategies still incorporate strong human priors. In this work, instead of fixing a set of hand-picked default augmentations alongside the searched data augmentations, we propose a fully automated approach for data augmentation search named Deep AutoAugment (DeepAA). DeepAA progressively builds a multi-layer data augmentation pipeline from scratch by stacking augmentation layers one at a time until reaching convergence. For each augmentation layer, the policy is optimized to maximize the cosine similarity between the gradients of the original and augmented data along the direction with low variance. Our experiments show that even without default augmentations, we can learn an augmentation policy that achieves strong performance with that of previous works. Extensive ablation studies show that the regularized gradient matching is an effective search method for data augmentation policies."
      ></ProjectPanel>

      <ProjectPanel 
      link = "./#/AutoML/CATE"
      imageURL = "./images/projects/CATE.svg"
      title = "CATE: Computation-aware Neural Architecture Encoding with Transformers"
      content = "Recent works demonstrate the importance of architecture encodings in Neural Architecture Search (NAS). These encodings encode either structure or computation information of the neural architectures. Compared to structure-aware encodings, computation-aware encodings map architectures with similar accuracies to the same region, which improves the downstream architecture search performance. In this work, we introduce a Computation-Aware Transformer-based Encoding method called CATE. Different from existing computation-aware encodings based on fixed transformation (e.g. path encoding), CATE employs a pairwise pre-training scheme to learn computation-aware encodings using Transformers with cross-attention. Such learned encodings contain dense and contextualized computation information of neural architectures. We compare CATE with eleven encodings under three major encoding-dependent NAS subroutines in both small and large search spaces. Our experiments show that CATE is beneficial to the downstream search, especially in the large search space. Moreover, the outside search space experiment demonstrates its superior generalization ability beyond the search space on which it was trained."
      ></ProjectPanel>

      {/* <div className='contentBG'>
        <a href="./#/project/project1">
          <div className='researchItem'>
            <img src="images/projects/EdgeAI.png" alt="" className='projectImg'></img>
            <div className='contentText'>
              <div className='itemTitle'>Project 1</div>
              <div className='redShortLineContent'></div>
              <div className='researchSummary'>
              The proliferation of edge devices such as mobile phones and Internet of Things as well as the gigantic amount of data they generate make it no longer feasible to transmit all the data to the cloud for processing. Such constraint fuels the d sustainability. Achieving such goal requires a combination of approaches. My work draws insights from a broad set of disciplines including mobile & embedded systems, AI/machine learning, wireless networking, distributed systems, and human-centered computing.
              </div>
            </div>
            
          </div>
        </a>

        <a href="">
          <div className='researchItem'>
          <img src="images/projects/EdgeAI.png" alt="" className='projectImg'></img>
            <div className='contentText'>
              <div className='itemTitle'>Project Name</div>
              <div className='redShortLineContent'></div>
              <div className='researchSummary'>
              The proliferation of edge devices such as mobile phones and Internet of Things as well as the gigantic amount of data they generate make it no longer feasible to transmit all the data to the cloud for processing. Such constraint fuels the d sustainability. Achieving such goal requires a combination of approaches. My work draws insights from a broad set of disciplines including mobile & embedded systems, AI/machine learning, wireless networking, distributed systems, and human-centered computing.
              </div>
            </div>
          </div>
        </a>

        <a href="">
          <div className='researchItem'>
          <img src="images/projects/EdgeAI.png" alt="" className='projectImg'></img>
            <div className='contentText'>
              <div className='itemTitle'>Project Name</div>
              <div className='redShortLineContent'></div>
              <div className='researchSummary'>
              The proliferation of edge devices such as mobile phones and Internet of Things as well as the gigantic amount of data they generate make it no longer feasible to transmit all the data to the cloud for processing. Such constraint fuels the d sustainability. Achieving such goal requires a combination of approaches. My work draws insights from a broad set of disciplines including mobile & embedded systems, AI/machine learning, wireless networking, distributed systems, and human-centered computing.
              </div>
            </div>
          </div>
        </a>


      </div> */}
    </div>
    
  )
}

export default AutoML