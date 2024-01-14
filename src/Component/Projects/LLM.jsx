import React from 'react'
import ContentTitle from '../ContentTitle'
import './project.css'
import ProjectPanel from '../ProjectPanel'

function LLM() {
  return (
    <div>
      <ContentTitle title = "Large Language Models and Generative AI" subtitle = "Research"></ContentTitle>
      <ProjectPanel 
      link = "./#/LLM/IoTinEraOfGAI"
      imageURL = "./images/projects/IoTinGAI.svg"
      title = "IoT in the Era of Generative AI: Vision and Challenges"
      content = "Equipped with sensing, networking, and computing capabilities, Internet of Things (IoT) such as smartphones, wearables, smart speakers, and household robots have been seamlessly weaved into our daily lives. Recent advancements in Generative AI exemplified by GPT, LLaMA, DALL-E, and Stable Difussion hold immense promise to push IoT to the next level. In this article, we share our vision and views on the benefits that Generative AI brings to IoT, and discuss some of the most important applications of Generative AI in IoT-related domains. Fully harnessing Generative AI in IoT is a complex challenge. We identify some of the most critical challenges including high resource demands of the Generative AI models, prompt engineering, on-device inference, offloading, on-device fine-tuning, federated learning, security, as well as development tools and benchmarks, and discuss current gaps as well as promising opportunities on enabling Generative AI for IoT. We hope this article can inspire new research on IoT in the era of Generative AI."
      ></ProjectPanel>

      <ProjectPanel 
      link = "./#/LLM/EfficientLLM"
      imageURL = "./images/projects/EfficientLLM.svg"
      title = "Efficient Large Language Models: A Survey"
      content = "Large Language Models (LLMs) have demonstrated remarkable capabilities in important tasks such as natural language understanding, language generation, and complex reasoning and have the potential to make a substantial impact on our society. Such capabilities, however, come with the considerable resources they demand, highlighting the strong need to develop effective techniques for addressing their efficiency challenges. In this survey, we provide a systematic and comprehensive review of efficient LLMs research. We organize the literature in a taxonomy consisting of three main categories, covering distinct yet interconnected efficient LLMs topics from model-centric, data-centric, and framework-centric perspective, respectively. We hope our survey can serve as a valuable resource to help researchers and practitioners gain a systematic understanding of the research developments in efficient LLMs and inspire them to contribute to this important and exciting field."
      ></ProjectPanel>

    </div>
    
  )
}

export default LLM