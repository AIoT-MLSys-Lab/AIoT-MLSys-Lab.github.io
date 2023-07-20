import React from 'react'
import ContentTitle from '../ContentTitle'
import './project.css'
import ProjectPanel from '../ProjectPanel'

function MobileHealth() {
  return (
    <div>
      <ContentTitle title = "Mobile Health" subtitle = "Research"></ContentTitle>
      <ProjectPanel 
      link = "./#/MobileHealth/MobileDeepPill"
      imageURL = "./images/projects/MobileDeepPill.svg"
      title = "MobileDeepPill: A Small-Footprint Mobile Deep Learning System for Recognizing Unconstrained Pill Images"
      content = "Correct identification of prescription pills based on their visual appearance is a key step required to assure patient safety and facilitate more effective patient care. With the availability of high-quality cameras and computational power on smartphones, it is possible and helpful to identify unknown prescription pills using smartphones. Towards this goal, in 2016, the U.S. National Library of Medicine (NLM) of the National Institutes of Health (NIH) announced a nationwide competition, calling for the creation of a mobile vision system that can recognize pills automatically from a mobile phone picture under unconstrained real-world settings. In this work, we present the design and evaluation of such mobile pill image recognition system called MobileDeepPill. The development of MobileDeepPill involves three key innovations: a triplet loss function which attains invariances to real-world noisiness that deteriorates the quality of pill images taken by mobile phones; a multi-CNNs model that collectively captures the shape, color and imprints characteristics of the pills; and a Knowledge Distillation-based deep model compression framework that significantly reduces the size of the multi-CNNs model without deteriorating its recognition performance. Our deep learning-based pill image recognition algorithm wins the First Prize (champion) of the NIH NLM Pill Image Recognition Challenge. Given its promising performance, we believe MobileDeepPill helps NIH tackle a critical problem with significant societal impact and will benefit millions of healthcare personnel and the general public."
      ></ProjectPanel>

      <ProjectPanel 
      link = "./#/MobileHealth/SharpEar"
      imageURL = "./images/projects/EdgeAI.png"
      title = "SharpEar: Real-Time Speech Enhancement in Noisy Environments "
      content = "Wi-Fi imaging has attracted significant interests due to the ubiquitous availability of Wi-Fi devices today. In this work, we present Wi-Fi See It All (WiSIA), a versatile Wi-Fi imaging system built upon commercial off-the-shelf (COTS) Wi-Fi devices, which is able to simultaneously detect objects and humans, segment their boundaries, and identify them within the image plane. To achieve this, WiSIA utilizes three techniques. First, instead of constructing the image plane at the receiver side using a high-cost antenna array and complex parameter estimation, WiSIA pushes the image plane to the object side with two pairs of transceivers and 2D-IFFT. Second, WiSIA extracts the specific physical signature of the signals reflected from multiple objects to segment their boundaries. Third, WiSIA incorporates a cGAN (conditional Generative Adversarial Network) to enhance the boundary of different objects. We have implemented WiSIA using COTS Wi-Fi devices and evaluated it using a rich set of experiments. Our results demonstrate the efficacy of WiSIA. It outperforms the state-of-the-art vision-based method in dark and occlusion scenarios, demonstrating its superiority in such challenge scenarios."
      ></ProjectPanel>

      <ProjectPanel 
      link = "./#/MobileHealth/DeepASL"
      imageURL = "./images/projects/DeepASL.svg"
      title = "DeepASL: Enabling Ubiquitous and Non-Intrusive Word and Sentence-Level Sign Language Translation"
      content = "There is an undeniable communication barrier between deaf people and people with normal hearing ability. Although innovations in sign language translation technology aim to tear down this communication barrier, the majority of existing sign language translation systems are either intrusive or constrained by resolution or ambient lighting conditions. Moreover, these existing systems can only perform single-sign ASL translation rather than sentence-level translation, making them much less useful in daily-life communication scenarios. In this work, we fill this critical gap by presenting DeepASL, a transformative deep learning-based sign language translation technology that enables ubiquitous and non-intrusive American Sign Language (ASL) translation at both word and sentence levels. DeepASL uses infrared light as its sensing mechanism to non-intrusively capture the ASL signs. It incorporates a novel hierarchical bidirectional deep recurrent neural network (HB-RNN) and a probabilistic framework based on Connectionist Temporal Classification (CTC) for word-level and sentence-level ASL translation respectively. To evaluate its performance, we have collected 7, 306 samples from 11 participants, covering 56 commonly used ASL words and 100 ASL sentences. DeepASL achieves an average 94.5% word-level translation accuracy and an average 8.2% word error rate on translating unseen ASL sentences. Given its promising performance, we believe DeepASL represents a significant step towards breaking the communication barrier between deaf people and hearing majority, and thus has the significant potential to fundamentally change deaf people's lives."
      ></ProjectPanel>

      <ProjectPanel 
      link = "./#/MobileHealth/MobilePhoneSensorCorrelatesofDepressiveSymptomSeverityinDailyLifeBehavior"
      imageURL = "./images/projects/EdgeAI.png"
      title = "Digital Mental Health"
      content = "Depression is a common, burdensome, often recurring mental health disorder that frequently goes undetected and untreated. Mobile phones are ubiquitous and have an increasingly large complement of sensors that can potentially be useful in monitoring behavioral patterns that might be indicative of depressive symptoms. The objective of this work was to explore the detection of daily-life behavioral markers using mobile phone global positioning systems (GPS) and usage sensors, and their use in identifying depressive symptom severity. Our evaluation results show that features extracted from mobile phone sensor data, including GPS and phone usage, provided behavioral markers that were strongly related to depressive symptom severity. While these findings must be replicated in a larger study among participants with confirmed clinical symptoms, they suggest that phone sensors offer numerous clinical opportunities, including continuous monitoring of at-risk populations with little patient burden and interventions that can provide just-in-time outreach."
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

export default MobileHealth