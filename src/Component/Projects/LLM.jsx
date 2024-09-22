import React from 'react'
import ContentTitle from '../ContentTitle'
import './project.css'
import ProjectPanel from '../ProjectPanel'

function LLM() {
  return (
    <div>
      <ContentTitle title = "Large Language Models and Generative AI" subtitle = "Research"></ContentTitle>

      <ProjectPanel 
      link = "./#/LLM/EfficientLLM"
      imageURL = "./images/projects/EfficientLLM.svg"
      title = "Efficient Large Language Models: A Survey"
      content = "Large Language Models (LLMs) have demonstrated remarkable capabilities in important tasks such as natural language understanding, language generation, and complex reasoning and have the potential to make a substantial impact on our society. Such capabilities, however, come with the considerable resources they demand, highlighting the strong need to develop effective techniques for addressing their efficiency challenges. In this survey, we provide a systematic and comprehensive review of efficient LLMs research. We organize the literature in a taxonomy consisting of three main categories, covering distinct yet interconnected efficient LLMs topics from model-centric, data-centric, and framework-centric perspective, respectively. We hope our survey can serve as a valuable resource to help researchers and practitioners gain a systematic understanding of the research developments in efficient LLMs and inspire them to contribute to this important and exciting field."
      ></ProjectPanel>

      <ProjectPanel 
      link = "./#/LLM/SVDLLM"
      imageURL = "./images/projects/SVDLLMLogo.png"
      title = "SVD-LLM: Truncation-aware Singular Value Decomposition for Large Language Model Compression"
      content = "The advancements in Large Language Models (LLMs) have been hindered by their substantial sizes, which necessitate LLM compression methods for practical deployment. Singular Value Decomposition (SVD) offers a promising solution for LLM compression. However, state-of-the-art SVD-based LLM compression methods have two key limitations: truncating smaller singular values may lead to higher compression loss, and the lack of update on the compressed weight after SVD truncation. In this work, we propose SVD-LLM, a new SVD-based LLM compression method that addresses the limitations of existing methods. SVD-LLM incorporates a truncation-aware data whitening strategy to ensure a direct mapping between singular values and compression loss. Moreover, SVD-LLM adopts a layer-wise closed-form model parameter update strategy to compensate for accuracy degradation under high compression ratios. We evaluate SVD-LLM on a total of 10 datasets and eight models from three different LLM families at four different scales. Our results demonstrate the superiority of SVD-LLM over state-of-the-arts, especially at high model compression ratios."
      ></ProjectPanel>

      <ProjectPanel
      link = "./#/LLM/D2O"
      imageURL = "./images/projects/D2O.svg"
      title = "D2O: Dynamic Discriminative Operations for Efficient Generative Inference of Large Language Models"
      content = "Efficient inference in Large Language Models (LLMs) is impeded by the growing memory demands of key-value (KV) caching, especially for longer sequences. Traditional KV cache eviction strategies, which prioritize less critical KV-pairs based on attention scores, often degrade generation quality, leading to issues such as context loss or hallucinations. To address this, we introduce Dynamic Discriminative Operations (D2O), a novel method that utilizes two-level discriminative strategies to optimize KV cache size without fine-tuning, while preserving essential context. Initially, by observing varying densities of attention weights between shallow and deep layers, we use this insight to determine which layers should avoid excessive eviction to minimize information loss. Subsequently, for the eviction strategy in each layer, D2O innovatively incorporates a compensation mechanism that maintains a similarity threshold to re-discriminate the importance of previously discarded tokens, determining whether they should be recalled and merged with similar tokens. Our approach not only achieves significant memory savings and enhances inference throughput by more than 3 times but also maintains high-quality long-text generation. Extensive experiments across various benchmarks and LLM architectures have demonstrated that D2O significantly enhances performance with a constrained KV cache budget."
      ></ProjectPanel>

      <ProjectPanel 
      link = "./#/LLM/FambaV"
      imageURL = "./images/projects/FambaVLogo.jpg"
      title = "Famba-V: Fast Vision Mamba with Cross-Layer Token Fusion"
      content = "Mamba and Vision Mamba (Vim) models have shown their potential as an alternative to methods based on Transformer architecture. This work introduces Fast Mamba for Vision (Famba-V), a cross-layer token fusion technique to enhance the training efficiency of Vim models. The key idea of Famba-V is to identify and fuse similar tokens across different Vim layers based on a suit of cross-layer strategies instead of simply applying token fusion uniformly across all the layers that existing works propose. We evaluate the performance of Famba-V on CIFAR-100. Our results show that Famba-V is able to enhance the training efficiency of Vim models by reducing both training time and peak memory usage during training. Moreover, the proposed cross-layer strategies allow Famba-V to deliver superior accuracy-efficiency trade-offs. These results all together demonstrate Famba-V as a promising efficiency enhancement technique for Vim models."
      ></ProjectPanel>

    </div>
    
  )
}

export default LLM