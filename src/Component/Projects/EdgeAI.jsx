import React from 'react'
import ContentTitle from '../ContentTitle'
import './project.css'
import ProjectPanel from '../ProjectPanel'

function EdgeAI() {
  return (
    <div>
      <ContentTitle title = "Edge AI" subtitle = "Research"></ContentTitle>
      <ProjectPanel 
      link = "./#/project/EdgeAI"
      imageURL = "./images/projects/EdgeAI.png"
      title = "NestDNN: Resource-Aware Multi-Tenant On-Device Deep Learning for Continuous Mobile Vision"
      content = "Mobile vision systems such as smartphones, drones, and augmented-reality headsets are revolutionizing our lives. These systems usually run multiple applications concurrently and their available resources at runtime are dynamic due to events such as starting new applications, closing existing applications, and application priority changes. In this work, we present NestDNN, a framework that takes the dynamics of runtime resources into account to enable resource-aware multi-tenant on-device deep learning for mobile vision systems. NestDNN enables each deep learning model to offer flexible resource-accuracy trade-offs. At runtime, it dynamically selects the optimal resource-accuracy trade-off for each deep learning model to fit the model's resource demand to the system's available runtime resources. In doing so, NestDNN efficiently utilizes the limited resources in mobile vision systems to jointly maximize the performance of all the concurrently running applications. Our experiments show that compared to the resource-agnostic status quo approach, NestDNN achieves as much as 4.2% increase in inference accuracy, 2.0× increase in video frame processing rate and 1.7× reduction on energy consumption."
      ></ProjectPanel>

      <ProjectPanel 
      imageURL = "./images/projects/EdgeAI.png"
      title = "FlexDNN: Input-Adaptive On-Device Deep Learning for Efficient Mobile Vision"
      content = "Mobile vision systems powered by the recent advancement in Deep Neural Networks (DNNs) are enabling a wide range of on-device video analytics applications. Considering mobile systems are constrained with limited resources, reducing resource demands of DNNs is crucial to realizing the full potential of these applications. In this work, we present FlexDNN, an input-adaptive DNN-based framework for efficient on-device video analytics. To achieve this, FlexDNN takes the intrinsic dynamics of mobile videos into consideration, and dynamically adapts its model complexity to the difficulty levels of input video frames to achieve computation efficiency. FlexDNN addresses the key drawbacks of existing systems and pushes the state-of-the-art forward. We use FlexDNN to build three representative on-device video analytics applications, and evaluate its performance on both mobile CPU and GPU platforms. Our results show that FlexDNN significantly outperforms status quo approaches in accuracy, average CPU/GPU processing time per frame, frame drop rate, and energy consumption."
      ></ProjectPanel>

      <ProjectPanel 
      imageURL = "./images/projects/EdgeAI.png"
      title = "Mercury: Efficient On-Device Distributed DNN Training via Stochastic Importance Sampling"
      content = "As intelligence is moving from data centers to the edges, intelligent edge devices such as smartphones, drones, robots, and smart IoT devices are equipped with the capability to altogether train a deep learning model on the devices from the data collected by themselves. Despite its considerable value, the key bottleneck of making on-device distributed training practically useful in real-world deployments is that they consume a significant amount of training time under wireless networks with constrained bandwidth. To tackle this critical bottleneck, we present Mercury, an importance sampling-based framework that enhances the training efficiency of on-device distributed training without compromising the accuracies of the trained models. The key idea behind the design of Mercury is to focus on samples that provide more important information in each training iteration. In doing this, the training efficiency of each iteration is improved. As such, the total number of iterations can be considerably reduced so as to speed up the overall training process. We implemented Mercury and deployed it on a self-developed testbed. We demonstrate its effectiveness and show that Mercury consistently outperforms two status quo frameworks on six commonly used datasets across tasks in image classification, speech recognition, and natural language processing."
      ></ProjectPanel>

      <ProjectPanel 
      imageURL = "./images/projects/EdgeAI.png"
      title = "Distream: Scaling Live Video Analytics with Workload-Adaptive Distributed Edge Intelligence"
      content = "Video cameras have been deployed at scale today. Driven by the breakthrough in deep learning (DL), organizations that have deployed these cameras start to use DL-based techniques for live video analytics. Although existing systems aim to optimize live video analytics from a variety of perspectives, they are agnostic to the workload dynamics in real-world deployments. In this work, we present Distream, a distributed live video analytics system based on the smart camera-edge cluster architecture, that is able to adapt to the workload dynamics to achieve low-latency, high-throughput, and scalable live video analytics. The key behind the design of Distream is to adaptively balance the workloads across smart cameras and partition the workloads between cameras and the edge cluster. In doing so, Distream is able to fully utilize the compute resources at both ends to achieve optimized system performance. We evaluated Distream with 500 hours of distributed video streams from two real-world video datasets with a testbed that consists of 24 cameras and a 4-GPU edge cluster. Our results show that Distream consistently outperforms the status quo in terms of throughput, latency, and latency service level objective (SLO) miss rate."
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

export default EdgeAI