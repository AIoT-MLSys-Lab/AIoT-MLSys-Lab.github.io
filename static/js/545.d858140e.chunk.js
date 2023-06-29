"use strict";(self.webpackChunklabwebsite=self.webpackChunklabwebsite||[]).push([[545],{4243:function(e,t,i){i.d(t,{Z:function(){return a}});i(2791);var n=i(184),a=function(e){var t=e.link,i=e.imageURL,a=e.title,o=e.content;return(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:t,className:"projectContainer",children:(0,n.jsxs)("div",{className:"projectPanel",children:[(0,n.jsx)("div",{className:"projectPanelTitle",children:a}),(0,n.jsx)("div",{className:"projectPanelImgContainer",children:(0,n.jsx)("img",{src:i,alt:"",className:"projectPanelImg"})}),(0,n.jsx)("div",{className:"projectPanelTextContainer",children:(0,n.jsx)("div",{className:"projectPanelContent",children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:o}})})})]})})})}},5545:function(e,t,i){i.r(t);i(2791);var n=i(4676),a=(i(6822),i(4243)),o=i(184);t.default=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(n.Z,{title:"Federated Learning and Systems",subtitle:"Research"}),(0,o.jsx)(a.Z,{link:"./#/FederatedLearningandSystems/GPT-FL",imageURL:"./images/projects/EdgeAI.png",title:"GPT-FL: Generative Pre-trained Model-Assisted Federated Learning",content:"In this work, we propose GPT-FL, a generative pre-trained model-assisted federated learning (FL) framework. At its core, GPT-FL leverages generative pre-trained models to generate diversified synthetic data. These generated data are used to train a downstream model on the server, which is then fine-tuned with private client data under the standard FL framework. We show that GPT-FL consistently outperforms state-of-the-art FL methods in terms of model test accuracy, communication efficiency, and client sampling efficiency. Through comprehensive ablation analysis, we discover that the downstream model generated by synthetic data plays a crucial role in controlling the direction of gradient diversity during FL training, which enhances convergence speed and contributes to the notable accuracy boost observed with GPT-FL. Also, regardless of whether the target data falls within or outside the domain of the pre-trained generative model, GPT-FL consistently achieves significant performance gains, surpassing the results obtained by models trained solely with FL or synthetic data."}),(0,o.jsx)(a.Z,{link:"./#/FederatedLearningandSystems/FedRolex",imageURL:"./images/projects/EdgeAI.png",title:"FedRolex: Model-Heterogeneous Federated Learning with Rolling Sub-Model Extraction",content:"Most cross-device federated learning (FL) studies focus on the model-homogeneous setting where the global server model and local client models are identical. However, such constraint not only excludes low-end clients who would otherwise make unique contributions to model training but also restrains clients from training large models due to on-device resource bottlenecks. In this work, we propose FedRolex, a partial training (PT)-based approach that enables model-heterogeneous FL and can train a global server model larger than the largest client model. At its core, FedRolex employs a rolling sub-model extraction scheme that allows different parts of the global server model to be evenly trained, which mitigates the client drift induced by the inconsistency between individual client models and server model architectures. We show that FedRolex outperforms state-of-the-art PT-based model-heterogeneous FL methods (e.g. Federated Dropout) and reduces the gap between model-heterogeneous and model-homogeneous FL, especially under the large-model large-dataset regime. In addition, we provide theoretical statistical analysis on its advantage over Federated Dropout and evaluate FedRolex on an emulated real-world device distribution to show that FedRolex can enhance the inclusiveness of FL and boost the performance of low-end devices that would otherwise not benefit from FL."}),(0,o.jsx)(a.Z,{link:"./#/FederatedLearningandSystems/PyramidFL",imageURL:"./images/projects/EdgeAI.png",title:"PyramidFL: A Fine-grained Client Selection Framework for Efficient Federated Learning",content:"Federated learning (FL) is an emerging distributed machine learning (ML) paradigm with enhanced privacy, aiming to achieve a good ML model for as many as participants while consuming as little as wall clock time. By executing across thousands or even millions of clients, FL demonstrates heterogeneous statistical characteristics and system divergence widely across participants, making its training suffer when adopting the traditional ML paradigm. The root cause of the training efficiency degradation is the random client selection criteria. Although existing FL paradigms propose several optimization schemes for client selection, they are still coarse-grained due to their under-exploitation on the clients' data and system heterogeneity, yielding sub-optimal performance for a variety of FL applications. In this work, we propose PyramidFL to speed up the FL training while achieving a higher final model performance (i.e., time-to-accuracy). The core of PyramidFL is a fine-grained client selection, in which PyramidFL does not only focus on the divergence of those selected participants and non-selected ones for client selection but also fully exploits the data and system heterogeneity within selected clients to profile their utility more efficiently. Specifically, PyramidFL first determines the utility-based client selection from the global (i.e., server) view and then optimizes its utility profiling locally (i.e., client) for further client selection. In this way, we can prioritize the use of those clients with higher statistical and system utility consistently. In comparison with the state-of-the-art (i.e., Oort), our evaluation on the open-source FL benchmark shows that PyramidFL improves the final model accuracy by 3.68% -- 7.33%, with a speedup of 2.71 x -- 13.66X on the wall clock time consumption."})]})}},6822:function(){}}]);
//# sourceMappingURL=545.d858140e.chunk.js.map