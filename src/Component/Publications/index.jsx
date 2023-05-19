import React from 'react'
import PageNav from '../PageNav'
import SearchPaper from '../SearchPaper'
import './publications.css'
import ContentTitle from '../ContentTitle'

function Publications() {
  return (
    <div>

      <ContentTitle title = "Our Publications" subtitle = "Publications"></ContentTitle>

      <div className='searchBar'>
        <SearchPaper></SearchPaper>
      </div>
      

      <div className='pageNav'>
        <PageNav data={
          [
            { value: '<span style="font-weight: bold;">创新工场讲AI课：从知识到实践 (Chinese)</span><br>李开复, 王咏刚, 张潼, 宋彦, 屠可伟, 张发恩, 唐剑, 张弥, 吴佳洪, 刘宁.<br>电子工业出版社, 2021.<br>[<a href="https://item.jd.com/12830375.html" style="color: blue;">Purchase Link</a>]'},
            { value: '<span style="font-weight: bold;">NELoRa-Bench: A Benchmark for Neural-enhanced LoRa Demodulation</span><br>Jialuo Du, Yidong Ren, Mi Zhang, Yunhao Liu, and Zhichao Cao.<br>International Conference on Learning Representations (<span style="font-weight: bold;">ICLR\'23</span>) Workshop on Machine Learning for IoT (<font color="#de1111"><span style="font-weight: bold;">Oral</span></font>).'},
            { value: '<span style="font-weight: bold;">TimelyFL: Heterogeneity-aware Asynchronous Federated Learning with Adaptive Partial Training</span><br>Tuo Zhang, Lei Gao, Sunwoo Lee, Mi Zhang, and Salman Avestimehr. <br>IEEE Conference on Computer Vision and Pattern Recognition (<span style="font-weight: bold;">CVPR\'23</span>) Workshop on Federated Learning for Computer Vision.'},
            { value: '<span style="font-weight: bold;">FedAudio: A Federated Learning Benchmark for Audio Tasks</span><br> Tuo Zhang, Tiantian Feng, Samiul Alam, Sunwoo Lee, Mi Zhang, Shrikanth S. Narayanan, and Salman Avestimehr. <br>IEEE International Conference on Acoustics, Speech and Signal Processing (<span style="font-weight: bold;">ICASSP\'23</span>).<br>[<a href="papers/2023_ICASSP_FedAudio.pdf" style="color: blue;">Paper</a> |  <a href="papers/2023_ICASSP_FedAudio.bib" style="color: blue;">BibTex</a>]'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
            { value: 'data1'},
          ]
        }
        ></PageNav>
      </div>
    </div>
  )
}

export default Publications