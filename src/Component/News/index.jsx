import React from 'react'
import PageNav from '../PageNav'
import './news.css'
import ContentTitle from '../ContentTitle'

function News() {
  return (
    <div>
      <ContentTitle title = "Our News" subtitle = "News"></ContentTitle>

      <div className='pageNav'>
        <PageNav data={
          [
            { value: `<span style="font-weight: bold;">01/2023:</span> Feel extremely honored and excited to receive the inaugural <a href="https://minghsiehece.usc.edu/groups-and-institutes-sipi-sipi-50th-anniversary-awardees/" style="color: blue;">USC ECE SIPI Distinguished Alumni Award</a> in the Junior/Academia category for my contributions to mobile/edge computing in my early career.`},
            { value: '<span style="font-weight: bold;">01/2023:</span> Congratulations Samiul for being awarded the highly competitive OSU College Allocated Fellowship!'},
            { value: '<span style="font-weight: bold;">12/2022:</span> Thanks Meta Reality Labs for the generous faculty award for supporting our research!'},
            { value: '<span style="font-weight: bold;">09/2022:</span> <a href="https://arxiv.org/abs/2212.01548" style="color: blue;">FedRolex</a>, our work on model-heterogeneous federated learning is accepted to NeurIPS\'22.'},
            ]
        }
        ></PageNav>
      </div>
    </div>
  )
}

export default News