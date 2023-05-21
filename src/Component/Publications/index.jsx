import React from 'react'
import PageNav from '../PageNav'
import SearchPaper from '../SearchPaper'
import './publications.css'
import ContentTitle from '../ContentTitle'

function Publications() {
  return (
    <div>

      <ContentTitle title = "Our Publications" subtitle = "Publications"></ContentTitle>

      <div className='publicationsTitle'>
        Publications
      </div>
      
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
          
        </div>
      </div>
    </div>
  )
}

export default Publications