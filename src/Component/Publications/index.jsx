import React from 'react'
import PageNav from '../PageNav'
import SearchPaper from '../SearchPaper'
import './publications.css'
import ContentTitle from '../ContentTitle'

function Publications() {
  return (
    <div>

      <ContentTitle title = "Our Publications" subtitle = "Publications"></ContentTitle>

      {/* <div className='publicationsTitle'>
        Publications
      </div> */}
      
      <div className='publicationsYear'>
        Book
      </div>
      <div className='publicationsContent'>
        <div className='publicationsItem'>
          <div className='publicationsStrong'>创新工场讲AI课：从知识到实践 (Chinese) </div>
					李开复, 王咏刚, 张潼, 宋彦, 屠可伟, 张发恩, 唐剑, 张弥, 吴佳洪, 刘宁. <br />
          电子工业出版社, 2021. <br />
          [ <a href="https://item.jd.com/12830375.html">Purchase Link</a> ] 
        </div>
      </div>

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

        <div className='publicationsItem'>
          <div className="publicationsStrong">FedAudio: A Federated Learning Benchmark for Audio Tasks</div>
					Tuo Zhang, Tiantian Feng, Samiul Alam, Sunwoo Lee, Mi Zhang, Shrikanth S. Narayanan, and Salman Avestimehr. <br />
          IEEE International Conference on Acoustics, Speech and Signal Processing (<font style={{ fontWeight: 'bold' }}>ICASSP'23</font>). <br />
          [ <a href="papers/2023_ICASSP_FedAudio.pdf">Paper</a>  |  <a href="papers/2023_ICASSP_FedAudio.bib">BibTex</a> ]
        </div>
      </div>

      <div className='publicationsYear'>
        2022
      </div>
      <div className='publicationsContent'>
        <div className='publicationsItem'>
          <div className='publicationsStrong'>FedRolex: Model-Heterogeneous Federated Learning with Rolling Sub-Model Extraction</div>
          Samiul Alam, Luyang Liu, Ming Yan, and Mi Zhang. <br />
          Conference on Neural Information Processing Systems (<font style={{ fontWeight: 'bold' }}>NeurIPS'22</font>). <br />
          Acceptance Rate: 2665/10411 = 25.6%  <br />
          [ <a href="https://arxiv.org/abs/2212.01548">Paper</a> |   
                     <a href="papers/2022_NeurIPS_FedRolex.bib"> BibTex</a> |
                     <a href="https://github.com/MSU-MLSys-Lab/FedRolex"> Code</a>｜    
                     <a href="papers/2022_NeurIPS_FedRolex_Poster.pdf">Poster </a>] 
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">PyramidFL: A Fine-grained Client Selection Framework for Efficient Federated Learning</div>
					Chenning Li, Xiao Zeng, Mi Zhang, and Zhichao Cao. <br />
          ACM International Conference on Mobile Computing and Networking (<font style={{ fontWeight: 'bold' }}>MobiCom'22</font>).   <br />
          Acceptance Rate: 56/314 = 17.8%  <br />
                    [<a href="papers/2022_MobiCom_PyramidFL.pdf"> Paper</a> |
                     <a href="papers/2022_MobiCom_PyramidFL.bib"> BibTex </a>]

        </div>

        <div className='publicationsItem'>
        <div class="publicationsStrong">FedSEA: A Semi-Asynchronous Federated Learning Framework for Extremely Heterogeneous Devices</div>
					Jingwei Sun, Ang Li, Lin Duan, Samiul Alam, Xuliang Deng, Xin Guo, Haiming Wang, Maria Gorlatova, Mi Zhang, Hai Li, Yiran Chen. <br />
                    ACM Conference on Embedded Networked Sensor Systems (<font style={{ fontWeight: 'bold' }}>SenSys'22</font>). <br />
                    Acceptance Rate: 52/208 = 25%  <br />
                    [<a href="papers/2022_SenSys_FedSEA.pdf"> Paper</a> |
                     <a href="papers/2022_SenSys_FedSEA.bib"> BibTex </a>]    
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">FedTune: Automatic Tuning of Federated Learning Hyper-Parameters from System Perspective</div>
					Huanle Zhang, Mi Zhang, Xin Liu, Prasant Mohapatra, and Michael Delucia. <br />
                    IEEE Military Communications Conference (<font style={{ fontWeight: 'bold' }}>MILCOM'22</font>). <br />
                    [<a href="https://arxiv.org/abs/2110.03061"> Paper</a> |
                     <a href="papers/2022_MilCom_FedTune.bib"> BibTex </a>]  
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Federated Learning for Internet of Things: Applications, Challenges, and Opportunities</div>
					Tuo Zhang, Lei Gao, Chaoyang He, Mi Zhang, Bhaskar Krishnamachari, and Salman Avestimehr. <br />
                    IEEE Internet of Things Magazine (<font style={{ fontWeight: 'bold' }}>IEEE IoTM</font>), 2022.   <br />
                    [<a href="papers/2022_IEEEIoTM_FLIoTVision.pdf"> Paper</a> |
                     <a href="papers/2022_IEEEIoTM_FLIoTVision.bib"> BibTex </a>] 
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Deep AutoAugment</div>
					Yu Zheng, Zhi Zhang, Shen Yan, and Mi Zhang. <br />
                    International Conference on Learning Representations (<font style={{ fontWeight: 'bold' }}>ICLR'22</font>). <br />
                    Acceptance Rate: 1095/3391 = 32.3% <br />
                    [<a href="papers/2022_ICLR_DeepAA.pdf"> Paper</a> |   
                     <a href="papers/2022_ICLR_DeepAA.bib"> BibTex</a> |
                     <a href="https://github.com/MSU-MLSys-Lab/DeepAA"> Code</a>｜
                     <a href="https://paperswithcode.com/paper/deep-autoaugment-1">Leaderboard</a> |    
                     <a href="papers/2022_ICLR_DeepAA_Poster.pdf"> Poster</a> |    
                     <a href="papers/2022_ICLR_DeepAA_Slides.pdf"> Slides </a>] <br />
                    Media Coverage:
                    [<a href="https://syncedreview.com/2022/03/16/msu-aws-present-deepaa-fully-automated-data-augmentation-search-that-rivals-human-enhanced-approaches/"> Synced </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Multiview Transformers for Video Recognition</div>
					Shen Yan, Xuehan Xiong, Anurag Arnab, Zhichao Lu, Mi Zhang, Chen Sun, Cordelia Schmid. <br />
                    IEEE/CVF Conference on Computer Vision and Pattern Recognition (<b>CVPR'22</b>). <br />
                    Acceptance Rate: 2067/8161 = 25.3% <br />
                     [<a href="https://arxiv.org/abs/2201.04288"> Paper</a> |
                     <a href="papers/2022_CVPR_MTV.bib"> BibTex</a> |
                     <a href="https://github.com/google-research/scenic/tree/main/scenic/projects/mtv"> Code</a> |
                     <a href="https://paperswithcode.com/paper/multiview-transformers-for-video-recognition"> Leaderboard </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Ph.D. Thesis: New Perspectives in Neural Architecture Search: Architecture Embeddings, Efficient Performance Estimations, and their Applications</div>
					Shen Yan, 2022.
        </div>

      </div>

      <div className='publicationsYear'>
        2021
      </div>
      <div className='publicationsContent'>
        <div className='publicationsItem'>
          <div class="publicationsStrong">A Field Guide to Federated Optimization</div>
					Jianyu Wang, Zachary Charles, Zheng Xu, Gauri Joshi, H. Brendan McMahan, Blaise Aguera y Arcas, Maruan Al-Shedivat, Galen Andrew, Salman Avestimehr, Katharine Daly, Deepesh Data, Suhas Diggavi, Hubert Eichner, Advait Gadhikar, Zachary Garrett, Antonious M. Girgis, Filip Hanzely, Andrew Hard, Chaoyang He, Samuel Horvath, Zhouyuan Huo, Alex Ingerman, Martin Jaggi, Tara Javidi, Peter Kairouz, Satyen Kale, Sai Praneeth Karimireddy, Jakub Konecny, Sanmi Koyejo, Tian Li, Luyang Liu, Mehryar Mohri, Hang Qi, Sashank J. Reddi, Peter Richtarik, Karan Singhal, Virginia Smith, Mahdi Soltanolkotabi, Weikang Song, Ananda Theertha Suresh, Sebastian U. Stich, Ameet Talwalkar, Hongyi Wang, Blake Woodworth, Shanshan Wu, Felix X. Yu, Honglin Yuan, Manzil Zaheer, Mi Zhang, Tong Zhang, Chunxiang Zheng, Chen Zhu, Wennan Zhu. 
					<br />
                    [<a href="https://arxiv.org/abs/2107.06917"> Paper</a> |
                     <a href="papers/2021_FOGuide.bib"> BibTex </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Mercury: Efficient On-Device Distributed DNN Training via Stochastic Importance Sampling</div>
					Xiao Zeng, Ming Yan, and Mi Zhang. <br />
					ACM Conference on Embedded Networked Sensor Systems (<font style={{ fontWeight: 'bold' }}>SenSys'21</font>). <br />
                    Acceptance Rate: 25/139 = 18% <br />
                    [<a href="papers/2021_SenSys_Mercury.pdf"> Paper</a> | 
                     <a href="papers/2021_SenSys_Mercury.bib"> BibTex </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">FedMask: Joint Computation and Communication-Efficient Personalized Federated Learning via Heterogeneous Masking</div>
					Ang Li, Jingwei Sun, Xiao Zeng, Mi Zhang, Hai Li, and Yiran Chen. <br />
					ACM Conference on Embedded Networked Sensor Systems (<font style={{ fontWeight: 'bold' }}>SenSys'21</font>). <br />
                    Acceptance Rate: 25/139 = 18% <br />
                    [<a href="papers/2021_SenSys_FedMask.pdf"> Paper</a> | 
                     <a href="papers/2021_SenSys_FedMask.bib"> BibTex </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">NELoRa: Towards Ultra-low SNR LoRa Communication with Neural-enhanced Demodulation</div>
					Chenning Li, Hanqing Guo, Shuai Tong, Xiao Zeng, Zhichao Cao, Mi Zhang, Qiben Yan, Li Xiao, Jiliang Wang, and Yunhao Liu. <br />
					ACM Conference on Embedded Networked Sensor Systems (<font style={{ fontWeight: 'bold' }}>SenSys'21</font>). <br />
                    Acceptance Rate: 25/139 = 18% <br />
                    <font color="#de1111" style={{ fontWeight: 'bold' }}>Best Paper Award</font> | <font color="#de1111" style={{ fontWeight: 'bold' }}>ACM SIGMOBILE Research Highlight </font> [<a href="papers/2022_GetMobile_NELoRa.pdf"> Highlight Article </a>] 
                     <br />
                    [<a href="papers/2021_SenSys_NELoRa.pdf"> Paper</a> | 
                     <a href="papers/2021_SenSys_NELoRa.bib"> BibTex </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">DeepLoRa: Learning Accurate Path Loss Model for Long Distance Links in LPWAN</div>
					Li Liu, Yuguang Yao, Zhichao Cao, and Mi Zhang. <br />
                    IEEE International Conference on Computer Communications (<font style={{ fontWeight: 'bold' }}>INFOCOM'21</font>). <br />
                    Acceptance Rate: 252/1266 = 19.9% <br />
                    [<a href="papers/2021_INFOCOM_DeepLoRA.pdf"> Paper</a> | 
                     <a href="papers/2021_INFOCOM_DeepLoRA.bib"> BibTex </a>]
        </div>

        <div className='publicationsItem'>
        <div class="publicationsStrong">CATE: Computation-aware Neural Architecture Encoding with Transformers</div>
					Shen Yan, Kaiqiang Song, Fei Liu, and Mi Zhang. <br />
                    International Conference on Machine Learning (<font style={{ fontWeight: 'bold' }}>ICML'21</font>).   <br />
                    Acceptance Rate: 166/5513 = 3% (<font color="#de1111" style={{ fontWeight: 'bold' }}>Long Talk</font>) <br />
                    [<a href="https://arxiv.org/abs/2102.07108"> Paper</a> |
                     <a href="papers/2021_ICML_CATE.bib"> BibTex</a> |
                     <a href="https://github.com/MSU-MLSys-Lab/CATE"> Code</a> |
                     <a href="papers/2021_ICML_CATE_Poster.pdf"> Poster</a> |
                     <a href="https://icml.cc/virtual/2021/oral/9052"> Presentation </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Deep AutoAugment</div>
					Yu Zheng, Zhi Zhang, Shen Yan, and Mi Zhang. <br />
                    International Conference on Machine Learning (<font style={{ fontWeight: 'bold' }}>ICML'21</font>) Workshop on Machine Learning for Data. <br />
                    Note: the full version is accepted to ICLR'22.
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Towards Position-Independent Sensing for Gesture Recognition with Wi-Fi</div>
					Ruiyang Gao, Mi Zhang, Jie Zhang, Yang Li, Enze Yi, Dan Wu, Leye Wang, and Daqing Zhang. <br />
                    ACM International Joint Conference on Pervasive and Ubiquitous Computing (<font style={{ fontWeight: 'bold' }}>UbiComp'21</font>). <br />
                    [<a href="papers/2021_UbiComp_PIS.pdf">Paper</a> | 
                     <a href="papers/2021_UbiComp_PIS.bib">BibTex</a>]
        </div>

        <div className='publicationsItem'>
        <div class="publicationsStrong">Ph.D. Thesis: Collaborative Distributed Deep Learning Systems on the Edges</div>
					Xiao Zeng, 2021.    
        </div>


      </div>

      <div className='publicationsYear'>
        2020
      </div>
      <div className='publicationsContent'>
        <div className='publicationsItem'>
        <div class="publicationsStrong">Does Unsupervised Architecture Representation Learning Help Neural Architecture Search?</div>
					Shen Yan, Yu Zheng, Wei Ao, Xiao Zeng, and Mi Zhang. <br />
                    Conference on Neural Information Processing Systems (<font style={{ fontWeight: 'bold' }}>NeurIPS'20</font>). <br />
                    Acceptance Rate: 1900/9454 = 20.1%  <br />
                    [<a href="https://arxiv.org/pdf/2006.06936.pdf"> Paper</a> | 
                     <a href="papers/2020_NeurIPS_arch2vec.bib"> BibTex</a> | 
                     <a href="https://github.com/MSU-MLSys-Lab/arch2vec"> Code</a> |
                     <a href="papers/2020_NeurIPS_arch2vec_poster.pdf"> Poster</a> |
                     <a href="https://studio.slideslive.com/web_recorder/share/20201025T052954Z__NeurIPS_posters__18078__does-unsupervised-architecture?s=a7b5e575-accd-4aa1-ac55-a546282217a5"> Presentation </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">FedML: A Research Library and Benchmark for Federated Machine Learning</div>
					Chaoyang He, Songze Li, Jinhyun So, Xiao Zeng, Mi Zhang, Hongyi Wang, Xiaoyang Wang, Praneeth Vepakomma, Abhishek Singh, Hang Qiu, Li Shen, Peilin Zhao, Yan Kang, Yang Liu, Ramesh Raskar, Qiang Yang, Murali Annavaram, Salman Avestimehr.  <br />
                    Conference on Neural Information Processing Systems (<font style={{ fontWeight: 'bold' }}>NeurIPS'20</font>) Federated Learning Workshop (<font color="#de1111" style={{ fontWeight: 'bold' }}>Spotlight</font>).
                    <br />
                    <font color="#de1111" style={{ fontWeight: 'bold' }}>Best Paper Award</font> 
                    <br />
                    [<a href="https://arxiv.org/abs/2007.13518"> Paper</a> | 
                     <a href="papers/2020_NeurIPS-FL_FedML.bib"> BibTex</a> | 
                     <a href="https://github.com/FedML-AI/FedML"> Code </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">MutualNet: Adaptive ConvNet via Mutual Learning from Network Width and Resolution</div>
					Taojiannan Yang, Sijie Zhu, Chen Chen, Shen Yan, Mi Zhang, and Andrew Willis. <br />
					European Conference on Computer Vision (<font style={{ fontWeight: 'bold' }}>ECCV'20</font>).
                    <br />
                    Acceptance Rate: 104/5025 = 2% (<font color="#de1111" style={{ fontWeight: 'bold' }}>Oral</font>)
                    <br /> 
                    [<a href="papers/2020_ECCV_MutualNet.pdf"> Paper</a> | 
                     <a href="papers/2020_ECCV_MutualNet.bib"> BibTex</a> |
                     <a href="https://github.com/taoyang1122/MutualNet"> Code </a>] 
        </div>

        <div className='publicationsItem'>
        <div class="publicationsStrong">FlexDNN: Input-Adaptive On-Device Deep Learning for Efficient Mobile Vision</div>
					Biyi Fang, Xiao Zeng, Faen Zhang, Hui Xu, and Mi Zhang. 
					<br />
					ACM/IEEE Symposium on Edge Computing (<font style={{ fontWeight: 'bold' }}>SEC'20</font>).
                    <br />
                    Acceptance Rate: 21/96 = 21.9%
                    <br />
                    <font color="#de1111" style={{ fontWeight: 'bold' }}>Best Paper Award Nominee</font>     
                    <br />
                    [<a href="papers/2020_SEC_FlexDNN.pdf"> Paper</a> | 
                     <a href="papers/2020_SEC_FlexDNN.bib"> BibTex </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Distream: Scaling Live Video Analytics with Workload-Adaptive Distributed Edge Intelligence</div>
					Xiao Zeng, Biyi Fang, Haichen Shen, and Mi Zhang. 
					<br />
					ACM Conference on Embedded Networked Sensor Systems (<font style={{ fontWeight: 'bold' }}>SenSys'20</font>).
                    <br />
                    Acceptance Rate: 43/213 = 20.2%
                    <br />    
                    [<a href="papers/2020_SenSys_Distream.pdf"> Paper</a> | 
                     <a href="papers/2020_SenSys_Distream.bib"> BibTex </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Wi-Fi See It All: Generative Adversarial Network-augmented Versatile Wi-Fi Imaging</div>
					Chenning Li, Zheng Liu, Yuguang Yao, Zhichao Cao, Mi Zhang, and Yunhao Liu. 
					<br />
					ACM Conference on Embedded Networked Sensor Systems (<font style={{ fontWeight: 'bold' }}>SenSys'20</font>).
                    <br />
                    Acceptance Rate: 43/213 = 20.2%    
                    <br />    
                    [<a href="papers/2020_SenSys_WiSIA.pdf"> Paper</a> | 
                     <a href="papers/2020_SenSys_WiSIA.bib"> BibTex </a>] 
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">SecWIR: Securing Smart Home IoT Communications via Wi-Fi Routers with Embedded Intelligence</div>
					Xinyu Lei, Guan-Hua Tu, Chi-Yu Li, Tian Xie, and Mi Zhang. 
					<br />
					ACM International Conference on Mobile Systems, Applications, and Services (<font style={{ fontWeight: 'bold' }}>MobiSys'20</font>).
                    <br />
                    Acceptance Rate: 34/175 = 19.4%    
                    <br />
                    [<a href="papers/2020_MobiSys_SecWIR.pdf"> Paper</a> | 
                     <a href="papers/2020_MobiSys_SecWIR.bib"> BibTex </a>] 
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">SCYLLA: QoE-aware Continuous Mobile Vision with FPGA-based Dynamic Deep Neural Network Reconfiguration</div>
					Shuang Jiang, Zhiyao Ma, Xiao Zeng, Chenren Xu, Mi Zhang, Chen Zhang, and Yunxin Liu. 
					<br />
					IEEE International Conference on Computer Communications (<font style={{ fontWeight: 'bold' }}>INFOCOM'20</font>).
                    <br />
                    Acceptance Rate: 268/1354 = 19.8%
                    <br />
                    [<a href="papers/2020_INFOCOM_Scylla.pdf"> Paper</a> | 
                     <a href="papers/2020_INFOCOM_Scylla.bib"> BibTex </a>] 
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Deep Learning in the Era of Edge Computing: Challenges and Opportunities</div>
					Mi Zhang, Faen Zhang, Nicholas D. Lane, Yuanchao Shu, Xiao Zeng, Biyi Fang, Shen Yan, and Hui Xu. 
					<br />
					Book chapter in Fog Computing: Theory and Practice, Wiley, 2020.
                    <br />    
                    <font color="#0949b1" style={{ fontWeight: 'bold' }}>Invited Article</font>
                    <br />
                    [<a href="papers/2020_BookChapter_DLEdge.pdf"> Paper</a> | 
                     <a href="papers/2020_BookChapter_DLEdge.bib"> BibTex </a>]
        </div>

      </div>

      <div className='publicationsYear'>
        2019
      </div>
      <div className='publicationsContent'>
        <div className='publicationsItem'>
          <div class="publicationsStrong">DQS: A Framework for Designing Tiny Neural Networks for On-Device AI</div>
					Yu Zheng<sup>*</sup>, Shen Yan<sup>*</sup>, and Mi Zhang. 
					<br />
					Conference on Neural Information Processing Systems (<font style={{ fontWeight: 'bold' }}>NeurIPS'19</font>) Google MicroNet Challenge.
                    <br />
                    <font color="#de1111" style={{ fontWeight: 'bold' }}>Google MicroNet Challenge (CIFAR-100 Track) 4th Place Winner (1st Place in U.S. and Canada)</font>
                    <br /> 
                    [<a href="https://github.com/MSU-MLSys-Lab/MSUNet"> Code </a>]   
                    <br />    
                    Media Coverage:
                    [<a href="https://msutoday.msu.edu/news/2020/msu-team-focused-on-ai-earns-recognition-at-google-micronet-challenge/"> MSU Today </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">HM-NAS: Efficient Neural Architecture Search via Hierarchical Masking</div>
					Shen Yan, Biyi Fang, Faen Zhang, Yu Zheng, Xiao Zeng, Hui Xu, and Mi Zhang. 
					<br />
					International Conference on Computer Vision (<font style={{ fontWeight: 'bold' }}>ICCV'19</font>) Neural Architects Workshop.
                    <br />
                    <font color="#de1111" style={{ fontWeight: 'bold' }}>Best Paper Award Nominee</font> 
                    <br />
                    [<a href="papers/2019_ICCVW_HM-NAS.pdf"> Paper</a> | 
                     <a href="papers/2019_ICCVW_HM-NAS.bib"> BibTex </a>]   
                    <br />
                    Media Coverage:
                    [<a href="https://www.jiqizhixin.com/articles/2019-10-31-5"> JiQiZhiXin </a>]
        </div>

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

        <div className='publicationsItem'>
          <div class="publicationsStrong">Mobile Sensing of Alertness, Sleep, and Circadian Rhythm: Hardware and Software Platforms</div>
					Akane Sano, Tauhidur Rahman, Mi Zhang, Deepak Ganesan, and Tanzeem Choudhury. 
					<br />
					ACM SIGMOBILE Mobile Computing and Communications Review (<font style={{ fontWeight: 'bold' }}>GetMobile</font>), Volume 23, Issue 3, 2019.
                    <br />
                    <font color="#0949b1" style={{ fontWeight: 'bold' }}>Invited Article</font> 
                    <br />
                    [<a href="papers/2019_GetMobile_MobileSensing.pdf"> Paper</a> | 
                     <a href="papers/2019_GetMobile_MobileSensing.bib"> BibTex </a>]
        </div>

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

      <div className='publicationsYear'>
        2018
      </div>
      <div className='publicationsContent'>
        <div className='publicationsItem'>
          <div class="publicationsStrong">NestDNN: Resource-Aware Multi-Tenant On-Device Deep Learning for Continuous Mobile Vision</div>
					Biyi Fang<sup>*</sup>, Xiao Zeng<sup>*</sup>, and Mi Zhang. 
					<br />
					ACM International Conference on Mobile Computing and Networking (<font style={{ fontWeight: 'bold' }}>MobiCom'18</font>).
                    <br />
                    Acceptance Rate: 42/187 = 22.5%
                    <br />
                    [<a href="papers/2018_MobiCom_NestDNN.pdf"> Paper</a> | 
                     <a href="papers/2018_MobiCom_NestDNN.bib"> BibTex</a> | 
                     <a href="https://www.youtube.com/watch?v=a7h0gPTuPfg"> Video </a>]    
                    <br />
                    Media Coverage:
                    [<a href="https://www.jiqizhixin.com/articles/2018-10-18-17"> JiQiZhiXin </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Efficient Federated Learning via Variational Dropout</div>
					Wei Du, Xiao Zeng, Ming Yan, and Mi Zhang. 
					<br />
                    OpenReview
                    <br />    
					[<a href="https://openreview.net/forum?id=BkeAf2CqY7">Paper</a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">The Dark Side of Operational Wi-Fi Calling Services</div>
					Tian Xie, Guan-Hua Tu, Chi-Yu Li, Chunyi Peng, Jiawei Li, and Mi Zhang. 
					<br />
					IEEE Conference on Communications and Network Security (<font style={{ fontWeight: 'bold' }}>CNS'18</font>).
					<br />
                    Acceptance Rate: 52/181 = 28.7% 
                    <br />
                    <font color="#de1111" style={{ fontWeight: 'bold' }}>Best Paper Award</font> | <font color="#de1111" style={{ fontWeight: 'bold' }}>Google Security Reward</font>  
                    <br />
                    [<a href="papers/2018_CNS_WiFiCalling.pdf"> Paper</a> |
                    <a href="papers/2018_CNS_WiFiCalling.bib"> BibTex </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">When Virtual Reality Meets Internet of Things in the Gym: Enabling Immersive Interactive Machine Exercises</div>
					Fazlay Rabbi<sup>*</sup>, Taiwoo Park<sup>*</sup>, Biyi Fang, Mi Zhang, and Youngki Lee. 
					<br />
					ACM International Joint Conference on Pervasive and Ubiquitous Computing (<font style={{ fontWeight: 'bold' }}>UbiComp'18</font>).   
                    <br />
                    [<a href="papers/2018_UbiComp_JARVIS.pdf"> Paper</a> | 
                    <a href="papers/2018_UbiComp_JARVIS.bib"> BibTex </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">When Mixed Reality Meets Internet of Things: Toward the Realization of Ubiquitous Mixed Reality</div>
					Taiwoo Park, Mi Zhang, and Youngki Lee. 
					<br />
					ACM SIGMOBILE Mobile Computing and Communications Review (<font style={{ fontWeight: 'bold' }}>GetMobile</font>), Volume 22, Issue 1, 2018.
                    <br />
                    <font color="#0949b1" style={{ fontWeight: 'bold' }}>Invited Article</font>   
                    <br /> 
                    [<a href="papers/2018_GetMobile_UbiquitousMR.pdf"> Paper</a> | 
                    <a href="papers/2018_GetMobile_UbiquitousMR.bib"> BibTex </a>] 
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Exploring User Needs for a Mobile Behavioral-Sensing Technology for Depression Management: Qualitative Study</div>
					Jingbo Meng, Syed Ali Hussain, David C. Mohr, Mary Czerwinski, and Mi Zhang. 
					<br />
				    Journal of Medical Internet Research (<font style={{ fontWeight: 'bold' }}>JMIR</font>) Special Issue on Computing and Mental Health, 2018.
                    <br />
                    Impact Factor: 5.175
                    <br />    
                    [<a href="http://www.jmir.org/2018/7/e10139/"> Link</a> | 
                    <a href="papers/2018_JMIR_iSeeNeed.pdf"> Paper</a> |    
                    <a href="papers/2018_JMIR_iSeeNeed.bib"> BibTex </a>]
        </div>

      </div>

      <div className='publicationsYear'>
        2017
      </div>
      <div className='publicationsContent'>
        <div className='publicationsItem'>
          <div class="publicationsStrong">MobileDeepPill: A Small-Footprint Mobile Deep Learning System for Recognizing Unconstrained Pill Images</div>
					
					Xiao Zeng, Kai Cao, and Mi Zhang. 
					<br />
					ACM International Conference on Mobile Systems, Applications, and Services (<font style={{ fontWeight: 'bold' }}>MobiSys'17</font>). 										
					<br />
                    Acceptance Rate: 34/188 = 18% 
                    <br />
                    <font color="#de1111" style={{ fontWeight: 'bold' }}>NIH Pill Image Recognition Challenge First Place Winner</font>    
                    <br />
                    [<a href="papers/2017_MobiSys_MobileDeepPill.pdf"> Paper</a> | 
                     <a href="papers/2017_MobiSys_MobileDeepPill.bib"> BibTex</a> | 
                     <a href="https://www.youtube.com/watch?v=-k7awuoW2rg&feature=youtu.be"> Video </a>]  
                    <br />
                    Media Coverage:
                    [<a href="https://www.nlm.nih.gov/news/pillimagerecognitionchallenge.html"> NIH</a> |
                    <a href="http://www.wxyz.com/news/msu-professor-working-on-mobile-solution-to-identify-pills"> ABC 7 (TV)</a> |
                    <a href="http://msutoday.msu.edu/news/2016/nih-challenge-winner-helping-solve-pill-recognition-problem/"> MSU Today </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">DeepASL: Enabling Ubiquitous and Non-Intrusive Word and Sentence-Level Sign Language Translation</div>
					Biyi Fang, Jillian Co, and Mi Zhang. 
					<br />
					ACM Conference on Embedded Networked Sensor Systems (<font style={{ fontWeight: 'bold' }}>SenSys'17</font>).
					<br />
                    Acceptance Rate: 26/151 = 17% 
                    <br />
                    [<a href="papers/2017_SenSys_DeepASL.pdf"> Paper</a> | 
                    <a href="papers/2017_SenSys_DeepASL.bib"> BibTex </a>]   
                    <br />    
                    Media Coverage:
                    [<a href="https://www.youtube.com/watch?v=TwI1aeWz9Dc&feature=youtu.be"> NSF (video)</a> | 
                    <a href="https://www.youtube.com/watch?v=7HzUr9let48"> MSU (video)</a> |
                    <a href="https://news.developer.nvidia.com/ai-can-interpret-and-translate-american-sign-language-sentences/"> NVIDIA</a> |
                    <a href="https://www.smithsonianmag.com/innovation/sign-language-translators-are-cool-but-are-they-useful-180971535/"> Smithsonian</a> | 
                    <a href="https://www.michiganradio.org/post/stateside-asl-translation-technology-ingham-countys-first-public-defender-sen-peters-pfas"> NPR (radio interview)</a> |     
                    <a href="https://msutoday.msu.edu/news/2019/new-technology-breaks-through-sign-language-barriers/"> MSU Today</a> |
                    <a href="https://www.aau.edu/research-scholarship/featured-research-topics/new-technology-breaks-through-sign-language-barriers"> AAU</a> |    
                     <a href="https://www.futurity.org/sign-language-translator-1984022/"> Futurity </a>]
        </div>

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

        <div className='publicationsItem'>
          <div class="publicationsStrong">Personal Sensing: Understanding Mental Health Using Ubiquitous Sensors and Machine Learning</div>
					David C. Mohr, Mi Zhang, and Stephen M. Schueller. 
					<br />
					Annual Review of Clinical Psychology (<font style={{ fontWeight: 'bold' }}>ARCP</font>), Volume 13, Pages 23-47, 2017. 
                    <br />
                    Impact Factor: 12.214  
                    <br />
                    <font color="#0949b1" style={{ fontWeight: 'bold' }}>Invited Article</font>    
					<br />
                    [<a href="http://www.annualreviews.org/doi/abs/10.1146/annurev-clinpsy-032816-044949"> Link</a> | 
                     <a href="papers/2017_ARCP_PersonalSensing.pdf"> Paper</a> | 
                     <a href="papers/2017_ARCP_PersonalSensing.bib"> BibTex </a>]
        </div>

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

      <div className='publicationsYear'>
        2016
      </div>
      <div className='publicationsContent'>
        <div className='publicationsItem'>
          <div class="publicationsStrong">BodyScan: Enabling Radio-based Sensing on Wearable Devices for Contactless Activity and Vital Sign Monitoring</div>
					
					Biyi Fang, Nicholas D. Lane, Mi Zhang, Aidan Boran, and Fahim Kawsar. 
					<br />
					ACM International Conference on Mobile Systems, Applications, and Services (<font style={{ fontWeight: 'bold' }}>MobiSys'16</font>). 										
					<br />
                    Acceptance Rate: 31/197 = 15.7%
                    <br />
                    [<a href="papers/2016_MobiSys_BodyScan.pdf"> Paper</a> | 
                     <a href="papers/2016_MobiSys_BodyScan.bib"> BibTex</a> |
                     <a href="https://www.youtube.com/watch?v=lcYDVcU7-m0&feature=youtu.be"> Video </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">HeadScan: A Wearable System for Radio-based Sensing of Head and Mouth-related Activities</div>
					
					Biyi Fang, Nicholas D. Lane, Mi Zhang, and Fahim Kawsar. 
					<br />
					ACM/IEEE International Conference on Information Processing in Sensor Networks (<font style={{ fontWeight: 'bold' }}>IPSN'16</font>). 	
                    <br />    
					Acceptance Rate: 23/117 = 19.7%
                    <br />
                    [<a href="papers/2016_IPSN_HeadScan.pdf">Paper</a> | 
                    <a href="papers/2016_IPSN_HeadScan.bib">BibTex</a>]
                    <br />
                    Media Coverage:	
                    [<a href="http://scopeblog.stanford.edu/2016/05/25/engineers-develop-new-type-of-wearable-device/"> Stanford Medicine</a> |    
                    <a href="http://www.medgadget.com/2016/05/headscan-keeps-jaw-radar-view.html"> MedGadget</a> |    
                    <a href="http://www.futurity.org/headscan-wearables-1165962-2/?utm_source=Futurity+Today&utm_campaign=4b768f71bd-May_19_20165_19_2016&utm_medium=email&utm_term=0_e34e8ee443-4b768f71bd-206324325"> Futurity</a> |
                    <a href="http://msutoday.msu.edu/news/2016/wearable-technology-could-help-detect-health-risks-depression/"> MSU Today</a> |
                    <a href="http://www.fox2detroit.com/good-day/194845994-story"> Fox 2 (TV interview)</a> |
                    <a href="http://readwrite.com/2016/05/23/health-wearable-monitors-patients-depression-ht4/"> ReadWrite </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">AirSense: An Intelligent Home-based Sensing System for Indoor Air Quality Analytics</div>
					
					Biyi Fang, Qiumin Xu, Taiwoo Park, and Mi Zhang. 
					<br />
					ACM International Joint Conference on Pervasive and Ubiquitous Computing (<font style={{ fontWeight: 'bold' }}>UbiComp'16</font>). 										
					<br />
                    Acceptance Rate: 114/481 = 23.7%
                    <br />
                    [<a href="papers/2016_UbiComp_AirSense.pdf"> Paper</a> | 
                    <a href="papers/2016_UbiComp_AirSense.bib"> BibTex </a>]
                    <br />
                    Media Coverage:
                    [<a href="https://www.theatlantic.com/sponsored/dyson/are-you-polluting-your-own-home/1838/"> The Atlantic</a> |
                    <a href="http://www.futurity.org/airsense-indoor-pollution-1295542-2/"> Futurity</a> |
                    <a href="http://msutoday.msu.edu/news/2016/new-technology-monitors-indoor-air-quality/"> MSU Today </a>]
        </div>

      </div>

      <div className='publicationsYear'>
        2015
      </div>
      <div className='publicationsContent'>
        <div className='publicationsItem'>
          <div class="publicationsStrong">DoppleSleep: A Contactless Unobtrusive Sleep Sensing System Using Short-Range Doppler Radar</div>
						
            Tauhidur Rahman, Alexander Adams, Ruth Ravichandran, Mi Zhang, Shwetak Patel, Julie Kientz, and Tanzeem Choudhury. 
            <br />
            ACM International Joint Conference on Pervasive and Ubiquitous Computing (<font style={{ fontWeight: 'bold' }}>UbiComp'15</font>).
                      <br />    
            Acceptance Rate: 93/394 = 23.6%
                      <br />
                      <font color="#de1111" style={{ fontWeight: 'bold' }}>Best Paper Award Honorable Mention</font>
                      <br />
                      [<a href="papers/2015_UbiComp_DoppleSleep.pdf"> Paper</a> | 
                      <a href="papers/2015_UbiComp_DoppleSleep.bib"> BibTex </a>]
                  <br />    
                      Media Coverage:													
                  [<a href="http://www.technologyreview.com/news/539961/got-sleep-problems-try-tracking-your-rest-with-radar/"> MIT Technology Review </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">MyBehavior: Automatic Personalized Health Feedback from User Behavior and Preference using Smartphones</div>
					Mashfiqui Rabbi, Min Hane Aung, Mi Zhang, and Tanzeem Choudhury. 
					<br />
					ACM International Joint Conference on Pervasive and Ubiquitous Computing (<font style={{ fontWeight: 'bold' }}>UbiComp'15</font>).			
                    <br />    
					Acceptance Rate: 93/394 = 23.6%
					<br />
                    [<a href="papers/2015_UbiComp_MyBehavior.pdf"> Paper</a> | 
                    <a href="papers/2015_UbiComp_MyBehavior.bib"> BibTex </a>]
					<br />
                    Media Coverage:															
					[<a href="http://www.technologyreview.com/news/539721/a-health-tracking-app-you-might-actually-stick-with/"> MIT Technology Review</a> |
					<a href="http://mashable.com/2015/07/30/health-tracking-app/"> Mashable </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Mobile Phone Sensor Correlates of Depressive Symptom Severity in Daily-Life Behavior: An Exploratory Study</div>
						
            Sohrob Saeb, Mi Zhang, Christopher J. Karr, Stephen M. Schueller, Marya E. Corden, Konrad P. Kording, and David C. Mohr. 
            <br />
            Journal of Medical Internet Research (<font style={{ fontWeight: 'bold' }}>JMIR</font>), Volume 17, Issue 7, Pages e175, 2015.  
            <br />
                      Impact Factor: 5.175
                      <br />
                      <font color="#de1111" style={{ fontWeight: 'bold' }}>JMIR All-Time Top Article</font>    
                      <br />    
                      [<a href="http://www.jmir.org/2015/7/e175/"> Link</a> | 
                      <a href="papers/2015_JMIR_MobileDepression.pdf"> Paper</a> |    
                      <a href="papers/2015_JMIR_MobileDepression.bib"> BibTex </a>]
            <br />
            Media Coverage:															
            [<a href="http://time.com/3958128/smartphone-depression/"> TIME</a> |	
                      <a href="http://www.cnn.com/2015/07/15/health/smartphone-depression-diagnosis/"> CNN</a> |
            <a href="http://techcrunch.com/2015/07/16/your-phone-can-tell-whether-youre-depressed/"> TechCrunch</a> |
            <a href="http://www.theverge.com/2015/7/15/8970269/smartphone-depression-mental-health-detect"> The Verge</a> |
            <a href="http://www.cbsnews.com/news/phone-habits-depression-mental-health/"> CBS News</a> |
            <a href="http://www.foxnews.com/health/2015/07/15/smartphone-sensors-may-detect-depression-study-says/"> Fox News</a> |
            <a href="http://news.discovery.com/tech/gear-and-gadgets/depressed-your-phone-already-knows-150715.htm"> Discovery News</a> |
                      <a href="http://www.dailymail.co.uk/health/article-3162416/How-SMARTPHONE-diagnose-depression-Using-68-minutes-day-sign-mental-illness.html"> Daily Mail</a> |
                      <a href="https://www.thetimes.co.uk/article/check-on-your-phone-for-signs-of-depression-vjf2q0jfh6v"> The Times</a> |
                      <a href="http://www.newsweek.com/black-box-how-your-phone-can-tell-youre-depressed-354099"> Newsweek</a> |
                      <a href="http://www.mirror.co.uk/lifestyle/health/smartphone-behaviour-could-diagnose-depression-6073355"> Mirror</a> |
                      <a href="http://www.telegraph.co.uk/news/science/science-news/11741234/Spend-an-hour-on-your-smartphone-daily-You-could-be-depressed.html"> The Telegraph</a> |
            <a href="http://www.washingtonpost.com/news/to-your-health/wp/2015/07/16/how-your-cellphone-knows-if-youre-depressed-it-has-to-do-with-how-you-move-through-time-and-space/"> The Washington Post</a> |
            <a href="http://www.huffingtonpost.com/entry/your-phone-can-tell-if-youre-depressed_55a53e03e4b0b8145f73a97f"> The Huffington Post</a> |
                      <a href="http://www.latimes.com/science/sciencenow/la-sci-sn-depressed-cellphone-20150715-story.html"> Los Angeles Times</a> | 
                      <a href="http://www.chicagotribune.com/bluesky/originals/ct-northwestern-feinberg-study-smartphones-depression-bsi-20150715-story.html"> Chicago Tribune</a> |     
                      <a href="http://www.futurity.org/depression-iphone-960892/"> Futurity</a> |    
                      <a href="https://www.webmd.com/depression/news/20150715/daily-smartphone-use-might-offer-clues-to-depression#1"> WebMD</a> |     
            <a href="http://www.usnews.com/news/articles/2015/07/15/phones-can-help-detect-if-youre-depressed-study-says"> US News </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">The Relationship between Clinical, Momentary, and Sensor-based Assessment of Depression</div>
						
            Sohrob Saeb, Mi Zhang, Mary Kwasney, Christopher J. Karr, Konrad Kording, and David C. Mohr. 
            <br />
            International Conference on Pervasive Computing Technologies for Healthcare (<font style={{ fontWeight: 'bold' }}>PervasiveHealth'15</font>).
                      <br />    
            Acceptance Rate: 38%
            <br />
                      [<a href="papers/2015_PervasiveHealth.pdf">Paper</a> | 
                      <a href="papers/2015_PervasiveHealth.bib">BibTex</a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Automated Personalized Feedback for Physical Activity and Dietary Behavior Change with Mobile Phones: A Randomized Controlled Trial on Adults</div>
					Mashfiqui Rabbi, Angela Pfammatter, Mi Zhang, Bonnie Spring, and Tanzeem Choudhury. 
					<br />
					Journal of Medical Internet Research (<font style={{ fontWeight: 'bold' }}>JMIR</font>) mHealth and uHealth, Volume 3, Issue 2, Pages e42, 2015. 
					<br />
					Impact Factor: 4.636
                    <br />
                    [<a href="http://mhealth.jmir.org/2015/2/e42/"> Link</a> | 
                    <a href="papers/2015_JMIR_MyBehavior.pdf"> Paper</a> |    
                    <a href="papers/2015_JMIR_MyBehavior.bib"> BibTex </a>]
					<br />
					Media Coverage:
					[<a href="http://mobihealthnews.com/45795/cornell-researchers-use-personalized-algorithm-in-weight-loss-app/"> MobiHealth News </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">An Intelligent Crowd-Worker Selection Approach for Reliable Content Labeling of Food Images</div>
						
            Mashfiqui Rabbi, Jean Costa, Fabian Okeke, Max Schachere, Mi Zhang, and Tanzeem Choudhury. 
            <br />
            ACM International Conference on Wireless Health (<font style={{ fontWeight: 'bold' }}>WH'15</font>).
                      <br />
                      Acceptance Rate: 28/106 = 26.4%
            <br />
                      [<a href="papers/2015_WH_FoodLabel.pdf"> Paper</a> | 
                      <a href="papers/2015_WH_FoodLabel.bib"> BibTex </a>]
        </div>
      </div>

      <div className='publicationsYear'>
        2014
      </div>
      <div className='publicationsContent'>
        <div className='publicationsItem'>
          <div class="publicationsStrong">BodyBeat: A Mobile System for Sensing Non-Speech Body Sounds</div>
					Tauhidur Rahman, Alexander Adams, Mi Zhang, Erin Cherry, Bobby Zhou, Huaishu Peng, and Tanzeem Choudhury. 
					<br />
					ACM International Conference on Mobile Systems, Applications, and Services (<font style={{ fontWeight: 'bold' }}>MobiSys'14</font>).   
					<br />
                    Acceptance Rate: 25/185 = 13.5%
                    <br />
                    <font color="#de1111" style={{ fontWeight: 'bold' }}>ACM SIGMOBILE Research Highlight</font> [<a href="papers/2015_GetMobile_BodyBeat.pdf"> Highlight Article </a>]    
                    <br />
                    [<a href="papers/2014_MobiSys_BodyBeat.pdf"> Paper</a> | <a href="papers/2014_MobiSys_BodyBeat.bib"> BibTex </a>]
					<br />
					Media Coverage:
					[<a href="http://www.technologyreview.com/news/528386/wearable-self-tracking-tool-listens-for-yawns-coughs-and-munches/"> MIT Technology Review</a> |
					<a href="http://blogs.wsj.com/digits/2014/07/03/chainsaws-gunshots-and-coughs-our-smartphones-are-listening/"> Wall Street Journal</a> |
    <a href="http://www.newscientist.com/article/mg22229734.900-listen-to-sounds-inside#.VAZpWPldV8F"> New Scientist </a>]
        </div>

        <div className='publicationsItem'>
          <div class="publicationsStrong">Towards Accurate Non-Intrusive Recollection of Stress Levels Using Mobile Sensing and Contextual Recall</div>
					Tauhidur Rahman, Mi Zhang, Stephen Voida, and Tanzeem Choudhury. 
					<br />
					International Conference on Pervasive Computing Technologies for Healthcare (<font style={{ fontWeight: 'bold' }}>PervasiveHealth'14</font>).    
                    <br />    
					Acceptance Rate: 26%
                    <br />
                    [<a href="papers/2014_PervasiveHealth.pdf"> Paper</a> | <a href="papers/2014_PervasiveHealth.bib"> BibTex </a>]
        </div>
      </div>

      <div className='publicationsYear'>
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

      </div>
    </div>
  )
}

export default Publications