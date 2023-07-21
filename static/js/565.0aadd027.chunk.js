"use strict";(self.webpackChunklabwebsite=self.webpackChunklabwebsite||[]).push([[565],{4243:function(e,t,a){a.d(t,{Z:function(){return i}});a(2791);var r=a(184),i=function(e){var t=e.link,a=e.imageURL,i=e.title,n=e.content;return(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:t,className:"projectContainer",children:(0,r.jsxs)("div",{className:"projectPanel",children:[(0,r.jsx)("div",{className:"projectPanelTitle",children:i}),(0,r.jsxs)("div",{className:"projectFlex",children:[(0,r.jsx)("div",{className:"projectPanelImgContainer",children:(0,r.jsx)("img",{src:a,alt:"",className:"projectPanelImg"})}),(0,r.jsx)("div",{className:"projectPanelTextContainer",children:(0,r.jsx)("div",{className:"projectPanelContent",children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})})})]})]})})})}},2565:function(e,t,a){a.r(t);a(2791);var r=a(4676),i=(a(6822),a(4243)),n=a(184);t.default=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(r.Z,{title:"AutoML",subtitle:"Research"}),(0,n.jsx)(i.Z,{link:"./#/AutoML/DoesUnsupervisedArchitectureRepresentationLearningHelpNeuralArchitectureSearch",imageURL:"./images/projects/arch2vec.svg",title:"Does Unsupervised Architecture Representation Learning Help Neural Architecture Search?",content:"Existing Neural Architecture Search (NAS) methods either encode neural architectures using discrete encodings that do not scale well, or adopt supervised learning-based methods to jointly learn architecture representations and optimize architecture search on such representations which incurs search bias. Despite the widespread use, architecture representations learned in NAS are still poorly understood. We observe that the structural properties of neural architectures are hard to preserve in the latent space if architecture representation learning and search are coupled, resulting in less effective search performance. In this work, we find empirically that pre-training architecture representations using only neural architectures without their accuracies as labels improves the downstream architecture search efficiency. To explain this finding, we visualize how unsupervised architecture representation learning better encourages neural architectures with similar connections and operators to cluster together. This helps map neural architectures with similar performance to the same regions in the latent space and makes the transition of architectures in the latent space relatively smooth, which considerably benefits diverse downstream search strategies."}),(0,n.jsx)(i.Z,{link:"./#/AutoML/DeepAutoAugment",imageURL:"./images/projects/DeepAutoAugment.svg",title:"Deep AutoAugment",content:"While recent automated data augmentation methods lead to state-of-the-art results, their design spaces and the derived data augmentation strategies still incorporate strong human priors. In this work, instead of fixing a set of hand-picked default augmentations alongside the searched data augmentations, we propose a fully automated approach for data augmentation search named Deep AutoAugment (DeepAA). DeepAA progressively builds a multi-layer data augmentation pipeline from scratch by stacking augmentation layers one at a time until reaching convergence. For each augmentation layer, the policy is optimized to maximize the cosine similarity between the gradients of the original and augmented data along the direction with low variance. Our experiments show that even without default augmentations, we can learn an augmentation policy that achieves strong performance with that of previous works. Extensive ablation studies show that the regularized gradient matching is an effective search method for data augmentation policies."}),(0,n.jsx)(i.Z,{link:"./#/AutoML/CATE",imageURL:"./images/projects/CATE.svg",title:"CATE: Computation-aware Neural Architecture Encoding with Transformers",content:"Recent works demonstrate the importance of architecture encodings in Neural Architecture Search (NAS). These encodings encode either structure or computation information of the neural architectures. Compared to structure-aware encodings, computation-aware encodings map architectures with similar accuracies to the same region, which improves the downstream architecture search performance. In this work, we introduce a Computation-Aware Transformer-based Encoding method called CATE. Different from existing computation-aware encodings based on fixed transformation (e.g. path encoding), CATE employs a pairwise pre-training scheme to learn computation-aware encodings using Transformers with cross-attention. Such learned encodings contain dense and contextualized computation information of neural architectures. We compare CATE with eleven encodings under three major encoding-dependent NAS subroutines in both small and large search spaces. Our experiments show that CATE is beneficial to the downstream search, especially in the large search space. Moreover, the outside search space experiment demonstrates its superior generalization ability beyond the search space on which it was trained."})]})}},6822:function(){}}]);
//# sourceMappingURL=565.0aadd027.chunk.js.map