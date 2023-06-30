"use strict";(self.webpackChunklabwebsite=self.webpackChunklabwebsite||[]).push([[827],{4243:function(e,a,i){i.d(a,{Z:function(){return n}});i(2791);var t=i(184),n=function(e){var a=e.link,i=e.imageURL,n=e.title,o=e.content;return(0,t.jsx)("div",{children:(0,t.jsx)("a",{href:a,className:"projectContainer",children:(0,t.jsxs)("div",{className:"projectPanel",children:[(0,t.jsx)("div",{className:"projectPanelTitle",children:n}),(0,t.jsxs)("div",{className:"projectFlex",children:[(0,t.jsx)("div",{className:"projectPanelImgContainer",children:(0,t.jsx)("img",{src:i,alt:"",className:"projectPanelImg"})}),(0,t.jsx)("div",{className:"projectPanelTextContainer",children:(0,t.jsx)("div",{className:"projectPanelContent",children:(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:o}})})})]})]})})})}},6827:function(e,a,i){i.r(a);i(2791);var t=i(4676),n=(i(6822),i(4243)),o=i(184);a.default=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(t.Z,{title:"AI for Wireless Sensing and Networking",subtitle:"Research"}),(0,o.jsx)(n.Z,{link:"./#/AIforWirelessSensingandNetworking/NELoRa",imageURL:"./images/projects/EdgeAI.png",title:"NELoRa: Towards Ultra-low SNR LoRa Communication with Neural-enhanced Demodulation",content:"Low-Power Wide-Area Networks (LPWANs) are an emerging Internet-of-Things (IoT) paradigm marked by low-power and long-distance communication. Among them, LoRa is widely deployed for its unique characteristics and open-source technology. By adopting the Chirp Spread Spectrum (CSS) modulation, LoRa enables low signal-to-noise ratio (SNR) communication. However, the standard demodulation method does not fully exploit the properties of chirp signals, thus yields a sub-optimal SNR threshold under which the decoding fails. Consequently, the communication range and energy consumption have to be compromised for robust transmission. In this work, we present NELoRa, a neural-enhanced LoRa demodulation method, exploiting the feature abstraction ability of deep learning to support ultra-low SNR LoRa communication. Taking the spectrogram of both amplitude and phase as input, we first design a mask-enabled Deep Neural Network (DNN) filter that extracts multi-dimension features to capture clean chirp symbols. Second, we develop a spectrogram-based DNN decoder to decode these chirp symbols accurately. Finally, we propose a generic packet demodulation system by incorporating a method that generates high-quality chirp symbols from received signals. We implement and evaluate NELoRa on both indoor and campus-scale outdoor testbeds. The results show that NELoRa achieves 1.84-2.35 dB SNR gains and extends the battery life up to 272% (~0.38-1.51 years) in average for various LoRa configurations."}),(0,o.jsx)(n.Z,{link:"./#/AIforWirelessSensingandNetworking/WiFiSeeItAll",imageURL:"./images/projects/EdgeAI.png",title:"Wi-Fi See It All: Generative Adversarial Network-augmented Versatile Wi-Fi Imaging",content:"Wi-Fi imaging has attracted significant interests due to the ubiquitous availability of Wi-Fi devices today. In this work, we present Wi-Fi See It All (WiSIA), a versatile Wi-Fi imaging system built upon commercial off-the-shelf (COTS) Wi-Fi devices, which is able to simultaneously detect objects and humans, segment their boundaries, and identify them within the image plane. To achieve this, WiSIA utilizes three techniques. First, instead of constructing the image plane at the receiver side using a high-cost antenna array and complex parameter estimation, WiSIA pushes the image plane to the object side with two pairs of transceivers and 2D-IFFT. Second, WiSIA extracts the specific physical signature of the signals reflected from multiple objects to segment their boundaries. Third, WiSIA incorporates a cGAN (conditional Generative Adversarial Network) to enhance the boundary of different objects. We have implemented WiSIA using COTS Wi-Fi devices and evaluated it using a rich set of experiments. Our results demonstrate the efficacy of WiSIA. It outperforms the state-of-the-art vision-based method in dark and occlusion scenarios, demonstrating its superiority in such challenge scenarios."}),(0,o.jsx)(n.Z,{link:"./#/AIforWirelessSensingandNetworking/BodyScan",imageURL:"./images/projects/EdgeAI.png",title:"BodyScan: Enabling Radio-based Sensing on Wearable Devices for Contactless Activity and Vital Sign Monitoring",content:"Wearable devices are increasingly becoming mainstream consumer products carried by millions of consumers. However, the potential impact of these devices is currently constrained by fundamental limitations of their built-in sensors. In this paper, we introduce radio as a new powerful sensing modality for wearable devices and propose to transform radio into a mobile sensor of human activities and vital signs. We present BodyScan, a wearable system that enables radio to act as a single modality capable of providing whole-body continuous sensing of the user. BodyScan overcomes key limitations of existing wearable devices by providing a contactless and privacy-preserving approach to capturing a rich variety of human activities and vital sign information. Our prototype design of BodyScan is comprised of two components: one worn on the hip and the other worn on the wrist, and is inspired by the increasingly prevalent scenario where a user carries a smartphone while also wearing a wristband/smartwatch. This prototype can support daily usage with one single charge per day. Experimental results show that in controlled settings, BodyScan can recognize a diverse set of human activities while also estimating the user's breathing rate with high accuracy. Even in very challenging real-world settings, BodyScan can still infer activities with an average accuracy above 60% and monitor breathing rate information a reasonable amount of time during each day."}),(0,o.jsx)(n.Z,{link:"./#/AIforWirelessSensingandNetworking/HeadScan",imageURL:"./images/projects/EdgeAI.png",title:"HeadScan: A Wearable System for Radio-based Sensing of Head and Mouth-related Activities",content:"The popularity of wearables continues to rise. However, possible applications, and even their raw functionality are constrained by the types of sensors that are currently available. Accelerometers and gyroscopes struggle to capture complex user activities. Microphones and image sensors are more powerful but capture privacy sensitive information. Physiological sensors are obtrusive to users as they often require skin contact and must be placed at certain body positions to function. In contrast, radio-based sensing uses wireless radio signals to capture movements of different parts of the body, and therefore provides a contactless and privacy-preserving approach to detect and monitor human activities. In this work, we contribute to the search for new sensing modalities for the next generation of wearable devices by exploring the feasibility of mobile radio-based human activity recognition. We believe radio-based sensing has the potential to fundamentally transform wearables as we currently know them. As the first step to achieve our vision, we have designed and developed HeadScan, a first-of-its-kind wearable for radio-based sensing of a number of human activities that involve head and mouth movements. HeadScan only requires a pair of small antennas placed on the shoulder and collar and one wearable unit worn on the arm or the belt of the user. HeadScan uses the fine-grained CSI measurements extracted from radio signals and incorporates a novel signal processing pipeline that converts the raw CSI measurements into the targeted human activities. To examine the feasibility and performance of HeadScan, we have collected approximate 50.5 hours data from seven users. Our wide-ranging experiments include comparisons to a conventional skin-contact audio-based sensing approach to tracking the same set of head and mouth-related activities. Our experimental results highlight the enormous potential of our radio-based mobile sensing approach and provide guidance to future explorations."})]})}},6822:function(){}}]);
//# sourceMappingURL=827.a5b0fe03.chunk.js.map