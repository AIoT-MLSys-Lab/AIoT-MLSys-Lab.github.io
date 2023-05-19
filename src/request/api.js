import service from "./index";

//
export const apiArticleEdit = info => service.post('/api/v1/articleEdit', info);


//前端调用接口要try catch

// import React, { Component } from 'react'
//  import { apiArticleEdit } from './request/api'
// export default class App extends Component {
//   componentDidMount() { 
//     // 调用api接口，并且提供了两个参数
//     let params = { type: 2, author: '北孤清茶' }
//     apiArticleEdit(params).then(res => { 
//       // 获取数据成功后的其他操作
//       //.....
//       console.log(res)
//     })
//   }
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
