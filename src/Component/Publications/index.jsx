import { React, useState } from 'react'
import './publications.css'
import ContentTitle from '../ContentTitle'
import CodeBlock from '../CodeBlock'


function Publications() {

  const FedAudio = `@inproceedings{fedaudio2023icassp,
    title = {{FedAudio: A Federated Learning Benchmark for Audio Tasks}},
    author = {Tuo, Zhang and Feng, Tiantian and Alam, Samiul and Lee, Sunwoo and Zhang, Mi and Narayanan, Shrikanth and Avestimehr, Salman},
    booktitle = {IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
    year = {2023}
}`;

  const FedRolex = `@inproceedings{fedrolex2022neurips,
    title={{FedRolex: Model-Heterogeneous Federated Learning with Rolling Sub-Model Extraction}},
    author={Alam, Samiul and Liu, Luyang and Yan, Ming and Zhang, Mi},
    booktitle={Conference on Neural Information Processing Systems (NeurIPS)},
    year={2022}
}`;

  const PyramidFL = `@inproceedings{pyramidfl2022mobicom,
    title = {{PyramidFL: A Fine-grained Client Selection Framework for Efficient Federated Learning}}, 
    author = {Li, Chenning and Zeng, Xiao and Zhang, Mi and Cao, Zhichao},
    booktitle = {ACM International Conference on Mobile Computing and Networking (MobiCom)},
    year = {2022}
}`

  const FedSEA = `@inproceedings{fedsea2022sensys,
    title={{FedSEA: A Semi-Asynchronous Federated Learning Framework for Extremely Heterogeneous Devices}},
    author={Sun, Jingwei and Li, Ang and Duan, Lin and Alam, Samiul and Deng, Xuliang and Guo, Xin and Wang, Haiming and Gorlatova, Maria and Zhang, Mi and Hai, Li and Chen, Yiran},
    booktitle={ACM Conference on Embedded Networked Sensor Systems (SenSys)},
    year={2022}
}`

  const FedTune = `@inproceedings{fedtune2022milcom,
    title = {{FedTune: Automatic Tuning of Federated Learning Hyper-Parameters from System Perspective}}, 
    author = {Zhang, Huanle and Zhang, Mi and Liu, Xin and Mohapatra, Prasant and Delucia, Michael},
    booktitle = {IEEE Military Communications Conference (MilCom)},
    year = {2022}
}`

  const FLIT = `@article{fliotvision2022ieeeiotm,
    title = {Federated Learning for Internet of Things: Applications, Challenges, and Opportunities},
    author = {Zhang, Tuo and Gao, Lei and He, Chaoyang and Zhang, Mi and Krishnamachari, Bhaskar and Avestimehr, Salman},
    journal = {IEEE Internet of Things Magazine (IEEE IoTM)},
    year = {2022}
}`

  const DeepAutoAugment = `@inproceedings{deepaa2022iclr,
    title = {{Deep AutoAugment}},
    author = {Zheng, Yu and Zhang, Zhi and Yan, Shen and Zhang, Mi},
    booktitle = {International Conference on Learning Representations (ICLR)},
    year = {2022}
}`

  const MTVR = `@inproceedings{mtv2022cvpr,
    title = {{Multiview Transformers for Video Recognition}},
    author = {Yan, Shen and Xiong, Xuehan and Arnab, Anurag and Lu, Zhichao and Zhang, Mi and Sun, Chen and Schmid, Cordelia},
    booktitle = {IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    year = {2022}
}`

  const FOGuide = `@misc{wang2021field,
    title={A Field Guide to Federated Optimization},
    author={Jianyu Wang and Zachary Charles and Zheng Xu and Gauri Joshi and H. Brendan McMahan and Blaise Aguera y Arcas and Maruan Al-Shedivat and Galen Andrew and Salman Avestimehr and Katharine Daly and Deepesh Data and Suhas Diggavi and Hubert Eichner and Advait Gadhikar and Zachary Garrett and Antonious M. Girgis and Filip Hanzely and Andrew Hard and Chaoyang He and Samuel Horvath and Zhouyuan Huo and Alex Ingerman and Martin Jaggi and Tara Javidi and Peter Kairouz and Satyen Kale and Sai Praneeth Karimireddy and Jakub Konecny and Sanmi Koyejo and Tian Li and Luyang Liu and Mehryar Mohri and Hang Qi and Sashank J. Reddi and Peter Richtarik and Karan Singhal and Virginia Smith and Mahdi Soltanolkotabi and Weikang Song and Ananda Theertha Suresh and Sebastian U. Stich and Ameet Talwalkar and Hongyi Wang and Blake Woodworth and Shanshan Wu and Felix X. Yu and Honglin Yuan and Manzil Zaheer and Mi Zhang and Tong Zhang and Chunxiang Zheng and Chen Zhu and Wennan Zhu},
    year={2021},
    eprint={2107.06917},
    archivePrefix={arXiv},
    primaryClass={cs.LG}
}`

  const Mercury = `@inproceedings{mercury2021sensys,
    title={{Mercury: Efficient On-Device Distributed DNN Training via Stochastic Importance Sampling}},
    author={Zeng, Xiao and Yan, Ming and Zhang, Mi},
    booktitle={ACM Conference on Embedded Networked Sensor Systems (SenSys)},
    year={2021}
}`

  const FedMask = `@inproceedings{fedmask2021sensys,
    title={{FedMask: Joint Computation and Communication-Efficient Personalized Federated Learning via Heterogeneous Masking}},
    author={Li, Ang and Sun, Jingwei and Zeng, Xiao and Zhang, Mi and Li, Hai and Chen, Yiran},
    booktitle={ACM Conference on Embedded Networked Sensor Systems (SenSys)},
    year={2021}
}`

  const NELoRa = `@inproceedings{nelora2021sensys,
    title={{NELoRa: Towards Ultra-low SNR LoRa Communication with Neural-enhanced Demodulation}},
    author={Li, Chenning and Guo, Hanqing and Tong, Shuai and Zeng, Xiao and Cao, Zhichao and Zhang, Mi and Yan, Qiben and Xiao, Li and Wang, Jiliang and Liu, Yunhao},
    booktitle={ACM Conference on Embedded Networked Sensor Systems (SenSys)},
    year={2021}
}`

  const DeepLoRa = `@inproceedings{deeplora2021infocom,
    title = {{DeepLoRa: Learning Accurate Path Loss Model for Long Distance Links in LPWAN}}, 
    author = {Li, Liu and Yao, Yuguang and  Cao, Zhichao and Zhang, Mi},
    booktitle = {IEEE International Conference on Computer Communications (INFOCOM)},
    year = {2021} 
}`

  const CATE = `@inproceedings{cate2021icml,
    title={{CATE: Computation-aware Neural Architecture Encoding with Transformers}},
    author={Yan, Shen and Song, Kaiqiang and Liu, Fei and Zhang, Mi},
    booktitle={International Conference on Machine Learning (ICML)},
    year={2021}
}`

  const PIS = `@article{pis2021ubicomp,
    author = {Gao, Ruiyang and Zhang, Mi and Zhang, Jie and Li, Yang and Yi, Enze and Wu, Dan and Wang, Leye and Zhang, Daqing}},
    title = {{Towards Position-Independent Sensing for Gesture Recognition with Wi-Fi}},
    year = {2021},
    volume = {5},
    number = {2},
    pages={1--28},
    journal = {Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies}
}`

  const arch2vec = `@inproceedings{arch2vec2020neurips,
    title={{Does Unsupervised Architecture Representation Learning Help Neural Architecture Search?}},
    author={Yan, Shen and Zheng, Yu and Ao, Wei and Zeng, Xiao and Zhang, Mi},
    booktitle={Conference on Neural Information Processing Systems (NeurIPS)},
    year={2020}
}`

  const FedML = `@inproceedings{fedml2020neurips-fl,
    title={{FedML: A Research Library and Benchmark for Federated Machine Learning}},
    author={Chaoyang He and Songze Li and Jinhyun So and Xiao Zeng and Mi Zhang and Hongyi Wang and Xiaoyang Wang and Praneeth Vepakomma and Abhishek Singh and Hang Qiu and Xinghua Zhu and Jianzong Wang and Li Shen and Peilin Zhao and Yan Kang and Yang Liu and Ramesh Raskar and Qiang Yang and Murali Annavaram and Salman Avestimehr},
    booktitle={Conference on Neural Information Processing Systems (NeurIPS) Federated Learning Workshop},
    year={2020}
}`

  const MutualNet = `@inproceedings{mutualnet2020eccv,
    title = {{MutualNet: Adaptive ConvNet via Mutual Learning from Network Width and Resolution}}, 
    author = {Yang, Taojiannan and Zhu, Sijie and Chen, Chen  and Yan, Shen  and Zhang, Mi and Willis, Andrew},
    booktitle = {European Conference on Computer Vision (ECCV)},
    year = {2020} 
}`

  const FlexDNN = `@inproceedings{flexdnn2020sec,
    title={{FlexDNN: Input-Adaptive On-Device Deep Learning for Efficient Mobile Vision}},
    author={Fang, Biyi and Zeng, Xiao and Zhang, Faen and Xu, Hui and Zhang, Mi},
    booktitle={ACM/IEEE Symposium on Edge Computing (SEC)},
    year={2020}
}`

  const Distream = `@inproceedings{distream2020sensys,
    title={{Distream: Scaling Live Video Analytics with Workload-Adaptive Distributed Edge Intelligence}},
    author={Zeng, Xiao and Fang, Biyi and Shen, Haichen and Zhang, Mi},
    booktitle={ACM Conference on Embedded Networked Sensor Systems (SenSys)},
    year={2020}
}`

  const WiSIA = `@inproceedings{wisia2020sensys,
    title={{Wi-Fi See It All: Generative Adversarial Network-augmented Versatile Wi-Fi Imaging},
    author={Li, Chenning and Liu, Zheng and Yao, Yuguang and Cao, Zhichao and Zhang, Mi and Liu, Yunhao},
    booktitle={ACM Conference on Embedded Networked Sensor Systems (SenSys)},
    year={2020}
}`

  const SecWIR = `@inproceedings{secwir2020mobisys,
    title = {{SecWIR: Securing Smart Home IoT Communications via Wi-Fi Routers with Embedded Intelligence}},
    author={Lei, Xinyu and Tu, Guan-Hua and Li, Chi-Yu and Xie, Tian and Zhang, Mi},
    booktitle={ACM International Conference on Mobile Systems, Applications, and Services (MobiSys)},
    year={2020}
}`

  const Scylla = `@inproceedings{scylla2020infocom,
    title = {{SCYLLA: QoE-aware Continuous Mobile Vision with FPGA-based Dynamic Deep Neural Network Reconfiguration}}, 
    author = {Jiang, Shuang and  Ma, Zhiyao and  Zeng, Xiao and  Xu, Chenren and Zhang, Mi and  Zhang, Chen and  Liu, Yunxin},
    booktitle = {IEEE International Conference on Computer Communications (INFOCOM)},
    year = {2020} 
}`

  const DLEdge = `@inproceedings{dledge2020bookchapter,
    title={{Deep Learning in the Era of Edge Computing: Challenges and Opportunities}},
    author={Zhang, Mi and Zhang, Faen and Lane, Nicholas and Shu, Yuanchao and Zeng, Xiao and Fang, Biyi and Yan, Shen and Xu, Hui},
    booktitle={Book chapter in Fog Computing: Theory and Practice, Wiley},
    year={2020}
}`

  const HMNAS = `@inproceedings{yan2019hm,
    title={HM-NAS: Efficient Neural Architecture Search via Hierarchical Masking},
    author={Yan, Shen and Fang, Biyi and Zhang, Faen and Zheng, Yu and Zeng, Xiao and Xu, Hui and Zhang, Mi},
    booktitle={Proceedings of the IEEE International Conference on Computer Vision Workshops},
    year={2019}
}`

  const MobileSensing = `@article{2019getmobile,
    title = {Mobile Sensing of Alertness, Sleep, and Circadian Rhythm: Hardware and Software Platforms},
    author = {Sano, Akane and Rahman, Tauhidur and Zhang, Mi and Ganesan, Deepak and Choudhury, Tanzeem},
    journal = {ACM GetMobile: Mobile Computing and Communications Review},
    volume = {23},
    number = {3},
    year = {2019}
}`

  const NestDNN = `@inproceedings{fangzeng2018nestdnn,
    title = {{NestDNN: Resource-Aware Multi-Tenant On-Device Deep Learning for Continuous Mobile Vision}}, 
    author = {Fang, Biyi and Zeng, Xiao and Zhang, Mi},
    booktitle = {Proceedings of the 24th Annual International Conference on Mobile Computing and Networking (MobiCom)},
    year = {2018},
    pages = {115--127},
    numpages = {13},
    address = {New Delhi, India} 
}`

  const WiFiCalling = `@inproceedings{xie2018wificalling,
    title = {{The Dark Side of Operational Wi-Fi Calling Services}}, 
    author = {Xie, Tian and Tu, Guan-Hua and Li, Chi-Yu and Peng, Chunyi and Li, Jiawei and Zhang, Mi},
    booktitle = {Proceedings of 2018 IEEE Conference on Communications and Network Security (CNS)},
    year = {2018}
}`

  const JARVIS = `@article{rabbi2018jarvis,
    title = {When Virtual Reality Meets Internet of Things in the Gym: Enabling Immersive Interactive Machine Exercises},
    author = {Rabbi, Fazlay and Park, Taiwoo and Fang, Biyi and Zhang, Mi and Lee, Youngki},
    journal = {Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)},
    issue_date = {June 2018},
    volume = {2},
    number = {2},
    pages = {78:1--78:21},
    articleno = {78},
    numpages = {21},
    year = {2018}
}`

  const UbiquitousMR = `@article{park2018ubiquitousmr,
    title = {When Mixed Reality Meets Internet of Things: Toward the Realization of Ubiquitous Mixed Reality},
    author = {Park, Taiwoo and Zhang, Mi and Lee, Youngki},
    journal = {ACM GetMobile: Mobile Computing and Communications Review},
    volume = {22},
    number = {1},
    year = {2018}
}`

  const iSeeNeed = `@article{meng2018userneeds,
    title = {Exploring User Needs for a Mobile Behavioral-Sensing Technology for Depression Management: Qualitative Study},
    author = {Meng, Jingbo and Hussain, Ali Syed and Mohr, C. David and Czerwinski, Mary and Zhang, Mi},
    journal = {Journal of Medical Internet Research (JMIR)},
    volume ={20},
    number = {7},
    pages = {e10139},
    year = {2018}
}`

  const MobileDeepPill = `@inproceedings{zeng2017mobiledeeppill,
    title = {{MobileDeepPill: A Small-Footprint Mobile Deep Learning System for Recognizing Unconstrained Pill Images}}, 
    author = {Zeng, Xiao and Cao, Kai and Zhang, Mi},
    booktitle = {Proceedings of the 15th ACM International Conference on Mobile Systems, Applications, and Services (MobiSys)},
    year = {2017},
    pages = {56--67},
    numpages = {12},
    address = {Niagara Falls, NY, USA} 
}`

  const DeepASL = `@inproceedings{fang2017deepasl,
    title = {{DeepASL: Enabling Ubiquitous and Non-Intrusive Word and Sentence-Level Sign Language Translation}}, 
    author = {Fang, Biyi and Co, Jillian and Zhang, Mi},
    booktitle = {Proceedings of the 15th ACM Conference on Embedded Networked Sensor Systems (SenSys)},
    year = {2017},
    address = {Delft, The Netherlands} 
}`

  const PersonalSensing = `@article{mohr2017arcp,
    author = {David C. Mohr and Mi Zhang and Stephen Schueller},
    title = {{Personal Sensing: Understanding Mental Health Using Ubiquitous Sensors and Machine Learning}},
    journal = {Annual Review of Clinical Psychology (ARCP)},
    volume = {13},
    number = {1},
    pages = {null},
    year = {2017},
    doi = {10.1146/annurev-clinpsy-032816-044949},
    URL = {http://www.annualreviews.org/doi/abs/10.1146/annurev-clinpsy-032816-044949},
    eprint = {http://www.annualreviews.org/doi/pdf/10.1146/annurev-clinpsy-032816-044949}
}`

  const BodyScan = `@inproceedings{fang2016bodyscan,
    title = {BodyScan: Enabling Radio-based Sensing on Wearable Devices for Contactless Activity and Vital Sign Monitoring}, 
    author = {Fang, Biyi and Lane, Nicholas D. and Zhang, Mi and Boran, Aidan and Kawsar, Fahim},
    booktitle = {The 14th ACM International Conference on Mobile Systems, Applications, and Services (MobiSys)},
    pages = {97--110},
    year = {2016},
    location = {Singapore, Singapore} 
}`

  const HeadScan = `@inproceedings{fang2016headscan,
    title = {HeadScan: A Wearable System for Radio-based Sensing of Head and Mouth-related Activities},
    author = {Fang, Biyi and Lane, Nicholas D and Zhang, Mi and Kawsar, Fahim},
    booktitle = {The 15th ACM/IEEE International Conference on Information Processing in Sensor Networks (IPSN)},
    pages = {1--12},
    year = {2016}
}`

  const AirSense = `@inproceedings{fang2016airsense,
    title = {AirSense: An Intelligent Home-based Sensing System for Indoor Air Quality Analytics}, 
    author = {Fang, Biyi and Xu, Qiumin and Park, Taiwoo and Zhang, Mi},
    booktitle = {Proceedings of the 2016 ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp)},
    pages = {109--119},
    year = {2016}
}`

  const DoppleSleep = `@inproceedings{rahman2015dopplesleep,
    title = {Dopplesleep: A Contactless Unobtrusive Sleep Sensing System Using Short-Range Doppler Radar},
    author = {Rahman, Tauhidur and Adams, Alexander T and Ravichandran, Ruth Vinisha and Zhang, Mi and Patel, Shwetak N and Kientz, Julie A and Choudhury, Tanzeem},
    booktitle = {ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp)},
    pages = {39--50},
    year = {2015}
}`

  const MyBehavior = `@inproceedings{rabbi2015mybehavior,
    title = {MyBehavior: Automatic Personalized Health Feedback from User Behaviors and Preferences using Smartphones},
    author = {Rabbi, Mashfiqui and Aung, Min Hane and Zhang, Mi and Choudhury, Tanzeem},
    booktitle = {ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp)},
    pages = {707--718},
    year = {2015}
}`

  const PervasiveHealth = `@inproceedings{saeb2015relationship,
    title = {The Relationship between Clinical, Momentary, and Sensor-based Assessment of Depression},
    author = {Saeb, Sohrab and Zhang, Mi and Kwasny, Mary and Karr, Christopher J and Kording, Konrad and Mohr, David C},
    booktitle = {The 9th International Conference on Pervasive Computing Technologies for Healthcare (PervasiveHealth)},
    pages = {229--232},
    year = {2015}
}`

  const APFPAD = `@article{rabbi2015automated,
    title = {Automated Personalized Feedback for Physical Activity and Dietary Behavior Change With Mobile Phones: A Randomized Controlled Trial on Adults},
    author = {Rabbi, Mashfiqui and Pfammatter, Angela and Zhang, Mi and Spring, Bonnie and Choudhury, Tanzeem},
    journal = {Journal of Medical Internet Research (JMIR) mHealth and uHealth},
    volume = {3},
    number = {2},
    pages = {e42},
    year = {2015}
}`

  const FoodLabel = `@inproceedings{rabbi2015foodlabel,
    title = {An Intelligent Crowd-Worker Selection Approach for Reliable Content Labeling of Food Images},
    author = {Rabbi, Mashfiqui and Costa, Jean and Okeke, Fabian and Schachere, Max and Zhang, Mi and Choudhury, Tanzeem},
    booktitle = {ACM Wireless Health Conference (Wireless Health)},
    year = {2015}
}`

  const BodyBeat = `@inproceedings{rahman2014bodybeat,
    title = {Bodybeat: A Mobile System for Sensing Non-Speech Body Sounds},
    author = {Rahman, Tauhidur and Adams, Alexander T and Zhang, Mi and Cherry, Erin and Zhou, Bobby and Peng, Huaishu and Choudhury, Tanzeem},
    booktitle = {The 12th ACM International Conference on Mobile Systems, Applications, and Services (MobiSys)},
    pages = {2--13},
    year = {2014}
}`

  const TANIRSLU = `@inproceedings{rahman2014ph,
    title = {Towards Accurate Non-Intrusive Recollection of Stress Levels using Mobile Sensing and Contextual Recall},
    author = {Rahman, Tauhidur and Zhang, Mi and Voida, Stephen and Choudhury, Tanzeem},
    booktitle = {The 8th International Conference on Pervasive Computing Technologies for Healthcare (PervasiveHealth)},
    pages = {166--169},
    year = {2014}
}`

  return (
    <div>
      <ContentTitle title = "Publications" subtitle = "Publications"></ContentTitle>

      <div className='publicationsBlock'>
      <div className='publicationsYear'>
        Book
      </div>
      <div className='publicationsContent'>
        <div className='publicationsBook'>
          <div className='bookItem'>
            <div className='publicationsStrong'>创新工场讲AI课：从知识到实践 (Chinese) </div>
            <div>李开复, 王咏刚, 张潼, 宋彦, 屠可伟, 张发恩, 唐剑, 张弥, 吴佳洪, 刘宁. <br />
            电子工业出版社, 2021. <br />
            [ <a href="https://item.jd.com/12830375.html">Purchase Link</a> ] </div>
          </div>
          <img src="./images/book.jpg" alt="" className='bookImg'/>
        </div>
      </div>
      </div>

      <div className='publicationsBlock'>
      <div className='publicationsYear'>
        2023
      </div>
      <div className='publicationsContent'>
        <div className='publicationsItem'>
          <div className='publicationsStrong'>NELoRa-Bench: A Benchmark for Neural-enhanced LoRa Demodulation </div>
					Jialuo Du, Yidong Ren, Mi Zhang, Yunhao Liu, and Zhichao Cao. <br />
          International Conference on Learning Representations (<font style={{ fontWeight: 'bold' }}>ICLR'23</font>) Workshop on Machine Learning for IoT (<font color="#de1111" style={{ fontWeight: 'bold' }}>Oral</font>).
        </div>

        <div className='publicationsItem'>
          <div className="publicationsStrong">TimelyFL: Heterogeneity-aware Asynchronous Federated Learning with Adaptive Partial Training</div>
					Tuo Zhang, Lei Gao, Sunwoo Lee, Mi Zhang, and Salman Avestimehr. <br />
          IEEE Conference on Computer Vision and Pattern Recognition (<font style={{ fontWeight: 'bold' }}>CVPR'23</font>) Workshop on Federated Learning for Computer Vision.
        </div>

        <CodeBlock
          title = "FedAudio: A Federated Learning Benchmark for Audio Tasks"
          authors = "Tuo Zhang, Tiantian Feng, Samiul Alam, Sunwoo Lee, Mi Zhang, Shrikanth S. Narayanan, and Salman Avestimehr."
          conference = "IEEE International Conference on Acoustics, Speech and Signal Processing (<div class='pubHighlight'>ICASSP'23</div>)."
          paper = "https://mi-zhang.github.io/papers/2023_ICASSP_FedAudio.pdf"
          bibtex = {FedAudio}
        >
        </CodeBlock>
        
      </div>
      </div>

      <div className='publicationsBlock'>
      <div className='publicationsYear'>
        2022
      </div>
      <div className='publicationsContent'>
        
        <CodeBlock
          title = "FedRolex: Model-Heterogeneous Federated Learning with Rolling Sub-Model Extraction"
          authors = "Samiul Alam, Luyang Liu, Ming Yan, and Mi Zhang."
          conference = "Conference on Neural Information Processing Systems (<div class='pubHighlight'>NeurIPS'22</div>)."
          rate = "Acceptance Rate: 2665/10411 = 25.6%"
          paper = "https://arxiv.org/abs/2212.01548"
          bibtex = {FedRolex}
          code = "https://github.com/MSU-MLSys-Lab/FedRolex"
          poster = "https://mi-zhang.github.io/papers/2022_NeurIPS_FedRolex_Poster.pdf"
        >
        </CodeBlock>

        <CodeBlock
          title = "PyramidFL: A Fine-grained Client Selection Framework for Efficient Federated Learning"
          authors = "Chenning Li, Xiao Zeng, Mi Zhang, and Zhichao Cao."
          conference = "ACM International Conference on Mobile Computing and Networking (<div class='pubHighlight'>MobiCom'22</div>)."
          rate = "Acceptance Rate: 56/314 = 17.8%"
          paper = "https://mi-zhang.github.io/papers/2022_MobiCom_PyramidFL.pdf"
          bibtex = {PyramidFL}
        >
        </CodeBlock>

        <CodeBlock
          title = "FedSEA: A Semi-Asynchronous Federated Learning Framework for Extremely Heterogeneous Devices"
          authors = "Jingwei Sun, Ang Li, Lin Duan, Samiul Alam, Xuliang Deng, Xin Guo, Haiming Wang, Maria Gorlatova, Mi Zhang, Hai Li, Yiran Chen."
          conference = "ACM Conference on Embedded Networked Sensor Systems (<div class='pubHighlight'>SenSys'22</div>)."
          rate = "Acceptance Rate: 52/208 = 25%"
          paper = "https://mi-zhang.github.io/papers/2022_SenSys_FedSEA.pdf"
          bibtex = {FedSEA}
        >
        </CodeBlock>

        <CodeBlock
          title = "FedTune: Automatic Tuning of Federated Learning Hyper-Parameters from System Perspective"
          authors = "Huanle Zhang, Mi Zhang, Xin Liu, Prasant Mohapatra, and Michael Delucia."
          conference = "IEEE Military Communications Conference (<div class='pubHighlight'>MILCOM'22</div>)."
          paper = "https://mi-zhang.github.io/https://arxiv.org/abs/2110.03061"
          bibtex = {FedTune}
        >
        </CodeBlock>

        <CodeBlock
          title = "Federated Learning for Internet of Things: Applications, Challenges, and Opportunities"
          authors = "Tuo Zhang, Lei Gao, Chaoyang He, Mi Zhang, Bhaskar Krishnamachari, and Salman Avestimehr."
          conference = "IEEE Internet of Things Magazine (<div class='pubHighlight'>IEEE IoTM</div>), 2022."
          paper = "https://mi-zhang.github.io/papers/2022_IEEEIoTM_FLIoTVision.pdf"
          bibtex = {FLIT}
        >
        </CodeBlock>

        <CodeBlock
          title = "Deep AutoAugment"
          authors = "Yu Zheng, Zhi Zhang, Shen Yan, and Mi Zhang."
          conference = "International Conference on Learning Representations (<div class='pubHighlight'>ICLR'22</div>)."
          rate = "Acceptance Rate: 1095/3391 = 32.3%"
          paper = "https://mi-zhang.github.io/papers/2022_ICLR_DeepAA.pdf"
          bibtex = {DeepAutoAugment}
          code = "https://github.com/MSU-MLSys-Lab/DeepAA"
          leaderboard = "https://paperswithcode.com/paper/deep-autoaugment-1"
          poster = "https://mi-zhang.github.io/papers/2022_NeurIPS_FedRolex_Poster.pdf"
          slides = "https://mi-zhang.github.io/papers/2022_ICLR_DeepAA_Slides.pdf"
          media = "<a href='https://syncedreview.com/2022/03/16/msu-aws-present-deepaa-fully-automated-data-augmentation-search-that-rivals-human-enhanced-approaches/'> Synced </a>"
        >
        </CodeBlock>

        <CodeBlock
          title = "Multiview Transformers for Video Recognition"
          authors = "Shen Yan, Xuehan Xiong, Anurag Arnab, Zhichao Lu, Mi Zhang, Chen Sun, Cordelia Schmid."
          conference = "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<div class='pubHighlight'>CVPR'22</div>)."
          rate = "Acceptance Rate: 2067/8161 = 25.3%"
          paper = "https://arxiv.org/abs/2201.04288"
          bibtex = {MTVR}
          code = "https://github.com/google-research/scenic/tree/main/scenic/projects/mtv"
          leaderboard = "https://paperswithcode.com/paper/multiview-transformers-for-video-recognition"
        >
        </CodeBlock>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Ph.D. Thesis: New Perspectives in Neural Architecture Search: Architecture Embeddings, Efficient Performance Estimations, and their Applications</div>
					Shen Yan, 2022.
        </div>

      </div>
      </div>

      <div className='publicationsBlock'>
      <div className='publicationsYear'>
        2021
      </div>
      <div className='publicationsContent'>
        <CodeBlock
          title = "A Field Guide to Federated Optimization"
          authors = "Jianyu Wang, Zachary Charles, Zheng Xu, Gauri Joshi, H. Brendan McMahan, Blaise Aguera y Arcas, Maruan Al-Shedivat, Galen Andrew, Salman Avestimehr, Katharine Daly, Deepesh Data, Suhas Diggavi, Hubert Eichner, Advait Gadhikar, Zachary Garrett, Antonious M. Girgis, Filip Hanzely, Andrew Hard, Chaoyang He, Samuel Horvath, Zhouyuan Huo, Alex Ingerman, Martin Jaggi, Tara Javidi, Peter Kairouz, Satyen Kale, Sai Praneeth Karimireddy, Jakub Konecny, Sanmi Koyejo, Tian Li, Luyang Liu, Mehryar Mohri, Hang Qi, Sashank J. Reddi, Peter Richtarik, Karan Singhal, Virginia Smith, Mahdi Soltanolkotabi, Weikang Song, Ananda Theertha Suresh, Sebastian U. Stich, Ameet Talwalkar, Hongyi Wang, Blake Woodworth, Shanshan Wu, Felix X. Yu, Honglin Yuan, Manzil Zaheer, Mi Zhang, Tong Zhang, Chunxiang Zheng, Chen Zhu, Wennan Zhu."
          paper = "https://arxiv.org/abs/2107.06917"
          bibtex = {FOGuide}
        >
        </CodeBlock>

        <CodeBlock
          title = "Mercury: Efficient On-Device Distributed DNN Training via Stochastic Importance Sampling"
          authors = "Xiao Zeng, Ming Yan, and Mi Zhang."
          conference = "ACM Conference on Embedded Networked Sensor Systems (<div class='pubHighlight'>SenSys'21</div>)."
          rate = "Acceptance Rate: 25/139 = 18%"
          paper = "https://mi-zhang.github.io/papers/2021_SenSys_Mercury.pdf"
          bibtex = {Mercury}
        >
        </CodeBlock>

        <CodeBlock
          title = "FedMask: Joint Computation and Communication-Efficient Personalized Federated Learning via Heterogeneous Masking"
          authors = "Ang Li, Jingwei Sun, Xiao Zeng, Mi Zhang, Hai Li, and Yiran Chen."
          conference = "ACM Conference on Embedded Networked Sensor Systems (<div class='pubHighlight'>SenSys'21</div>)."
          rate = "Acceptance Rate: 25/139 = 18%"
          paper = "https://mi-zhang.github.io/papers/2021_SenSys_FedMask.pdf"
          bibtex = {FedMask}
        >
        </CodeBlock>

        <CodeBlock
          title = "NELoRa: Towards Ultra-low SNR LoRa Communication with Neural-enhanced Demodulation"
          authors = "Chenning Li, Hanqing Guo, Shuai Tong, Xiao Zeng, Zhichao Cao, Mi Zhang, Qiben Yan, Li Xiao, Jiliang Wang, and Yunhao Liu."
          conference = "ACM Conference on Embedded Networked Sensor Systems (<div class='pubHighlight'>SenSys'21</div>)."
          rate = "Acceptance Rate: 25/139 = 18%"
          honor = "<span class='pubRedHighLight'>Best Paper Award</span> | <span class='pubRedHighLight'>ACM SIGMOBILE Research Highlight </span> [<a href='https://mi-zhang.github.io/papers/2022_GetMobile_NELoRa.pdf'> Highlight Article </a>]"
          paper = "https://mi-zhang.github.io/papers/2021_SenSys_FedMask.pdf"
          bibtex = {NELoRa}
        >
        </CodeBlock>

        <CodeBlock
          title = "DeepLoRa: Learning Accurate Path Loss Model for Long Distance Links in LPWAN"
          authors = "Li Liu, Yuguang Yao, Zhichao Cao, and Mi Zhang."
          conference = "IEEE International Conference on Computer Communications (<div class='pubHighlight'>INFOCOM'21</div>)."
          rate = "Acceptance Rate: 252/1266 = 19.9%"
          paper = "https://mi-zhang.github.io/papers/2021_INFOCOM_DeepLoRA.pdf"
          bibtex = {DeepLoRa}
        >
        </CodeBlock>

        <CodeBlock
          title = "CATE: Computation-aware Neural Architecture Encoding with Transformers"
          authors = "Shen Yan, Kaiqiang Song, Fei Liu, and Mi Zhang."
          conference = "International Conference on Machine Learning (<div class='pubHighlight'>ICML'21</div>)."
          rate = "Acceptance Rate: 166/5513 = 3% (<span class='pubRedHighLight'>Long Talk</span>)"
          paper = "https://arxiv.org/abs/2102.07108"
          bibtex = {CATE}
          code = "https://github.com/MSU-MLSys-Lab/CATE"
          poster = "https://mi-zhang.github.io/papers/2021_ICML_CATE_Poster.pdf"
          presentation = "https://icml.cc/virtual/2021/oral/9052"
        >
        </CodeBlock>

        <CodeBlock
          title = "Deep AutoAugment"
          authors = "Yu Zheng, Zhi Zhang, Shen Yan, and Mi Zhang."
          conference = "International Conference on Machine Learning (<div class='pubHighlight'>ICML'21</div>) Workshop on Machine Learning for Data."
          rate = "Note: the full version is accepted to ICLR'22."
        >
        </CodeBlock>

        <CodeBlock
          title = "Towards Position-Independent Sensing for Gesture Recognition with Wi-Fi"
          authors = "Ruiyang Gao, Mi Zhang, Jie Zhang, Yang Li, Enze Yi, Dan Wu, Leye Wang, and Daqing Zhang."
          conference = "ACM International Joint Conference on Pervasive and Ubiquitous Computing (<div class='pubHighlight'>UbiComp'21</div>)."
          paper = "https://mi-zhang.github.io/papers/2021_UbiComp_PIS.pdf"
          bibtex = {PIS}
        >
        </CodeBlock>

        <div className='publicationsItem'>
        <div class="publicationsStrong">Ph.D. Thesis: Collaborative Distributed Deep Learning Systems on the Edges</div>
					Xiao Zeng, 2021.    
        </div>


      </div>
      </div>

      <div className='publicationsBlock'>
      <div className='publicationsYear'>
        2020
      </div>
      <div className='publicationsContent'>
        <CodeBlock
          title = "Does Unsupervised Architecture Representation Learning Help Neural Architecture Search?"
          authors = "Shen Yan, Yu Zheng, Wei Ao, Xiao Zeng, and Mi Zhang."
          conference = "Conference on Neural Information Processing Systems (<div class='pubHighlight'>NeurIPS'20</div>)."
          rate = "Acceptance Rate: 1900/9454 = 20.1%"
          paper = "https://arxiv.org/pdf/2006.06936.pdf"
          bibtex = {arch2vec}
          code = "https://github.com/MSU-MLSys-Lab/arch2vec"
          poster = "https://mi-zhang.github.io/papers/2020_NeurIPS_arch2vec_poster.pdf"
          presentation = "https://studio.slideslive.com/web_recorder/share/20201025T052954Z__NeurIPS_posters__18078__does-unsupervised-architecture?s=a7b5e575-accd-4aa1-ac55-a546282217a5"
        >
        </CodeBlock>

        <CodeBlock
          title = "FedML: A Research Library and Benchmark for Federated Machine Learning"
          authors = "Chaoyang He, Songze Li, Jinhyun So, Xiao Zeng, Mi Zhang, Hongyi Wang, Xiaoyang Wang, Praneeth Vepakomma, Abhishek Singh, Hang Qiu, Li Shen, Peilin Zhao, Yan Kang, Yang Liu, Ramesh Raskar, Qiang Yang, Murali Annavaram, Salman Avestimehr."
          conference = "Conference on Neural Information Processing Systems (<div class='pubHighlight'>NeurIPS'20</div>) Federated Learning Workshop (<span class='pubRedHighLight'>Spotlight</span>)"
          honor = "<span class='pubRedHighLight'>Best Paper Award</span>"
          paper = "https://arxiv.org/abs/2007.13518"
          bibtex = {FedML}
          code = "https://github.com/FedML-AI/FedML"
        >
        </CodeBlock>

        <CodeBlock
          title = "MutualNet: Adaptive ConvNet via Mutual Learning from Network Width and Resolution"
          authors = "Taojiannan Yang, Sijie Zhu, Chen Chen, Shen Yan, Mi Zhang, and Andrew Willis."
          conference = "European Conference on Computer Vision (<div class='pubHighlight'>ECCV'20</div>)."
          rate = "Acceptance Rate: 104/5025 = 2% (<span class='pubRedHighLight'>Oral</span>)"
          paper = "https://mi-zhang.github.io/papers/2020_ECCV_MutualNet.pdf"
          bibtex = {MutualNet}
          code = "https://github.com/taoyang1122/MutualNet"
        >
        </CodeBlock>

        <CodeBlock
          title = "FlexDNN: Input-Adaptive On-Device Deep Learning for Efficient Mobile Vision"
          authors = "Biyi Fang, Xiao Zeng, Faen Zhang, Hui Xu, and Mi Zhang. "
          conference = "ACM/IEEE Symposium on Edge Computing (<div class='pubHighlight'>SEC'20</div>)."
          rate = "Acceptance Rate: 21/96 = 21.9%"
          honor =  "<span class='pubRedHighLight'>Best Paper Award Nominee</span> "
          paper = "https://mi-zhang.github.io/papers/2020_SEC_FlexDNN.pdf"
          bibtex = {FlexDNN}
        >
        </CodeBlock>

        <CodeBlock
          title = "Distream: Scaling Live Video Analytics with Workload-Adaptive Distributed Edge Intelligence"
          authors = "Xiao Zeng, Biyi Fang, Haichen Shen, and Mi Zhang."
          conference = "ACM Conference on Embedded Networked Sensor Systems (<div class='pubHighlight'>SenSys'20</div>)."
          rate = "Acceptance Rate: 43/213 = 20.2%"
          paper = "https://mi-zhang.github.io/papers/2020_SenSys_Distream.pdf"
          bibtex = {Distream}
        >
        </CodeBlock>

        <CodeBlock
          title = "Wi-Fi See It All: Generative Adversarial Network-augmented Versatile Wi-Fi Imaging"
          authors = "Chenning Li, Zheng Liu, Yuguang Yao, Zhichao Cao, Mi Zhang, and Yunhao Liu."
          conference = "ACM Conference on Embedded Networked Sensor Systems (<div class='pubHighlight'>SenSys'20</div>)."
          rate = "Acceptance Rate: 43/213 = 20.2%"
          paper = "https://mi-zhang.github.io/papers/2020_SenSys_WiSIA.pdf"
          bibtex = {WiSIA}
        >
        </CodeBlock>

        <CodeBlock
          title = "SecWIR: Securing Smart Home IoT Communications via Wi-Fi Routers with Embedded Intelligence"
          authors = "Xinyu Lei, Guan-Hua Tu, Chi-Yu Li, Tian Xie, and Mi Zhang."
          conference = "ACM International Conference on Mobile Systems, Applications, and Services (<div class='pubHighlight'>MobiSys'20</div>)."
          rate = "Acceptance Rate: 34/175 = 19.4%"
          paper = "https://mi-zhang.github.io/papers/2020_MobiSys_SecWIR.pdf"
          bibtex = {SecWIR}
        >
        </CodeBlock>

        <CodeBlock
          title = "SCYLLA: QoE-aware Continuous Mobile Vision with FPGA-based Dynamic Deep Neural Network Reconfiguration"
          authors = "Shuang Jiang, Zhiyao Ma, Xiao Zeng, Chenren Xu, Mi Zhang, Chen Zhang, and Yunxin Liu. "
          conference = "IEEE International Conference on Computer Communications (<div class='pubHighlight'>INFOCOM'20</div>)."
          rate = "Acceptance Rate: 268/1354 = 19.8%"
          paper = "https://mi-zhang.github.io/papers/2020_INFOCOM_Scylla.pdf"
          bibtex = {Scylla}
        >
        </CodeBlock>

        <CodeBlock
          title = "Deep Learning in the Era of Edge Computing: Challenges and Opportunities"
          authors = "Mi Zhang, Faen Zhang, Nicholas D. Lane, Yuanchao Shu, Xiao Zeng, Biyi Fang, Shen Yan, and Hui Xu."
          conference = "Book chapter in Fog Computing: Theory and Practice, Wiley, 2020."
          invited = "<span class='pubBlueHighLight'>Invited Article</span>"
          paper = "https://mi-zhang.github.io/papers/2020_BookChapter_DLEdge.pdf"
          bibtex = {DLEdge}
        >
        </CodeBlock>

      </div>
      </div>

      <div className='publicationsBlock'>
      <div className='publicationsYear'>
        2019
      </div>
      <div className='publicationsContent'>
        <CodeBlock
          title = "DQS: A Framework for Designing Tiny Neural Networks for On-Device AI"
          authors = "Yu Zheng*, Shen Yan*, and Mi Zhang."
          conference = "Conference on Neural Information Processing Systems (<div class='pubHighlight'>NeurIPS'19</div>) Google MicroNet Challenge."
          honor = "<span class='pubRedHighLight'>Google MicroNet Challenge (CIFAR-100 Track) 4th Place Winner (1st Place in U.S. and Canada)</span>"
          code = "https://github.com/MSU-MLSys-Lab/MSUNet"
          media = "<a href=https://msutoday.msu.edu/news/2020/msu-team-focused-on-ai-earns-recognition-at-google-micronet-challenge/'> MSU Today </a>"
        >
        </CodeBlock>

        <CodeBlock
          title = "HM-NAS: Efficient Neural Architecture Search via Hierarchical Masking"
          authors = "Shen Yan, Biyi Fang, Faen Zhang, Yu Zheng, Xiao Zeng, Hui Xu, and Mi Zhang."
          conference = "International Conference on Computer Vision (<div class='pubHighlight'>ICCV'19</div>) Neural Architects Workshop."
          honor = "<span class='pubRedHighLight'>Best Paper Award Nominee</span>"
          paper = "https://mi-zhang.github.io/papers/2019_ICCVW_HM-NAS.pdf"
          bibtex = {HMNAS}
          media = "<a href='https://www.jiqizhixin.com/articles/2019-10-31-5'> JiQiZhiXin </a>"
        >
        </CodeBlock>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Federated Learning: The Future of Distributed Machine Learning</div>
					Mi Zhang. 
					<br />
                    SyncedReview @ Medium, 2019.
                    <br />    
                    [<a href="https://medium.com/syncedreview/federated-learning-the-future-of-distributed-machine-learning-eec95242d897"> Link </a>]
                    <br />    
                    <font color="#0949b1" style={{ fontWeight: 'bold' }}>Invited Article</font>
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">AutoML Mobile: Automated ML Model Design for Every Mobile Device</div>
					Mi Zhang. 
					<br />
                    SyncedReview @ Medium, 2019.
                    <br />    
                    [<a href="https://medium.com/syncedreview/automl-mobile-automated-ml-model-design-for-every-mobile-device-fe1b6429e976"> Link </a>]
                    <br />  
                    <font color="#0949b1" style={{ fontWeight: 'bold' }}>Invited Article</font>
        </div>

        <CodeBlock
          title = "Mobile Sensing of Alertness, Sleep, and Circadian Rhythm: Hardware and Software Platforms"
          authors = "Akane Sano, Tauhidur Rahman, Mi Zhang, Deepak Ganesan, and Tanzeem Choudhury."
          conference = "ACM SIGMOBILE Mobile Computing and Communications Review (<div class='pubHighlight'>GetMobile</div>), Volume 23, Issue 3, 2019."
          invited = "<span class='pubBlueHighLight'>Invited Article</span>"
          paper = "https://mi-zhang.github.io/papers/2019_GetMobile_MobileSensing.pdf"
          bibtex = {MobileSensing}
        >
        </CodeBlock>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Communication Challenges in the IoT</div>
					Mi Zhang, Xiaofan Jiang, and Steve Hodges. 
					<br />
					IEEE Pervasive Computing Magazine (<font style={{ fontWeight: 'bold' }}>IEEE Pervasive Computing</font>), Volume 18, Issue 1, 2019.
                    <br />
                    Impact Factor: 4.41
                    <br />    
                    <font color="#0949b1" style={{ fontWeight: 'bold' }}>Guest Editors' Introduction</font>
        </div>

        <div className='publicationsItem'>
        <div class="publicationsStrong">Ph.D. Thesis: Adaptive On-device Deep Learning Systems</div>
					Biyi Fang, 2019.   
        </div>

      </div>
      </div>

      <div className='publicationsBlock'>
      <div className='publicationsYear'>
        2018
      </div>
      <div className='publicationsContent'>

        <CodeBlock
          title = "NestDNN: Resource-Aware Multi-Tenant On-Device Deep Learning for Continuous Mobile Vision"
          authors = "Biyi Fang*, Xiao Zeng*, and Mi Zhang."
          conference = "ACM International Conference on Mobile Computing and Networking (<div class='pubHighlight'>GetMobile</div>MobiCom'18</div>)."
          rate = "Acceptance Rate: 42/187 = 22.5%"
          paper = "https://mi-zhang.github.io/papers/2018_MobiCom_NestDNN.pdf"
          bibtex = {NestDNN}
          video = "https://www.youtube.com/watch?v=a7h0gPTuPfg"
          media = "<a href='https://www.jiqizhixin.com/articles/2018-10-18-17'> JiQiZhiXin </a>"
        >
        </CodeBlock>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Efficient Federated Learning via Variational Dropout</div>
					Wei Du, Xiao Zeng, Ming Yan, and Mi Zhang. 
					<br />
                    OpenReview
                    <br />    
					[<a href="https://openreview.net/forum?id=BkeAf2CqY7">Paper</a>]
        </div>

        <CodeBlock
          title = "The Dark Side of Operational Wi-Fi Calling Services"
          authors = "Tian Xie, Guan-Hua Tu, Chi-Yu Li, Chunyi Peng, Jiawei Li, and Mi Zhang."
          conference = "IEEE Conference on Communications and Network Security (<div class='pubHighlight'>CNS'18</div>)."
          rate = "Acceptance Rate: 52/181 = 28.7%"
          honor = "<span class='pubRedHighLight'>Best Paper Award</span> | <span class='pubRedHighLight'>Google Security Reward</span>"
          paper = "https://mi-zhang.github.io/papers/2018_CNS_WiFiCalling.pdf"
          bibtex = {WiFiCalling}
        >
        </CodeBlock>

        <CodeBlock
          title = "When Virtual Reality Meets Internet of Things in the Gym: Enabling Immersive Interactive Machine Exercises"
          authors = "Fazlay Rabbi*, Taiwoo Park*, Biyi Fang, Mi Zhang, and Youngki Lee."
          conference = "ACM International Joint Conference on Pervasive and Ubiquitous Computing (<div class='pubHighlight'>UbiComp'18</div>)."
          paper = "https://mi-zhang.github.io/papers/2018_UbiComp_JARVIS.pdf"
          bibtex = {JARVIS}
        >
        </CodeBlock>

        <CodeBlock
          title = "When Mixed Reality Meets Internet of Things: Toward the Realization of Ubiquitous Mixed Reality"
          authors = "Taiwoo Park, Mi Zhang, and Youngki Lee."
          conference = "ACM SIGMOBILE Mobile Computing and Communications Review (<div class='pubHighlight'>GetMobile</div>), Volume 22, Issue 1, 2018."
          invited = "<span class='pubBlueHighLight'>Invited Article</span>"
          paper = "https://mi-zhang.github.io/papers/2018_GetMobile_UbiquitousMR.pdf"
          bibtex = {UbiquitousMR}
        >
        </CodeBlock>

        <CodeBlock
          title = "Exploring User Needs for a Mobile Behavioral-Sensing Technology for Depression Management: Qualitative Study"
          authors = "Jingbo Meng, Syed Ali Hussain, David C. Mohr, Mary Czerwinski, and Mi Zhang."
          conference = "Journal of Medical Internet Research (<div class='pubHighlight'>JMIR</div>) Special Issue on Computing and Mental Health, 2018."
          rate = "Impact Factor: 5.175"
          link = "http://www.jmir.org/2018/7/e10139/"
          paper = "https://mi-zhang.github.io/papers/2018_UbiComp_JARVIS.pdf"
          bibtex = {iSeeNeed}
        >
        </CodeBlock>

      </div>
      </div>

      <div className='publicationsBlock'>
      <div className='publicationsYear'>
        2017
      </div>
      <div className='publicationsContent'>

      <CodeBlock
          title = "MobileDeepPill: A Small-Footprint Mobile Deep Learning System for Recognizing Unconstrained Pill Images"
          authors = "Xiao Zeng, Kai Cao, and Mi Zhang."
          conference = "ACM International Conference on Mobile Systems, Applications, and Services (<div class='pubHighlight'>MobiSys'17</div>)."
          rate = "Acceptance Rate: 34/188 = 18% "
          honor = "<span class='pubRedHighLight'>NIH Pill Image Recognition Challenge First Place Winner</span>"
          paper = "https://mi-zhang.github.io/papers/2018_UbiComp_JARVIS.pdf"
          bibtex = {MobileDeepPill}
          video = "https://www.youtube.com/watch?v=-k7awuoW2rg&feature=youtu.be"
          media = "<a href='https://www.nlm.nih.gov/news/pillimagerecognitionchallenge.html'> NIH</a> | <a href='http://www.wxyz.com/news/msu-professor-working-on-mobile-solution-to-identify-pills'> ABC 7 (TV)</a> | <a href='http://msutoday.msu.edu/news/2016/nih-challenge-winner-helping-solve-pill-recognition-problem/'> MSU Today </a>"
        >
        </CodeBlock>

        <CodeBlock
          title = "DeepASL: Enabling Ubiquitous and Non-Intrusive Word and Sentence-Level Sign Language Translation"
          authors = "Biyi Fang, Jillian Co, and Mi Zhang."
          conference = "ACM Conference on Embedded Networked Sensor Systems (<div class='pubHighlight'>SenSys'17</div>)."
          rate = "Acceptance Rate: 26/151 = 17%"
          paper = "https://mi-zhang.github.io/papers/2017_SenSys_DeepASL.pdf"
          bibtex = {DeepASL}
          media = "<a href='https://www.youtube.com/watch?v=TwI1aeWz9Dc&feature=youtu.be'> NSF (video)</a> | <a href='https://www.youtube.com/watch?v=7HzUr9let48'> MSU (video)</a> | <a href='https://news.developer.nvidia.com/ai-can-interpret-and-translate-american-sign-language-sentences/'> NVIDIA</a> | <a href='https://www.smithsonianmag.com/innovation/sign-language-translators-are-cool-but-are-they-useful-180971535/'> Smithsonian</a> | <a href='https://www.michiganradio.org/post/stateside-asl-translation-technology-ingham-countys-first-public-defender-sen-peters-pfas'> NPR (radio interview)</a> | <a href='https://msutoday.msu.edu/news/2019/new-technology-breaks-through-sign-language-barriers/'> MSU Today</a> | <a href='https://www.aau.edu/research-scholarship/featured-research-topics/new-technology-breaks-through-sign-language-barriers'> AAU</a> | <a href='https://www.futurity.org/sign-language-translator-1984022/'> Futurity </a>"
        >
        </CodeBlock>

        <div className='publicationsItem'>
          <div class="publicationsStrong">SharpEar: Real-Time Speech Enhancement in Noisy Environments (Poster)</div>
					Xiao Zeng, Kai Cao, Haochen Sun, and Mi Zhang. 
					<br />
					ACM International Joint Conference on Pervasive and Ubiquitous Computing (<font style={{ fontWeight: 'bold' }}>UbiComp'17</font>). 				
					<br />
                    <font color="#de1111" style={{ fontWeight: 'bold' }}>NSF Hearables Challenge Third Place Winner</font>    
                    <br />
                    <font color="#0949b1" style={{ fontWeight: 'bold' }}>Invited Presentation</font>      
                    <br />    
                    Media Coverage:
                    [<a href="https://ninesights.ninesigma.com/web/hearables/innovationcontest"> NSF</a> | 
                    <a href="https://cacm.acm.org/news/222774-tune-out-background-noise-with-msus-new-technology/fulltext"> ACM TechNews</a> | 
                    <a href="http://msutoday.msu.edu/news/2017/msu-hearing-aid-technology-to-eliminate-background-noise/"> MSU Today</a> |
                    <a href="https://www.aau.edu/research-scholarship/featured-research-topics/msu-hearing-aid-technology-eliminate-background-noise"> AAU</a> |    
                     <a href="https://www.rdmag.com/news/2017/11/hearing-aid-technology-eliminate-background-noise"> R&amp;D Magazine</a> | 
                     <a href="https://www.tun.com/blog/msu-technology-hearing-aid-noise/"> The University Network </a>]
        </div>

        <CodeBlock
          title = "Personal Sensing: Understanding Mental Health Using Ubiquitous Sensors and Machine Learning"
          authors = "David C. Mohr, Mi Zhang, and Stephen M. Schueller."
          conference = "Annual Review of Clinical Psychology (<div class='pubHighlight'>ARCP</div>), Volume 13, Pages 23-47, 2017."
          rate = "Impact Factor: 12.214"
          invited = "<span class='pubBlueHighLight'>Invited Article</span>"
          link = "http://www.annualreviews.org/doi/abs/10.1146/annurev-clinpsy-032816-044949"
          paper = "https://mi-zhang.github.io/papers/2017_ARCP_PersonalSensing.pdf"
          bibtex = {PersonalSensing}
        >
        </CodeBlock>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Helping Universities Combat Depression with Mobile Technology</div>
					Mi Zhang, David C. Mohr, and Jingbo Meng. 
					<br />
					The Conversation, 2017. 	
                    <br />    
                    <font color="#0949b1" style={{ fontWeight: 'bold' }}>Invited Article</font>      
                    <br />
                    [<a href="https://theconversation.com/helping-universities-combat-depression-with-mobile-technology-67033"> Link </a>]
                    <br />
                    Media Coverage:
                    [<a href="https://www.youtube.com/watch?v=1dtQAvhaIuk"> NSF (video)</a> |
                    <a href="https://www.smithsonianmag.com/innovation/how-mobile-technology-can-help-universities-combat-depression-180961795/"> Smithsonian</a> |
                    <a href="https://msutoday.msu.edu/news/2016/1-million-nsf-grant-to-enhance-college-counseling-services/"> MSU Today</a> |
                    <a href="https://edtechmagazine.com/higher/article/2016/11/michigan-state-university-app-helps-college-students-depression"> EdTech</a> |             
                    <a href="https://campustechnology.com/articles/2016/09/09/michigan-state-u-to-develop-smart-counseling-tech.aspx"> Campus Technology</a> |
                    <a href="https://www.ecampusnews.com/news/smart-college-counseling/"> eCampusNews </a>]
        </div>
      </div>
      </div>

      <div className='publicationsBlock'>
      <div className='publicationsYear'>
        2016
      </div>
      <div className='publicationsContent'>
        <CodeBlock
          title = "BodyScan: Enabling Radio-based Sensing on Wearable Devices for Contactless Activity and Vital Sign Monitoring"
          authors = "Biyi Fang, Nicholas D. Lane, Mi Zhang, Aidan Boran, and Fahim Kawsar."
          conference = "ACM International Conference on Mobile Systems, Applications, and Services (<div class='pubHighlight'>MobiSys'16</div>)."
          rate = "Acceptance Rate: 31/197 = 15.7%"
          paper = "https://mi-zhang.github.io/papers/2016_MobiSys_BodyScan.pdf"
          bibtex = {BodyScan}
          video = "https://www.youtube.com/watch?v=lcYDVcU7-m0&feature=youtu.be"
        >
        </CodeBlock>

        <CodeBlock
          title = "HeadScan: A Wearable System for Radio-based Sensing of Head and Mouth-related Activities"
          authors = "Biyi Fang, Nicholas D. Lane, Mi Zhang, and Fahim Kawsar."
          conference = "ACM/IEEE International Conference on Information Processing in Sensor Networks (<div class='pubHighlight'>IPSN'16</div>)."
          rate = "Acceptance Rate: 23/117 = 19.7%"
          paper = "https://mi-zhang.github.io/papers/2016_IPSN_HeadScan.pdf"
          bibtex = {HeadScan}
          media = "<a href='http://scopeblog.stanford.edu/2016/05/25/engineers-develop-new-type-of-wearable-device/'> Stanford Medicine</a> | <a href='http://www.medgadget.com/2016/05/headscan-keeps-jaw-radar-view.html'> MedGadget</a> | <a href='http://www.futurity.org/headscan-wearables-1165962-2/?utm_source=Futurity+Today&utm_campaign=4b768f71bd-May_19_20165_19_2016&utm_medium=email&utm_term=0_e34e8ee443-4b768f71bd-206324325'> Futurity</a> | <a href='http://msutoday.msu.edu/news/2016/wearable-technology-could-help-detect-health-risks-depression/'> MSU Today</a> | <a href='http://www.fox2detroit.com/good-day/194845994-story'> Fox 2 (TV interview)</a> | <a href='http://readwrite.com/2016/05/23/health-wearable-monitors-patients-depression-ht4/'> ReadWrite </a>"
        >
        </CodeBlock>

        <CodeBlock
          title = "AirSense: An Intelligent Home-based Sensing System for Indoor Air Quality Analytics"
          authors = "Biyi Fang, Qiumin Xu, Taiwoo Park, and Mi Zhang."
          conference = "ACM International Joint Conference on Pervasive and Ubiquitous Computing (<div class='pubHighlight'>UbiComp'16</div>)."
          rate = "Acceptance Rate: 114/481 = 23.7%"
          paper = "https://mi-zhang.github.io/papers/2016_UbiComp_AirSense.pdf"
          bibtex = {AirSense}
          media = "<a href='https://www.theatlantic.com/sponsored/dyson/are-you-polluting-your-own-home/1838/'> The Atlantic</a> | <a href='http://www.futurity.org/airsense-indoor-pollution-1295542-2/'> Futurity</a> | <a href='http://msutoday.msu.edu/news/2016/new-technology-monitors-indoor-air-quality/'> MSU Today </a>"
        >
        </CodeBlock>


      </div>
      </div>

      <div className='publicationsBlock'>
      <div className='publicationsYear'>
        2015
      </div>
      <div className='publicationsContent'>

        <CodeBlock
          title = "DoppleSleep: A Contactless Unobtrusive Sleep Sensing System Using Short-Range Doppler Radar"
          authors = "Tauhidur Rahman, Alexander Adams, Ruth Ravichandran, Mi Zhang, Shwetak Patel, Julie Kientz, and Tanzeem Choudhury."
          conference = "ACM International Joint Conference on Pervasive and Ubiquitous Computing (<div class='pubHighlight'>UbiComp'15</div>)."
          rate = "Acceptance Rate: 93/394 = 23.6%"
          honor = "<span class='pubRedHighLight'>Best Paper Award Honorable Mention</span>"
          paper = "https://mi-zhang.github.io/papers/2015_UbiComp_DoppleSleep.pdf"
          bibtex = {DoppleSleep}
          media = "<a href='http://www.technologyreview.com/news/539961/got-sleep-problems-try-tracking-your-rest-with-radar/'> MIT Technology Review </a>"
        >
        </CodeBlock>

        <CodeBlock
          title = "MyBehavior: Automatic Personalized Health Feedback from User Behavior and Preference using Smartphones"
          authors = "Mashfiqui Rabbi, Min Hane Aung, Mi Zhang, and Tanzeem Choudhury."
          conference = "ACM International Joint Conference on Pervasive and Ubiquitous Computing (<div class='pubHighlight'>UbiComp'15</div>)."
          rate = "Acceptance Rate: 93/394 = 23.6%"
          paper = "https://mi-zhang.github.io/papers/2015_UbiComp_MyBehavior.pdf"
          bibtex = {MyBehavior}
          media = "<a href='http://www.technologyreview.com/news/539721/a-health-tracking-app-you-might-actually-stick-with/'> MIT Technology Review</a> | <a href='http://mashable.com/2015/07/30/health-tracking-app/'> Mashable </a>"
        >
        </CodeBlock>

        <CodeBlock
          title = "Mobile Phone Sensor Correlates of Depressive Symptom Severity in Daily-Life Behavior: An Exploratory Study"
          authors = "Sohrob Saeb, Mi Zhang, Christopher J. Karr, Stephen M. Schueller, Marya E. Corden, Konrad P. Kording, and David C. Mohr."
          conference = "Journal of Medical Internet Research (<div class='pubHighlight'>JMIR</div>), Volume 17, Issue 7, Pages e175, 2015."
          rate = "Impact Factor: 5.175"
          honor = "<span class='pubRedHighLight'>JMIR All-Time Top Article</span>"
          link = "http://www.jmir.org/2015/7/e175/"
          paper = "https://mi-zhang.github.io/papers/2015_JMIR_MobileDepression.pdf"
          bibtex = {MyBehavior}
          media = "<a href='http://time.com/3958128/smartphone-depression/'> TIME</a> |	<a href='http://www.cnn.com/2015/07/15/health/smartphone-depression-diagnosis/'> CNN</a> | <a href='http://techcrunch.com/2015/07/16/your-phone-can-tell-whether-youre-depressed/''> TechCrunch</a> | <a href='http://www.theverge.com/2015/7/15/8970269/smartphone-depression-mental-health-detect'> The Verge</a> | <a href='http://www.cbsnews.com/news/phone-habits-depression-mental-health/''> CBS News</a> | <a href='http://www.foxnews.com/health/2015/07/15/smartphone-sensors-may-detect-depression-study-says/'> Fox News</a> | <a href='http://news.discovery.com/tech/gear-and-gadgets/depressed-your-phone-already-knows-150715.htm'> Discovery News</a> | <a href='http://www.dailymail.co.uk/health/article-3162416/How-SMARTPHONE-diagnose-depression-Using-68-minutes-day-sign-mental-illness.html'> Daily Mail</a> | <a href='https://www.thetimes.co.uk/article/check-on-your-phone-for-signs-of-depression-vjf2q0jfh6v'> The Times</a> | <a href='http://www.newsweek.com/black-box-how-your-phone-can-tell-youre-depressed-354099'> Newsweek</a> | <a href='http://www.mirror.co.uk/lifestyle/health/smartphone-behaviour-could-diagnose-depression-6073355'> Mirror</a> | <a href='http://www.telegraph.co.uk/news/science/science-news/11741234/Spend-an-hour-on-your-smartphone-daily-You-could-be-depressed.html'> The Telegraph</a> | <a href='http://www.washingtonpost.com/news/to-your-health/wp/2015/07/16/how-your-cellphone-knows-if-youre-depressed-it-has-to-do-with-how-you-move-through-time-and-space/'> The Washington Post</a> | <a href='http://www.huffingtonpost.com/entry/your-phone-can-tell-if-youre-depressed_55a53e03e4b0b8145f73a97f'> The Huffington Post</a> | <a href='http://www.latimes.com/science/sciencenow/la-sci-sn-depressed-cellphone-20150715-story.html'> Los Angeles Times</a> | <a href='http://www.chicagotribune.com/bluesky/originals/ct-northwestern-feinberg-study-smartphones-depression-bsi-20150715-story.html'> Chicago Tribune</a> | <a href='http://www.futurity.org/depression-iphone-960892/''> Futurity</a> | <a href='https://www.webmd.com/depression/news/20150715/daily-smartphone-use-might-offer-clues-to-depression#1'> WebMD</a> | <a href='http://www.usnews.com/news/articles/2015/07/15/phones-can-help-detect-if-youre-depressed-study-says'> US News </a>"
        >
        </CodeBlock>

        <CodeBlock
          title = "The Relationship between Clinical, Momentary, and Sensor-based Assessment of Depression"
          authors = "Sohrob Saeb, Mi Zhang, Mary Kwasney, Christopher J. Karr, Konrad Kording, and David C. Mohr."
          conference = "International Conference on Pervasive Computing Technologies for Healthcare (<div class='pubHighlight'>PervasiveHealth'15</div>)."
          rate = "Acceptance Rate: 38%"
          paper = "https://mi-zhang.github.io/papers/2015_PervasiveHealth.pdf"
          bibtex = {PervasiveHealth}
        >
        </CodeBlock>

        <CodeBlock
          title = "Automated Personalized Feedback for Physical Activity and Dietary Behavior Change with Mobile Phones: A Randomized Controlled Trial on Adults"
          authors = "Mashfiqui Rabbi, Angela Pfammatter, Mi Zhang, Bonnie Spring, and Tanzeem Choudhury."
          conference = "Journal of Medical Internet Research (<div class='pubHighlight'>JMIR</div>) mHealth and uHealth, Volume 3, Issue 2, Pages e42, 2015."
          rate = "Impact Factor: 4.636"
          link = "http://mhealth.jmir.org/2015/2/e42/"
          paper = "https://mi-zhang.github.io/papers/2015_JMIR_MyBehavior.pdf"
          bibtex = {APFPAD}
          media = "<a href='http://mobihealthnews.com/45795/cornell-researchers-use-personalized-algorithm-in-weight-loss-app/'> MobiHealth News </a>"
        >
        </CodeBlock>

        <CodeBlock
          title = "An Intelligent Crowd-Worker Selection Approach for Reliable Content Labeling of Food Images"
          authors = "Mashfiqui Rabbi, Jean Costa, Fabian Okeke, Max Schachere, Mi Zhang, and Tanzeem Choudhury."
          conference = "ACM International Conference on Wireless Health (<div class='pubHighlight'>WH'15</div>)."
          rate = "Acceptance Rate: 28/106 = 26.4%"
          paper = "https://mi-zhang.github.io/papers/2015_WH_FoodLabel.pdf"
          bibtex = {FoodLabel}
        >
        </CodeBlock>

      </div>
      </div>

      <div className='publicationsBlock'>
      <div className='publicationsYear'>
        2014
      </div>
      <div className='publicationsContent'>

      <CodeBlock
          title = "BodyBeat: A Mobile System for Sensing Non-Speech Body Sounds"
          authors = "Tauhidur Rahman, Alexander Adams, Mi Zhang, Erin Cherry, Bobby Zhou, Huaishu Peng, and Tanzeem Choudhury."
          conference = "ACM International Conference on Mobile Systems, Applications, and Services (<div class='pubHighlight'>MobiSys'14</div>)."
          rate = "Acceptance Rate: 25/185 = 13.5%"
          honor = "<span class='pubRedHighLight'>ACM SIGMOBILE Research Highlight</span> [<a href='papers/2015_GetMobile_BodyBeat.pdf'> Highlight Article </a>]"
          paper = "https://mi-zhang.github.io/papers/2015_JMIR_MyBehavior.pdf"
          bibtex = {BodyBeat}
          media = "<a href='http://www.technologyreview.com/news/528386/wearable-self-tracking-tool-listens-for-yawns-coughs-and-munches/'> MIT Technology Review</a> |	<a href='http://blogs.wsj.com/digits/2014/07/03/chainsaws-gunshots-and-coughs-our-smartphones-are-listening/'> Wall Street Journal</a> | <a href='http://www.newscientist.com/article/mg22229734.900-listen-to-sounds-inside#.VAZpWPldV8F'> New Scientist </a>"
        >
        </CodeBlock>

        <CodeBlock
          title = "Towards Accurate Non-Intrusive Recollection of Stress Levels Using Mobile Sensing and Contextual Recall"
          authors = "Tauhidur Rahman, Mi Zhang, Stephen Voida, and Tanzeem Choudhury."
          conference = "International Conference on Pervasive Computing Technologies for Healthcare (<div class='pubHighlight'>PervasiveHealth'14</div>)."
          rate = "Acceptance Rate: 26%"
          paper = "https://mi-zhang.github.io/papers/2014_PervasiveHealth.pdf"
          bibtex = {TANIRSLU}
        >
        </CodeBlock>
      </div>
      </div>

      

      {/* <div className='publicationsYear'>
        2013 and Earlier
      </div>
      <div className='publicationsContent'>
        <div className='publicationsItem'>
          <div class="publicationsStrong">Human Daily Activity Recognition with Sparse Representation Using Wearable Sensors</div>
					
					Mi Zhang and Alexander A. Sawchuk. 
					<br />
					IEEE Journal of Biomedical and Health Informatics (J-BHI), Volume 17, Issue 3, Pages 553-560, 2013. 
                    <br />  
                    Impact Factor: 3.451 <br />
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Towards Practical Energy Expenditure Estimation with Mobile Phones</div>
					Harshvardhan Vathsangam, Mi Zhang, Alexander Tarashansky, Alexander A. Sawchuk, and Gaurav S. Sukhatme. 
					<br />
					The Annual Asilomar Conference on Signals, Systems, and Computers (ASILOMAR), 2013.  <br />
        </div>
        
        <div className='publicationsItem'>
          <div class="publicationsStrong">Motion Primitive-Based Human Activity Recognition Using a Bag-of-Features Approach</div>
					Mi Zhang and Alexander A. Sawchuk.
					<br />					
					ACM SIGHIT International Health Informatics Symposium (IHI), 2012. 
					<br />
                    Acceptance Rate: 18% <br />
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Towards Pervasive Physical Rehabilitation Using Microsoft Kinect</div>
					Chien-Yen Chang, Belinda Lange, Mi Zhang, Sebastian Koenig, Phil Requejo, Noom Somboon, Alexander Sawchuk, Albert Rizzo. 
					<br />
					International Conference on Pervasive Computing Technologies for Healthcare (PervasiveHealth), 2012. 
					<br />
                    Acceptance Rate: 30% <br />
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Beyond the Standard Clinical Rating Scales: Fine-Grained Assessment of Post-Stroke Motor Functionality Using Wearable Inertial Sensors</div>
					Mi Zhang, Belinda Lange, Chien-Yen Chang, Alexander A. Sawchuk, and Albert A. Rizzo. 
					<br />
					International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC), 2012. <br />
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">USC-HAD: A Daily Activity Dataset for Ubiquitous Activity Recognition Using Wearable Sensors</div>
					Mi Zhang and Alexander A. Sawchuk.
					<br />
					ACM International Conference on Ubiquitous Computing (UbiComp) Workshop, 2012. <br />
        </div>
        
        <div className='publicationsItem'>
          <div class="publicationsStrong">A Preliminary Study of Sensing Appliance Usage for Human Activity Recognition Using Mobile Magnetometer</div>
					Mi Zhang and Alexander A. Sawchuk. 
					<br />
				    ACM International Conference on Ubiquitous Computing (UbiComp) Workshop, 2012.
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Sparse Representation for Motion Primitive-Based Human Activity Modeling and Recognition Using Wearable Sensors</div>
					Mi Zhang, Wenyao Xu, Alexander A. Sawchuk, and Majid Sarrafzadeh. 
					<br />
					International Conference on Pattern Recognition (ICPR), 2012. 
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Robust Human Activity and Sensor Location Co-Recognition via Sparse Signal Representation</div>
					Wenyao Xu, Mi Zhang, Alexander A. Sawchuk, and Majid Sarrafzadeh. 
					<br />
					IEEE Transactions on Biomedical Engineering (TBME), Volume 59, Issue 11, Pages 3169-3176, 2012.
                    <br />  
                    Impact Factor: 3.577
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Co-Recognition of Human Activity and Sensor Location via Compressed Sensing in Wearable Body Sensor Networks</div>
					Wenyao Xu, Mi Zhang, Alexander A. Sawchuk, and Majid Sarrafzadeh. 
					<br />
					IEEE International Conference on Wearable and Implantable Body Sensor Networks (BSN), 2012.
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Manifold Learning and Recognition of Human Activity Using Body-Area Sensors</div>
					Mi Zhang and Alexander A. Sawchuk. 
					<br />
					IEEE International Conference on Machine Learning and Applications (ICMLA), 2011. 					
					<br />
                    Acceptance Rate: 27%	
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">A Feature Selection-Based Framework for Human Activity Recognition Using Wearable Multimodal Sensors</div>
					Mi Zhang and Alexander A. Sawchuk. 
					<br />
					International Conference on Body Area Networks (BodyNets), 2011.
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Context-Aware Fall Detection Using A Bayesian Network</div>
					Mi Zhang and Alexander A. Sawchuk. 
					<br />
					ACM International Conference on Ubiquitous Computing (UbiComp) Workshop, 2011.
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">OCRdroid: A Framework to Digitize Text Using Mobile Phones</div>
					Mi Zhang, Anand Joshi, Ritesh Kadmawala, Karthik Dantu, Sameera Poduri, and Gaurav S. Sukhatme. 
					<br />
					International Conference on Mobile Computing, Applications and Services (MobiCASE), 2009.
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">A Customizable Framework of Body Area Sensor Network for Rehabilitation</div>
					Mi Zhang and Alexander A. Sawchuk. 
					<br />
					International Symposium on Applied Sciences in Biomedical and Communication Technologies (ISABEL), 2009.
        </div>

      </div> */}
    </div>
  )
}

export default Publications